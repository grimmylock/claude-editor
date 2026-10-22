# Mutants & Factions

## Mutants

**Attacks:** d20 + the mutant's Agility Mod vs target AC (advantage with Pack Tactics); a hit deals
the listed Attack Damage (fixed, physical unless stated). **A mutant attacks at most once per turn**
(2 AP); the rest of its AP and MP go to movement and its traits.
**Pack Tactics:** advantage while another living pack member is adjacent to it.
**Panic:** at or below its Panic % of max HP, it flees for the rest of the encounter.
Only the Blight Brute has Phys-DR; the others rely on Cloak, Leap and HP. Mutant Anom-DR only
reduces anomaly/psi damage. Mutants aren't Suppressed or Wounded.

### Cloak (Veil Stalker, Alpha Stalker, Void Weaver)
* Starts every encounter cloaked.
* **4+ tiles from every enemy:** can't be targeted unless the attacker first passes **Perception vs
  DC 12 + its Tier** (Veil 14, Alpha 15, Void 17). That only spots it for that one attack.
* **Within 3 tiles:** automatically visible.
* Can move while cloaked, as long as it doesn't end within 3 tiles of someone it isn't attacking.
* **Attacking reveals it.** After attacking, if it has MP to get 4+ tiles from everyone, it
  re-cloaks at the end of its turn; otherwise it stays visible until its next turn.

### Leap (Dread Stalker)
* Circles at 3-5 tiles instead of staying adjacent.
* **Leap Attack (2 AP + all remaining MP):** from up to its MP in tiles away, leaps adjacent and
  attacks with **advantage**.
* **Telegraph & dodge:** narrate the crouch first. The player may spend 1 AP on Agility vs DC 12 +
  Tier (Dread Stalker 16): success = the leap misses and the player's next attack on it this round
  has advantage.
* Hit or miss, if it has MP left it retreats to 3-5 tiles.

### Stagger
Taking **40%+ of its max HP in one player turn** (all sources combined) makes a mutant **lose its
next turn**. Berserk mutants (Blight Brute, Dread Stalker) are immune. Panic is checked separately.

### Mutant table

|Mutant|Tier|HP|Phys-DR|Anom-DR|AP|MP|AC|Atk Dmg|Agi Mod|Behavior|Panic|Traits|
|-|-|-|-|-|-|-|-|-|-|-|-|-|
|Blind Maw|1|40|0%|5%|4|5|11|8|+1|Pack|40%|Pack Tactics|
|Flesh Stalker|1|45|0%|10%|4|4|11|9|+0|Pack|35%|Pack Tactics; **Toxic Bite:** on a hit, d20 17+ also inflicts Toxic Bleed|
|Rot Swarm|1|30|0%|10%|4|6|10|6|+2|Swarm|50%|Pack Tactics; appears in groups of 3+|
|Veil Stalker|2|70|0%|20%|4|5|12|20|+1|Ambush|30%|Cloak; on a hit, d20 16+ also inflicts Bleeding|
|Alpha Stalker|3|100|0%|25%|5|5|13|30|+2|Ambush|20%|Cloak; ignores 20% of target's Phys-DR; on a hit, d20 13+ also inflicts Bleeding|
|Mind Weaver|3|90|0%|30%|5|4|13|35|+2|Ranged|20%|**Psi Blast:** its attack works at up to 5 tiles with LoS (normal roll vs AC, cover applies); deals 35 **psi** damage (Anom-DR applies, Phys-DR doesn't)|
|Blight Brute|4|120|40%|25%|4|3|14|60|−1|Berserk|10%|Stagger immune; **Ground Slam** (once per encounter, instead of its attack): every adjacent target takes 30 physical damage and must pass Agility DC 13 or be knocked Prone|
|Dread Stalker|4|155|0%|30%|6|6|14|45|+2|Berserk|never|Leap; Stagger immune|
|Void Weaver|5|170|0%|60%|6|5|15|50|+3|Ranged|never|Cloak; **psi attack** at up to 5 tiles with LoS, 50 **psi** damage (Anom-DR applies); **Neural Overload:** on a hit, target passes Intelligence DC 14 or loses 1 AP next turn|

HP values are a first pass; adjust after playtesting.

### Behaviors
* **Pack:** stays near pack members for advantage; advances as a group.
* **Swarm:** many, fast, fragile; overwhelm and flank.
* **Ambush:** closes in cloaked, strikes, retreats to re-cloak.
* **Ranged:** keeps 3-5 tiles away and attacks from range; avoids melee.
* **Berserk:** shortest path to the player, keeps attacking, rarely retreats.

---

## Factions & Ranks

### Ranks

|Rank|AP|MP|d20 Modifier|Shaken at ≤ HP|Broken at ≤ HP|
|-|-|-|-|-|-|
|Rookie|4|4|-1|75%|50%|
|Experienced|4|4|+0|55%|30%|
|Professional|5|4|+1|50%|25%|
|Veteran|5|4|+1|45%|20%|
|Expert|5|5|+2|40%|15%|
|Master|5|5|+2|35%|10%|
|Legend|5|5|+3|never|1%|

* The d20 modifier is added to attack rolls, and **AC = 10 + modifier (minimum 10)** — for the
  player and NPCs alike.
* MP shown is unarmored. In armor: armor MP, +1 at Expert or higher (file 00, Section 5).
* Morale thresholds apply to NPCs only; the player always chooses whether to flee.
* NPC max HP is a flat **100**. Armor reduces damage per hit; it never adds HP.

### Morale (Human NPCs)

Every human NPC starts an encounter **Steady**. Morale only ever gets worse during a fight, except
through a Leader's Rally.

|State|Triggered by|Effect|
|-|-|-|
|**Steady**|Default|Normal behavior per their Combat Role.|
|**Shaken**|HP at or below their rank's Shaken %; their Leader goes down or flees; an ally dies in their LoS; a successful player Intimidate|-2 to attack rolls. Won't advance toward the player; uses MP to fall back to cover farther away.|
|**Broken**|HP at or below their rank's Broken %; a successful Intimidate while already Shaken|The player rolls a d20: **1-10 flees** (file 08, 3b); **11-20 surrenders**: drops their weapon, hands up, takes no more actions.|

Legends are never Shaken and never surrender (a Broken Legend always flees).

**Surrender.** A surrendered NPC is out of the fight. The player chooses how to handle them:
* **Take their gear:** loot resolves per file 08, Section 2, as if defeated (weapon,
condition roll, extra-loot roll). Their armor can be taken too.
* **Interrogate** (free, after combat): Intelligence or Strength check vs DC 12. Success gives a
lead: one extra loot roll from a nearby stash, a quest hook, or information about their faction.
* **Let them go:** +1 reputation with their faction (not with Raiders or Obelisk). They may turn up
again later (file 08, 3b).
* **Execute:** -1 reputation with their faction if any of them could plausibly find out. Log any
grudge under Improvised World Details.

### Combat Roles (Human NPCs)

Assign one to every NPC when the encounter spawns and show it on the board, e.g. "Target 1 (Raider
Leader, Leader, Professional)". Every squad of 2+ has exactly one **Leader**, its highest-ranked
member. Everyone else takes a role based on their weapon:

