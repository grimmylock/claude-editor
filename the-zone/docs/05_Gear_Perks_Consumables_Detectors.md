# Perks, Consumables, Shop & Interactive Objects

## Perks

One at creation; more at the ranks listed in file 00, Section 13. Any perk can be taken regardless
of current weapons. **Reaction** perks follow the Reactions rules (file 00, Section 5).

### Sniper Rifles / DMR

|Perk|Effect|
|-|-|
|Marksman's Focus|+2 to attack rolls when firing a Sniper Rifle.|
|High-Velocity Impact|When attacking with a Sniper Rifle at 12+ tiles, ignore an additional 20% of the target's Phys-DR — stacks with the weapon's own innate ignore-% trait, if it has one.|
|Overwatch (Reaction)|Hold 2 AP at the end of your turn. If an enemy enters your line of sight before your next turn, spend the held AP to immediately make one attack against them with your Sniper Rifle.|

### Assault Rifles

|Perk|Effect|
|-|-|
|Recoil Control|Removes the burst-fire attack penalty entirely for assault rifles (-2 to -4 depending on the rifle), making burst fire the clearly stronger choice (at the cost of its higher ammo use) whenever you've got the ammo to spare.|
|Controlled Taps|Regain 1 AP the first time each turn an attack roll's chosen die comes up 15+ (**once per turn**, capped at your max AP — this refunds, it doesn't bank extra).|
|Suppressive Fire|3 AP. Targets a point within your assault rifle's range; every enemy within 4 tiles of it is **Suppressed** (see Firefight Mechanics in the GM Master Prompt), and must also succeed an Agility check (DC 13) or lose 2 AP at the start of their next turn.|

### SMG

|Perk|Effect|
|-|-|
|Bullet Hose|SMG bursts have no attack penalty against targets within 4 tiles (normally -1).|
|Run and Gun|Once per turn, spend 1 AP to gain 2 bonus MP usable immediately before or after a single-fire attack this turn — move and shoot in the same motion, on top of your normal MP.|
|Hit and Run|After making an attack, immediately gain 2 free bonus MP for the rest of that turn.|

### HMG (Heavy Weapons)

|Perk|Effect|
|-|-|
|Entrenched|+20% Phys-DR against incoming attacks if you used 0 MP this turn (still subject to the 75% Phys-DR cap).|
|Shredder|Burst Fire rolls with Advantage (roll 2d20, take the higher) but consumes double the normal ammo for that burst.|
|Walking Tank|Ignores the "MP capped at 2 while held" restriction that Heavy Weapons normally carry.|

### Shotguns

