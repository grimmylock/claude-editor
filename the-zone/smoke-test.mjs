// Smoke test: drives index.html in headless Chromium and fails on any JS error or broken invariant.
// Run: NODE_PATH=$(npm root -g) node smoke-test.mjs
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import path from 'path';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const here = path.dirname(fileURLToPath(import.meta.url));
const browser = await chromium.launch(process.env.CHROMIUM ? { executablePath: process.env.CHROMIUM } : {});
const page = await browser.newPage();
const errors = [];
page.on('pageerror', e => errors.push(e.stack || String(e)));
page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
await page.goto('file://' + path.join(here, 'index.html'));

const fail = msg => { console.error('FAIL:', msg); process.exitCode = 1; };
const ev = fn => page.evaluate(fn);

// Character creation through the real UI.
await page.click('text=Ex-Military');
await page.click('text=Controlled Taps');
await page.click('text=ENTER THE ZONE');
if (await ev(() => mode) !== 'world') fail('creation did not start the game');
if (await ev(() => eqW().name) !== 'AKS-74U') fail('loadout weapon not equipped');
if (await ev(() => eqW().mag) !== 30) fail('magazine not topped off from starting ammo');

// A Dark Room loop: scavenge -> fire -> Yefim.
for (let i = 0; i < 60 && !(await ev(() => S.c.yefim)); i++) {
    await page.click('text=Scavenge the fence-line');
    if (await ev(() => S.c.fire === 0 && count('Wood') >= 5)) await page.click('text=Light the fire');
}
if (!(await ev(() => S.c.lit && S.c.yefim))) fail('fire/Yefim progression did not unlock');
if (!(await ev(() => availableTabs().includes('zone') && availableTabs().includes('trader')))) fail('tabs not unlocked');

// Trader: buy ammo + sell, quests.
await ev(() => { S.p.ru = 5000; tab = 'trader'; render(); });
await page.click('text=Bandage — 40 Ru');
if (await ev(() => count('Bandage')) < 1) fail('baseline purchase failed');
await ev(() => { tab = 'quests'; render(); });
await page.click('text=★ Old Debts');
await ev(() => { addItem('Mutant Trophy (T1)', 2); render(); });
await page.click('text=Turn in');
if (await ev(() => S.w.prog.quests) !== 1 || await ev(() => S.w.arc) !== 1) fail('arc quest turn-in failed');

// Auto-play combat in every zone with a hostile encounter, many times.
const zones = await ev(() => Object.keys(ZONES).filter(z => !ZONES[z].safe));
let fights = 0, cleared = 0;
for (let round = 0; round < 6; round++) {
    for (const z of zones) {
        const res = await page.evaluate(zone => {
            S.w.zone = zone; S.p.hp = 100; S.p.st = { bleed: false, toxic: false, rad: false, arm: false, leg: false, prone: false, drain: 0 };
            S.w.story.done = false;
            for (const f of ['Frag Grenade', 'Smoke Grenade', 'Flashbang', 'Basic Medkit']) S.p.inv[f] = 2;
            addAmmo('5.45x39mm', 'Standard', 300); addAmmo('5.45x39mm', 'Hollow Point', 60); topOffAll();
            let enc = null; for (let i = 0; i < 50 && !(enc && enc.hostile); i++) enc = rollEncounter(zone);
            if (!enc || !enc.hostile) enc = mutantGroup(ZONES[zone].tier);
            enterTactical(zone, enc.units); render();
            const actions = [() => playerAttack(false), () => playerAttack(true), () => reload(), () => aim(), () => takeCover(), () => evasive(),
                () => intimidate(), () => searchAnomaly(), () => interact(), () => dodgeLeap(), () => clearJam(), () => standUp(),
                () => { C.pending = pick(['Frag Grenade', 'Smoke Grenade', 'Flashbang']); const t = curTarget() || C.units[0]; gridClick(t.x, t.y); },
                () => useItem('Basic Medkit'), () => cycleAmmo(eqW()), () => equipWeapon(pick(S.p.weapons).id)];
            for (let turn = 0; turn < 40 && mode === 'combat'; turn++) {
                S.p.hp = Math.max(S.p.hp, 60); // keep the auto-player alive long enough to exercise the AI
                const vis = C.units.filter(u => active(u));
                if (vis.length) C.target = pick(vis).id;
                const t = curTarget();
                if (t) moveTo(clamp(t.x + d(3) - 2, 0, C.W - 1), clamp(t.y + d(3) - 2, 0, C.H - 1));
                for (let a = 0; a < 6 && mode === 'combat' && myTurn(); a++) { pick(actions)(); afterAction(); }
                if (mode !== 'combat') break;
                // invariants
                if (C.px < 0 || C.px >= C.W || C.py < 0 || C.py >= C.H || !'.C=^~'.includes(C.map[C.py][C.px])) return { err: `player off-map/in wall at ${C.px},${C.py} in ${zone}` };
                for (const u of C.units) if (onMap(u) && (u.x < 0 || u.x >= C.W || u.y < 0 || u.y >= C.H || !'.C=^~'.includes(C.map[u.y][u.x]))) return { err: `${u.name} off-map/in wall at ${u.x},${u.y} in ${zone}` };
                endTurn(); afterAction();
            }
            const out = { mode, cleared: !!(C && C.cleared) };
            if (mode === 'combat') {
                if (C.cleared) { const panel = C.loot.filter(l => !l.taken); panel.forEach(takeLoot); C.units.filter(u => u.surrendered && !u.resolved).forEach(u => prisoner(u, pick(['loot', 'free', 'execute', 'interrogate']))); leaveArea(false); }
                else leaveArea(true);
            }
            if (mode === 'endgame') resolveEnding(pick(ENDINGS)[0]);
            if (mode === 'dead') { S.p.hp = 100; mode = 'world'; }
            render();
            return out;
        }, z);
        if (res.err) fail(res.err);
        fights++; if (res.cleared || res.mode === 'endgame') cleared++;
        if (errors.length) break;
    }
    if (errors.length) break;
}
console.log(`fights: ${fights}, cleared: ${cleared}`);
if (cleared === 0) fail('auto-player never cleared a fight');

// Save / death / load round-trip.
await ev(() => { mode = 'world'; S.w.zone = 'The Perimeter'; S.p.ru = 1234; saveGame(); });
await ev(() => { die(); render(); });
await page.click('text=Load last save');
if (await ev(() => mode) !== 'world' || await ev(() => S.p.ru) !== 1234) fail('load after death failed');
if (await page.isDisabled('text=Scavenge the fence-line')) fail('buttons stay disabled after load');

// Every tab renders.
for (const t of ['camp', 'zone', 'trader', 'quests', 'sheet']) await ev(t2 => { tab = t2; render(); }, t);
await ev(() => { S.w.zone = "Scavenger's Hub"; tab = 'hub'; render(); });

if (errors.length) fail('page errors:\n' + errors.slice(0, 5).join('\n'));
await browser.close();
if (!process.exitCode) console.log('OK');
