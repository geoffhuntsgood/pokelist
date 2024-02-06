import { mapNamesToPokemon } from "../../api/pokemonApi";
import { Pokemon } from "../../classes/Pokemon";
import { Category, EggGroup, PokemonName, Type } from "../../enums";

export const gen7Pokemon = (): Pokemon[] =>
  mapNamesToPokemon([
    {
      name: PokemonName.Rowlet,
      dex: 722,
      type: Type.Grass,
      type2: Type.Flying,
      category: Category.Starter,
      eggGroup1: EggGroup.Flying
    },
    {
      name: PokemonName.Dartrix,
      dex: 723,
      type: Type.Grass,
      type2: Type.Flying,
      category: Category.Starter,
      eggGroup1: EggGroup.Flying
    },
    {
      name: PokemonName.Decidueye,
      dex: 724,
      type: Type.Grass,
      type2: Type.Ghost,
      category: Category.Starter,
      eggGroup1: EggGroup.Flying,
      regionalVariants: [
        {
          name: PokemonName.HisuianDecidueye,
          type: Type.Grass,
          type2: Type.Fighting,
          category: Category.Starter
        }
      ]
    },
    {
      name: PokemonName.Litten,
      dex: 725,
      type: Type.Fire,
      category: Category.Starter,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Torracat,
      dex: 726,
      type: Type.Fire,
      category: Category.Starter,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Incineroar,
      dex: 727,
      type: Type.Fire,
      type2: Type.Dark,
      category: Category.Starter,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Popplio,
      dex: 728,
      type: Type.Water,
      category: Category.Starter,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Field
    },
    {
      name: PokemonName.Brionne,
      dex: 729,
      type: Type.Water,
      category: Category.Starter,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Field
    },
    {
      name: PokemonName.Primarina,
      dex: 730,
      type: Type.Water,
      type2: Type.Fairy,
      category: Category.Starter,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Field
    },
    {
      name: PokemonName.Pikipek,
      dex: 731,
      type: Type.Normal,
      type2: Type.Flying,
      eggGroup1: EggGroup.Flying
    },
    {
      name: PokemonName.Trumbeak,
      dex: 732,
      type: Type.Normal,
      type2: Type.Flying,
      eggGroup1: EggGroup.Flying
    },
    {
      name: PokemonName.Toucannon,
      dex: 733,
      type: Type.Normal,
      type2: Type.Flying,
      eggGroup1: EggGroup.Flying
    },
    {
      name: PokemonName.Yungoos,
      dex: 734,
      type: Type.Normal,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Gumshoos,
      dex: 735,
      type: Type.Normal,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Grubbin,
      dex: 736,
      type: Type.Bug,

      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Charjabug,
      dex: 737,
      type: Type.Bug,
      type2: Type.Electric,

      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Vikavolt,
      dex: 738,
      type: Type.Bug,
      type2: Type.Electric,

      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Crabrawler,
      dex: 739,
      type: Type.Fighting,
      eggGroup1: EggGroup.Water3
    },
    {
      name: PokemonName.Crabominable,
      dex: 740,
      type: Type.Fighting,
      type2: Type.Ice,
      eggGroup1: EggGroup.Water3
    },
    {
      name: PokemonName.Oricorio,
      dex: 741,
      type: Type.Flying,
      category: Category.NonEvolving,

      eggGroup1: EggGroup.Flying,
      mustHaveForm: true,
      alternateForms: [
        {
          name: PokemonName.OricorioBaile,
          type: Type.Fire,
          type2: Type.Flying,
          category: Category.NonEvolving
        },
        {
          name: PokemonName.OricorioPomPom,
          type: Type.Electric,
          type2: Type.Flying,
          category: Category.NonEvolving
        },
        {
          name: PokemonName.OricorioPau,
          type: Type.Psychic,
          type2: Type.Flying,
          category: Category.NonEvolving
        },
        {
          name: PokemonName.OricorioSensu,
          type: Type.Ghost,
          type2: Type.Flying,
          category: Category.NonEvolving
        }
      ]
    },
    {
      name: PokemonName.Cutiefly,
      dex: 742,
      type: Type.Bug,
      type2: Type.Fairy,
      eggGroup1: EggGroup.Bug,
      eggGroup2: EggGroup.Fairy
    },
    {
      name: PokemonName.Ribombee,
      dex: 743,
      type: Type.Bug,
      type2: Type.Fairy,
      eggGroup1: EggGroup.Bug,
      eggGroup2: EggGroup.Fairy
    },
    {
      name: PokemonName.Rockruff,
      dex: 744,
      type: Type.Rock,
      eggGroup1: EggGroup.Field,
      alternateForms: [
        {
          name: PokemonName.RockruffOwnTempo,
          type: Type.Rock
        }
      ]
    },
    {
      name: PokemonName.Lycanroc,
      dex: 745,
      type: Type.Rock,

      eggGroup1: EggGroup.Field,
      mustHaveForm: true,
      alternateForms: [
        {
          name: PokemonName.LycanrocMidday,
          type: Type.Rock
        },
        {
          name: PokemonName.LycanrocMidnight,
          type: Type.Rock
        },
        {
          name: PokemonName.LycanrocDusk,
          type: Type.Rock
        }
      ]
    },
    {
      name: PokemonName.Wishiwashi,
      dex: 746,
      type: Type.Water,
      category: Category.NonEvolving,

      eggGroup1: EggGroup.Water2
    },
    {
      name: PokemonName.Mareanie,
      dex: 747,
      type: Type.Poison,
      type2: Type.Water,
      eggGroup1: EggGroup.Water1
    },
    {
      name: PokemonName.Toxapex,
      dex: 748,
      type: Type.Poison,
      type2: Type.Water,
      eggGroup1: EggGroup.Water1
    },
    {
      name: PokemonName.Mudbray,
      dex: 749,
      type: Type.Ground,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Mudsdale,
      dex: 750,
      type: Type.Ground,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Dewpider,
      dex: 751,
      type: Type.Water,
      type2: Type.Bug,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Bug
    },
    {
      name: PokemonName.Araquanid,
      dex: 752,
      type: Type.Water,
      type2: Type.Bug,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Bug
    },
    {
      name: PokemonName.Fomantis,
      dex: 753,
      type: Type.Grass,
      eggGroup1: EggGroup.Grass
    },
    {
      name: PokemonName.Lurantis,
      dex: 754,
      type: Type.Grass,
      eggGroup1: EggGroup.Grass
    },
    {
      name: PokemonName.Morelull,
      dex: 755,
      type: Type.Grass,
      type2: Type.Fairy,
      eggGroup1: EggGroup.Grass
    },
    {
      name: PokemonName.Shiinotic,
      dex: 756,
      type: Type.Grass,
      type2: Type.Fairy,
      eggGroup1: EggGroup.Grass
    },
    {
      name: PokemonName.Salandit,
      dex: 757,
      type: Type.Poison,
      type2: Type.Fire,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Salazzle,
      dex: 758,
      type: Type.Poison,
      type2: Type.Fire,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Stufful,
      dex: 759,
      type: Type.Normal,
      type2: Type.Fighting,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Bewear,
      dex: 760,
      type: Type.Normal,
      type2: Type.Fighting,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Bounsweet,
      dex: 761,
      type: Type.Grass,
      eggGroup1: EggGroup.Grass
    },
    {
      name: PokemonName.Steenee,
      dex: 762,
      type: Type.Grass,
      eggGroup1: EggGroup.Grass
    },
    {
      name: PokemonName.Tsareena,
      dex: 763,
      type: Type.Grass,
      eggGroup1: EggGroup.Grass
    },
    {
      name: PokemonName.Comfey,
      dex: 764,
      type: Type.Fairy,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Grass
    },
    {
      name: PokemonName.Oranguru,
      dex: 765,
      type: Type.Normal,
      type2: Type.Psychic,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Passimian,
      dex: 766,
      type: Type.Fighting,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Wimpod,
      dex: 767,
      type: Type.Bug,
      type2: Type.Water,

      eggGroup1: EggGroup.Bug,
      eggGroup2: EggGroup.Water3
    },
    {
      name: PokemonName.Golisopod,
      dex: 768,
      type: Type.Bug,
      type2: Type.Water,

      eggGroup1: EggGroup.Bug,
      eggGroup2: EggGroup.Water3
    },
    {
      name: PokemonName.Sandygast,
      dex: 769,
      type: Type.Ghost,
      type2: Type.Ground,
      eggGroup1: EggGroup.Amorphous
    },
    {
      name: PokemonName.Palossand,
      dex: 770,
      type: Type.Ghost,
      type2: Type.Ground,
      eggGroup1: EggGroup.Amorphous
    },
    {
      name: PokemonName.Pyukumuku,
      dex: 771,
      type: Type.Water,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Water1
    },
    {
      name: PokemonName.TypeNull,
      dex: 772,
      type: Type.Normal,

      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Silvally,
      dex: 773,
      type: Type.Normal,

      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Minior,
      dex: 774,
      type: Type.Rock,
      type2: Type.Flying,
      category: Category.NonEvolving,

      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Komala,
      dex: 775,
      type: Type.Normal,
      category: Category.NonEvolving,

      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Turtonator,
      dex: 776,
      type: Type.Fire,
      type2: Type.Dragon,
      category: Category.NonEvolving,

      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Togedemaru,
      dex: 777,
      type: Type.Electric,
      type2: Type.Steel,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.Fairy
    },
    {
      name: PokemonName.Mimikyu,
      dex: 778,
      type: Type.Ghost,
      type2: Type.Fairy,
      category: Category.NonEvolving,

      eggGroup1: EggGroup.Amorphous
    },
    {
      name: PokemonName.Bruxish,
      dex: 779,
      type: Type.Water,
      type2: Type.Psychic,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Water2
    },
    {
      name: PokemonName.Drampa,
      dex: 780,
      type: Type.Normal,
      type2: Type.Dragon,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Dhelmise,
      dex: 781,
      type: Type.Ghost,
      type2: Type.Grass,
      category: Category.NonEvolving,

      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.JangmoO,
      dex: 782,
      type: Type.Dragon,
      eggGroup1: EggGroup.Dragon
    },
    {
      name: PokemonName.HakamoO,
      dex: 783,
      type: Type.Dragon,
      type2: Type.Fighting,
      eggGroup1: EggGroup.Dragon
    },
    {
      name: PokemonName.KommoO,
      dex: 784,
      type: Type.Dragon,
      type2: Type.Fighting,
      eggGroup1: EggGroup.Dragon
    },
    {
      name: PokemonName.TapuKoko,
      dex: 785,
      type: Type.Electric,
      type2: Type.Fairy,
      category: [Category.NonEvolving, Category.Legendary],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.TapuLele,
      dex: 786,
      type: Type.Psychic,
      type2: Type.Fairy,
      category: [Category.NonEvolving, Category.Legendary],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.TapuBulu,
      dex: 787,
      type: Type.Grass,
      type2: Type.Fairy,
      category: [Category.NonEvolving, Category.Legendary],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.TapuFini,
      dex: 788,
      type: Type.Water,
      type2: Type.Fairy,
      category: [Category.NonEvolving, Category.Legendary],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Cosmog,
      dex: 789,
      type: Type.Psychic,
      category: Category.Legendary,

      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Cosmoem,
      dex: 790,
      type: Type.Psychic,
      category: Category.Legendary,

      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Solgaleo,
      dex: 791,
      type: Type.Psychic,
      type2: Type.Steel,
      category: Category.Legendary,

      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Lunala,
      dex: 792,
      type: Type.Psychic,
      type2: Type.Ghost,
      category: Category.Legendary,

      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Nihilego,
      dex: 793,
      type: Type.Rock,
      type2: Type.Poison,
      category: [Category.NonEvolving, Category.UltraBeast],

      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Buzzwole,
      dex: 794,
      type: Type.Bug,
      type2: Type.Fighting,
      category: [Category.NonEvolving, Category.UltraBeast],

      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Pheromosa,
      dex: 795,
      type: Type.Bug,
      type2: Type.Fighting,
      category: [Category.NonEvolving, Category.UltraBeast],

      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Xurkitree,
      dex: 796,
      type: Type.Electric,
      category: [Category.NonEvolving, Category.UltraBeast],

      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Celesteela,
      dex: 797,
      type: Type.Steel,
      type2: Type.Flying,
      category: [Category.NonEvolving, Category.UltraBeast],

      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Kartana,
      dex: 798,
      type: Type.Grass,
      type2: Type.Steel,
      category: [Category.NonEvolving, Category.UltraBeast],

      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Guzzlord,
      dex: 799,
      type: Type.Dark,
      type2: Type.Dragon,
      category: [Category.NonEvolving, Category.UltraBeast],

      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Necrozma,
      dex: 800,
      type: Type.Psychic,
      category: [Category.NonEvolving, Category.Legendary],

      eggGroup1: EggGroup.NoEggs,
      alternateForms: [
        {
          name: PokemonName.NecrozmaDuskMane,
          type: Type.Psychic,
          type2: Type.Steel,
          category: [Category.NonEvolving, Category.Legendary]
        },
        {
          name: PokemonName.NecrozmaDawnWings,
          type: Type.Psychic,
          type2: Type.Ghost,
          category: [Category.NonEvolving, Category.Legendary]
        },
        {
          name: PokemonName.NecrozmaUltra,
          type: Type.Psychic,
          type2: Type.Dragon,
          category: [Category.NonEvolving, Category.Legendary]
        }
      ]
    },
    {
      name: PokemonName.Magearna,
      dex: 801,
      type: Type.Steel,
      type2: Type.Fairy,
      category: [Category.NonEvolving, Category.Mythical],

      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Marshadow,
      dex: 802,
      type: Type.Fighting,
      type2: Type.Ghost,
      category: [Category.NonEvolving, Category.Mythical],

      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Poipole,
      dex: 803,
      type: Type.Poison,
      category: Category.UltraBeast,

      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Naganadel,
      dex: 804,
      type: Type.Poison,
      type2: Type.Dragon,
      category: Category.UltraBeast,

      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Stakataka,
      dex: 805,
      type: Type.Rock,
      type2: Type.Steel,
      category: [Category.NonEvolving, Category.UltraBeast],

      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Blacephalon,
      dex: 806,
      type: Type.Fire,
      type2: Type.Ghost,
      category: [Category.NonEvolving, Category.UltraBeast],

      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Zeraora,
      dex: 807,
      type: Type.Electric,
      category: [Category.NonEvolving, Category.Mythical],

      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Meltan,
      dex: 808,
      type: Type.Steel,
      category: Category.Mythical,

      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Melmetal,
      dex: 809,
      type: Type.Steel,
      category: Category.Mythical,

      eggGroup1: EggGroup.NoEggs
    }
  ]);
