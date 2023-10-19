import { Move } from "../../classes";
import { AttackType, TypeName } from "../../enums";

export const gen6Moves: Move[] = [
  {
    name: "flyingpress",
    displayName: "Flying Press",
    generation: 6,
    type: TypeName.Fighting,
    attackType: AttackType.Physical,
    signatureOf: "Hawlucha",
    description:
      "The user dives down onto the target from the sky. This move is Fighting and Flying type simultaneously."
  },
  {
    name: "matblock",
    displayName: "Mat Block",
    generation: 6,
    type: TypeName.Fighting,
    attackType: AttackType.Status,
    signatureOf: "Greninja",
    description:
      "Using a pulled-up mat as a shield, the user protects itself and its allies from damaging moves. This does not stop status moves."
  },
  {
    name: "belch",
    displayName: "Belch",
    generation: 6,
    type: TypeName.Poison,
    attackType: AttackType.Special,
    description: "The user lets out a damaging belch on the target. The user must eat a Berry to use this move."
  },
  {
    name: "rototiller",
    displayName: "Rototiller",
    generation: 6,
    type: TypeName.Ground,
    attackType: AttackType.Status,
    description:
      "Tilling the soil, the user makes it easier for plants to grow. This raises the Attack and Sp. Atk stats of Grass-type Pokémon."
  },
  {
    name: "stickyweb",
    displayName: "Sticky Web",
    generation: 6,
    type: TypeName.Bug,
    attackType: AttackType.Status,
    description:
      "The user weaves a sticky net around the opposing team, which lowers their Speed stat upon switching into battle."
  },
  {
    name: "fellstinger",
    displayName: "Fell Stinger",
    generation: 6,
    type: TypeName.Bug,
    attackType: AttackType.Physical,
    description: "When the user knocks out a target with this move, the user's Attack stat is boosted drastically."
  },
  {
    name: "phantomforce",
    displayName: "Phantom Force",
    generation: 6,
    type: TypeName.Ghost,
    attackType: AttackType.Physical,
    description:
      "The user vanishes somewhere, then strikes the target on the next turn. This move hits even if the target protects itself."
  },
  {
    name: "trickortreat",
    displayName: "Trick-or-Treat",
    generation: 6,
    type: TypeName.Ghost,
    attackType: AttackType.Status,
    signatureOf: "Pumpkaboo, Gourgeist",
    description: "The user takes the target trick-or-treating. This adds Ghost type to the target's type."
  },
  {
    name: "nobleroar",
    displayName: "Noble Roar",
    generation: 6,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    signatureOf: "Litleo, Pyroar",
    description: "Letting out a noble roar, the user intimidates the target and lowers its Attack and Sp. Atk stats."
  },
  {
    name: "iondeluge",
    displayName: "Ion Deluge",
    generation: 6,
    type: TypeName.Electric,
    attackType: AttackType.Status,
    description:
      "The user disperses electrically charged particles, which changes Normal-type moves to Electric-type moves."
  },
  {
    name: "paraboliccharge",
    displayName: "Parabolic Charge",
    generation: 6,
    type: TypeName.Electric,
    attackType: AttackType.Special,
    description:
      "The user attacks everything around it. The user's HP is restored by half the damage taken by those hit."
  },
  {
    name: "forestscurse",
    displayName: "Forest's Curse",
    generation: 6,
    type: TypeName.Grass,
    attackType: AttackType.Status,
    signatureOf: "Phantump, Trevenant",
    description: "The user puts a forest curse on the target. This adds Grass type to the target's type."
  },
  {
    name: "petalblizzard",
    displayName: "Petal Blizzard",
    generation: 6,
    type: TypeName.Grass,
    attackType: AttackType.Physical,
    description: "The user stirs up a violent petal blizzard and damages everything around it."
  },
  {
    name: "freezedry",
    displayName: "Freeze-Dry",
    generation: 6,
    type: TypeName.Ice,
    attackType: AttackType.Special,
    description:
      "The user rapidly cools the target. This may also leave the target frozen. This move is super effective on Water types."
  },
  {
    name: "disarmingvoice",
    displayName: "Disarming Voice",
    generation: 6,
    type: TypeName.Fairy,
    attackType: AttackType.Special,
    description:
      "Letting out a charming cry, the user does emotional damage to opposing Pokémon. This attack never misses."
  },
  {
    name: "partingshot",
    displayName: "Parting Shot",
    generation: 6,
    type: TypeName.Dark,
    attackType: AttackType.Status,
    signatureOf: "Pancham, Pangoro, Bombirdier",
    description:
      "With a parting threat, the user lowers the target's Attack and Sp. Atk stats. Then it switches places with a party Pokémon in waiting."
  },
  {
    name: "topsyturvy",
    displayName: "Topsy-Turvy",
    generation: 6,
    type: TypeName.Dark,
    attackType: AttackType.Status,
    signatureOf: "Inkay, Malamar",
    description: "All stat changes affecting the target turn topsy-turvy and become the opposite of what they were."
  },
  {
    name: "drainingkiss",
    displayName: "Draining Kiss",
    generation: 6,
    type: TypeName.Fairy,
    attackType: AttackType.Special,
    description:
      "The user steals the target's HP with a kiss. The user's HP is restored by over half the damage taken by the target."
  },
  {
    name: "craftyshield",
    displayName: "Crafty Shield",
    generation: 6,
    type: TypeName.Fairy,
    attackType: AttackType.Status,
    signatureOf: "Klefki",
    description:
      "The user protects itself and its allies from status moves with a mysterious power. This does not stop moves that do damage."
  },
  {
    name: "flowershield",
    displayName: "Flower Shield",
    generation: 6,
    type: TypeName.Fairy,
    attackType: AttackType.Status,
    description: "The user raises the Defense stats of all Grass-type Pokémon in battle with a mysterious power."
  },
  {
    name: "grassyterrain",
    displayName: "Grassy Terrain",
    generation: 6,
    type: TypeName.Grass,
    attackType: AttackType.Status,
    description:
      "The user turns the ground into Grassy Terrain for five turns. This restores the HP of Pokémon on the ground a little every turn and powers up Grass-type moves."
  },
  {
    name: "mistyterrain",
    displayName: "Misty Terrain",
    generation: 6,
    type: TypeName.Fairy,
    attackType: AttackType.Status,
    description:
      "This protects Pokémon on the ground from status conditions and halves damage from Dragon-type moves for five turns."
  },
  {
    name: "electrify",
    displayName: "Electrify",
    generation: 6,
    type: TypeName.Electric,
    attackType: AttackType.Status,
    signatureOf: "Helioptile, Heliolisk",
    description:
      "If the target is electrified before it uses a move, the target's move becomes Electric type for that turn."
  },
  {
    name: "playrough",
    displayName: "Play Rough",
    generation: 6,
    type: TypeName.Fairy,
    attackType: AttackType.Physical,
    description: "The user attacks by playing rough with the target. This may also lower the target's Attack stat."
  },
  {
    name: "fairywind",
    displayName: "Fairy Wind",
    generation: 6,
    type: TypeName.Fairy,
    attackType: AttackType.Special,
    description: "The user attacks by stirring up a fairy wind to strike the target."
  },
  {
    name: "moonblast",
    displayName: "Moonblast",
    generation: 6,
    type: TypeName.Fairy,
    attackType: AttackType.Special,
    description:
      "Borrowing the power of the moon, the user attacks the target. This may also lower the target's Sp. Atk stat."
  },
  {
    name: "boomburst",
    displayName: "Boomburst",
    generation: 6,
    type: TypeName.Normal,
    attackType: AttackType.Special,
    description: "The user attacks everything around it with the destructive power of a terrible explosive sound."
  },
  {
    name: "fairylock",
    displayName: "Fairy Lock",
    generation: 6,
    type: TypeName.Fairy,
    attackType: AttackType.Status,
    signatureOf: "Klefki",
    description: "By locking down the battlefield, the user keeps all Pokémon from fleeing during the next turn."
  },
  {
    name: "kingsshield",
    displayName: "King's Shield",
    generation: 6,
    type: TypeName.Steel,
    attackType: AttackType.Status,
    signatureOf: "Aegislash",
    description:
      "The user takes a defensive stance while it protects itself from damage. This also lowers the Attack stat of any attacker that makes direct contact."
  },
  {
    name: "playnice",
    displayName: "Play Nice",
    generation: 6,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description:
      "The user and the target become friends, and the target loses its will to fight. This lowers the target's Attack stat."
  },
  {
    name: "confide",
    displayName: "Confide",
    generation: 6,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    signatureOf: "Impidimp, Morgrem, Grimmsnarl",
    description:
      "The user tells the target a secret, and the target loses its ability to concentrate. This lowers the target's Sp. Atk stat."
  },
  {
    name: "diamondstorm",
    displayName: "Diamond Storm",
    generation: 6,
    type: TypeName.Rock,
    attackType: AttackType.Physical,
    signatureOf: "Diancie",
    description:
      "The user whips up a storm of diamonds to damage opposing Pokémon. This may also sharply boost the user's Defense stat."
  },
  {
    name: "steameruption",
    displayName: "Steam Eruption",
    generation: 6,
    type: TypeName.Water,
    attackType: AttackType.Special,
    signatureOf: "Volcanion",
    description: "The user immerses the target in superheated steam. This may also leave the target with a burn."
  },
  {
    name: "hyperspacehole",
    displayName: "Hyperspace Hole",
    generation: 6,
    type: TypeName.Psychic,
    attackType: AttackType.Special,
    signatureOf: "Hoopa Confined",
    description:
      "Using a hyperspace hole, the user appears right next to the target and strikes. This attack can hit a target using a move such as Protect or Detect."
  },
  {
    name: "watershuriken",
    displayName: "Water Shuriken",
    generation: 6,
    type: TypeName.Water,
    attackType: AttackType.Special,
    signatureOf: "Accelgor, Greninja",
    description: "The user hits the target with throwing stars two to five times in a row. This move always goes first."
  },
  {
    name: "mysticalfire",
    displayName: "Mystical Fire",
    generation: 6,
    type: TypeName.Fire,
    attackType: AttackType.Special,
    description: "The user attacks by breathing a special, hot fire. This also lowers the target's Sp. Atk stat."
  },
  {
    name: "spikyshield",
    displayName: "Spiky Shield",
    generation: 6,
    type: TypeName.Grass,
    attackType: AttackType.Status,
    description:
      "In addition to protecting the user from attacks, this move also damages any attacker that makes direct contact."
  },
  {
    name: "aromaticmist",
    displayName: "Aromatic Mist",
    generation: 6,
    type: TypeName.Fairy,
    attackType: AttackType.Status,
    signatureOf: "Aromatisse",
    description: "The user raises the Sp. Def stat of an ally Pokémon by using a mysterious aroma."
  },
  {
    name: "eerieimpulse",
    displayName: "Eerie Impulse",
    generation: 6,
    type: TypeName.Electric,
    attackType: AttackType.Status,
    description:
      "The user's body generates an eerie impulse. Exposing the target to it harshly lowers the target's Sp. Atk stat."
  },
  {
    name: "venomdrench",
    displayName: "Venom Drench",
    generation: 6,
    type: TypeName.Poison,
    attackType: AttackType.Status,
    description:
      "Opposing Pokémon are drenched in an odd poisonous liquid. This lowers the Attack, Sp. Atk, and Speed stats of a poisoned target."
  },
  {
    name: "powder",
    displayName: "Powder",
    generation: 6,
    type: TypeName.Bug,
    attackType: AttackType.Status,
    signatureOf: "Vivillon",
    description:
      "The user covers the target in a combustible powder. If the target uses a Fire-type move, the powder explodes and damages the target."
  },
  {
    name: "geomancy",
    displayName: "Geomancy",
    generation: 6,
    type: TypeName.Fairy,
    attackType: AttackType.Status,
    signatureOf: "Xerneas",
    description:
      "The user absorbs energy on the first turn, then sharply boosts its Sp. Atk, Sp. Def, and Speed stats on the next turn."
  },
  {
    name: "magneticflux",
    displayName: "Magnetic Flux",
    generation: 6,
    type: TypeName.Electric,
    attackType: AttackType.Status,
    description:
      "The user manipulates magnetic fields, which boosts the Defense and Sp. Def stats of ally Pokémon with the Plus Ability or the Minus Ability."
  },
  {
    name: "happyhour",
    displayName: "Happy Hour",
    generation: 6,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "Using Happy Hour doubles the amount of prize money received after battle."
  },
  {
    name: "electricterrain",
    displayName: "Electric Terrain",
    generation: 6,
    type: TypeName.Electric,
    attackType: AttackType.Status,
    description:
      "The user turns the ground into Electric Terrain for five turns, powering up Electric-type moves. Pokémon on the ground can no longer fall asleep."
  },
  {
    name: "dazzlinggleam",
    displayName: "Dazzling Gleam",
    generation: 6,
    type: TypeName.Fairy,
    attackType: AttackType.Special,
    description: "The user damages opposing Pokémon by emitting a powerful flash."
  },
  {
    name: "celebrate",
    displayName: "Celebrate",
    generation: 6,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "The Pokémon congratulates you on your special day!"
  },
  {
    name: "holdhands",
    displayName: "Hold Hands",
    generation: 6,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "The user and an ally hold hands. This makes them very happy."
  },
  {
    name: "babydolleyes",
    displayName: "Baby-Doll Eyes",
    generation: 6,
    type: TypeName.Fairy,
    attackType: AttackType.Status,
    description:
      "The user stares at the target with its baby-doll eyes, which lowers the target's Attack stat. This move always goes first."
  },
  {
    name: "nuzzle",
    displayName: "Nuzzle",
    generation: 6,
    type: TypeName.Electric,
    attackType: AttackType.Physical,
    description:
      "The user attacks by nuzzling its electrified cheeks against the target. This also leaves the target with paralysis."
  },
  {
    name: "holdback",
    displayName: "Hold Back",
    generation: 6,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description: "The user holds back when it attacks, and the target is left with at least 1 HP."
  },
  {
    name: "infestation",
    displayName: "Infestation",
    generation: 6,
    type: TypeName.Bug,
    attackType: AttackType.Special,
    description: "The target is infested and attacked for four to five turns. The target can't flee during this time."
  },
  {
    name: "poweruppunch",
    displayName: "Power-Up Punch",
    generation: 6,
    type: TypeName.Fighting,
    attackType: AttackType.Physical,
    description:
      "Striking opponents over and over makes the user's fists harder. Hitting a target raises the Attack stat."
  },
  {
    name: "oblivionwing",
    displayName: "Oblivion Wing",
    generation: 6,
    type: TypeName.Flying,
    attackType: AttackType.Special,
    signatureOf: "Yveltal",
    description:
      "The user absorbs the target's HP. The user's HP is restored by over half the damage taken by the target."
  },
  {
    name: "thousandarrows",
    displayName: "Thousand Arrows",
    generation: 6,
    type: TypeName.Ground,
    attackType: AttackType.Physical,
    signatureOf: "Zygarde",
    description:
      "This move can hit opposing Pokémon that are in the air. Those Pokémon will be knocked down to the ground."
  },
  {
    name: "thousandwaves",
    displayName: "Thousand Waves",
    generation: 6,
    type: TypeName.Ground,
    attackType: AttackType.Physical,
    signatureOf: "Zygarde",
    description: "The user attacks with a wave that crawls along the ground. Those it hits can't flee from battle."
  },
  {
    name: "landswrath",
    displayName: "Land's Wrath",
    generation: 6,
    type: TypeName.Ground,
    attackType: AttackType.Physical,
    signatureOf: "Zygarde",
    description: "The user gathers the energy of the land and focuses that power on opposing Pokémon to inflict damage."
  },
  {
    name: "lightofruin",
    displayName: "Light of Ruin",
    generation: 6,
    type: TypeName.Fairy,
    attackType: AttackType.Special,
    signatureOf: "Eternal Floette",
    description:
      "Drawing power from the Eternal Flower, the user fires a powerful beam of light. This also damages the user terribly."
  },
  {
    name: "originpulse",
    displayName: "Origin Pulse",
    generation: 6,
    type: TypeName.Water,
    attackType: AttackType.Special,
    signatureOf: "Kyogre",
    description: "The user attacks opposing Pokémon with countless beams of light that glow a deep and brilliant blue."
  },
  {
    name: "precipiceblades",
    displayName: "Precipice Blades",
    generation: 6,
    type: TypeName.Ground,
    attackType: AttackType.Physical,
    signatureOf: "Groudon",
    description: "The user attacks opposing Pokémon by manifesting the power of the land in fearsome blades of stone."
  },
  {
    name: "dragonascent",
    displayName: "Dragon Ascent",
    generation: 6,
    type: TypeName.Flying,
    attackType: AttackType.Physical,
    signatureOf: "Rayquaza",
    description:
      "The user attacks the target by dropping out of the sky at high speed. This also lowers the user's Defense and Sp. Def stats."
  },
  {
    name: "hyperspacefury",
    displayName: "Hyperspace Fury",
    generation: 6,
    type: TypeName.Dark,
    attackType: AttackType.Physical,
    signatureOf: "Hoopa Unbound",
    description:
      "Using its many arms, the user unleashes a barrage of attacks that ignore the effects of moves like Protect and Detect. This also lowers the user's Defense stat."
  }
];
