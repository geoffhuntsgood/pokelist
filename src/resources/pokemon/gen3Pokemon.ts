import { Pokemon } from "../../classes/Pokemon";
import {
  Ability,
  Category,
  EggGroup,
  PokemonName,
  TypeName
} from "../../enums";

export const gen3Pokemon: Pokemon[] = [
  new Pokemon({
    name: PokemonName.Treecko,
    dex: 252,
    type: TypeName.Grass,
    category: Category.Starter,
    abilities: {
      first: Ability.Overgrow,
      hidden: Ability.Unburden
    },
    eggGroups: [EggGroup.Monster, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Grovyle,
    dex: 253,
    type: TypeName.Grass,
    category: Category.Starter,
    abilities: {
      first: Ability.Overgrow,
      hidden: Ability.Unburden
    },
    eggGroups: [EggGroup.Monster, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Sceptile,
    dex: 254,
    type: TypeName.Grass,
    category: Category.Starter,
    abilities: {
      first: Ability.Overgrow,
      hidden: Ability.Unburden
    },
    eggGroups: [EggGroup.Monster, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Torchic,
    dex: 255,
    type: TypeName.Fire,
    category: Category.Starter,
    abilities: {
      first: Ability.Blaze,
      hidden: Ability.SpeedBoost
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Combusken,
    dex: 256,
    type: TypeName.Fire,
    type2: TypeName.Fighting,
    category: Category.Starter,
    abilities: {
      first: Ability.Blaze,
      hidden: Ability.SpeedBoost
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Blaziken,
    dex: 257,
    type: TypeName.Fire,
    type2: TypeName.Fighting,
    category: Category.Starter,
    abilities: {
      first: Ability.Blaze,
      hidden: Ability.SpeedBoost
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Mudkip,
    dex: 258,
    type: TypeName.Water,
    category: Category.Starter,
    abilities: {
      first: Ability.Torrent,
      hidden: Ability.Damp
    },
    eggGroups: [EggGroup.Monster, EggGroup.Water1]
  }),
  new Pokemon({
    name: PokemonName.Marshtomp,
    dex: 259,
    type: TypeName.Water,
    type2: TypeName.Ground,
    category: Category.Starter,
    abilities: {
      first: Ability.Torrent,
      hidden: Ability.Damp
    },
    eggGroups: [EggGroup.Monster, EggGroup.Water1]
  }),
  new Pokemon({
    name: PokemonName.Swampert,
    dex: 260,
    type: TypeName.Water,
    type2: TypeName.Ground,
    category: Category.Starter,
    abilities: {
      first: Ability.Torrent,
      hidden: Ability.Damp
    },
    eggGroups: [EggGroup.Monster, EggGroup.Water1]
  }),
  new Pokemon({
    name: PokemonName.Poochyena,
    dex: 261,
    type: TypeName.Dark,
    abilities: {
      first: Ability.RunAway,
      second: Ability.QuickFeet,
      hidden: Ability.Rattled
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Mightyena,
    dex: 262,
    type: TypeName.Dark,
    abilities: {
      first: Ability.Intimidate,
      second: Ability.QuickFeet,
      hidden: Ability.Moxie
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Zigzagoon,
    dex: 263,
    type: TypeName.Normal,
    abilities: {
      first: Ability.Pickup,
      second: Ability.Gluttony,
      hidden: Ability.QuickFeet
    },
    eggGroups: [EggGroup.Field],
    forms: [
      {
        formName: PokemonName.GalarianZigzagoon,
        type: TypeName.Dark,
        type2: TypeName.Normal
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Linoone,
    dex: 264,
    type: TypeName.Normal,
    abilities: {
      first: Ability.Pickup,
      second: Ability.Gluttony,
      hidden: Ability.QuickFeet
    },
    eggGroups: [EggGroup.Field],
    forms: [
      {
        formName: PokemonName.GalarianLinoone,
        type: TypeName.Dark,
        type2: TypeName.Normal
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Wurmple,
    dex: 265,
    type: TypeName.Bug,
    abilities: {
      first: Ability.ShieldDust,
      hidden: Ability.RunAway
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Silcoon,
    dex: 266,
    type: TypeName.Bug,
    abilities: {
      first: Ability.ShedSkin
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Beautifly,
    dex: 267,
    type: TypeName.Bug,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.Swarm,
      hidden: Ability.Rivalry
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Cascoon,
    dex: 268,
    type: TypeName.Bug,
    abilities: {
      first: Ability.ShedSkin
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Dustox,
    dex: 269,
    type: TypeName.Bug,
    type2: TypeName.Poison,
    abilities: {
      first: Ability.ShieldDust,
      hidden: Ability.CompoundEyes
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Lotad,
    dex: 270,
    type: TypeName.Water,
    type2: TypeName.Grass,
    abilities: {
      first: Ability.SwiftSwim,
      second: Ability.RainDish,
      hidden: Ability.OwnTempo
    },
    eggGroups: [EggGroup.Water1, EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Lombre,
    dex: 271,
    type: TypeName.Water,
    type2: TypeName.Grass,
    abilities: {
      first: Ability.SwiftSwim,
      second: Ability.RainDish,
      hidden: Ability.OwnTempo
    },
    eggGroups: [EggGroup.Water1, EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Ludicolo,
    dex: 272,
    type: TypeName.Water,
    type2: TypeName.Grass,
    abilities: {
      first: Ability.SwiftSwim,
      second: Ability.RainDish,
      hidden: Ability.OwnTempo
    },
    eggGroups: [EggGroup.Water1, EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Seedot,
    dex: 273,
    type: TypeName.Grass,
    abilities: {
      first: Ability.Chlorophyll,
      second: Ability.EarlyBird,
      hidden: Ability.Pickpocket
    },
    eggGroups: [EggGroup.Field, EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Nuzleaf,
    dex: 274,
    type: TypeName.Grass,
    type2: TypeName.Dark,
    abilities: {
      first: Ability.Chlorophyll,
      second: Ability.EarlyBird,
      hidden: Ability.Pickpocket
    },
    eggGroups: [EggGroup.Field, EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Shiftry,
    dex: 275,
    type: TypeName.Grass,
    type2: TypeName.Dark,
    abilities: {
      first: Ability.Chlorophyll,
      second: Ability.WindRider,
      hidden: Ability.Pickpocket
    },
    eggGroups: [EggGroup.Field, EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Taillow,
    dex: 276,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.Guts,
      hidden: Ability.Scrappy
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Swellow,
    dex: 277,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.Guts,
      hidden: Ability.Scrappy
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Wingull,
    dex: 278,
    type: TypeName.Water,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.KeenEye,
      second: Ability.Hydration,
      hidden: Ability.RainDish
    },
    eggGroups: [EggGroup.Water1, EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Pelipper,
    dex: 279,
    type: TypeName.Water,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.KeenEye,
      second: Ability.Drizzle,
      hidden: Ability.RainDish
    },
    eggGroups: [EggGroup.Water1, EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Ralts,
    dex: 280,
    type: TypeName.Psychic,
    type2: TypeName.Fairy,
    abilities: {
      first: Ability.Synchronize,
      second: Ability.Trace,
      hidden: Ability.Telepathy
    },
    eggGroups: [EggGroup.HumanLike, EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Kirlia,
    dex: 281,
    type: TypeName.Psychic,
    type2: TypeName.Fairy,
    abilities: {
      first: Ability.Synchronize,
      second: Ability.Trace,
      hidden: Ability.Telepathy
    },
    eggGroups: [EggGroup.HumanLike, EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Gardevoir,
    dex: 282,
    type: TypeName.Psychic,
    type2: TypeName.Fairy,
    abilities: {
      first: Ability.Synchronize,
      second: Ability.Trace,
      hidden: Ability.Telepathy
    },
    eggGroups: [EggGroup.HumanLike, EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Surskit,
    dex: 283,
    type: TypeName.Bug,
    type2: TypeName.Water,
    abilities: {
      first: Ability.SwiftSwim,
      hidden: Ability.RainDish
    },
    eggGroups: [EggGroup.Water1, EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Masquerain,
    dex: 284,
    type: TypeName.Bug,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.Intimidate,
      hidden: Ability.Unnerve
    },
    eggGroups: [EggGroup.Water1, EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Shroomish,
    dex: 285,
    type: TypeName.Grass,
    abilities: {
      first: Ability.EffectSpore,
      second: Ability.PoisonHeal,
      hidden: Ability.QuickFeet
    },
    eggGroups: [EggGroup.Fairy, EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Breloom,
    dex: 286,
    type: TypeName.Grass,
    type2: TypeName.Fighting,
    abilities: {
      first: Ability.EffectSpore,
      second: Ability.PoisonHeal,
      hidden: Ability.Technician
    },
    eggGroups: [EggGroup.Fairy, EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Slakoth,
    dex: 287,
    type: TypeName.Normal,
    abilities: {
      first: Ability.Truant
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Vigoroth,
    dex: 288,
    type: TypeName.Normal,
    abilities: {
      first: Ability.VitalSpirit
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Slaking,
    dex: 289,
    type: TypeName.Normal,
    abilities: {
      first: Ability.Truant
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Nincada,
    dex: 290,
    type: TypeName.Bug,
    type2: TypeName.Ground,
    abilities: {
      first: Ability.CompoundEyes,
      hidden: Ability.RunAway
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Ninjask,
    dex: 291,
    type: TypeName.Bug,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.SpeedBoost,
      hidden: Ability.Infiltrator
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Shedinja,
    dex: 292,
    type: TypeName.Bug,
    type2: TypeName.Ghost,
    abilities: {
      first: Ability.WonderGuard
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Whismur,
    dex: 293,
    type: TypeName.Normal,
    abilities: {
      first: Ability.Soundproof,
      hidden: Ability.Rattled
    },
    eggGroups: [EggGroup.Monster, EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Loudred,
    dex: 294,
    type: TypeName.Normal,
    abilities: {
      first: Ability.Soundproof,
      hidden: Ability.Scrappy
    },
    eggGroups: [EggGroup.Monster, EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Exploud,
    dex: 295,
    type: TypeName.Normal,
    abilities: {
      first: Ability.Soundproof,
      hidden: Ability.Scrappy
    },
    eggGroups: [EggGroup.Monster, EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Makuhita,
    dex: 296,
    type: TypeName.Fighting,
    abilities: {
      first: Ability.ThickFat,
      second: Ability.Guts,
      hidden: Ability.SheerForce
    },
    eggGroups: [EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Hariyama,
    dex: 297,
    type: TypeName.Fighting,
    abilities: {
      first: Ability.ThickFat,
      second: Ability.Guts,
      hidden: Ability.SheerForce
    },
    eggGroups: [EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Azurill,
    dex: 298,
    type: TypeName.Normal,
    type2: TypeName.Fairy,
    category: Category.Baby,
    abilities: {
      first: Ability.ThickFat,
      second: Ability.HugePower,
      hidden: Ability.SapSipper
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Nosepass,
    dex: 299,
    type: TypeName.Rock,
    abilities: {
      first: Ability.Sturdy,
      second: Ability.MagnetPull,
      hidden: Ability.SandForce
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Skitty,
    dex: 300,
    type: TypeName.Normal,
    abilities: {
      first: Ability.CuteCharm,
      second: Ability.Normalize,
      hidden: Ability.WonderSkin
    },
    eggGroups: [EggGroup.Field, EggGroup.Fairy]
  }),
  new Pokemon({
    name: PokemonName.Delcatty,
    dex: 301,
    type: TypeName.Normal,
    abilities: {
      first: Ability.CuteCharm,
      second: Ability.Normalize,
      hidden: Ability.WonderSkin
    },
    eggGroups: [EggGroup.Field, EggGroup.Fairy]
  }),
  new Pokemon({
    name: PokemonName.Sableye,
    dex: 302,
    type: TypeName.Dark,
    type2: TypeName.Ghost,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.KeenEye,
      second: Ability.Stall,
      hidden: Ability.Prankster
    },
    eggGroups: [EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Mawile,
    dex: 303,
    type: TypeName.Steel,
    type2: TypeName.Fairy,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.HyperCutter,
      second: Ability.Intimidate,
      hidden: Ability.SheerForce
    },
    eggGroups: [EggGroup.Field, EggGroup.Fairy]
  }),
  new Pokemon({
    name: PokemonName.Aron,
    dex: 304,
    type: TypeName.Steel,
    type2: TypeName.Rock,
    abilities: {
      first: Ability.Sturdy,
      second: Ability.RockHead,
      hidden: Ability.HeavyMetal
    },
    eggGroups: [EggGroup.Monster]
  }),
  new Pokemon({
    name: PokemonName.Lairon,
    dex: 305,
    type: TypeName.Steel,
    type2: TypeName.Rock,
    abilities: {
      first: Ability.Sturdy,
      second: Ability.RockHead,
      hidden: Ability.HeavyMetal
    },
    eggGroups: [EggGroup.Monster]
  }),
  new Pokemon({
    name: PokemonName.Aggron,
    dex: 306,
    type: TypeName.Steel,
    type2: TypeName.Rock,
    abilities: {
      first: Ability.Sturdy,
      second: Ability.RockHead,
      hidden: Ability.HeavyMetal
    },
    eggGroups: [EggGroup.Monster]
  }),
  new Pokemon({
    name: PokemonName.Meditite,
    dex: 307,
    type: TypeName.Fighting,
    type2: TypeName.Psychic,
    abilities: {
      first: Ability.PurePower,
      hidden: Ability.Telepathy
    },
    eggGroups: [EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Medicham,
    dex: 308,
    type: TypeName.Fighting,
    type2: TypeName.Psychic,
    abilities: {
      first: Ability.PurePower,
      hidden: Ability.Telepathy
    },
    eggGroups: [EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Electrike,
    dex: 309,
    type: TypeName.Electric,
    abilities: {
      first: Ability.Static,
      second: Ability.LightningRod,
      hidden: Ability.Minus
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Manectric,
    dex: 310,
    type: TypeName.Electric,
    abilities: {
      first: Ability.Static,
      second: Ability.LightningRod,
      hidden: Ability.Minus
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Plusle,
    dex: 311,
    type: TypeName.Electric,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.Plus,
      hidden: Ability.LightningRod
    },
    eggGroups: [EggGroup.Fairy]
  }),
  new Pokemon({
    name: PokemonName.Minun,
    dex: 312,
    type: TypeName.Electric,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.Minus,
      hidden: Ability.VoltAbsorb
    },
    eggGroups: [EggGroup.Fairy]
  }),
  new Pokemon({
    name: PokemonName.Volbeat,
    dex: 313,
    type: TypeName.Bug,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.Illuminate,
      second: Ability.Swarm,
      hidden: Ability.Prankster
    },
    eggGroups: [EggGroup.Bug, EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Illumise,
    dex: 314,
    type: TypeName.Bug,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.Oblivious,
      second: Ability.TintedLens,
      hidden: Ability.Prankster
    },
    eggGroups: [EggGroup.Bug, EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Roselia,
    dex: 315,
    type: TypeName.Grass,
    type2: TypeName.Poison,
    abilities: {
      first: Ability.NaturalCure,
      second: Ability.PoisonPoint,
      hidden: Ability.LeafGuard
    },
    eggGroups: [EggGroup.Fairy, EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Gulpin,
    dex: 316,
    type: TypeName.Poison,
    abilities: {
      first: Ability.LiquidOoze,
      second: Ability.StickyHold,
      hidden: Ability.Gluttony
    },
    eggGroups: [EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Swalot,
    dex: 317,
    type: TypeName.Poison,
    abilities: {
      first: Ability.LiquidOoze,
      second: Ability.StickyHold,
      hidden: Ability.Gluttony
    },
    eggGroups: [EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Carvanha,
    dex: 318,
    type: TypeName.Water,
    type2: TypeName.Dark,
    abilities: {
      first: Ability.RoughSkin,
      hidden: Ability.SpeedBoost
    },
    eggGroups: [EggGroup.Water2]
  }),
  new Pokemon({
    name: PokemonName.Sharpedo,
    dex: 319,
    type: TypeName.Water,
    type2: TypeName.Dark,
    abilities: {
      first: Ability.RoughSkin,
      hidden: Ability.SpeedBoost
    },
    eggGroups: [EggGroup.Water2]
  }),
  new Pokemon({
    name: PokemonName.Wailmer,
    dex: 320,
    type: TypeName.Water,
    abilities: {
      first: Ability.WaterVeil,
      second: Ability.Oblivious,
      hidden: Ability.Pressure
    },
    eggGroups: [EggGroup.Field, EggGroup.Water2]
  }),
  new Pokemon({
    name: PokemonName.Wailord,
    dex: 321,
    type: TypeName.Water,
    abilities: {
      first: Ability.WaterVeil,
      second: Ability.Oblivious,
      hidden: Ability.Pressure
    },
    eggGroups: [EggGroup.Field, EggGroup.Water2]
  }),
  new Pokemon({
    name: PokemonName.Numel,
    dex: 322,
    type: TypeName.Fire,
    type2: TypeName.Ground,
    abilities: {
      first: Ability.Oblivious,
      second: Ability.Simple,
      hidden: Ability.OwnTempo
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Camerupt,
    dex: 323,
    type: TypeName.Fire,
    type2: TypeName.Ground,
    abilities: {
      first: Ability.MagmaArmor,
      second: Ability.SolidRock,
      hidden: Ability.AngerPoint
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Torkoal,
    dex: 324,
    type: TypeName.Fire,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.WhiteSmoke,
      second: Ability.Drought,
      hidden: Ability.ShellArmor
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Spoink,
    dex: 325,
    type: TypeName.Psychic,
    abilities: {
      first: Ability.ThickFat,
      second: Ability.OwnTempo,
      hidden: Ability.Gluttony
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Grumpig,
    dex: 326,
    type: TypeName.Psychic,
    abilities: {
      first: Ability.ThickFat,
      second: Ability.OwnTempo,
      hidden: Ability.Gluttony
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Spinda,
    dex: 327,
    type: TypeName.Normal,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.OwnTempo,
      second: Ability.TangledFeet,
      hidden: Ability.Contrary
    },
    eggGroups: [EggGroup.Field, EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Trapinch,
    dex: 328,
    type: TypeName.Ground,
    abilities: {
      first: Ability.HyperCutter,
      second: Ability.ArenaTrap,
      hidden: Ability.SheerForce
    },
    eggGroups: [EggGroup.Bug, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Vibrava,
    dex: 329,
    type: TypeName.Ground,
    type2: TypeName.Dragon,
    abilities: {
      first: Ability.Levitate
    },
    eggGroups: [EggGroup.Bug, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Flygon,
    dex: 330,
    type: TypeName.Ground,
    type2: TypeName.Dragon,
    abilities: {
      first: Ability.Levitate
    },
    eggGroups: [EggGroup.Bug, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Cacnea,
    dex: 331,
    type: TypeName.Grass,
    abilities: {
      first: Ability.SandVeil,
      hidden: Ability.WaterAbsorb
    },
    eggGroups: [EggGroup.Grass, EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Cacturne,
    dex: 332,
    type: TypeName.Grass,
    type2: TypeName.Dark,
    abilities: {
      first: Ability.SandVeil,
      hidden: Ability.WaterAbsorb
    },
    eggGroups: [EggGroup.Grass, EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Swablu,
    dex: 333,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.NaturalCure,
      hidden: Ability.CloudNine
    },
    eggGroups: [EggGroup.Flying, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Altaria,
    dex: 334,
    type: TypeName.Dragon,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.NaturalCure,
      hidden: Ability.CloudNine
    },
    eggGroups: [EggGroup.Flying, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Zangoose,
    dex: 335,
    type: TypeName.Normal,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.Immunity,
      hidden: Ability.ToxicBoost
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Seviper,
    dex: 336,
    type: TypeName.Poison,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.ShedSkin,
      hidden: Ability.Infiltrator
    },
    eggGroups: [EggGroup.Field, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Lunatone,
    dex: 337,
    type: TypeName.Rock,
    type2: TypeName.Psychic,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.Levitate
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Solrock,
    dex: 338,
    type: TypeName.Rock,
    type2: TypeName.Psychic,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.Levitate
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Barboach,
    dex: 339,
    type: TypeName.Water,
    type2: TypeName.Ground,
    abilities: {
      first: Ability.Oblivious,
      second: Ability.Anticipation,
      hidden: Ability.Hydration
    },
    eggGroups: [EggGroup.Water2]
  }),
  new Pokemon({
    name: PokemonName.Whiscash,
    dex: 340,
    type: TypeName.Water,
    type2: TypeName.Ground,
    abilities: {
      first: Ability.Oblivious,
      second: Ability.Anticipation,
      hidden: Ability.Hydration
    },
    eggGroups: [EggGroup.Water2]
  }),
  new Pokemon({
    name: PokemonName.Corphish,
    dex: 341,
    type: TypeName.Water,
    abilities: {
      first: Ability.HyperCutter,
      second: Ability.ShellArmor,
      hidden: Ability.Adaptability
    },
    eggGroups: [EggGroup.Water1, EggGroup.Water3]
  }),
  new Pokemon({
    name: PokemonName.Crawdaunt,
    dex: 342,
    type: TypeName.Water,
    type2: TypeName.Dark,
    abilities: {
      first: Ability.HyperCutter,
      second: Ability.ShellArmor,
      hidden: Ability.Adaptability
    },
    eggGroups: [EggGroup.Water1, EggGroup.Water3]
  }),
  new Pokemon({
    name: PokemonName.Baltoy,
    dex: 343,
    type: TypeName.Ground,
    type2: TypeName.Psychic,
    abilities: {
      first: Ability.Levitate
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Claydol,
    dex: 344,
    type: TypeName.Ground,
    type2: TypeName.Psychic,
    abilities: {
      first: Ability.Levitate
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Lileep,
    dex: 345,
    type: TypeName.Rock,
    type2: TypeName.Grass,
    category: Category.Fossil,
    abilities: {
      first: Ability.SuctionCups,
      hidden: Ability.StormDrain
    },
    eggGroups: [EggGroup.Water3]
  }),
  new Pokemon({
    name: PokemonName.Cradily,
    dex: 346,
    type: TypeName.Rock,
    type2: TypeName.Grass,
    category: Category.Fossil,
    abilities: {
      first: Ability.SuctionCups,
      hidden: Ability.StormDrain
    },
    eggGroups: [EggGroup.Water3]
  }),
  new Pokemon({
    name: PokemonName.Anorith,
    dex: 347,
    type: TypeName.Rock,
    type2: TypeName.Bug,
    category: Category.Fossil,
    abilities: {
      first: Ability.BattleArmor,
      hidden: Ability.SwiftSwim
    },
    eggGroups: [EggGroup.Water3]
  }),
  new Pokemon({
    name: PokemonName.Armaldo,
    dex: 348,
    type: TypeName.Rock,
    type2: TypeName.Bug,
    category: Category.Fossil,
    abilities: {
      first: Ability.BattleArmor,
      hidden: Ability.SwiftSwim
    },
    eggGroups: [EggGroup.Water3]
  }),
  new Pokemon({
    name: PokemonName.Feebas,
    dex: 349,
    type: TypeName.Water,
    abilities: {
      first: Ability.SwiftSwim,
      second: Ability.Oblivious,
      hidden: Ability.Adaptability
    },
    eggGroups: [EggGroup.Water1, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Milotic,
    dex: 350,
    type: TypeName.Water,
    abilities: {
      first: Ability.MarvelScale,
      second: Ability.Competitive,
      hidden: Ability.CuteCharm
    },
    eggGroups: [EggGroup.Water1, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Castform,
    dex: 351,
    type: TypeName.Normal,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.Forecast
    },
    eggGroups: [EggGroup.Fairy, EggGroup.Amorphous],
    forms: [
      {
        formName: PokemonName.CastformSunny,
        type2: TypeName.Fire
      },
      {
        formName: PokemonName.CastformRainy,
        type2: TypeName.Water
      },
      {
        formName: PokemonName.CastformSnowy,
        type2: TypeName.Ice
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Kecleon,
    dex: 352,
    type: TypeName.Normal,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.ColorChange,
      hidden: Ability.Protean
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Shuppet,
    dex: 353,
    type: TypeName.Ghost,
    abilities: {
      first: Ability.Insomnia,
      second: Ability.Frisk,
      hidden: Ability.CursedBody
    },
    eggGroups: [EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Banette,
    dex: 354,
    type: TypeName.Ghost,
    abilities: {
      first: Ability.Insomnia,
      second: Ability.Frisk,
      hidden: Ability.CursedBody
    },
    eggGroups: [EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Duskull,
    dex: 355,
    type: TypeName.Ghost,
    abilities: {
      first: Ability.Levitate,
      hidden: Ability.Frisk
    },
    eggGroups: [EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Dusclops,
    dex: 356,
    type: TypeName.Ghost,
    abilities: {
      first: Ability.Pressure,
      hidden: Ability.Frisk
    },
    eggGroups: [EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Tropius,
    dex: 357,
    type: TypeName.Grass,
    type2: TypeName.Flying,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.Chlorophyll,
      second: Ability.SolarPower,
      hidden: Ability.Harvest
    },
    eggGroups: [EggGroup.Monster, EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Chimecho,
    dex: 358,
    type: TypeName.Psychic,
    abilities: {
      first: Ability.Levitate
    },
    eggGroups: [EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Absol,
    dex: 359,
    type: TypeName.Dark,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.Pressure,
      second: Ability.SuperLuck,
      hidden: Ability.Justified
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Wynaut,
    dex: 360,
    type: TypeName.Psychic,
    category: Category.Baby,
    abilities: {
      first: Ability.ShadowTag,
      hidden: Ability.Telepathy
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Snorunt,
    dex: 361,
    type: TypeName.Ice,
    abilities: {
      first: Ability.InnerFocus,
      second: Ability.IceBody,
      hidden: Ability.Moody
    },
    eggGroups: [EggGroup.Fairy, EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Glalie,
    dex: 362,
    type: TypeName.Ice,
    abilities: {
      first: Ability.InnerFocus,
      second: Ability.IceBody,
      hidden: Ability.Moody
    },
    eggGroups: [EggGroup.Fairy, EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Spheal,
    dex: 363,
    type: TypeName.Ice,
    type2: TypeName.Water,
    abilities: {
      first: Ability.ThickFat,
      second: Ability.IceBody,
      hidden: Ability.Oblivious
    },
    eggGroups: [EggGroup.Water1, EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Sealeo,
    dex: 364,
    type: TypeName.Ice,
    type2: TypeName.Water,
    abilities: {
      first: Ability.ThickFat,
      second: Ability.IceBody,
      hidden: Ability.Oblivious
    },
    eggGroups: [EggGroup.Water1, EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Walrein,
    dex: 365,
    type: TypeName.Ice,
    type2: TypeName.Water,
    abilities: {
      first: Ability.ThickFat,
      second: Ability.IceBody,
      hidden: Ability.Oblivious
    },
    eggGroups: [EggGroup.Water1, EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Clamperl,
    dex: 366,
    type: TypeName.Water,
    abilities: {
      first: Ability.ShellArmor,
      hidden: Ability.Rattled
    },
    eggGroups: [EggGroup.Water1]
  }),
  new Pokemon({
    name: PokemonName.Huntail,
    dex: 367,
    type: TypeName.Water,
    abilities: {
      first: Ability.SwiftSwim,
      hidden: Ability.WaterVeil
    },
    eggGroups: [EggGroup.Water1]
  }),
  new Pokemon({
    name: PokemonName.Gorebyss,
    dex: 368,
    type: TypeName.Water,
    abilities: {
      first: Ability.SwiftSwim,
      hidden: Ability.Hydration
    },
    eggGroups: [EggGroup.Water1]
  }),
  new Pokemon({
    name: PokemonName.Relicanth,
    dex: 369,
    type: TypeName.Water,
    type2: TypeName.Rock,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.SwiftSwim,
      second: Ability.RockHead,
      hidden: Ability.Sturdy
    },
    eggGroups: [EggGroup.Water1, EggGroup.Water2]
  }),
  new Pokemon({
    name: PokemonName.Luvdisc,
    dex: 370,
    type: TypeName.Water,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.SwiftSwim,
      hidden: Ability.Hydration
    },
    eggGroups: [EggGroup.Water2]
  }),
  new Pokemon({
    name: PokemonName.Bagon,
    dex: 371,
    type: TypeName.Dragon,
    abilities: {
      first: Ability.RockHead,
      hidden: Ability.SheerForce
    },
    eggGroups: [EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Shelgon,
    dex: 372,
    type: TypeName.Dragon,
    abilities: {
      first: Ability.RockHead,
      hidden: Ability.Overcoat
    },
    eggGroups: [EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Salamence,
    dex: 373,
    type: TypeName.Dragon,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.Intimidate,
      hidden: Ability.Moxie
    },
    eggGroups: [EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Beldum,
    dex: 374,
    type: TypeName.Steel,
    type2: TypeName.Psychic,
    abilities: {
      first: Ability.ClearBody,
      hidden: Ability.LightMetal
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Metang,
    dex: 375,
    type: TypeName.Steel,
    type2: TypeName.Psychic,
    abilities: {
      first: Ability.ClearBody,
      hidden: Ability.LightMetal
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Metagross,
    dex: 376,
    type: TypeName.Steel,
    type2: TypeName.Psychic,
    abilities: {
      first: Ability.ClearBody,
      hidden: Ability.LightMetal
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Regirock,
    dex: 377,
    type: TypeName.Rock,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.ClearBody,
      hidden: Ability.Sturdy
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Regice,
    dex: 378,
    type: TypeName.Ice,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.ClearBody,
      hidden: Ability.IceBody
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Registeel,
    dex: 379,
    type: TypeName.Steel,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.ClearBody,
      hidden: Ability.LightMetal
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Latias,
    dex: 380,
    type: TypeName.Dragon,
    type2: TypeName.Flying,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.Levitate
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Latios,
    dex: 381,
    type: TypeName.Dragon,
    type2: TypeName.Flying,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.Levitate
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Kyogre,
    dex: 382,
    type: TypeName.Water,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.Drizzle
    },
    eggGroups: [EggGroup.NoEggs],
    forms: [
      {
        formName: PokemonName.KyogrePrimal,
        abilities: {
          first: Ability.PrimordialSea
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Groudon,
    dex: 383,
    type: TypeName.Ground,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.Drought
    },
    eggGroups: [EggGroup.NoEggs],
    forms: [
      {
        formName: PokemonName.GroudonPrimal,
        abilities: {
          first: Ability.DesolateLand
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Rayquaza,
    dex: 384,
    type: TypeName.Dragon,
    type2: TypeName.Flying,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.AirLock
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Jirachi,
    dex: 385,
    type: TypeName.Steel,
    type2: TypeName.Psychic,
    category: [Category.Mythical, Category.NonEvolve],
    abilities: {
      first: Ability.SereneGrace
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Deoxys,
    dex: 386,
    type: TypeName.Psychic,
    category: [Category.Mythical, Category.NonEvolve],
    abilities: {
      first: Ability.Pressure
    },
    eggGroups: [EggGroup.NoEggs]
  })
];
