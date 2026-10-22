# The Zone Map

29 sectors in 7 tiers. **Hazard** feeds the travel check (file 00, Section 11); Hazard 4+ means
an automatic encounter on arrival. Hidden sub-nodes are found with the listed Perception check and
stay unlocked. Safe Zones never spawn hostile encounters.

**Canon is locked.** Use only the landmarks listed for each zone, and each Tactical Layout exactly,
on every visit. New details must be logged in World State (file 00, Section 14). Scavenger's Hub
has no layout (Safe Zone, narrative mode only).

**Layout formats:**
* **Map-sketch** (outdoor zones): rough relative positions of landmarks and compass-tagged exits.
  Not tile-exact. In sketches, `===` and `---` lines are paths and connections, not cover.
* **Room-grid** (interiors, mazes, set-pieces): exact tiles.

**Legend:** `#` wall/solid obstruction (blocks movement and LoS) · `C` light cover (+1 AC, doesn't
block LoS) · `=` hard cover (+2 AC; only on room-grids, marked by the GM per file 00) · `~` difficult
terrain (2 MP/tile) · `D` door, closed by default (force or shoot it open; then it stays open) ·
`^` elevation (climbable; high-ground advantage) · `.` open · `E1/E2` entry/exit · `!` hazard.
Exit compass tags are for orienting a scene; the Connects To column is the real network.

---

## Tier 1 — The Perimeter Band

| Zone | Hazard | Connects To | Allowed Factions | Notes |
|---|---|---|---|---|
| **The Perimeter** | 0 | Toxic Marshes, Smuggler's Run | Wanderers, Raiders | Starting zone. Hidden: Secret Cave Area (Perception DC 14) |
| Toxic Marshes | 0 | The Perimeter, The Scrapyard | Wanderers, Raiders | — |
| Smuggler's Run | 0 | The Perimeter, Industrial Basin | Wanderers, Raiders | — |

### Location Details

**The Perimeter** — A sagging chain-link and razor-wire checkpoint line strung between concrete
watchtowers, half-swallowed by overgrown fields. This is where every Stalker's run begins.
- *Checkpoint Gate* — the rusted vehicle barrier and guard hut where new arrivals are processed;
  now abandoned but structurally intact.
- *Watchtower 3* — a leaning steel tower with a sniper's-eye view over the northern field; ladder
  is missing several rungs.
- *The Bonfire Camp* — a semi-permanent ring of stones and salvaged furniture where Wanderers and
  freelancers trade rumors; closest thing this zone has to a social hub. A tarp-roofed lean-to
  built around a modified shipping crate ("Yefim's Footlocker") sits just off the fire ring —
  lockable, dry storage, the reason a trader can actually operate out of here instead of just
  passing through.
- *Rust Culvert* — a drainage tunnel running under the perimeter road; entrance to the Secret Cave
  Area is hidden behind brush near its mouth.
- Grid: 20×20 tiles, open field terrain with sparse fence-line and building cover.

> **Tactical Layout: The Perimeter** (map-sketch)
> ```
>                [Watchtower 3]^   (ladder missing rungs, sniper's-eye view north)
>                      |
> [Rust Culvert]~~~~ (brush-hidden dive to Secret Cave Area, DC 14)
>                      |
>            [Bonfire Camp] C-C-C   (Yefim's Footlocker lean-to — the trade stall)
>                      |
>              [Checkpoint Gate] #-D-#   (barrier + guard hut — where a run begins)
> ```
> Exits: NE → Smuggler's Run · E → Toxic Marshes. The tower dominates the north field (climb it
> for high ground); the culvert and camp sit close enough together that a fight starting at one
> spills into the other within a turn or two; the Gate's wall-door-wall is the only hard cover
> near the zone's south edge.

**Toxic Marshes** — Stagnant, chemical-sheened wetlands where nothing above the waterline looks
alive. Footing is unreliable and the air smells wrong.
- *The Causeway* — a single raised wooden walkway, the only dry through-route; falling off means
  wading in contaminated water.
- *Sunken Tanker* — a rusted chemical tanker truck half-submerged in the marsh, looted long ago
  but still used as a landmark and occasional sniper's roost.
- *Reed Blind* — thick reed cover along the eastern bank, favored ambush spot for Raiders.
- Grid: 24×18 tiles, wetland terrain — most tiles outside the causeway count as difficult terrain
  (2 MP/tile).

> **Tactical Layout: Toxic Marshes** (map-sketch)
> ```
> [Reed Blind]~~~~~~~~~~~~~~~~~~~~~~~~~~~~~   (east bank, Raider ambush cover)
>          \
>           [The Causeway] =========================   (the only dry route through)
>          /
> [Sunken Tanker]^~~   (half-submerged, climbable — the one dry sniping perch off the walkway)
> ```
> Exits: W → The Perimeter · E → The Scrapyard. Reed Blind sits close enough to the Causeway's
> midpoint that an ambush there catches anyone crossing without cover; everything off the walkway
> is difficult terrain, so wading to reach either landmark costs double movement.

**Smuggler's Run** — A collapsed rail cutting turned unofficial smuggling corridor, walled in by
crumbling embankments on both sides.
- *The Cutting* — the main rail trench itself, littered with abandoned handcarts and crates. One
  handcart near the trench's midpoint has been tarped over and fitted with a padlocked crate lid —
  "The Runner" works out of it, goods kept hidden under the tarp rather than laid out in the open.
- *Blind Curve* — a sharp bend in the trench with poor sightlines both ways; common ambush point.
- *Overwatch Ridge* — the embankment lip above the cutting, reachable by a scramble path; good
  vantage for ranged characters.
- Grid: 22×14 tiles, narrow corridor terrain flanked by high embankment walls (effectively a
  tactical bottleneck).

> **Tactical Layout: Smuggler's Run** (map-sketch)
> ```
> [Overwatch Ridge]^   (embankment lip, reachable by a scramble-path action)
>          |
> [The Cutting]=====[Blind Curve]=====>   (rail trench; The Runner's tarped handcart sits mid-trench)
> ```
> Exits: W → The Perimeter · E → Industrial Basin. The whole zone is one narrow embankment-walled
> trench — a genuine tactical bottleneck; Blind Curve is the ambush point (poor sightlines both
> ways); Overwatch Ridge is the only elevated position and costs an action to scramble up to.

---

## Tier 2 — Low-Mid

| Zone | Hazard | Connects To | Allowed Factions | Notes |
|---|---|---|---|---|
| The Scrapyard | 1 | Toxic Marshes, Industrial Basin, Black Valley | Raiders, Wanderers | — |
| Industrial Basin | 1 | Smuggler's Run, The Scrapyard | Wanderers, Garrison | Hidden: Secret Lab Alpha (Perception DC 15) |
| Black Valley | 1 | The Scrapyard, Scavenger's Hub | Raiders, Liberators | — |

### Location Details

