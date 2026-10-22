# Economy — Selling, NPC Loot, Mutant Parts, Quest Rewards, Technician

The ±10-30% remoteness/reputation price adjustment (file 00, Section 12) applies on top of
everything here.

**Roll every range.** Whenever a value is a range (reward band, item count, cash find), the player
rolls for it; the GM never picks a number in the middle. If no standard die fits, name the closest
formula and show it (e.g. 150-300 Ru → 1d16×10 + 140).

---

## 1. Selling to a trader

**Sell price = the item's current buy price × sell-back % × condition modifier.**

|Category|Sell-back|
|-|-|
|Weapons|40%|
|Armor|35%|
|Artifacts|45%|
|Detectors|30%|
|Armor Mods|25% (must be removed from the armor first)|
|Ammunition|50% of its per-round price (box price ÷ rounds per box; e.g. Standard sniper 150 ÷ 5 = 30 Ru/round → 15 Ru each)|
|Consumables|20%|
|Mutant Parts|By mutant tier (Section 3)|
|Intel (data drives, PDAs, documents)|Zone Tier × 1d6 × 100 Ru. **Main Story Fragments can't be sold** (file 09, Part 3).|

**Condition modifier:** Working ×1 · Dirty ×0.85 · Damaged ×0.5 · Broken ×0.2.

---

## 2. Defeated human NPC loot

**Weapon (always drops):** roll d20 for its Condition — 1-7 Damaged · 8-14 Dirty · 15-20 Working.
It holds 1d4+1 rounds of its standard ammo. Anything else they carried (a sidearm, a knife) comes
from the extra-loot roll below.

**Extra loot:** roll 1d10 + rank bonus (Rookie/Experienced +0 · Professional/Veteran +1 ·
Expert/Master +2 · Legend +3; totals above 10 count as 10).

|Total|Extra items|
|-|-|
|1-3|None|
|4-6|1|
|7-8|2|
|9|3|
|10|4, and their worn armor is guaranteed|

Roll each item on the zone's loot table (file 07, Tier Drift applies). An Armor result is their worn
armor (roll its Condition like the weapon). A Junk result is 10-50 loose Ru. Unused grenades drop on
top of this (file 04).

---

## 3. Mutant Parts

1 part per kill (2 for a Named or notably tough mutant; 0 if it fled and died out of sight).
2.0kg each. Traders buy them at this value (roll within the band); they're also spent on upgrades
(Section 5).

|Mutant Tier|Value|
|-|-|
|1|75-150 Ru|
|2|200-350 Ru|
|3|400-600 Ru|
|4|800-1,200 Ru|
|5|1,200-1,700 Ru|

Track parts by tier on the sheet (e.g. "2× Tier 3 Mutant Part").

---

## 3b. Fleeing NPCs

An NPC who breaks and flees (file 04, Morale) is resolved by one of these, GM's call:
* **Free parting shot:** if the player has a loaded ranged weapon and at least 1 AP, they get one
  attack at it as it leaves, at no AP cost.
* **Drop and run:** player rolls d20; 11+ = it drops its weapon and loose Ru (Section 2, without the
  armor).
* **It comes back:** a fled NPC can reappear later with a grudge or a warning to its faction. Log
  it in Named NPCs.

---

## 4. Quest rewards

Ru is the base reward for every quest. Item rewards: a major/story quest gets 1-3 hand-picked
items; a filler quest rolls on the zone's table (file 07). Every quest also gives one non-Ru reward
(file 09, Quest Rules).

**Reward = (Zone Base + Target Bonus) × Quest Type Multiplier × 1.5**, then the reputation
adjustment. Hostile factions don't offer jobs.

|Zone Tier|Zone Base|
|-|-|
|1|150-300|
|2|300-600|
|3|600-1,200|
|4|1,200-2,500|
|5|2,500-5,000|
|6|5,000-10,000|
|7|10,000-20,000|

|Toughest target|Bonus|Toughest target|Bonus|
|-|-|-|-|
|Mutant Tier 1|+0|NPC Rookie/Experienced|+0|
|Mutant Tier 2|+200|NPC Professional/Veteran|+300|
|Mutant Tier 3|+500|NPC Expert/Master|+800|
|Mutant Tier 4|+1,000|NPC Legend|+1,500|
|Mutant Tier 5|+2,000| | |

**Kill Quota:** bonus of the most common target, +15% of that bonus per kill beyond the first
(5 Tier 2 mutants: 200 + 4 × 30 = +320).

|Quest Type|Multiplier|
|-|-|
|Elimination (one target)|×1.0|
|Kill Quota|×0.8|
|Retrieve / Fetch (add the guard's bonus if guarded)|×0.7|
|Escort / Protect|×1.2|
|Sabotage / Search / Investigate|×0.6|

Example: Professional rival Stalker, Tier 3 zone: (900 + 300) × 1.0 × 1.5 = 1,800 Ru.

---

## 5. Technician — Repairs & Upgrades

**Where:** the Repair Yard in Scavenger's Hub (repairs and upgrades); any Faction Outpost
quartermaster (repairs only).

**Repair to Working:** 10% of the midpoint of the item's price band (file 07) per Condition step.
Example: a Damaged Tier 4 sidearm (4,500-7,000 → midpoint 5,750) is 2 steps from Working = 1,150 Ru.

**Upgrades:** up to **3 per weapon or armor piece**, each option once. They stay on the item, even
through Broken.

|Weapon upgrade|Effect|Armor upgrade|Effect|
|-|-|-|-|
|Calibrated|+1 to hit|Plating|+5% Phys-DR|
|Reinforced|+3 base damage|Lining|+10% Anom-DR|
|Extended Mag|+50% capacity (round down)|Lightened|−3kg|
|Hardened|Loses Condition only on a natural-1 jam|Braced|Ignores the first Condition loss each combat|

|Upgrade|Cost|
|-|-|
|1st|1 Mutant Part (any tier) + 10% of the band midpoint|
|2nd|2 Mutant Parts (Tier 3+) + 20%|
|3rd|3 Mutant Parts (at least one Tier 4+) + 30%|
