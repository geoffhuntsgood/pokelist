import { Pokemon } from "../../classes/Pokemon";
import {
  Ability,
  Category,
  EggGroup,
  PokemonName,
  TypeName
} from "../../enums";

export const gen2Pokemon: Pokemon[] = [
  new Pokemon({
    name: PokemonName.Chikorita,
    dex: 152,
    type: TypeName.Grass,
    category: Category.Starter,
    abilities: {
      first: Ability.Overgrow,
      hidden: Ability.LeafGuard
    },
    eggGroups: [EggGroup.Monster, EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Bayleef,
    dex: 153,
    type: TypeName.Grass,
    category: Category.Starter,
    abilities: {
      first: Ability.Overgrow,
      hidden: Ability.LeafGuard
    },
    eggGroups: [EggGroup.Monster, EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Meganium,
    dex: 154,
    type: TypeName.Grass,
    category: Category.Starter,
    abilities: {
      first: Ability.Overgrow,
      hidden: Ability.LeafGuard
    },
    eggGroups: [EggGroup.Monster, EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Cyndaquil,
    dex: 155,
    type: TypeName.Fire,
    category: Category.Starter,
    abilities: {
      first: Ability.Blaze,
      hidden: Ability.FlashFire
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Quilava,
    dex: 156,
    type: TypeName.Fire,
    category: Category.Starter,
    abilities: {
      first: Ability.Blaze,
      hidden: Ability.FlashFire
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Typhlosion,
    dex: 157,
    type: TypeName.Fire,
    category: Category.Starter,
    abilities: {
      first: Ability.Blaze,
      hidden: Ability.FlashFire
    },
    eggGroups: [EggGroup.Field],
    forms: [
      {
        formName: PokemonName.HisuianTyphlosion,
        type: TypeName.Fire,
        type2: TypeName.Ghost,
        abilities: {
          first: Ability.Blaze,
          hidden: Ability.Frisk
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Totodile,
    dex: 158,
    type: TypeName.Water,
    category: Category.Starter,
    abilities: {
      first: Ability.Torrent,
      hidden: Ability.SheerForce
    },
    eggGroups: [EggGroup.Monster, EggGroup.Water1]
  }),
  new Pokemon({
    name: PokemonName.Croconaw,
    dex: 159,
    type: TypeName.Water,
    category: Category.Starter,
    abilities: {
      first: Ability.Torrent,
      hidden: Ability.SheerForce
    },
    eggGroups: [EggGroup.Monster, EggGroup.Water1]
  }),
  new Pokemon({
    name: PokemonName.Feraligatr,
    dex: 160,
    type: TypeName.Water,
    category: Category.Starter,
    abilities: {
      first: Ability.Torrent,
      hidden: Ability.SheerForce
    },
    eggGroups: [EggGroup.Monster, EggGroup.Water1]
  }),
  new Pokemon({
    name: PokemonName.Sentret,
    dex: 161,
    type: TypeName.Normal,
    abilities: {
      first: Ability.RunAway,
      second: Ability.KeenEye,
      hidden: Ability.Frisk
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Furret,
    dex: 162,
    type: TypeName.Normal,
    abilities: {
      first: Ability.RunAway,
      second: Ability.KeenEye,
      hidden: Ability.Frisk
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Hoothoot,
    dex: 163,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.Insomnia,
      second: Ability.KeenEye,
      hidden: Ability.TintedLens
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Noctowl,
    dex: 164,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.Insomnia,
      second: Ability.KeenEye,
      hidden: Ability.TintedLens
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Ledyba,
    dex: 165,
    type: TypeName.Bug,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.Swarm,
      second: Ability.EarlyBird,
      hidden: Ability.Rattled
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Ledian,
    dex: 166,
    type: TypeName.Bug,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.Swarm,
      second: Ability.EarlyBird,
      hidden: Ability.IronFist
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Spinarak,
    dex: 167,
    type: TypeName.Bug,
    type2: TypeName.Poison,
    abilities: {
      first: Ability.Swarm,
      second: Ability.Insomnia,
      hidden: Ability.Sniper
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Ariados,
    dex: 168,
    type: TypeName.Bug,
    type2: TypeName.Poison,
    abilities: {
      first: Ability.Swarm,
      second: Ability.Insomnia,
      hidden: Ability.Sniper
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Crobat,
    dex: 169,
    type: TypeName.Poison,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.InnerFocus,
      hidden: Ability.Infiltrator
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Chinchou,
    dex: 170,
    type: TypeName.Water,
    type2: TypeName.Electric,
    abilities: {
      first: Ability.VoltAbsorb,
      second: Ability.Illuminate,
      hidden: Ability.WaterAbsorb
    },
    eggGroups: [EggGroup.Water2]
  }),
  new Pokemon({
    name: PokemonName.Lanturn,
    dex: 171,
    type: TypeName.Water,
    type2: TypeName.Electric,
    abilities: {
      first: Ability.VoltAbsorb,
      second: Ability.Illuminate,
      hidden: Ability.WaterAbsorb
    },
    eggGroups: [EggGroup.Water2]
  }),
  new Pokemon({
    name: PokemonName.Pichu,
    dex: 172,
    type: TypeName.Electric,
    category: Category.Baby,
    abilities: {
      first: Ability.Static,
      hidden: Ability.LightningRod
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Cleffa,
    dex: 173,
    type: TypeName.Fairy,
    category: Category.Baby,
    abilities: {
      first: Ability.CuteCharm,
      second: Ability.MagicGuard,
      hidden: Ability.FriendGuard
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Igglybuff,
    dex: 174,
    type: TypeName.Normal,
    type2: TypeName.Fairy,
    category: Category.Baby,
    abilities: {
      first: Ability.CuteCharm,
      second: Ability.Competitive,
      hidden: Ability.FriendGuard
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Togepi,
    dex: 175,
    type: TypeName.Fairy,
    category: Category.Baby,
    abilities: {
      first: Ability.Hustle,
      second: Ability.SereneGrace,
      hidden: Ability.SuperLuck
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Togetic,
    dex: 176,
    type: TypeName.Fairy,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.Hustle,
      second: Ability.SereneGrace,
      hidden: Ability.SuperLuck
    },
    eggGroups: [EggGroup.Flying, EggGroup.Fairy]
  }),
  new Pokemon({
    name: PokemonName.Natu,
    dex: 177,
    type: TypeName.Psychic,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.Synchronize,
      second: Ability.EarlyBird,
      hidden: Ability.MagicBounce
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Xatu,
    dex: 178,
    type: TypeName.Psychic,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.Synchronize,
      second: Ability.EarlyBird,
      hidden: Ability.MagicBounce
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Mareep,
    dex: 179,
    type: TypeName.Electric,
    abilities: {
      first: Ability.Static,
      hidden: Ability.Plus
    },
    eggGroups: [EggGroup.Monster, EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Flaaffy,
    dex: 180,
    type: TypeName.Electric,
    abilities: {
      first: Ability.Static,
      hidden: Ability.Plus
    },
    eggGroups: [EggGroup.Monster, EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Ampharos,
    dex: 181,
    type: TypeName.Electric,
    abilities: {
      first: Ability.Static,
      hidden: Ability.Plus
    },
    eggGroups: [EggGroup.Monster, EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Bellossom,
    dex: 182,
    type: TypeName.Grass,
    abilities: {
      first: Ability.Chlorophyll,
      hidden: Ability.Healer
    },
    eggGroups: [EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Marill,
    dex: 183,
    type: TypeName.Water,
    type2: TypeName.Fairy,
    abilities: {
      first: Ability.ThickFat,
      second: Ability.HugePower,
      hidden: Ability.SapSipper
    },
    eggGroups: [EggGroup.Water1, EggGroup.Fairy]
  }),
  new Pokemon({
    name: PokemonName.Azumarill,
    dex: 184,
    type: TypeName.Water,
    type2: TypeName.Fairy,
    abilities: {
      first: Ability.ThickFat,
      second: Ability.HugePower,
      hidden: Ability.SapSipper
    },
    eggGroups: [EggGroup.Water1, EggGroup.Fairy]
  }),
  new Pokemon({
    name: PokemonName.Sudowoodo,
    dex: 185,
    type: TypeName.Rock,
    abilities: {
      first: Ability.Sturdy,
      second: Ability.RockHead,
      hidden: Ability.Rattled
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Politoed,
    dex: 186,
    type: TypeName.Water,
    abilities: {
      first: Ability.WaterAbsorb,
      second: Ability.Damp,
      hidden: Ability.Drizzle
    },
    eggGroups: [EggGroup.Water1]
  }),
  new Pokemon({
    name: PokemonName.Hoppip,
    dex: 187,
    type: TypeName.Grass,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.Chlorophyll,
      second: Ability.LeafGuard,
      hidden: Ability.Infiltrator
    },
    eggGroups: [EggGroup.Fairy, EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Skiploom,
    dex: 188,
    type: TypeName.Grass,
    type2: TypeName.Flying,
    eggGroups: [EggGroup.Fairy, EggGroup.Grass],
    abilities: {
      first: Ability.Chlorophyll,
      second: Ability.LeafGuard,
      hidden: Ability.Infiltrator
    }
  }),
  new Pokemon({
    name: PokemonName.Jumpluff,
    dex: 189,
    type: TypeName.Grass,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.Chlorophyll,
      second: Ability.LeafGuard,
      hidden: Ability.Infiltrator
    },
    eggGroups: [EggGroup.Fairy, EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Aipom,
    dex: 190,
    type: TypeName.Normal,
    abilities: {
      first: Ability.RunAway,
      second: Ability.Pickup,
      hidden: Ability.SkillLink
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Sunkern,
    dex: 191,
    type: TypeName.Grass,
    abilities: {
      first: Ability.Chlorophyll,
      second: Ability.SolarPower,
      hidden: Ability.EarlyBird
    },
    eggGroups: [EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Sunflora,
    dex: 192,
    type: TypeName.Grass,
    abilities: {
      first: Ability.Chlorophyll,
      second: Ability.SolarPower,
      hidden: Ability.EarlyBird
    },
    eggGroups: [EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Yanma,
    dex: 193,
    type: TypeName.Bug,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.SpeedBoost,
      second: Ability.CompoundEyes,
      hidden: Ability.Frisk
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Wooper,
    dex: 194,
    type: TypeName.Water,
    type2: TypeName.Ground,
    abilities: {
      first: Ability.Damp,
      second: Ability.WaterAbsorb,
      hidden: Ability.Unaware
    },
    eggGroups: [EggGroup.Water1, EggGroup.Field],
    forms: [
      {
        formName: PokemonName.PaldeanWooper,
        type: TypeName.Poison,
        type2: TypeName.Ground,
        abilities: {
          first: Ability.PoisonPoint,
          second: Ability.WaterAbsorb,
          hidden: Ability.Unaware
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Quagsire,
    dex: 195,
    type: TypeName.Water,
    type2: TypeName.Ground,
    abilities: {
      first: Ability.Damp,
      second: Ability.WaterAbsorb,
      hidden: Ability.Unaware
    },
    eggGroups: [EggGroup.Water1, EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Espeon,
    dex: 196,
    type: TypeName.Psychic,
    abilities: {
      first: Ability.Synchronize,
      hidden: Ability.MagicBounce
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Umbreon,
    dex: 197,
    type: TypeName.Dark,
    abilities: {
      first: Ability.Synchronize,
      hidden: Ability.InnerFocus
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Murkrow,
    dex: 198,
    type: TypeName.Dark,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.Insomnia,
      second: Ability.SuperLuck,
      hidden: Ability.Prankster
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Slowking,
    dex: 199,
    type: TypeName.Water,
    type2: TypeName.Psychic,
    abilities: {
      first: Ability.Oblivious,
      second: Ability.OwnTempo,
      hidden: Ability.Regenerator
    },
    eggGroups: [EggGroup.Monster, EggGroup.Water1],
    forms: [
      {
        formName: PokemonName.GalarianSlowking,
        type: TypeName.Poison,
        type2: TypeName.Psychic,
        abilities: {
          first: Ability.CuriousMedicine,
          second: Ability.OwnTempo,
          hidden: Ability.Regenerator
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Misdreavus,
    dex: 200,
    type: TypeName.Ghost,
    abilities: {
      first: Ability.Levitate
    },
    eggGroups: [EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Unown,
    dex: 201,
    type: TypeName.Psychic,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.Levitate
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Wobbuffet,
    dex: 202,
    type: TypeName.Psychic,
    abilities: {
      first: Ability.ShadowTag,
      hidden: Ability.Telepathy
    },
    eggGroups: [EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Girafarig,
    dex: 203,
    type: TypeName.Normal,
    type2: TypeName.Psychic,
    abilities: {
      first: Ability.InnerFocus,
      second: Ability.EarlyBird,
      hidden: Ability.SapSipper
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Pineco,
    dex: 204,
    type: TypeName.Bug,
    abilities: {
      first: Ability.Sturdy,
      hidden: Ability.Overcoat
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Forretress,
    dex: 205,
    type: TypeName.Bug,
    type2: TypeName.Steel,
    abilities: {
      first: Ability.Sturdy,
      hidden: Ability.Overcoat
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Dunsparce,
    dex: 206,
    type: TypeName.Normal,
    abilities: {
      first: Ability.SereneGrace,
      second: Ability.RunAway,
      hidden: Ability.Rattled
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Gligar,
    dex: 207,
    type: TypeName.Ground,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.HyperCutter,
      second: Ability.SandVeil,
      hidden: Ability.Immunity
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Steelix,
    dex: 208,
    type: TypeName.Steel,
    type2: TypeName.Ground,
    abilities: {
      first: Ability.RockHead,
      second: Ability.Sturdy,
      hidden: Ability.SheerForce
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Snubbull,
    dex: 209,
    type: TypeName.Fairy,
    abilities: {
      first: Ability.Intimidate,
      second: Ability.RunAway,
      hidden: Ability.Rattled
    },
    eggGroups: [EggGroup.Field, EggGroup.Fairy]
  }),
  new Pokemon({
    name: PokemonName.Granbull,
    dex: 210,
    type: TypeName.Fairy,
    abilities: {
      first: Ability.Intimidate,
      second: Ability.QuickFeet,
      hidden: Ability.Rattled
    },
    eggGroups: [EggGroup.Field, EggGroup.Fairy]
  }),
  new Pokemon({
    name: PokemonName.Qwilfish,
    dex: 211,
    type: TypeName.Water,
    type2: TypeName.Poison,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.PoisonPoint,
      second: Ability.SwiftSwim,
      hidden: Ability.Intimidate
    },
    eggGroups: [EggGroup.Water2],
    forms: [
      {
        formName: PokemonName.HisuianQwilfish,
        type: TypeName.Dark,
        type2: TypeName.Poison
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Scizor,
    dex: 212,
    type: TypeName.Bug,
    type2: TypeName.Steel,
    abilities: {
      first: Ability.Swarm,
      second: Ability.Technician,
      hidden: Ability.LightMetal
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Shuckle,
    dex: 213,
    type: TypeName.Bug,
    type2: TypeName.Rock,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.Sturdy,
      second: Ability.Gluttony,
      hidden: Ability.Contrary
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Heracross,
    dex: 214,
    type: TypeName.Bug,
    type2: TypeName.Fighting,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.Swarm,
      second: Ability.Guts,
      hidden: Ability.Moxie
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Sneasel,
    dex: 215,
    type: TypeName.Dark,
    type2: TypeName.Ice,
    abilities: {
      first: Ability.InnerFocus,
      second: Ability.KeenEye,
      hidden: Ability.Pickpocket
    },
    eggGroups: [EggGroup.Field],
    forms: [
      {
        formName: PokemonName.HisuianSneasel,
        type: TypeName.Fighting,
        type2: TypeName.Poison
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Teddiursa,
    dex: 216,
    type: TypeName.Normal,
    abilities: {
      first: Ability.Pickup,
      second: Ability.QuickFeet,
      hidden: Ability.HoneyGather
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Ursaring,
    dex: 217,
    type: TypeName.Normal,
    abilities: {
      first: Ability.Guts,
      second: Ability.QuickFeet,
      hidden: Ability.Unnerve
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Slugma,
    dex: 218,
    type: TypeName.Fire,
    abilities: {
      first: Ability.MagmaArmor,
      second: Ability.FlameBody,
      hidden: Ability.WeakArmor
    },
    eggGroups: [EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Magcargo,
    dex: 219,
    type: TypeName.Fire,
    type2: TypeName.Rock,
    abilities: {
      first: Ability.MagmaArmor,
      second: Ability.FlameBody,
      hidden: Ability.WeakArmor
    },
    eggGroups: [EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Swinub,
    dex: 220,
    type: TypeName.Ice,
    type2: TypeName.Ground,
    abilities: {
      first: Ability.Oblivious,
      second: Ability.SnowCloak,
      hidden: Ability.ThickFat
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Piloswine,
    dex: 221,
    type: TypeName.Ice,
    type2: TypeName.Ground,
    abilities: {
      first: Ability.Oblivious,
      second: Ability.SnowCloak,
      hidden: Ability.ThickFat
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Corsola,
    dex: 222,
    type: TypeName.Water,
    type2: TypeName.Rock,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.Hustle,
      second: Ability.NaturalCure,
      hidden: Ability.Regenerator
    },
    eggGroups: [EggGroup.Water1, EggGroup.Water3],
    forms: [
      {
        formName: PokemonName.GalarianCorsola,
        type: TypeName.Ghost,
        abilities: {
          first: Ability.WeakArmor,
          hidden: Ability.CursedBody
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Remoraid,
    dex: 223,
    type: TypeName.Water,
    abilities: {
      first: Ability.Hustle,
      second: Ability.Sniper,
      hidden: Ability.Moody
    },
    eggGroups: [EggGroup.Water1, EggGroup.Water2]
  }),
  new Pokemon({
    name: PokemonName.Octillery,
    dex: 224,
    type: TypeName.Water,
    abilities: {
      first: Ability.SuctionCups,
      second: Ability.Sniper,
      hidden: Ability.Moody
    },
    eggGroups: [EggGroup.Water1, EggGroup.Water2]
  }),
  new Pokemon({
    name: PokemonName.Delibird,
    dex: 225,
    type: TypeName.Ice,
    type2: TypeName.Flying,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.VitalSpirit,
      second: Ability.Hustle,
      hidden: Ability.Insomnia
    },
    eggGroups: [EggGroup.Water1, EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Mantine,
    dex: 226,
    type: TypeName.Water,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.SwiftSwim,
      second: Ability.WaterAbsorb,
      hidden: Ability.WaterVeil
    },
    eggGroups: [EggGroup.Water1]
  }),
  new Pokemon({
    name: PokemonName.Skarmory,
    dex: 227,
    type: TypeName.Steel,
    type2: TypeName.Flying,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.KeenEye,
      second: Ability.Sturdy,
      hidden: Ability.WeakArmor
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Houndour,
    dex: 228,
    type: TypeName.Dark,
    type2: TypeName.Fire,
    abilities: {
      first: Ability.EarlyBird,
      second: Ability.FlashFire,
      hidden: Ability.Unnerve
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Houndoom,
    dex: 229,
    type: TypeName.Dark,
    type2: TypeName.Fire,
    abilities: {
      first: Ability.EarlyBird,
      second: Ability.FlashFire,
      hidden: Ability.Unnerve
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Kingdra,
    dex: 230,
    type: TypeName.Water,
    type2: TypeName.Dragon,
    abilities: {
      first: Ability.SwiftSwim,
      second: Ability.Sniper,
      hidden: Ability.Damp
    },
    eggGroups: [EggGroup.Water1, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Phanpy,
    dex: 231,
    type: TypeName.Ground,
    abilities: {
      first: Ability.Pickup,
      hidden: Ability.SandVeil
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Donphan,
    dex: 232,
    type: TypeName.Ground,
    abilities: {
      first: Ability.Sturdy,
      hidden: Ability.SandVeil
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Porygon2,
    dex: 233,
    type: TypeName.Normal,
    abilities: {
      first: Ability.Trace,
      second: Ability.Download,
      hidden: Ability.Analytic
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Stantler,
    dex: 234,
    type: TypeName.Normal,
    abilities: {
      first: Ability.Intimidate,
      second: Ability.Frisk,
      hidden: Ability.SapSipper
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Smeargle,
    dex: 235,
    type: TypeName.Normal,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.OwnTempo,
      second: Ability.Technician,
      hidden: Ability.Moody
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Tyrogue,
    dex: 236,
    type: TypeName.Fighting,
    category: Category.Baby,
    abilities: {
      first: Ability.Guts,
      second: Ability.Steadfast,
      hidden: Ability.VitalSpirit
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Hitmontop,
    dex: 237,
    type: TypeName.Fighting,
    abilities: {
      first: Ability.Intimidate,
      second: Ability.Technician,
      hidden: Ability.Steadfast
    },
    eggGroups: [EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Smoochum,
    dex: 238,
    type: TypeName.Ice,
    type2: TypeName.Psychic,
    category: Category.Baby,
    abilities: {
      first: Ability.Oblivious,
      second: Ability.Forewarn,
      hidden: Ability.Hydration
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Elekid,
    dex: 239,
    type: TypeName.Electric,
    category: Category.Baby,
    abilities: {
      first: Ability.Static,
      hidden: Ability.VitalSpirit
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Magby,
    dex: 240,
    type: TypeName.Fire,
    category: Category.Baby,
    abilities: {
      first: Ability.FlameBody,
      hidden: Ability.VitalSpirit
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Miltank,
    dex: 241,
    type: TypeName.Normal,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.ThickFat,
      second: Ability.Scrappy,
      hidden: Ability.SapSipper
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Blissey,
    dex: 242,
    type: TypeName.Normal,
    abilities: {
      first: Ability.NaturalCure,
      second: Ability.SereneGrace,
      hidden: Ability.Healer
    },
    eggGroups: [EggGroup.Fairy]
  }),
  new Pokemon({
    name: PokemonName.Raikou,
    dex: 243,
    type: TypeName.Electric,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.Pressure,
      hidden: Ability.InnerFocus
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Entei,
    dex: 244,
    type: TypeName.Fire,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.Pressure,
      hidden: Ability.InnerFocus
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Suicune,
    dex: 245,
    type: TypeName.Water,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.Pressure,
      hidden: Ability.InnerFocus
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Larvitar,
    dex: 246,
    type: TypeName.Rock,
    type2: TypeName.Ground,
    abilities: {
      first: Ability.Guts,
      hidden: Ability.SandVeil
    },
    eggGroups: [EggGroup.Monster]
  }),
  new Pokemon({
    name: PokemonName.Pupitar,
    dex: 247,
    type: TypeName.Rock,
    type2: TypeName.Ground,
    abilities: {
      first: Ability.ShedSkin
    },
    eggGroups: [EggGroup.Monster]
  }),
  new Pokemon({
    name: PokemonName.Tyranitar,
    dex: 248,
    type: TypeName.Rock,
    type2: TypeName.Dark,
    abilities: {
      first: Ability.SandStream,
      hidden: Ability.Unnerve
    },
    eggGroups: [EggGroup.Monster]
  }),
  new Pokemon({
    name: PokemonName.Lugia,
    dex: 249,
    type: TypeName.Psychic,
    type2: TypeName.Flying,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.Pressure,
      hidden: Ability.Multiscale
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.HoOh,
    dex: 250,
    type: TypeName.Fire,
    type2: TypeName.Flying,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.Pressure,
      hidden: Ability.Regenerator
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Celebi,
    dex: 251,
    type: TypeName.Psychic,
    type2: TypeName.Grass,
    category: [Category.Mythical, Category.NonEvolve],
    abilities: {
      first: Ability.NaturalCure
    },
    eggGroups: [EggGroup.NoEggs]
  })
];