**The Scrapyard** — Mountains of crushed vehicles and stripped machinery stacked into makeshift
canyons. Rust dust hangs in the air and every path doubles back on itself.
- *Crusher Row* — a line of dead hydraulic car-crushers, some still hissing residual pressure;
  good cover, bad place to stand still.
- *The Maze* — the densest stack of scrap, a genuine navigational hazard with blind corners
  everywhere.
- *Scrap King's Nest* — an elevated shack built from car doors atop the tallest pile, favored by
  whoever currently controls the yard.
- Grid: 26×26 tiles, dense vertical-cover terrain (stacked wrecks) — heavy use of line-of-sight
  blocking cover.

> **Tactical Layout: The Scrapyard** (map-sketch)
> ```
>                 [Scrap King's Nest]^   (elevated shack of car doors, tallest pile)
>                          |
> [Crusher Row] #-#-#-#-# --- [The Maze]   (dense stack, blind corners — room-grid below)
> ```
> Exits: W → Toxic Marshes · E → Industrial Basin · S → Black Valley. Crusher Row's dead
> car-crushers are good cover but hiss residual pressure — bad to stand still next to.
>
> **Room-grid: The Maze**
>
> ```
>       1    2    3    4    5    6    7    8    9   10
>    A  E1   .    #    .    #    .    .    #    .    .
>    B  #    .    #    .    #    .    #    .    #    .
>    C  .    .    .    .    .    .    .    #    .    .
>    D  #    .    #    #    #    .    #    .    #    #
>    E  .    .    .    .    #    .    .    .    .    .
>    F  #    .    #    .    #    .    #    #    .    #
>    G  .    .    .    .    .    .    .    .    .    .
>    H  #    .    #    .    #    C    #    .    #    E2
> ```
> E1 (west) is the way in from Crusher Row; E2 (east) exits toward Scrap King's Nest. Genuinely
> disorienting by design — every corner in here blocks line of sight, so treat any `#` as also
> blocking a straight shot around it, not just movement.

**Industrial Basin** — A sunken concrete complex of disused processing plants and silos, ringed
by a service road. Machinery groans in the wind even though nothing here still runs.
- *Silo Row* — four grain/chemical silos, two collapsed, two still climbable for overwatch.
- *Central Plant* — the main processing building; multi-level interior, good for a vertical
  firefight.
- *Loading Dock* — a flat concrete apron where the Secret Lab Alpha entrance (a sealed service
  hatch) is hidden.
- Grid: 24×24 tiles, mixed indoor/outdoor industrial terrain.

> **Tactical Layout: Industrial Basin** (map-sketch)
> ```
> [Silo Row] ^-^-#-#   (two climbable, two collapsed)
>       |
> [Central Plant]   (multi-level interior — room-grid below)
>       |
> [Loading Dock] . . . .   (flat apron; sealed hatch here hides Secret Lab Alpha, DC 15)
> ```
> Exits: W → Smuggler's Run · S → The Scrapyard.
>
> **Room-grid: Central Plant**
>
> ```
>       1    2    3    4    5    6    7    8    9   10   11   12   13   14   15   16   17
>    A  .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .
>    B  #    D    #    C    .    C    .    C    .    C    .    C    .    C    #    D    #
>    C  .    .    ^    .    .    .    .    .    .    .    .    .    .    .    ^    .    .
>    D  .    C    .    .    C    .    C    .    C    .    C    .    C    .    .    C    .
>    E  .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .
>    F  .    C    .    .    C    .    C    .    C    .    C    .    C    .    .    C    .
>    G  #    D    #    C    .    C    .    C    .    C    .    C    .    C    #    D    #
>    H  .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .
> ```
> Row A = E1 (south, from Loading Dock); row H = E2 (north, toward Silo Row). Walls in rows B and G
> (doors near each end) split the hall into three bays with machinery cover. The `^` stairs at
> each end lead to a mezzanine over the whole hall (high ground). Row E is an open conveyor line:
> fast but exposed.

**Black Valley** — A steep-walled ravine cutting between the Scrapyard and the Scavenger's Hub,
strewn with the wreckage of a Raider convoy that never made it through.
- *The Wreck Line* — burned-out trucks strung along the valley floor, this zone's main cover.
- *Sniper's Lip* — the north ridge overlooking the valley, exposed but commands the whole route.
- *Chokepoint Bridge* — a half-collapsed footbridge, the only crossing over the valley's central
  gulley.
- Grid: 28×16 tiles, canyon terrain — long sightlines down the valley floor, elevated flanks on
  both sides.

> **Tactical Layout: Black Valley** (map-sketch)
> ```
> [Sniper's Lip]^ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~   (north ridge, exposed but commands it all)
>
> [The Wreck Line] #-#-#-#-#-#-#-#-#-#-#-#   (burned convoy wrecks, main valley-floor cover)
>
> [Chokepoint Bridge] ===D===   (half-collapsed footbridge, the only crossing of the central gulley)
> ```
> Exits: N → The Scrapyard · S → Scavenger's Hub. Long sightlines run the full length of the
> valley floor; the Bridge is the single chokepoint crossing it.

---

## Tier 3 — Middle

| Zone | Hazard | Connects To | Allowed Factions | Notes |
|---|---|---|---|---|
| **Scavenger's Hub** | 0 | Black Valley, The Rail-Yards, Dried Lake Sub-Station | Sentinels, Wanderers | **Safe Zone** — good hub for trading/resting |
| The Rail-Yards | 2 | Scavenger's Hub, Vanguard Barracks | Contractors, Sentinels | Hidden: Maintenance Tunnels (Perception DC 15) |
| Dried Lake Sub-Station | 2 | Scavenger's Hub, Ghost Town | Ecologist, Mutant | Hidden: Sub-Station Depths (Perception DC 16) |

### Location Details

