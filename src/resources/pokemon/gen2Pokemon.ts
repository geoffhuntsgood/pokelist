import { Pokemon } from "../../classes";
import { AbilityName, Category, EggGroupName, TypeName } from "../../enums";

export const gen2Pokemon: Pokemon[] = [
  {
    name: "chikorita",
    displayName: "Chikorita",
    dexNumber: 152,
    generation: 2,
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
      hidden: AbilityName.LeafGuard
    }
  },
  {
    name: "bayleef",
    displayName: "Bayleef",
    dexNumber: 153,
    generation: 2,
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
      hidden: AbilityName.LeafGuard
    }
  },
  {
    name: "meganium",
    displayName: "Meganium",
    dexNumber: 154,
    generation: 2,
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
      hidden: AbilityName.LeafGuard
    }
  },
  {
    name: "cyndaquil",
    displayName: "Cyndaquil",
    dexNumber: 155,
    generation: 2,
    type: TypeName.Fire,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Blaze,
      second: AbilityName.NA,
      hidden: AbilityName.FlashFire
    }
  },
  {
    name: "quilava",
    displayName: "Quilava",
    dexNumber: 156,
    generation: 2,
    type: TypeName.Fire,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Blaze,
      second: AbilityName.NA,
      hidden: AbilityName.FlashFire
    }
  },
  {
    name: "typhlosion",
    displayName: "Typhlosion",
    dexNumber: 157,
    generation: 2,
    type: TypeName.Fire,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Blaze,
      second: AbilityName.NA,
      hidden: AbilityName.FlashFire
    }
  },
  {
    name: "totodile",
    displayName: "Totodile",
    dexNumber: 158,
    generation: 2,
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
      hidden: AbilityName.SheerForce
    }
  },
  {
    name: "croconaw",
    displayName: "Croconaw",
    dexNumber: 159,
    generation: 2,
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
      hidden: AbilityName.SheerForce
    }
  },
  {
    name: "feraligatr",
    displayName: "Feraligatr",
    dexNumber: 160,
    generation: 2,
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
      hidden: AbilityName.SheerForce
    }
  },
  {
    name: "sentret",
    displayName: "Sentret",
    dexNumber: 161,
    generation: 2,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 15
    },
    abilities: {
      first: AbilityName.RunAway,
      second: AbilityName.KeenEye,
      hidden: AbilityName.Frisk
    }
  },
  {
    name: "furret",
    displayName: "Furret",
    dexNumber: 162,
    generation: 2,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 15
    },
    abilities: {
      first: AbilityName.RunAway,
      second: AbilityName.KeenEye,
      hidden: AbilityName.Frisk
    }
  },
  {
    name: "hoothoot",
    displayName: "Hoothoot",
    dexNumber: 163,
    generation: 2,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Flying,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Insomnia,
      second: AbilityName.KeenEye,
      hidden: AbilityName.TintedLens
    }
  },
  {
    name: "noctowl",
    displayName: "Noctowl",
    dexNumber: 164,
    generation: 2,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Flying,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Insomnia,
      second: AbilityName.KeenEye,
      hidden: AbilityName.TintedLens
    }
  },
  {
    name: "ledyba",
    displayName: "Ledyba",
    dexNumber: 165,
    generation: 2,
    type: TypeName.Bug,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Swarm,
      second: AbilityName.EarlyBird,
      hidden: AbilityName.Rattled
    }
  },
  {
    name: "ledian",
    displayName: "Ledian",
    dexNumber: 166,
    generation: 2,
    type: TypeName.Bug,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Swarm,
      second: AbilityName.EarlyBird,
      hidden: AbilityName.IronFist
    }
  },
  {
    name: "spinarak",
    displayName: "Spinarak",
    dexNumber: 167,
    generation: 2,
    type: TypeName.Bug,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Swarm,
      second: AbilityName.Insomnia,
      hidden: AbilityName.Sniper
    }
  },
  {
    name: "ariados",
    displayName: "Ariados",
    dexNumber: 168,
    generation: 2,
    type: TypeName.Bug,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Swarm,
      second: AbilityName.Insomnia,
      hidden: AbilityName.Sniper
    }
  },
  {
    name: "crobat",
    displayName: "Crobat",
    dexNumber: 169,
    generation: 2,
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
    name: "chinchou",
    displayName: "Chinchou",
    dexNumber: 170,
    generation: 2,
    type: TypeName.Water,
    type2: TypeName.Electric,
    eggGroups: {
      group1: EggGroupName.Water2,
      cycles: 20
    },
    abilities: {
      first: AbilityName.VoltAbsorb,
      second: AbilityName.Illuminate,
      hidden: AbilityName.WaterAbsorb
    }
  },
  {
    name: "lanturn",
    displayName: "Lanturn",
    dexNumber: 171,
    generation: 2,
    type: TypeName.Water,
    type2: TypeName.Electric,
    eggGroups: {
      group1: EggGroupName.Water2,
      cycles: 20
    },
    abilities: {
      first: AbilityName.VoltAbsorb,
      second: AbilityName.Illuminate,
      hidden: AbilityName.WaterAbsorb
    }
  },
  {
    name: "pichu",
    displayName: "Pichu",
    dexNumber: 172,
    generation: 2,
    type: TypeName.Electric,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 10
    },
    abilities: {
      first: AbilityName.Static,
      second: AbilityName.NA,
      hidden: AbilityName.LightningRod
    }
  },
  {
    name: "cleffa",
    displayName: "Cleffa",
    dexNumber: 173,
    generation: 2,
    type: TypeName.Fairy,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 10
    },
    abilities: {
      first: AbilityName.CuteCharm,
      second: AbilityName.MagicGuard,
      hidden: AbilityName.FriendGuard
    }
  },
  {
    name: "igglybuff",
    displayName: "Igglybuff",
    dexNumber: 174,
    generation: 2,
    type: TypeName.Normal,
    type2: TypeName.Fairy,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 10
    },
    abilities: {
      first: AbilityName.CuteCharm,
      second: AbilityName.Competitive,
      hidden: AbilityName.FriendGuard
    }
  },
  {
    name: "togepi",
    displayName: "Togepi",
    dexNumber: 175,
    generation: 2,
    type: TypeName.Fairy,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 10
    },
    abilities: {
      first: AbilityName.Hustle,
      second: AbilityName.SereneGrace,
      hidden: AbilityName.SuperLuck
    }
  },
  {
    name: "togetic",
    displayName: "Togetic",
    dexNumber: 176,
    generation: 2,
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
    name: "natu",
    displayName: "Natu",
    dexNumber: 177,
    generation: 2,
    type: TypeName.Psychic,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Flying,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Synchronize,
      second: AbilityName.EarlyBird,
      hidden: AbilityName.MagicBounce
    }
  },
  {
    name: "xatu",
    displayName: "Xatu",
    dexNumber: 178,
    generation: 2,
    type: TypeName.Psychic,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Flying,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Synchronize,
      second: AbilityName.EarlyBird,
      hidden: AbilityName.MagicBounce
    }
  },
  {
    name: "mareep",
    displayName: "Mareep",
    dexNumber: 179,
    generation: 2,
    type: TypeName.Electric,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Static,
      second: AbilityName.NA,
      hidden: AbilityName.Plus
    }
  },
  {
    name: "flaaffy",
    displayName: "Flaaffy",
    dexNumber: 180,
    generation: 2,
    type: TypeName.Electric,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Static,
      second: AbilityName.NA,
      hidden: AbilityName.Plus
    }
  },
  {
    name: "ampharos",
    displayName: "Ampharos",
    dexNumber: 181,
    generation: 2,
    type: TypeName.Electric,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Static,
      second: AbilityName.NA,
      hidden: AbilityName.Plus
    }
  },
  {
    name: "bellossom",
    displayName: "Bellossom",
    dexNumber: 182,
    generation: 2,
    type: TypeName.Grass,
    eggGroups: {
      group1: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Chlorophyll,
      second: AbilityName.NA,
      hidden: AbilityName.Healer
    }
  },
  {
    name: "marill",
    displayName: "Marill",
    dexNumber: 183,
    generation: 2,
    type: TypeName.Water,
    type2: TypeName.Fairy,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Fairy,
      cycles: 10
    },
    abilities: {
      first: AbilityName.ThickFat,
      second: AbilityName.HugePower,
      hidden: AbilityName.SapSipper
    }
  },
  {
    name: "azumarill",
    displayName: "Azumarill",
    dexNumber: 184,
    generation: 2,
    type: TypeName.Water,
    type2: TypeName.Fairy,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Fairy,
      cycles: 10
    },
    abilities: {
      first: AbilityName.ThickFat,
      second: AbilityName.HugePower,
      hidden: AbilityName.SapSipper
    }
  },
  {
    name: "sudowoodo",
    displayName: "Sudowoodo",
    dexNumber: 185,
    generation: 2,
    type: TypeName.Rock,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Sturdy,
      second: AbilityName.RockHead,
      hidden: AbilityName.Rattled
    }
  },
  {
    name: "politoed",
    displayName: "Politoed",
    dexNumber: 186,
    generation: 2,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water1,
      cycles: 20
    },
    abilities: {
      first: AbilityName.WaterAbsorb,
      second: AbilityName.Damp,
      hidden: AbilityName.Drizzle
    }
  },
  {
    name: "hoppip",
    displayName: "Hoppip",
    dexNumber: 187,
    generation: 2,
    type: TypeName.Grass,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Fairy,
      group2: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Chlorophyll,
      second: AbilityName.LeafGuard,
      hidden: AbilityName.Infiltrator
    }
  },
  {
    name: "skiploom",
    displayName: "Skiploom",
    dexNumber: 188,
    generation: 2,
    type: TypeName.Grass,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Fairy,
      group2: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Chlorophyll,
      second: AbilityName.LeafGuard,
      hidden: AbilityName.Infiltrator
    }
  },
  {
    name: "jumpluff",
    displayName: "Jumpluff",
    dexNumber: 189,
    generation: 2,
    type: TypeName.Grass,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Fairy,
      group2: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Chlorophyll,
      second: AbilityName.LeafGuard,
      hidden: AbilityName.Infiltrator
    }
  },
  {
    name: "aipom",
    displayName: "Aipom",
    dexNumber: 190,
    generation: 2,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.RunAway,
      second: AbilityName.Pickup,
      hidden: AbilityName.SkillLink
    }
  },
  {
    name: "sunkern",
    displayName: "Sunkern",
    dexNumber: 191,
    generation: 2,
    type: TypeName.Grass,
    eggGroups: {
      group1: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Chlorophyll,
      second: AbilityName.SolarPower,
      hidden: AbilityName.EarlyBird
    }
  },
  {
    name: "sunflora",
    displayName: "Sunflora",
    dexNumber: 192,
    generation: 2,
    type: TypeName.Grass,
    eggGroups: {
      group1: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Chlorophyll,
      second: AbilityName.SolarPower,
      hidden: AbilityName.EarlyBird
    }
  },
  {
    name: "yanma",
    displayName: "Yanma",
    dexNumber: 193,
    generation: 2,
    type: TypeName.Bug,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 20
    },
    abilities: {
      first: AbilityName.SpeedBoost,
      second: AbilityName.CompoundEyes,
      hidden: AbilityName.Frisk
    }
  },
  {
    name: "wooper",
    displayName: "Wooper",
    dexNumber: 194,
    generation: 2,
    type: TypeName.Water,
    type2: TypeName.Ground,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Damp,
      second: AbilityName.WaterAbsorb,
      hidden: AbilityName.Unaware
    }
  },
  {
    name: "quagsire",
    displayName: "Quagsire",
    dexNumber: 195,
    generation: 2,
    type: TypeName.Water,
    type2: TypeName.Ground,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Damp,
      second: AbilityName.WaterAbsorb,
      hidden: AbilityName.Unaware
    }
  },
  {
    name: "espeon",
    displayName: "Espeon",
    dexNumber: 196,
    generation: 2,
    type: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 35
    },
    abilities: {
      first: AbilityName.Synchronize,
      second: AbilityName.NA,
      hidden: AbilityName.MagicBounce
    }
  },
  {
    name: "umbreon",
    displayName: "Umbreon",
    dexNumber: 197,
    generation: 2,
    type: TypeName.Dark,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 35
    },
    abilities: {
      first: AbilityName.Synchronize,
      second: AbilityName.NA,
      hidden: AbilityName.InnerFocus
    }
  },
  {
    name: "murkrow",
    displayName: "Murkrow",
    dexNumber: 198,
    generation: 2,
    type: TypeName.Dark,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Flying,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Insomnia,
      second: AbilityName.SuperLuck,
      hidden: AbilityName.Prankster
    }
  },
  {
    name: "slowking",
    displayName: "Slowking",
    dexNumber: 199,
    generation: 2,
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
    name: "misdreavus",
    displayName: "Misdreavus",
    dexNumber: 200,
    generation: 2,
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
    name: "unown",
    displayName: "Unown",
    dexNumber: 201,
    generation: 2,
    type: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 40
    },
    abilities: {
      first: AbilityName.Levitate,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "wobbuffet",
    displayName: "Wobbuffet",
    dexNumber: 202,
    generation: 2,
    type: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.Amorphous,
      cycles: 20
    },
    abilities: {
      first: AbilityName.ShadowTag,
      second: AbilityName.NA,
      hidden: AbilityName.Telepathy
    }
  },
  {
    name: "girafarig",
    displayName: "Girafarig",
    dexNumber: 203,
    generation: 2,
    type: TypeName.Normal,
    type2: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.InnerFocus,
      second: AbilityName.EarlyBird,
      hidden: AbilityName.SapSipper
    }
  },
  {
    name: "pineco",
    displayName: "Pineco",
    dexNumber: 204,
    generation: 2,
    type: TypeName.Bug,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Sturdy,
      second: AbilityName.NA,
      hidden: AbilityName.Overcoat
    }
  },
  {
    name: "forretress",
    displayName: "Forretress",
    dexNumber: 205,
    generation: 2,
    type: TypeName.Bug,
    type2: TypeName.Steel,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Sturdy,
      second: AbilityName.NA,
      hidden: AbilityName.Overcoat
    }
  },
  {
    name: "dunsparce",
    displayName: "Dunsparce",
    dexNumber: 206,
    generation: 2,
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
    name: "gligar",
    displayName: "Gligar",
    dexNumber: 207,
    generation: 2,
    type: TypeName.Ground,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 20
    },
    abilities: {
      first: AbilityName.HyperCutter,
      second: AbilityName.SandVeil,
      hidden: AbilityName.Immunity
    }
  },
  {
    name: "steelix",
    displayName: "Steelix",
    dexNumber: 208,
    generation: 2,
    type: TypeName.Steel,
    type2: TypeName.Ground,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 25
    },
    abilities: {
      first: AbilityName.RockHead,
      second: AbilityName.Sturdy,
      hidden: AbilityName.SheerForce
    }
  },
  {
    name: "snubbull",
    displayName: "Snubbull",
    dexNumber: 209,
    generation: 2,
    type: TypeName.Fairy,
    eggGroups: {
      group1: EggGroupName.Field,
      group2: EggGroupName.Fairy,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Intimidate,
      second: AbilityName.RunAway,
      hidden: AbilityName.Rattled
    }
  },
  {
    name: "granbull",
    displayName: "Granbull",
    dexNumber: 210,
    generation: 2,
    type: TypeName.Fairy,
    eggGroups: {
      group1: EggGroupName.Field,
      group2: EggGroupName.Fairy,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Intimidate,
      second: AbilityName.QuickFeet,
      hidden: AbilityName.Rattled
    }
  },
  {
    name: "qwilfish",
    displayName: "Qwilfish",
    dexNumber: 211,
    generation: 2,
    type: TypeName.Water,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroupName.Water2,
      cycles: 20
    },
    abilities: {
      first: AbilityName.PoisonPoint,
      second: AbilityName.SwiftSwim,
      hidden: AbilityName.Intimidate
    }
  },
  {
    name: "scizor",
    displayName: "Scizor",
    dexNumber: 212,
    generation: 2,
    type: TypeName.Bug,
    type2: TypeName.Steel,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 25
    },
    abilities: {
      first: AbilityName.Swarm,
      second: AbilityName.Technician,
      hidden: AbilityName.LightMetal
    }
  },
  {
    name: "shuckle",
    displayName: "Shuckle",
    dexNumber: 213,
    generation: 2,
    type: TypeName.Bug,
    type2: TypeName.Rock,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Sturdy,
      second: AbilityName.Gluttony,
      hidden: AbilityName.Contrary
    }
  },
  {
    name: "heracross",
    displayName: "Heracross",
    dexNumber: 214,
    generation: 2,
    type: TypeName.Bug,
    type2: TypeName.Fighting,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 25
    },
    abilities: {
      first: AbilityName.Swarm,
      second: AbilityName.Guts,
      hidden: AbilityName.Moxie
    }
  },
  {
    name: "sneasel",
    displayName: "Sneasel",
    dexNumber: 215,
    generation: 2,
    type: TypeName.Dark,
    type2: TypeName.Ice,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.InnerFocus,
      second: AbilityName.KeenEye,
      hidden: AbilityName.Pickpocket
    }
  },
  {
    name: "teddiursa",
    displayName: "Teddiursa",
    dexNumber: 216,
    generation: 2,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Pickup,
      second: AbilityName.QuickFeet,
      hidden: AbilityName.HoneyGather
    }
  },
  {
    name: "ursaring",
    displayName: "Ursaring",
    dexNumber: 217,
    generation: 2,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Guts,
      second: AbilityName.QuickFeet,
      hidden: AbilityName.Unnerve
    }
  },
  {
    name: "slugma",
    displayName: "Slugma",
    dexNumber: 218,
    generation: 2,
    type: TypeName.Fire,
    eggGroups: {
      group1: EggGroupName.Amorphous,
      cycles: 20
    },
    abilities: {
      first: AbilityName.MagmaArmor,
      second: AbilityName.FlameBody,
      hidden: AbilityName.WeakArmor
    }
  },
  {
    name: "magcargo",
    displayName: "Magcargo",
    dexNumber: 219,
    generation: 2,
    type: TypeName.Fire,
    type2: TypeName.Rock,
    eggGroups: {
      group1: EggGroupName.Amorphous,
      cycles: 20
    },
    abilities: {
      first: AbilityName.MagmaArmor,
      second: AbilityName.FlameBody,
      hidden: AbilityName.WeakArmor
    }
  },
  {
    name: "swinub",
    displayName: "Swinub",
    dexNumber: 220,
    generation: 2,
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
    name: "piloswine",
    displayName: "Piloswine",
    dexNumber: 221,
    generation: 2,
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
    name: "corsola",
    displayName: "Corsola",
    dexNumber: 222,
    generation: 2,
    type: TypeName.Water,
    type2: TypeName.Rock,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Water3,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Hustle,
      second: AbilityName.NaturalCure,
      hidden: AbilityName.Regenerator
    }
  },
  {
    name: "remoraid",
    displayName: "Remoraid",
    dexNumber: 223,
    generation: 2,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Water2,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Hustle,
      second: AbilityName.Sniper,
      hidden: AbilityName.Moody
    }
  },
  {
    name: "octillery",
    displayName: "Octillery",
    dexNumber: 224,
    generation: 2,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Water2,
      cycles: 20
    },
    abilities: {
      first: AbilityName.SuctionCups,
      second: AbilityName.Sniper,
      hidden: AbilityName.Moody
    }
  },
  {
    name: "delibird",
    displayName: "Delibird",
    dexNumber: 225,
    generation: 2,
    type: TypeName.Ice,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.VitalSpirit,
      second: AbilityName.Hustle,
      hidden: AbilityName.Insomnia
    }
  },
  {
    name: "mantine",
    displayName: "Mantine",
    dexNumber: 226,
    generation: 2,
    type: TypeName.Water,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Water1,
      cycles: 25
    },
    abilities: {
      first: AbilityName.SwiftSwim,
      second: AbilityName.WaterAbsorb,
      hidden: AbilityName.WaterVeil
    }
  },
  {
    name: "skarmory",
    displayName: "Skarmory",
    dexNumber: 227,
    generation: 2,
    type: TypeName.Steel,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Flying,
      cycles: 25
    },
    abilities: {
      first: AbilityName.KeenEye,
      second: AbilityName.Sturdy,
      hidden: AbilityName.WeakArmor
    }
  },
  {
    name: "houndour",
    displayName: "Houndour",
    dexNumber: 228,
    generation: 2,
    type: TypeName.Dark,
    type2: TypeName.Fire,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.EarlyBird,
      second: AbilityName.FlashFire,
      hidden: AbilityName.Unnerve
    }
  },
  {
    name: "houndoom",
    displayName: "Houndoom",
    dexNumber: 229,
    generation: 2,
    type: TypeName.Dark,
    type2: TypeName.Fire,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.EarlyBird,
      second: AbilityName.FlashFire,
      hidden: AbilityName.Unnerve
    }
  },
  {
    name: "kingdra",
    displayName: "Kingdra",
    dexNumber: 230,
    generation: 2,
    type: TypeName.Water,
    type2: TypeName.Dragon,
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
    name: "phanpy",
    displayName: "Phanpy",
    dexNumber: 231,
    generation: 2,
    type: TypeName.Ground,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Pickup,
      second: AbilityName.NA,
      hidden: AbilityName.SandVeil
    }
  },
  {
    name: "donphan",
    displayName: "Donphan",
    dexNumber: 232,
    generation: 2,
    type: TypeName.Ground,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Sturdy,
      second: AbilityName.NA,
      hidden: AbilityName.SandVeil
    }
  },
  {
    name: "porygon2",
    displayName: "Porygon2",
    dexNumber: 233,
    generation: 2,
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
    name: "stantler",
    displayName: "Stantler",
    dexNumber: 234,
    generation: 2,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Intimidate,
      second: AbilityName.Frisk,
      hidden: AbilityName.SapSipper
    }
  },
  {
    name: "smeargle",
    displayName: "Smeargle",
    dexNumber: 235,
    generation: 2,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.OwnTempo,
      second: AbilityName.Technician,
      hidden: AbilityName.Moody
    }
  },
  {
    name: "tyrogue",
    displayName: "Tyrogue",
    dexNumber: 236,
    generation: 2,
    type: TypeName.Fighting,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 25
    },
    abilities: {
      first: AbilityName.Guts,
      second: AbilityName.Steadfast,
      hidden: AbilityName.VitalSpirit
    }
  },
  {
    name: "hitmontop",
    displayName: "Hitmontop",
    dexNumber: 237,
    generation: 2,
    type: TypeName.Fighting,
    eggGroups: {
      group1: EggGroupName.HumanLike,
      cycles: 25
    },
    abilities: {
      first: AbilityName.Intimidate,
      second: AbilityName.Technician,
      hidden: AbilityName.Steadfast
    }
  },
  {
    name: "smoochum",
    displayName: "Smoochum",
    dexNumber: 238,
    generation: 2,
    type: TypeName.Ice,
    type2: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 25
    },
    abilities: {
      first: AbilityName.Oblivious,
      second: AbilityName.Forewarn,
      hidden: AbilityName.Hydration
    }
  },
  {
    name: "elekid",
    displayName: "Elekid",
    dexNumber: 239,
    generation: 2,
    type: TypeName.Electric,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 25
    },
    abilities: {
      first: AbilityName.Static,
      second: AbilityName.NA,
      hidden: AbilityName.VitalSpirit
    }
  },
  {
    name: "magby",
    displayName: "Magby",
    dexNumber: 240,
    generation: 2,
    type: TypeName.Fire,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 25
    },
    abilities: {
      first: AbilityName.FlameBody,
      second: AbilityName.NA,
      hidden: AbilityName.VitalSpirit
    }
  },
  {
    name: "miltank",
    displayName: "Miltank",
    dexNumber: 241,
    generation: 2,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.ThickFat,
      second: AbilityName.Scrappy,
      hidden: AbilityName.SapSipper
    }
  },
  {
    name: "blissey",
    displayName: "Blissey",
    dexNumber: 242,
    generation: 2,
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
    name: "raikou",
    displayName: "Raikou",
    dexNumber: 243,
    generation: 2,
    type: TypeName.Electric,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 80
    },
    abilities: {
      first: AbilityName.Pressure,
      second: AbilityName.NA,
      hidden: AbilityName.InnerFocus
    }
  },
  {
    name: "entei",
    displayName: "Entei",
    dexNumber: 244,
    generation: 2,
    type: TypeName.Fire,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 80
    },
    abilities: {
      first: AbilityName.Pressure,
      second: AbilityName.NA,
      hidden: AbilityName.InnerFocus
    }
  },
  {
    name: "suicune",
    displayName: "Suicune",
    dexNumber: 245,
    generation: 2,
    type: TypeName.Water,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 80
    },
    abilities: {
      first: AbilityName.Pressure,
      second: AbilityName.NA,
      hidden: AbilityName.InnerFocus
    }
  },
  {
    name: "larvitar",
    displayName: "Larvitar",
    dexNumber: 246,
    generation: 2,
    type: TypeName.Rock,
    type2: TypeName.Ground,
    eggGroups: {
      group1: EggGroupName.Monster,
      cycles: 40
    },
    abilities: {
      first: AbilityName.Guts,
      second: AbilityName.NA,
      hidden: AbilityName.SandVeil
    }
  },
  {
    name: "pupitar",
    displayName: "Pupitar",
    dexNumber: 247,
    generation: 2,
    type: TypeName.Rock,
    type2: TypeName.Ground,
    eggGroups: {
      group1: EggGroupName.Monster,
      cycles: 40
    },
    abilities: {
      first: AbilityName.ShedSkin,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "tyranitar",
    displayName: "Tyranitar",
    dexNumber: 248,
    generation: 2,
    type: TypeName.Rock,
    type2: TypeName.Dark,
    eggGroups: {
      group1: EggGroupName.Monster,
      cycles: 40
    },
    abilities: {
      first: AbilityName.SandStream,
      second: AbilityName.NA,
      hidden: AbilityName.Unnerve
    }
  },
  {
    name: "lugia",
    displayName: "Lugia",
    dexNumber: 249,
    generation: 2,
    type: TypeName.Psychic,
    type2: TypeName.Flying,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.Pressure,
      second: AbilityName.NA,
      hidden: AbilityName.Multiscale
    }
  },
  {
    name: "hooh",
    displayName: "Ho-Oh",
    dexNumber: 250,
    generation: 2,
    type: TypeName.Fire,
    type2: TypeName.Flying,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.Pressure,
      second: AbilityName.NA,
      hidden: AbilityName.Regenerator
    }
  },
  {
    name: "celebi",
    displayName: "Celebi",
    dexNumber: 251,
    generation: 2,
    type: TypeName.Psychic,
    type2: TypeName.Grass,
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
  }
];