|Role|Weapons|Tactics|
|-|-|-|
|**Anchor**|Assault rifle, heavy weapon, sniper rifle|Holds cover and puts fire on the player, favoring bursts to Suppress them. Moves to fresh cover once its current cover is at 1 Integrity or less. Aims when it has spare AP.|
|**Rusher**|Shotgun, SMG|Advances cover to cover to get within its weapon's range, then attacks. Tries to end its move somewhere that Flanks the player.|
|**Flanker**|Sidearm, melee|Spends its MP moving wide to a tile where its firing line bypasses the player's cover, then attacks with the +2 Flanked bonus.|
|**Leader**|Any|Stays behind cover. Once per round, for free, **Commands** one ally (+2 on that ally's next attack roll, or +2 MP this turn), unless the Leader is Suppressed. **Rally** (2 AP): one Shaken ally within 6 tiles becomes Steady again. If the Leader goes down or flees, every ally becomes Shaken.|

**Grenades.** Professional-rank and higher NPCs carry 1 Frag Grenade. Garrison, Sentinels,
Contractors, IZC and Obelisk NPCs of that rank also carry one more throwable (d6: 1-3 Smoke, 4-6
Flashbang). An NPC throws a frag when the player has stayed on the same cover tile for 2 enemy
rounds in a row, or when 2+ targets stand inside one 3×3 area. Unused grenades drop as loot on top
of the normal extra-loot roll.

### Faction Rank Decks

Roll each NPC's rank from their faction's weights (higher = more common).

|Faction|Rookie|Experienced|Professional|Veteran|Expert|Master|Legend|Flavor|
|-|-|-|-|-|-|-|-|-|
|Raiders|40|30|20|8|2|0|0|Disorganized bandits, low-tier gear, numerous|
|Outcasts|30|30|20|10|7|2|1|Desperate loners and small bands|
|Wanderers|25|30|25|12|6|1|1|Independent freelance Stalkers|
|Prospectors|10|25|30|20|10|4|1|Artifact hunters, decently equipped|
|Garrison|5|20|30|25|12|6|2|Organized militia/paramilitary|
|Sentinels|5|15|30|30|12|6|2|Disciplined guardian faction|
|Liberators|10|20|30|25|10|4|1|Militant faction pushing back the Zone|
|Contractors|5|10|30|30|15|7|3|Well-funded professional mercs|
|Obelisk|0|5|20|30|25|15|5|Zealous, elite, dangerous end-game faction|
|Cartel|10|25|30|20|10|4|1|Criminal trade network, moderate strength|
|Ecologist|15|30|25|15|10|4|1|Scientists, better at avoidance than combat|
|IZC|5|15|30|30|12|6|2|International containment operatives, disciplined|
|Mutant|40|35|20|5|0|0|0|Non-human — use the Mutants table instead of a rank/armor loadout|

**Squads:** 2-4 NPCs scaled to the zone's Tier, each with a weapon and armor roughly matching their
rank tier.
**Mutant groups:** a high-tier mutant may bring lower-tier ones. Lower-tier mutants can appear in
higher-tier zones; higher-tier mutants never appear in lower-tier zones unless it's a boss fight or
a specific quest.

