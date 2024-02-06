import { mapNamesToPokemon } from "../../api/pokemonApi";
import { Pokemon } from "../../classes/Pokemon";
import { Category, EggGroup, PokemonName, Type } from "../../enums";

export const gen9Pokemon = (): Pokemon[] =>
  mapNamesToPokemon([
    {
      name: PokemonName.Sprigatito,
      dex: 906,
      type: Type.Grass,
      category: Category.Starter,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.Grass
    },
    {
      name: PokemonName.Floragato,
      dex: 907,
      type: Type.Grass,
      category: Category.Starter,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.Grass
    },
    {
      name: PokemonName.Meowscarada,
      dex: 908,
      type: Type.Grass,
      type2: Type.Dark,
      category: Category.Starter,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.Grass
    },
    {
      name: PokemonName.Fuecoco,
      dex: 909,
      type: Type.Fire,
      category: Category.Starter,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Crocalor,
      dex: 910,
      type: Type.Fire,
      category: Category.Starter,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Skeledirge,
      dex: 911,
      type: Type.Fire,
      type2: Type.Ghost,
      category: Category.Starter,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Quaxly,
      dex: 912,
      type: Type.Water,
      category: Category.Starter,
      eggGroup1: EggGroup.Flying,
      eggGroup2: EggGroup.Water1
    },
    {
      name: PokemonName.Quaxwell,
      dex: 913,
      type: Type.Water,
      category: Category.Starter,
      eggGroup1: EggGroup.Flying,
      eggGroup2: EggGroup.Water1
    },
    {
      name: PokemonName.Quaquaval,
      dex: 914,
      type: Type.Water,
      type2: Type.Fighting,
      category: Category.Starter,
      eggGroup1: EggGroup.Flying,
      eggGroup2: EggGroup.Water1
    },
    {
      name: PokemonName.Lechonk,
      dex: 915,
      type: Type.Normal,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Oinkologne,
      dex: 916,
      type: Type.Normal,
      eggGroup1: EggGroup.Field,
      mustHaveForm: true,
      alternateForms: [
        {
          name: PokemonName.OinkologneMale,
          type: Type.Normal
        },
        {
          name: PokemonName.OinkologneFemale,
          type: Type.Normal
        }
      ]
    },
    {
      name: PokemonName.Tarountula,
      dex: 917,
      type: Type.Bug,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Spidops,
      dex: 918,
      type: Type.Bug,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Nymble,
      dex: 919,
      type: Type.Bug,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Lokix,
      dex: 920,
      type: Type.Bug,
      type2: Type.Dark,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Pawmi,
      dex: 921,
      type: Type.Electric,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Pawmo,
      dex: 922,
      type: Type.Electric,
      type2: Type.Fighting,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Pawmot,
      dex: 923,
      type: Type.Electric,
      type2: Type.Fighting,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Tandemaus,
      dex: 924,
      type: Type.Normal,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.Fairy
    },
    {
      name: PokemonName.Maushold,
      dex: 925,
      type: Type.Normal,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.Fairy
    },
    {
      name: PokemonName.Fidough,
      dex: 926,
      type: Type.Fairy,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.Mineral
    },
    {
      name: PokemonName.Dachsbun,
      dex: 927,
      type: Type.Fairy,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.Mineral
    },
    {
      name: PokemonName.Smoliv,
      dex: 928,
      type: Type.Grass,
      type2: Type.Normal,
      eggGroup1: EggGroup.Grass
    },
    {
      name: PokemonName.Dolliv,
      dex: 929,
      type: Type.Grass,
      type2: Type.Normal,
      eggGroup1: EggGroup.Grass
    },
    {
      name: PokemonName.Arboliva,
      dex: 930,
      type: Type.Grass,
      type2: Type.Normal,
      eggGroup1: EggGroup.Grass
    },
    {
      name: PokemonName.Squawkabilly,
      dex: 931,
      type: Type.Normal,
      type2: Type.Flying,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Flying,
      mustHaveForm: true,
      alternateForms: [
        {
          name: PokemonName.SquawkabillyGreen,
          type: Type.Normal,
          type2: Type.Flying,
          category: Category.NonEvolving
        },
        {
          name: PokemonName.SquawkabillyBlue,
          type: Type.Normal,
          type2: Type.Flying,
          category: Category.NonEvolving
        },
        {
          name: PokemonName.SquawkabillyYellow,
          type: Type.Normal,
          type2: Type.Flying,
          category: Category.NonEvolving
        },
        {
          name: PokemonName.SquawkabillyWhite,
          type: Type.Normal,
          type2: Type.Flying,
          category: Category.NonEvolving
        }
      ]
    },
    {
      name: PokemonName.Nacli,
      dex: 932,
      type: Type.Rock,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Naclstack,
      dex: 933,
      type: Type.Rock,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Garganacl,
      dex: 934,
      type: Type.Rock,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Charcadet,
      dex: 935,
      type: Type.Fire,
      eggGroup1: EggGroup.HumanLike
    },
    {
      name: PokemonName.Armarouge,
      dex: 936,
      type: Type.Fire,
      type2: Type.Psychic,
      eggGroup1: EggGroup.HumanLike
    },
    {
      name: PokemonName.Ceruledge,
      dex: 937,
      type: Type.Fire,
      type2: Type.Ghost,
      eggGroup1: EggGroup.HumanLike
    },
    {
      name: PokemonName.Tadbulb,
      dex: 938,
      type: Type.Electric,
      eggGroup1: EggGroup.Water1
    },
    {
      name: PokemonName.Bellibolt,
      dex: 939,
      type: Type.Electric,
      eggGroup1: EggGroup.Water1
    },
    {
      name: PokemonName.Wattrel,
      dex: 940,
      type: Type.Electric,
      type2: Type.Flying,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Flying
    },
    {
      name: PokemonName.Kilowattrel,
      dex: 941,
      type: Type.Electric,
      type2: Type.Flying,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Flying
    },
    {
      name: PokemonName.Maschiff,
      dex: 942,
      type: Type.Dark,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Mabosstiff,
      dex: 943,
      type: Type.Dark,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Shroodle,
      dex: 944,
      type: Type.Poison,
      type2: Type.Normal,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Grafaiai,
      dex: 945,
      type: Type.Poison,
      type2: Type.Normal,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Bramblin,
      dex: 946,
      type: Type.Grass,
      type2: Type.Ghost,
      eggGroup1: EggGroup.Grass
    },
    {
      name: PokemonName.Brambleghast,
      dex: 947,
      type: Type.Grass,
      type2: Type.Ghost,
      eggGroup1: EggGroup.Grass
    },
    {
      name: PokemonName.Toedscool,
      dex: 948,
      type: Type.Ground,
      type2: Type.Grass,

      eggGroup1: EggGroup.Grass
    },
    {
      name: PokemonName.Toedscruel,
      dex: 949,
      type: Type.Ground,
      type2: Type.Grass,

      eggGroup1: EggGroup.Grass
    },
    {
      name: PokemonName.Klawf,
      dex: 950,
      type: Type.Rock,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Water3
    },
    {
      name: PokemonName.Capsakid,
      dex: 951,
      type: Type.Grass,
      eggGroup1: EggGroup.Grass
    },
    {
      name: PokemonName.Scovillain,
      dex: 952,
      type: Type.Grass,
      type2: Type.Fire,
      eggGroup1: EggGroup.Grass
    },
    {
      name: PokemonName.Rellor,
      dex: 953,
      type: Type.Bug,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Rabsca,
      dex: 954,
      type: Type.Bug,
      type2: Type.Psychic,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Flittle,
      dex: 955,
      type: Type.Psychic,
      eggGroup1: EggGroup.Flying
    },
    {
      name: PokemonName.Espathra,
      dex: 956,
      type: Type.Psychic,
      eggGroup1: EggGroup.Flying
    },
    {
      name: PokemonName.Tinkatink,
      dex: 957,
      type: Type.Fairy,
      type2: Type.Steel,
      eggGroup1: EggGroup.Fairy
    },
    {
      name: PokemonName.Tinkatuff,
      dex: 958,
      type: Type.Fairy,
      type2: Type.Steel,
      eggGroup1: EggGroup.Fairy
    },
    {
      name: PokemonName.Tinkaton,
      dex: 959,
      type: Type.Fairy,
      type2: Type.Steel,
      eggGroup1: EggGroup.Fairy
    },
    {
      name: PokemonName.Wiglett,
      dex: 960,
      type: Type.Water,
      eggGroup1: EggGroup.Water3
    },
    {
      name: PokemonName.Wugtrio,
      dex: 961,
      type: Type.Water,
      eggGroup1: EggGroup.Water3
    },
    {
      name: PokemonName.Bombirdier,
      dex: 962,
      type: Type.Flying,
      type2: Type.Dark,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Flying
    },
    {
      name: PokemonName.Finizen,
      dex: 963,
      type: Type.Water,

      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.Water2
    },
    {
      name: PokemonName.Palafin,
      dex: 964,
      type: Type.Water,

      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.Water2
    },
    {
      name: PokemonName.Varoom,
      dex: 965,
      type: Type.Steel,
      type2: Type.Poison,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Revavroom,
      dex: 966,
      type: Type.Steel,
      type2: Type.Poison,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Cyclizar,
      dex: 967,
      type: Type.Dragon,
      type2: Type.Normal,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Orthworm,
      dex: 968,
      type: Type.Steel,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Glimmet,
      dex: 969,
      type: Type.Rock,
      type2: Type.Poison,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Glimmora,
      dex: 970,
      type: Type.Rock,
      type2: Type.Poison,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Greavard,
      dex: 971,
      type: Type.Ghost,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Houndstone,
      dex: 972,
      type: Type.Ghost,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Flamigo,
      dex: 973,
      type: Type.Flying,
      type2: Type.Fighting,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Flying
    },
    {
      name: PokemonName.Cetoddle,
      dex: 974,
      type: Type.Ice,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Cetitan,
      dex: 975,
      type: Type.Ice,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Veluza,
      dex: 976,
      type: Type.Water,
      type2: Type.Psychic,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Water2
    },
    {
      name: PokemonName.Dondozo,
      dex: 977,
      type: Type.Water,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Water2
    },
    {
      name: PokemonName.Tatsugiri,
      dex: 978,
      type: Type.Dragon,
      type2: Type.Water,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Water2
    },
    {
      name: PokemonName.Annihilape,
      dex: 979,
      type: Type.Fighting,
      type2: Type.Ghost,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Clodsire,
      dex: 980,
      type: Type.Poison,
      type2: Type.Ground,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Field
    },
    {
      name: PokemonName.Farigiraf,
      dex: 981,
      type: Type.Normal,
      type2: Type.Psychic,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Dudunsparce,
      dex: 982,
      type: Type.Normal,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Kingambit,
      dex: 983,
      type: Type.Dark,
      type2: Type.Steel,
      eggGroup1: EggGroup.HumanLike
    },
    {
      name: PokemonName.GreatTusk,
      dex: 984,
      type: Type.Ground,
      type2: Type.Fighting,
      category: [Category.NonEvolving, Category.Paradox],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.ScreamTail,
      dex: 985,
      type: Type.Fairy,
      type2: Type.Psychic,
      category: [Category.NonEvolving, Category.Paradox],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.BruteBonnet,
      dex: 986,
      type: Type.Grass,
      type2: Type.Dark,
      category: [Category.NonEvolving, Category.Paradox],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.FlutterMane,
      dex: 987,
      type: Type.Ghost,
      type2: Type.Fairy,
      category: [Category.NonEvolving, Category.Paradox],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.SlitherWing,
      dex: 988,
      type: Type.Bug,
      type2: Type.Fighting,
      category: [Category.NonEvolving, Category.Paradox],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.SandyShocks,
      dex: 989,
      type: Type.Electric,
      type2: Type.Ground,
      category: [Category.NonEvolving, Category.Paradox],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.IronTreads,
      dex: 990,
      type: Type.Ground,
      type2: Type.Steel,
      category: [Category.NonEvolving, Category.Paradox],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.IronBundle,
      dex: 991,
      type: Type.Ice,
      type2: Type.Water,
      category: [Category.NonEvolving, Category.Paradox],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.IronHands,
      dex: 992,
      type: Type.Fighting,
      type2: Type.Electric,
      category: [Category.NonEvolving, Category.Paradox],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.IronJugulis,
      dex: 993,
      type: Type.Dark,
      type2: Type.Flying,
      category: [Category.NonEvolving, Category.Paradox],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.IronMoth,
      dex: 994,
      type: Type.Fire,
      type2: Type.Poison,
      category: [Category.NonEvolving, Category.Paradox],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.IronThorns,
      dex: 995,
      type: Type.Rock,
      type2: Type.Electric,
      category: [Category.NonEvolving, Category.Paradox],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Frigibax,
      dex: 996,
      type: Type.Dragon,
      type2: Type.Ice,
      eggGroup1: EggGroup.Dragon,
      eggGroup2: EggGroup.Mineral
    },
    {
      name: PokemonName.Arctibax,
      dex: 997,
      type: Type.Dragon,
      type2: Type.Ice,
      eggGroup1: EggGroup.Dragon,
      eggGroup2: EggGroup.Mineral
    },
    {
      name: PokemonName.Baxcalibur,
      dex: 998,
      type: Type.Dragon,
      type2: Type.Ice,
      eggGroup1: EggGroup.Dragon,
      eggGroup2: EggGroup.Mineral
    },
    {
      name: PokemonName.Gimmighoul,
      dex: 999,
      type: Type.Ghost,
      eggGroup1: EggGroup.NoEggs,
      mustHaveForm: true,
      alternateForms: [
        {
          name: PokemonName.GimmighoulChest,
          type: Type.Ghost
        },
        {
          name: PokemonName.GimmighoulRoaming,
          type: Type.Ghost
        }
      ]
    },
    {
      name: PokemonName.Gholdengo,
      dex: 1000,
      type: Type.Steel,
      type2: Type.Ghost,

      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.WoChien,
      dex: 1001,
      type: Type.Dark,
      type2: Type.Grass,
      category: [Category.NonEvolving, Category.Legendary],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.ChienPao,
      dex: 1002,
      type: Type.Dark,
      type2: Type.Ice,
      category: [Category.NonEvolving, Category.Legendary],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.TingLu,
      dex: 1003,
      type: Type.Dark,
      type2: Type.Ground,
      category: [Category.NonEvolving, Category.Legendary],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.ChiYu,
      dex: 1004,
      type: Type.Dark,
      type2: Type.Fire,
      category: [Category.NonEvolving, Category.Legendary],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.RoaringMoon,
      dex: 1005,
      type: Type.Dragon,
      type2: Type.Dark,
      category: [Category.NonEvolving, Category.Paradox],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.IronValiant,
      dex: 1006,
      type: Type.Fairy,
      type2: Type.Fighting,
      category: [Category.NonEvolving, Category.Paradox],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Koraidon,
      dex: 1007,
      type: Type.Fighting,
      type2: Type.Dragon,
      category: [Category.NonEvolving, Category.Legendary, Category.Paradox],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Miraidon,
      dex: 1008,
      type: Type.Electric,
      type2: Type.Dragon,
      category: [Category.NonEvolving, Category.Legendary, Category.Paradox],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.WalkingWake,
      dex: 1009,
      type: Type.Water,
      type2: Type.Dragon,
      category: [Category.NonEvolving, Category.Paradox],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.IronLeaves,
      dex: 1010,
      type: Type.Grass,
      type2: Type.Psychic,
      category: [Category.NonEvolving, Category.Paradox],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Dipplin,
      dex: 1011,
      type: Type.Grass,
      type2: Type.Dragon,
      eggGroup1: EggGroup.Grass,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Poltchageist,
      dex: 1012,
      type: Type.Grass,
      type2: Type.Ghost,
      eggGroup1: EggGroup.Mineral,
      eggGroup2: EggGroup.Amorphous
    },
    {
      name: PokemonName.Sinistcha,
      dex: 1013,
      type: Type.Grass,
      type2: Type.Ghost,
      eggGroup1: EggGroup.Mineral,
      eggGroup2: EggGroup.Amorphous
    },
    {
      name: PokemonName.Okidogi,
      dex: 1014,
      type: Type.Poison,
      type2: Type.Fighting,
      category: [Category.NonEvolving, Category.Legendary],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Munkidori,
      dex: 1015,
      type: Type.Poison,
      type2: Type.Psychic,
      category: [Category.NonEvolving, Category.Legendary],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Fezandipiti,
      dex: 1016,
      type: Type.Poison,
      type2: Type.Fairy,
      category: [Category.NonEvolving, Category.Legendary],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Ogerpon,
      dex: 1017,
      type: Type.Grass,
      category: [Category.NonEvolving, Category.Legendary],
      eggGroup1: EggGroup.NoEggs,
      mustHaveForm: true,
      alternateForms: [
        {
          name: PokemonName.OgerponTeal,
          type: Type.Grass,
          category: [Category.NonEvolving, Category.Legendary]
        },
        {
          name: PokemonName.OgerponWellspring,
          type: Type.Grass,
          type2: Type.Water,
          category: [Category.NonEvolving, Category.Legendary]
        },
        {
          name: PokemonName.OgerponHearthflame,
          type: Type.Grass,
          type2: Type.Fire,
          category: [Category.NonEvolving, Category.Legendary]
        },
        {
          name: PokemonName.OgerponCornerstone,
          type: Type.Grass,
          type2: Type.Rock,
          category: [Category.NonEvolving, Category.Legendary]
        }
      ]
    },
    {
      name: PokemonName.Archaludon,
      dex: 1018,
      type: Type.Steel,
      type2: Type.Dragon,
      eggGroup1: EggGroup.Mineral,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Hydrapple,
      dex: 1019,
      type: Type.Grass,
      type2: Type.Dragon,
      eggGroup1: EggGroup.Grass,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.GougingFire,
      dex: 1020,
      type: Type.Fire,
      type2: Type.Dragon,
      category: [Category.NonEvolving, Category.Paradox],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.RagingBolt,
      dex: 1021,
      type: Type.Electric,
      type2: Type.Dragon,
      category: [Category.NonEvolving, Category.Paradox],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.IronBoulder,
      dex: 1022,
      type: Type.Rock,
      type2: Type.Psychic,
      category: [Category.NonEvolving, Category.Paradox],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.IronCrown,
      dex: 1023,
      type: Type.Steel,
      type2: Type.Psychic,
      category: [Category.NonEvolving, Category.Paradox],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Terapagos,
      dex: 1024,
      type: Type.Normal,
      category: [Category.NonEvolving, Category.Legendary],
      eggGroup1: EggGroup.NoEggs,
      mustHaveForm: true,
      alternateForms: [
        {
          name: PokemonName.TerapagosNormal,
          type: Type.Normal,
          category: [Category.NonEvolving, Category.Legendary]
        },
        {
          name: PokemonName.TerapagosTerastal,
          type: Type.Normal,
          category: [Category.NonEvolving, Category.Legendary]
        },
        {
          name: PokemonName.TerapagosStellar,
          type: Type.Normal,
          category: [Category.NonEvolving, Category.Legendary]
        }
      ]
    },
    {
      name: PokemonName.Pecharunt,
      dex: 1025,
      type: Type.Poison,
      type2: Type.Ghost,
      category: [Category.NonEvolving, Category.Mythical],
      eggGroup1: EggGroup.NoEggs
    }
  ]);
