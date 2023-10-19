import { Pokemon } from "../../classes";
import { AbilityName, Category, EggGroupName, TypeName } from "../../enums";

export const gen5Pokemon: Pokemon[] = [
  {
    name: "victini",
    displayName: "Victini",
    dexNumber: 494,
    generation: 5,
    type: TypeName.Psychic,
    type2: TypeName.Fire,
    category: Category.Mythical,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.VictoryStar,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "snivy",
    displayName: "Snivy",
    dexNumber: 495,
    generation: 5,
    type: TypeName.Grass,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Field,
      group2: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Overgrow,
      second: AbilityName.NA,
      hidden: AbilityName.Contrary
    }
  },
  {
    name: "servine",
    displayName: "Servine",
    dexNumber: 496,
    generation: 5,
    type: TypeName.Grass,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Field,
      group2: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Overgrow,
      second: AbilityName.NA,
      hidden: AbilityName.Contrary
    }
  },
  {
    name: "serperior",
    displayName: "Serperior",
    dexNumber: 497,
    generation: 5,
    type: TypeName.Grass,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Field,
      group2: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Overgrow,
      second: AbilityName.NA,
      hidden: AbilityName.Contrary
    }
  },
  {
    name: "tepig",
    displayName: "Tepig",
    dexNumber: 498,
    generation: 5,
    type: TypeName.Fire,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Blaze,
      second: AbilityName.NA,
      hidden: AbilityName.ThickFat
    }
  },
  {
    name: "pignite",
    displayName: "Pignite",
    dexNumber: 499,
    generation: 5,
    type: TypeName.Fire,
    type2: TypeName.Fighting,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Blaze,
      second: AbilityName.NA,
      hidden: AbilityName.ThickFat
    }
  },
  {
    name: "emboar",
    displayName: "Emboar",
    dexNumber: 500,
    generation: 5,
    type: TypeName.Fire,
    type2: TypeName.Fighting,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Blaze,
      second: AbilityName.NA,
      hidden: AbilityName.Reckless
    }
  },
  {
    name: "oshawott",
    displayName: "Oshawott",
    dexNumber: 501,
    generation: 5,
    type: TypeName.Water,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Torrent,
      second: AbilityName.NA,
      hidden: AbilityName.ShellArmor
    }
  },
  {
    name: "dewott",
    displayName: "Dewott",
    dexNumber: 502,
    generation: 5,
    type: TypeName.Water,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Torrent,
      second: AbilityName.NA,
      hidden: AbilityName.ShellArmor
    }
  },
  {
    name: "samurott",
    displayName: "Samurott",
    dexNumber: 503,
    generation: 5,
    type: TypeName.Water,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Torrent,
      second: AbilityName.NA,
      hidden: AbilityName.ShellArmor
    }
  },
  {
    name: "patrat",
    displayName: "Patrat",
    dexNumber: 504,
    generation: 5,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 15
    },
    abilities: {
      first: AbilityName.RunAway,
      second: AbilityName.KeenEye,
      hidden: AbilityName.Analytic
    }
  },
  {
    name: "watchog",
    displayName: "Watchog",
    dexNumber: 505,
    generation: 5,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Illuminate,
      second: AbilityName.KeenEye,
      hidden: AbilityName.Analytic
    }
  },
  {
    name: "lillipup",
    displayName: "Lillipup",
    dexNumber: 506,
    generation: 5,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 15
    },
    abilities: {
      first: AbilityName.VitalSpirit,
      second: AbilityName.Pickup,
      hidden: AbilityName.RunAway
    }
  },
  {
    name: "herdier",
    displayName: "Herdier",
    dexNumber: 507,
    generation: 5,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Intimidate,
      second: AbilityName.SandRush,
      hidden: AbilityName.Scrappy
    }
  },
  {
    name: "stoutland",
    displayName: "Stoutland",
    dexNumber: 508,
    generation: 5,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Intimidate,
      second: AbilityName.SandRush,
      hidden: AbilityName.Scrappy
    }
  },
  {
    name: "purrloin",
    displayName: "Purrloin",
    dexNumber: 509,
    generation: 5,
    type: TypeName.Dark,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Limber,
      second: AbilityName.Unburden,
      hidden: AbilityName.Prankster
    }
  },
  {
    name: "liepard",
    displayName: "Liepard",
    dexNumber: 510,
    generation: 5,
    type: TypeName.Dark,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Limber,
      second: AbilityName.Unburden,
      hidden: AbilityName.Prankster
    }
  },
  {
    name: "pansage",
    displayName: "Pansage",
    dexNumber: 511,
    generation: 5,
    type: TypeName.Grass,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Gluttony,
      second: AbilityName.NA,
      hidden: AbilityName.Overgrow
    }
  },
  {
    name: "simisage",
    displayName: "Simisage",
    dexNumber: 512,
    generation: 5,
    type: TypeName.Grass,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Gluttony,
      second: AbilityName.NA,
      hidden: AbilityName.Overgrow
    }
  },
  {
    name: "pansear",
    displayName: "Pansear",
    dexNumber: 513,
    generation: 5,
    type: TypeName.Fire,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Gluttony,
      second: AbilityName.NA,
      hidden: AbilityName.Blaze
    }
  },
  {
    name: "simisear",
    displayName: "Simisear",
    dexNumber: 514,
    generation: 5,
    type: TypeName.Fire,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Gluttony,
      second: AbilityName.NA,
      hidden: AbilityName.Blaze
    }
  },
  {
    name: "panpour",
    displayName: "Panpour",
    dexNumber: 515,
    generation: 5,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Gluttony,
      second: AbilityName.NA,
      hidden: AbilityName.Torrent
    }
  },
  {
    name: "simipour",
    displayName: "Simipour",
    dexNumber: 516,
    generation: 5,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Gluttony,
      second: AbilityName.NA,
      hidden: AbilityName.Torrent
    }
  },
  {
    name: "munna",
    displayName: "Munna",
    dexNumber: 517,
    generation: 5,
    type: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 10
    },
    abilities: {
      first: AbilityName.Forewarn,
      second: AbilityName.Synchronize,
      hidden: AbilityName.Telepathy
    }
  },
  {
    name: "musharna",
    displayName: "Musharna",
    dexNumber: 518,
    generation: 5,
    type: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 10
    },
    abilities: {
      first: AbilityName.Forewarn,
      second: AbilityName.Synchronize,
      hidden: AbilityName.Telepathy
    }
  },
  {
    name: "pidove",
    displayName: "Pidove",
    dexNumber: 519,
    generation: 5,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Flying,
      cycles: 15
    },
    abilities: {
      first: AbilityName.BigPecks,
      second: AbilityName.SuperLuck,
      hidden: AbilityName.Rivalry
    }
  },
  {
    name: "tranquill",
    displayName: "Tranquill",
    dexNumber: 520,
    generation: 5,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Flying,
      cycles: 15
    },
    abilities: {
      first: AbilityName.BigPecks,
      second: AbilityName.SuperLuck,
      hidden: AbilityName.Rivalry
    }
  },
  {
    name: "unfezant",
    displayName: "Unfezant",
    dexNumber: 521,
    generation: 5,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Flying,
      cycles: 15
    },
    abilities: {
      first: AbilityName.BigPecks,
      second: AbilityName.SuperLuck,
      hidden: AbilityName.Rivalry
    }
  },
  {
    name: "blitzle",
    displayName: "Blitzle",
    dexNumber: 522,
    generation: 5,
    type: TypeName.Electric,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.LightningRod,
      second: AbilityName.MotorDrive,
      hidden: AbilityName.SapSipper
    }
  },
  {
    name: "zebstrika",
    displayName: "Zebstrika",
    dexNumber: 523,
    generation: 5,
    type: TypeName.Electric,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.LightningRod,
      second: AbilityName.MotorDrive,
      hidden: AbilityName.SapSipper
    }
  },
  {
    name: "roggenrola",
    displayName: "Roggenrola",
    dexNumber: 524,
    generation: 5,
    type: TypeName.Rock,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Sturdy,
      second: AbilityName.WeakArmor,
      hidden: AbilityName.SandForce
    }
  },
  {
    name: "boldore",
    displayName: "Boldore",
    dexNumber: 525,
    generation: 5,
    type: TypeName.Rock,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Sturdy,
      second: AbilityName.WeakArmor,
      hidden: AbilityName.SandForce
    }
  },
  {
    name: "gigalith",
    displayName: "Gigalith",
    dexNumber: 526,
    generation: 5,
    type: TypeName.Rock,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Sturdy,
      second: AbilityName.SandStream,
      hidden: AbilityName.SandForce
    }
  },
  {
    name: "woobat",
    displayName: "Woobat",
    dexNumber: 527,
    generation: 5,
    type: TypeName.Psychic,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Field,
      group2: EggGroupName.Flying,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Unaware,
      second: AbilityName.Klutz,
      hidden: AbilityName.Simple
    }
  },
  {
    name: "swoobat",
    displayName: "Swoobat",
    dexNumber: 528,
    generation: 5,
    type: TypeName.Psychic,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Field,
      group2: EggGroupName.Flying,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Unaware,
      second: AbilityName.Klutz,
      hidden: AbilityName.Simple
    }
  },
  {
    name: "drilbur",
    displayName: "Drilbur",
    dexNumber: 529,
    generation: 5,
    type: TypeName.Ground,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.SandRush,
      second: AbilityName.SandForce,
      hidden: AbilityName.MoldBreaker
    }
  },
  {
    name: "excadrill",
    displayName: "Excadrill",
    dexNumber: 530,
    generation: 5,
    type: TypeName.Ground,
    type2: TypeName.Steel,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.SandRush,
      second: AbilityName.SandForce,
      hidden: AbilityName.MoldBreaker
    }
  },
  {
    name: "audino",
    displayName: "Audino",
    dexNumber: 531,
    generation: 5,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Fairy,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Healer,
      second: AbilityName.Regenerator,
      hidden: AbilityName.Klutz
    }
  },
  {
    name: "timburr",
    displayName: "Timburr",
    dexNumber: 532,
    generation: 5,
    type: TypeName.Fighting,
    eggGroups: {
      group1: EggGroupName.HumanLike,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Guts,
      second: AbilityName.SheerForce,
      hidden: AbilityName.IronFist
    }
  },
  {
    name: "gurdurr",
    displayName: "Gurdurr",
    dexNumber: 533,
    generation: 5,
    type: TypeName.Fighting,
    eggGroups: {
      group1: EggGroupName.HumanLike,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Guts,
      second: AbilityName.SheerForce,
      hidden: AbilityName.IronFist
    }
  },
  {
    name: "conkeldurr",
    displayName: "Conkeldurr",
    dexNumber: 534,
    generation: 5,
    type: TypeName.Fighting,
    eggGroups: {
      group1: EggGroupName.HumanLike,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Guts,
      second: AbilityName.SheerForce,
      hidden: AbilityName.IronFist
    }
  },
  {
    name: "tympole",
    displayName: "Tympole",
    dexNumber: 535,
    generation: 5,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water1,
      cycles: 20
    },
    abilities: {
      first: AbilityName.SwiftSwim,
      second: AbilityName.Hydration,
      hidden: AbilityName.WaterAbsorb
    }
  },
  {
    name: "palpitoad",
    displayName: "Palpitoad",
    dexNumber: 536,
    generation: 5,
    type: TypeName.Water,
    type2: TypeName.Ground,
    eggGroups: {
      group1: EggGroupName.Water1,
      cycles: 20
    },
    abilities: {
      first: AbilityName.SwiftSwim,
      second: AbilityName.Hydration,
      hidden: AbilityName.WaterAbsorb
    }
  },
  {
    name: "seismitoad",
    displayName: "Seismitoad",
    dexNumber: 537,
    generation: 5,
    type: TypeName.Water,
    type2: TypeName.Ground,
    eggGroups: {
      group1: EggGroupName.Water1,
      cycles: 20
    },
    abilities: {
      first: AbilityName.SwiftSwim,
      second: AbilityName.PoisonTouch,
      hidden: AbilityName.WaterAbsorb
    }
  },
  {
    name: "throh",
    displayName: "Throh",
    dexNumber: 538,
    generation: 5,
    type: TypeName.Fighting,
    eggGroups: {
      group1: EggGroupName.HumanLike,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Guts,
      second: AbilityName.InnerFocus,
      hidden: AbilityName.MoldBreaker
    }
  },
  {
    name: "sawk",
    displayName: "Sawk",
    dexNumber: 539,
    generation: 5,
    type: TypeName.Fighting,
    eggGroups: {
      group1: EggGroupName.HumanLike,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Sturdy,
      second: AbilityName.InnerFocus,
      hidden: AbilityName.MoldBreaker
    }
  },
  {
    name: "sewaddle",
    displayName: "Sewaddle",
    dexNumber: 540,
    generation: 5,
    type: TypeName.Bug,
    type2: TypeName.Grass,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Swarm,
      second: AbilityName.Chlorophyll,
      hidden: AbilityName.Overcoat
    }
  },
  {
    name: "swadloon",
    displayName: "Swadloon",
    dexNumber: 541,
    generation: 5,
    type: TypeName.Bug,
    type2: TypeName.Grass,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 15
    },
    abilities: {
      first: AbilityName.LeafGuard,
      second: AbilityName.Chlorophyll,
      hidden: AbilityName.Overcoat
    }
  },
  {
    name: "leavanny",
    displayName: "Leavanny",
    dexNumber: 542,
    generation: 5,
    type: TypeName.Bug,
    type2: TypeName.Grass,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Swarm,
      second: AbilityName.Chlorophyll,
      hidden: AbilityName.Overcoat
    }
  },
  {
    name: "venipede",
    displayName: "Venipede",
    dexNumber: 543,
    generation: 5,
    type: TypeName.Bug,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 15
    },
    abilities: {
      first: AbilityName.PoisonPoint,
      second: AbilityName.Swarm,
      hidden: AbilityName.SpeedBoost
    }
  },
  {
    name: "whirlipede",
    displayName: "Whirlipede",
    dexNumber: 544,
    generation: 5,
    type: TypeName.Bug,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 15
    },
    abilities: {
      first: AbilityName.PoisonPoint,
      second: AbilityName.Swarm,
      hidden: AbilityName.SpeedBoost
    }
  },
  {
    name: "scolipede",
    displayName: "Scolipede",
    dexNumber: 545,
    generation: 5,
    type: TypeName.Bug,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 20
    },
    abilities: {
      first: AbilityName.PoisonPoint,
      second: AbilityName.Swarm,
      hidden: AbilityName.SpeedBoost
    }
  },
  {
    name: "cottonee",
    displayName: "Cottonee",
    dexNumber: 546,
    generation: 5,
    type: TypeName.Grass,
    type2: TypeName.Fairy,
    eggGroups: {
      group1: EggGroupName.Grass,
      group2: EggGroupName.Fairy,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Prankster,
      second: AbilityName.Infiltrator,
      hidden: AbilityName.Chlorophyll
    }
  },
  {
    name: "whimsicott",
    displayName: "Whimsicott",
    dexNumber: 547,
    generation: 5,
    type: TypeName.Grass,
    type2: TypeName.Fairy,
    eggGroups: {
      group1: EggGroupName.Grass,
      group2: EggGroupName.Fairy,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Prankster,
      second: AbilityName.Infiltrator,
      hidden: AbilityName.Chlorophyll
    }
  },
  {
    name: "petilil",
    displayName: "Petilil",
    dexNumber: 548,
    generation: 5,
    type: TypeName.Grass,
    eggGroups: {
      group1: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Chlorophyll,
      second: AbilityName.OwnTempo,
      hidden: AbilityName.LeafGuard
    }
  },
  {
    name: "lilligant",
    displayName: "Lilligant",
    dexNumber: 549,
    generation: 5,
    type: TypeName.Grass,
    eggGroups: {
      group1: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Chlorophyll,
      second: AbilityName.OwnTempo,
      hidden: AbilityName.LeafGuard
    }
  },
  {
    name: "basculin",
    displayName: "Basculin",
    dexNumber: 550,
    generation: 5,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water2,
      cycles: 40
    },
    abilities: {
      first: AbilityName.NA,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "sandile",
    displayName: "Sandile",
    dexNumber: 551,
    generation: 5,
    type: TypeName.Ground,
    type2: TypeName.Dark,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Intimidate,
      second: AbilityName.Moxie,
      hidden: AbilityName.AngerPoint
    }
  },
  {
    name: "krokorok",
    displayName: "Krokorok",
    dexNumber: 552,
    generation: 5,
    type: TypeName.Ground,
    type2: TypeName.Dark,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Intimidate,
      second: AbilityName.Moxie,
      hidden: AbilityName.AngerPoint
    }
  },
  {
    name: "krookodile",
    displayName: "Krookodile",
    dexNumber: 553,
    generation: 5,
    type: TypeName.Ground,
    type2: TypeName.Dark,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Intimidate,
      second: AbilityName.Moxie,
      hidden: AbilityName.AngerPoint
    }
  },
  {
    name: "darumaka",
    displayName: "Darumaka",
    dexNumber: 554,
    generation: 5,
    type: TypeName.Fire,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Hustle,
      second: AbilityName.NA,
      hidden: AbilityName.InnerFocus
    }
  },
  {
    name: "darmanitan",
    displayName: "Darmanitan",
    dexNumber: 555,
    generation: 5,
    type: TypeName.Fire,
    type2: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.NA,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "maractus",
    displayName: "Maractus",
    dexNumber: 556,
    generation: 5,
    type: TypeName.Grass,
    eggGroups: {
      group1: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.WaterAbsorb,
      second: AbilityName.Chlorophyll,
      hidden: AbilityName.StormDrain
    }
  },
  {
    name: "dwebble",
    displayName: "Dwebble",
    dexNumber: 557,
    generation: 5,
    type: TypeName.Bug,
    type2: TypeName.Rock,
    eggGroups: {
      group1: EggGroupName.Bug,
      group2: EggGroupName.Mineral,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Sturdy,
      second: AbilityName.ShellArmor,
      hidden: AbilityName.WeakArmor
    }
  },
  {
    name: "crustle",
    displayName: "Crustle",
    dexNumber: 558,
    generation: 5,
    type: TypeName.Bug,
    type2: TypeName.Rock,
    eggGroups: {
      group1: EggGroupName.Bug,
      group2: EggGroupName.Mineral,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Sturdy,
      second: AbilityName.ShellArmor,
      hidden: AbilityName.WeakArmor
    }
  },
  {
    name: "scraggy",
    displayName: "Scraggy",
    dexNumber: 559,
    generation: 5,
    type: TypeName.Dark,
    type2: TypeName.Fighting,
    eggGroups: {
      group1: EggGroupName.Field,
      group2: EggGroupName.Dragon,
      cycles: 15
    },
    abilities: {
      first: AbilityName.ShedSkin,
      second: AbilityName.Moxie,
      hidden: AbilityName.Intimidate
    }
  },
  {
    name: "scrafty",
    displayName: "Scrafty",
    dexNumber: 560,
    generation: 5,
    type: TypeName.Dark,
    type2: TypeName.Fighting,
    eggGroups: {
      group1: EggGroupName.Field,
      group2: EggGroupName.Dragon,
      cycles: 15
    },
    abilities: {
      first: AbilityName.ShedSkin,
      second: AbilityName.Moxie,
      hidden: AbilityName.Intimidate
    }
  },
  {
    name: "sigilyph",
    displayName: "Sigilyph",
    dexNumber: 561,
    generation: 5,
    type: TypeName.Psychic,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Flying,
      cycles: 20
    },
    abilities: {
      first: AbilityName.WonderSkin,
      second: AbilityName.MagicGuard,
      hidden: AbilityName.TintedLens
    }
  },
  {
    name: "yamask",
    displayName: "Yamask",
    dexNumber: 562,
    generation: 5,
    type: TypeName.Ghost,
    eggGroups: {
      group1: EggGroupName.Mineral,
      group2: EggGroupName.Amorphous,
      cycles: 25
    },
    abilities: {
      first: AbilityName.Mummy,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "cofagrigus",
    displayName: "Cofagrigus",
    dexNumber: 563,
    generation: 5,
    type: TypeName.Ghost,
    eggGroups: {
      group1: EggGroupName.Mineral,
      group2: EggGroupName.Amorphous,
      cycles: 25
    },
    abilities: {
      first: AbilityName.Mummy,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "tirtouga",
    displayName: "Tirtouga",
    dexNumber: 564,
    generation: 5,
    type: TypeName.Water,
    type2: TypeName.Rock,
    category: Category.Fossil,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Water3,
      cycles: 30
    },
    abilities: {
      first: AbilityName.SolidRock,
      second: AbilityName.Sturdy,
      hidden: AbilityName.SwiftSwim
    }
  },
  {
    name: "carracosta",
    displayName: "Carracosta",
    dexNumber: 565,
    generation: 5,
    type: TypeName.Water,
    type2: TypeName.Rock,
    category: Category.Fossil,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Water3,
      cycles: 30
    },
    abilities: {
      first: AbilityName.SolidRock,
      second: AbilityName.Sturdy,
      hidden: AbilityName.SwiftSwim
    }
  },
  {
    name: "archen",
    displayName: "Archen",
    dexNumber: 566,
    generation: 5,
    type: TypeName.Rock,
    type2: TypeName.Flying,
    category: Category.Fossil,
    eggGroups: {
      group1: EggGroupName.Flying,
      group2: EggGroupName.Water3,
      cycles: 30
    },
    abilities: {
      first: AbilityName.Defeatist,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "archeops",
    displayName: "Archeops",
    dexNumber: 567,
    generation: 5,
    type: TypeName.Rock,
    type2: TypeName.Flying,
    category: Category.Fossil,
    eggGroups: {
      group1: EggGroupName.Flying,
      group2: EggGroupName.Water3,
      cycles: 30
    },
    abilities: {
      first: AbilityName.Defeatist,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "trubbish",
    displayName: "Trubbish",
    dexNumber: 568,
    generation: 5,
    type: TypeName.Poison,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Stench,
      second: AbilityName.StickyHold,
      hidden: AbilityName.Aftermath
    }
  },
  {
    name: "garbodor",
    displayName: "Garbodor",
    dexNumber: 569,
    generation: 5,
    type: TypeName.Poison,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Stench,
      second: AbilityName.WeakArmor,
      hidden: AbilityName.Aftermath
    }
  },
  {
    name: "zorua",
    displayName: "Zorua",
    dexNumber: 570,
    generation: 5,
    type: TypeName.Dark,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 25
    },
    abilities: {
      first: AbilityName.Illusion,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "zoroark",
    displayName: "Zoroark",
    dexNumber: 571,
    generation: 5,
    type: TypeName.Dark,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Illusion,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "minccino",
    displayName: "Minccino",
    dexNumber: 572,
    generation: 5,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 15
    },
    abilities: {
      first: AbilityName.CuteCharm,
      second: AbilityName.Technician,
      hidden: AbilityName.SkillLink
    }
  },
  {
    name: "cinccino",
    displayName: "Cinccino",
    dexNumber: 573,
    generation: 5,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 15
    },
    abilities: {
      first: AbilityName.CuteCharm,
      second: AbilityName.Technician,
      hidden: AbilityName.SkillLink
    }
  },
  {
    name: "gothita",
    displayName: "Gothita",
    dexNumber: 574,
    generation: 5,
    type: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.HumanLike,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Frisk,
      second: AbilityName.Competitive,
      hidden: AbilityName.ShadowTag
    }
  },
  {
    name: "gothorita",
    displayName: "Gothorita",
    dexNumber: 575,
    generation: 5,
    type: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.HumanLike,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Frisk,
      second: AbilityName.Competitive,
      hidden: AbilityName.ShadowTag
    }
  },
  {
    name: "gothitelle",
    displayName: "Gothitelle",
    dexNumber: 576,
    generation: 5,
    type: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.HumanLike,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Frisk,
      second: AbilityName.Competitive,
      hidden: AbilityName.ShadowTag
    }
  },
  {
    name: "solosis",
    displayName: "Solosis",
    dexNumber: 577,
    generation: 5,
    type: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.Amorphous,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Overcoat,
      second: AbilityName.MagicGuard,
      hidden: AbilityName.Regenerator
    }
  },
  {
    name: "duosion",
    displayName: "Duosion",
    dexNumber: 578,
    generation: 5,
    type: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.Amorphous,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Overcoat,
      second: AbilityName.MagicGuard,
      hidden: AbilityName.Regenerator
    }
  },
  {
    name: "reuniclus",
    displayName: "Reuniclus",
    dexNumber: 579,
    generation: 5,
    type: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.Amorphous,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Overcoat,
      second: AbilityName.MagicGuard,
      hidden: AbilityName.Regenerator
    }
  },
  {
    name: "ducklett",
    displayName: "Ducklett",
    dexNumber: 580,
    generation: 5,
    type: TypeName.Water,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Flying,
      cycles: 20
    },
    abilities: {
      first: AbilityName.KeenEye,
      second: AbilityName.BigPecks,
      hidden: AbilityName.Hydration
    }
  },
  {
    name: "swanna",
    displayName: "Swanna",
    dexNumber: 581,
    generation: 5,
    type: TypeName.Water,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Flying,
      cycles: 20
    },
    abilities: {
      first: AbilityName.KeenEye,
      second: AbilityName.BigPecks,
      hidden: AbilityName.Hydration
    }
  },
  {
    name: "vanillite",
    displayName: "Vanillite",
    dexNumber: 582,
    generation: 5,
    type: TypeName.Ice,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 20
    },
    abilities: {
      first: AbilityName.IceBody,
      second: AbilityName.SnowCloak,
      hidden: AbilityName.WeakArmor
    }
  },
  {
    name: "vanillish",
    displayName: "Vanillish",
    dexNumber: 583,
    generation: 5,
    type: TypeName.Ice,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 20
    },
    abilities: {
      first: AbilityName.IceBody,
      second: AbilityName.SnowCloak,
      hidden: AbilityName.WeakArmor
    }
  },
  {
    name: "vanilluxe",
    displayName: "Vanilluxe",
    dexNumber: 584,
    generation: 5,
    type: TypeName.Ice,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 20
    },
    abilities: {
      first: AbilityName.IceBody,
      second: AbilityName.SnowWarning,
      hidden: AbilityName.WeakArmor
    }
  },
  {
    name: "deerling",
    displayName: "Deerling",
    dexNumber: 585,
    generation: 5,
    type: TypeName.Normal,
    type2: TypeName.Grass,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Chlorophyll,
      second: AbilityName.SapSipper,
      hidden: AbilityName.SereneGrace
    }
  },
  {
    name: "sawsbuck",
    displayName: "Sawsbuck",
    dexNumber: 586,
    generation: 5,
    type: TypeName.Normal,
    type2: TypeName.Grass,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Chlorophyll,
      second: AbilityName.SapSipper,
      hidden: AbilityName.SereneGrace
    }
  },
  {
    name: "emolga",
    displayName: "Emolga",
    dexNumber: 587,
    generation: 5,
    type: TypeName.Electric,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Static,
      second: AbilityName.NA,
      hidden: AbilityName.MotorDrive
    }
  },
  {
    name: "karrablast",
    displayName: "Karrablast",
    dexNumber: 588,
    generation: 5,
    type: TypeName.Bug,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Swarm,
      second: AbilityName.ShedSkin,
      hidden: AbilityName.NoGuard
    }
  },
  {
    name: "escavalier",
    displayName: "Escavalier",
    dexNumber: 589,
    generation: 5,
    type: TypeName.Bug,
    type2: TypeName.Steel,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Swarm,
      second: AbilityName.ShellArmor,
      hidden: AbilityName.Overcoat
    }
  },
  {
    name: "foongus",
    displayName: "Foongus",
    dexNumber: 590,
    generation: 5,
    type: TypeName.Grass,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.EffectSpore,
      second: AbilityName.NA,
      hidden: AbilityName.Regenerator
    }
  },
  {
    name: "amoonguss",
    displayName: "Amoonguss",
    dexNumber: 591,
    generation: 5,
    type: TypeName.Grass,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.EffectSpore,
      second: AbilityName.NA,
      hidden: AbilityName.Regenerator
    }
  },
  {
    name: "frillish",
    displayName: "Frillish",
    dexNumber: 592,
    generation: 5,
    type: TypeName.Water,
    type2: TypeName.Ghost,
    eggGroups: {
      group1: EggGroupName.Amorphous,
      cycles: 20
    },
    abilities: {
      first: AbilityName.WaterAbsorb,
      second: AbilityName.CursedBody,
      hidden: AbilityName.Damp
    }
  },
  {
    name: "jellicent",
    displayName: "Jellicent",
    dexNumber: 593,
    generation: 5,
    type: TypeName.Water,
    type2: TypeName.Ghost,
    eggGroups: {
      group1: EggGroupName.Amorphous,
      cycles: 20
    },
    abilities: {
      first: AbilityName.WaterAbsorb,
      second: AbilityName.CursedBody,
      hidden: AbilityName.Damp
    }
  },
  {
    name: "alomomola",
    displayName: "Alomomola",
    dexNumber: 594,
    generation: 5,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Water2,
      cycles: 40
    },
    abilities: {
      first: AbilityName.Healer,
      second: AbilityName.Hydration,
      hidden: AbilityName.Regenerator
    }
  },
  {
    name: "joltik",
    displayName: "Joltik",
    dexNumber: 595,
    generation: 5,
    type: TypeName.Bug,
    type2: TypeName.Electric,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 20
    },
    abilities: {
      first: AbilityName.CompoundEyes,
      second: AbilityName.Unnerve,
      hidden: AbilityName.Swarm
    }
  },
  {
    name: "galvantula",
    displayName: "Galvantula",
    dexNumber: 596,
    generation: 5,
    type: TypeName.Bug,
    type2: TypeName.Electric,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 20
    },
    abilities: {
      first: AbilityName.CompoundEyes,
      second: AbilityName.Unnerve,
      hidden: AbilityName.Swarm
    }
  },
  {
    name: "ferroseed",
    displayName: "Ferroseed",
    dexNumber: 597,
    generation: 5,
    type: TypeName.Grass,
    type2: TypeName.Steel,
    eggGroups: {
      group1: EggGroupName.Grass,
      group2: EggGroupName.Mineral,
      cycles: 20
    },
    abilities: {
      first: AbilityName.IronBarbs,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "ferrothorn",
    displayName: "Ferrothorn",
    dexNumber: 598,
    generation: 5,
    type: TypeName.Grass,
    type2: TypeName.Steel,
    eggGroups: {
      group1: EggGroupName.Grass,
      group2: EggGroupName.Mineral,
      cycles: 20
    },
    abilities: {
      first: AbilityName.IronBarbs,
      second: AbilityName.NA,
      hidden: AbilityName.Anticipation
    }
  },
  {
    name: "klink",
    displayName: "Klink",
    dexNumber: 599,
    generation: 5,
    type: TypeName.Steel,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Plus,
      second: AbilityName.Minus,
      hidden: AbilityName.ClearBody
    }
  },
  {
    name: "klang",
    displayName: "Klang",
    dexNumber: 600,
    generation: 5,
    type: TypeName.Steel,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Plus,
      second: AbilityName.Minus,
      hidden: AbilityName.ClearBody
    }
  },
  {
    name: "klinklang",
    displayName: "Klinklang",
    dexNumber: 601,
    generation: 5,
    type: TypeName.Steel,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Plus,
      second: AbilityName.Minus,
      hidden: AbilityName.ClearBody
    }
  },
  {
    name: "tynamo",
    displayName: "Tynamo",
    dexNumber: 602,
    generation: 5,
    type: TypeName.Electric,
    eggGroups: {
      group1: EggGroupName.Amorphous,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Levitate,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "eelektrik",
    displayName: "Eelektrik",
    dexNumber: 603,
    generation: 5,
    type: TypeName.Electric,
    eggGroups: {
      group1: EggGroupName.Amorphous,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Levitate,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "eelektross",
    displayName: "Eelektross",
    dexNumber: 604,
    generation: 5,
    type: TypeName.Electric,
    eggGroups: {
      group1: EggGroupName.Amorphous,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Levitate,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "elgyem",
    displayName: "Elgyem",
    dexNumber: 605,
    generation: 5,
    type: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.HumanLike,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Telepathy,
      second: AbilityName.Synchronize,
      hidden: AbilityName.Analytic
    }
  },
  {
    name: "beheeyem",
    displayName: "Beheeyem",
    dexNumber: 606,
    generation: 5,
    type: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.HumanLike,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Telepathy,
      second: AbilityName.Synchronize,
      hidden: AbilityName.Analytic
    }
  },
  {
    name: "litwick",
    displayName: "Litwick",
    dexNumber: 607,
    generation: 5,
    type: TypeName.Ghost,
    type2: TypeName.Fire,
    eggGroups: {
      group1: EggGroupName.Amorphous,
      cycles: 20
    },
    abilities: {
      first: AbilityName.FlashFire,
      second: AbilityName.FlameBody,
      hidden: AbilityName.Infiltrator
    }
  },
  {
    name: "lampent",
    displayName: "Lampent",
    dexNumber: 608,
    generation: 5,
    type: TypeName.Ghost,
    type2: TypeName.Fire,
    eggGroups: {
      group1: EggGroupName.Amorphous,
      cycles: 20
    },
    abilities: {
      first: AbilityName.FlashFire,
      second: AbilityName.FlameBody,
      hidden: AbilityName.Infiltrator
    }
  },
  {
    name: "chandelure",
    displayName: "Chandelure",
    dexNumber: 609,
    generation: 5,
    type: TypeName.Ghost,
    type2: TypeName.Fire,
    eggGroups: {
      group1: EggGroupName.Amorphous,
      cycles: 20
    },
    abilities: {
      first: AbilityName.FlashFire,
      second: AbilityName.FlameBody,
      hidden: AbilityName.Infiltrator
    }
  },
  {
    name: "axew",
    displayName: "Axew",
    dexNumber: 610,
    generation: 5,
    type: TypeName.Dragon,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Dragon,
      cycles: 40
    },
    abilities: {
      first: AbilityName.Rivalry,
      second: AbilityName.MoldBreaker,
      hidden: AbilityName.Unnerve
    }
  },
  {
    name: "fraxure",
    displayName: "Fraxure",
    dexNumber: 611,
    generation: 5,
    type: TypeName.Dragon,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Dragon,
      cycles: 40
    },
    abilities: {
      first: AbilityName.Rivalry,
      second: AbilityName.MoldBreaker,
      hidden: AbilityName.Unnerve
    }
  },
  {
    name: "haxorus",
    displayName: "Haxorus",
    dexNumber: 612,
    generation: 5,
    type: TypeName.Dragon,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Dragon,
      cycles: 40
    },
    abilities: {
      first: AbilityName.Rivalry,
      second: AbilityName.MoldBreaker,
      hidden: AbilityName.Unnerve
    }
  },
  {
    name: "cubchoo",
    displayName: "Cubchoo",
    dexNumber: 613,
    generation: 5,
    type: TypeName.Ice,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.SnowCloak,
      second: AbilityName.SlushRush,
      hidden: AbilityName.Rattled
    }
  },
  {
    name: "beartic",
    displayName: "Beartic",
    dexNumber: 614,
    generation: 5,
    type: TypeName.Ice,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.SnowCloak,
      second: AbilityName.SlushRush,
      hidden: AbilityName.SwiftSwim
    }
  },
  {
    name: "cryogonal",
    displayName: "Cryogonal",
    dexNumber: 615,
    generation: 5,
    type: TypeName.Ice,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 25
    },
    abilities: {
      first: AbilityName.Levitate,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "shelmet",
    displayName: "Shelmet",
    dexNumber: 616,
    generation: 5,
    type: TypeName.Bug,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Hydration,
      second: AbilityName.ShellArmor,
      hidden: AbilityName.Overcoat
    }
  },
  {
    name: "accelgor",
    displayName: "Accelgor",
    dexNumber: 617,
    generation: 5,
    type: TypeName.Bug,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Hydration,
      second: AbilityName.StickyHold,
      hidden: AbilityName.Unburden
    }
  },
  {
    name: "stunfisk",
    displayName: "Stunfisk",
    dexNumber: 618,
    generation: 5,
    type: TypeName.Ground,
    type2: TypeName.Electric,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Amorphous,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Static,
      second: AbilityName.Limber,
      hidden: AbilityName.SandVeil
    }
  },
  {
    name: "mienfoo",
    displayName: "Mienfoo",
    dexNumber: 619,
    generation: 5,
    type: TypeName.Fighting,
    eggGroups: {
      group1: EggGroupName.Field,
      group2: EggGroupName.HumanLike,
      cycles: 25
    },
    abilities: {
      first: AbilityName.InnerFocus,
      second: AbilityName.Regenerator,
      hidden: AbilityName.Reckless
    }
  },
  {
    name: "mienshao",
    displayName: "Mienshao",
    dexNumber: 620,
    generation: 5,
    type: TypeName.Fighting,
    eggGroups: {
      group1: EggGroupName.Field,
      group2: EggGroupName.HumanLike,
      cycles: 25
    },
    abilities: {
      first: AbilityName.InnerFocus,
      second: AbilityName.Regenerator,
      hidden: AbilityName.Reckless
    }
  },
  {
    name: "druddigon",
    displayName: "Druddigon",
    dexNumber: 621,
    generation: 5,
    type: TypeName.Dragon,
    eggGroups: {
      group1: EggGroupName.Dragon,
      group2: EggGroupName.Monster,
      cycles: 30
    },
    abilities: {
      first: AbilityName.RoughSkin,
      second: AbilityName.SheerForce,
      hidden: AbilityName.MoldBreaker
    }
  },
  {
    name: "golett",
    displayName: "Golett",
    dexNumber: 622,
    generation: 5,
    type: TypeName.Ground,
    type2: TypeName.Ghost,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 25
    },
    abilities: {
      first: AbilityName.IronFist,
      second: AbilityName.Klutz,
      hidden: AbilityName.NoGuard
    }
  },
  {
    name: "golurk",
    displayName: "Golurk",
    dexNumber: 623,
    generation: 5,
    type: TypeName.Ground,
    type2: TypeName.Ghost,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 25
    },
    abilities: {
      first: AbilityName.IronFist,
      second: AbilityName.Klutz,
      hidden: AbilityName.NoGuard
    }
  },
  {
    name: "pawniard",
    displayName: "Pawniard",
    dexNumber: 624,
    generation: 5,
    type: TypeName.Dark,
    type2: TypeName.Steel,
    eggGroups: {
      group1: EggGroupName.HumanLike,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Defiant,
      second: AbilityName.InnerFocus,
      hidden: AbilityName.Pressure
    }
  },
  {
    name: "bisharp",
    displayName: "Bisharp",
    dexNumber: 625,
    generation: 5,
    type: TypeName.Dark,
    type2: TypeName.Steel,
    eggGroups: {
      group1: EggGroupName.HumanLike,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Defiant,
      second: AbilityName.InnerFocus,
      hidden: AbilityName.Pressure
    }
  },
  {
    name: "bouffalant",
    displayName: "Bouffalant",
    dexNumber: 626,
    generation: 5,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Reckless,
      second: AbilityName.SapSipper,
      hidden: AbilityName.Soundproof
    }
  },
  {
    name: "rufflet",
    displayName: "Rufflet",
    dexNumber: 627,
    generation: 5,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Flying,
      cycles: 20
    },
    abilities: {
      first: AbilityName.KeenEye,
      second: AbilityName.SheerForce,
      hidden: AbilityName.Hustle
    }
  },
  {
    name: "braviary",
    displayName: "Braviary",
    dexNumber: 628,
    generation: 5,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Flying,
      cycles: 20
    },
    abilities: {
      first: AbilityName.KeenEye,
      second: AbilityName.SheerForce,
      hidden: AbilityName.Defiant
    }
  },
  {
    name: "vullaby",
    displayName: "Vullaby",
    dexNumber: 629,
    generation: 5,
    type: TypeName.Dark,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Flying,
      cycles: 20
    },
    abilities: {
      first: AbilityName.BigPecks,
      second: AbilityName.Overcoat,
      hidden: AbilityName.WeakArmor
    }
  },
  {
    name: "mandibuzz",
    displayName: "Mandibuzz",
    dexNumber: 630,
    generation: 5,
    type: TypeName.Dark,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Flying,
      cycles: 20
    },
    abilities: {
      first: AbilityName.BigPecks,
      second: AbilityName.Overcoat,
      hidden: AbilityName.WeakArmor
    }
  },
  {
    name: "heatmor",
    displayName: "Heatmor",
    dexNumber: 631,
    generation: 5,
    type: TypeName.Fire,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Gluttony,
      second: AbilityName.FlashFire,
      hidden: AbilityName.WhiteSmoke
    }
  },
  {
    name: "durant",
    displayName: "Durant",
    dexNumber: 632,
    generation: 5,
    type: TypeName.Bug,
    type2: TypeName.Steel,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Swarm,
      second: AbilityName.Hustle,
      hidden: AbilityName.Truant
    }
  },
  {
    name: "deino",
    displayName: "Deino",
    dexNumber: 633,
    generation: 5,
    type: TypeName.Dark,
    type2: TypeName.Dragon,
    eggGroups: {
      group1: EggGroupName.Dragon,
      cycles: 40
    },
    abilities: {
      first: AbilityName.Hustle,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "zweilous",
    displayName: "Zweilous",
    dexNumber: 634,
    generation: 5,
    type: TypeName.Dark,
    type2: TypeName.Dragon,
    eggGroups: {
      group1: EggGroupName.Dragon,
      cycles: 40
    },
    abilities: {
      first: AbilityName.Hustle,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "hydreigon",
    displayName: "Hydreigon",
    dexNumber: 635,
    generation: 5,
    type: TypeName.Dark,
    type2: TypeName.Dragon,
    eggGroups: {
      group1: EggGroupName.Dragon,
      cycles: 40
    },
    abilities: {
      first: AbilityName.Hustle,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "larvesta",
    displayName: "Larvesta",
    dexNumber: 636,
    generation: 5,
    type: TypeName.Bug,
    type2: TypeName.Fire,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 40
    },
    abilities: {
      first: AbilityName.FlameBody,
      second: AbilityName.NA,
      hidden: AbilityName.Swarm
    }
  },
  {
    name: "volcarona",
    displayName: "Volcarona",
    dexNumber: 637,
    generation: 5,
    type: TypeName.Bug,
    type2: TypeName.Fire,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 40
    },
    abilities: {
      first: AbilityName.FlameBody,
      second: AbilityName.NA,
      hidden: AbilityName.Swarm
    }
  },
  {
    name: "cobalion",
    displayName: "Cobalion",
    dexNumber: 638,
    generation: 5,
    type: TypeName.Steel,
    type2: TypeName.Fighting,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 80
    },
    abilities: {
      first: AbilityName.Justified,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "terrakion",
    displayName: "Terrakion",
    dexNumber: 639,
    generation: 5,
    type: TypeName.Ground,
    type2: TypeName.Fighting,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 80
    },
    abilities: {
      first: AbilityName.Justified,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "virizion",
    displayName: "Virizion",
    dexNumber: 640,
    generation: 5,
    type: TypeName.Grass,
    type2: TypeName.Fighting,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 80
    },
    abilities: {
      first: AbilityName.Justified,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "tornadus",
    displayName: "Tornadus",
    dexNumber: 641,
    generation: 5,
    type: TypeName.Flying,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.NA,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "thundurus",
    displayName: "Thundurus",
    dexNumber: 642,
    generation: 5,
    type: TypeName.Electric,
    type2: TypeName.Flying,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.NA,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "reshiram",
    displayName: "Reshiram",
    dexNumber: 643,
    generation: 5,
    type: TypeName.Dragon,
    type2: TypeName.Fire,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.Turboblaze,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "zekrom",
    displayName: "Zekrom",
    dexNumber: 644,
    generation: 5,
    type: TypeName.Dragon,
    type2: TypeName.Electric,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.Teravolt,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "landorus",
    displayName: "Landorus",
    dexNumber: 645,
    generation: 5,
    type: TypeName.Ground,
    type2: TypeName.Flying,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.NA,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "kyurem",
    displayName: "Kyurem",
    dexNumber: 646,
    generation: 5,
    type: TypeName.Dragon,
    type2: TypeName.Ice,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.Pressure,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "keldeo",
    displayName: "Keldeo",
    dexNumber: 647,
    generation: 5,
    type: TypeName.Water,
    type2: TypeName.Fighting,
    category: Category.Mythical,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 80
    },
    abilities: {
      first: AbilityName.Justified,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "meloetta",
    displayName: "Meloetta",
    dexNumber: 648,
    generation: 5,
    type: TypeName.Normal,
    type2: TypeName.Psychic,
    category: Category.Mythical,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.SereneGrace,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "genesect",
    displayName: "Genesect",
    dexNumber: 649,
    generation: 5,
    type: TypeName.Bug,
    type2: TypeName.Steel,
    category: Category.Mythical,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.Download,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  }
];
