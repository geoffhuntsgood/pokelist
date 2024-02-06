import { mapNamesToPokemon } from "../../api/pokemonApi";
import { Pokemon } from "../../classes/Pokemon";
import { Category, EggGroup, PokemonName, Type } from "../../enums";

export const gen8Pokemon = (): Pokemon[] =>
  mapNamesToPokemon([
    {
      name: PokemonName.Grookey,
      dex: 810,
      type: Type.Grass,
      category: Category.Starter,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.Grass
    },
    {
      name: PokemonName.Thwackey,
      dex: 811,
      type: Type.Grass,
      category: Category.Starter,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.Grass
    },
    {
      name: PokemonName.Rillaboom,
      dex: 812,
      type: Type.Grass,
      category: Category.Starter,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.Grass
    },
    {
      name: PokemonName.Scorbunny,
      dex: 813,
      type: Type.Fire,
      category: Category.Starter,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.HumanLike
    },
    {
      name: PokemonName.Raboot,
      dex: 814,
      type: Type.Fire,
      category: Category.Starter,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.HumanLike
    },
    {
      name: PokemonName.Cinderace,
      dex: 815,
      type: Type.Fire,
      category: Category.Starter,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.HumanLike
    },
    {
      name: PokemonName.Sobble,
      dex: 816,
      type: Type.Water,
      category: Category.Starter,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Field
    },
    {
      name: PokemonName.Drizzile,
      dex: 817,
      type: Type.Water,
      category: Category.Starter,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Field
    },
    {
      name: PokemonName.Inteleon,
      dex: 818,
      type: Type.Water,
      category: Category.Starter,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Field
    },
    {
      name: PokemonName.Skwovet,
      dex: 819,
      type: Type.Normal,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Greedent,
      dex: 820,
      type: Type.Normal,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Rookidee,
      dex: 821,
      type: Type.Flying,
      eggGroup1: EggGroup.Flying
    },
    {
      name: PokemonName.Corvisquire,
      dex: 822,
      type: Type.Flying,
      eggGroup1: EggGroup.Flying
    },
    {
      name: PokemonName.Corviknight,
      dex: 823,
      type: Type.Flying,
      type2: Type.Steel,
      eggGroup1: EggGroup.Flying
    },
    {
      name: PokemonName.Blipbug,
      dex: 824,
      type: Type.Bug,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Dottler,
      dex: 825,
      type: Type.Bug,
      type2: Type.Psychic,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Orbeetle,
      dex: 826,
      type: Type.Bug,
      type2: Type.Psychic,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Nickit,
      dex: 827,
      type: Type.Dark,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Thievul,
      dex: 828,
      type: Type.Dark,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Gossifleur,
      dex: 829,
      type: Type.Grass,
      eggGroup1: EggGroup.Grass
    },
    {
      name: PokemonName.Eldegoss,
      dex: 830,
      type: Type.Grass,
      eggGroup1: EggGroup.Grass
    },
    {
      name: PokemonName.Wooloo,
      dex: 831,
      type: Type.Normal,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Dubwool,
      dex: 832,
      type: Type.Normal,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Chewtle,
      dex: 833,
      type: Type.Water,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Water1
    },
    {
      name: PokemonName.Drednaw,
      dex: 834,
      type: Type.Water,
      type2: Type.Rock,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Water1
    },
    {
      name: PokemonName.Yamper,
      dex: 835,
      type: Type.Electric,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Boltund,
      dex: 836,
      type: Type.Electric,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Rolycoly,
      dex: 837,
      type: Type.Rock,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Carkol,
      dex: 838,
      type: Type.Rock,
      type2: Type.Fire,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Coalossal,
      dex: 839,
      type: Type.Rock,
      type2: Type.Fire,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Applin,
      dex: 840,
      type: Type.Grass,
      type2: Type.Dragon,
      eggGroup1: EggGroup.Grass,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Flapple,
      dex: 841,
      type: Type.Grass,
      type2: Type.Dragon,
      eggGroup1: EggGroup.Grass,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Appletun,
      dex: 842,
      type: Type.Grass,
      type2: Type.Dragon,
      eggGroup1: EggGroup.Grass,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Silicobra,
      dex: 843,
      type: Type.Ground,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Sandaconda,
      dex: 844,
      type: Type.Ground,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Cramorant,
      dex: 845,
      type: Type.Flying,
      type2: Type.Water,
      category: Category.NonEvolving,

      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Flying
    },
    {
      name: PokemonName.Arrokuda,
      dex: 846,
      type: Type.Water,
      eggGroup1: EggGroup.Water2
    },
    {
      name: PokemonName.Barraskewda,
      dex: 847,
      type: Type.Water,
      eggGroup1: EggGroup.Water2
    },
    {
      name: PokemonName.Toxel,
      dex: 848,
      type: Type.Electric,
      type2: Type.Poison,
      category: Category.Baby,
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Toxtricity,
      dex: 849,
      type: Type.Electric,
      type2: Type.Poison,

      eggGroup1: EggGroup.HumanLike,
      mustHaveForm: true,
      alternateForms: [
        {
          name: PokemonName.ToxtricityAmped,
          type: Type.Electric,
          type2: Type.Poison
        },
        {
          name: PokemonName.ToxtricityLowKey,
          type: Type.Electric,
          type2: Type.Poison
        }
      ]
    },
    {
      name: PokemonName.Sizzlipede,
      dex: 850,
      type: Type.Fire,
      type2: Type.Bug,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Centiskorch,
      dex: 851,
      type: Type.Fire,
      type2: Type.Bug,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Clobbopus,
      dex: 852,
      type: Type.Fighting,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.HumanLike
    },
    {
      name: PokemonName.Grapploct,
      dex: 853,
      type: Type.Fighting,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.HumanLike
    },
    {
      name: PokemonName.Sinistea,
      dex: 854,
      type: Type.Ghost,
      eggGroup1: EggGroup.Mineral,
      eggGroup2: EggGroup.Amorphous
    },
    {
      name: PokemonName.Polteageist,
      dex: 855,
      type: Type.Ghost,
      eggGroup1: EggGroup.Mineral,
      eggGroup2: EggGroup.Amorphous
    },
    {
      name: PokemonName.Hatenna,
      dex: 856,
      type: Type.Psychic,
      eggGroup1: EggGroup.Fairy
    },
    {
      name: PokemonName.Hattrem,
      dex: 857,
      type: Type.Psychic,
      eggGroup1: EggGroup.Fairy
    },
    {
      name: PokemonName.Hatterene,
      dex: 858,
      type: Type.Psychic,
      type2: Type.Fairy,
      eggGroup1: EggGroup.Fairy
    },
    {
      name: PokemonName.Impidimp,
      dex: 859,
      type: Type.Dark,
      type2: Type.Fairy,
      eggGroup1: EggGroup.Fairy,
      eggGroup2: EggGroup.HumanLike
    },
    {
      name: PokemonName.Morgrem,
      dex: 860,
      type: Type.Dark,
      type2: Type.Fairy,
      eggGroup1: EggGroup.Fairy,
      eggGroup2: EggGroup.HumanLike
    },
    {
      name: PokemonName.Grimmsnarl,
      dex: 861,
      type: Type.Dark,
      type2: Type.Fairy,
      eggGroup1: EggGroup.Fairy,
      eggGroup2: EggGroup.HumanLike
    },
    {
      name: PokemonName.Obstagoon,
      dex: 862,
      type: Type.Dark,
      type2: Type.Normal,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Perrserker,
      dex: 863,
      type: Type.Steel,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Cursola,
      dex: 864,
      type: Type.Ghost,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Water3
    },
    {
      name: PokemonName.Sirfetchd,
      dex: 865,
      type: Type.Fighting,
      eggGroup1: EggGroup.Flying,
      eggGroup2: EggGroup.Field
    },
    {
      name: PokemonName.MrRime,
      dex: 866,
      type: Type.Ice,
      type2: Type.Psychic,
      eggGroup1: EggGroup.HumanLike
    },
    {
      name: PokemonName.Runerigus,
      dex: 867,
      type: Type.Ground,
      type2: Type.Ghost,

      eggGroup1: EggGroup.Mineral,
      eggGroup2: EggGroup.Amorphous
    },
    {
      name: PokemonName.Milcery,
      dex: 868,
      type: Type.Fairy,
      eggGroup1: EggGroup.Fairy,
      eggGroup2: EggGroup.Amorphous
    },
    {
      name: PokemonName.Alcremie,
      dex: 869,
      type: Type.Fairy,
      eggGroup1: EggGroup.Fairy,
      eggGroup2: EggGroup.Amorphous
    },
    {
      name: PokemonName.Falinks,
      dex: 870,
      type: Type.Fighting,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Fairy,
      eggGroup2: EggGroup.Mineral
    },
    {
      name: PokemonName.Pincurchin,
      dex: 871,
      type: Type.Electric,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Amorphous
    },
    {
      name: PokemonName.Snom,
      dex: 872,
      type: Type.Ice,
      type2: Type.Bug,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Frosmoth,
      dex: 873,
      type: Type.Ice,
      type2: Type.Bug,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Stonjourner,
      dex: 874,
      type: Type.Rock,
      category: Category.NonEvolving,

      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Eiscue,
      dex: 875,
      type: Type.Ice,
      category: Category.NonEvolving,

      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Field
    },
    {
      name: PokemonName.Indeedee,
      dex: 876,
      type: Type.Psychic,
      type2: Type.Normal,
      category: Category.NonEvolving,

      eggGroup1: EggGroup.Fairy,
      mustHaveForm: true,
      alternateForms: [
        {
          name: PokemonName.IndeedeeMale,
          type: Type.Psychic,
          type2: Type.Normal,
          category: Category.NonEvolving
        },
        {
          name: PokemonName.IndeedeeFemale,
          type: Type.Psychic,
          type2: Type.Normal,
          category: Category.NonEvolving
        }
      ]
    },
    {
      name: PokemonName.Morpeko,
      dex: 877,
      type: Type.Electric,
      type2: Type.Dark,
      category: Category.NonEvolving,

      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.Fairy
    },
    {
      name: PokemonName.Cufant,
      dex: 878,
      type: Type.Steel,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.Mineral
    },
    {
      name: PokemonName.Copperajah,
      dex: 879,
      type: Type.Steel,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.Mineral
    },
    {
      name: PokemonName.Dracozolt,
      dex: 880,
      type: Type.Electric,
      type2: Type.Dragon,
      category: [Category.Fossil, Category.NonEvolving],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Arctozolt,
      dex: 881,
      type: Type.Electric,
      type2: Type.Ice,
      category: [Category.Fossil, Category.NonEvolving],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Dracovish,
      dex: 882,
      type: Type.Water,
      type2: Type.Dragon,
      category: [Category.Fossil, Category.NonEvolving],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Arctovish,
      dex: 883,
      type: Type.Water,
      type2: Type.Ice,
      category: [Category.Fossil, Category.NonEvolving],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Duraludon,
      dex: 884,
      type: Type.Steel,
      type2: Type.Dragon,
      eggGroup1: EggGroup.Mineral,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Dreepy,
      dex: 885,
      type: Type.Dragon,
      type2: Type.Ghost,
      eggGroup1: EggGroup.Amorphous,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Drakloak,
      dex: 886,
      type: Type.Dragon,
      type2: Type.Ghost,
      eggGroup1: EggGroup.Amorphous,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Dragapult,
      dex: 887,
      type: Type.Dragon,
      type2: Type.Ghost,
      eggGroup1: EggGroup.Amorphous,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Zacian,
      dex: 888,
      type: Type.Fairy,
      category: [Category.NonEvolving, Category.Legendary],

      eggGroup1: EggGroup.NoEggs,
      mustHaveForm: true,
      alternateForms: [
        {
          name: PokemonName.ZacianHero,
          type: Type.Fairy,
          category: [Category.NonEvolving, Category.Legendary]
        },
        {
          name: PokemonName.ZacianCrown,
          type: Type.Fairy,
          type2: Type.Steel,
          category: [Category.NonEvolving, Category.Legendary]
        }
      ]
    },
    {
      name: PokemonName.Zamazenta,
      dex: 889,
      type: Type.Fighting,
      category: [Category.NonEvolving, Category.Legendary],

      eggGroup1: EggGroup.NoEggs,
      mustHaveForm: true,
      alternateForms: [
        {
          name: PokemonName.ZamazentaHero,
          type: Type.Fighting,
          category: [Category.NonEvolving, Category.Legendary]
        },
        {
          name: PokemonName.ZamazentaCrown,
          type: Type.Fighting,
          type2: Type.Steel,
          category: [Category.NonEvolving, Category.Legendary]
        }
      ]
    },
    {
      name: PokemonName.Eternatus,
      dex: 890,
      type: Type.Poison,
      type2: Type.Dragon,
      category: [Category.NonEvolving, Category.Legendary],

      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Kubfu,
      dex: 891,
      type: Type.Fighting,
      category: Category.Legendary,

      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Urshifu,
      dex: 892,
      type: Type.Fighting,
      category: Category.Legendary,

      eggGroup1: EggGroup.NoEggs,
      mustHaveForm: true,
      alternateForms: [
        {
          name: PokemonName.UrshifuSingle,
          type: Type.Fighting,
          type2: Type.Dark,
          category: Category.Legendary
        },
        {
          name: PokemonName.UrshifuRapid,
          type: Type.Fighting,
          type2: Type.Water,
          category: Category.Legendary
        }
      ]
    },
    {
      name: PokemonName.Zarude,
      dex: 893,
      type: Type.Dark,
      type2: Type.Grass,
      category: [Category.NonEvolving, Category.Mythical],

      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Regieleki,
      dex: 894,
      type: Type.Electric,
      category: [Category.NonEvolving, Category.Legendary],

      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Regidrago,
      dex: 895,
      type: Type.Dragon,
      category: [Category.NonEvolving, Category.Legendary],

      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Glastrier,
      dex: 896,
      type: Type.Ice,
      category: [Category.NonEvolving, Category.Legendary],

      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Spectrier,
      dex: 897,
      type: Type.Ghost,
      category: [Category.NonEvolving, Category.Legendary],

      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Calyrex,
      dex: 898,
      type: Type.Psychic,
      type2: Type.Grass,
      category: [Category.NonEvolving, Category.Legendary],

      eggGroup1: EggGroup.NoEggs,
      alternateForms: [
        {
          name: PokemonName.CalyrexIce,
          type: Type.Psychic,
          type2: Type.Ice,
          category: [Category.NonEvolving, Category.Legendary]
        },
        {
          name: PokemonName.CalyrexShadow,
          type: Type.Psychic,
          type2: Type.Ghost,
          category: [Category.NonEvolving, Category.Legendary]
        }
      ]
    },
    {
      name: PokemonName.Wyrdeer,
      dex: 899,
      type: Type.Normal,
      type2: Type.Psychic,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Kleavor,
      dex: 900,
      type: Type.Bug,
      type2: Type.Rock,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Ursaluna,
      dex: 901,
      type: Type.Ground,
      type2: Type.Normal,
      eggGroup1: EggGroup.Field,
      alternateForms: [
        {
          name: PokemonName.UrsalunaBloodmoon,
          type: Type.Ground,
          type2: Type.Normal
        }
      ]
    },
    {
      name: PokemonName.Basculegion,
      dex: 902,
      type: Type.Water,
      type2: Type.Ghost,
      eggGroup1: EggGroup.Water2
    },
    {
      name: PokemonName.Sneasler,
      dex: 903,
      type: Type.Fighting,
      type2: Type.Poison,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Overqwil,
      dex: 904,
      type: Type.Dark,
      type2: Type.Poison,
      eggGroup1: EggGroup.Water2
    },
    {
      name: PokemonName.Enamorus,
      dex: 905,
      type: Type.Fairy,
      type2: Type.Flying,
      category: [Category.NonEvolving, Category.Legendary],

      eggGroup1: EggGroup.NoEggs,
      mustHaveForm: true,
      alternateForms: [
        {
          name: PokemonName.EnamorusIncarnate,
          type: Type.Fairy,
          type2: Type.Flying,
          category: [Category.NonEvolving, Category.Legendary]
        },
        {
          name: PokemonName.EnamorusTherian,
          type: Type.Fairy,
          type2: Type.Flying,
          category: [Category.NonEvolving, Category.Legendary]
        }
      ]
    }
  ]);
