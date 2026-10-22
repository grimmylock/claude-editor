# Artifacts & Anomalies

## Artifacts

Each artifact uses 1 Belt Slot, weighs 0.5kg (legendaries 0.8kg) and lowers Anom-DR while worn
(halved by Artifact Handler).

**Same family doesn't stack:** in each family (Gravitational, Chemical, Thermal, Electrical) only
the strongest worn artifact gives its bonus; extras still apply their penalty. Each legendary is
its own family.

### Gravitational (Carry Weight)
| Artifact | Tier | Anom-DR Penalty | Effect |
|---|---|---|---|
| Jellyfish | 1 | -5% | +5kg Carry Weight |
| Vyvert | 2 | -10% | +10kg Carry Weight |
| Gravi | 3 | -15% | +15kg Carry Weight |
| Goldfish | 5 | -25% | +30kg Carry Weight |

### Chemical (Auto-Regeneration)
| Artifact | Tier | Anom-DR Penalty | Effect |
|---|---|---|---|
| Blood Stone | 1 | -5% | +1 HP regen/turn |
| Fiery Rouge | 2 | -10% | +2 HP regen/turn |
| Battery | 3 | -15% | +3 HP regen/turn |
| Firefly | 5 | -25% | +5 HP regen/turn |

### Thermal (Bleeding Control)
| Artifact | Tier | Anom-DR Penalty | Effect |
|---|---|---|---|
| Droplets | 1 | -5% | Bleeding deals 3 HP/turn instead of 5 |
| Stone Blood | 2 | -10% | Bleeding deals 1 HP/turn instead of 5 |
| Mama's Beads | 4 | -20% | Negates bleeding damage entirely |

### Electrical (MP & Anomaly Avoidance)
| Artifact | Tier | Anom-DR Penalty | Effect |
|---|---|---|---|
| Sparkler | 1 | -5% | +1 MP |
| Flash | 3 | -15% | +1 MP, +1 to anomaly avoidance checks |
| Snowflake | 5 | -25% | +2 MP, +2 to anomaly avoidance checks |

### Tier 6 — Legendaries
Never sold or rolled. Each has a fixed location (file 09, Part 3).

| Artifact | Anom-DR Penalty | Effect |
|---|---|---|
| Heart of the Oasis | -30% | +10 HP regen/turn, immune to bleeding |
| The Compass | -30% | Automatically passes all anomaly avoidance checks |
| Lucifer | -40% | +1 AP, +10% Phys-DR, +10% Anom-DR, but Max HP reduced to 75 |
| The Black Star (Awakened) | -35% | Bypasses 30% of target's Phys-DR on attacks, kills refund 1 AP, but Carry Weight -10kg |

---

## Anomalies

Avoidance check and damage: file 00, Section 9. On failure, apply the damage and the effect below.

| Anomaly | DC | Base Damage | Damage Type | Effect on Failure |
|---|---|---|---|---|
| Burner | 12 | 50 | Anomalous | Burn damage. On a natural 1, also destroys one random medical consumable from inventory. |
| Electro | 14 | 60 | Anomalous | Inflicts 2 AP drain, applied at the start of the victim's next turn. |
| Fruit Punch | 11 | 30 | Anomalous | Inflicts Toxic Bleed (5 HP/turn until cured with a Bandage). |
| Whirligig | 15 | 80 | Physical | Knocks the victim Prone and throws them 2 tiles away from the anomaly. |
| Radiation Pocket | — (no check) | 10 | Anomalous | Always hits unless the victim has the Closed-Breathing armor mod (full negation). Inflicts the Irradiated status. |

**Detector bonuses to the avoidance roll:**
| Detector | Range | Price (Ru) | Avoidance Bonus | Notes |
|---|---|---|---|---|
| Echo | 3cm / ~1 tile | 1000 | +1 | Short-range |
| Bear | 6cm / ~2 tiles | 3000 | +2 | — |
| Veles | 9cm / ~4 tiles | 10000 | +3 | Long-range |
| Svarog | 15cm / ~6 tiles | 15000 | +4 | Passively reveals anomalies within range without needing to trigger them |

---

## Finding Artifacts

After resolving an anomaly (pass or fail), spend 1 action to search it:
**d20 + Perception mod + detector bonus vs DC 15.**
* **Success:** an artifact is there. Roll evenly among the zone tier's Artifact pool (file 07); Tier
  Drift applies (25% chance of one tier lower).
* **Failure:** nothing. Each anomaly holds at most one artifact and can be searched only once
  (Emissions and Anomaly Shifts reset this — file 10).
* **Svarog:** within its 6-tile range it tells you whether an artifact is there before you search.
* No detector: allowed, without the bonus.
