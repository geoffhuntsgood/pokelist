import { Pokemon } from "../../classes/Pokemon";
import {
  Ability,
  Category,
  EggGroup,
  PokemonName,
  TypeName
} from "../../enums";

export const gen5Pokemon: Pokemon[] = [
  new Pokemon({
    name: PokemonName.Victini,
    dex: 494,
    type: TypeName.Psychic,
    type2: TypeName.Fire,
    category: [Category.Mythical, Category.NonEvolve],
    abilities: {
      first: Ability.VictoryStar
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Snivy,
    dex: 495,
    type: TypeName.Grass,
    category: Category.Starter,
    abilities: {
      first: Ability.Overgrow,
      hidden: Ability.Contrary
    },
    eggGroups: [EggGroup.Field, EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Servine,
    dex: 496,
    type: TypeName.Grass,
    category: Category.Starter,
    abilities: {
      first: Ability.Overgrow,
      hidden: Ability.Contrary
    },
    eggGroups: [EggGroup.Field, EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Serperior,
    dex: 497,
    type: TypeName.Grass,
    category: Category.Starter,
    abilities: {
      first: Ability.Overgrow,
      hidden: Ability.Contrary
    },
    eggGroups: [EggGroup.Field, EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Tepig,
    dex: 498,
    type: TypeName.Fire,
    category: Category.Starter,
    abilities: {
      first: Ability.Blaze,
      hidden: Ability.ThickFat
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Pignite,
    dex: 499,
    type: TypeName.Fire,
    type2: TypeName.Fighting,
    category: Category.Starter,
    abilities: {
      first: Ability.Blaze,
      hidden: Ability.ThickFat
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Emboar,
    dex: 500,
    type: TypeName.Fire,
    type2: TypeName.Fighting,
    category: Category.Starter,
    abilities: {
      first: Ability.Blaze,
      hidden: Ability.ThickFat
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Oshawott,
    dex: 501,
    type: TypeName.Water,
    category: Category.Starter,
    abilities: {
      first: Ability.Torrent,
      hidden: Ability.ShellArmor
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Dewott,
    dex: 502,
    type: TypeName.Water,
    category: Category.Starter,
    abilities: {
      first: Ability.Torrent,
      hidden: Ability.ShellArmor
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Samurott,
    dex: 503,
    type: TypeName.Water,
    category: Category.Starter,
    abilities: {
      first: Ability.Torrent,
      hidden: Ability.ShellArmor
    },
    eggGroups: [EggGroup.Field],
    forms: [
      {
        formName: PokemonName.HisuianSamurott,
        type: TypeName.Water,
        type2: TypeName.Dark,
        abilities: {
          first: Ability.Torrent,
          hidden: Ability.Sharpness
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Patrat,
    dex: 504,
    type: TypeName.Normal,
    abilities: {
      first: Ability.RunAway,
      second: Ability.KeenEye,
      hidden: Ability.Analytic
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Watchog,
    dex: 505,
    type: TypeName.Normal,
    abilities: {
      first: Ability.Illuminate,
      second: Ability.KeenEye,
      hidden: Ability.Analytic
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Lillipup,
    dex: 506,
    type: TypeName.Normal,
    abilities: {
      first: Ability.VitalSpirit,
      second: Ability.Pickup,
      hidden: Ability.RunAway
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Herdier,
    dex: 507,
    type: TypeName.Normal,
    abilities: {
      first: Ability.Intimidate,
      second: Ability.SandRush,
      hidden: Ability.Scrappy
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Stoutland,
    dex: 508,
    type: TypeName.Normal,
    abilities: {
      first: Ability.Intimidate,
      second: Ability.SandRush,
      hidden: Ability.Scrappy
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Purrloin,
    dex: 509,
    type: TypeName.Dark,
    abilities: {
      first: Ability.Limber,
      second: Ability.Unburden,
      hidden: Ability.Prankster
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Liepard,
    dex: 510,
    type: TypeName.Dark,
    abilities: {
      first: Ability.Limber,
      second: Ability.Unburden,
      hidden: Ability.Prankster
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Pansage,
    dex: 511,
    type: TypeName.Grass,
    abilities: {
      first: Ability.Gluttony,
      hidden: Ability.Overgrow
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Simisage,
    dex: 512,
    type: TypeName.Grass,
    abilities: {
      first: Ability.Gluttony,
      hidden: Ability.Overgrow
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Pansear,
    dex: 513,
    type: TypeName.Fire,
    abilities: {
      first: Ability.Gluttony,
      hidden: Ability.Blaze
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Simisear,
    dex: 514,
    type: TypeName.Fire,
    abilities: {
      first: Ability.Gluttony,
      hidden: Ability.Blaze
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Panpour,
    dex: 515,
    type: TypeName.Water,
    abilities: {
      first: Ability.Gluttony,
      hidden: Ability.Torrent
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Simipour,
    dex: 516,
    type: TypeName.Water,
    abilities: {
      first: Ability.Gluttony,
      hidden: Ability.Torrent
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Munna,
    dex: 517,
    type: TypeName.Psychic,
    abilities: {
      first: Ability.Forewarn,
      second: Ability.Synchronize,
      hidden: Ability.Telepathy
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Musharna,
    dex: 518,
    type: TypeName.Psychic,
    abilities: {
      first: Ability.Forewarn,
      second: Ability.Synchronize,
      hidden: Ability.Telepathy
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Pidove,
    dex: 519,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.BigPecks,
      second: Ability.SuperLuck,
      hidden: Ability.Rivalry
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Tranquill,
    dex: 520,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.BigPecks,
      second: Ability.SuperLuck,
      hidden: Ability.Rivalry
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Unfezant,
    dex: 521,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.BigPecks,
      second: Ability.SuperLuck,
      hidden: Ability.Rivalry
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Blitzle,
    dex: 522,
    type: TypeName.Electric,
    abilities: {
      first: Ability.LightningRod,
      second: Ability.MotorDrive,
      hidden: Ability.SapSipper
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Zebstrika,
    dex: 523,
    type: TypeName.Electric,
    abilities: {
      first: Ability.LightningRod,
      second: Ability.MotorDrive,
      hidden: Ability.SapSipper
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Roggenrola,
    dex: 524,
    type: TypeName.Rock,
    abilities: {
      first: Ability.Sturdy,
      second: Ability.WeakArmor,
      hidden: Ability.SandForce
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Boldore,
    dex: 525,
    type: TypeName.Rock,
    abilities: {
      first: Ability.Sturdy,
      second: Ability.WeakArmor,
      hidden: Ability.SandForce
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Gigalith,
    dex: 526,
    type: TypeName.Rock,
    abilities: {
      first: Ability.Sturdy,
      second: Ability.SandStream,
      hidden: Ability.SandForce
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Woobat,
    dex: 527,
    type: TypeName.Psychic,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.Unaware,
      second: Ability.Klutz,
      hidden: Ability.Simple
    },
    eggGroups: [EggGroup.Field, EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Swoobat,
    dex: 528,
    type: TypeName.Psychic,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.Unaware,
      second: Ability.Klutz,
      hidden: Ability.Simple
    },
    eggGroups: [EggGroup.Field, EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Drilbur,
    dex: 529,
    type: TypeName.Ground,
    abilities: {
      first: Ability.SandRush,
      second: Ability.SandForce,
      hidden: Ability.MoldBreaker
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Excadrill,
    dex: 530,
    type: TypeName.Ground,
    type2: TypeName.Steel,
    abilities: {
      first: Ability.SandRush,
      second: Ability.SandForce,
      hidden: Ability.MoldBreaker
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Audino,
    dex: 531,
    type: TypeName.Normal,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.Healer,
      second: Ability.Regenerator,
      hidden: Ability.Klutz
    },
    eggGroups: [EggGroup.Fairy]
  }),
  new Pokemon({
    name: PokemonName.Timburr,
    dex: 532,
    type: TypeName.Fighting,
    abilities: {
      first: Ability.Guts,
      second: Ability.SheerForce,
      hidden: Ability.IronFist
    },
    eggGroups: [EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Gurdurr,
    dex: 533,
    type: TypeName.Fighting,
    abilities: {
      first: Ability.Guts,
      second: Ability.SheerForce,
      hidden: Ability.IronFist
    },
    eggGroups: [EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Conkeldurr,
    dex: 534,
    type: TypeName.Fighting,
    abilities: {
      first: Ability.Guts,
      second: Ability.SheerForce,
      hidden: Ability.IronFist
    },
    eggGroups: [EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Tympole,
    dex: 535,
    type: TypeName.Water,
    abilities: {
      first: Ability.SwiftSwim,
      second: Ability.Hydration,
      hidden: Ability.WaterAbsorb
    },
    eggGroups: [EggGroup.Water1]
  }),
  new Pokemon({
    name: PokemonName.Palpitoad,
    dex: 536,
    type: TypeName.Water,
    type2: TypeName.Ground,
    abilities: {
      first: Ability.SwiftSwim,
      second: Ability.Hydration,
      hidden: Ability.WaterAbsorb
    },
    eggGroups: [EggGroup.Water1]
  }),
  new Pokemon({
    name: PokemonName.Seismitoad,
    dex: 537,
    type: TypeName.Water,
    type2: TypeName.Ground,
    abilities: {
      first: Ability.SwiftSwim,
      second: Ability.PoisonTouch,
      hidden: Ability.WaterAbsorb
    },
    eggGroups: [EggGroup.Water1]
  }),
  new Pokemon({
    name: PokemonName.Throh,
    dex: 538,
    type: TypeName.Fighting,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.Guts,
      second: Ability.InnerFocus,
      hidden: Ability.MoldBreaker
    },
    eggGroups: [EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Sawk,
    dex: 539,
    type: TypeName.Fighting,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.Sturdy,
      second: Ability.InnerFocus,
      hidden: Ability.MoldBreaker
    },
    eggGroups: [EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Sewaddle,
    dex: 540,
    type: TypeName.Bug,
    type2: TypeName.Grass,
    abilities: {
      first: Ability.Swarm,
      second: Ability.Chlorophyll,
      hidden: Ability.Overcoat
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Swadloon,
    dex: 541,
    type: TypeName.Bug,
    type2: TypeName.Grass,
    abilities: {
      first: Ability.LeafGuard,
      second: Ability.Chlorophyll,
      hidden: Ability.Overcoat
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Leavanny,
    dex: 542,
    type: TypeName.Bug,
    type2: TypeName.Grass,
    abilities: {
      first: Ability.Swarm,
      second: Ability.Chlorophyll,
      hidden: Ability.Overcoat
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Venipede,
    dex: 543,
    type: TypeName.Bug,
    type2: TypeName.Poison,
    abilities: {
      first: Ability.PoisonPoint,
      second: Ability.Swarm,
      hidden: Ability.SpeedBoost
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Whirlipede,
    dex: 544,
    type: TypeName.Bug,
    type2: TypeName.Poison,
    abilities: {
      first: Ability.PoisonPoint,
      second: Ability.Swarm,
      hidden: Ability.SpeedBoost
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Scolipede,
    dex: 545,
    type: TypeName.Bug,
    type2: TypeName.Poison,
    abilities: {
      first: Ability.PoisonPoint,
      second: Ability.Swarm,
      hidden: Ability.SpeedBoost
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Cottonee,
    dex: 546,
    type: TypeName.Grass,
    type2: TypeName.Fairy,
    abilities: {
      first: Ability.Prankster,
      second: Ability.Infiltrator,
      hidden: Ability.Chlorophyll
    },
    eggGroups: [EggGroup.Grass, EggGroup.Fairy]
  }),
  new Pokemon({
    name: PokemonName.Whimsicott,
    dex: 547,
    type: TypeName.Grass,
    type2: TypeName.Fairy,
    abilities: {
      first: Ability.Prankster,
      second: Ability.Infiltrator,
      hidden: Ability.Chlorophyll
    },
    eggGroups: [EggGroup.Grass, EggGroup.Fairy]
  }),
  new Pokemon({
    name: PokemonName.Petilil,
    dex: 548,
    type: TypeName.Grass,
    abilities: {
      first: Ability.Chlorophyll,
      second: Ability.OwnTempo,
      hidden: Ability.LeafGuard
    },
    eggGroups: [EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Lilligant,
    dex: 549,
    type: TypeName.Grass,
    abilities: {
      first: Ability.Chlorophyll,
      second: Ability.OwnTempo,
      hidden: Ability.LeafGuard
    },
    eggGroups: [EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Basculin,
    dex: 550,
    type: TypeName.Water,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.Reckless,
      second: Ability.Adaptability,
      hidden: Ability.MoldBreaker
    },
    eggGroups: [EggGroup.Water2],
    defaultForm: PokemonName.BasculinRed,
    forms: [
      {
        formName: PokemonName.BasculinBlue,
        category: Category.NonEvolve,
        abilities: {
          first: Ability.RockHead,
          second: Ability.Adaptability,
          hidden: Ability.MoldBreaker
        }
      },
      {
        formName: PokemonName.BasculinWhite,
        abilities: {
          first: Ability.Rattled,
          second: Ability.Adaptability,
          hidden: Ability.MoldBreaker
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Sandile,
    dex: 551,
    type: TypeName.Ground,
    type2: TypeName.Dark,
    abilities: {
      first: Ability.Intimidate,
      second: Ability.Moxie,
      hidden: Ability.AngerPoint
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Krokorok,
    dex: 552,
    type: TypeName.Ground,
    type2: TypeName.Dark,
    abilities: {
      first: Ability.Intimidate,
      second: Ability.Moxie,
      hidden: Ability.AngerPoint
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Krookodile,
    dex: 553,
    type: TypeName.Ground,
    type2: TypeName.Dark,
    abilities: {
      first: Ability.Intimidate,
      second: Ability.Moxie,
      hidden: Ability.AngerPoint
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Darumaka,
    dex: 554,
    type: TypeName.Fire,
    abilities: {
      first: Ability.Hustle,
      hidden: Ability.InnerFocus
    },
    eggGroups: [EggGroup.Field],
    forms: [
      {
        formName: PokemonName.GalarianDarumaka,
        type: TypeName.Ice
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Darmanitan,
    dex: 555,
    type: TypeName.Fire,
    type2: TypeName.Psychic,
    abilities: {
      first: Ability.SheerForce,
      hidden: Ability.ZenMode
    },
    eggGroups: [EggGroup.Field],
    forms: [
      {
        formName: PokemonName.DarmanitanZen,
        type: TypeName.Fire,
        type2: TypeName.Psychic
      },
      {
        formName: PokemonName.GalarianDarmanitan,
        type: TypeName.Ice,
        abilities: {
          first: Ability.GorillaTactics
        }
      },
      {
        formName: PokemonName.GalarianDarmanitanZen,
        type: TypeName.Ice,
        type2: TypeName.Fire
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Maractus,
    dex: 556,
    type: TypeName.Grass,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.WaterAbsorb,
      second: Ability.Chlorophyll,
      hidden: Ability.StormDrain
    },
    eggGroups: [EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Dwebble,
    dex: 557,
    type: TypeName.Bug,
    type2: TypeName.Rock,
    abilities: {
      first: Ability.Sturdy,
      second: Ability.ShellArmor,
      hidden: Ability.WeakArmor
    },
    eggGroups: [EggGroup.Bug, EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Crustle,
    dex: 558,
    type: TypeName.Bug,
    type2: TypeName.Rock,
    abilities: {
      first: Ability.Sturdy,
      second: Ability.ShellArmor,
      hidden: Ability.WeakArmor
    },
    eggGroups: [EggGroup.Bug, EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Scraggy,
    dex: 559,
    type: TypeName.Dark,
    type2: TypeName.Fighting,
    abilities: {
      first: Ability.ShedSkin,
      second: Ability.Moxie,
      hidden: Ability.Intimidate
    },
    eggGroups: [EggGroup.Field, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Scrafty,
    dex: 560,
    type: TypeName.Dark,
    type2: TypeName.Fighting,
    abilities: {
      first: Ability.ShedSkin,
      second: Ability.Moxie,
      hidden: Ability.Intimidate
    },
    eggGroups: [EggGroup.Field, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Sigilyph,
    dex: 561,
    type: TypeName.Psychic,
    type2: TypeName.Flying,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.WonderSkin,
      second: Ability.MagicGuard,
      hidden: Ability.TintedLens
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Yamask,
    dex: 562,
    type: TypeName.Ghost,
    abilities: {
      first: Ability.Mummy
    },
    eggGroups: [EggGroup.Mineral, EggGroup.Amorphous],
    forms: [
      {
        formName: PokemonName.GalarianYamask,
        type: TypeName.Ground,
        type2: TypeName.Ghost,
        abilities: {
          first: Ability.WanderingSpirit
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Cofagrigus,
    dex: 563,
    type: TypeName.Ghost,
    abilities: {
      first: Ability.Mummy
    },
    eggGroups: [EggGroup.Mineral, EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Tirtouga,
    dex: 564,
    type: TypeName.Water,
    type2: TypeName.Rock,
    category: Category.Fossil,
    abilities: {
      first: Ability.SolidRock,
      second: Ability.Sturdy,
      hidden: Ability.SwiftSwim
    },
    eggGroups: [EggGroup.Water1, EggGroup.Water3]
  }),
  new Pokemon({
    name: PokemonName.Carracosta,
    dex: 565,
    type: TypeName.Water,
    type2: TypeName.Rock,
    category: Category.Fossil,
    abilities: {
      first: Ability.SolidRock,
      second: Ability.Sturdy,
      hidden: Ability.SwiftSwim
    },
    eggGroups: [EggGroup.Water1, EggGroup.Water3]
  }),
  new Pokemon({
    name: PokemonName.Archen,
    dex: 566,
    type: TypeName.Rock,
    type2: TypeName.Flying,
    category: Category.Fossil,
    abilities: {
      first: Ability.Defeatist
    },
    eggGroups: [EggGroup.Flying, EggGroup.Water3]
  }),
  new Pokemon({
    name: PokemonName.Archeops,
    dex: 567,
    type: TypeName.Rock,
    type2: TypeName.Flying,
    category: Category.Fossil,
    abilities: {
      first: Ability.Defeatist
    },
    eggGroups: [EggGroup.Flying, EggGroup.Water3]
  }),
  new Pokemon({
    name: PokemonName.Trubbish,
    dex: 568,
    type: TypeName.Poison,
    abilities: {
      first: Ability.Stench,
      second: Ability.StickyHold,
      hidden: Ability.Aftermath
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Garbodor,
    dex: 569,
    type: TypeName.Poison,
    abilities: {
      first: Ability.Stench,
      second: Ability.WeakArmor,
      hidden: Ability.Aftermath
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Zorua,
    dex: 570,
    type: TypeName.Dark,
    abilities: {
      first: Ability.Illusion
    },
    eggGroups: [EggGroup.Field],
    forms: [
      {
        formName: PokemonName.HisuianZorua,
        type: TypeName.Normal,
        type2: TypeName.Ghost
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Zoroark,
    dex: 571,
    type: TypeName.Dark,
    abilities: {
      first: Ability.Illusion
    },
    eggGroups: [EggGroup.Field],
    forms: [
      {
        formName: PokemonName.HisuianZoroark,
        type: TypeName.Normal,
        type2: TypeName.Ghost
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Minccino,
    dex: 572,
    type: TypeName.Normal,
    abilities: {
      first: Ability.CuteCharm,
      second: Ability.Technician,
      hidden: Ability.SkillLink
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Cinccino,
    dex: 573,
    type: TypeName.Normal,
    abilities: {
      first: Ability.CuteCharm,
      second: Ability.Technician,
      hidden: Ability.SkillLink
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Gothita,
    dex: 574,
    type: TypeName.Psychic,
    abilities: {
      first: Ability.Frisk,
      second: Ability.Competitive,
      hidden: Ability.ShadowTag
    },
    eggGroups: [EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Gothorita,
    dex: 575,
    type: TypeName.Psychic,
    abilities: {
      first: Ability.Frisk,
      second: Ability.Competitive,
      hidden: Ability.ShadowTag
    },
    eggGroups: [EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Gothitelle,
    dex: 576,
    type: TypeName.Psychic,
    abilities: {
      first: Ability.Frisk,
      second: Ability.Competitive,
      hidden: Ability.ShadowTag
    },
    eggGroups: [EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Solosis,
    dex: 577,
    type: TypeName.Psychic,
    abilities: {
      first: Ability.Overcoat,
      second: Ability.MagicGuard,
      hidden: Ability.Regenerator
    },
    eggGroups: [EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Duosion,
    dex: 578,
    type: TypeName.Psychic,
    abilities: {
      first: Ability.Overcoat,
      second: Ability.MagicGuard,
      hidden: Ability.Regenerator
    },
    eggGroups: [EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Reuniclus,
    dex: 579,
    type: TypeName.Psychic,
    abilities: {
      first: Ability.Overcoat,
      second: Ability.MagicGuard,
      hidden: Ability.Regenerator
    },
    eggGroups: [EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Ducklett,
    dex: 580,
    type: TypeName.Water,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.KeenEye,
      second: Ability.BigPecks,
      hidden: Ability.Hydration
    },
    eggGroups: [EggGroup.Water1, EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Swanna,
    dex: 581,
    type: TypeName.Water,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.KeenEye,
      second: Ability.BigPecks,
      hidden: Ability.Hydration
    },
    eggGroups: [EggGroup.Water1, EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Vanillite,
    dex: 582,
    type: TypeName.Ice,
    abilities: {
      first: Ability.IceBody,
      second: Ability.SnowCloak,
      hidden: Ability.WeakArmor
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Vanillish,
    dex: 583,
    type: TypeName.Ice,
    abilities: {
      first: Ability.IceBody,
      second: Ability.SnowCloak,
      hidden: Ability.WeakArmor
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Vanilluxe,
    dex: 584,
    type: TypeName.Ice,
    abilities: {
      first: Ability.IceBody,
      second: Ability.SnowWarning,
      hidden: Ability.WeakArmor
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Deerling,
    dex: 585,
    type: TypeName.Normal,
    type2: TypeName.Grass,
    abilities: {
      first: Ability.Chlorophyll,
      second: Ability.SapSipper,
      hidden: Ability.SereneGrace
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Sawsbuck,
    dex: 586,
    type: TypeName.Normal,
    type2: TypeName.Grass,
    abilities: {
      first: Ability.Chlorophyll,
      second: Ability.SapSipper,
      hidden: Ability.SereneGrace
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Emolga,
    dex: 587,
    type: TypeName.Electric,
    type2: TypeName.Flying,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.Static,
      hidden: Ability.MotorDrive
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Karrablast,
    dex: 588,
    type: TypeName.Bug,
    abilities: {
      first: Ability.Swarm,
      second: Ability.ShedSkin,
      hidden: Ability.NoGuard
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Escavalier,
    dex: 589,
    type: TypeName.Bug,
    type2: TypeName.Steel,
    abilities: {
      first: Ability.Swarm,
      second: Ability.ShellArmor,
      hidden: Ability.Overcoat
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Foongus,
    dex: 590,
    type: TypeName.Grass,
    type2: TypeName.Poison,
    abilities: {
      first: Ability.EffectSpore,
      hidden: Ability.Regenerator
    },
    eggGroups: [EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Amoonguss,
    dex: 591,
    type: TypeName.Grass,
    type2: TypeName.Poison,
    abilities: {
      first: Ability.EffectSpore,
      hidden: Ability.Regenerator
    },
    eggGroups: [EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Frillish,
    dex: 592,
    type: TypeName.Water,
    type2: TypeName.Ghost,
    abilities: {
      first: Ability.WaterAbsorb,
      second: Ability.CursedBody,
      hidden: Ability.Damp
    },
    eggGroups: [EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Jellicent,
    dex: 593,
    type: TypeName.Water,
    type2: TypeName.Ghost,
    abilities: {
      first: Ability.WaterAbsorb,
      second: Ability.CursedBody,
      hidden: Ability.Damp
    },
    eggGroups: [EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Alomomola,
    dex: 594,
    type: TypeName.Water,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.Healer,
      second: Ability.Hydration,
      hidden: Ability.Regenerator
    },
    eggGroups: [EggGroup.Water1, EggGroup.Water2]
  }),
  new Pokemon({
    name: PokemonName.Joltik,
    dex: 595,
    type: TypeName.Bug,
    type2: TypeName.Electric,
    abilities: {
      first: Ability.CompoundEyes,
      second: Ability.Unnerve,
      hidden: Ability.Swarm
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Galvantula,
    dex: 596,
    type: TypeName.Bug,
    type2: TypeName.Electric,
    abilities: {
      first: Ability.CompoundEyes,
      second: Ability.Unnerve,
      hidden: Ability.Swarm
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Ferroseed,
    dex: 597,
    type: TypeName.Grass,
    type2: TypeName.Steel,
    abilities: {
      first: Ability.IronBarbs
    },
    eggGroups: [EggGroup.Grass, EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Ferrothorn,
    dex: 598,
    type: TypeName.Grass,
    type2: TypeName.Steel,
    abilities: {
      first: Ability.IronBarbs,
      hidden: Ability.Anticipation
    },
    eggGroups: [EggGroup.Grass, EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Klink,
    dex: 599,
    type: TypeName.Steel,
    abilities: {
      first: Ability.Plus,
      second: Ability.Minus,
      hidden: Ability.ClearBody
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Klang,
    dex: 600,
    type: TypeName.Steel,
    abilities: {
      first: Ability.Plus,
      second: Ability.Minus,
      hidden: Ability.ClearBody
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Klinklang,
    dex: 601,
    type: TypeName.Steel,
    abilities: {
      first: Ability.Plus,
      second: Ability.Minus,
      hidden: Ability.ClearBody
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Tynamo,
    dex: 602,
    type: TypeName.Electric,
    abilities: {
      first: Ability.Levitate
    },
    eggGroups: [EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Eelektrik,
    dex: 603,
    type: TypeName.Electric,
    abilities: {
      first: Ability.Levitate
    },
    eggGroups: [EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Eelektross,
    dex: 604,
    type: TypeName.Electric,
    abilities: {
      first: Ability.Levitate
    },
    eggGroups: [EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Elgyem,
    dex: 605,
    type: TypeName.Psychic,
    abilities: {
      first: Ability.Telepathy,
      second: Ability.Synchronize,
      hidden: Ability.Analytic
    },
    eggGroups: [EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Beheeyem,
    dex: 606,
    type: TypeName.Psychic,
    abilities: {
      first: Ability.Telepathy,
      second: Ability.Synchronize,
      hidden: Ability.Analytic
    },
    eggGroups: [EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Litwick,
    dex: 607,
    type: TypeName.Ghost,
    type2: TypeName.Fire,
    abilities: {
      first: Ability.FlashFire,
      second: Ability.FlameBody,
      hidden: Ability.Infiltrator
    },
    eggGroups: [EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Lampent,
    dex: 608,
    type: TypeName.Ghost,
    type2: TypeName.Fire,
    abilities: {
      first: Ability.FlashFire,
      second: Ability.FlameBody,
      hidden: Ability.Infiltrator
    },
    eggGroups: [EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Chandelure,
    dex: 609,
    type: TypeName.Ghost,
    type2: TypeName.Fire,
    abilities: {
      first: Ability.FlashFire,
      second: Ability.FlameBody,
      hidden: Ability.Infiltrator
    },
    eggGroups: [EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Axew,
    dex: 610,
    type: TypeName.Dragon,
    abilities: {
      first: Ability.Rivalry,
      second: Ability.MoldBreaker,
      hidden: Ability.Unnerve
    },
    eggGroups: [EggGroup.Monster, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Fraxure,
    dex: 611,
    type: TypeName.Dragon,
    abilities: {
      first: Ability.Rivalry,
      second: Ability.MoldBreaker,
      hidden: Ability.Unnerve
    },
    eggGroups: [EggGroup.Monster, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Haxorus,
    dex: 612,
    type: TypeName.Dragon,
    abilities: {
      first: Ability.Rivalry,
      second: Ability.MoldBreaker,
      hidden: Ability.Unnerve
    },
    eggGroups: [EggGroup.Monster, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Cubchoo,
    dex: 613,
    type: TypeName.Ice,
    abilities: {
      first: Ability.SnowCloak,
      second: Ability.SlushRush,
      hidden: Ability.Rattled
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Beartic,
    dex: 614,
    type: TypeName.Ice,
    abilities: {
      first: Ability.SnowCloak,
      second: Ability.SlushRush,
      hidden: Ability.SwiftSwim
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Cryogonal,
    dex: 615,
    type: TypeName.Ice,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.Levitate
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Shelmet,
    dex: 616,
    type: TypeName.Bug,
    abilities: {
      first: Ability.Hydration,
      second: Ability.ShellArmor,
      hidden: Ability.Overcoat
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Accelgor,
    dex: 617,
    type: TypeName.Bug,
    abilities: {
      first: Ability.Hydration,
      second: Ability.StickyHold,
      hidden: Ability.Unburden
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Stunfisk,
    dex: 618,
    type: TypeName.Ground,
    type2: TypeName.Electric,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.Static,
      second: Ability.Limber,
      hidden: Ability.SandVeil
    },
    eggGroups: [EggGroup.Water1, EggGroup.Amorphous],
    forms: [
      {
        formName: PokemonName.GalarianStunfisk,
        type: TypeName.Ground,
        type2: TypeName.Steel,
        category: Category.NonEvolve,
        abilities: {
          first: Ability.Mimicry
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Mienfoo,
    dex: 619,
    type: TypeName.Fighting,
    abilities: {
      first: Ability.InnerFocus,
      second: Ability.Regenerator,
      hidden: Ability.Reckless
    },
    eggGroups: [EggGroup.Field, EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Mienshao,
    dex: 620,
    type: TypeName.Fighting,
    abilities: {
      first: Ability.InnerFocus,
      second: Ability.Regenerator,
      hidden: Ability.Reckless
    },
    eggGroups: [EggGroup.Field, EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Druddigon,
    dex: 621,
    type: TypeName.Dragon,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.RoughSkin,
      second: Ability.SheerForce,
      hidden: Ability.MoldBreaker
    },
    eggGroups: [EggGroup.Dragon, EggGroup.Monster]
  }),
  new Pokemon({
    name: PokemonName.Golett,
    dex: 622,
    type: TypeName.Ground,
    type2: TypeName.Ghost,
    abilities: {
      first: Ability.IronFist,
      second: Ability.Klutz,
      hidden: Ability.NoGuard
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Golurk,
    dex: 623,
    type: TypeName.Ground,
    type2: TypeName.Ghost,
    abilities: {
      first: Ability.IronFist,
      second: Ability.Klutz,
      hidden: Ability.NoGuard
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Pawniard,
    dex: 624,
    type: TypeName.Dark,
    type2: TypeName.Steel,
    abilities: {
      first: Ability.Defiant,
      second: Ability.InnerFocus,
      hidden: Ability.Pressure
    },
    eggGroups: [EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Bisharp,
    dex: 625,
    type: TypeName.Dark,
    type2: TypeName.Steel,
    abilities: {
      first: Ability.Defiant,
      second: Ability.InnerFocus,
      hidden: Ability.Pressure
    },
    eggGroups: [EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Bouffalant,
    dex: 626,
    type: TypeName.Normal,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.Reckless,
      second: Ability.SapSipper,
      hidden: Ability.Soundproof
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Rufflet,
    dex: 627,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.KeenEye,
      second: Ability.SheerForce,
      hidden: Ability.Hustle
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Braviary,
    dex: 628,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.KeenEye,
      second: Ability.SheerForce,
      hidden: Ability.Defiant
    },
    eggGroups: [EggGroup.Flying],
    forms: [
      {
        formName: PokemonName.HisuianBraviary,
        type: TypeName.Psychic,
        type2: TypeName.Flying,
        abilities: {
          first: Ability.KeenEye,
          second: Ability.SheerForce,
          hidden: Ability.TintedLens
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Vullaby,
    dex: 629,
    type: TypeName.Dark,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.BigPecks,
      second: Ability.Overcoat,
      hidden: Ability.WeakArmor
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Mandibuzz,
    dex: 630,
    type: TypeName.Dark,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.BigPecks,
      second: Ability.Overcoat,
      hidden: Ability.WeakArmor
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Heatmor,
    dex: 631,
    type: TypeName.Fire,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.Gluttony,
      second: Ability.FlashFire,
      hidden: Ability.WhiteSmoke
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Durant,
    dex: 632,
    type: TypeName.Bug,
    type2: TypeName.Steel,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.Swarm,
      second: Ability.Hustle,
      hidden: Ability.Truant
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Deino,
    dex: 633,
    type: TypeName.Dark,
    type2: TypeName.Dragon,
    abilities: {
      first: Ability.Hustle
    },
    eggGroups: [EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Zweilous,
    dex: 634,
    type: TypeName.Dark,
    type2: TypeName.Dragon,
    abilities: {
      first: Ability.Hustle
    },
    eggGroups: [EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Hydreigon,
    dex: 635,
    type: TypeName.Dark,
    type2: TypeName.Dragon,
    abilities: {
      first: Ability.Levitate
    },
    eggGroups: [EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Larvesta,
    dex: 636,
    type: TypeName.Bug,
    type2: TypeName.Fire,
    abilities: {
      first: Ability.FlameBody,
      hidden: Ability.Swarm
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Volcarona,
    dex: 637,
    type: TypeName.Bug,
    type2: TypeName.Fire,
    abilities: {
      first: Ability.FlameBody,
      hidden: Ability.Swarm
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Cobalion,
    dex: 638,
    type: TypeName.Steel,
    type2: TypeName.Fighting,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.Justified
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Terrakion,
    dex: 639,
    type: TypeName.Ground,
    type2: TypeName.Fighting,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.Justified
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Virizion,
    dex: 640,
    type: TypeName.Grass,
    type2: TypeName.Fighting,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.Justified
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Tornadus,
    dex: 641,
    type: TypeName.Flying,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.Prankster,
      hidden: Ability.Defiant
    },
    eggGroups: [EggGroup.NoEggs],
    defaultForm: PokemonName.TornadusIncarnate,
    forms: [
      {
        formName: PokemonName.TornadusTherian,
        category: [Category.Legendary, Category.NonEvolve],
        abilities: {
          first: Ability.Prankster,
          hidden: Ability.Regenerator
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Thundurus,
    dex: 642,
    type: TypeName.Electric,
    type2: TypeName.Flying,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.Prankster,
      hidden: Ability.Defiant
    },
    eggGroups: [EggGroup.NoEggs],
    defaultForm: PokemonName.ThundurusIncarnate,
    forms: [
      {
        formName: PokemonName.ThundurusTherian,
        category: [Category.Legendary, Category.NonEvolve],
        abilities: {
          first: Ability.Prankster,
          hidden: Ability.VoltAbsorb
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Reshiram,
    dex: 643,
    type: TypeName.Dragon,
    type2: TypeName.Fire,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.Turboblaze
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Zekrom,
    dex: 644,
    type: TypeName.Dragon,
    type2: TypeName.Electric,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.Teravolt
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Landorus,
    dex: 645,
    type: TypeName.Ground,
    type2: TypeName.Flying,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.SandForce,
      hidden: Ability.SheerForce
    },
    eggGroups: [EggGroup.NoEggs],
    defaultForm: PokemonName.LandorusIncarnate,
    forms: [
      {
        formName: PokemonName.LandorusTherian,
        category: [Category.Legendary, Category.NonEvolve],
        abilities: {
          first: Ability.SandForce,
          hidden: Ability.Intimidate
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Kyurem,
    dex: 646,
    type: TypeName.Dragon,
    type2: TypeName.Ice,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.Pressure
    },
    eggGroups: [EggGroup.NoEggs],
    forms: [
      {
        formName: PokemonName.KyuremWhite,
        category: [Category.Legendary, Category.NonEvolve],
        abilities: {
          first: Ability.Turboblaze
        }
      },
      {
        formName: PokemonName.KyuremBlack,
        category: [Category.Legendary, Category.NonEvolve],
        abilities: {
          first: Ability.Teravolt
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Keldeo,
    dex: 647,
    type: TypeName.Water,
    type2: TypeName.Fighting,
    category: [Category.Mythical, Category.NonEvolve],
    abilities: {
      first: Ability.Justified
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Meloetta,
    dex: 648,
    type: TypeName.Normal,
    type2: TypeName.Psychic,
    category: [Category.Mythical, Category.NonEvolve],
    abilities: {
      first: Ability.SereneGrace
    },
    eggGroups: [EggGroup.NoEggs],
    defaultForm: PokemonName.MeloettaAria,
    forms: [
      {
        formName: PokemonName.MeloettaPirouette,
        type: TypeName.Normal,
        type2: TypeName.Fighting
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Genesect,
    dex: 649,
    type: TypeName.Bug,
    type2: TypeName.Steel,
    category: [Category.Mythical, Category.NonEvolve],
    abilities: {
      first: Ability.Download
    },
    eggGroups: [EggGroup.NoEggs]
  })
];