**Scavenger's Hub** — The Zone's real capital: a fortified market town built from shipping
containers and scavenged prefab, run jointly by Sentinel guards and independent traders. This is
the campaign's default rest/shop/roleplay anchor.
- *The Bazaar* — rows of container-stalls selling weapons, armor, consumables, and artifacts;
  the primary shop location (apply the Gear file's shop table here).
- *Sentinel Checkpoint* — the guarded gate controlling entry; Sentinels keep the peace inside.
- *The Rusty Anchor* — the Hub's bar/inn, best place for rumor hooks, faction contacts, and job
  boards.
- *Repair Yard* — a fenced lot where a mechanic-type NPC can be stationed for gear repair/upgrade
  roleplay hooks.
- Grid: n/a (Safe Zone — no tactical encounters spawn here; run in free narrative mode per
  Section 5 of the GM Master Prompt).

**The Rail-Yards** — A sprawling freight yard of rusted rolling stock on dozens of parallel
tracks, still officially "in use" by Contractor logistics runs.
- *Roundhouse* — the old locomotive maintenance building, now a Contractor staging point.
- *Container Stacks* — rows of stacked freight containers forming a maze of firing lanes.
- *Signal Tower* — a tall trackside control tower with sightlines across the whole yard.
- *Rail Culvert* — a drainage tunnel beneath the tracks; entrance to the Maintenance Tunnels.
- Grid: 30×20 tiles, industrial rail-yard terrain — long straight sightlines down the tracks,
  broken by container-stack cover.

> **Tactical Layout: The Rail-Yards** (map-sketch)
> ```
> [Signal Tower]^   (trackside control tower, sightlines across the whole yard)
>       |
> [Container Stacks]   (firing-lane maze — room-grid below)
>       |
> [Roundhouse]   (Contractor staging building — room-grid below)
>       |
> [Rail Culvert]~~~   (beneath the tracks; dive to Maintenance Tunnels, DC 15)
> ```
> Exits: W → Scavenger's Hub · E → Vanguard Barracks.
>
> **Room-grid: Container Stacks**
>
> ```
>       1    2    3    4    5    6    7    8    9   10   11   12   13   14   15   16   17   18
>    A  .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .
>    B  #    #    #    .    #    #    #    #    #    #    #    #    .    #    #    #    #    #
>    C  .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .
>    D  #    #    #    #    #    #    #    .    #    #    #    #    #    #    #    .    #    #
>    E  .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .
>    F  #    .    #    #    #    #    #    #    #    #    .    #    #    #    #    #    #    #
>    G  .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .
> ```
> E1 west (row A, toward Signal Tower); E2 east (row G, toward Roundhouse). Rows C and E are
> full-length firing lanes. Each container wall (rows B, D, F) has one gap, staggered, so changing
> lanes means detouring through that exposed tile.
>
> **Room-grid: Roundhouse**
> ```
>       1    2    3    4    5    6    7    8    9   10
>    A  E1   .    .    .    .    .    .    .    .    .
>    B  #    D    ~    ~    ~    ~    ~    ~    D    #     <- ~ = maintenance pit running the length of the hall
>    C  .    C    ~    ~    ~    ~    ~    ~    C    .
>    D  #    #    D    .    .    .    .    D    #    E2
> ```
> The pit down the middle is difficult terrain (2 MP/tile) but its raised lip counts as scatter
> cover if you drop prone behind it. Side doors at both ends lead out toward the rest of the
> Contractor staging area.

**Dried Lake Sub-Station** — A cracked, dried lakebed dominated by a derelict hydro/power
sub-station, its transmission towers still standing over the mud-cracked flats.
- *The Flats* — the open dry lakebed itself, almost no cover, easy to be spotted from a distance.
- *Sub-Station House* — the main transformer building, partially caved in; Ecologists sometimes
  camp here to study residual anomalous activity.
- *Tower Line* — the row of transmission towers crossing the lakebed; climbable for overwatch.
- *Drainage Sump* — a sunken concrete basin at the lake's lowest point, hiding the entrance to the
  Sub-Station Depths.
- Grid: 28×28 tiles, open flat terrain with minimal cover — favors ranged engagements and
  ambush-type mutants using the tower shadows.

> **Tactical Layout: Dried Lake Sub-Station** (map-sketch)
> ```
> [Tower Line] ^--^--^--^   (transmission towers crossing the lakebed, climbable)
>
> [The Flats] . . . . . . . . . .   (open dry lakebed, almost no cover)
>
> [Sub-Station House]   (transformer building — room-grid below)
>         |
> [Drainage Sump]~~~   (sunken basin; dive to Sub-Station Depths, DC 16)
> ```
> Exits: W → Scavenger's Hub · E → Ghost Town. The Flats are exposed enough that the towers'
> shadows are the only real ambush cover on the lakebed itself.
>
> **Room-grid: Sub-Station House**
> ```
>       1    2    3    4    5    6    7    8
>    A  E1   .    .    .    .    .    .    .
>    B  #    D    .    C    C    .    D    #
>    C  .    .    .    ^    ^    .    .    .     <- ^ = collapsed-roof rubble pile (elevation)
>    D  .    C    .    .    .    .    C    .
>    E  #    #    D    .    .    D    #    E2
> ```
> Partially caved-in transformer hall; the rubble pile in the center doubles as elevated cover.
> E1 faces The Flats, E2 faces the Drainage Sump.

---

## Tier 4 — High-Mid

| Zone | Hazard | Connects To | Allowed Factions | Notes |
|---|---|---|---|---|
| Vanguard Barracks | 3 | The Rail-Yards, Crimson Woods | Liberators, Sentinels | — |
| Ghost Town | 3 | Dried Lake Sub-Station, Crimson Woods | Contractors, Raiders | Hidden: Secret Lab Beta (Perception DC 17) |
| Crimson Woods | 3 | Vanguard Barracks, Ghost Town, Quarry Basin | Obelisk, Mutant | Hidden: Deep Caverns (Perception DC 16) |

### Location Details

**Vanguard Barracks** — A fortified former military garrison, now a contested strongpoint between
Liberator and Sentinel patrols. Sandbag walls and razor wire ring the compound.
- *Parade Ground* — the open central yard, now a kill-zone with no cover.
- *Barracks Row* — three long dormitory buildings, good for room-to-room fighting.
- *Motor Pool* — a garage of stripped military vehicles, useful cover and a common ambush point.
- *Command Post* — a sandbagged bunker at the compound's north end, usually held by whichever
  faction currently controls the barracks.
- Grid: 26×26 tiles, fortified-compound terrain — sandbag/wire cover clusters around open lanes.

> **Tactical Layout: Vanguard Barracks** (map-sketch)
> ```
> [Command Post] #-D-#   (sandbagged bunker, north end — held by whoever controls the barracks)
>        |
> [Barracks Row]   (three dormitories — room-grid below)
>        |
> [Parade Ground] . . . . . . . .   (open kill-zone, no cover)
>        |
> [Motor Pool] #-C-#-C   (stripped vehicles, common ambush point)
> ```
> Exits: W → The Rail-Yards · E → Crimson Woods.
>
> **Room-grid: Barracks Row**
>
> ```
>       1    2    3    4    5    6    7    8    9   10   11   12   13   14   15   16   17   18   19
>    A  .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .
>    B  #    #    D    #    #    .    .    #    #    D    #    #    .    .    #    #    D    #    #
>    C  C    .    .    .    C    .    .    C    .    .    .    C    .    .    C    .    .    .    C
>    D  .    C    .    C    .    .    .    .    C    .    C    .    .    .    .    C    .    C    .
>    E  C    .    .    .    C    .    .    C    .    .    .    C    .    .    C    .    .    .    C
>    F  #    #    D    #    #    .    .    #    #    D    #    #    .    .    #    #    D    #    #
>    G  .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .
> ```
> Row A faces the Parade Ground (E1 ~col 10); row G faces the Command Post (E2 ~col 10). Three
> dormitories (cols 1-5, 8-12, 15-19), three tiles deep, with offset bunk/locker cover. Cols 6-7
> and 13-14 are two-tile flanking lanes through the block.

**Ghost Town** — An evacuated town frozen mid-exodus: cars still parked at odd angles, doors
still open. Contractors and Raiders both pick over what's left.
- *Main Street* — the town's central row of shopfronts, most looted, some booby-trapped. One
  shopfront near the middle of the row has been cleared and re-secured — shutters repaired, a
  squatter runs their trade stall out of the old storeroom in back.
- *The Church* — a stone chapel at the town's edge, structurally sound and a common shelter point.
- *Row Houses* — a residential block, dense interior cover, easy to get flanked in.
- *Town Hall Basement* — beneath the town hall, the sealed hatch hiding Secret Lab Beta.
- Grid: 26×22 tiles, urban terrain — building interiors and street-level cover, moderate
  verticality (upper floors usable for overwatch).

> **Tactical Layout: Ghost Town** (map-sketch)
> ```
> [The Church]^   (town's edge — room-grid below)
>       |
> [Main Street] ===TS===   (shopfronts both sides — room-grid below; TS = re-secured trade stall)
>       |         \
>       |          [Row Houses]   (room-grid below)
> [Town Hall Basement]~   (sealed hatch to Secret Lab Beta, DC 17 — room-grid below)
> ```
> Exits: W → Dried Lake Sub-Station · E → Crimson Woods.

> **Room-grid: Row Houses**
>
> ```
>       1    2    3    4    5    6    7    8    9   10   11   12   13   14   15   16   17   18   19
>    A  .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .
>    B  #    #    D    #    #    .    .    #    #    D    #    #    .    .    #    #    D    #    #
>    C  C    .    .    .    C    .    .    C    .    .    .    C    .    .    C    .    .    .    C
>    D  .    C    .    C    .    .    .    .    C    .    C    .    .    .    .    C    .    C    .
>    E  C    .    .    .    C    .    .    C    .    .    .    C    .    .    C    .    .    .    C
>    F  #    #    D    #    #    .    .    #    #    D    #    #    .    .    #    #    D    #    #
>    G  .    .    C    .    .    .    .    .    .    C    .    .    .    .    .    .    C    .    .
> ```
> Row A is Main Street (E1 around column 10, connecting north to the rest of the street). Row G is
> the Back Alley (E2 around column 10, south toward the town's edge). 
>
> Three attached houses (cols 1-5, 8-12, 15-19), three tiles deep (rows C-E), each with a street
> door and an alley door; cover offset row to row. Cols 6-7 and 13-14 are two-tile lanes from
> street to alley, so street-side cover doesn't protect you from the alley side. Street and alley
> are 19 tiles long: a rifle at one end has the advantage over someone closing in.

> **Room-grid: Main Street**
>
> ```
>       1    2    3    4    5    6    7    8    9   10   11   12   13   14   15   16   17   18   19   20   21   22   23
>    A  #    #    #    #    #    #    #    #    #    #    #    #    #    #    #    #    #    #    #    #    #    #    #
>    B  C    D    C    D    C    D    C    D    C    D    C   TS    C    D    C    D    C    D    C    D    C    D    C
>    C  .    .    .    .    .    .    .    C    .    .    .    .    .    .    .    .    C    .    .    .    .    .    .
>    D  C    D    C    D    C    D    C    D    C    D    C    D    C    D    C    D    C    D    C    D    C    D    C
>    E  #    #    #    #    #    #    #    #    #    #    #    #    #    #    #    #    #    #    #    #    #    #    #
> ```
> `TS` (row B, col 12) is Mara's re-secured stall. Every other door is a looted shopfront; one is
> booby-trapped (pick or roll it the first time it matters, then keep it). The `C` tiles in row C
> (cols 8 and 17) are wrecked cars, the only cover mid-street. West leads to the town entrance and
> Dried Lake; east to The Church; Row Houses opens off the south side mid-block.
>
> **Room-grid: The Church**
> ```
>      1    2    3    4    5
>   A  .    .    D    .    .    <- E1, west (from Main Street)
>   B  #    .    .    .    #
>   C  #    C    .    C    #    <- pew rows, the nave's only cover
>   D  #    .    ^    .    #    <- ^ = bell-tower stair (elevation)
>   E  #    #    D    #    #    <- E2, south (sacristy door)
> ```
> The nave runs east-west from the front door; the bell-tower stair grants the high-ground
> advantage over the street outside once climbed.
>
> **Room-grid: Town Hall Basement**
> ```
>      1    2    3    4
>   A  .    .    .    .    <- E1 (stairs up to Town Hall proper)
>   B  #    D    #    #
>   C  .    .    .    H    <- H = the sealed hatch down to Secret Lab Beta (DC 17)
> ```
> Short and cramped — this is a passage more than a set-piece, but it's the one place a fight here
> would happen, so it's fixed rather than improvised.

**Crimson Woods** — A dense forest stained an unnatural rust-red by years of anomalous bleed-off.
Visibility is poor and mutant activity is high.
- *The Red Canopy* — the deep forest interior, thick tree cover, short sightlines.
- *Obelisk Shrine* — a crude stone marker erected by Obelisk zealots deep in the woods; treated
  as sacred ground by that faction.
- *Deadfall Clearing* — a wide clearing choked with fallen, petrified-looking trees; common
  mutant nesting ground.
- *Sinkhole Grove* — a cluster of exposed roots and a collapsed sinkhole hiding the entrance to
  the Deep Caverns.
- Grid: 28×28 tiles, dense forest terrain — short sightlines throughout, favors Ambush and Pack
  mutant behavior types.

> **Tactical Layout: Crimson Woods** (map-sketch)
> ```
> [Obelisk Shrine]   (sacred ground to Obelisk — they defend it hard)
>         |
> [The Red Canopy] #~#~#~#~#~#~#~#~#   (thick tree cover, short sightlines throughout)
>         |
> [Deadfall Clearing] #-#-#-#   (petrified fallen trees, mutant nesting ground)
>         |
> [Sinkhole Grove]~~~   (exposed roots; dive to Deep Caverns, DC 16)
> ```
> Exits: W → Vanguard Barracks / Ghost Town · E → Quarry Basin. No landmark here breaks 10+ tiles
> of sightline — this whole zone favors Ambush and Pack mutant behavior for a reason.

---

## Tier 5 — High

| Zone | Hazard | Connects To | Allowed Factions | Notes |
|---|---|---|---|---|
| Quarry Basin | 4 | Crimson Woods, Ship Graveyard, The Antenna Grid | Contractors, Obelisk | Hidden: Underground Labyrinth (Perception DC 18) |
| Ship Graveyard | 4 | Quarry Basin, The Antenna Grid | Wanderers, Raiders | — |
| The Antenna Grid | 4 | Quarry Basin, Ship Graveyard, Abandoned City | Obelisk, Mutant | Hidden: Secret Lab Gamma (Perception DC 18) |

*(Hazard 4+: encounter guaranteed on arrival.)*

### Location Details

**Quarry Basin** — A vast open-pit quarry, terraced walls descending into a flooded, anomaly-
tainted pit floor. Heavy machinery rusts on every ledge.
- *The Terraces* — the stepped quarry walls, offering tiered elevated positions all the way down.
  A repurposed shipping container sits bolted to one of the upper terraces — a Contractor
  equipment shed, locked steel walls, the actual source of the quartermaster's stock rather than
  a bag on the ground.
- *Pit Floor* — the flooded bottom, anomaly activity concentrated here; approach with a Detector.
- *Crane Rig* — a massive derelict excavator crane spanning part of the pit, climbable and
  unstable.
- *Blast Shack* — an old explosives storage shed at the quarry's rim, hiding the entrance to the
  Underground Labyrinth.
- Grid: 30×30 tiles, terraced-elevation terrain — multiple vertical tiers, long diagonal
  sightlines down into the pit.

> **Tactical Layout: Quarry Basin** (map-sketch)
> ```
> [The Terraces]^^^   (stepped walls, tiered elevated positions — Contractor equipment shed up top)
>         |
> [Crane Rig]^~   (derelict excavator crane spanning the pit, climbable and unstable)
>         |
> [Pit Floor]~~~~~~~~~~   (flooded, anomaly-tainted — approach with a Detector)
>         |
> [Blast Shack]~   (quarry rim; dive to Underground Labyrinth, DC 18)
> ```
> Exits: W → Crimson Woods · E → Ship Graveyard / The Antenna Grid. Every tier is a potential
> firing position onto the ones below — treat elevation differences here as significant, not
> cosmetic.

**Ship Graveyard** — A landlocked field of beached and skeletal cargo ships, run aground decades
ago by some catastrophe no one fully explains. Hulls loom like dead whales.
- *The Hulks* — the largest beached freighters, climbable, with interior compartments to clear.
- *Rust Flat* — the open ground between wrecks, exposed but fast to cross.
- *Captain's Row* — a cluster of smaller wrecked vessels favored by Wanderer squatters. One
  hull's intact cargo hold has been converted into shared storage — the squatters' communal trade
  stash lives there, out of the weather and off the open deck.
- Grid: 30×24 tiles, mixed terrain — large ship-hull cover pieces breaking up otherwise open
  ground; strong verticality inside the hulks.

> **Tactical Layout: Ship Graveyard** (map-sketch)
> ```
> [The Hulks]^#^#   (largest beached freighters — room-grid below for interior clearing)
>       |
> [Rust Flat] . . . . . . . . . .   (open ground between wrecks, exposed but fast to cross)
>       |
> [Captain's Row] #-#-#   (smaller wrecks, Wanderer squatters; cargo-hold trade stash)
> ```
> Exits: W → Quarry Basin · E → The Antenna Grid.
>
> **Room-grid: The Hulks** (a beached freighter's interior)
> ```
>      1    2    3    4    5    6
>   A  .    .    .    .    .    .    <- E1, topside deck entrance
>   B  #    D    #    ^    #    D
>   C  .    .    ~    .    .    .    <- ~ = flooded bilge section
>   D  #    D    #    .    #    D
>   E  .    .    .    .    .    .    <- E2, cargo hold (lower level)
> ```
> Watertight compartments connected by hatches (`D`); the bilge is flooded and difficult terrain;
> the `^` ladder reaches an upper catwalk for the high-ground advantage over the hold below.

**The Antenna Grid** — A field of towering derelict transmission antennas humming faintly with
residual anomalous current. Obelisk treats this place as holy ground.
- *The Array* — the central cluster of tall antenna masts, climbable, dangerous in a storm.
- *Relay Station* — a squat concrete building at the array's center, Obelisk's forward outpost.
- *Dead Broadcast Van* — an abandoned mobile broadcast unit, sunk into the mud at the field's edge,
  hiding the hatch down to Secret Lab Gamma.
- Grid: 28×28 tiles, open field terrain with tall vertical antenna-mast cover at regular
  intervals.

> **Tactical Layout: The Antenna Grid** (map-sketch)
> ```
> [The Array] ^-^-^-^-^   (towering masts at regular intervals, climbable, dangerous in a storm)
>       |
> [Relay Station]   (Obelisk's forward outpost — room-grid below)
>       |
> [Dead Broadcast Van]~   (sunk in mud at the field's edge; dive to Secret Lab Gamma, DC 18)
> ```
> Exits: W → Quarry Basin / Ship Graveyard · E → Abandoned City.
>
> **Room-grid: Relay Station**
> ```
>      1    2    3    4    5
>   A  .    .    .    .    .    <- E1, from the antenna field
>   B  #    D    C    D    #
>   C  .    .    ^    .    .    <- ^ = roof-access ladder (overwatch across the whole field)
>   D  #    #    D    #    #
>   E  .    .    .    .    E2   <- toward Dead Broadcast Van
> ```

---

## Tier 6 — Extreme

| Zone | Hazard | Connects To | Allowed Factions | Notes |
|---|---|---|---|---|
| Abandoned City | 5 | The Antenna Grid, Anomalous Epicenter, The Siege Ward | Obelisk, Garrison | Hidden: Underground Bunker (Perception DC 19) |
| Anomalous Epicenter | 5 | Abandoned City | Obelisk | Dead end — extremely hazardous |
| The Siege Ward | 5 | Abandoned City, The Reactor Core | Obelisk, Garrison | Hidden: Siege Catacombs (Perception DC 19) |

*(Hazard 4+: encounter guaranteed on arrival.)*

### Location Details

**Abandoned City** — The evacuated heart of a mid-size city, now a vertical urban battlefield of
collapsed high-rises and Obelisk/Garrison checkpoints fighting over the ruins.
- *Highrise Row* — a line of partially collapsed towers, multi-story interiors, extreme
  verticality.
- *Central Plaza* — a wide open square dominated by a dead fountain, brutal in a firefight — no
  cover in the middle.
- *Subway Entrance* — a caved-in metro stairwell at the plaza's edge; the marked route down to
  the Underground Bunker.
- *Garrison Barricade* — a fortified street barricade marking the edge of Garrison-held territory.
  A sandbagged storeroom built into the ground floor of the building anchoring the barricade holds
  the line's supplies — where the field quartermaster actually pulls stock from, not the
  checkpoint itself.
- Grid: 32×32 tiles, dense vertical urban terrain — heavy building cover, multi-story combat
  possible.

> **Tactical Layout: Abandoned City** (map-sketch)
> ```
> [Highrise Row]^^^#   (collapsed towers, multi-story interiors — room-grid below)
>       |
> [Central Plaza] . . . [dead fountain] . . . .   (wide open square, no cover — brutal in a firefight)
>       |
> [Subway Entrance]~   (caved-in metro stairwell; dive to Underground Bunker, DC 19)
>       |
> [Garrison Barricade]   (fortified street line — room-grid below)
> ```
> Exits: W → The Antenna Grid · E → Anomalous Epicenter / The Siege Ward.
>
> **Room-grid: Highrise Row**
> ```
>       1    2    3    4    5    6    7    8    9   10   11
>    A  .    .    .    .    .    .    .    .    .    .    .    <- E1, Central Plaza side
>    B  #    D    #    C    .    C    .    C    #    D    #
>    C  .    .    ^    .    .    .    .    .    ^    .    .    <- two stairwells climbing through the collapsed floors
>    D  #    #    D    .    C    .    C    .    D    #    #
>    E  .    .    .    .    .    .    .    .    .    .    .    <- E2, deeper into the row
> ```
> Multi-story by design — each `^` stairwell keeps climbing through several collapsed floor
> levels; treat each additional flight as its own move action, and any floor above ground grants
> the high-ground advantage over the plaza.
>
> **Room-grid: Garrison Barricade**
> ```
>       1    2    3    4    5    6    7    8    9
>    A  #    #    D    #    #    #    D    #    #    <- E1, facing outward toward Obelisk territory
>    B  C    .    .    .    C    .    .    .    C
>    C  .    .    .    .    .    .    .    .    .
>    D  C    .    D    ~    ~    ~    D    .    C    <- sandbagged storeroom — where the quartermaster's stock lives
>    E  #    #    #    .    .    .    #    #    #    <- E2, back into Garrison-held territory
> ```
> Two firing points along the barricade line (row A doors) instead of one — a defender doesn't
> have to funnel through the same chokepoint as an attacker coming from the other end of the line.

**Anomalous Epicenter** — The source of the Zone's distortion itself: a churning field of
overlapping anomalies around a crater of impossible, shifting geometry. There is no safe path
through, only a safer path.
- *The Crater Rim* — the outer edge, already anomaly-dense; approach with a Detector or don't
  approach at all.
- *The Wound* — the crater's center, where reality visibly bends; narrative centerpiece, not a
  place to linger.
- *Scattered Relics* — debris and equipment from expeditions that didn't make it back, littering
  the approach.
- Grid: 24×24 tiles, hazard-saturated terrain — treat most of the map as anomaly-eligible; this
  is a dead end and one of the most dangerous zones in the game by design.

> **Tactical Layout: Anomalous Epicenter** (map-sketch)
> ```
> [Scattered Relics] #~#~#   (debris and equipment from expeditions that didn't make it back)
>         |
> [The Crater Rim]~~~~~~~~~~~~~~~~~~~~~~~~~~   (anomaly-dense; a Detector is close to mandatory)
>         |
> [The Wound]!!!   (the crater's center, reality visibly bending — narrative centerpiece, not a
>                    place to linger)
> ```
> Exits: W → Abandoned City only — this is a dead end. Treat almost every tile past the Relics as
> anomaly-eligible per the Grid note above.

**The Siege Ward** — A walled district under permanent siege, Obelisk zealots dug in against a
Garrison counter-offensive that never quite finishes. Trench lines cut through former streets.
- *The Trenches* — dug-in fighting positions crisscrossing the ward, the primary firefight
  terrain.
- *Bell Tower* — a shattered church tower still standing, prime sniper vantage over the whole
  ward.
- *Field Hospital Ruins* — a collapsed aid station, grim atmosphere, occasional salvage.
- *Catacomb Stair* — a stone stairwell beneath the bell tower's crypt, entrance to the Siege
  Catacombs.
- Grid: 30×30 tiles, trench-warfare terrain — linear trench cover networks, exposed ground
  between lines.

> **Tactical Layout: The Siege Ward** (map-sketch)
> ```
> [Bell Tower]^   (shattered church tower, prime sniper vantage over the whole ward)
>      |
> [The Trenches]   (dug-in fighting positions — room-grid below)
>      |
> [Field Hospital Ruins] #~#   (collapsed aid station, grim atmosphere, occasional salvage)
>      |
> [Catacomb Stair]~   (beneath the bell tower's crypt; dive to Siege Catacombs, DC 19)
> ```
> Exits: W → Abandoned City · E → The Reactor Core.
>
> **Room-grid: The Trenches**
>
> ```
>       1    2    3    4    5    6    7    8    9   10   11   12   13   14   15   16   17   18   19   20   21
>    A  .    .    .    .    .    .    C    .    .    .    .    .    .    C    .    .    .    .    .    .    .
>    B  ~    ~    ~    D    ~    ~    ~    ~    ~    D    ~    ~    ~    ~    ~    D    ~    ~    ~    ~    ~
>    C  #    #    #    ~    #    #    #    #    #    ~    #    #    #    #    #    ~    #    #    #    #    #
>    D  #    #    #    ~    #    #    #    #    #    ~    #    #    #    #    #    ~    #    #    #    #    #
>    E  ~    ~    ~    D    ~    ~    ~    ~    ~    D    ~    ~    ~    ~    ~    D    ~    ~    ~    ~    ~
>    F  .    .    .    .    .    .    C    .    .    .    .    .    .    C    .    .    .    .    .    .    .
>    G  .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .
> ```
> Row A = E1 (Obelisk side, open ground); row G = E2 (Garrison side, open ground). Rows B and E are
> the trench lines: difficult terrain, and **hard cover** (+2 AC) against fire from outside the
> trench; dugout doors at cols 4/10/16. Rows C-D are earth; cols 4, 10 and 16 continue through as
> communication trenches, the only way between the lines.

---

## Tier 7 — Certain Death

| Zone | Hazard | Connects To | Allowed Factions | Notes |
|---|---|---|---|---|
| The Reactor Core | 6 | The Siege Ward | Obelisk | Endgame zone. Automatic hostile encounter (Hazard ≥ 4 rule) on every arrival. |

### Location Details

**The Reactor Core** — The Zone's dead heart: a ruined nuclear facility, its containment long
since breached, now the fanatical seat of Obelisk's inner cult. Every arrival here means a fight.
- *Containment Hall* — the vast central chamber housing the ruptured reactor core itself; visibly
  wrong, heavily irradiated.
- *Control Room* — an elevated control gallery overlooking the containment hall, Obelisk's command
  point.
- *Cooling Tunnels* — a maze of maintenance tunnels beneath the facility, tight corridors, easy to
  get surrounded in.
- *The Last Gate* — the blast door sealing the facility's innermost chamber — narrative endgame
  location.
- Grid: 32×32 tiles, mixed industrial/vertical terrain — large open containment hall ringed by
  tight tunnel networks; this is intended as a campaign finale set-piece, escalate accordingly.

> **Tactical Layout: The Reactor Core** — this is the finale set-piece; run it precisely.
>
> **Room-grid: Containment Hall + Control Room**
>
> ```
>       1    2    3    4    5    6    7    8    9   10   11   12   13   14   15   16   17   18   19   20   21   22   23
>    A  .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .
>    B  ^    ^    ^    ^    ^    ^    ^    ^    ^    ^    ^    ^    ^    ^    ^    ^    ^    ^    ^    ^    ^    ^    ^
>    C  .    .    .    .    #    .    .    .    .    .    .    .    .    .    .    .    .    .    #    .    .    .    .
>    D  .    .    .    C    .    .    .    .    C    .    .    .    .    .    C    .    .    .    .    C    .    .    .
>    E  .    .    .    .    .    .    .    .    #    #    #    D    #    #    #    .    .    .    .    .    .    .    .
>    F  .    .    .    .    .    .    .    .    #    !    !    !    !    !    #    .    .    .    .    .    .    .    .
>    G  .    .    .    .    .    .    .    .    #    #    #    D    #    #    #    .    .    .    .    .    .    .    .
>    H  .    .    .    C    .    .    .    .    C    .    .    .    .    .    C    .    .    .    .    C    .    .    .
>    I  .    .    .    .    #    .    .    .    .    .    .    .    .    .    .    .    .    .    #    .    .    .    .
>    J  .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .    .
> ```
> Rows A-B: Control Room gallery, full width (high ground over the whole hall). Rows E-G: the
> containment ring around the ruptured core (row F `!` = Radiation Pocket hazard, file 03); the
> only ways in are the two `D` doors at col 12. Rows C, D, H, I: hall floor with pillar and pipe
> cover. Row J: floor approach. E1 (west, ~col 2) = Cooling Tunnels; E2 (east, ~col 22) = The Last
> Gate.
>
> **Room-grid: Cooling Tunnels**
> ```
>      1    2    3    4    5    6    7    8
>   A  E1   .    #    .    #    .    .    .
>   B  #    .    #    .    #    .    #    .
>   C  .    .    .    .    .    .    #    .
>   D  .    #    #    .    #    #    .    E2
>   E  .    .    #    .    .    .    #    .
> ```
> Tight corridors, no ranged sightlines beyond a few tiles — this is where "easy to get surrounded
> in" becomes literal; don't let the player get pinned here without at least one visible way out.

---

## Hidden Sub-Nodes

Reached only from their parent zone after a successful search (Perception vs DC).

| Zone | Tier | Hazard | Parent Zone | Perception DC |
|---|---|---|---|---|
| Secret Cave Area | 1 | 1 | The Perimeter | 14 |
| Secret Lab Alpha | 2 | 2 | Industrial Basin | 15 |
| Sub-Station Depths | 3 | 3 | Dried Lake Sub-Station | 16 |
| Maintenance Tunnels | 3 | 3 | The Rail-Yards | 15 |
| Secret Lab Beta | 4 | 4 | Ghost Town | 17 |
| Deep Caverns | 4 | 4 | Crimson Woods | 16 |
| Underground Labyrinth | 5 | 5 | Quarry Basin | 18 |
| Secret Lab Gamma | 5 | 5 | The Antenna Grid | 18 |
| Underground Bunker | 6 | 6 | Abandoned City | 19 |
| Siege Catacombs | 6 | 6 | The Siege Ward | 19 |

### Location Details

**Secret Cave Area** (via Rust Culvert, The Perimeter) — A shallow natural cave system, damp and
low-ceilinged, used as a stash spot by whoever found it first.
- *Stash Nook* — a dry alcove with old crates, the usual loot payoff for finding this node.
- *Cave Mouth* — the entrance chamber, still lit by daylight from outside.
- Grid: 16×12 tiles, tight cave terrain — low ceilings, narrow passages.

> **Room-grid: Secret Cave Area**
> ```
>      1    2    3    4    5    6    7
>   A  E1   .    .    .    .    .    .    <- Cave Mouth (daylight from outside)
>   B  ~    ~    #    ~    ~    #    ~
>   C  .    .    .    .    .    .    C
>   D  ~    #    ~    .    ~    #    ~    <- Stash Nook (old crates)
> ```

**Secret Lab Alpha** (via Loading Dock, Industrial Basin) — A sealed pre-Zone research annex,
undisturbed since the incident that made this place what it is.
- *Reception Airlock* — the sealed entry chamber, control panel long dead, hatch forced open.
- *Sample Storage* — shelves of ruined specimen containers, unsettling but low threat.
- Grid: 18×14 tiles, cramped indoor lab terrain.

> **Room-grid: Secret Lab Alpha**
> ```
>      1    2    3    4    5    6
>   A  E1   D    .    .    .    .    <- Reception Airlock (hatch already forced open)
>   B  #    .    .    C    .    #
>   C  .    .    C    .    C    .    <- Sample Storage (shelves of ruined containers)
> ```

**Sub-Station Depths** (via Drainage Sump, Dried Lake Sub-Station) — Flooded sub-basement levels
beneath the sub-station, cabling and old equipment submerged in stagnant water.
- *Flooded Corridor* — ankle-to-knee-deep water throughout, difficult terrain.
- *Transformer Vault* — the lowest chamber, heart of the old power system.
- Grid: 18×18 tiles, flooded indoor terrain — most tiles count as difficult terrain.

> **Room-grid: Sub-Station Depths**
> ```
>      1    2    3    4    5    6    7
>   A  E1   ~    ~    ~    ~    ~    ~    <- Flooded Corridor (difficult terrain throughout)
>   B  ~    ~    #    ~    #    ~    ~
>   C  ~    ~    ~    ~    ~    ~    H    <- Transformer Vault (H = the old power core)
> ```

**Maintenance Tunnels** (via Rail Culvert, The Rail-Yards) — A narrow service-tunnel network
running beneath the yard, used by rail workers decades ago.
- *Tunnel Junction* — a four-way branch point, easy to get turned around.
- *Collapsed Section* — a partial cave-in forcing a crawl-through chokepoint.
- Grid: 20×14 tiles, narrow tunnel terrain — heavy chokepoints, no ranged sightlines beyond a few
  tiles.

> **Room-grid: Maintenance Tunnels**
> ```
>      1    2    3    4    5    6    7
>   A  .    .    .    E1   .    .    .    <- Tunnel Junction, four routes branch from here
>   B  .    #    .    #    .    #    .
>   C  .    .    .    ~    .    .    .    <- Collapsed Section (crawl-through chokepoint)
> ```

**Secret Lab Beta** (via Town Hall Basement, Ghost Town) — A second pre-Zone research site, larger
and better preserved than Alpha, hidden under the evacuated town.
- *Archive Room* — intact filing and old terminals, good Intelligence-check flavor.
- *Isolation Ward* — a row of sealed cells, deeply unsettling, worth investigating carefully.
- Grid: 20×18 tiles, indoor lab/medical terrain.

> **Room-grid: Secret Lab Beta**
> ```
>      1    2    3    4    5    6    7    8
>   A  E1   .    .    .    .    .    .    .    <- Archive Room (filing and old terminals)
>   B  #    D    #    D    #    D    #    D
>   C  .    .    C    C    C    C    C    C    <- Isolation Ward (row of sealed cells)
> ```

**Deep Caverns** (via Sinkhole Grove, Crimson Woods) — A natural cavern system beneath the
forest, roots hanging through the ceiling, unnaturally warm.
- *Root Hall* — a wide chamber choked with hanging roots, poor sightlines.
- *Crystal Pool* — a still underground pool with a faint anomalous glow.
- Grid: 20×20 tiles, cave terrain with irregular natural cover.

> **Room-grid: Deep Caverns**
> ```
>      1    2    3    4    5    6    7
>   A  E1   C    .    C    .    .    .    <- Root Hall (hanging roots, poor sightlines)
>   B  C    .    C    .    C    .    C
>   C  .    .    .    .    .    .    ~    <- Crystal Pool (anomalous glow; treat as shallow water)
> ```

**Underground Labyrinth** (via Blast Shack, Quarry Basin) — An extensive maintenance tunnel
network beneath the quarry, genuinely easy to get lost in.
- *The Fork* — the labyrinth's main branching point, three routes diverging.
- *Cave-In Chamber* — a partially collapsed hall, unstable footing.
- Grid: 24×24 tiles, maze-like tunnel terrain — deliberately disorienting layout.

> **Room-grid: Underground Labyrinth**
> ```
>      1    2    3    4    5    6    7    8    9
>   A  .    #    .    #    E1   #    .    #    .    <- The Fork: three routes diverge from here
>   B  #    .    #    .    #    .    #    .    #
>   C  .    .    ~    .    ~    .    ~    .    .    <- Cave-In Chamber (unstable footing, difficult terrain)
> ```

**Secret Lab Gamma** (via Dead Broadcast Van, The Antenna Grid) — A hidden Obelisk research site
built beneath the antenna field, tied to whatever the array is really broadcasting.
- *Signal Room* — banks of dead equipment still faintly humming.
- *Sealed Vault* — a reinforced door, the node's main loot payoff.
- Grid: 20×20 tiles, indoor lab terrain with anomalous ambient hum (flavor only).

> **Room-grid: Secret Lab Gamma**
> ```
>      1    2    3    4    5    6    7
>   A  E1   .    .    .    .    .    .    <- Signal Room (dead equipment, faint hum)
>   B  #    D    #    .    #    D    #
>   C  .    .    .    .    .    .    H    <- Sealed Vault (H = reinforced door, the main loot payoff)
> ```

**Underground Bunker** (via Subway Entrance, Abandoned City) — A Cold-War-era civil defense
bunker beneath the city, sealed since before the Zone existed.
- *Blast Door Foyer* — the entry chamber, heavy sealed door already forced.
- *Ration Stores* — old emergency supplies, mostly spoiled, some salvageable.
- Grid: 22×20 tiles, reinforced-concrete bunker terrain.

> **Room-grid: Underground Bunker**
> ```
>      1    2    3    4    5    6    7
>   A  E1   D    .    .    .    .    .    <- Blast Door Foyer (heavy door already forced)
>   B  #    #    D    #    #    #    #
>   C  .    .    .    .    C    C    C    <- Ration Stores (spoiled/salvageable supplies)
> ```

**Siege Catacombs** (via Catacomb Stair, The Siege Ward) — Stone burial vaults beneath the
church, predating the siege by centuries, now a bolt-hole for whoever's losing the fight above.
- *Ossuary* — shelves of old bones lining the walls, deeply atmospheric.
- *Sealed Crypt* — the deepest chamber, locked, worth a stat check to open.
- Grid: 20×18 tiles, stone catacomb terrain — narrow winding passages.

> **Room-grid: Siege Catacombs**
> ```
>      1    2    3    4    5    6    7
>   A  E1   .    .    .    .    .    .    <- Ossuary (bone-lined walls)
>   B  #    D    #    .    #    D    #
>   C  .    .    .    .    .    .    H    <- Sealed Crypt (H = locked door, worth a stat check to open)
> ```

---

## Trading outside the Hub

Scavenger's Hub (the Bazaar) is the only full market. These smaller channels use the same prices
(file 05), loot tables (file 07) and sell-back rules (file 08).

### 1. Faction Outposts (static traders)

One quartermaster per outpost, named in file 09 (storyline arcs). Trades only at the listed
reputation; Hostile factions attack on sight. Friendly = the usual discount.

| Zone (Tier) | Landmark | Quartermaster | Faction | Stock Table | Access |
|---|---|---|---|---|---|
| The Perimeter (1) | Bonfire Camp | Old Man Yefim (footlocker lean-to) | Wanderers | Tier 1 | Open to all |
| Smuggler's Run (1) | The Cutting | The Runner (tarped handcart) | Wanderers/Raiders (whoever holds the corridor) | Tier 1 | Neutral+ |
| The Scrapyard (2) | Scrap King's Nest | The Scrap King — a fence, buys more than he sells | Raiders | Tier 1-2 | Neutral+ |
| The Rail-Yards (3) | Roundhouse | Foreman Voss | Contractors | Tier 2-3 | Neutral+; Friendly gets first pick |
| Dried Lake Sub-Station (3) | Sub-Station House | Dr. Priya Osei (Ecologist field cache) | Ecologist | Tier 2-3; reroll weapons as Consumable or Detector | Neutral+ |
| Vanguard Barracks (4) | Command Post | Sergeant Kade | Whoever holds the barracks (Liberators or Sentinels) | Tier 3-4 | Friendly only |
| Ghost Town (4) | Main Street (TS stall) | Mara "Padlock" | Independent | Tier 3 | Open to all; prices at the top of the ±10-30% band until her arc is finished |
| Quarry Basin (5) | The Terraces (equipment shed) | Quartermaster Iryna | Contractors | Tier 4 | Friendly only |
| Ship Graveyard (5) | Captain's Row (cargo-hold stash) | Elder Bosch | Wanderers | Tier 3-4 | Neutral+ |
| The Antenna Grid (5) | Relay Station | Brother Anatoly | Obelisk | Tier 4 | Friendly only; others attacked on sight |
| Abandoned City (6) | Garrison Barricade (storeroom) | Corporal Danika Rusa | Garrison | Tier 4-5 | Friendly only |

No static trader in: Toxic Marshes, Industrial Basin, Black Valley, Crimson Woods, Anomalous
Epicenter, The Siege Ward, The Reactor Core.

### 2. Wandering traders

On a **safe arrival** in a Tier 2+ zone that isn't a Safe Zone, roll d20: **18-20** = a wandering
trader (caravan, peddler, Wanderer with a mule) is here this scene only.
* Stock: 4-6 rolls on the table for **zone Tier − 1** (minimum Tier 1). No Tier Drift.
* Prices: top of the ±10-30% band (normal band if Friendly with their faction).
* At most one wandering-trader roll per zone per session.

### 3. Trading with a Friendly or non-hostile NPC

When an encounter would spawn a Friendly faction's NPCs, or the GM narrates a non-hostile contact,
the player may trade with them instead. Never Hostile factions or mutants.
* Stock: 1d4 rolls on the zone's Tier table (what they personally carry).
* Prices: top of the band, or the Friendly discount. One-time trade.

---

### Suggested route through the Zone (main line)
The Perimeter → Toxic Marshes/Smuggler's Run → The Scrapyard/Industrial Basin → Black Valley →
**Scavenger's Hub (safe)** → The Rail-Yards/Dried Lake Sub-Station → Vanguard Barracks/Ghost Town
→ Crimson Woods → Quarry Basin → Ship Graveyard/The Antenna Grid → Abandoned City →
Anomalous Epicenter/The Siege Ward → The Reactor Core.

Hidden sub-nodes are optional detours off this route, found by searching.
