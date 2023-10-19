import { Pokemon } from "../../classes";
import { AbilityName, Category, EggGroupName, TypeName } from "../../enums";

export const gen1Pokemon: Pokemon[] = [
  {
    name: "bulbasaur",
    displayName: "Bulbasaur",
    dexNumber: 1,
    generation: 1,
    type: TypeName.Grass,
    type2: TypeName.Poison,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Overgrow,
      second: AbilityName.NA,
      hidden: AbilityName.Chlorophyll
    }
  },
  {
    name: "ivysaur",
    displayName: "Ivysaur",
    dexNumber: 2,
    generation: 1,
    type: TypeName.Grass,
    type2: TypeName.Poison,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Overgrow,
      second: AbilityName.NA,
      hidden: AbilityName.Chlorophyll
    }
  },
  {
    name: "venusaur",
    displayName: "Venusaur",
    dexNumber: 3,
    generation: 1,
    type: TypeName.Grass,
    type2: TypeName.Poison,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Overgrow,
      second: AbilityName.NA,
      hidden: AbilityName.Chlorophyll
    }
  },
  {
    name: "charmander",
    displayName: "Charmander",
    dexNumber: 4,
    generation: 1,
    type: TypeName.Fire,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Dragon,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Blaze,
      second: AbilityName.NA,
      hidden: AbilityName.SolarPower
    }
  },
  {
    name: "charmeleon",
    displayName: "Charmeleon",
    dexNumber: 5,
    generation: 1,
    type: TypeName.Fire,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Dragon,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Blaze,
      second: AbilityName.NA,
      hidden: AbilityName.SolarPower
    }
  },
  {
    name: "charizard",
    displayName: "Charizard",
    dexNumber: 6,
    generation: 1,
    type: TypeName.Fire,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Dragon,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Blaze,
      second: AbilityName.NA,
      hidden: AbilityName.SolarPower
    }
  },
  {
    name: "squirtle",
    displayName: "Squirtle",
    dexNumber: 7,
    generation: 1,
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
      hidden: AbilityName.RainDish
    }
  },
  {
    name: "wartortle",
    displayName: "Wartortle",
    dexNumber: 8,
    generation: 1,
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
      hidden: AbilityName.RainDish
    }
  },
  {
    name: "blastoise",
    displayName: "Blastoise",
    dexNumber: 9,
    generation: 1,
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
      hidden: AbilityName.RainDish
    }
  },
  {
    name: "caterpie",
    displayName: "Caterpie",
    dexNumber: 10,
    generation: 1,
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
    name: "metapod",
    displayName: "Metapod",
    dexNumber: 11,
    generation: 1,
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
    name: "butterfree",
    displayName: "Butterfree",
    dexNumber: 12,
    generation: 1,
    type: TypeName.Bug,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 15
    },
    abilities: {
      first: AbilityName.CompoundEyes,
      second: AbilityName.NA,
      hidden: AbilityName.TintedLens
    }
  },
  {
    name: "weedle",
    displayName: "Weedle",
    dexNumber: 13,
    generation: 1,
    type: TypeName.Bug,
    type2: TypeName.Poison,
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
    name: "kakuna",
    displayName: "Kakuna",
    dexNumber: 14,
    generation: 1,
    type: TypeName.Bug,
    type2: TypeName.Poison,
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
    name: "beedrill",
    displayName: "Beedrill",
    dexNumber: 15,
    generation: 1,
    type: TypeName.Bug,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Swarm,
      second: AbilityName.NA,
      hidden: AbilityName.Sniper
    }
  },
  {
    name: "pidgey",
    displayName: "Pidgey",
    dexNumber: 16,
    generation: 1,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Flying,
      cycles: 15
    },
    abilities: {
      first: AbilityName.KeenEye,
      second: AbilityName.TangledFeet,
      hidden: AbilityName.BigPecks
    }
  },
  {
    name: "pidgeotto",
    displayName: "Pidgeotto",
    dexNumber: 17,
    generation: 1,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Flying,
      cycles: 15
    },
    abilities: {
      first: AbilityName.KeenEye,
      second: AbilityName.TangledFeet,
      hidden: AbilityName.BigPecks
    }
  },
  {
    name: "pidgeot",
    displayName: "Pidgeot",
    dexNumber: 18,
    generation: 1,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Flying,
      cycles: 15
    },
    abilities: {
      first: AbilityName.KeenEye,
      second: AbilityName.TangledFeet,
      hidden: AbilityName.BigPecks
    }
  },
  {
    name: "rattata",
    displayName: "Rattata",
    dexNumber: 19,
    generation: 1,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 15
    },
    abilities: {
      first: AbilityName.RunAway,
      second: AbilityName.Guts,
      hidden: AbilityName.Hustle
    }
  },
  {
    name: "raticate",
    displayName: "Raticate",
    dexNumber: 20,
    generation: 1,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 15
    },
    abilities: {
      first: AbilityName.RunAway,
      second: AbilityName.Guts,
      hidden: AbilityName.Hustle
    }
  },
  {
    name: "spearow",
    displayName: "Spearow",
    dexNumber: 21,
    generation: 1,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Flying,
      cycles: 15
    },
    abilities: {
      first: AbilityName.KeenEye,
      second: AbilityName.NA,
      hidden: AbilityName.Sniper
    }
  },
  {
    name: "fearow",
    displayName: "Fearow",
    dexNumber: 22,
    generation: 1,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Flying,
      cycles: 15
    },
    abilities: {
      first: AbilityName.KeenEye,
      second: AbilityName.NA,
      hidden: AbilityName.Sniper
    }
  },
  {
    name: "ekans",
    displayName: "Ekans",
    dexNumber: 23,
    generation: 1,
    type: TypeName.Poison,
    eggGroups: {
      group1: EggGroupName.Field,
      group2: EggGroupName.Dragon,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Intimidate,
      second: AbilityName.ShedSkin,
      hidden: AbilityName.Unnerve
    }
  },
  {
    name: "arbok",
    displayName: "Arbok",
    dexNumber: 24,
    generation: 1,
    type: TypeName.Poison,
    eggGroups: {
      group1: EggGroupName.Field,
      group2: EggGroupName.Dragon,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Intimidate,
      second: AbilityName.ShedSkin,
      hidden: AbilityName.Unnerve
    }
  },
  {
    name: "pikachu",
    displayName: "Pikachu",
    dexNumber: 25,
    generation: 1,
    type: TypeName.Electric,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Field,
      group2: EggGroupName.Fairy,
      cycles: 10
    },
    abilities: {
      first: AbilityName.Static,
      second: AbilityName.NA,
      hidden: AbilityName.LightningRod
    }
  },
  {
    name: "raichu",
    displayName: "Raichu",
    dexNumber: 26,
    generation: 1,
    type: TypeName.Electric,
    eggGroups: {
      group1: EggGroupName.Field,
      group2: EggGroupName.Fairy,
      cycles: 10
    },
    abilities: {
      first: AbilityName.Static,
      second: AbilityName.NA,
      hidden: AbilityName.LightningRod
    }
  },
  {
    name: "sandshrew",
    displayName: "Sandshrew",
    dexNumber: 27,
    generation: 1,
    type: TypeName.Ground,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.SandVeil,
      second: AbilityName.NA,
      hidden: AbilityName.SandRush
    }
  },
  {
    name: "sandslash",
    displayName: "Sandslash",
    dexNumber: 28,
    generation: 1,
    type: TypeName.Ground,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.SandVeil,
      second: AbilityName.NA,
      hidden: AbilityName.SandRush
    }
  },
  {
    name: "nidoran",
    displayName: "Nidoran♀",
    dexNumber: 29,
    generation: 1,
    type: TypeName.Poison,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.PoisonPoint,
      second: AbilityName.Rivalry,
      hidden: AbilityName.Hustle
    }
  },
  {
    name: "nidorina",
    displayName: "Nidorina",
    dexNumber: 30,
    generation: 1,
    type: TypeName.Poison,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 20
    },
    abilities: {
      first: AbilityName.PoisonPoint,
      second: AbilityName.Rivalry,
      hidden: AbilityName.Hustle
    }
  },
  {
    name: "nidoqueen",
    displayName: "Nidoqueen",
    dexNumber: 31,
    generation: 1,
    type: TypeName.Poison,
    type2: TypeName.Ground,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 20
    },
    abilities: {
      first: AbilityName.PoisonPoint,
      second: AbilityName.Rivalry,
      hidden: AbilityName.SheerForce
    }
  },
  {
    name: "nidoran",
    displayName: "Nidoran♂",
    dexNumber: 32,
    generation: 1,
    type: TypeName.Poison,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.PoisonPoint,
      second: AbilityName.Rivalry,
      hidden: AbilityName.Hustle
    }
  },
  {
    name: "nidorino",
    displayName: "Nidorino",
    dexNumber: 33,
    generation: 1,
    type: TypeName.Poison,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.PoisonPoint,
      second: AbilityName.Rivalry,
      hidden: AbilityName.Hustle
    }
  },
  {
    name: "nidoking",
    displayName: "Nidoking",
    dexNumber: 34,
    generation: 1,
    type: TypeName.Poison,
    type2: TypeName.Ground,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.PoisonPoint,
      second: AbilityName.Rivalry,
      hidden: AbilityName.SheerForce
    }
  },
  {
    name: "clefairy",
    displayName: "Clefairy",
    dexNumber: 35,
    generation: 1,
    type: TypeName.Fairy,
    eggGroups: {
      group1: EggGroupName.Fairy,
      cycles: 10
    },
    abilities: {
      first: AbilityName.CuteCharm,
      second: AbilityName.MagicGuard,
      hidden: AbilityName.FriendGuard
    }
  },
  {
    name: "clefable",
    displayName: "Clefable",
    dexNumber: 36,
    generation: 1,
    type: TypeName.Fairy,
    eggGroups: {
      group1: EggGroupName.Fairy,
      cycles: 10
    },
    abilities: {
      first: AbilityName.CuteCharm,
      second: AbilityName.MagicGuard,
      hidden: AbilityName.Unaware
    }
  },
  {
    name: "vulpix",
    displayName: "Vulpix",
    dexNumber: 37,
    generation: 1,
    type: TypeName.Fire,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.FlashFire,
      second: AbilityName.NA,
      hidden: AbilityName.Drought
    }
  },
  {
    name: "ninetales",
    displayName: "Ninetales",
    dexNumber: 38,
    generation: 1,
    type: TypeName.Fire,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.FlashFire,
      second: AbilityName.NA,
      hidden: AbilityName.Drought
    }
  },
  {
    name: "jigglypuff",
    displayName: "Jigglypuff",
    dexNumber: 39,
    generation: 1,
    type: TypeName.Normal,
    type2: TypeName.Fairy,
    eggGroups: {
      group1: EggGroupName.Fairy,
      cycles: 10
    },
    abilities: {
      first: AbilityName.CuteCharm,
      second: AbilityName.Competitive,
      hidden: AbilityName.FriendGuard
    }
  },
  {
    name: "wigglytuff",
    displayName: "Wigglytuff",
    dexNumber: 40,
    generation: 1,
    type: TypeName.Normal,
    type2: TypeName.Fairy,
    eggGroups: {
      group1: EggGroupName.Fairy,
      cycles: 10
    },
    abilities: {
      first: AbilityName.CuteCharm,
      second: AbilityName.Competitive,
      hidden: AbilityName.Frisk
    }
  },
  {
    name: "zubat",
    displayName: "Zubat",
    dexNumber: 41,
    generation: 1,
    type: TypeName.Poison,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Flying,
      cycles: 15
    },
    abilities: {
      first: AbilityName.InnerFocus,
      second: AbilityName.NA,
      hidden: AbilityName.Infiltrator
    }
  },
  {
    name: "golbat",
    displayName: "Golbat",
    dexNumber: 42,
    generation: 1,
    type: TypeName.Poison,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Flying,
      cycles: 15
    },
    abilities: {
      first: AbilityName.InnerFocus,
      second: AbilityName.NA,
      hidden: AbilityName.Infiltrator
    }
  },
  {
    name: "oddish",
    displayName: "Oddish",
    dexNumber: 43,
    generation: 1,
    type: TypeName.Grass,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Chlorophyll,
      second: AbilityName.NA,
      hidden: AbilityName.RunAway
    }
  },
  {
    name: "gloom",
    displayName: "Gloom",
    dexNumber: 44,
    generation: 1,
    type: TypeName.Grass,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Chlorophyll,
      second: AbilityName.NA,
      hidden: AbilityName.Stench
    }
  },
  {
    name: "vileplume",
    displayName: "Vileplume",
    dexNumber: 45,
    generation: 1,
    type: TypeName.Grass,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Chlorophyll,
      second: AbilityName.NA,
      hidden: AbilityName.EffectSpore
    }
  },
  {
    name: "paras",
    displayName: "Paras",
    dexNumber: 46,
    generation: 1,
    type: TypeName.Bug,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroupName.Bug,
      group2: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.EffectSpore,
      second: AbilityName.DrySkin,
      hidden: AbilityName.Damp
    }
  },
  {
    name: "parasect",
    displayName: "Parasect",
    dexNumber: 47,
    generation: 1,
    type: TypeName.Bug,
    type2: TypeName.Grass,
    eggGroups: {
      group1: EggGroupName.Bug,
      group2: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.EffectSpore,
      second: AbilityName.DrySkin,
      hidden: AbilityName.Damp
    }
  },
  {
    name: "venonat",
    displayName: "Venonat",
    dexNumber: 48,
    generation: 1,
    type: TypeName.Bug,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 20
    },
    abilities: {
      first: AbilityName.CompoundEyes,
      second: AbilityName.TintedLens,
      hidden: AbilityName.RunAway
    }
  },
  {
    name: "venomoth",
    displayName: "Venomoth",
    dexNumber: 49,
    generation: 1,
    type: TypeName.Bug,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 20
    },
    abilities: {
      first: AbilityName.ShieldDust,
      second: AbilityName.TintedLens,
      hidden: AbilityName.WonderSkin
    }
  },
  {
    name: "diglett",
    displayName: "Diglett",
    dexNumber: 50,
    generation: 1,
    type: TypeName.Ground,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.SandVeil,
      second: AbilityName.ArenaTrap,
      hidden: AbilityName.SandForce
    }
  },
  {
    name: "dugtrio",
    displayName: "Dugtrio",
    dexNumber: 51,
    generation: 1,
    type: TypeName.Ground,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.SandVeil,
      second: AbilityName.ArenaTrap,
      hidden: AbilityName.SandForce
    }
  },
  {
    name: "meowth",
    displayName: "Meowth",
    dexNumber: 52,
    generation: 1,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Pickup,
      second: AbilityName.Technician,
      hidden: AbilityName.Unnerve
    }
  },
  {
    name: "persian",
    displayName: "Persian",
    dexNumber: 53,
    generation: 1,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Limber,
      second: AbilityName.Technician,
      hidden: AbilityName.Unnerve
    }
  },
  {
    name: "psyduck",
    displayName: "Psyduck",
    dexNumber: 54,
    generation: 1,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Damp,
      second: AbilityName.CloudNine,
      hidden: AbilityName.SwiftSwim
    }
  },
  {
    name: "golduck",
    displayName: "Golduck",
    dexNumber: 55,
    generation: 1,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Damp,
      second: AbilityName.CloudNine,
      hidden: AbilityName.SwiftSwim
    }
  },
  {
    name: "mankey",
    displayName: "Mankey",
    dexNumber: 56,
    generation: 1,
    type: TypeName.Fighting,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.VitalSpirit,
      second: AbilityName.AngerPoint,
      hidden: AbilityName.Defiant
    }
  },
  {
    name: "primeape",
    displayName: "Primeape",
    dexNumber: 57,
    generation: 1,
    type: TypeName.Fighting,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.VitalSpirit,
      second: AbilityName.AngerPoint,
      hidden: AbilityName.Defiant
    }
  },
  {
    name: "growlithe",
    displayName: "Growlithe",
    dexNumber: 58,
    generation: 1,
    type: TypeName.Fire,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Intimidate,
      second: AbilityName.FlashFire,
      hidden: AbilityName.Justified
    }
  },
  {
    name: "arcanine",
    displayName: "Arcanine",
    dexNumber: 59,
    generation: 1,
    type: TypeName.Fire,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Intimidate,
      second: AbilityName.FlashFire,
      hidden: AbilityName.Justified
    }
  },
  {
    name: "poliwag",
    displayName: "Poliwag",
    dexNumber: 60,
    generation: 1,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water1,
      cycles: 20
    },
    abilities: {
      first: AbilityName.WaterAbsorb,
      second: AbilityName.Damp,
      hidden: AbilityName.SwiftSwim
    }
  },
  {
    name: "poliwhirl",
    displayName: "Poliwhirl",
    dexNumber: 61,
    generation: 1,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water1,
      cycles: 20
    },
    abilities: {
      first: AbilityName.WaterAbsorb,
      second: AbilityName.Damp,
      hidden: AbilityName.SwiftSwim
    }
  },
  {
    name: "poliwrath",
    displayName: "Poliwrath",
    dexNumber: 62,
    generation: 1,
    type: TypeName.Water,
    type2: TypeName.Fighting,
    eggGroups: {
      group1: EggGroupName.Water1,
      cycles: 20
    },
    abilities: {
      first: AbilityName.WaterAbsorb,
      second: AbilityName.Damp,
      hidden: AbilityName.SwiftSwim
    }
  },
  {
    name: "abra",
    displayName: "Abra",
    dexNumber: 63,
    generation: 1,
    type: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.HumanLike,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Synchronize,
      second: AbilityName.InnerFocus,
      hidden: AbilityName.MagicGuard
    }
  },
  {
    name: "kadabra",
    displayName: "Kadabra",
    dexNumber: 64,
    generation: 1,
    type: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.HumanLike,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Synchronize,
      second: AbilityName.InnerFocus,
      hidden: AbilityName.MagicGuard
    }
  },
  {
    name: "alakazam",
    displayName: "Alakazam",
    dexNumber: 65,
    generation: 1,
    type: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.HumanLike,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Synchronize,
      second: AbilityName.InnerFocus,
      hidden: AbilityName.MagicGuard
    }
  },
  {
    name: "machop",
    displayName: "Machop",
    dexNumber: 66,
    generation: 1,
    type: TypeName.Fighting,
    eggGroups: {
      group1: EggGroupName.HumanLike,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Guts,
      second: AbilityName.NoGuard,
      hidden: AbilityName.Steadfast
    }
  },
  {
    name: "machoke",
    displayName: "Machoke",
    dexNumber: 67,
    generation: 1,
    type: TypeName.Fighting,
    eggGroups: {
      group1: EggGroupName.HumanLike,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Guts,
      second: AbilityName.NoGuard,
      hidden: AbilityName.Steadfast
    }
  },
  {
    name: "machamp",
    displayName: "Machamp",
    dexNumber: 68,
    generation: 1,
    type: TypeName.Fighting,
    eggGroups: {
      group1: EggGroupName.HumanLike,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Guts,
      second: AbilityName.NoGuard,
      hidden: AbilityName.Steadfast
    }
  },
  {
    name: "bellsprout",
    displayName: "Bellsprout",
    dexNumber: 69,
    generation: 1,
    type: TypeName.Grass,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Chlorophyll,
      second: AbilityName.NA,
      hidden: AbilityName.Gluttony
    }
  },
  {
    name: "weepinbell",
    displayName: "Weepinbell",
    dexNumber: 70,
    generation: 1,
    type: TypeName.Grass,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Chlorophyll,
      second: AbilityName.NA,
      hidden: AbilityName.Gluttony
    }
  },
  {
    name: "victreebel",
    displayName: "Victreebel",
    dexNumber: 71,
    generation: 1,
    type: TypeName.Grass,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Chlorophyll,
      second: AbilityName.NA,
      hidden: AbilityName.Gluttony
    }
  },
  {
    name: "tentacool",
    displayName: "Tentacool",
    dexNumber: 72,
    generation: 1,
    type: TypeName.Water,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroupName.Water3,
      cycles: 20
    },
    abilities: {
      first: AbilityName.ClearBody,
      second: AbilityName.LiquidOoze,
      hidden: AbilityName.RainDish
    }
  },
  {
    name: "tentacruel",
    displayName: "Tentacruel",
    dexNumber: 73,
    generation: 1,
    type: TypeName.Water,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroupName.Water3,
      cycles: 20
    },
    abilities: {
      first: AbilityName.ClearBody,
      second: AbilityName.LiquidOoze,
      hidden: AbilityName.RainDish
    }
  },
  {
    name: "geodude",
    displayName: "Geodude",
    dexNumber: 74,
    generation: 1,
    type: TypeName.Rock,
    type2: TypeName.Ground,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 15
    },
    abilities: {
      first: AbilityName.RockHead,
      second: AbilityName.Sturdy,
      hidden: AbilityName.SandVeil
    }
  },
  {
    name: "graveler",
    displayName: "Graveler",
    dexNumber: 75,
    generation: 1,
    type: TypeName.Rock,
    type2: TypeName.Ground,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 15
    },
    abilities: {
      first: AbilityName.RockHead,
      second: AbilityName.Sturdy,
      hidden: AbilityName.SandVeil
    }
  },
  {
    name: "golem",
    displayName: "Golem",
    dexNumber: 76,
    generation: 1,
    type: TypeName.Rock,
    type2: TypeName.Ground,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 15
    },
    abilities: {
      first: AbilityName.RockHead,
      second: AbilityName.Sturdy,
      hidden: AbilityName.SandVeil
    }
  },
  {
    name: "ponyta",
    displayName: "Ponyta",
    dexNumber: 77,
    generation: 1,
    type: TypeName.Fire,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.RunAway,
      second: AbilityName.FlashFire,
      hidden: AbilityName.FlameBody
    }
  },
  {
    name: "rapidash",
    displayName: "Rapidash",
    dexNumber: 78,
    generation: 1,
    type: TypeName.Fire,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.RunAway,
      second: AbilityName.FlashFire,
      hidden: AbilityName.FlameBody
    }
  },
  {
    name: "slowpoke",
    displayName: "Slowpoke",
    dexNumber: 79,
    generation: 1,
    type: TypeName.Water,
    type2: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Water1,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Oblivious,
      second: AbilityName.OwnTempo,
      hidden: AbilityName.Regenerator
    }
  },
  {
    name: "slowbro",
    displayName: "Slowbro",
    dexNumber: 80,
    generation: 1,
    type: TypeName.Water,
    type2: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Water1,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Oblivious,
      second: AbilityName.OwnTempo,
      hidden: AbilityName.Regenerator
    }
  },
  {
    name: "magnemite",
    displayName: "Magnemite",
    dexNumber: 81,
    generation: 1,
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
    name: "magneton",
    displayName: "Magneton",
    dexNumber: 82,
    generation: 1,
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
    name: "farfetchd",
    displayName: "Farfetchd",
    dexNumber: 83,
    generation: 1,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Flying,
      group2: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.KeenEye,
      second: AbilityName.InnerFocus,
      hidden: AbilityName.Defiant
    }
  },
  {
    name: "doduo",
    displayName: "Doduo",
    dexNumber: 84,
    generation: 1,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Flying,
      cycles: 20
    },
    abilities: {
      first: AbilityName.RunAway,
      second: AbilityName.EarlyBird,
      hidden: AbilityName.TangledFeet
    }
  },
  {
    name: "dodrio",
    displayName: "Dodrio",
    dexNumber: 85,
    generation: 1,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Flying,
      cycles: 20
    },
    abilities: {
      first: AbilityName.RunAway,
      second: AbilityName.EarlyBird,
      hidden: AbilityName.TangledFeet
    }
  },
  {
    name: "seel",
    displayName: "Seel",
    dexNumber: 86,
    generation: 1,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.ThickFat,
      second: AbilityName.Hydration,
      hidden: AbilityName.IceBody
    }
  },
  {
    name: "dewgong",
    displayName: "Dewgong",
    dexNumber: 87,
    generation: 1,
    type: TypeName.Water,
    type2: TypeName.Ice,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.ThickFat,
      second: AbilityName.Hydration,
      hidden: AbilityName.IceBody
    }
  },
  {
    name: "grimer",
    displayName: "Grimer",
    dexNumber: 88,
    generation: 1,
    type: TypeName.Poison,
    eggGroups: {
      group1: EggGroupName.Amorphous,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Stench,
      second: AbilityName.StickyHold,
      hidden: AbilityName.PoisonTouch
    }
  },
  {
    name: "muk",
    displayName: "Muk",
    dexNumber: 89,
    generation: 1,
    type: TypeName.Poison,
    eggGroups: {
      group1: EggGroupName.Amorphous,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Stench,
      second: AbilityName.StickyHold,
      hidden: AbilityName.PoisonTouch
    }
  },
  {
    name: "shellder",
    displayName: "Shellder",
    dexNumber: 90,
    generation: 1,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water3,
      cycles: 20
    },
    abilities: {
      first: AbilityName.ShellArmor,
      second: AbilityName.SkillLink,
      hidden: AbilityName.Overcoat
    }
  },
  {
    name: "cloyster",
    displayName: "Cloyster",
    dexNumber: 91,
    generation: 1,
    type: TypeName.Water,
    type2: TypeName.Ice,
    eggGroups: {
      group1: EggGroupName.Water3,
      cycles: 20
    },
    abilities: {
      first: AbilityName.ShellArmor,
      second: AbilityName.SkillLink,
      hidden: AbilityName.Overcoat
    }
  },
  {
    name: "gastly",
    displayName: "Gastly",
    dexNumber: 92,
    generation: 1,
    type: TypeName.Ghost,
    type2: TypeName.Poison,
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
    name: "haunter",
    displayName: "Haunter",
    dexNumber: 93,
    generation: 1,
    type: TypeName.Ghost,
    type2: TypeName.Poison,
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
    name: "gengar",
    displayName: "Gengar",
    dexNumber: 94,
    generation: 1,
    type: TypeName.Ghost,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroupName.Amorphous,
      cycles: 20
    },
    abilities: {
      first: AbilityName.CursedBody,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "onix",
    displayName: "Onix",
    dexNumber: 95,
    generation: 1,
    type: TypeName.Rock,
    type2: TypeName.Ground,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 25
    },
    abilities: {
      first: AbilityName.RockHead,
      second: AbilityName.Sturdy,
      hidden: AbilityName.WeakArmor
    }
  },
  {
    name: "drowzee",
    displayName: "Drowzee",
    dexNumber: 96,
    generation: 1,
    type: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.HumanLike,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Insomnia,
      second: AbilityName.Forewarn,
      hidden: AbilityName.InnerFocus
    }
  },
  {
    name: "hypno",
    displayName: "Hypno",
    dexNumber: 97,
    generation: 1,
    type: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.HumanLike,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Insomnia,
      second: AbilityName.Forewarn,
      hidden: AbilityName.InnerFocus
    }
  },
  {
    name: "krabby",
    displayName: "Krabby",
    dexNumber: 98,
    generation: 1,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water3,
      cycles: 20
    },
    abilities: {
      first: AbilityName.HyperCutter,
      second: AbilityName.ShellArmor,
      hidden: AbilityName.SheerForce
    }
  },
  {
    name: "kingler",
    displayName: "Kingler",
    dexNumber: 99,
    generation: 1,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water3,
      cycles: 20
    },
    abilities: {
      first: AbilityName.HyperCutter,
      second: AbilityName.ShellArmor,
      hidden: AbilityName.SheerForce
    }
  },
  {
    name: "voltorb",
    displayName: "Voltorb",
    dexNumber: 100,
    generation: 1,
    type: TypeName.Electric,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Soundproof,
      second: AbilityName.Static,
      hidden: AbilityName.Aftermath
    }
  },
  {
    name: "electrode",
    displayName: "Electrode",
    dexNumber: 101,
    generation: 1,
    type: TypeName.Electric,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Soundproof,
      second: AbilityName.Static,
      hidden: AbilityName.Aftermath
    }
  },
  {
    name: "exeggcute",
    displayName: "Exeggcute",
    dexNumber: 102,
    generation: 1,
    type: TypeName.Grass,
    type2: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Chlorophyll,
      second: AbilityName.NA,
      hidden: AbilityName.Harvest
    }
  },
  {
    name: "exeggutor",
    displayName: "Exeggutor",
    dexNumber: 103,
    generation: 1,
    type: TypeName.Grass,
    type2: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Chlorophyll,
      second: AbilityName.NA,
      hidden: AbilityName.Harvest
    }
  },
  {
    name: "cubone",
    displayName: "Cubone",
    dexNumber: 104,
    generation: 1,
    type: TypeName.Ground,
    eggGroups: {
      group1: EggGroupName.Monster,
      cycles: 20
    },
    abilities: {
      first: AbilityName.RockHead,
      second: AbilityName.LightningRod,
      hidden: AbilityName.BattleArmor
    }
  },
  {
    name: "marowak",
    displayName: "Marowak",
    dexNumber: 105,
    generation: 1,
    type: TypeName.Ground,
    eggGroups: {
      group1: EggGroupName.Monster,
      cycles: 20
    },
    abilities: {
      first: AbilityName.RockHead,
      second: AbilityName.LightningRod,
      hidden: AbilityName.BattleArmor
    }
  },
  {
    name: "hitmonlee",
    displayName: "Hitmonlee",
    dexNumber: 106,
    generation: 1,
    type: TypeName.Fighting,
    eggGroups: {
      group1: EggGroupName.HumanLike,
      cycles: 25
    },
    abilities: {
      first: AbilityName.Limber,
      second: AbilityName.Reckless,
      hidden: AbilityName.Unburden
    }
  },
  {
    name: "hitmonchan",
    displayName: "Hitmonchan",
    dexNumber: 107,
    generation: 1,
    type: TypeName.Fighting,
    eggGroups: {
      group1: EggGroupName.HumanLike,
      cycles: 25
    },
    abilities: {
      first: AbilityName.KeenEye,
      second: AbilityName.IronFist,
      hidden: AbilityName.InnerFocus
    }
  },
  {
    name: "lickitung",
    displayName: "Lickitung",
    dexNumber: 108,
    generation: 1,
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
    name: "koffing",
    displayName: "Koffing",
    dexNumber: 109,
    generation: 1,
    type: TypeName.Poison,
    eggGroups: {
      group1: EggGroupName.Amorphous,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Levitate,
      second: AbilityName.NeutralizingGas,
      hidden: AbilityName.Stench
    }
  },
  {
    name: "weezing",
    displayName: "Weezing",
    dexNumber: 110,
    generation: 1,
    type: TypeName.Poison,
    eggGroups: {
      group1: EggGroupName.Amorphous,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Levitate,
      second: AbilityName.NeutralizingGas,
      hidden: AbilityName.Stench
    }
  },
  {
    name: "rhyhorn",
    displayName: "Rhyhorn",
    dexNumber: 111,
    generation: 1,
    type: TypeName.Ground,
    type2: TypeName.Rock,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.LightningRod,
      second: AbilityName.RockHead,
      hidden: AbilityName.Reckless
    }
  },
  {
    name: "rhydon",
    displayName: "Rhydon",
    dexNumber: 112,
    generation: 1,
    type: TypeName.Ground,
    type2: TypeName.Rock,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.LightningRod,
      second: AbilityName.RockHead,
      hidden: AbilityName.Reckless
    }
  },
  {
    name: "chansey",
    displayName: "Chansey",
    dexNumber: 113,
    generation: 1,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Fairy,
      cycles: 40
    },
    abilities: {
      first: AbilityName.NaturalCure,
      second: AbilityName.SereneGrace,
      hidden: AbilityName.Healer
    }
  },
  {
    name: "tangela",
    displayName: "Tangela",
    dexNumber: 114,
    generation: 1,
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
    name: "kangaskhan",
    displayName: "Kangaskhan",
    dexNumber: 115,
    generation: 1,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Monster,
      cycles: 20
    },
    abilities: {
      first: AbilityName.EarlyBird,
      second: AbilityName.Scrappy,
      hidden: AbilityName.InnerFocus
    }
  },
  {
    name: "horsea",
    displayName: "Horsea",
    dexNumber: 116,
    generation: 1,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Dragon,
      cycles: 20
    },
    abilities: {
      first: AbilityName.SwiftSwim,
      second: AbilityName.Sniper,
      hidden: AbilityName.Damp
    }
  },
  {
    name: "seadra",
    displayName: "Seadra",
    dexNumber: 117,
    generation: 1,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Dragon,
      cycles: 20
    },
    abilities: {
      first: AbilityName.PoisonPoint,
      second: AbilityName.Sniper,
      hidden: AbilityName.Damp
    }
  },
  {
    name: "goldeen",
    displayName: "Goldeen",
    dexNumber: 118,
    generation: 1,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water2,
      cycles: 20
    },
    abilities: {
      first: AbilityName.SwiftSwim,
      second: AbilityName.WaterVeil,
      hidden: AbilityName.LightningRod
    }
  },
  {
    name: "seaking",
    displayName: "Seaking",
    dexNumber: 119,
    generation: 1,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water2,
      cycles: 20
    },
    abilities: {
      first: AbilityName.SwiftSwim,
      second: AbilityName.WaterVeil,
      hidden: AbilityName.LightningRod
    }
  },
  {
    name: "staryu",
    displayName: "Staryu",
    dexNumber: 120,
    generation: 1,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water3,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Illuminate,
      second: AbilityName.NaturalCure,
      hidden: AbilityName.Analytic
    }
  },
  {
    name: "starmie",
    displayName: "Starmie",
    dexNumber: 121,
    generation: 1,
    type: TypeName.Water,
    type2: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.Water3,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Illuminate,
      second: AbilityName.NaturalCure,
      hidden: AbilityName.Analytic
    }
  },
  {
    name: "mrmime",
    displayName: "Mr. Mime",
    dexNumber: 122,
    generation: 1,
    type: TypeName.Psychic,
    type2: TypeName.Fairy,
    eggGroups: {
      group1: EggGroupName.HumanLike,
      cycles: 25
    },
    abilities: {
      first: AbilityName.Soundproof,
      second: AbilityName.Filter,
      hidden: AbilityName.Technician
    }
  },
  {
    name: "scyther",
    displayName: "Scyther",
    dexNumber: 123,
    generation: 1,
    type: TypeName.Bug,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 25
    },
    abilities: {
      first: AbilityName.Swarm,
      second: AbilityName.Technician,
      hidden: AbilityName.Steadfast
    }
  },
  {
    name: "jynx",
    displayName: "Jynx",
    dexNumber: 124,
    generation: 1,
    type: TypeName.Ice,
    type2: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.HumanLike,
      cycles: 25
    },
    abilities: {
      first: AbilityName.Oblivious,
      second: AbilityName.Forewarn,
      hidden: AbilityName.DrySkin
    }
  },
  {
    name: "electabuzz",
    displayName: "Electabuzz",
    dexNumber: 125,
    generation: 1,
    type: TypeName.Electric,
    eggGroups: {
      group1: EggGroupName.HumanLike,
      cycles: 25
    },
    abilities: {
      first: AbilityName.Static,
      second: AbilityName.NA,
      hidden: AbilityName.VitalSpirit
    }
  },
  {
    name: "magmar",
    displayName: "Magmar",
    dexNumber: 126,
    generation: 1,
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
    name: "pinsir",
    displayName: "Pinsir",
    dexNumber: 127,
    generation: 1,
    type: TypeName.Bug,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 25
    },
    abilities: {
      first: AbilityName.HyperCutter,
      second: AbilityName.MoldBreaker,
      hidden: AbilityName.Moxie
    }
  },
  {
    name: "tauros",
    displayName: "Tauros",
    dexNumber: 128,
    generation: 1,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Intimidate,
      second: AbilityName.AngerPoint,
      hidden: AbilityName.SheerForce
    }
  },
  {
    dexNumber: 129,
    generation: 1,
    name: "magikarp",
    displayName: "Magikarp",
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water2,
      group2: EggGroupName.Dragon,
      cycles: 5
    },
    abilities: {
      first: AbilityName.SwiftSwim,
      second: AbilityName.NA,
      hidden: AbilityName.Rattled
    }
  },
  {
    name: "gyarados",
    displayName: "Gyarados",
    dexNumber: 130,
    generation: 1,
    type: TypeName.Water,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Water2,
      group2: EggGroupName.Dragon,
      cycles: 5
    },
    abilities: {
      first: AbilityName.Intimidate,
      second: AbilityName.NA,
      hidden: AbilityName.Moxie
    }
  },
  {
    name: "lapras",
    displayName: "Lapras",
    dexNumber: 131,
    generation: 1,
    type: TypeName.Water,
    type2: TypeName.Ice,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Water1,
      cycles: 40
    },
    abilities: {
      first: AbilityName.WaterAbsorb,
      second: AbilityName.ShellArmor,
      hidden: AbilityName.Hydration
    }
  },
  {
    name: "ditto",
    displayName: "Ditto",
    dexNumber: 132,
    generation: 1,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Ditto,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Limber,
      second: AbilityName.NA,
      hidden: AbilityName.Imposter
    }
  },
  {
    name: "eevee",
    displayName: "Eevee",
    dexNumber: 133,
    generation: 1,
    type: TypeName.Normal,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 35
    },
    abilities: {
      first: AbilityName.RunAway,
      second: AbilityName.Adaptability,
      hidden: AbilityName.Anticipation
    }
  },
  {
    name: "vaporeon",
    displayName: "Vaporeon",
    dexNumber: 134,
    generation: 1,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 35
    },
    abilities: {
      first: AbilityName.WaterAbsorb,
      second: AbilityName.NA,
      hidden: AbilityName.Hydration
    }
  },
  {
    name: "jolteon",
    displayName: "Jolteon",
    dexNumber: 135,
    generation: 1,
    type: TypeName.Electric,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 35
    },
    abilities: {
      first: AbilityName.VoltAbsorb,
      second: AbilityName.NA,
      hidden: AbilityName.QuickFeet
    }
  },
  {
    name: "flareon",
    displayName: "Flareon",
    dexNumber: 136,
    generation: 1,
    type: TypeName.Fire,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 35
    },
    abilities: {
      first: AbilityName.FlashFire,
      second: AbilityName.NA,
      hidden: AbilityName.Guts
    }
  },
  {
    name: "porygon",
    displayName: "Porygon",
    dexNumber: 137,
    generation: 1,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Trace,
      second: AbilityName.Download,
      hidden: AbilityName.Analytic
    }
  },
  {
    name: "omanyte",
    displayName: "Omanyte",
    dexNumber: 138,
    generation: 1,
    type: TypeName.Rock,
    type2: TypeName.Water,
    category: Category.Fossil,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Water3,
      cycles: 30
    },
    abilities: {
      first: AbilityName.SwiftSwim,
      second: AbilityName.ShellArmor,
      hidden: AbilityName.WeakArmor
    }
  },
  {
    name: "omastar",
    displayName: "Omastar",
    dexNumber: 139,
    generation: 1,
    type: TypeName.Rock,
    type2: TypeName.Water,
    category: Category.Fossil,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Water3,
      cycles: 30
    },
    abilities: {
      first: AbilityName.SwiftSwim,
      second: AbilityName.ShellArmor,
      hidden: AbilityName.WeakArmor
    }
  },
  {
    name: "kabuto",
    displayName: "Kabuto",
    dexNumber: 140,
    generation: 1,
    type: TypeName.Rock,
    type2: TypeName.Water,
    category: Category.Fossil,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Water3,
      cycles: 30
    },
    abilities: {
      first: AbilityName.SwiftSwim,
      second: AbilityName.BattleArmor,
      hidden: AbilityName.WeakArmor
    }
  },
  {
    name: "kabutops",
    displayName: "Kabutops",
    dexNumber: 141,
    generation: 1,
    type: TypeName.Rock,
    type2: TypeName.Water,
    category: Category.Fossil,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Water3,
      cycles: 30
    },
    abilities: {
      first: AbilityName.SwiftSwim,
      second: AbilityName.BattleArmor,
      hidden: AbilityName.WeakArmor
    }
  },
  {
    name: "aerodactyl",
    displayName: "Aerodactyl",
    dexNumber: 142,
    generation: 1,
    type: TypeName.Rock,
    type2: TypeName.Flying,
    category: Category.Fossil,
    eggGroups: {
      group1: EggGroupName.Flying,
      cycles: 35
    },
    abilities: {
      first: AbilityName.RockHead,
      second: AbilityName.Pressure,
      hidden: AbilityName.Unnerve
    }
  },
  {
    name: "snorlax",
    displayName: "Snorlax",
    dexNumber: 143,
    generation: 1,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Monster,
      cycles: 40
    },
    abilities: {
      first: AbilityName.Immunity,
      second: AbilityName.ThickFat,
      hidden: AbilityName.Gluttony
    }
  },
  {
    name: "articuno",
    displayName: "Articuno",
    dexNumber: 144,
    generation: 1,
    type: TypeName.Ice,
    type2: TypeName.Flying,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 80
    },
    abilities: {
      first: AbilityName.Pressure,
      second: AbilityName.NA,
      hidden: AbilityName.SnowCloak
    }
  },
  {
    name: "zapdos",
    displayName: "Zapdos",
    dexNumber: 145,
    generation: 1,
    type: TypeName.Electric,
    type2: TypeName.Flying,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 80
    },
    abilities: {
      first: AbilityName.Pressure,
      second: AbilityName.NA,
      hidden: AbilityName.Static
    }
  },
  {
    name: "moltres",
    displayName: "Moltres",
    dexNumber: 146,
    generation: 1,
    type: TypeName.Fire,
    type2: TypeName.Flying,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 80
    },
    abilities: {
      first: AbilityName.Pressure,
      second: AbilityName.NA,
      hidden: AbilityName.FlameBody
    }
  },
  {
    name: "dratini",
    displayName: "Dratini",
    dexNumber: 147,
    generation: 1,
    type: TypeName.Dragon,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Dragon,
      cycles: 40
    },
    abilities: {
      first: AbilityName.ShedSkin,
      second: AbilityName.NA,
      hidden: AbilityName.MarvelScale
    }
  },
  {
    name: "dragonair",
    displayName: "Dragonair",
    dexNumber: 148,
    generation: 1,
    type: TypeName.Dragon,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Dragon,
      cycles: 40
    },
    abilities: {
      first: AbilityName.ShedSkin,
      second: AbilityName.NA,
      hidden: AbilityName.MarvelScale
    }
  },
  {
    name: "dragonite",
    displayName: "Dragonite",
    dexNumber: 149,
    generation: 1,
    type: TypeName.Dragon,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Dragon,
      cycles: 40
    },
    abilities: {
      first: AbilityName.InnerFocus,
      second: AbilityName.NA,
      hidden: AbilityName.Multiscale
    }
  },
  {
    name: "mewtwo",
    displayName: "Mewtwo",
    dexNumber: 150,
    generation: 1,
    type: TypeName.Psychic,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.Pressure,
      second: AbilityName.NA,
      hidden: AbilityName.Unnerve
    }
  },
  {
    name: "mew",
    displayName: "Mew",
    dexNumber: 151,
    generation: 1,
    type: TypeName.Psychic,
    category: Category.Mythical,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.Synchronize,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  }
];