|Perk|Effect|
|-|-|
|Breacher|+4 raw shotgun damage within 4 tiles (non-melee).|
|Buckshot Spread|A single shotgun attack roll can also hit one enemy adjacent to the original target — check the same roll against that second target's AC too; each one it hits takes damage independently (own Phys-DR/cover/ammo-type math applies separately to each).|
|Staggering Blast|A shotgun hit within 4 tiles also drains 2 MP from the target, applied at the start of their next turn (same timing as the Electro anomaly's AP drain).|

### Sidearms

|Perk|Effect|
|-|-|
|Gunslinger|Requires two sidearms, one in each hand. **DUAL-SHOT ALWAYS COSTS 2 AP** A single-fire attack action now fires both — two independent attack rolls (one per weapon) with a -1 to hit each, each shot resolved fully per Section 6 (ammo type, cover, crits — all apply per shot as normal). **Can't be combined with Double Tap.** Reloading covers both weapons in one action but costs the normal reload AP **+1**. (In case of the chiappa rhino's passive or the DOUBLE TAP PERK, only single follow up shots from it benefit from it's AP reduction passive. Ex: Player uses Dual-shot with an rsh-12 and a chiappa rhino, the player can proceed to use either 2 single shots from the rhino for 1 ap each, or another dual-shot costing 2 AP)
|Double Tap| Firing twice in the same action costs 3 AP total instead of 4. Not usable with Gunslinger dual-shots but can be used for follow up shots with a single sidearm (see example in the GUNSLINGER perk description).|
|Point-Blank Execution| Sidearm attacks ignore the target's cover AC bonus.|

### Melee

|Perk|Effect|
|-|-|
|Blade Dancer|Your first melee attack each turn costs 2 AP, the next two cost 1 AP each — **maximum 3 melee attacks per turn**.|
|Desperate Parry (Reaction)|Hold 1 AP at the end of your turn. When a melee attack against you would hit, spend it to roll an Agility check (DC 14) — success negates all damage from that attack.|

### Action, Economy & Survival

|Perk|Effect|
|-|-|
|Combat Medic|Medkits and stimpaks heal +10 HP more than listed. AP cost unchanged.|
|Quick Hands|All reloads cost 0 AP for the rest of combat, not just the first.|
|Gunsmith|Clearing a weapon jam costs 0 AP instead of 1.|
|Sprinter|+2 MP per turn.|
|Tactical Reposition|Gain 1 free MP per turn, usable only to reach or make use of cover — not general movement. On a turn you end your move in cover, you also get +1 AC until your next turn.|
|Adrenaline Surge (Reaction)|The first time your HP drops below 30 in a combat, immediately gain 2 bonus AP usable right away (even outside your normal turn) and 20 temporary HP.|
|Vault|Moving across cover tiles costs 0 MP.|
|Pack Mule|Base carry capacity increases to 50kg (instead of 25kg).|
|Iron Stomach|Food/water items (MRE, etc.) restore double their normal Hunger/Thirst amount (an MRE restores +4/+4 instead of +2/+2).|
|Anomaly Whisperer|+2 to Anomaly Avoidance checks.|
|Scavenger|When rolling how many items a loot source yields (a footlocker's item count, an NPC's 1d10+rank-bonus extra-loot roll), roll twice and take the higher result.|
|Iron Will|Temporary HP (from Stimpaks) lasts 8 turns instead of 4.|
|Artifact Handler|All equipped artifacts' Anom-DR penalties are halved.|
|Haggler|15% better prices in both directions — pay 15% less buying, receive 15% more selling.|

---

## Consumables

|Item|Effect|AP|
|-|-|-|
|Basic / Military / Scientific Medkit|+20 / +40 / +60 permanent HP|2|
|Basic / Military / Scientific Stimpak|+15 / +25 / +40 temporary HP for 4 turns|2|
|Bandage|Cures Bleeding or treats one Wound|2|
|Antirad Pill|Cures Irradiated|2|
|MRE|+10 HP; +2 Hunger/+2 Thirst (eaten automatically as the travel toll)|2|
|Energy Drink|+10 temporary HP and +1 MP|2|

Combat Medic adds +10 to any HP value above.

---

## Shop — Two Layers

Every trader has two separate pools: **Layer 1** (this list — always in stock, unlimited, fixed
price, never rolled) and **Layer 2** (rolled stock — file 07).

### Layer 1 — Baseline

|Item|Price|Weight|Notes|
|-|-|-|-|
|Basic Medkit|100 Ru|1.0kg| |
|Basic Stimpak|120 Ru|0.5kg| |
|Bandage|40 Ru|0.2kg| |
|Antirad Pill|60 Ru|0.2kg| |
|MRE|50 Ru|0.5kg| |
|Energy Drink|40 Ru|0.3kg| |
|Ammo box: Standard / Hollow Point / Dart / Armor Piercing|150 / 250 / 400 / 600 Ru|1.0kg|Any caliber; rounds per box by weapon category (file 01)|
|Frag Grenade / Smoke Grenade / Flashbang|250 / 150 / 200 Ru|0.5kg|File 01|
|Field Repair Kit|300 Ru|1.0kg|Out of combat: +1 Condition step to one item, never above Dirty|
|Small Canvas Sack|80 Ru|0.5kg|Backpack, +10kg|

**Selling Mutant Parts:** every trader buys them, never sells them. Value by the mutant's tier
(file 08, Section 3). Each part weighs 2.0kg.

Prices may shift ±10-30% for remoteness, danger or reputation. Quantity is never limited: 5 medkits
asked for = 5 medkits sold.

### Layer 2 — Rolled stock

Weapons, armor, artifacts, armor mods, detectors, better backpacks, Military/Scientific medkits
and stimpaks. Rolled per trader (file 07). Rough price by tier: T1 250-500 · T2 500-1,500 ·
T3 1,500-4,000 · T4 4,000-10,000 · T5 10,000-25,000 Ru. Tier 6 legendaries are never sold.

---

## Interactive Objects

Offer the check (player picks the better stat if two are listed).

|Object|Stat|DC|Reward|
|-|-|-|-|
|Encrypted PDA|Intelligence|14|120 Ru of intel/credits|
|Electronic Lock|Agility or Intelligence|15|180 Ru + one roll on the zone's loot table (minimum Tier 3); reroll Junk and cash results|
|Rusted Blast Door|Strength|16|Opens a new path (no loot)|

Invent more in the same shape (stat, DC, reward) when the story needs them: safes, elevators,
vaults, terminals.
