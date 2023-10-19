import { Pokemon } from "../../classes";
import { AbilityName, Category, EggGroupName, TypeName } from "../../enums";
export const gen9Pokemon: Pokemon[] = [
  {
    name: "sprigatito",
    displayName: "Sprigatito",
    dexNumber: 906,
    generation: 9,
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
      hidden: AbilityName.Protean
    }
  },
  {
    name: "floragato",
    displayName: "Floragato",
    dexNumber: 907,
    generation: 9,
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
      hidden: AbilityName.Protean
    }
  },
  {
    name: "meowscarada",
    displayName: "Meowscarada",
    dexNumber: 908,
    generation: 9,
    type: TypeName.Grass,
    type2: TypeName.Dark,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Field,
      group2: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Overgrow,
      second: AbilityName.NA,
      hidden: AbilityName.Protean
    }
  },
  {
    name: "fuecoco",
    displayName: "Fuecoco",
    dexNumber: 909,
    generation: 9,
    type: TypeName.Fire,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Blaze,
      second: AbilityName.NA,
      hidden: AbilityName.Unaware
    }
  },
  {
    name: "crocalor",
    displayName: "Crocalor",
    dexNumber: 910,
    generation: 9,
    type: TypeName.Fire,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Blaze,
      second: AbilityName.NA,
      hidden: AbilityName.Unaware
    }
  },
  {
    name: "skeledirge",
    displayName: "Skeledirge",
    dexNumber: 911,
    generation: 9,
    type: TypeName.Fire,
    type2: TypeName.Ghost,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Blaze,
      second: AbilityName.NA,
      hidden: AbilityName.Unaware
    }
  },
  {
    name: "quaxly",
    displayName: "Quaxly",
    dexNumber: 912,
    generation: 9,
    type: TypeName.Water,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Flying,
      group2: EggGroupName.Water1,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Torrent,
      second: AbilityName.NA,
      hidden: AbilityName.Moxie
    }
  },
  {
    name: "quaxwell",
    displayName: "Quaxwell",
    dexNumber: 913,
    generation: 9,
    type: TypeName.Water,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Flying,
      group2: EggGroupName.Water1,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Torrent,
      second: AbilityName.NA,
      hidden: AbilityName.Moxie
    }
  },
  {
    name: "quaquaval",
    displayName: "Quaquaval",
    dexNumber: 914,
    generation: 9,
    type: TypeName.Water,
    type2: TypeName.Fighting,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Flying,
      group2: EggGroupName.Water1,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Torrent,
      second: AbilityName.NA,
      hidden: AbilityName.Moxie
    }
  },
  {
    name: "lechonk",
    displayName: "Lechonk",
    dexNumber: 915,
    generation: 9,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 15
    },
    abilities: {
      first: AbilityName.AromaVeil,
      second: AbilityName.Gluttony,
      hidden: AbilityName.ThickFat
    }
  },
  {
    name: "oinkologne",
    displayName: "Oinkologne",
    dexNumber: 916,
    generation: 9,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 15
    },
    abilities: {
      first: [AbilityName.AromaVeil, AbilityName.LingeringAroma],
      second: AbilityName.Gluttony,
      hidden: AbilityName.ThickFat
    }
  },
  {
    name: "tarountula",
    displayName: "Tarountula",
    dexNumber: 917,
    generation: 9,
    type: TypeName.Bug,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Insomnia,
      second: AbilityName.NA,
      hidden: AbilityName.Stakeout
    }
  },
  {
    name: "spidops",
    displayName: "Spidops",
    dexNumber: 918,
    generation: 9,
    type: TypeName.Bug,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Insomnia,
      second: AbilityName.NA,
      hidden: AbilityName.Stakeout
    }
  },
  {
    name: "nymble",
    displayName: "Nymble",
    dexNumber: 919,
    generation: 9,
    type: TypeName.Bug,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Swarm,
      second: AbilityName.NA,
      hidden: AbilityName.TintedLens
    }
  },
  {
    name: "lokix",
    displayName: "Lokix",
    dexNumber: 920,
    generation: 9,
    type: TypeName.Bug,
    type2: TypeName.Dark,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Swarm,
      second: AbilityName.NA,
      hidden: AbilityName.TintedLens
    }
  },
  {
    name: "pawmi",
    displayName: "Pawmi",
    dexNumber: 921,
    generation: 9,
    type: TypeName.Electric,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Static,
      second: AbilityName.NaturalCure,
      hidden: AbilityName.IronFist
    }
  },
  {
    name: "pawmo",
    displayName: "Pawmo",
    dexNumber: 922,
    generation: 9,
    type: TypeName.Electric,
    type2: TypeName.Fighting,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 15
    },
    abilities: {
      first: AbilityName.VoltAbsorb,
      second: AbilityName.NaturalCure,
      hidden: AbilityName.IronFist
    }
  },
  {
    name: "pawmot",
    displayName: "Pawmot",
    dexNumber: 923,
    generation: 9,
    type: TypeName.Electric,
    type2: TypeName.Fighting,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 15
    },
    abilities: {
      first: AbilityName.VoltAbsorb,
      second: AbilityName.NaturalCure,
      hidden: AbilityName.IronFist
    }
  },
  {
    name: "tandemaus",
    displayName: "Tandemaus",
    dexNumber: 924,
    generation: 9,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      group2: EggGroupName.Fairy,
      cycles: 10
    },
    abilities: {
      first: AbilityName.RunAway,
      second: AbilityName.Pickup,
      hidden: AbilityName.OwnTempo
    }
  },
  {
    name: "maushold",
    displayName: "Maushold",
    dexNumber: 925,
    generation: 9,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      group2: EggGroupName.Fairy,
      cycles: 10
    },
    abilities: {
      first: AbilityName.FriendGuard,
      second: AbilityName.CheekPouch,
      hidden: AbilityName.Technician
    }
  },
  {
    name: "fidough",
    displayName: "Fidough",
    dexNumber: 926,
    generation: 9,
    type: TypeName.Fairy,
    eggGroups: {
      group1: EggGroupName.Field,
      group2: EggGroupName.Mineral,
      cycles: 20
    },
    abilities: {
      first: AbilityName.OwnTempo,
      second: AbilityName.NA,
      hidden: AbilityName.Klutz
    }
  },
  {
    name: "dachsbun",
    displayName: "Dachsbun",
    dexNumber: 927,
    generation: 9,
    type: TypeName.Fairy,
    eggGroups: {
      group1: EggGroupName.Field,
      group2: EggGroupName.Mineral,
      cycles: 20
    },
    abilities: {
      first: AbilityName.WellBakedBody,
      second: AbilityName.NA,
      hidden: AbilityName.AromaVeil
    }
  },
  {
    name: "smoliv",
    displayName: "Smoliv",
    dexNumber: 928,
    generation: 9,
    type: TypeName.Grass,
    type2: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.EarlyBird,
      second: AbilityName.NA,
      hidden: AbilityName.Harvest
    }
  },
  {
    name: "dolliv",
    displayName: "Dolliv",
    dexNumber: 929,
    generation: 9,
    type: TypeName.Grass,
    type2: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.EarlyBird,
      second: AbilityName.NA,
      hidden: AbilityName.Harvest
    }
  },
  {
    name: "arboliva",
    displayName: "Arboliva",
    dexNumber: 930,
    generation: 9,
    type: TypeName.Grass,
    type2: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.SeedSower,
      second: AbilityName.NA,
      hidden: AbilityName.Harvest
    }
  },
  {
    name: "squawkabilly",
    displayName: "Squawkabilly",
    dexNumber: 931,
    generation: 9,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Flying,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Intimidate,
      second: AbilityName.Hustle,
      hidden: [AbilityName.Guts, AbilityName.SheerForce]
    }
  },
  {
    name: "nacli",
    displayName: "Nacli",
    dexNumber: 932,
    generation: 9,
    type: TypeName.Rock,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 20
    },
    abilities: {
      first: AbilityName.PurifyingSalt,
      second: AbilityName.Sturdy,
      hidden: AbilityName.ClearBody
    }
  },
  {
    name: "naclstack",
    displayName: "Naclstack",
    dexNumber: 933,
    generation: 9,
    type: TypeName.Rock,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 20
    },
    abilities: {
      first: AbilityName.PurifyingSalt,
      second: AbilityName.Sturdy,
      hidden: AbilityName.ClearBody
    }
  },
  {
    name: "garganacl",
    displayName: "Garganacl",
    dexNumber: 934,
    generation: 9,
    type: TypeName.Rock,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 20
    },
    abilities: {
      first: AbilityName.PurifyingSalt,
      second: AbilityName.Sturdy,
      hidden: AbilityName.ClearBody
    }
  },
  {
    name: "charcadet",
    displayName: "Charcadet",
    dexNumber: 935,
    generation: 9,
    type: TypeName.Fire,
    eggGroups: {
      group1: EggGroupName.HumanLike,
      cycles: 35
    },
    abilities: {
      first: AbilityName.FlashFire,
      second: AbilityName.NA,
      hidden: AbilityName.FlameBody
    }
  },
  {
    name: "armarouge",
    displayName: "Armarouge",
    dexNumber: 936,
    generation: 9,
    type: TypeName.Fire,
    type2: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.HumanLike,
      cycles: 35
    },
    abilities: {
      first: AbilityName.FlashFire,
      second: AbilityName.NA,
      hidden: AbilityName.WeakArmor
    }
  },
  {
    name: "ceruledge",
    displayName: "Ceruledge",
    dexNumber: 937,
    generation: 9,
    type: TypeName.Fire,
    type2: TypeName.Ghost,
    eggGroups: {
      group1: EggGroupName.HumanLike,
      cycles: 35
    },
    abilities: {
      first: AbilityName.FlashFire,
      second: AbilityName.NA,
      hidden: AbilityName.WeakArmor
    }
  },
  {
    name: "tadbulb",
    displayName: "Tadbulb",
    dexNumber: 938,
    generation: 9,
    type: TypeName.Electric,
    eggGroups: {
      group1: EggGroupName.Water1,
      cycles: 20
    },
    abilities: {
      first: AbilityName.OwnTempo,
      second: AbilityName.Static,
      hidden: AbilityName.Damp
    }
  },
  {
    name: "bellibolt",
    displayName: "Bellibolt",
    dexNumber: 939,
    generation: 9,
    type: TypeName.Electric,
    eggGroups: {
      group1: EggGroupName.Water1,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Electromorphosis,
      second: AbilityName.Static,
      hidden: AbilityName.Damp
    }
  },
  {
    name: "wattrel",
    displayName: "Wattrel",
    dexNumber: 940,
    generation: 9,
    type: TypeName.Electric,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Flying,
      cycles: 20
    },
    abilities: {
      first: AbilityName.WindPower,
      second: AbilityName.VoltAbsorb,
      hidden: AbilityName.Competitive
    }
  },
  {
    name: "kilowattrel",
    displayName: "Kilowattrel",
    dexNumber: 941,
    generation: 9,
    type: TypeName.Electric,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Flying,
      cycles: 20
    },
    abilities: {
      first: AbilityName.WindPower,
      second: AbilityName.VoltAbsorb,
      hidden: AbilityName.Competitive
    }
  },
  {
    name: "maschiff",
    displayName: "Maschiff",
    dexNumber: 942,
    generation: 9,
    type: TypeName.Dark,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Intimidate,
      second: AbilityName.RunAway,
      hidden: AbilityName.Stakeout
    }
  },
  {
    name: "mabosstiff",
    displayName: "Mabosstiff",
    dexNumber: 943,
    generation: 9,
    type: TypeName.Dark,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Intimidate,
      second: AbilityName.GuardDog,
      hidden: AbilityName.Stakeout
    }
  },
  {
    name: "shroodle",
    displayName: "Shroodle",
    dexNumber: 944,
    generation: 9,
    type: TypeName.Poison,
    type2: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Unburden,
      second: AbilityName.Pickpocket,
      hidden: AbilityName.Prankster
    }
  },
  {
    name: "grafaiai",
    displayName: "Grafaiai",
    dexNumber: 945,
    generation: 9,
    type: TypeName.Poison,
    type2: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Unburden,
      second: AbilityName.PoisonTouch,
      hidden: AbilityName.Prankster
    }
  },
  {
    name: "bramblin",
    displayName: "Bramblin",
    dexNumber: 946,
    generation: 9,
    type: TypeName.Grass,
    type2: TypeName.Ghost,
    eggGroups: {
      group1: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.WindRider,
      second: AbilityName.NA,
      hidden: AbilityName.Infiltrator
    }
  },
  {
    name: "brambleghast",
    displayName: "Brambleghast",
    dexNumber: 947,
    generation: 9,
    type: TypeName.Grass,
    type2: TypeName.Ghost,
    eggGroups: {
      group1: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.WindRider,
      second: AbilityName.NA,
      hidden: AbilityName.Infiltrator
    }
  },
  {
    name: "toedscool",
    displayName: "Toedscool",
    dexNumber: 948,
    generation: 9,
    type: TypeName.Ground,
    type2: TypeName.Grass,
    eggGroups: {
      group1: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.MyceliumMight,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "toedscruel",
    displayName: "Toedscruel",
    dexNumber: 949,
    generation: 9,
    type: TypeName.Ground,
    type2: TypeName.Grass,
    eggGroups: {
      group1: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.MyceliumMight,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "klawf",
    displayName: "Klawf",
    dexNumber: 950,
    generation: 9,
    type: TypeName.Rock,
    eggGroups: {
      group1: EggGroupName.Water3,
      cycles: 35
    },
    abilities: {
      first: AbilityName.AngerShell,
      second: AbilityName.ShellArmor,
      hidden: AbilityName.Regenerator
    }
  },
  {
    name: "capsakid",
    displayName: "Capsakid",
    dexNumber: 951,
    generation: 9,
    type: TypeName.Grass,
    eggGroups: {
      group1: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Chlorophyll,
      second: AbilityName.Insomnia,
      hidden: AbilityName.Klutz
    }
  },
  {
    name: "scovillain",
    displayName: "Scovillain",
    dexNumber: 952,
    generation: 9,
    type: TypeName.Grass,
    type2: TypeName.Fire,
    eggGroups: {
      group1: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Chlorophyll,
      second: AbilityName.Insomnia,
      hidden: AbilityName.Moody
    }
  },
  {
    name: "rellor",
    displayName: "Rellor",
    dexNumber: 953,
    generation: 9,
    type: TypeName.Bug,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 20
    },
    abilities: {
      first: AbilityName.CompoundEyes,
      second: AbilityName.NA,
      hidden: AbilityName.ShedSkin
    }
  },
  {
    name: "rabsca",
    displayName: "Rabsca",
    dexNumber: 954,
    generation: 9,
    type: TypeName.Bug,
    type2: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Synchronize,
      second: AbilityName.NA,
      hidden: AbilityName.Telepathy
    }
  },
  {
    name: "flittle",
    displayName: "Flittle",
    dexNumber: 955,
    generation: 9,
    type: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.Flying,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Anticipation,
      second: AbilityName.Frisk,
      hidden: AbilityName.SpeedBoost
    }
  },
  {
    name: "espathra",
    displayName: "Espathra",
    dexNumber: 956,
    generation: 9,
    type: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.Flying,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Opportunist,
      second: AbilityName.Frisk,
      hidden: AbilityName.SpeedBoost
    }
  },
  {
    name: "tinkatink",
    displayName: "Tinkatink",
    dexNumber: 957,
    generation: 9,
    type: TypeName.Fairy,
    type2: TypeName.Steel,
    eggGroups: {
      group1: EggGroupName.Fairy,
      cycles: 20
    },
    abilities: {
      first: AbilityName.MoldBreaker,
      second: AbilityName.OwnTempo,
      hidden: AbilityName.Pickpocket
    }
  },
  {
    name: "tinkatuff",
    displayName: "Tinkatuff",
    dexNumber: 958,
    generation: 9,
    type: TypeName.Fairy,
    type2: TypeName.Steel,
    eggGroups: {
      group1: EggGroupName.Fairy,
      cycles: 20
    },
    abilities: {
      first: AbilityName.MoldBreaker,
      second: AbilityName.OwnTempo,
      hidden: AbilityName.Pickpocket
    }
  },
  {
    name: "tinkaton",
    displayName: "Tinkaton",
    dexNumber: 959,
    generation: 9,
    type: TypeName.Fairy,
    type2: TypeName.Steel,
    eggGroups: {
      group1: EggGroupName.Fairy,
      cycles: 20
    },
    abilities: {
      first: AbilityName.MoldBreaker,
      second: AbilityName.OwnTempo,
      hidden: AbilityName.Pickpocket
    }
  },
  {
    name: "wiglett",
    displayName: "Wiglett",
    dexNumber: 960,
    generation: 9,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water3,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Gooey,
      second: AbilityName.Rattled,
      hidden: AbilityName.SandVeil
    }
  },
  {
    name: "wugtrio",
    displayName: "Wugtrio",
    dexNumber: 961,
    generation: 9,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water3,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Gooey,
      second: AbilityName.Rattled,
      hidden: AbilityName.SandVeil
    }
  },
  {
    name: "bombirdier",
    displayName: "Bombirdier",
    dexNumber: 962,
    generation: 9,
    type: TypeName.Flying,
    type2: TypeName.Dark,
    eggGroups: {
      group1: EggGroupName.Flying,
      cycles: 35
    },
    abilities: {
      first: AbilityName.BigPecks,
      second: AbilityName.KeenEye,
      hidden: AbilityName.RockyPayload
    }
  },
  {
    name: "finizen",
    displayName: "Finizen",
    dexNumber: 963,
    generation: 9,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Field,
      group2: EggGroupName.Water2,
      cycles: 40
    },
    abilities: {
      first: AbilityName.WaterVeil,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "palafin",
    displayName: "Palafin",
    dexNumber: 964,
    generation: 9,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Field,
      group2: EggGroupName.Water2,
      cycles: 40
    },
    abilities: {
      first: AbilityName.ZeroToHero,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "varoom",
    displayName: "Varoom",
    dexNumber: 965,
    generation: 9,
    type: TypeName.Steel,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Overcoat,
      second: AbilityName.NA,
      hidden: AbilityName.SlowStart
    }
  },
  {
    name: "revavroom",
    displayName: "Revavroom",
    dexNumber: 966,
    generation: 9,
    type: TypeName.Steel,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Overcoat,
      second: AbilityName.NA,
      hidden: AbilityName.Filter
    }
  },
  {
    name: "cyclizar",
    displayName: "Cyclizar",
    dexNumber: 967,
    generation: 9,
    type: TypeName.Dragon,
    type2: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 30
    },
    abilities: {
      first: AbilityName.ShedSkin,
      second: AbilityName.NA,
      hidden: AbilityName.Regenerator
    }
  },
  {
    name: "orthworm",
    displayName: "Orthworm",
    dexNumber: 968,
    generation: 9,
    type: TypeName.Steel,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 35
    },
    abilities: {
      first: AbilityName.EarthEater,
      second: AbilityName.NA,
      hidden: AbilityName.SandVeil
    }
  },
  {
    name: "glimmet",
    displayName: "Glimmet",
    dexNumber: 969,
    generation: 9,
    type: TypeName.Rock,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 30
    },
    abilities: {
      first: AbilityName.ToxicDebris,
      second: AbilityName.NA,
      hidden: AbilityName.Corrosion
    }
  },
  {
    name: "glimmora",
    displayName: "Glimmora",
    dexNumber: 970,
    generation: 9,
    type: TypeName.Rock,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 30
    },
    abilities: {
      first: AbilityName.ToxicDebris,
      second: AbilityName.NA,
      hidden: AbilityName.Corrosion
    }
  },
  {
    name: "greavard",
    displayName: "Greavard",
    dexNumber: 971,
    generation: 9,
    type: TypeName.Ghost,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Pickup,
      second: AbilityName.NA,
      hidden: AbilityName.Fluffy
    }
  },
  {
    name: "houndstone",
    displayName: "Houndstone",
    dexNumber: 972,
    generation: 9,
    type: TypeName.Ghost,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 20
    },
    abilities: {
      first: AbilityName.SandRush,
      second: AbilityName.NA,
      hidden: AbilityName.Fluffy
    }
  },
  {
    name: "flamigo",
    displayName: "Flamigo",
    dexNumber: 973,
    generation: 9,
    type: TypeName.Flying,
    type2: TypeName.Fighting,
    eggGroups: {
      group1: EggGroupName.Flying,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Scrappy,
      second: AbilityName.TangledFeet,
      hidden: AbilityName.Costar
    }
  },
  {
    name: "cetoddle",
    displayName: "Cetoddle",
    dexNumber: 974,
    generation: 9,
    type: TypeName.Ice,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 25
    },
    abilities: {
      first: AbilityName.ThickFat,
      second: AbilityName.SnowCloak,
      hidden: AbilityName.SheerForce
    }
  },
  {
    name: "cetitan",
    displayName: "Cetitan",
    dexNumber: 975,
    generation: 9,
    type: TypeName.Ice,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 25
    },
    abilities: {
      first: AbilityName.ThickFat,
      second: AbilityName.SlushRush,
      hidden: AbilityName.SheerForce
    }
  },
  {
    name: "veluza",
    displayName: "Veluza",
    dexNumber: 976,
    generation: 9,
    type: TypeName.Water,
    type2: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.Water2,
      cycles: 20
    },
    abilities: {
      first: AbilityName.MoldBreaker,
      second: AbilityName.NA,
      hidden: AbilityName.Sharpness
    }
  },
  {
    name: "dondozo",
    displayName: "Dondozo",
    dexNumber: 977,
    generation: 9,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water2,
      cycles: 40
    },
    abilities: {
      first: AbilityName.Unaware,
      second: AbilityName.Oblivious,
      hidden: AbilityName.WaterVeil
    }
  },
  {
    name: "tatsugiri",
    displayName: "Tatsugiri",
    dexNumber: 978,
    generation: 9,
    type: TypeName.Dragon,
    type2: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water2,
      cycles: 35
    },
    abilities: {
      first: AbilityName.Commander,
      second: AbilityName.NA,
      hidden: AbilityName.StormDrain
    }
  },
  {
    name: "annihilape",
    displayName: "Annihilape",
    dexNumber: 979,
    generation: 9,
    type: TypeName.Fighting,
    type2: TypeName.Ghost,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.VitalSpirit,
      second: AbilityName.InnerFocus,
      hidden: AbilityName.Defiant
    }
  },
  {
    name: "clodsire",
    displayName: "Clodsire",
    dexNumber: 980,
    generation: 9,
    type: TypeName.Poison,
    type2: TypeName.Ground,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.PoisonPoint,
      second: AbilityName.WaterAbsorb,
      hidden: AbilityName.Unaware
    }
  },
  {
    name: "farigiraf",
    displayName: "Farigiraf",
    dexNumber: 981,
    generation: 9,
    type: TypeName.Normal,
    type2: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.CudChew,
      second: AbilityName.ArmorTail,
      hidden: AbilityName.SapSipper
    }
  },
  {
    name: "dudunsparce",
    displayName: "Dudunsparce",
    dexNumber: 982,
    generation: 9,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.SereneGrace,
      second: AbilityName.RunAway,
      hidden: AbilityName.Rattled
    }
  },
  {
    name: "kingambit",
    displayName: "Kingambit",
    dexNumber: 983,
    generation: 9,
    type: TypeName.Dark,
    type2: TypeName.Steel,
    eggGroups: {
      group1: EggGroupName.HumanLike,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Defiant,
      second: AbilityName.SupremeOverlord,
      hidden: AbilityName.Pressure
    }
  },
  {
    name: "greattusk",
    displayName: "Great Tusk",
    dexNumber: 984,
    generation: 9,
    type: TypeName.Ground,
    type2: TypeName.Fighting,
    category: Category.Paradox,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 50
    },
    abilities: {
      first: AbilityName.Protosynthesis,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "screamtail",
    displayName: "Scream Tail",
    dexNumber: 985,
    generation: 9,
    type: TypeName.Fairy,
    type2: TypeName.Psychic,
    category: Category.Paradox,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 50
    },
    abilities: {
      first: AbilityName.Protosynthesis,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "brutebonnet",
    displayName: "Brute Bonnet",
    dexNumber: 986,
    generation: 9,
    type: TypeName.Grass,
    type2: TypeName.Dark,
    category: Category.Paradox,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 50
    },
    abilities: {
      first: AbilityName.Protosynthesis,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "fluttermane",
    displayName: "Flutter Mane",
    dexNumber: 987,
    generation: 9,
    type: TypeName.Ghost,
    type2: TypeName.Fairy,
    category: Category.Paradox,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 50
    },
    abilities: {
      first: AbilityName.Protosynthesis,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "slitherwing",
    displayName: "Slither Wing",
    dexNumber: 988,
    generation: 9,
    type: TypeName.Bug,
    type2: TypeName.Fighting,
    category: Category.Paradox,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 50
    },
    abilities: {
      first: AbilityName.Protosynthesis,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "sandyshocks",
    displayName: "Sandy Shocks",
    dexNumber: 989,
    generation: 9,
    type: TypeName.Electric,
    type2: TypeName.Ground,
    category: Category.Paradox,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 50
    },
    abilities: {
      first: AbilityName.Protosynthesis,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "irontreads",
    displayName: "Iron Treads",
    dexNumber: 990,
    generation: 9,
    type: TypeName.Ground,
    type2: TypeName.Steel,
    category: Category.Paradox,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 50
    },
    abilities: {
      first: AbilityName.QuarkDrive,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "ironbundle",
    displayName: "Iron Bundle",
    dexNumber: 991,
    generation: 9,
    type: TypeName.Ice,
    type2: TypeName.Water,
    category: Category.Paradox,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 50
    },
    abilities: {
      first: AbilityName.QuarkDrive,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "ironhands",
    displayName: "Iron Hands",
    dexNumber: 992,
    generation: 9,
    type: TypeName.Fighting,
    type2: TypeName.Electric,
    category: Category.Paradox,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 50
    },
    abilities: {
      first: AbilityName.QuarkDrive,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "ironjugulis",
    displayName: "Iron Jugulis",
    dexNumber: 993,
    generation: 9,
    type: TypeName.Dark,
    type2: TypeName.Flying,
    category: Category.Paradox,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 50
    },
    abilities: {
      first: AbilityName.QuarkDrive,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "ironmoth",
    displayName: "Iron Moth",
    dexNumber: 994,
    generation: 9,
    type: TypeName.Fire,
    type2: TypeName.Poison,
    category: Category.Paradox,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 50
    },
    abilities: {
      first: AbilityName.QuarkDrive,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "ironthorns",
    displayName: "Iron Thorns",
    dexNumber: 995,
    generation: 9,
    type: TypeName.Rock,
    type2: TypeName.Electric,
    category: Category.Paradox,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 50
    },
    abilities: {
      first: AbilityName.QuarkDrive,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "frigibax",
    displayName: "Frigibax",
    dexNumber: 996,
    generation: 9,
    type: TypeName.Dragon,
    type2: TypeName.Ice,
    eggGroups: {
      group1: EggGroupName.Dragon,
      group2: EggGroupName.Mineral,
      cycles: 40
    },
    abilities: {
      first: AbilityName.ThermalExchange,
      second: AbilityName.NA,
      hidden: AbilityName.IceBody
    }
  },
  {
    name: "arctibax",
    displayName: "Arctibax",
    dexNumber: 997,
    generation: 9,
    type: TypeName.Dragon,
    type2: TypeName.Ice,
    eggGroups: {
      group1: EggGroupName.Dragon,
      group2: EggGroupName.Mineral,
      cycles: 40
    },
    abilities: {
      first: AbilityName.ThermalExchange,
      second: AbilityName.NA,
      hidden: AbilityName.IceBody
    }
  },
  {
    name: "baxcalibur",
    displayName: "Baxcalibur",
    dexNumber: 998,
    generation: 9,
    type: TypeName.Dragon,
    type2: TypeName.Ice,
    eggGroups: {
      group1: EggGroupName.Dragon,
      group2: EggGroupName.Mineral,
      cycles: 40
    },
    abilities: {
      first: AbilityName.ThermalExchange,
      second: AbilityName.NA,
      hidden: AbilityName.IceBody
    }
  },
  {
    name: "gimmighoul",
    displayName: "Gimmighoul",
    dexNumber: 999,
    generation: 9,
    type: TypeName.Ghost,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 50
    },
    abilities: {
      first: [AbilityName.Rattled, AbilityName.RunAway],
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "gholdengo",
    displayName: "Gholdengo",
    dexNumber: 1000,
    generation: 9,
    type: TypeName.Steel,
    type2: TypeName.Ghost,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 50
    },
    abilities: {
      first: AbilityName.GoodAsGold,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "wochien",
    displayName: "Wo-Chien",
    dexNumber: 1001,
    generation: 9,
    type: TypeName.Dark,
    type2: TypeName.Grass,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 50
    },
    abilities: {
      first: AbilityName.TabletsOfRuin,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "chienpao",
    displayName: "Chien-Pao",
    dexNumber: 1002,
    generation: 9,
    type: TypeName.Dark,
    type2: TypeName.Ice,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 50
    },
    abilities: {
      first: AbilityName.SwordOfRuin,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "tinglu",
    displayName: "Ting-Lu",
    dexNumber: 1003,
    generation: 9,
    type: TypeName.Dark,
    type2: TypeName.Ground,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 50
    },
    abilities: {
      first: AbilityName.VesselOfRuin,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "chiyu",
    displayName: "Chi-Yu",
    dexNumber: 1004,
    generation: 9,
    type: TypeName.Dark,
    type2: TypeName.Fire,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 50
    },
    abilities: {
      first: AbilityName.BeadsOfRuin,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "roaringmoon",
    displayName: "Roaring Moon",
    dexNumber: 1005,
    generation: 9,
    type: TypeName.Dragon,
    type2: TypeName.Dark,
    category: Category.Paradox,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 50
    },
    abilities: {
      first: AbilityName.Protosynthesis,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "ironvaliant",
    displayName: "Iron Valiant",
    dexNumber: 1006,
    generation: 9,
    type: TypeName.Fairy,
    type2: TypeName.Fighting,
    category: Category.Paradox,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 50
    },
    abilities: {
      first: AbilityName.QuarkDrive,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "koraidon",
    displayName: "Koraidon",
    dexNumber: 1007,
    generation: 9,
    type: TypeName.Fighting,
    type2: TypeName.Dragon,
    category: Category.ParadoxLegendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 50
    },
    abilities: {
      first: AbilityName.OrichalcumPulse,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "miraidon",
    displayName: "Miraidon",
    dexNumber: 1008,
    generation: 9,
    type: TypeName.Electric,
    type2: TypeName.Dragon,
    category: Category.ParadoxLegendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 50
    },
    abilities: {
      first: AbilityName.HadronEngine,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "walkingwake",
    displayName: "Walking Wake",
    dexNumber: 1009,
    generation: 9,
    type: TypeName.Water,
    type2: TypeName.Dragon,
    category: Category.Paradox,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 50
    },
    abilities: {
      first: AbilityName.Protosynthesis,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "ironleaves",
    displayName: "Iron Leaves",
    dexNumber: 1010,
    generation: 9,
    type: TypeName.Grass,
    type2: TypeName.Psychic,
    category: Category.Paradox,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 50
    },
    abilities: {
      first: AbilityName.QuarkDrive,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  }
];
