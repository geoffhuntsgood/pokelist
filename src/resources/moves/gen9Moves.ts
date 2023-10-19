import { Move } from "../../classes";
import { AttackType, TypeName } from "../../enums";

export const gen9Moves: Move[] = [
  {
    name: "terablast",
    displayName: "Tera Blast",
    generation: 9,
    type: TypeName.Normal,
    attackType: AttackType.Special,
    description:
      "If the user has Terastallized, it unleashes energy of its Tera Type. This move inflicts damage using the Attack or Sp. Atk stat—whichever is higher for the user."
  },
  {
    name: "silktrap",
    displayName: "Silk Trap",
    generation: 9,
    type: TypeName.Bug,
    attackType: AttackType.Status,
    description:
      "The user spins a silken trap, protecting itself from damage while lowering the Speed stat of any attacker that makes direct contact."
  },
  {
    name: "axekick",
    displayName: "Axe Kick",
    generation: 9,
    type: TypeName.Fighting,
    attackType: AttackType.Physical,
    description:
      "The user attacks by kicking up into the air and slamming its heel down upon the target. This may also confuse the target. If it misses, the user takes damage instead."
  },
  {
    name: "lastrespects",
    displayName: "Last Respects",
    generation: 9,
    type: TypeName.Ghost,
    attackType: AttackType.Physical,
    signatureOf: "Houndstone",
    description:
      "	The user attacks to avenge its allies. The more defeated allies there are in the user's party, the greater the move's power."
  },
  {
    name: "luminacrash",
    displayName: "Lumina Crash",
    generation: 9,
    type: TypeName.Psychic,
    attackType: AttackType.Special,
    signatureOf: "Espathra",
    description:
      "The user attacks by unleashing a peculiar light that even affects the mind. This also harshly lowers the target's Sp. Def stat."
  },
  {
    name: "orderup",
    displayName: "Order Up",
    generation: 9,
    type: TypeName.Dragon,
    attackType: AttackType.Physical,
    signatureOf: "Dondozo",
    description:
      "The user attacks with elegant poise. If the user has a Tatsugiri in its mouth, this move boosts one of the user's stats based on the Tatsugiri's form."
  },
  {
    name: "jetpunch",
    displayName: "Jet Punch",
    generation: 9,
    type: TypeName.Water,
    attackType: AttackType.Physical,
    signatureOf: "Palafin",
    description:
      "The user summons a torrent around its fist and punches at blinding speed. This move always goes first."
  },
  {
    name: "spicyextract",
    displayName: "Spicy Extract",
    generation: 9,
    type: TypeName.Grass,
    attackType: AttackType.Status,
    signatureOf: "Scovillain",
    description:
      "The user emits an incredibly spicy extract, sharply boosting the target's Attack stat and harshly lowering the target's Defense stat."
  },
  {
    name: "spinout",
    displayName: "Spin Out",
    generation: 9,
    type: TypeName.Steel,
    attackType: AttackType.Physical,
    signatureOf: "Varoom, Revavroom",
    description:
      "The user spins furiously by straining its legs, inflicting damage on the target. This also harshly lowers the user's Speed stat."
  },
  {
    name: "populationbomb",
    displayName: "Population Bomb",
    generation: 9,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    signatureOf: "Tandemaus, Maushold",
    description:
      "The user's fellows gather in droves to perform a combo attack that hits the target one to ten times in a row."
  },
  {
    name: "icespinner",
    displayName: "Ice Spinner",
    generation: 9,
    type: TypeName.Ice,
    attackType: AttackType.Physical,
    description:
      "The user covers its feet in thin ice and twirls around, slamming into the target. This move's spinning motion also destroys the terrain."
  },
  {
    name: "glaiverush",
    displayName: "Glaive Rush",
    generation: 9,
    type: TypeName.Dragon,
    attackType: AttackType.Physical,
    signatureOf: "Baxcalibur",
    description:
      "The user throws its entire body into a reckless charge. Attacks from opposing Pokémon during the next turn cannot miss and will inflict double damage."
  },
  {
    name: "revivalblessing",
    displayName: "Revival Blessing",
    generation: 9,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description:
      "The user bestows a loving blessing, reviving a party Pokémon that has fainted and restoring half that Pokémon's max HP."
  },
  {
    name: "saltcure",
    displayName: "Salt Cure",
    generation: 9,
    type: TypeName.Rock,
    attackType: AttackType.Physical,
    signatureOf: "Naclstack, Garganacl",
    description:
      "The user salt cures the target, inflicting damage every turn. Steel and Water types are more strongly affected by this move."
  },
  {
    name: "tripledive",
    displayName: "Triple Dive",
    generation: 9,
    type: TypeName.Water,
    attackType: AttackType.Physical,
    signatureOf: "Wugtrio",
    description:
      "The user performs a perfectly timed triple dive, hitting the target with splashes of water three times in a row."
  },
  {
    name: "mortalspin",
    displayName: "Mortal Spin",
    generation: 9,
    type: TypeName.Poison,
    attackType: AttackType.Physical,
    signatureOf: "Glimmora",
    description:
      "The user performs a spin attack that can also eliminate the effects of such moves as Bind, Wrap, and Leech Seed. This also poisons opposing Pokémon."
  },
  {
    name: "doodle",
    displayName: "Doodle",
    generation: 9,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    signatureOf: "Grafaiai",
    description:
      "The user captures the very essence of the target in a sketch. This changes the Abilities of the user and its ally Pokémon to that of the target."
  },
  {
    name: "filletaway",
    displayName: "Fillet Away",
    generation: 9,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    signatureOf: "Veluza",
    description: "The user sharply boosts its Attack, Sp. Atk, and Speed stats by using its own HP."
  },
  {
    name: "kowtowcleave",
    displayName: "Kowtow Cleave",
    generation: 9,
    type: TypeName.Dark,
    attackType: AttackType.Physical,
    signatureOf: "Kingambit",
    description:
      "The user slashes at the target after kowtowing to make the target let down its guard. This attack never misses."
  },
  {
    name: "flowertrick",
    displayName: "Flower Trick",
    generation: 9,
    type: TypeName.Grass,
    attackType: AttackType.Physical,
    signatureOf: "Meowscarada",
    description:
      "The user throws a rigged bouquet of flowers at the target. This attack never misses and always lands a critical hit."
  },
  {
    name: "torchsong",
    displayName: "Torch Song",
    generation: 9,
    type: TypeName.Fire,
    attackType: AttackType.Special,
    signatureOf: "Skeledirge",
    description:
      "The user blows out raging flames as if singing a song, scorching the target. This also boosts the user's Sp. Atk stat."
  },
  {
    name: "aquastep",
    displayName: "Aqua Step",
    generation: 9,
    type: TypeName.Water,
    attackType: AttackType.Physical,
    signatureOf: "Quaquaval",
    description:
      "The user toys with the target and attacks it using light and fluid dance steps. This also boosts the user's Speed stat."
  },
  {
    name: "ragingbull",
    displayName: "Raging Bull",
    generation: 9,
    type: [TypeName.Normal, TypeName.Fighting, TypeName.Fire, TypeName.Water],
    attackType: AttackType.Physical,
    signatureOf: "Tauros, Paldean Tauros",
    description:
      "The user performs a tackle like a raging bull. This move's type depends on the user's form. It can also break barriers, such as Light Screen and Reflect."
  },
  {
    name: "makeitrain",
    displayName: "Make It Rain",
    generation: 9,
    type: TypeName.Steel,
    attackType: AttackType.Special,
    signatureOf: "Gholdengo",
    description:
      "The user attacks by throwing out a mass of coins. This also lowers the user's Sp. Atk stat. Money is earned after the battle."
  },
  {
    name: "psyblade",
    displayName: "Psyblade",
    generation: 9,
    type: TypeName.Psychic,
    attackType: AttackType.Physical,
    signatureOf: "Iron Leaves",
    description:
      "The user rends the target with an ethereal blade. This move's power is boosted by 50 percent if the user is on Electric Terrain."
  },
  {
    name: "hydrosteam",
    displayName: "Hydro Steam",
    generation: 9,
    type: TypeName.Water,
    attackType: AttackType.Special,
    signatureOf: "Walking Wake",
    description:
      "The user blasts the target with boiling-hot water. This move's power is not lowered in harsh sunlight but rather boosted by 50 percent."
  },
  {
    name: "ruination",
    displayName: "Ruination",
    generation: 9,
    type: TypeName.Dark,
    attackType: AttackType.Special,
    signatureOf: "Wo-Chien, Chien-Pao, Ting-Lu, Chi-Yu",
    description: "The user summons a ruinous disaster. This cuts the target's HP in half."
  },
  {
    name: "collisioncourse",
    displayName: "Collision Course",
    generation: 9,
    type: TypeName.Fighting,
    attackType: AttackType.Physical,
    signatureOf: "Koraidon",
    description:
      "The user transforms and crashes to the ground, causing a massive prehistoric explosion. This move's power is boosted more than usual if it's a supereffective hit."
  },
  {
    name: "electrodrift",
    displayName: "Electro Drift",
    generation: 9,
    type: TypeName.Electric,
    attackType: AttackType.Special,
    signatureOf: "Miraidon",
    description:
      "The user races forward at ultrafast speeds, piercing its target with futuristic electricity. This move's power is boosted more than usual if it's a supereffective hit."
  },
  {
    name: "shedtail",
    displayName: "Shed Tail",
    generation: 9,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description:
      "The user creates a substitute for itself using its own HP before switching places with a party Pokémon in waiting."
  },
  {
    name: "chillyreception",
    displayName: "Chilly Reception",
    generation: 9,
    type: TypeName.Ice,
    attackType: AttackType.Status,
    signatureOf: "Slowking, Galarian Slowking",
    description:
      "The user tells a chillingly bad joke before switching places with a party Pokémon in waiting. This summons a snowstorm lasting five turns."
  },
  {
    name: "tidyup",
    displayName: "Tidy Up",
    generation: 9,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description:
      "The user tidies up and removes the effects of Spikes, Stealth Rock, Sticky Web, Toxic Spikes, and Substitute. This also boosts the user's Attack and Speed stats."
  },
  {
    name: "snowscape",
    displayName: "Snowscape",
    generation: 9,
    type: TypeName.Ice,
    attackType: AttackType.Status,
    description: "The user summons a snowstorm lasting five turns. This boosts the Defense stats of Ice types."
  },
  {
    name: "pounce",
    displayName: "Pounce",
    generation: 9,
    type: TypeName.Bug,
    attackType: AttackType.Physical,
    description: "The user attacks by pouncing on the target. This also lowers the target's Speed stat."
  },
  {
    name: "trailblaze",
    displayName: "Trailblaze",
    generation: 9,
    type: TypeName.Grass,
    attackType: AttackType.Physical,
    description:
      "The user attacks suddenly as if leaping out from tall grass. The user's nimble footwork boosts its Speed stat."
  },
  {
    name: "chillingwater",
    displayName: "Chilling Water",
    generation: 9,
    type: TypeName.Water,
    attackType: AttackType.Special,
    description:
      "The user attacks the target by showering it with water that's so cold it saps the target's power. This also lowers the target's Attack stat."
  },
  {
    name: "hyperdrill",
    displayName: "Hyper Drill",
    generation: 9,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    signatureOf: "Dunsparce, Dudunsparce",
    description:
      "The user spins the pointed part of its body at high speed to pierce the target. This attack can hit a target using a move such as Protect or Detect."
  },
  {
    name: "twinbeam",
    displayName: "Twin Beam",
    generation: 9,
    type: TypeName.Psychic,
    attackType: AttackType.Special,
    signatureOf: "Girafarig, Farigiraf",
    description: "The user shoots mystical beams from its eyes to inflict damage. The target is hit twice in a row."
  },
  {
    name: "ragefist",
    displayName: "Rage Fist",
    generation: 9,
    type: TypeName.Ghost,
    attackType: AttackType.Physical,
    signatureOf: "Mankey, Primeape, Annihilape",
    description:
      "The user converts its rage into energy to attack. The more times the user has been hit by attacks, the greater the move's power."
  },
  {
    name: "armorcannon",
    displayName: "Armor Cannon",
    generation: 9,
    type: TypeName.Fire,
    attackType: AttackType.Special,
    signatureOf: "Armarouge",
    description:
      "The user shoots its own armor out as blazing projectiles. This also lowers the user's Defense and Sp. Def stats."
  },
  {
    name: "bitterblade",
    displayName: "Bitter Blade",
    generation: 9,
    type: TypeName.Fire,
    attackType: AttackType.Physical,
    signatureOf: "Ceruledge",
    description:
      "The user focuses its bitter feelings toward the world of the living into a slashing attack. The user's HP is restored by up to half the damage taken by the target."
  },
  {
    name: "doubleshock",
    displayName: "Double Shock",
    generation: 9,
    type: TypeName.Electric,
    attackType: AttackType.Physical,
    signatureOf: "Pawmot",
    description:
      "The user discharges all the electricity from its body to perform a high-damage attack. After using this move, the user will no longer be Electric type."
  },
  {
    name: "gigatonhammer",
    displayName: "Gigaton Hammer",
    generation: 9,
    type: TypeName.Steel,
    attackType: AttackType.Physical,
    signatureOf: "Tinkaton",
    description:
      "The user swings its whole body around to attack with its huge hammer. This move can't be used twice in a row."
  },
  {
    name: "comeuppance",
    displayName: "Comeuppance",
    generation: 9,
    type: TypeName.Dark,
    attackType: AttackType.Physical,
    description: "The user retaliates with much greater force against the opponent that last inflicted damage on it."
  },
  {
    name: "aquacutter",
    displayName: "Aqua Cutter",
    generation: 9,
    type: TypeName.Water,
    attackType: AttackType.Physical,
    description:
      "The user expels pressurized water to cut at the target like a blade. This move has a heightened chance of landing a critical hit."
  },
  {
    name: "blazingtorque",
    displayName: "Blazing Torque",
    generation: 9,
    type: TypeName.Fire,
    attackType: AttackType.Physical,
    signatureOf: "Schedar Starmobile Revavroom",
    description: "Only the Revavroom in the Schedar Squad's Starmobile can use this move."
  },
  {
    name: "wickedtorque",
    displayName: "Wicked Torque",
    generation: 9,
    type: TypeName.Dark,
    attackType: AttackType.Physical,
    signatureOf: "Segin Starmobile Revavroom",
    description: "Only the Revavroom in the Segin Squad's Starmobile can use this move."
  },
  {
    name: "noxioustorque",
    displayName: "Noxious Torque",
    generation: 9,
    type: TypeName.Poison,
    attackType: AttackType.Physical,
    signatureOf: "Navi Starmobile Revavroom",
    description: "Only the Revavroom in the Navi Squad's Starmobile can use this move."
  },
  {
    name: "combattorque",
    displayName: "Combat Torque",
    generation: 9,
    type: TypeName.Fighting,
    attackType: AttackType.Physical,
    signatureOf: "Caph Starmobile Revavroom",
    description: "Only the Revavroom in the Caph Squad's Starmobile can use this move."
  },
  {
    name: "magicaltorque",
    displayName: "Magical Torque",
    generation: 9,
    type: TypeName.Fairy,
    attackType: AttackType.Physical,
    signatureOf: "Ruchbah Starmobile Revavroom",
    description: "Only the Revavroom in the Ruchbah Squad's Starmobile can use this move."
  }
];
