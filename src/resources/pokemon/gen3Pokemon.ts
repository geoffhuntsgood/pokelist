import { Pokemon } from "../../classes";
import { AbilityName, Category, EggGroupName, TypeName } from "../../enums";

export const gen3Pokemon: Pokemon[] = [
  {
    name: "treecko",
    displayName: "Treecko",
    dexNumber: 252,
    generation: 3,
    type: TypeName.Grass,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Dragon,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Overgrow,
      second: AbilityName.NA,
      hidden: AbilityName.Unburden
    }
  },
  {
    name: "grovyle",
    displayName: "Grovyle",
    dexNumber: 253,
    generation: 3,
    type: TypeName.Grass,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Dragon,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Overgrow,
      second: AbilityName.NA,
      hidden: AbilityName.Unburden
    }
  },
  {
    name: "sceptile",
    displayName: "Sceptile",
    dexNumber: 254,
    generation: 3,
    type: TypeName.Grass,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Dragon,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Overgrow,
      second: AbilityName.NA,
      hidden: AbilityName.Unburden
    }
  },
  {
    name: "torchic",
    displayName: "Torchic",
    dexNumber: 255,
    generation: 3,
    type: TypeName.Fire,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Blaze,
      second: AbilityName.NA,
      hidden: AbilityName.SpeedBoost
    }
  },
  {
    name: "combusken",
    displayName: "Combusken",
    dexNumber: 256,
    generation: 3,
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
      hidden: AbilityName.SpeedBoost
    }
  },
  {
    name: "blaziken",
    displayName: "Blaziken",
    dexNumber: 257,
    generation: 3,
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
      hidden: AbilityName.SpeedBoost
    }
  },
  {
    name: "mudkip",
    displayName: "Mudkip",
    dexNumber: 258,
    generation: 3,
    type: TypeName.Water,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Water1,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Torrent,
      second: AbilityName.NA,
      hidden: AbilityName.Damp
    }
  },
  {
    name: "marshtomp",
    displayName: "Marshtomp",
    dexNumber: 259,
    generation: 3,
    type: TypeName.Water,
    type2: TypeName.Ground,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Water1,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Torrent,
      second: AbilityName.NA,
      hidden: AbilityName.Damp
    }
  },
  {
    name: "swampert",
    displayName: "Swampert",
    dexNumber: 260,
    generation: 3,
    type: TypeName.Water,
    type2: TypeName.Ground,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Water1,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Torrent,
      second: AbilityName.NA,
      hidden: AbilityName.Damp
    }
  },
  {
    name: "poochyena",
    displayName: "Poochyena",
    dexNumber: 261,
    generation: 3,
    type: TypeName.Dark,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 15
    },
    abilities: {
      first: AbilityName.RunAway,
      second: AbilityName.QuickFeet,
      hidden: AbilityName.Rattled
    }
  },
  {
    name: "mightyena",
    displayName: "Mightyena",
    dexNumber: 262,
    generation: 3,
    type: TypeName.Dark,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Intimidate,
      second: AbilityName.QuickFeet,
      hidden: AbilityName.Moxie
    }
  },
  {
    name: "zigzagoon",
    displayName: "Zigzagoon",
    dexNumber: 263,
    generation: 3,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Pickup,
      second: AbilityName.Gluttony,
      hidden: AbilityName.QuickFeet
    }
  },
  {
    name: "linoone",
    displayName: "Linoone",
    dexNumber: 264,
    generation: 3,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Pickup,
      second: AbilityName.Gluttony,
      hidden: AbilityName.QuickFeet
    }
  },
  {
    name: "wurmple",
    displayName: "Wurmple",
    dexNumber: 265,
    generation: 3,
    type: TypeName.Bug,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 15
    },
    abilities: {
      first: AbilityName.ShieldDust,
      second: AbilityName.NA,
      hidden: AbilityName.RunAway
    }
  },
  {
    name: "silcoon",
    displayName: "Silcoon",
    dexNumber: 266,
    generation: 3,
    type: TypeName.Bug,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 15
    },
    abilities: {
      first: AbilityName.ShedSkin,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "beautifly",
    displayName: "Beautifly",
    dexNumber: 267,
    generation: 3,
    type: TypeName.Bug,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Swarm,
      second: AbilityName.NA,
      hidden: AbilityName.Rivalry
    }
  },
  {
    name: "cascoon",
    displayName: "Cascoon",
    dexNumber: 268,
    generation: 3,
    type: TypeName.Bug,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 15
    },
    abilities: {
      first: AbilityName.ShedSkin,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "dustox",
    displayName: "Dustox",
    dexNumber: 269,
    generation: 3,
    type: TypeName.Bug,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 15
    },
    abilities: {
      first: AbilityName.ShieldDust,
      second: AbilityName.NA,
      hidden: AbilityName.CompoundEyes
    }
  },
  {
    name: "lotad",
    displayName: "Lotad",
    dexNumber: 270,
    generation: 3,
    type: TypeName.Water,
    type2: TypeName.Grass,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Grass,
      cycles: 15
    },
    abilities: {
      first: AbilityName.SwiftSwim,
      second: AbilityName.RainDish,
      hidden: AbilityName.OwnTempo
    }
  },
  {
    name: "lombre",
    displayName: "Lombre",
    dexNumber: 271,
    generation: 3,
    type: TypeName.Water,
    type2: TypeName.Grass,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Grass,
      cycles: 15
    },
    abilities: {
      first: AbilityName.SwiftSwim,
      second: AbilityName.RainDish,
      hidden: AbilityName.OwnTempo
    }
  },
  {
    name: "ludicolo",
    displayName: "Ludicolo",
    dexNumber: 272,
    generation: 3,
    type: TypeName.Water,
    type2: TypeName.Grass,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Grass,
      cycles: 15
    },
    abilities: {
      first: AbilityName.SwiftSwim,
      second: AbilityName.RainDish,
      hidden: AbilityName.OwnTempo
    }
  },
  {
    name: "seedot",
    displayName: "Seedot",
    dexNumber: 273,
    generation: 3,
    type: TypeName.Grass,
    eggGroups: {
      group1: EggGroupName.Field,
      group2: EggGroupName.Grass,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Chlorophyll,
      second: AbilityName.EarlyBird,
      hidden: AbilityName.Pickpocket
    }
  },
  {
    name: "nuzleaf",
    displayName: "Nuzleaf",
    dexNumber: 274,
    generation: 3,
    type: TypeName.Grass,
    type2: TypeName.Dark,
    eggGroups: {
      group1: EggGroupName.Field,
      group2: EggGroupName.Grass,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Chlorophyll,
      second: AbilityName.EarlyBird,
      hidden: AbilityName.Pickpocket
    }
  },
  {
    name: "shiftry",
    displayName: "Shiftry",
    dexNumber: 275,
    generation: 3,
    type: TypeName.Grass,
    type2: TypeName.Dark,
    eggGroups: {
      group1: EggGroupName.Field,
      group2: EggGroupName.Grass,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Chlorophyll,
      second: AbilityName.EarlyBird,
      hidden: AbilityName.Pickpocket
    }
  },
  {
    name: "taillow",
    displayName: "Taillow",
    dexNumber: 276,
    generation: 3,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Flying,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Guts,
      second: AbilityName.NA,
      hidden: AbilityName.Scrappy
    }
  },
  {
    name: "swellow",
    displayName: "Swellow",
    dexNumber: 277,
    generation: 3,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Flying,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Guts,
      second: AbilityName.NA,
      hidden: AbilityName.Scrappy
    }
  },
  {
    name: "wingull",
    displayName: "Wingull",
    dexNumber: 278,
    generation: 3,
    type: TypeName.Water,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Flying,
      cycles: 20
    },
    abilities: {
      first: AbilityName.KeenEye,
      second: AbilityName.Hydration,
      hidden: AbilityName.RainDish
    }
  },
  {
    name: "pelipper",
    displayName: "Pelipper",
    dexNumber: 279,
    generation: 3,
    type: TypeName.Water,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Flying,
      cycles: 20
    },
    abilities: {
      first: AbilityName.KeenEye,
      second: AbilityName.Drizzle,
      hidden: AbilityName.RainDish
    }
  },
  {
    name: "ralts",
    displayName: "Ralts",
    dexNumber: 280,
    generation: 3,
    type: TypeName.Psychic,
    type2: TypeName.Fairy,
    eggGroups: {
      group1: EggGroupName.HumanLike,
      group2: EggGroupName.Amorphous,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Synchronize,
      second: AbilityName.Trace,
      hidden: AbilityName.Telepathy
    }
  },
  {
    name: "kirlia",
    displayName: "Kirlia",
    dexNumber: 281,
    generation: 3,
    type: TypeName.Psychic,
    type2: TypeName.Fairy,
    eggGroups: {
      group1: EggGroupName.HumanLike,
      group2: EggGroupName.Amorphous,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Synchronize,
      second: AbilityName.Trace,
      hidden: AbilityName.Telepathy
    }
  },
  {
    name: "gardevoir",
    displayName: "Gardevoir",
    dexNumber: 282,
    generation: 3,
    type: TypeName.Psychic,
    type2: TypeName.Fairy,
    eggGroups: {
      group1: EggGroupName.HumanLike,
      group2: EggGroupName.Amorphous,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Synchronize,
      second: AbilityName.Trace,
      hidden: AbilityName.Telepathy
    }
  },
  {
    name: "surskit",
    displayName: "Surskit",
    dexNumber: 283,
    generation: 3,
    type: TypeName.Bug,
    type2: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Bug,
      cycles: 15
    },
    abilities: {
      first: AbilityName.SwiftSwim,
      second: AbilityName.NA,
      hidden: AbilityName.RainDish
    }
  },
  {
    name: "masquerain",
    displayName: "Masquerain",
    dexNumber: 284,
    generation: 3,
    type: TypeName.Bug,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Bug,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Intimidate,
      second: AbilityName.NA,
      hidden: AbilityName.Unnerve
    }
  },
  {
    name: "shroomish",
    displayName: "Shroomish",
    dexNumber: 285,
    generation: 3,
    type: TypeName.Grass,
    eggGroups: {
      group1: EggGroupName.Fairy,
      group2: EggGroupName.Grass,
      cycles: 15
    },
    abilities: {
      first: AbilityName.EffectSpore,
      second: AbilityName.PoisonHeal,
      hidden: AbilityName.QuickFeet
    }
  },
  {
    name: "breloom",
    displayName: "Breloom",
    dexNumber: 286,
    generation: 3,
    type: TypeName.Grass,
    type2: TypeName.Fighting,
    eggGroups: {
      group1: EggGroupName.Fairy,
      group2: EggGroupName.Grass,
      cycles: 15
    },
    abilities: {
      first: AbilityName.EffectSpore,
      second: AbilityName.PoisonHeal,
      hidden: AbilityName.Technician
    }
  },
  {
    name: "slakoth",
    displayName: "Slakoth",
    dexNumber: 287,
    generation: 3,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Truant,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "vigoroth",
    displayName: "Vigoroth",
    dexNumber: 288,
    generation: 3,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 15
    },
    abilities: {
      first: AbilityName.VitalSpirit,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "slaking",
    displayName: "Slaking",
    dexNumber: 289,
    generation: 3,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Truant,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "nincada",
    displayName: "Nincada",
    dexNumber: 290,
    generation: 3,
    type: TypeName.Bug,
    type2: TypeName.Ground,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 15
    },
    abilities: {
      first: AbilityName.CompoundEyes,
      second: AbilityName.NA,
      hidden: AbilityName.RunAway
    }
  },
  {
    name: "ninjask",
    displayName: "Ninjask",
    dexNumber: 291,
    generation: 3,
    type: TypeName.Bug,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 15
    },
    abilities: {
      first: AbilityName.SpeedBoost,
      second: AbilityName.NA,
      hidden: AbilityName.Infiltrator
    }
  },
  {
    name: "shedinja",
    displayName: "Shedinja",
    dexNumber: 292,
    generation: 3,
    type: TypeName.Bug,
    type2: TypeName.Ghost,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 15
    },
    abilities: {
      first: AbilityName.WonderGuard,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "whismur",
    displayName: "Whismur",
    dexNumber: 293,
    generation: 3,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Soundproof,
      second: AbilityName.NA,
      hidden: AbilityName.Rattled
    }
  },
  {
    name: "loudred",
    displayName: "Loudred",
    dexNumber: 294,
    generation: 3,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Soundproof,
      second: AbilityName.NA,
      hidden: AbilityName.Scrappy
    }
  },
  {
    name: "exploud",
    displayName: "Exploud",
    dexNumber: 295,
    generation: 3,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Soundproof,
      second: AbilityName.NA,
      hidden: AbilityName.Scrappy
    }
  },
  {
    name: "makuhita",
    displayName: "Makuhita",
    dexNumber: 296,
    generation: 3,
    type: TypeName.Fighting,
    eggGroups: {
      group1: EggGroupName.HumanLike,
      cycles: 20
    },
    abilities: {
      first: AbilityName.ThickFat,
      second: AbilityName.Guts,
      hidden: AbilityName.SheerForce
    }
  },
  {
    name: "hariyama",
    displayName: "Hariyama",
    dexNumber: 297,
    generation: 3,
    type: TypeName.Fighting,
    eggGroups: {
      group1: EggGroupName.HumanLike,
      cycles: 20
    },
    abilities: {
      first: AbilityName.ThickFat,
      second: AbilityName.Guts,
      hidden: AbilityName.SheerForce
    }
  },
  {
    name: "azurill",
    displayName: "Azurill",
    dexNumber: 298,
    generation: 3,
    type: TypeName.Normal,
    type2: TypeName.Fairy,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 10
    },
    abilities: {
      first: AbilityName.ThickFat,
      second: AbilityName.HugePower,
      hidden: AbilityName.SapSipper
    }
  },
  {
    name: "nosepass",
    displayName: "Nosepass",
    dexNumber: 299,
    generation: 3,
    type: TypeName.Rock,
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
    name: "skitty",
    displayName: "Skitty",
    dexNumber: 300,
    generation: 3,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      group2: EggGroupName.Fairy,
      cycles: 15
    },
    abilities: {
      first: AbilityName.CuteCharm,
      second: AbilityName.Normalize,
      hidden: AbilityName.WonderSkin
    }
  },
  {
    name: "delcatty",
    displayName: "Delcatty",
    dexNumber: 301,
    generation: 3,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      group2: EggGroupName.Fairy,
      cycles: 15
    },
    abilities: {
      first: AbilityName.CuteCharm,
      second: AbilityName.Normalize,
      hidden: AbilityName.WonderSkin
    }
  },
  {
    name: "sableye",
    displayName: "Sableye",
    dexNumber: 302,
    generation: 3,
    type: TypeName.Dark,
    type2: TypeName.Ghost,
    eggGroups: {
      group1: EggGroupName.HumanLike,
      cycles: 25
    },
    abilities: {
      first: AbilityName.KeenEye,
      second: AbilityName.Stall,
      hidden: AbilityName.Prankster
    }
  },
  {
    name: "mawile",
    displayName: "Mawile",
    dexNumber: 303,
    generation: 3,
    type: TypeName.Steel,
    type2: TypeName.Fairy,
    eggGroups: {
      group1: EggGroupName.Field,
      group2: EggGroupName.Fairy,
      cycles: 20
    },
    abilities: {
      first: AbilityName.HyperCutter,
      second: AbilityName.Intimidate,
      hidden: AbilityName.SheerForce
    }
  },
  {
    name: "aron",
    displayName: "Aron",
    dexNumber: 304,
    generation: 3,
    type: TypeName.Steel,
    type2: TypeName.Rock,
    eggGroups: {
      group1: EggGroupName.Monster,
      cycles: 35
    },
    abilities: {
      first: AbilityName.Sturdy,
      second: AbilityName.RockHead,
      hidden: AbilityName.HeavyMetal
    }
  },
  {
    name: "lairon",
    displayName: "Lairon",
    dexNumber: 305,
    generation: 3,
    type: TypeName.Steel,
    type2: TypeName.Rock,
    eggGroups: {
      group1: EggGroupName.Monster,
      cycles: 35
    },
    abilities: {
      first: AbilityName.Sturdy,
      second: AbilityName.RockHead,
      hidden: AbilityName.HeavyMetal
    }
  },
  {
    name: "aggron",
    displayName: "Aggron",
    dexNumber: 306,
    generation: 3,
    type: TypeName.Steel,
    type2: TypeName.Rock,
    eggGroups: {
      group1: EggGroupName.Monster,
      cycles: 35
    },
    abilities: {
      first: AbilityName.Sturdy,
      second: AbilityName.RockHead,
      hidden: AbilityName.HeavyMetal
    }
  },
  {
    name: "meditite",
    displayName: "Meditite",
    dexNumber: 307,
    generation: 3,
    type: TypeName.Fighting,
    type2: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.HumanLike,
      cycles: 20
    },
    abilities: {
      first: AbilityName.PurePower,
      second: AbilityName.NA,
      hidden: AbilityName.Telepathy
    }
  },
  {
    name: "medicham",
    displayName: "Medicham",
    dexNumber: 308,
    generation: 3,
    type: TypeName.Fighting,
    type2: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.HumanLike,
      cycles: 20
    },
    abilities: {
      first: AbilityName.PurePower,
      second: AbilityName.NA,
      hidden: AbilityName.Telepathy
    }
  },
  {
    name: "electrike",
    displayName: "Electrike",
    dexNumber: 309,
    generation: 3,
    type: TypeName.Electric,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Static,
      second: AbilityName.LightningRod,
      hidden: AbilityName.Minus
    }
  },
  {
    name: "manectric",
    displayName: "Manectric",
    dexNumber: 310,
    generation: 3,
    type: TypeName.Electric,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Static,
      second: AbilityName.LightningRod,
      hidden: AbilityName.Minus
    }
  },
  {
    name: "plusle",
    displayName: "Plusle",
    dexNumber: 311,
    generation: 3,
    type: TypeName.Electric,
    eggGroups: {
      group1: EggGroupName.Fairy,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Plus,
      second: AbilityName.NA,
      hidden: AbilityName.LightningRod
    }
  },
  {
    name: "minun",
    displayName: "Minun",
    dexNumber: 312,
    generation: 3,
    type: TypeName.Electric,
    eggGroups: {
      group1: EggGroupName.Fairy,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Minus,
      second: AbilityName.NA,
      hidden: AbilityName.VoltAbsorb
    }
  },
  {
    name: "volbeat",
    displayName: "Volbeat",
    dexNumber: 313,
    generation: 3,
    type: TypeName.Bug,
    eggGroups: {
      group1: EggGroupName.Bug,
      group2: EggGroupName.HumanLike,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Illuminate,
      second: AbilityName.Swarm,
      hidden: AbilityName.Prankster
    }
  },
  {
    name: "illumise",
    displayName: "Illumise",
    dexNumber: 314,
    generation: 3,
    type: TypeName.Bug,
    eggGroups: {
      group1: EggGroupName.Bug,
      group2: EggGroupName.HumanLike,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Oblivious,
      second: AbilityName.TintedLens,
      hidden: AbilityName.Prankster
    }
  },
  {
    name: "roselia",
    displayName: "Roselia",
    dexNumber: 315,
    generation: 3,
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
      hidden: AbilityName.LeafGuard
    }
  },
  {
    name: "gulpin",
    displayName: "Gulpin",
    dexNumber: 316,
    generation: 3,
    type: TypeName.Poison,
    eggGroups: {
      group1: EggGroupName.Amorphous,
      cycles: 20
    },
    abilities: {
      first: AbilityName.LiquidOoze,
      second: AbilityName.StickyHold,
      hidden: AbilityName.Gluttony
    }
  },
  {
    name: "swalot",
    displayName: "Swalot",
    dexNumber: 317,
    generation: 3,
    type: TypeName.Poison,
    eggGroups: {
      group1: EggGroupName.Amorphous,
      cycles: 20
    },
    abilities: {
      first: AbilityName.LiquidOoze,
      second: AbilityName.StickyHold,
      hidden: AbilityName.Gluttony
    }
  },
  {
    name: "carvanha",
    displayName: "Carvanha",
    dexNumber: 318,
    generation: 3,
    type: TypeName.Water,
    type2: TypeName.Dark,
    eggGroups: {
      group1: EggGroupName.Water2,
      cycles: 20
    },
    abilities: {
      first: AbilityName.RoughSkin,
      second: AbilityName.NA,
      hidden: AbilityName.SpeedBoost
    }
  },
  {
    name: "sharpedo",
    displayName: "Sharpedo",
    dexNumber: 319,
    generation: 3,
    type: TypeName.Water,
    type2: TypeName.Dark,
    eggGroups: {
      group1: EggGroupName.Water2,
      cycles: 20
    },
    abilities: {
      first: AbilityName.RoughSkin,
      second: AbilityName.NA,
      hidden: AbilityName.SpeedBoost
    }
  },
  {
    name: "wailmer",
    displayName: "Wailmer",
    dexNumber: 320,
    generation: 3,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Field,
      group2: EggGroupName.Water2,
      cycles: 40
    },
    abilities: {
      first: AbilityName.WaterVeil,
      second: AbilityName.Oblivious,
      hidden: AbilityName.Pressure
    }
  },
  {
    name: "wailord",
    displayName: "Wailord",
    dexNumber: 321,
    generation: 3,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Field,
      group2: EggGroupName.Water2,
      cycles: 40
    },
    abilities: {
      first: AbilityName.WaterVeil,
      second: AbilityName.Oblivious,
      hidden: AbilityName.Pressure
    }
  },
  {
    name: "numel",
    displayName: "Numel",
    dexNumber: 322,
    generation: 3,
    type: TypeName.Fire,
    type2: TypeName.Ground,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Oblivious,
      second: AbilityName.Simple,
      hidden: AbilityName.OwnTempo
    }
  },
  {
    name: "camerupt",
    displayName: "Camerupt",
    dexNumber: 323,
    generation: 3,
    type: TypeName.Fire,
    type2: TypeName.Ground,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.MagmaArmor,
      second: AbilityName.SolidRock,
      hidden: AbilityName.AngerPoint
    }
  },
  {
    name: "torkoal",
    displayName: "Torkoal",
    dexNumber: 324,
    generation: 3,
    type: TypeName.Fire,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.WhiteSmoke,
      second: AbilityName.Drought,
      hidden: AbilityName.ShellArmor
    }
  },
  {
    name: "spoink",
    displayName: "Spoink",
    dexNumber: 325,
    generation: 3,
    type: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.ThickFat,
      second: AbilityName.OwnTempo,
      hidden: AbilityName.Gluttony
    }
  },
  {
    name: "grumpig",
    displayName: "Grumpig",
    dexNumber: 326,
    generation: 3,
    type: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.ThickFat,
      second: AbilityName.OwnTempo,
      hidden: AbilityName.Gluttony
    }
  },
  {
    name: "spinda",
    displayName: "Spinda",
    dexNumber: 327,
    generation: 3,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      group2: EggGroupName.HumanLike,
      cycles: 15
    },
    abilities: {
      first: AbilityName.OwnTempo,
      second: AbilityName.TangledFeet,
      hidden: AbilityName.Gluttony
    }
  },
  {
    name: "trapinch",
    displayName: "Trapinch",
    dexNumber: 328,
    generation: 3,
    type: TypeName.Ground,
    eggGroups: {
      group1: EggGroupName.Bug,
      group2: EggGroupName.Dragon,
      cycles: 20
    },
    abilities: {
      first: AbilityName.HyperCutter,
      second: AbilityName.ArenaTrap,
      hidden: AbilityName.SheerForce
    }
  },
  {
    name: "vibrava",
    displayName: "Vibrava",
    dexNumber: 329,
    generation: 3,
    type: TypeName.Ground,
    type2: TypeName.Dragon,
    eggGroups: {
      group1: EggGroupName.Bug,
      group2: EggGroupName.Dragon,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Levitate,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "flygon",
    displayName: "Flygon",
    dexNumber: 330,
    generation: 3,
    type: TypeName.Ground,
    type2: TypeName.Dragon,
    eggGroups: {
      group1: EggGroupName.Bug,
      group2: EggGroupName.Dragon,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Levitate,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "cacnea",
    displayName: "Cacnea",
    dexNumber: 331,
    generation: 3,
    type: TypeName.Grass,
    eggGroups: {
      group1: EggGroupName.Grass,
      group2: EggGroupName.HumanLike,
      cycles: 20
    },
    abilities: {
      first: AbilityName.SandVeil,
      second: AbilityName.NA,
      hidden: AbilityName.WaterAbsorb
    }
  },
  {
    name: "cacturne",
    displayName: "Cacturne",
    dexNumber: 332,
    generation: 3,
    type: TypeName.Grass,
    type2: TypeName.Dark,
    eggGroups: {
      group1: EggGroupName.Grass,
      group2: EggGroupName.HumanLike,
      cycles: 20
    },
    abilities: {
      first: AbilityName.SandVeil,
      second: AbilityName.NA,
      hidden: AbilityName.WaterAbsorb
    }
  },
  {
    name: "swablu",
    displayName: "Swablu",
    dexNumber: 333,
    generation: 3,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Flying,
      group2: EggGroupName.Dragon,
      cycles: 20
    },
    abilities: {
      first: AbilityName.NaturalCure,
      second: AbilityName.NA,
      hidden: AbilityName.CloudNine
    }
  },
  {
    name: "altaria",
    displayName: "Altaria",
    dexNumber: 334,
    generation: 3,
    type: TypeName.Dragon,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Flying,
      group2: EggGroupName.Dragon,
      cycles: 20
    },
    abilities: {
      first: AbilityName.NaturalCure,
      second: AbilityName.NA,
      hidden: AbilityName.CloudNine
    }
  },
  {
    name: "zangoose",
    displayName: "Zangoose",
    dexNumber: 335,
    generation: 3,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Immunity,
      second: AbilityName.NA,
      hidden: AbilityName.ToxicBoost
    }
  },
  {
    name: "seviper",
    displayName: "Seviper",
    dexNumber: 336,
    generation: 3,
    type: TypeName.Poison,
    eggGroups: {
      group1: EggGroupName.Field,
      group2: EggGroupName.Dragon,
      cycles: 20
    },
    abilities: {
      first: AbilityName.ShedSkin,
      second: AbilityName.NA,
      hidden: AbilityName.Infiltrator
    }
  },
  {
    name: "lunatone",
    displayName: "Lunatone",
    dexNumber: 337,
    generation: 3,
    type: TypeName.Rock,
    type2: TypeName.Psychic,
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
    name: "solrock",
    displayName: "Solrock",
    dexNumber: 338,
    generation: 3,
    type: TypeName.Rock,
    type2: TypeName.Psychic,
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
    name: "barboach",
    displayName: "Barboach",
    dexNumber: 339,
    generation: 3,
    type: TypeName.Water,
    type2: TypeName.Ground,
    eggGroups: {
      group1: EggGroupName.Water2,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Oblivious,
      second: AbilityName.Anticipation,
      hidden: AbilityName.Hydration
    }
  },
  {
    name: "whiscash",
    displayName: "Whiscash",
    dexNumber: 340,
    generation: 3,
    type: TypeName.Water,
    type2: TypeName.Ground,
    eggGroups: {
      group1: EggGroupName.Water2,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Oblivious,
      second: AbilityName.Anticipation,
      hidden: AbilityName.Hydration
    }
  },
  {
    name: "corphish",
    displayName: "Corphish",
    dexNumber: 341,
    generation: 3,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Water3,
      cycles: 15
    },
    abilities: {
      first: AbilityName.HyperCutter,
      second: AbilityName.ShellArmor,
      hidden: AbilityName.Adaptability
    }
  },
  {
    name: "crawdaunt",
    displayName: "Crawdaunt",
    dexNumber: 342,
    generation: 3,
    type: TypeName.Water,
    type2: TypeName.Dark,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Water3,
      cycles: 15
    },
    abilities: {
      first: AbilityName.HyperCutter,
      second: AbilityName.ShellArmor,
      hidden: AbilityName.Adaptability
    }
  },
  {
    name: "baltoy",
    displayName: "Baltoy",
    dexNumber: 343,
    generation: 3,
    type: TypeName.Ground,
    type2: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Levitate,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "claydol",
    displayName: "Claydol",
    dexNumber: 344,
    generation: 3,
    type: TypeName.Ground,
    type2: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Levitate,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "lileep",
    displayName: "Lileep",
    dexNumber: 345,
    generation: 3,
    type: TypeName.Rock,
    type2: TypeName.Grass,
    category: Category.Fossil,
    eggGroups: {
      group1: EggGroupName.Water3,
      cycles: 30
    },
    abilities: {
      first: AbilityName.SuctionCups,
      second: AbilityName.NA,
      hidden: AbilityName.StormDrain
    }
  },
  {
    name: "cradily",
    displayName: "Cradily",
    dexNumber: 346,
    generation: 3,
    type: TypeName.Rock,
    type2: TypeName.Grass,
    category: Category.Fossil,
    eggGroups: {
      group1: EggGroupName.Water3,
      cycles: 30
    },
    abilities: {
      first: AbilityName.SuctionCups,
      second: AbilityName.NA,
      hidden: AbilityName.StormDrain
    }
  },
  {
    name: "anorith",
    displayName: "Anorith",
    dexNumber: 347,
    generation: 3,
    type: TypeName.Rock,
    type2: TypeName.Bug,
    category: Category.Fossil,
    eggGroups: {
      group1: EggGroupName.Water3,
      cycles: 30
    },
    abilities: {
      first: AbilityName.BattleArmor,
      second: AbilityName.NA,
      hidden: AbilityName.SwiftSwim
    }
  },
  {
    name: "armaldo",
    displayName: "Armaldo",
    dexNumber: 348,
    generation: 3,
    type: TypeName.Rock,
    type2: TypeName.Bug,
    category: Category.Fossil,
    eggGroups: {
      group1: EggGroupName.Water3,
      cycles: 30
    },
    abilities: {
      first: AbilityName.BattleArmor,
      second: AbilityName.NA,
      hidden: AbilityName.SwiftSwim
    }
  },
  {
    name: "feebas",
    displayName: "Feebas",
    dexNumber: 349,
    generation: 3,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Dragon,
      cycles: 20
    },
    abilities: {
      first: AbilityName.SwiftSwim,
      second: AbilityName.Oblivious,
      hidden: AbilityName.Adaptability
    }
  },
  {
    name: "milotic",
    displayName: "Milotic",
    dexNumber: 350,
    generation: 3,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Dragon,
      cycles: 20
    },
    abilities: {
      first: AbilityName.MarvelScale,
      second: AbilityName.Competitive,
      hidden: AbilityName.CuteCharm
    }
  },
  {
    name: "castform",
    displayName: "Castform",
    dexNumber: 351,
    generation: 3,
    type: [TypeName.Normal, TypeName.Fire, TypeName.Water, TypeName.Ice],
    eggGroups: {
      group1: EggGroupName.Fairy,
      group2: EggGroupName.Amorphous,
      cycles: 25
    },
    abilities: {
      first: AbilityName.Forecast,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "kecleon",
    displayName: "Kecleon",
    dexNumber: 352,
    generation: 3,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.ColorChange,
      second: AbilityName.NA,
      hidden: AbilityName.Protean
    }
  },
  {
    name: "shuppet",
    displayName: "Shuppet",
    dexNumber: 353,
    generation: 3,
    type: TypeName.Ghost,
    eggGroups: {
      group1: EggGroupName.Amorphous,
      cycles: 25
    },
    abilities: {
      first: AbilityName.Insomnia,
      second: AbilityName.Frisk,
      hidden: AbilityName.CursedBody
    }
  },
  {
    name: "banette",
    displayName: "Banette",
    dexNumber: 354,
    generation: 3,
    type: TypeName.Ghost,
    eggGroups: {
      group1: EggGroupName.Amorphous,
      cycles: 25
    },
    abilities: {
      first: AbilityName.Insomnia,
      second: AbilityName.Frisk,
      hidden: AbilityName.CursedBody
    }
  },
  {
    name: "duskull",
    displayName: "Duskull",
    dexNumber: 355,
    generation: 3,
    type: TypeName.Ghost,
    eggGroups: {
      group1: EggGroupName.Amorphous,
      cycles: 25
    },
    abilities: {
      first: AbilityName.Levitate,
      second: AbilityName.NA,
      hidden: AbilityName.Frisk
    }
  },
  {
    name: "dusclops",
    displayName: "Dusclops",
    dexNumber: 356,
    generation: 3,
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
    name: "tropius",
    displayName: "Tropius",
    dexNumber: 357,
    generation: 3,
    type: TypeName.Grass,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Grass,
      cycles: 25
    },
    abilities: {
      first: AbilityName.Chlorophyll,
      second: AbilityName.SolarPower,
      hidden: AbilityName.Harvest
    }
  },
  {
    name: "chimecho",
    displayName: "Chimecho",
    dexNumber: 358,
    generation: 3,
    type: TypeName.Psychic,
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
    name: "absol",
    displayName: "Absol",
    dexNumber: 359,
    generation: 3,
    type: TypeName.Dark,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 25
    },
    abilities: {
      first: AbilityName.Pressure,
      second: AbilityName.SuperLuck,
      hidden: AbilityName.Justified
    }
  },
  {
    name: "wynaut",
    displayName: "Wynaut",
    dexNumber: 360,
    generation: 3,
    type: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 20
    },
    abilities: {
      first: AbilityName.ShadowTag,
      second: AbilityName.NA,
      hidden: AbilityName.Telepathy
    }
  },
  {
    name: "snorunt",
    displayName: "Snorunt",
    dexNumber: 361,
    generation: 3,
    type: TypeName.Ice,
    eggGroups: {
      group1: EggGroupName.Fairy,
      group2: EggGroupName.Mineral,
      cycles: 20
    },
    abilities: {
      first: AbilityName.InnerFocus,
      second: AbilityName.IceBody,
      hidden: AbilityName.Moody
    }
  },
  {
    name: "glalie",
    displayName: "Glalie",
    dexNumber: 362,
    generation: 3,
    type: TypeName.Ice,
    eggGroups: {
      group1: EggGroupName.Fairy,
      group2: EggGroupName.Mineral,
      cycles: 20
    },
    abilities: {
      first: AbilityName.InnerFocus,
      second: AbilityName.IceBody,
      hidden: AbilityName.Moody
    }
  },
  {
    name: "spheal",
    displayName: "Spheal",
    dexNumber: 363,
    generation: 3,
    type: TypeName.Ice,
    type2: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.ThickFat,
      second: AbilityName.IceBody,
      hidden: AbilityName.Oblivious
    }
  },
  {
    name: "sealeo",
    displayName: "Sealeo",
    dexNumber: 364,
    generation: 3,
    type: TypeName.Ice,
    type2: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.ThickFat,
      second: AbilityName.IceBody,
      hidden: AbilityName.Oblivious
    }
  },
  {
    name: "walrein",
    displayName: "Walrein",
    dexNumber: 365,
    generation: 3,
    type: TypeName.Ice,
    type2: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.ThickFat,
      second: AbilityName.IceBody,
      hidden: AbilityName.Oblivious
    }
  },
  {
    name: "clamperl",
    displayName: "Clamperl",
    dexNumber: 366,
    generation: 3,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water1,
      cycles: 20
    },
    abilities: {
      first: AbilityName.ShellArmor,
      second: AbilityName.NA,
      hidden: AbilityName.Rattled
    }
  },
  {
    name: "huntail",
    displayName: "Huntail",
    dexNumber: 367,
    generation: 3,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water1,
      cycles: 20
    },
    abilities: {
      first: AbilityName.SwiftSwim,
      second: AbilityName.NA,
      hidden: AbilityName.WaterVeil
    }
  },
  {
    name: "gorebyss",
    displayName: "Gorebyss",
    dexNumber: 368,
    generation: 3,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water1,
      cycles: 20
    },
    abilities: {
      first: AbilityName.SwiftSwim,
      second: AbilityName.NA,
      hidden: AbilityName.Hydration
    }
  },
  {
    name: "relicanth",
    displayName: "Relicanth",
    dexNumber: 369,
    generation: 3,
    type: TypeName.Water,
    type2: TypeName.Rock,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Water2,
      cycles: 40
    },
    abilities: {
      first: AbilityName.SwiftSwim,
      second: AbilityName.RockHead,
      hidden: AbilityName.Sturdy
    }
  },
  {
    name: "luvdisc",
    displayName: "Luvdisc",
    dexNumber: 370,
    generation: 3,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water2,
      cycles: 20
    },
    abilities: {
      first: AbilityName.SwiftSwim,
      second: AbilityName.NA,
      hidden: AbilityName.Hydration
    }
  },
  {
    name: "bagon",
    displayName: "Bagon",
    dexNumber: 371,
    generation: 3,
    type: TypeName.Dragon,
    eggGroups: {
      group1: EggGroupName.Dragon,
      cycles: 40
    },
    abilities: {
      first: AbilityName.RockHead,
      second: AbilityName.NA,
      hidden: AbilityName.SheerForce
    }
  },
  {
    name: "shelgon",
    displayName: "Shelgon",
    dexNumber: 372,
    generation: 3,
    type: TypeName.Dragon,
    eggGroups: {
      group1: EggGroupName.Dragon,
      cycles: 40
    },
    abilities: {
      first: AbilityName.RockHead,
      second: AbilityName.NA,
      hidden: AbilityName.Overcoat
    }
  },
  {
    name: "salamence",
    displayName: "Salamence",
    dexNumber: 373,
    generation: 3,
    type: TypeName.Dragon,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Dragon,
      cycles: 40
    },
    abilities: {
      first: AbilityName.Intimidate,
      second: AbilityName.NA,
      hidden: AbilityName.Moxie
    }
  },
  {
    name: "beldum",
    displayName: "Beldum",
    dexNumber: 374,
    generation: 3,
    type: TypeName.Steel,
    type2: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 40
    },
    abilities: {
      first: AbilityName.ClearBody,
      second: AbilityName.NA,
      hidden: AbilityName.LightMetal
    }
  },
  {
    name: "metang",
    displayName: "Metang",
    dexNumber: 375,
    generation: 3,
    type: TypeName.Steel,
    type2: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 40
    },
    abilities: {
      first: AbilityName.ClearBody,
      second: AbilityName.NA,
      hidden: AbilityName.LightMetal
    }
  },
  {
    name: "metagross",
    displayName: "Metagross",
    dexNumber: 376,
    generation: 3,
    type: TypeName.Steel,
    type2: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 40
    },
    abilities: {
      first: AbilityName.ClearBody,
      second: AbilityName.NA,
      hidden: AbilityName.LightMetal
    }
  },
  {
    name: "regirock",
    displayName: "Regirock",
    dexNumber: 377,
    generation: 3,
    type: TypeName.Rock,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 80
    },
    abilities: {
      first: AbilityName.ClearBody,
      second: AbilityName.NA,
      hidden: AbilityName.Sturdy
    }
  },
  {
    name: "regice",
    displayName: "Regice",
    dexNumber: 378,
    generation: 3,
    type: TypeName.Ice,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 80
    },
    abilities: {
      first: AbilityName.ClearBody,
      second: AbilityName.NA,
      hidden: AbilityName.IceBody
    }
  },
  {
    name: "registeel",
    displayName: "Registeel",
    dexNumber: 379,
    generation: 3,
    type: TypeName.Steel,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 80
    },
    abilities: {
      first: AbilityName.ClearBody,
      second: AbilityName.NA,
      hidden: AbilityName.LightMetal
    }
  },
  {
    name: "latias",
    displayName: "Latias",
    dexNumber: 380,
    generation: 3,
    type: TypeName.Dragon,
    type2: TypeName.Flying,
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
    name: "latios",
    displayName: "Latios",
    dexNumber: 381,
    generation: 3,
    type: TypeName.Dragon,
    type2: TypeName.Flying,
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
    name: "kyogre",
    displayName: "Kyogre",
    dexNumber: 382,
    generation: 3,
    type: TypeName.Water,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.Drizzle,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "groudon",
    displayName: "Groudon",
    dexNumber: 383,
    generation: 3,
    type: TypeName.Ground,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.Drought,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "rayquaza",
    displayName: "Rayquaza",
    dexNumber: 384,
    generation: 3,
    type: TypeName.Dragon,
    type2: TypeName.Flying,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.AirLock,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "jirachi",
    displayName: "Jirachi",
    dexNumber: 385,
    generation: 3,
    type: TypeName.Steel,
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
    name: "deoxys",
    displayName: "Deoxys",
    dexNumber: 386,
    generation: 3,
    type: TypeName.Psychic,
    category: Category.Mythical,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.Pressure,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  }
];
