// Smoke test: drives index.html in headless Chromium and fails on any JS error or broken invariant.
// Run: NODE_PATH=$(npm root -g) node smoke-test.mjs
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import path from 'path';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const here = path.dirname(fileURLToPath(import.meta.url));
const browser = await chromium.launch();
const page = await browser.newPage();
const errors = [];
page.on('pageerror', e => errors.push(e.stack || String(e)));
page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
await page.goto('file://' + path.join(here, 'index.html'));

const fail = msg => { console.error('FAIL:', msg); process.exitCode = 1; };
const ev = (fn, arg) => page.evaluate(fn, arg);

// Data integrity: grids, prices, pools, zone links.
const dataErrs = await ev(() => {
    const out = [];
    for (const key in GRIDS) {
        const r = GRIDS[key].rows;
        if (r.some(x => x.length !== r[0].length)) out.push(`grid ${key} has ragged rows`);
        if (!r.join('').match(/[.e]/)) out.push(`grid ${key} has no floor`);
    }
    for (const z in ZONES) {
        ZONES[z].lms.forEach(([lm, g]) => { if (!GRIDS[g]) out.push(`${z}/${lm} -> missing grid ${g}`); });
        ZONES[z].to.forEach(t => { if (!ZONES[t]) out.push(`${z} links to unknown ${t}`); else if (!ZONES[t].to.includes(z) && ZONES[t].sub !== z) out.push(`${z} -> ${t} is one-way`); });
        if (ZONES[z].sub && !ZONES[ZONES[z].sub]) out.push(`${z} sub-node missing`);
    }
    for (const n in WEAPONS) { const b = bandOf('weapon', n); if (!b || !(b[1] > 0)) out.push(`no price band for ${n}`); }
    for (const n in ARMOR) if (!ARMOR_BAND[n]) out.push(`no price band for ${n}`);
    for (const n in MODS) if (!poolTier('mod', n)) out.push(`mod ${n} not in any pool`);
    for (let t = 1; t <= 5; t++) for (const c in POOLS[t]) POOLS[t][c].forEach(n => { if (!(WEAPONS[n] || ARMOR[n] || MODS[n] || ARTS[n] || DETECTORS[n] || BACKPACKS[n] || ITEMS[n])) out.push(`pool item ${n} unknown`); });
    for (const id in OUTPOSTS) if (!ZONES[OUTPOSTS[id].zone]) out.push(`outpost ${id} zone unknown`);
    for (let i = 0; i < 2000; i++) {
        const t = 1 + (i % 6);
        for (const it of rollLoot(t, ['trader', 'npc', 'container'][i % 3])) {
            if (it.kind !== 'ru' && !(it.price > 0)) out.push(`loot ${it.kind} ${it.name} has no price`);
            if (it.kind === 'weapon' && WEAPONS[it.name].tier === 5 && i % 3 === 0) out.push('trader rolled a Tier 5 weapon');
        }
    }
    return [...new Set(out)];
});
dataErrs.forEach(fail);

// Character creation through the real UI.
await page.click('text=Ex-Military');
await page.click('text=Controlled Taps');
await page.click('text=ENTER THE ZONE');
if (await ev(() => mode) !== 'world') fail('creation did not start the game');
if (await ev(() => eqW().mag) !== 30) fail('magazine not topped off from starting ammo');

// A Dark Room loop: scavenge -> fire -> Yefim.
for (let i = 0; i < 80 && !(await ev(() => S.c.yefim)); i++) {
    await page.click('text=Scavenge the fence-line');
    if (await ev(() => S.c.fire === 0 && count('Wood') >= 5)) await page.click('text=Light the fire');
}
if (!(await ev(() => S.c.lit && S.c.yefim))) fail('fire/Yefim progression did not unlock');
if (!(await ev(() => availableTabs().includes('trade') && availableTabs().includes('quests')))) fail('trade/quest tabs not unlocked');

// Trader + quest generation everywhere.
await ev(() => { S.p.ru = 50000; tab = 'trade'; render(); });
await page.click('text=Bandage — 40 Ru');
const qErr = await ev(() => {
    const out = [];
    for (const id in OUTPOSTS) { S.w.zone = OUTPOSTS[id].zone; S.w.rep.Obelisk = 3; S.w.rep.Garrison = 3; S.w.rep.Contractors = 3; S.w.goalDone.Contractors = true; S.c.yefim = true; tab = 'trade'; render(); tab = 'quests'; render(); }
    QB.forEach(def => { const q = makeQuest(def, def.board, def.giver); if (!(q.ru > 0) || !q.objs.length) out.push(`bad quest ${def.id}`); });
    for (const id in ARCS) ARCS[id].stages.forEach((st, i) => { S.w.arcs[id] = i; const q = arcOffer(id); if (!q && id !== 'iryna') out.push(`no arc offer ${id}:${i}`); });
    S.w.arcs = {};
    return out;
});
qErr.forEach(fail);

// Yefim's arc stage 1 end-to-end: accept, explore the landmark, leave, turn in.
await ev(() => { S.w.zone = 'The Perimeter'; S.w.offers = {}; tab = 'quests'; render(); });
await page.click('text=★ Fence Mending');
await ev(() => { S.w.quests[0].comp = 1; explore('Checkpoint Gate'); render(); });
await ev(() => { if (mode === 'combat') { C.units.forEach(u => { u.alive = false; }); checkClear(); leaveArea(false); } render(); });
await ev(() => { tab = 'quests'; render(); });
await page.click('text=Turn in to Old Man Yefim');
if (await ev(() => S.w.arcs.yefim) !== 1) fail('Yefim stage 1 did not complete');

