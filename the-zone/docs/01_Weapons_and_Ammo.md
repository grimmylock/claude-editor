# Weapons & Ammunition

Every firearm lists damage, ammo, capacity, range in tiles, weight (counts toward carry weight),
tier and traits. Combat math is in file 00, Section 6.

**Burst fire** (assault rifles, SMGs, heavy weapons): one d20 at a flat penalty.

|Category|Burst AP|Penalty|Rounds used|Damage|
|-|-|-|-|-|
|Assault Rifle|3 (AN-94: 2)|−3 (see Traits)|3|×2.0|
|SMG|2|−1|5|×2.4|
|Heavy Weapon|3|−3|10|×3.0|

**Natural 20:** auto-hit, damage ×2 before ammo and armor (burst: double the multiplied damage).

**Traits used below:**
* **Compact:** swapping to or from it costs 0 AP.
* **Innate suppressor:** a shot from a position enemies don't know about doesn't reveal the shooter
  to enemies more than 6 tiles away.
* **High Recoil:** −1 to hit.
* **Ignores X% Phys-DR:** applied after ammo effects.

---

## Melee

|Weapon|Damage|Weight|Tier|Traits|
|-|-|-|-|-|
|Hunting Knife|20|0.5kg|1|—|
|Spetsnaz Switchblade|25|0.5kg|2|—|
|Kizlyar Machete|30|0.8kg|3|Ignores 10% Phys-DR|
|Serrated Trench Knife|36|0.6kg|4|On a successful hit, roll an additional d20 — 17+ (20%) also inflicts Bleeding (5 HP/turn until cured)|
|Monolith Ritual Blade|45|0.7kg|5|Ignores 20% Phys-DR. **Loot-only, low chance** (file 07)|

Melee uses no ammo and can't use special ammo.

## Sidearms

Dual-wielding requires the Gunslinger perk (file 05).

