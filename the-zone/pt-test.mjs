// pt-BR check: plays the game in Portuguese by clicking random buttons and flags text that still reads as English.
// Run: NODE_PATH=$(npm root -g) node pt-test.mjs [clicks]
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
page.on('dialog', d => d.dismiss());
await page.goto('file://' + path.join(here, 'index.html'));
const clicks = +process.argv[2] || 3000;

const found = await page.evaluate(n => {
    setLang('pt');
    S.startPerk = Object.keys(PERKS)[0]; startGame(); render();
    // Words that don't occur in Portuguese text; item/weapon names that are kept in English are stripped first.
    const EN = /(?<!\p{L})(the|you|your|and|of|to|is|with|for|from|are|has|have|this|that|into|it|its|on|in|at|by|an|or|not|be|will|can|out|all|they|their|them|was|but|Search|Rest|Leave|Travel|Back|Buy|Sell|Take|Talk|Ask|Accept|Attack|Move|Reload|Cover|Throw|Day|Hunger|Thirst|Rank|Reward|Level|Tier|Failed|Hit|Miss|enemy|left|right|none|days?)(?!\p{L})/u;
    const keep = [...Object.keys(WEAPONS), ...Object.keys(ARMOR), ...Object.keys(ARTS), ...Object.keys(MODS), ...Object.keys(DETECTORS)].sort((a, b) => b.length - a.length);
    const bad = {};
    const check = s => {
        for (let line of s.split('\n')) {
            line = line.trim(); if (!line) continue;
            let t = line; for (const k of keep) if (t.includes(k)) t = t.split(k).join('');
            if (EN.test(t)) bad[line] = (bad[line] || 0) + 1;
        }
    };
    const harvest = () => {
        for (const id of ['left-col', 'main-tabs']) check($(id).innerText);
        const v = $('view').cloneNode(true); v.querySelectorAll('.grid').forEach(g => g.remove()); document.body.append(v); check(v.innerText); v.remove();
        document.querySelectorAll('.log-new').forEach(e => check(e.textContent));
    };
    let inCombat = 0;
    for (let i = 0; i < n; i++) {
        S.p.hp = Math.max(S.p.hp, 60); S.p.hunger = S.p.thirst = S.p.tired = 8; S.p.ru = Math.max(S.p.ru, 2000);
        if (mode === 'dead') { S.p.hp = 100; mode = 'world'; render(); }
        if (mode === 'combat' && ++inCombat > 80) { leaveArea(true); inCombat = 0; render(); }
        if (mode !== 'combat') inCombat = 0;
        if (mode === 'endgame') { resolveEnding(); render(); }
        const btns = [...document.querySelectorAll('#view button:not([disabled]), #main-tabs button, #left-col button:not([disabled])')];
        freshLog();
        if (btns.length) btns[Math.floor(Math.random() * btns.length)].click();
        harvest();
    }
    return bad;
}, clicks);
await browser.close();
const lines = Object.entries(found).sort((a, b) => b[1] - a[1]);
for (const [l, c] of lines) console.log(String(c).padStart(5), l);
console.log(`${lines.length} suspect line(s)` + (errors.length ? `\nJS errors:\n${errors.join('\n')}` : ''));
if (errors.length) process.exitCode = 1;
