import { mapNamesToPokemon } from "../../api/pokemonApi";
import { Pokemon } from "../../classes/Pokemon";
import { Category, EggGroup, PokemonName, Type } from "../../enums";

export const gen5Pokemon = (): Pokemon[] =>
  mapNamesToPokemon([
    {
      name: PokemonName.Victini,
      dex: 494,
      type: Type.Psychic,
      type2: Type.Fire,
      category: [Category.NonEvolving, Category.Mythical],

      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Snivy,
      dex: 495,
      type: Type.Grass,
      category: Category.Starter,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.Grass
    },
    {
      name: PokemonName.Servine,
      dex: 496,
      type: Type.Grass,
      category: Category.Starter,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.Grass
    },
    {
      name: PokemonName.Serperior,
      dex: 497,
      type: Type.Grass,
      category: Category.Starter,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.Grass
    },
    {
      name: PokemonName.Tepig,
      dex: 498,
      type: Type.Fire,
      category: Category.Starter,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Pignite,
      dex: 499,
      type: Type.Fire,
      type2: Type.Fighting,
      category: Category.Starter,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Emboar,
      dex: 500,
      type: Type.Fire,
      type2: Type.Fighting,
      category: Category.Starter,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Oshawott,
      dex: 501,
      type: Type.Water,
      category: Category.Starter,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Dewott,
      dex: 502,
      type: Type.Water,
      category: Category.Starter,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Samurott,
      dex: 503,
      type: Type.Water,
      category: Category.Starter,
      eggGroup1: EggGroup.Field,
      regionalVariants: [
        {
          name: PokemonName.HisuianSamurott,
          type: Type.Water,
          type2: Type.Dark,
          category: Category.Starter
        }
      ]
    },
    {
      name: PokemonName.Patrat,
      dex: 504,
      type: Type.Normal,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Watchog,
      dex: 505,
      type: Type.Normal,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Lillipup,
      dex: 506,
      type: Type.Normal,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Herdier,
      dex: 507,
      type: Type.Normal,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Stoutland,
      dex: 508,
      type: Type.Normal,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Purrloin,
      dex: 509,
      type: Type.Dark,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Liepard,
      dex: 510,
      type: Type.Dark,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Pansage,
      dex: 511,
      type: Type.Grass,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Simisage,
      dex: 512,
      type: Type.Grass,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Pansear,
      dex: 513,
      type: Type.Fire,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Simisear,
      dex: 514,
      type: Type.Fire,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Panpour,
      dex: 515,
      type: Type.Water,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Simipour,
      dex: 516,
      type: Type.Water,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Munna,
      dex: 517,
      type: Type.Psychic,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Musharna,
      dex: 518,
      type: Type.Psychic,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Pidove,
      dex: 519,
      type: Type.Normal,
      type2: Type.Flying,
      eggGroup1: EggGroup.Flying
    },
    {
      name: PokemonName.Tranquill,
      dex: 520,
      type: Type.Normal,
      type2: Type.Flying,
      eggGroup1: EggGroup.Flying
    },
    {
      name: PokemonName.Unfezant,
      dex: 521,
      type: Type.Normal,
      type2: Type.Flying,
      eggGroup1: EggGroup.Flying
    },
    {
      name: PokemonName.Blitzle,
      dex: 522,
      type: Type.Electric,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Zebstrika,
      dex: 523,
      type: Type.Electric,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Roggenrola,
      dex: 524,
      type: Type.Rock,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Boldore,
      dex: 525,
      type: Type.Rock,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Gigalith,
      dex: 526,
      type: Type.Rock,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Woobat,
      dex: 527,
      type: Type.Psychic,
      type2: Type.Flying,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.Flying
    },
    {
      name: PokemonName.Swoobat,
      dex: 528,
      type: Type.Psychic,
      type2: Type.Flying,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.Flying
    },
    {
      name: PokemonName.Drilbur,
      dex: 529,
      type: Type.Ground,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Excadrill,
      dex: 530,
      type: Type.Ground,
      type2: Type.Steel,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Audino,
      dex: 531,
      type: Type.Normal,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Fairy
    },
    {
      name: PokemonName.Timburr,
      dex: 532,
      type: Type.Fighting,
      eggGroup1: EggGroup.HumanLike
    },
    {
      name: PokemonName.Gurdurr,
      dex: 533,
      type: Type.Fighting,
      eggGroup1: EggGroup.HumanLike
    },
    {
      name: PokemonName.Conkeldurr,
      dex: 534,
      type: Type.Fighting,
      eggGroup1: EggGroup.HumanLike
    },
    {
      name: PokemonName.Tympole,
      dex: 535,
      type: Type.Water,
      eggGroup1: EggGroup.Water1
    },
    {
      name: PokemonName.Palpitoad,
      dex: 536,
      type: Type.Water,
      type2: Type.Ground,
      eggGroup1: EggGroup.Water1
    },
    {
      name: PokemonName.Seismitoad,
      dex: 537,
      type: Type.Water,
      type2: Type.Ground,
      eggGroup1: EggGroup.Water1
    },
    {
      name: PokemonName.Throh,
      dex: 538,
      type: Type.Fighting,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.HumanLike
    },
    {
      name: PokemonName.Sawk,
      dex: 539,
      type: Type.Fighting,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.HumanLike
    },
    {
      name: PokemonName.Sewaddle,
      dex: 540,
      type: Type.Bug,
      type2: Type.Grass,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Swadloon,
      dex: 541,
      type: Type.Bug,
      type2: Type.Grass,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Leavanny,
      dex: 542,
      type: Type.Bug,
      type2: Type.Grass,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Venipede,
      dex: 543,
      type: Type.Bug,
      type2: Type.Poison,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Whirlipede,
      dex: 544,
      type: Type.Bug,
      type2: Type.Poison,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Scolipede,
      dex: 545,
      type: Type.Bug,
      type2: Type.Poison,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Cottonee,
      dex: 546,
      type: Type.Grass,
      type2: Type.Fairy,
      eggGroup1: EggGroup.Grass,
      eggGroup2: EggGroup.Fairy
    },
    {
      name: PokemonName.Whimsicott,
      dex: 547,
      type: Type.Grass,
      type2: Type.Fairy,
      eggGroup1: EggGroup.Grass,
      eggGroup2: EggGroup.Fairy
    },
    {
      name: PokemonName.Petilil,
      dex: 548,
      type: Type.Grass,
      eggGroup1: EggGroup.Grass
    },
    {
      name: PokemonName.Lilligant,
      dex: 549,
      type: Type.Grass,
      eggGroup1: EggGroup.Grass
    },
    {
      name: PokemonName.Basculin,
      dex: 550,
      type: Type.Water,
      category: Category.NonEvolving,

      eggGroup1: EggGroup.Water2,
      mustHaveForm: true,
      alternateForms: [
        {
          name: PokemonName.BasculinRed,
          type: Type.Water,
          category: Category.NonEvolving
        },
        {
          name: PokemonName.BasculinBlue,
          type: Type.Water,
          category: Category.NonEvolving
        },
        {
          name: PokemonName.BasculinWhite,
          type: Type.Water
        }
      ]
    },
    {
      name: PokemonName.Sandile,
      dex: 551,
      type: Type.Ground,
      type2: Type.Dark,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Krokorok,
      dex: 552,
      type: Type.Ground,
      type2: Type.Dark,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Krookodile,
      dex: 553,
      type: Type.Ground,
      type2: Type.Dark,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Darumaka,
      dex: 554,
      type: Type.Fire,
      eggGroup1: EggGroup.Field,
      regionalVariants: [
        {
          name: PokemonName.GalarianDarumaka,
          type: Type.Ice
        }
      ]
    },
    {
      name: PokemonName.Darmanitan,
      dex: 555,
      type: Type.Fire,
      type2: Type.Psychic,
      eggGroup1: EggGroup.Field,
      alternateForms: [
        {
          name: PokemonName.DarmanitanZen,
          type: Type.Fire,
          type2: Type.Psychic
        }
      ],
      regionalVariants: [
        {
          name: PokemonName.GalarianDarmanitan,
          type: Type.Ice
        },
        {
          name: PokemonName.GalarianDarmanitanZen,
          type: Type.Ice
        }
      ]
    },
    {
      name: PokemonName.Maractus,
      dex: 556,
      type: Type.Grass,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Grass
    },
    {
      name: PokemonName.Dwebble,
      dex: 557,
      type: Type.Bug,
      type2: Type.Rock,
      eggGroup1: EggGroup.Bug,
      eggGroup2: EggGroup.Mineral
    },
    {
      name: PokemonName.Crustle,
      dex: 558,
      type: Type.Bug,
      type2: Type.Rock,
      eggGroup1: EggGroup.Bug,
      eggGroup2: EggGroup.Mineral
    },
    {
      name: PokemonName.Scraggy,
      dex: 559,
      type: Type.Dark,
      type2: Type.Fighting,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Scrafty,
      dex: 560,
      type: Type.Dark,
      type2: Type.Fighting,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Sigilyph,
      dex: 561,
      type: Type.Psychic,
      type2: Type.Flying,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Flying
    },
    {
      name: PokemonName.Yamask,
      dex: 562,
      type: Type.Ghost,
      eggGroup1: EggGroup.Mineral,
      eggGroup2: EggGroup.Amorphous,
      regionalVariants: [
        {
          name: PokemonName.GalarianYamask,
          type: Type.Ground,
          type2: Type.Ghost
        }
      ]
    },
    {
      name: PokemonName.Cofagrigus,
      dex: 563,
      type: Type.Ghost,

      eggGroup1: EggGroup.Mineral,
      eggGroup2: EggGroup.Amorphous
    },
    {
      name: PokemonName.Tirtouga,
      dex: 564,
      type: Type.Water,
      type2: Type.Rock,
      category: Category.Fossil,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Water3
    },
    {
      name: PokemonName.Carracosta,
      dex: 565,
      type: Type.Water,
      type2: Type.Rock,
      category: Category.Fossil,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Water3
    },
    {
      name: PokemonName.Archen,
      dex: 566,
      type: Type.Rock,
      type2: Type.Flying,
      category: Category.Fossil,

      eggGroup1: EggGroup.Flying,
      eggGroup2: EggGroup.Water3
    },
    {
      name: PokemonName.Archeops,
      dex: 567,
      type: Type.Rock,
      type2: Type.Flying,
      category: Category.Fossil,

      eggGroup1: EggGroup.Flying,
      eggGroup2: EggGroup.Water3
    },
    {
      name: PokemonName.Trubbish,
      dex: 568,
      type: Type.Poison,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Garbodor,
      dex: 569,
      type: Type.Poison,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Zorua,
      dex: 570,
      type: Type.Dark,

      eggGroup1: EggGroup.Field,
      regionalVariants: [
        {
          name: PokemonName.HisuianZorua,
          type: Type.Normal,
          type2: Type.Ghost
        }
      ]
    },
    {
      name: PokemonName.Zoroark,
      dex: 571,
      type: Type.Dark,

      eggGroup1: EggGroup.Field,
      regionalVariants: [
        {
          name: PokemonName.HisuianZoroark,
          type: Type.Normal,
          type2: Type.Ghost
        }
      ]
    },
    {
      name: PokemonName.Minccino,
      dex: 572,
      type: Type.Normal,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Cinccino,
      dex: 573,
      type: Type.Normal,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Gothita,
      dex: 574,
      type: Type.Psychic,
      eggGroup1: EggGroup.HumanLike
    },
    {
      name: PokemonName.Gothorita,
      dex: 575,
      type: Type.Psychic,
      eggGroup1: EggGroup.HumanLike
    },
    {
      name: PokemonName.Gothitelle,
      dex: 576,
      type: Type.Psychic,
      eggGroup1: EggGroup.HumanLike
    },
    {
      name: PokemonName.Solosis,
      dex: 577,
      type: Type.Psychic,
      eggGroup1: EggGroup.Amorphous
    },
    {
      name: PokemonName.Duosion,
      dex: 578,
      type: Type.Psychic,
      eggGroup1: EggGroup.Amorphous
    },
    {
      name: PokemonName.Reuniclus,
      dex: 579,
      type: Type.Psychic,
      eggGroup1: EggGroup.Amorphous
    },
    {
      name: PokemonName.Ducklett,
      dex: 580,
      type: Type.Water,
      type2: Type.Flying,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Flying
    },
    {
      name: PokemonName.Swanna,
      dex: 581,
      type: Type.Water,
      type2: Type.Flying,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Flying
    },
    {
      name: PokemonName.Vanillite,
      dex: 582,
      type: Type.Ice,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Vanillish,
      dex: 583,
      type: Type.Ice,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Vanilluxe,
      dex: 584,
      type: Type.Ice,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Deerling,
      dex: 585,
      type: Type.Normal,
      type2: Type.Grass,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Sawsbuck,
      dex: 586,
      type: Type.Normal,
      type2: Type.Grass,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Emolga,
      dex: 587,
      type: Type.Electric,
      type2: Type.Flying,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Karrablast,
      dex: 588,
      type: Type.Bug,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Escavalier,
      dex: 589,
      type: Type.Bug,
      type2: Type.Steel,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Foongus,
      dex: 590,
      type: Type.Grass,
      type2: Type.Poison,
      eggGroup1: EggGroup.Grass
    },
    {
      name: PokemonName.Amoonguss,
      dex: 591,
      type: Type.Grass,
      type2: Type.Poison,
      eggGroup1: EggGroup.Grass
    },
    {
      name: PokemonName.Frillish,
      dex: 592,
      type: Type.Water,
      type2: Type.Ghost,
      eggGroup1: EggGroup.Amorphous
    },
    {
      name: PokemonName.Jellicent,
      dex: 593,
      type: Type.Water,
      type2: Type.Ghost,
      eggGroup1: EggGroup.Amorphous
    },
    {
      name: PokemonName.Alomomola,
      dex: 594,
      type: Type.Water,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Water2
    },
    {
      name: PokemonName.Joltik,
      dex: 595,
      type: Type.Bug,
      type2: Type.Electric,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Galvantula,
      dex: 596,
      type: Type.Bug,
      type2: Type.Electric,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Ferroseed,
      dex: 597,
      type: Type.Grass,
      type2: Type.Steel,

      eggGroup1: EggGroup.Grass,
      eggGroup2: EggGroup.Mineral
    },
    {
      name: PokemonName.Ferrothorn,
      dex: 598,
      type: Type.Grass,
      type2: Type.Steel,
      eggGroup1: EggGroup.Grass,
      eggGroup2: EggGroup.Mineral
    },
    {
      name: PokemonName.Klink,
      dex: 599,
      type: Type.Steel,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Klang,
      dex: 600,
      type: Type.Steel,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Klinklang,
      dex: 601,
      type: Type.Steel,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Tynamo,
      dex: 602,
      type: Type.Electric,

      eggGroup1: EggGroup.Amorphous
    },
    {
      name: PokemonName.Eelektrik,
      dex: 603,
      type: Type.Electric,

      eggGroup1: EggGroup.Amorphous
    },
    {
      name: PokemonName.Eelektross,
      dex: 604,
      type: Type.Electric,

      eggGroup1: EggGroup.Amorphous
    },
    {
      name: PokemonName.Elgyem,
      dex: 605,
      type: Type.Psychic,
      eggGroup1: EggGroup.HumanLike
    },
    {
      name: PokemonName.Beheeyem,
      dex: 606,
      type: Type.Psychic,
      eggGroup1: EggGroup.HumanLike
    },
    {
      name: PokemonName.Litwick,
      dex: 607,
      type: Type.Ghost,
      type2: Type.Fire,
      eggGroup1: EggGroup.Amorphous
    },
    {
      name: PokemonName.Lampent,
      dex: 608,
      type: Type.Ghost,
      type2: Type.Fire,
      eggGroup1: EggGroup.Amorphous
    },
    {
      name: PokemonName.Chandelure,
      dex: 609,
      type: Type.Ghost,
      type2: Type.Fire,
      eggGroup1: EggGroup.Amorphous
    },
    {
      name: PokemonName.Axew,
      dex: 610,
      type: Type.Dragon,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Fraxure,
      dex: 611,
      type: Type.Dragon,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Haxorus,
      dex: 612,
      type: Type.Dragon,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Cubchoo,
      dex: 613,
      type: Type.Ice,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Beartic,
      dex: 614,
      type: Type.Ice,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Cryogonal,
      dex: 615,
      type: Type.Ice,
      category: Category.NonEvolving,

      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Shelmet,
      dex: 616,
      type: Type.Bug,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Accelgor,
      dex: 617,
      type: Type.Bug,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Stunfisk,
      dex: 618,
      type: Type.Ground,
      type2: Type.Electric,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Amorphous,
      regionalVariants: [
        {
          name: PokemonName.GalarianStunfisk,
          type: Type.Ground,
          type2: Type.Steel,
          category: Category.NonEvolving
        }
      ]
    },
    {
      name: PokemonName.Mienfoo,
      dex: 619,
      type: Type.Fighting,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.HumanLike
    },
    {
      name: PokemonName.Mienshao,
      dex: 620,
      type: Type.Fighting,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.HumanLike
    },
    {
      name: PokemonName.Druddigon,
      dex: 621,
      type: Type.Dragon,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Dragon,
      eggGroup2: EggGroup.Monster
    },
    {
      name: PokemonName.Golett,
      dex: 622,
      type: Type.Ground,
      type2: Type.Ghost,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Golurk,
      dex: 623,
      type: Type.Ground,
      type2: Type.Ghost,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Pawniard,
      dex: 624,
      type: Type.Dark,
      type2: Type.Steel,
      eggGroup1: EggGroup.HumanLike
    },
    {
      name: PokemonName.Bisharp,
      dex: 625,
      type: Type.Dark,
      type2: Type.Steel,
      eggGroup1: EggGroup.HumanLike
    },
    {
      name: PokemonName.Bouffalant,
      dex: 626,
      type: Type.Normal,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Rufflet,
      dex: 627,
      type: Type.Normal,
      type2: Type.Flying,
      eggGroup1: EggGroup.Flying
    },
    {
      name: PokemonName.Braviary,
      dex: 628,
      type: Type.Normal,
      type2: Type.Flying,
      eggGroup1: EggGroup.Flying,
      regionalVariants: [
        {
          name: PokemonName.HisuianBraviary,
          type: Type.Psychic,
          type2: Type.Flying
        }
      ]
    },
    {
      name: PokemonName.Vullaby,
      dex: 629,
      type: Type.Dark,
      type2: Type.Flying,
      eggGroup1: EggGroup.Flying
    },
    {
      name: PokemonName.Mandibuzz,
      dex: 630,
      type: Type.Dark,
      type2: Type.Flying,
      eggGroup1: EggGroup.Flying
    },
    {
      name: PokemonName.Heatmor,
      dex: 631,
      type: Type.Fire,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Durant,
      dex: 632,
      type: Type.Bug,
      type2: Type.Steel,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Deino,
      dex: 633,
      type: Type.Dark,
      type2: Type.Dragon,

      eggGroup1: EggGroup.Dragon
    },
    {
      name: PokemonName.Zweilous,
      dex: 634,
      type: Type.Dark,
      type2: Type.Dragon,

      eggGroup1: EggGroup.Dragon
    },
    {
      name: PokemonName.Hydreigon,
      dex: 635,
      type: Type.Dark,
      type2: Type.Dragon,

      eggGroup1: EggGroup.Dragon
    },
    {
      name: PokemonName.Larvesta,
      dex: 636,
      type: Type.Bug,
      type2: Type.Fire,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Volcarona,
      dex: 637,
      type: Type.Bug,
      type2: Type.Fire,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Cobalion,
      dex: 638,
      type: Type.Steel,
      type2: Type.Fighting,
      category: [Category.NonEvolving, Category.Legendary],

      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Terrakion,
      dex: 639,
      type: Type.Ground,
      type2: Type.Fighting,
      category: [Category.NonEvolving, Category.Legendary],

      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Virizion,
      dex: 640,
      type: Type.Grass,
      type2: Type.Fighting,
      category: [Category.NonEvolving, Category.Legendary],

      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Tornadus,
      dex: 641,
      type: Type.Flying,
      category: [Category.NonEvolving, Category.Legendary],

      eggGroup1: EggGroup.NoEggs,
      mustHaveForm: true,
      alternateForms: [
        {
          name: PokemonName.TornadusIncarnate,
          type: Type.Flying,
          category: [Category.NonEvolving, Category.Legendary]
        },
        {
          name: PokemonName.TornadusTherian,
          type: Type.Flying,
          category: [Category.NonEvolving, Category.Legendary]
        }
      ]
    },
    {
      name: PokemonName.Thundurus,
      dex: 642,
      type: Type.Electric,
      type2: Type.Flying,
      category: [Category.NonEvolving, Category.Legendary],

      eggGroup1: EggGroup.NoEggs,
      mustHaveForm: true,
      alternateForms: [
        {
          name: PokemonName.ThundurusIncarnate,
          type: Type.Electric,
          type2: Type.Flying,
          category: [Category.NonEvolving, Category.Legendary]
        },
        {
          name: PokemonName.ThundurusTherian,
          type: Type.Electric,
          type2: Type.Flying,
          category: [Category.NonEvolving, Category.Legendary]
        }
      ]
    },
    {
      name: PokemonName.Reshiram,
      dex: 643,
      type: Type.Dragon,
      type2: Type.Fire,
      category: [Category.NonEvolving, Category.Legendary],

      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Zekrom,
      dex: 644,
      type: Type.Dragon,
      type2: Type.Electric,
      category: [Category.NonEvolving, Category.Legendary],

      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Landorus,
      dex: 645,
      type: Type.Ground,
      type2: Type.Flying,
      category: [Category.NonEvolving, Category.Legendary],

      eggGroup1: EggGroup.NoEggs,
      mustHaveForm: true,
      alternateForms: [
        {
          name: PokemonName.LandorusIncarnate,
          type: Type.Ground,
          type2: Type.Flying,
          category: [Category.NonEvolving, Category.Legendary]
        },
        {
          name: PokemonName.LandorusTherian,
          type: Type.Ground,
          type2: Type.Flying,
          category: [Category.NonEvolving, Category.Legendary]
        }
      ]
    },
    {
      name: PokemonName.Kyurem,
      dex: 646,
      type: Type.Dragon,
      type2: Type.Ice,
      category: [Category.NonEvolving, Category.Legendary],

      eggGroup1: EggGroup.NoEggs,
      alternateForms: [
        {
          name: PokemonName.KyuremWhite,
          type: Type.Dragon,
          type2: Type.Ice,
          category: [Category.NonEvolving, Category.Legendary]
        },
        {
          name: PokemonName.KyuremBlack,
          type: Type.Dragon,
          type2: Type.Ice,
          category: [Category.NonEvolving, Category.Legendary]
        }
      ]
    },
    {
      name: PokemonName.Keldeo,
      dex: 647,
      type: Type.Water,
      type2: Type.Fighting,
      category: [Category.NonEvolving, Category.Mythical],

      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Meloetta,
      dex: 648,
      type: Type.Normal,
      category: [Category.NonEvolving, Category.Mythical],

      eggGroup1: EggGroup.NoEggs,
      mustHaveForm: true,
      alternateForms: [
        {
          name: PokemonName.MeloettaAria,
          type: Type.Normal,
          type2: Type.Psychic,
          category: [Category.NonEvolving, Category.Mythical]
        },
        {
          name: PokemonName.MeloettaPirouette,
          type: Type.Normal,
          type2: Type.Fighting,
          category: [Category.NonEvolving, Category.Mythical]
        }
      ]
    },
    {
      name: PokemonName.Genesect,
      dex: 649,
      type: Type.Bug,
      type2: Type.Steel,
      category: [Category.NonEvolving, Category.Mythical],

      eggGroup1: EggGroup.NoEggs
    }
  ]);