|Weapon|Damage|Ammo|Capacity|Range|Weight|Tier|Traits|
|-|-|-|-|-|-|-|-|
|PMm|12|9x18mm|8|6|0.7kg|1|Compact|
|Walker P9m|15|9x19mm|16|8|0.8kg|2|Compact|
|Colt M1911|16|.45 ACP|7|6|1.1kg|2|—|
|M1917 Revolver|18|.45 ACP|6 (cylinder)|8|1.1kg|1|—|
|SP-21 Gyurza|15|9x21mm|18|8|1.0kg|3|Ignores 10% Phys-DR|
|Black Kite|22|.357 Mag|9|8|1.2kg|3|High Recoil (-1 attack)|
|FN Five-seveN|17|5.7x28mm|20|10|0.7kg|4|Ignores 10% Phys-DR; Compact|
|Chiappa Rhino|20|.357 Mag|6 (cylinder)|10|0.9kg|4|Fired alone: 1st shot 2 AP, next 2 shots 1 AP each, then back to 2 AP. (Doesn't apply to a Gunslinger dual-shot, which always costs 2 AP.)|
|Steppe Eagle|25|.44 Mag|8|8|2.0kg|4|High Recoil (-1 attack)|
|RSh-12|40|12.7x55mm|5 (cylinder)|10|2.2kg|5|Ignores 20% Phys-DR|

## SMGs

|Weapon|Damage|Ammo|Capacity|Range|Weight|Tier|Traits|
|-|-|-|-|-|-|-|-|
|Skorpion vz. 61|11|.32 ACP|20|6|1.3kg|1|Compact|
|PP-19 Bizon|12|9x18mm|64|8|2.5kg|2|—|
|Viper 5 (MP5)|14|9x19mm|30|10|2.5kg|3|—|
|UMP-45|16|.45 ACP|25|8|2.3kg|3|—|
|MP7|13|4.6x30mm|40|10|1.9kg|4|Ignores 10% Phys-DR; Compact|

## Shotguns

**All shotguns: +2 to hit against targets within 4 tiles.**

|Weapon|Damage|Ammo|Capacity|Range|Weight|Tier|Traits|
|-|-|-|-|-|-|-|-|
|Sawed-off TOZ-66|30|12g|2 (break-action)|4|2.0kg|1|Compact|
|Winchester 1887|31|12g|5|4|3.6kg|2|—|
|Chaser 13|30|12g|6|4|3.2kg|2|—|
|Remington 870|30|12g|7|4|3.6kg|2|—|
|Mossberg 590|32|12g|8|4|3.4kg|3|—|
|TOZ-34|34|12g|2 (break-action)|6|3.2kg|3|—|
|Protecta|32|12g|12 (cylinder)|4|4.2kg|4|Reload costs 2 AP|
|SPSA14|33|12g|8|4|4.4kg|4|—|
|Saiga-12|32|12g|10 (mag-fed)|4|3.6kg|4|—|
|Vepr-12|33|12g|10 (mag-fed)|6|4.5kg|4|—|

**Dart or slug in a shotgun:** range becomes 6 tiles or base range +2, whichever is higher.

## Assault Rifles

Traits override the default burst penalty where listed.

|Weapon|Damage|Ammo|Capacity|Range|Weight|Tier|Traits|
|-|-|-|-|-|-|-|-|
|AKS-74U|18|5.45x39mm|30|12|2.7kg|1|**Compact.** The cut-down carbine every Rookie starts with.|
|SR-3M Vikhr|26|9x39mm|30|10|2.0kg|2|**Compact.** Heavy subsonic 9x39: ignores 10% Phys-DR. Short range is the price.|
|AK-74|22|5.45x39mm|30|16|3.3kg|2|**Low recoil:** burst penalty -2 instead of -3.|
|AKM|25|7.62x39mm|30|16|3.5kg|2|**Hard-hitting:** its hits cause a Wound at 15+ damage after Phys-DR (instead of 20+).|
|VLA (AS Val)|28|9x39mm|20|14|2.6kg|3|Innate suppressor. Ignores 10% Phys-DR.|
|TRs-301|24|5.56x45mm|30|18|3.4kg|3|**Modular rail:** +1 to hit on single-fire attacks.|
|G36K|24|5.56x45mm|30|18|3.0kg|3|**Optic:** Aim gives +3 instead of +2.|
|AK-103|26|7.62x39mm|30|18|3.6kg|3|**Reliable:** burst only jams on a natural 1 (not 1-2), and it never loses Condition from a jam.|
|IL86 (L85A1)|27|5.56x45mm|30|18|4.4kg|4|**SUSAT scope:** +1 to hit against targets 10+ tiles away. **Finicky:** jams on a natural 1 or 2 even when Working.|
|AK-74 OBELISK|25|5.45x39mm|30|18|3.6kg|4|**Laser + red dot:** +1 to hit on every attack.|
|AN-94 Abakan|22|5.45x39mm|30|18|3.9kg|4|**Hyper-burst:** burst costs 2 AP.|
|FN FAL|30|7.62x51mm|20|20|4.4kg|4|**Battle rifle:** burst penalty -4 instead of -3. Built for precise single shots.|
|FT-200M (F2000)|33|5.56x45mm|30|20|3.6kg|5|**Compact bullpup with integrated optic:** Compact, and +1 to hit on every attack.|

## Sniper Rifles

|Weapon|Damage|Ammo|Capacity|Range|Weight|Tier|Traits|
|-|-|-|-|-|-|-|-|
|SKS|30|7.62x39mm|10|22|3.9kg|2|—|
|Winchester 1886/1892|32|.44 Mag|8|18|3.2kg|3|—|
|Vintar BC|35|9x39mm|10|18|2.6kg|3|Innate suppressor|
|Mosin Nagant|40|7.62x54mmR|5|26|4.0kg|3|—|
|Marlin Dark Series|38|.45-70 Govt|6|18|3.4kg|4|Ignores 10% Phys-DR|
|SR-25|38|7.62x51mm|20|24|4.9kg|4|—|
|SVDm-2|45|7.62x54mmR|10|28|4.5kg|4|—|
|SV-98|45|7.62x54mmR|10|28|5.8kg|4|—|
|VSSK Vychlop|55|12.7x55mm|5|28|6.5kg|5|Ignores 30% Phys-DR, innate suppressor|
|Barrett M82|60|.50 BMG|10|32|13.0kg|5|Ignores 50% Phys-DR|
|Item 62 Gauss Rifle|80|2mm Battery|10|32|9.0kg|5|Ignores 80% Phys-DR|

## Heavy Weapons

|Weapon|Damage|Ammo|Capacity|Range|Weight|Tier|Traits|
|-|-|-|-|-|-|-|-|
|M249 SAW|22|5.56x45mm|200|16|7.5kg|3|MP capped at 2 while held|
|RPD|24|7.62x39mm|100|16|7.4kg|3|MP capped at 2 while held|
|RP-74 (PKM)|28|7.62x54mmR|100|18|8.0kg|4|MP capped at 2 while held|
|PKP Pecheneg|28|7.62x54mmR|100|20|8.5kg|4|MP capped at 2; immune to elevated burst-jam risk|
|PKP Pecheneg Zulu|28|7.62x54mmR|100|20|9.0kg|5|MP capped at 2; pre-attached 4x Scope + Laser: +1 to hit|

## Throwables

2 AP, range 8 tiles, 3×3 blast, 0.5kg each. Baseline stock at every trader (file 05).

|Throwable|Price|Effect|
|-|-|-|
|Frag Grenade|250 Ru|40 physical damage to everyone in the blast (armor Phys-DR applies, cover doesn't). Each target rolls Agility DC 13: success = half damage but Prone. Destroys light cover, −3 Integrity to hard cover. Can cause Wounds.|
|Smoke Grenade|150 Ru|Blocks LoS into, out of and through the area until the end of the thrower's second turn after the throw.|
|Flashbang|200 Ru|Everyone in the blast rolls Agility DC 13 or loses 2 AP at the start of their next turn (Sentinel Nosorog halves it). No damage.|

---

## Ammunition

All ammo is baseline stock: every trader, unlimited, fixed price, never rolled. Rounds per box
depend on the weapon category the box is bought for (a caliber shared by two categories, e.g.
12.7x55mm, uses the category of the weapon named).

|Category|Rounds per box|
|-|-|
|Sidearm|18|
|SMG|30|
|Shotgun|8|
|Assault Rifle|15|
|Sniper Rifle|5|
|Heavy Weapon|25|

|Type|Price per box|Effect|
|-|-|-|
|Standard|150 Ru|Normal|
|Hollow Point|250 Ru|Vs target's total Phys-DR: **0% → ×1.25 damage** · 1-19% → no change · **20%+ → ×0.5 damage**|
|Dart|400 Ru|Target's Phys-DR ×0.5 for the hit|
|Armor Piercing|600 Ru|Target's Phys-DR ×0.4 for the hit|

Nearly every mutant has 0% Phys-DR (only the Blight Brute has 40%), so Hollow Point is the default
for mutants; AP/Dart are for armored humans and the Brute. Ammo never interacts with cover.