// Auto-play combat in every zone/landmark, many times.
const lms = await ev(() => Object.keys(ZONES).flatMap(z => ZONES[z].lms.map(([lm]) => [z, lm])));
let fights = 0, cleared = 0;
for (let round = 0; round < 3; round++) {
    for (const [z, lm] of lms) {
        const res = await page.evaluate(([zone, lm]) => {
            mode = 'world'; S.w.zone = zone; S.p.hp = 100; S.p.st = { bleed: false, toxic: false, rad: false, arm: false, leg: false, prone: false, drain: 0 };
            S.w.story.done = false;
            for (const f of ['Frag Grenade', 'Smoke Grenade', 'Flashbang', 'Basic Medkit']) S.p.inv[f] = 2;
            addAmmo('5.45x39mm', 'Standard', 300); addAmmo('5.45x39mm', 'Hollow Point', 60); topOffAll();
            let enc = null; for (let i = 0; i < 50 && !(enc && enc.hostile); i++) enc = rollEncounter(zone, lm);
            if (!enc || !enc.hostile) enc = mutantGroup(zoneTier(zone));
            enterTactical(zone, lm, enc.units, enc); render();
            const actions = [() => playerAttack(false), () => playerAttack(true), () => reload(), () => aim(), () => takeCover(), () => evasive(),
                () => intimidate(), () => searchAnomaly(), () => interact(), () => dodgeLeap(), () => clearJam(), () => standUp(),
                () => { C.pending = pick(['Frag Grenade', 'Smoke Grenade', 'Flashbang']); const t = curTarget() || C.units[0]; gridClick(t.x, t.y); },
                () => useItem('Basic Medkit'), () => cycleAmmo(eqW()), () => equipWeapon(pick(S.p.weapons).id)];
            for (let turn = 0; turn < 40 && mode === 'combat'; turn++) {
                S.p.hp = Math.max(S.p.hp, 60);
                const vis = C.units.filter(u => active(u));
                if (vis.length) C.target = pick(vis).id;
                const t = curTarget();
                if (t) moveTo(clamp(t.x + d(3) - 2, 0, C.W - 1), clamp(t.y + d(3) - 2, 0, C.H - 1));
                for (let a = 0; a < 6 && mode === 'combat' && myTurn(); a++) { pick(actions)(); afterAction(); }
                if (mode !== 'combat') break;
                if (!'.C=^~t'.includes(C.map[C.py][C.px])) return { err: `player in wall at ${C.px},${C.py} in ${zone}/${lm}` };
                for (const u of C.units) if (onMap(u) && (u.x < 0 || u.x >= C.W || u.y < 0 || u.y >= C.H || !'.C=^~t'.includes(C.map[u.y][u.x]))) return { err: `${u.name} off-map/in wall at ${u.x},${u.y} in ${zone}/${lm}` };
                endTurn(); afterAction();
            }
            const out = { mode, cleared: !!(C && C.cleared) };
            if (mode === 'combat') {
                if (C.cleared) { C.loot.filter(l => !l.taken).forEach(takeLoot); C.units.filter(u => u.surrendered && !u.resolved).forEach(u => prisoner(u, pick(['loot', 'free', 'execute', 'interrogate']))); render(); leaveArea(false); }
                else leaveArea(true);
            }
            if (mode === 'endgame') resolveEnding();
            if (mode === 'dead') { S.p.hp = 100; mode = 'world'; }
            render();
            return out;
        }, [z, lm]);
        if (res.err) fail(res.err);
        fights++; if (res.cleared || res.mode === 'endgame') cleared++;
        if (errors.length) break;
    }
    if (errors.length) break;
}
console.log(`fights: ${fights}, cleared: ${cleared}`);
if (cleared === 0) fail('auto-player never cleared a fight');

// Living world: many days, every event and goal path.
await ev(() => { mode = 'world'; S.w.emission = 0; for (let i = 0; i < 120; i++) { newDay(i % 2 === 0); S.w.emission = 0; } render(); });
if (await ev(() => Object.keys(S.w.goalDone).length) === 0) fail('no faction goal ever filled in 120 days');

// Main story: fragments, sponsor, Last Gate, ending effects.
const story = await ev(() => {
    mode = 'world';
    Object.assign(S.w.story, { alpha: true, beta: true, gamma: true, sponsor: null, done: false });
    S.w.zone = 'The Siege Ward'; tab = 'zone'; render();
    chooseSponsor('Alone'); travel('The Reactor Core', true);
    if (mode !== 'combat') return 'no boss fight on arrival';
    C.units.forEach(u => { if (u.boss) killUnit(u, true); u.alive = false; }); checkClear();
    if (mode !== 'endgame') return 'boss kill did not open the Last Gate';
    render(); resolveEnding();
    return S.w.story.done && S.p.arts.includes('The Black Star (Awakened)') && S.p.maxHpBonus === 10 ? '' : 'ending did not apply';
});
if (story) fail(story);

// Save / death / load round-trip.
await ev(() => { mode = 'world'; S.w.zone = 'The Perimeter'; S.p.ru = 1234; saveGame(); });
await ev(() => { die(); render(); });
await page.click('text=Load last save');
if (await ev(() => mode) !== 'world' || await ev(() => S.p.ru) !== 1234) fail('load after death failed');

// Every tab renders, including the Hub.
for (const t of ['camp', 'zone', 'trade', 'quests', 'sheet']) await ev(t2 => { tab = t2; render(); }, t);
await ev(() => { S.w.zone = "Scavenger's Hub"; tab = 'hub'; render(); tab = 'quests'; render(); });

if (errors.length) fail('page errors:\n' + errors.slice(0, 5).join('\n'));
await browser.close();
if (!process.exitCode) console.log('OK');
