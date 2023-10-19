import { Pokemon } from "../../classes";
import { AbilityName, Category, EggGroupName, TypeName } from "../../enums";

export const gen4Pokemon: Pokemon[] = [
  {
    name: "turtwig",
    displayName: "Turtwig",
    dexNumber: 387,
    generation: 4,
    type: TypeName.Grass,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Overgrow,
      second: AbilityName.NA,
      hidden: AbilityName.ShellArmor
    }
  },
  {
    name: "grotle",
    displayName: "Grotle",
    dexNumber: 388,
    generation: 4,
    type: TypeName.Grass,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Overgrow,
      second: AbilityName.NA,
      hidden: AbilityName.ShellArmor
    }
  },
  {
    name: "torterra",
    displayName: "Torterra",
    dexNumber: 389,
    generation: 4,
    type: TypeName.Grass,
    type2: TypeName.Ground,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Overgrow,
      second: AbilityName.NA,
      hidden: AbilityName.ShellArmor
    }
  },
  {
    name: "chimchar",
    displayName: "Chimchar",
    dexNumber: 390,
    generation: 4,
    type: TypeName.Fire,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Field,
      group2: EggGroupName.HumanLike,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Blaze,
      second: AbilityName.NA,
      hidden: AbilityName.IronFist
    }
  },
  {
    name: "monferno",
    displayName: "Monferno",
    dexNumber: 391,
    generation: 4,
    type: TypeName.Fire,
    type2: TypeName.Fighting,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Field,
      group2: EggGroupName.HumanLike,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Blaze,
      second: AbilityName.NA,
      hidden: AbilityName.IronFist
    }
  },
  {
    name: "infernape",
    displayName: "Infernape",
    dexNumber: 392,
    generation: 4,
    type: TypeName.Fire,
    type2: TypeName.Fighting,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Field,
      group2: EggGroupName.HumanLike,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Blaze,
      second: AbilityName.NA,
      hidden: AbilityName.IronFist
    }
  },
  {
    name: "piplup",
    displayName: "Piplup",
    dexNumber: 393,
    generation: 4,
    type: TypeName.Water,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Torrent,
      second: AbilityName.NA,
      hidden: AbilityName.Defiant
    }
  },
  {
    name: "prinplup",
    displayName: "Prinplup",
    dexNumber: 394,
    generation: 4,
    type: TypeName.Water,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Torrent,
      second: AbilityName.NA,
      hidden: AbilityName.Defiant
    }
  },
  {
    name: "empoleon",
    displayName: "Empoleon",
    dexNumber: 395,
    generation: 4,
    type: TypeName.Water,
    type2: TypeName.Steel,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Torrent,
      second: AbilityName.NA,
      hidden: AbilityName.Defiant
    }
  },
  {
    name: "starly",
    displayName: "Starly",
    dexNumber: 396,
    generation: 4,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Flying,
      cycles: 15
    },
    abilities: {
      first: AbilityName.KeenEye,
      second: AbilityName.NA,
      hidden: AbilityName.Reckless
    }
  },
  {
    name: "staravia",
    displayName: "Staravia",
    dexNumber: 397,
    generation: 4,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Flying,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Intimidate,
      second: AbilityName.NA,
      hidden: AbilityName.Reckless
    }
  },
  {
    name: "staraptor",
    displayName: "Staraptor",
    dexNumber: 398,
    generation: 4,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Flying,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Intimidate,
      second: AbilityName.NA,
      hidden: AbilityName.Reckless
    }
  },
  {
    name: "bidoof",
    displayName: "Bidoof",
    dexNumber: 399,
    generation: 4,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Field,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Simple,
      second: AbilityName.Unaware,
      hidden: AbilityName.Moody
    }
  },
  {
    name: "bibarel",
    displayName: "Bibarel",
    dexNumber: 400,
    generation: 4,
    type: TypeName.Normal,
    type2: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Field,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Simple,
      second: AbilityName.Unaware,
      hidden: AbilityName.Moody
    }
  },
  {
    name: "kricketot",
    displayName: "Kricketot",
    dexNumber: 401,
    generation: 4,
    type: TypeName.Bug,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 15
    },
    abilities: {
      first: AbilityName.ShedSkin,
      second: AbilityName.NA,
      hidden: AbilityName.RunAway
    }
  },
  {
    name: "kricketune",
    displayName: "Kricketune",
    dexNumber: 402,
    generation: 4,
    type: TypeName.Bug,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Swarm,
      second: AbilityName.NA,
      hidden: AbilityName.Technician
    }
  },
  {
    name: "shinx",
    displayName: "Shinx",
    dexNumber: 403,
    generation: 4,
    type: TypeName.Electric,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Rivalry,
      second: AbilityName.Intimidate,
      hidden: AbilityName.Guts
    }
  },
  {
    name: "luxio",
    displayName: "Luxio",
    dexNumber: 404,
    generation: 4,
    type: TypeName.Electric,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Rivalry,
      second: AbilityName.Intimidate,
      hidden: AbilityName.Guts
    }
  },
  {
    name: "luxray",
    displayName: "Luxray",
    dexNumber: 405,
    generation: 4,
    type: TypeName.Electric,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Rivalry,
      second: AbilityName.Intimidate,
      hidden: AbilityName.Guts
    }
  },
  {
    name: "budew",
    displayName: "Budew",
    dexNumber: 406,
    generation: 4,
    type: TypeName.Grass,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 20
    },
    abilities: {
      first: AbilityName.NaturalCure,
      second: AbilityName.PoisonPoint,
      hidden: AbilityName.LeafGuard
    }
  },
  {
    name: "roserade",
    displayName: "Roserade",
    dexNumber: 407,
    generation: 4,
    type: TypeName.Grass,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroupName.Fairy,
      group2: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.NaturalCure,
      second: AbilityName.PoisonPoint,
      hidden: AbilityName.Technician
    }
  },
  {
    name: "cranidos",
    displayName: "Cranidos",
    dexNumber: 408,
    generation: 4,
    type: TypeName.Rock,
    category: Category.Fossil,
    eggGroups: {
      group1: EggGroupName.Monster,
      cycles: 30
    },
    abilities: {
      first: AbilityName.MoldBreaker,
      second: AbilityName.NA,
      hidden: AbilityName.SheerForce
    }
  },
  {
    name: "rampardos",
    displayName: "Rampardos",
    dexNumber: 409,
    generation: 4,
    type: TypeName.Rock,
    category: Category.Fossil,
    eggGroups: {
      group1: EggGroupName.Monster,
      cycles: 30
    },
    abilities: {
      first: AbilityName.MoldBreaker,
      second: AbilityName.NA,
      hidden: AbilityName.SheerForce
    }
  },
  {
    name: "shieldon",
    displayName: "Shieldon",
    dexNumber: 410,
    generation: 4,
    type: TypeName.Rock,
    type2: TypeName.Steel,
    category: Category.Fossil,
    eggGroups: {
      group1: EggGroupName.Monster,
      cycles: 30
    },
    abilities: {
      first: AbilityName.Sturdy,
      second: AbilityName.NA,
      hidden: AbilityName.Soundproof
    }
  },
  {
    name: "bastiodon",
    displayName: "Bastiodon",
    dexNumber: 411,
    generation: 4,
    type: TypeName.Rock,
    type2: TypeName.Steel,
    category: Category.Fossil,
    eggGroups: {
      group1: EggGroupName.Monster,
      cycles: 30
    },
    abilities: {
      first: AbilityName.Sturdy,
      second: AbilityName.NA,
      hidden: AbilityName.Soundproof
    }
  },
  {
    name: "burmy",
    displayName: "Burmy",
    dexNumber: 412,
    generation: 4,
    type: TypeName.Bug,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 15
    },
    abilities: {
      first: AbilityName.ShedSkin,
      second: AbilityName.NA,
      hidden: AbilityName.Overcoat
    }
  },
  {
    name: "wormadam",
    displayName: "Wormadam",
    dexNumber: 413,
    generation: 4,
    type: TypeName.Bug,
    type2: [TypeName.Grass, TypeName.Ground, TypeName.Steel],
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Anticipation,
      second: AbilityName.NA,
      hidden: AbilityName.Overcoat
    }
  },
  {
    name: "mothim",
    displayName: "Mothim",
    dexNumber: 414,
    generation: 4,
    type: TypeName.Bug,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Swarm,
      second: AbilityName.NA,
      hidden: AbilityName.TintedLens
    }
  },
  {
    name: "combee",
    displayName: "Combee",
    dexNumber: 415,
    generation: 4,
    type: TypeName.Bug,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 15
    },
    abilities: {
      first: AbilityName.HoneyGather,
      second: AbilityName.NA,
      hidden: AbilityName.Hustle
    }
  },
  {
    name: "vespiquen",
    displayName: "Vespiquen",
    dexNumber: 416,
    generation: 4,
    type: TypeName.Bug,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Pressure,
      second: AbilityName.NA,
      hidden: AbilityName.Unnerve
    }
  },
  {
    name: "pachirisu",
    displayName: "Pachirisu",
    dexNumber: 417,
    generation: 4,
    type: TypeName.Electric,
    eggGroups: {
      group1: EggGroupName.Field,
      group2: EggGroupName.Fairy,
      cycles: 10
    },
    abilities: {
      first: AbilityName.RunAway,
      second: AbilityName.Pickup,
      hidden: AbilityName.VoltAbsorb
    }
  },
  {
    name: "buizel",
    displayName: "Buizel",
    dexNumber: 418,
    generation: 4,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.SwiftSwim,
      second: AbilityName.NA,
      hidden: AbilityName.WaterVeil
    }
  },
  {
    name: "floatzel",
    displayName: "Floatzel",
    dexNumber: 419,
    generation: 4,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.SwiftSwim,
      second: AbilityName.NA,
      hidden: AbilityName.WaterVeil
    }
  },
  {
    name: "cherubi",
    displayName: "Cherubi",
    dexNumber: 420,
    generation: 4,
    type: TypeName.Grass,
    eggGroups: {
      group1: EggGroupName.Fairy,
      group2: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Chlorophyll,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "cherrim",
    displayName: "Cherrim",
    dexNumber: 421,
    generation: 4,
    type: TypeName.Grass,
    eggGroups: {
      group1: EggGroupName.Fairy,
      group2: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.FlowerGift,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "shellos",
    displayName: "Shellos",
    dexNumber: 422,
    generation: 4,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Amorphous,
      cycles: 20
    },
    abilities: {
      first: AbilityName.StickyHold,
      second: AbilityName.StormDrain,
      hidden: AbilityName.SandForce
    }
  },
  {
    name: "gastrodon",
    displayName: "Gastrodon",
    dexNumber: 423,
    generation: 4,
    type: TypeName.Water,
    type2: TypeName.Ground,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Amorphous,
      cycles: 20
    },
    abilities: {
      first: AbilityName.StickyHold,
      second: AbilityName.StormDrain,
      hidden: AbilityName.SandForce
    }
  },
  {
    name: "ambipom",
    displayName: "Ambipom",
    dexNumber: 424,
    generation: 4,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Technician,
      second: AbilityName.Pickup,
      hidden: AbilityName.SkillLink
    }
  },
  {
    name: "drifloon",
    displayName: "Drifloon",
    dexNumber: 425,
    generation: 4,
    type: TypeName.Ghost,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Amorphous,
      cycles: 30
    },
    abilities: {
      first: AbilityName.Aftermath,
      second: AbilityName.Unburden,
      hidden: AbilityName.FlareBoost
    }
  },
  {
    name: "drifblim",
    displayName: "Drifblim",
    dexNumber: 426,
    generation: 4,
    type: TypeName.Ghost,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Amorphous,
      cycles: 30
    },
    abilities: {
      first: AbilityName.Aftermath,
      second: AbilityName.Unburden,
      hidden: AbilityName.FlareBoost
    }
  },
  {
    name: "buneary",
    displayName: "Buneary",
    dexNumber: 427,
    generation: 4,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      group2: EggGroupName.HumanLike,
      cycles: 20
    },
    abilities: {
      first: AbilityName.RunAway,
      second: AbilityName.Klutz,
      hidden: AbilityName.Limber
    }
  },
  {
    name: "lopunny",
    displayName: "Lopunny",
    dexNumber: 428,
    generation: 4,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      group2: EggGroupName.HumanLike,
      cycles: 20
    },
    abilities: {
      first: AbilityName.CuteCharm,
      second: AbilityName.Klutz,
      hidden: AbilityName.Limber
    }
  },
  {
    name: "mismagius",
    displayName: "Mismagius",
    dexNumber: 429,
    generation: 4,
    type: TypeName.Ghost,
    eggGroups: {
      group1: EggGroupName.Amorphous,
      cycles: 25
    },
    abilities: {
      first: AbilityName.Levitate,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "honchkrow",
    displayName: "Honchkrow",
    dexNumber: 430,
    generation: 4,
    type: TypeName.Dark,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Flying,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Insomnia,
      second: AbilityName.SuperLuck,
      hidden: AbilityName.Moxie
    }
  },
  {
    name: "glameow",
    displayName: "Glameow",
    dexNumber: 431,
    generation: 4,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Limber,
      second: AbilityName.OwnTempo,
      hidden: AbilityName.KeenEye
    }
  },
  {
    name: "purugly",
    displayName: "Purugly",
    dexNumber: 432,
    generation: 4,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.ThickFat,
      second: AbilityName.OwnTempo,
      hidden: AbilityName.Defiant
    }
  },
  {
    name: "chingling",
    displayName: "Chingling",
    dexNumber: 433,
    generation: 4,
    type: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 25
    },
    abilities: {
      first: AbilityName.Levitate,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "stunky",
    displayName: "Stunky",
    dexNumber: 434,
    generation: 4,
    type: TypeName.Poison,
    type2: TypeName.Dark,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Stench,
      second: AbilityName.Aftermath,
      hidden: AbilityName.KeenEye
    }
  },
  {
    name: "skuntank",
    displayName: "Skuntank",
    dexNumber: 435,
    generation: 4,
    type: TypeName.Poison,
    type2: TypeName.Dark,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Stench,
      second: AbilityName.Aftermath,
      hidden: AbilityName.KeenEye
    }
  },
  {
    name: "bronzor",
    displayName: "Bronzor",
    dexNumber: 436,
    generation: 4,
    type: TypeName.Steel,
    type2: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Levitate,
      second: AbilityName.Heatproof,
      hidden: AbilityName.HeavyMetal
    }
  },
  {
    name: "bronzong",
    displayName: "Bronzong",
    dexNumber: 437,
    generation: 4,
    type: TypeName.Steel,
    type2: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Levitate,
      second: AbilityName.Heatproof,
      hidden: AbilityName.HeavyMetal
    }
  },
  {
    name: "bonsly",
    displayName: "Bonsly",
    dexNumber: 438,
    generation: 4,
    type: TypeName.Rock,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Sturdy,
      second: AbilityName.RockHead,
      hidden: AbilityName.Rattled
    }
  },
  {
    name: "mimejr",
    displayName: "Mime Jr.",
    dexNumber: 439,
    generation: 4,
    type: TypeName.Psychic,
    type2: TypeName.Fairy,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 25
    },
    abilities: {
      first: AbilityName.Soundproof,
      second: AbilityName.Filter,
      hidden: AbilityName.Technician
    }
  },
  {
    name: "happiny",
    displayName: "Happiny",
    dexNumber: 440,
    generation: 4,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 40
    },
    abilities: {
      first: AbilityName.NaturalCure,
      second: AbilityName.SereneGrace,
      hidden: AbilityName.FriendGuard
    }
  },
  {
    name: "chatot",
    displayName: "Chatot",
    dexNumber: 441,
    generation: 4,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Flying,
      cycles: 20
    },
    abilities: {
      first: AbilityName.KeenEye,
      second: AbilityName.TangledFeet,
      hidden: AbilityName.BigPecks
    }
  },
  {
    name: "spiritomb",
    displayName: "Spiritomb",
    dexNumber: 442,
    generation: 4,
    type: TypeName.Ghost,
    type2: TypeName.Dark,
    eggGroups: {
      group1: EggGroupName.Amorphous,
      cycles: 30
    },
    abilities: {
      first: AbilityName.Pressure,
      second: AbilityName.NA,
      hidden: AbilityName.Infiltrator
    }
  },
  {
    name: "gible",
    displayName: "Gible",
    dexNumber: 443,
    generation: 4,
    type: TypeName.Dragon,
    type2: TypeName.Ground,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Dragon,
      cycles: 40
    },
    abilities: {
      first: AbilityName.SandVeil,
      second: AbilityName.NA,
      hidden: AbilityName.RoughSkin
    }
  },
  {
    name: "gabite",
    displayName: "Gabite",
    dexNumber: 444,
    generation: 4,
    type: TypeName.Dragon,
    type2: TypeName.Ground,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Dragon,
      cycles: 40
    },
    abilities: {
      first: AbilityName.SandVeil,
      second: AbilityName.NA,
      hidden: AbilityName.RoughSkin
    }
  },
  {
    name: "garchomp",
    displayName: "Garchomp",
    dexNumber: 445,
    generation: 4,
    type: TypeName.Dragon,
    type2: TypeName.Ground,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Dragon,
      cycles: 40
    },
    abilities: {
      first: AbilityName.SandVeil,
      second: AbilityName.NA,
      hidden: AbilityName.RoughSkin
    }
  },
  {
    name: "munchlax",
    displayName: "Munchlax",
    dexNumber: 446,
    generation: 4,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 40
    },
    abilities: {
      first: AbilityName.Pickup,
      second: AbilityName.ThickFat,
      hidden: AbilityName.Gluttony
    }
  },
  {
    name: "riolu",
    displayName: "Riolu",
    dexNumber: 447,
    generation: 4,
    type: TypeName.Fighting,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 25
    },
    abilities: {
      first: AbilityName.Steadfast,
      second: AbilityName.InnerFocus,
      hidden: AbilityName.Prankster
    }
  },
  {
    name: "lucario",
    displayName: "Lucario",
    dexNumber: 448,
    generation: 4,
    type: TypeName.Fighting,
    type2: TypeName.Steel,
    eggGroups: {
      group1: EggGroupName.Field,
      group2: EggGroupName.HumanLike,
      cycles: 25
    },
    abilities: {
      first: AbilityName.Steadfast,
      second: AbilityName.InnerFocus,
      hidden: AbilityName.Justified
    }
  },
  {
    name: "hippopotas",
    displayName: "Hippopotas",
    dexNumber: 449,
    generation: 4,
    type: TypeName.Ground,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 30
    },
    abilities: {
      first: AbilityName.SandStream,
      second: AbilityName.NA,
      hidden: AbilityName.SandForce
    }
  },
  {
    name: "hippowdon",
    displayName: "Hippowdon",
    dexNumber: 450,
    generation: 4,
    type: TypeName.Ground,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 30
    },
    abilities: {
      first: AbilityName.SandStream,
      second: AbilityName.NA,
      hidden: AbilityName.SandForce
    }
  },
  {
    name: "skorupi",
    displayName: "Skorupi",
    dexNumber: 451,
    generation: 4,
    type: TypeName.Poison,
    type2: TypeName.Bug,
    eggGroups: {
      group1: EggGroupName.Bug,
      group2: EggGroupName.Water3,
      cycles: 20
    },
    abilities: {
      first: AbilityName.BattleArmor,
      second: AbilityName.Sniper,
      hidden: AbilityName.KeenEye
    }
  },
  {
    name: "drapion",
    displayName: "Drapion",
    dexNumber: 452,
    generation: 4,
    type: TypeName.Poison,
    type2: TypeName.Dark,
    eggGroups: {
      group1: EggGroupName.Bug,
      group2: EggGroupName.Water3,
      cycles: 20
    },
    abilities: {
      first: AbilityName.BattleArmor,
      second: AbilityName.Sniper,
      hidden: AbilityName.KeenEye
    }
  },
  {
    name: "croagunk",
    displayName: "Croagunk",
    dexNumber: 453,
    generation: 4,
    type: TypeName.Poison,
    type2: TypeName.Fighting,
    eggGroups: {
      group1: EggGroupName.HumanLike,
      cycles: 10
    },
    abilities: {
      first: AbilityName.Anticipation,
      second: AbilityName.DrySkin,
      hidden: AbilityName.PoisonTouch
    }
  },
  {
    name: "toxicroak",
    displayName: "Toxicroak",
    dexNumber: 454,
    generation: 4,
    type: TypeName.Poison,
    type2: TypeName.Fighting,
    eggGroups: {
      group1: EggGroupName.HumanLike,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Anticipation,
      second: AbilityName.DrySkin,
      hidden: AbilityName.PoisonTouch
    }
  },
  {
    name: "carnivine",
    displayName: "Carnivine",
    dexNumber: 455,
    generation: 4,
    type: TypeName.Grass,
    eggGroups: {
      group1: EggGroupName.Grass,
      cycles: 25
    },
    abilities: {
      first: AbilityName.Levitate,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "finneon",
    displayName: "Finneon",
    dexNumber: 456,
    generation: 4,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water2,
      cycles: 20
    },
    abilities: {
      first: AbilityName.SwiftSwim,
      second: AbilityName.StormDrain,
      hidden: AbilityName.WaterVeil
    }
  },
  {
    name: "lumineon",
    displayName: "Lumineon",
    dexNumber: 457,
    generation: 4,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water2,
      cycles: 20
    },
    abilities: {
      first: AbilityName.SwiftSwim,
      second: AbilityName.StormDrain,
      hidden: AbilityName.WaterVeil
    }
  },
  {
    name: "mantyke",
    displayName: "Mantyke",
    dexNumber: 458,
    generation: 4,
    type: TypeName.Water,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 25
    },
    abilities: {
      first: AbilityName.SwiftSwim,
      second: AbilityName.WaterAbsorb,
      hidden: AbilityName.WaterVeil
    }
  },
  {
    name: "snover",
    displayName: "Snover",
    dexNumber: 459,
    generation: 4,
    type: TypeName.Grass,
    type2: TypeName.Ice,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.SnowWarning,
      second: AbilityName.NA,
      hidden: AbilityName.Soundproof
    }
  },
  {
    name: "abomasnow",
    displayName: "Abomasnow",
    dexNumber: 460,
    generation: 4,
    type: TypeName.Grass,
    type2: TypeName.Ice,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.SnowWarning,
      second: AbilityName.NA,
      hidden: AbilityName.Soundproof
    }
  },
  {
    name: "weavile",
    displayName: "Weavile",
    dexNumber: 461,
    generation: 4,
    type: TypeName.Dark,
    type2: TypeName.Ice,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Pressure,
      second: AbilityName.NA,
      hidden: AbilityName.Pickpocket
    }
  },
  {
    name: "magnezone",
    displayName: "Magnezone",
    dexNumber: 462,
    generation: 4,
    type: TypeName.Electric,
    type2: TypeName.Steel,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 20
    },
    abilities: {
      first: AbilityName.MagnetPull,
      second: AbilityName.Sturdy,
      hidden: AbilityName.Analytic
    }
  },
  {
    name: "lickilicky",
    displayName: "Lickilicky",
    dexNumber: 463,
    generation: 4,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Monster,
      cycles: 20
    },
    abilities: {
      first: AbilityName.OwnTempo,
      second: AbilityName.Oblivious,
      hidden: AbilityName.CloudNine
    }
  },
  {
    name: "rhyperior",
    displayName: "Rhyperior",
    dexNumber: 464,
    generation: 4,
    type: TypeName.Ground,
    type2: TypeName.Rock,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.LightningRod,
      second: AbilityName.SolidRock,
      hidden: AbilityName.Reckless
    }
  },
  {
    name: "tangrowth",
    displayName: "Tangrowth",
    dexNumber: 465,
    generation: 4,
    type: TypeName.Grass,
    eggGroups: {
      group1: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Chlorophyll,
      second: AbilityName.LeafGuard,
      hidden: AbilityName.Regenerator
    }
  },
  {
    name: "electivire",
    displayName: "Electivire",
    dexNumber: 466,
    generation: 4,
    type: TypeName.Electric,
    eggGroups: {
      group1: EggGroupName.HumanLike,
      cycles: 25
    },
    abilities: {
      first: AbilityName.MotorDrive,
      second: AbilityName.NA,
      hidden: AbilityName.VitalSpirit
    }
  },
  {
    name: "magmortar",
    displayName: "Magmortar",
    dexNumber: 467,
    generation: 4,
    type: TypeName.Fire,
    eggGroups: {
      group1: EggGroupName.HumanLike,
      cycles: 25
    },
    abilities: {
      first: AbilityName.FlameBody,
      second: AbilityName.NA,
      hidden: AbilityName.VitalSpirit
    }
  },
  {
    name: "togekiss",
    displayName: "Togekiss",
    dexNumber: 468,
    generation: 4,
    type: TypeName.Fairy,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Flying,
      group2: EggGroupName.Fairy,
      cycles: 10
    },
    abilities: {
      first: AbilityName.Hustle,
      second: AbilityName.SereneGrace,
      hidden: AbilityName.SuperLuck
    }
  },
  {
    name: "yanmega",
    displayName: "Yanmega",
    dexNumber: 469,
    generation: 4,
    type: TypeName.Bug,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 20
    },
    abilities: {
      first: AbilityName.SpeedBoost,
      second: AbilityName.TintedLens,
      hidden: AbilityName.Frisk
    }
  },
  {
    name: "leafeon",
    displayName: "Leafeon",
    dexNumber: 470,
    generation: 4,
    type: TypeName.Grass,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 35
    },
    abilities: {
      first: AbilityName.LeafGuard,
      second: AbilityName.NA,
      hidden: AbilityName.Chlorophyll
    }
  },
  {
    name: "glaceon",
    displayName: "Glaceon",
    dexNumber: 471,
    generation: 4,
    type: TypeName.Ice,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 35
    },
    abilities: {
      first: AbilityName.SnowCloak,
      second: AbilityName.NA,
      hidden: AbilityName.IceBody
    }
  },
  {
    name: "gliscor",
    displayName: "Gliscor",
    dexNumber: 472,
    generation: 4,
    type: TypeName.Ground,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 20
    },
    abilities: {
      first: AbilityName.HyperCutter,
      second: AbilityName.SandVeil,
      hidden: AbilityName.PoisonHeal
    }
  },
  {
    name: "mamoswine",
    displayName: "Mamoswine",
    dexNumber: 473,
    generation: 4,
    type: TypeName.Ice,
    type2: TypeName.Ground,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Oblivious,
      second: AbilityName.SnowCloak,
      hidden: AbilityName.ThickFat
    }
  },
  {
    name: "porygonz",
    displayName: "Porygon-Z",
    dexNumber: 474,
    generation: 4,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Adaptability,
      second: AbilityName.Download,
      hidden: AbilityName.Analytic
    }
  },
  {
    name: "gallade",
    displayName: "Gallade",
    dexNumber: 475,
    generation: 4,
    type: TypeName.Psychic,
    type2: TypeName.Fighting,
    eggGroups: {
      group1: EggGroupName.HumanLike,
      group2: EggGroupName.Amorphous,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Steadfast,
      second: AbilityName.Sharpness,
      hidden: AbilityName.Justified
    }
  },
  {
    name: "probopass",
    displayName: "Probopass",
    dexNumber: 476,
    generation: 4,
    type: TypeName.Rock,
    type2: TypeName.Steel,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Sturdy,
      second: AbilityName.MagnetPull,
      hidden: AbilityName.SandForce
    }
  },
  {
    name: "dusknoir",
    displayName: "Dusknoir",
    dexNumber: 477,
    generation: 4,
    type: TypeName.Ghost,
    eggGroups: {
      group1: EggGroupName.Amorphous,
      cycles: 25
    },
    abilities: {
      first: AbilityName.Pressure,
      second: AbilityName.NA,
      hidden: AbilityName.Frisk
    }
  },
  {
    name: "froslass",
    displayName: "Froslass",
    dexNumber: 478,
    generation: 4,
    type: TypeName.Ice,
    type2: TypeName.Ghost,
    eggGroups: {
      group1: EggGroupName.Fairy,
      group2: EggGroupName.Mineral,
      cycles: 20
    },
    abilities: {
      first: AbilityName.SnowCloak,
      second: AbilityName.NA,
      hidden: AbilityName.CursedBody
    }
  },
  {
    name: "rotom",
    displayName: "Rotom",
    dexNumber: 479,
    generation: 4,
    type: TypeName.Electric,
    type2: [TypeName.Ghost, TypeName.Fire, TypeName.Water, TypeName.Ice, TypeName.Flying, TypeName.Grass],
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
    name: "uxie",
    displayName: "Uxie",
    dexNumber: 480,
    generation: 4,
    type: TypeName.Psychic,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 80
    },
    abilities: {
      first: AbilityName.Levitate,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "mesprit",
    displayName: "Mesprit",
    dexNumber: 481,
    generation: 4,
    type: TypeName.Psychic,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 80
    },
    abilities: {
      first: AbilityName.Levitate,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "azelf",
    displayName: "Azelf",
    dexNumber: 482,
    generation: 4,
    type: TypeName.Psychic,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 80
    },
    abilities: {
      first: AbilityName.Levitate,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "dialga",
    displayName: "Dialga",
    dexNumber: 483,
    generation: 4,
    type: TypeName.Steel,
    type2: TypeName.Dragon,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.Pressure,
      second: AbilityName.NA,
      hidden: AbilityName.Telepathy
    }
  },
  {
    name: "palkia",
    displayName: "Palkia",
    dexNumber: 484,
    generation: 4,
    type: TypeName.Water,
    type2: TypeName.Dragon,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.Pressure,
      second: AbilityName.NA,
      hidden: AbilityName.Telepathy
    }
  },
  {
    name: "heatran",
    displayName: "Heatran",
    dexNumber: 485,
    generation: 4,
    type: TypeName.Fire,
    type2: TypeName.Steel,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 10
    },
    abilities: {
      first: AbilityName.FlashFire,
      second: AbilityName.NA,
      hidden: AbilityName.FlameBody
    }
  },
  {
    name: "regigigas",
    displayName: "Regigigas",
    dexNumber: 486,
    generation: 4,
    type: TypeName.Normal,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.SlowStart,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "giratina",
    displayName: "Giratina",
    dexNumber: 487,
    generation: 4,
    type: TypeName.Ghost,
    type2: TypeName.Dragon,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.Pressure,
      second: AbilityName.NA,
      hidden: AbilityName.Telepathy
    }
  },
  {
    name: "cresselia",
    displayName: "Cresselia",
    dexNumber: 488,
    generation: 4,
    type: TypeName.Psychic,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.Levitate,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "phione",
    displayName: "Phione",
    dexNumber: 489,
    generation: 4,
    type: TypeName.Water,
    category: Category.Mythical,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Fairy,
      cycles: 40
    },
    abilities: {
      first: AbilityName.Hydration,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "manaphy",
    displayName: "Manaphy",
    dexNumber: 490,
    generation: 4,
    type: TypeName.Water,
    category: Category.Mythical,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Fairy,
      cycles: 10
    },
    abilities: {
      first: AbilityName.Hydration,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "darkrai",
    displayName: "Darkrai",
    dexNumber: 491,
    generation: 4,
    type: TypeName.Dark,
    category: Category.Mythical,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.BadDreams,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "shaymin",
    displayName: "Shaymin",
    dexNumber: 492,
    generation: 4,
    type: TypeName.Grass,
    type2: TypeName.Flying,
    category: Category.Mythical,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.NaturalCure,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "arceus",
    displayName: "Arceus",
    dexNumber: 493,
    generation: 4,
    type: [
      TypeName.Normal,
      TypeName.Bug,
      TypeName.Dark,
      TypeName.Dragon,
      TypeName.Electric,
      TypeName.Fairy,
      TypeName.Fighting,
      TypeName.Fire,
      TypeName.Flying,
      TypeName.Ghost,
      TypeName.Grass,
      TypeName.Ground,
      TypeName.Ice,
      TypeName.Poison,
      TypeName.Psychic,
      TypeName.Rock,
      TypeName.Steel,
      TypeName.Water
    ],
    category: Category.Mythical,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.Multitype,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  }
];
