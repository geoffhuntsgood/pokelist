import { mapNamesToPokemon } from "../../api/pokemonApi";
import { Pokemon } from "../../classes/Pokemon";
import { Category, EggGroup, PokemonName, Type } from "../../enums";

export const gen6Pokemon = (): Pokemon[] =>
  mapNamesToPokemon([
    {
      name: PokemonName.Chespin,
      dex: 650,
      type: Type.Grass,
      category: Category.Starter,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Quilladin,
      dex: 651,
      type: Type.Grass,
      category: Category.Starter,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Chesnaught,
      dex: 652,
      type: Type.Grass,
      type2: Type.Fighting,
      category: Category.Starter,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Fennekin,
      dex: 653,
      type: Type.Fire,
      category: Category.Starter,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Braixen,
      dex: 654,
      type: Type.Fire,
      category: Category.Starter,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Delphox,
      dex: 655,
      type: Type.Fire,
      type2: Type.Psychic,
      category: Category.Starter,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Froakie,
      dex: 656,
      type: Type.Water,
      category: Category.Starter,
      eggGroup1: EggGroup.Water1
    },
    {
      name: PokemonName.Frogadier,
      dex: 657,
      type: Type.Water,
      category: Category.Starter,
      eggGroup1: EggGroup.Water1
    },
    {
      name: PokemonName.Greninja,
      dex: 658,
      type: Type.Water,
      type2: Type.Dark,
      category: Category.Starter,
      eggGroup1: EggGroup.Water1,
      alternateForms: [
        {
          name: PokemonName.GreninjaAsh,
          type: Type.Water,
          type2: Type.Dark
        }
      ]
    },
    {
      name: PokemonName.Bunnelby,
      dex: 659,
      type: Type.Normal,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Diggersby,
      dex: 660,
      type: Type.Normal,
      type2: Type.Ground,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Fletchling,
      dex: 661,
      type: Type.Normal,
      type2: Type.Flying,
      eggGroup1: EggGroup.Flying
    },
    {
      name: PokemonName.Fletchinder,
      dex: 662,
      type: Type.Fire,
      type2: Type.Flying,
      eggGroup1: EggGroup.Flying
    },
    {
      name: PokemonName.Talonflame,
      dex: 663,
      type: Type.Fire,
      type2: Type.Flying,
      eggGroup1: EggGroup.Flying
    },
    {
      name: PokemonName.Scatterbug,
      dex: 664,
      type: Type.Bug,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Spewpa,
      dex: 665,
      type: Type.Bug,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Vivillon,
      dex: 666,
      type: Type.Bug,
      type2: Type.Flying,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Litleo,
      dex: 667,
      type: Type.Fire,
      type2: Type.Normal,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Pyroar,
      dex: 668,
      type: Type.Fire,
      type2: Type.Normal,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Flabebe,
      dex: 669,
      type: Type.Fairy,
      eggGroup1: EggGroup.Fairy
    },
    {
      name: PokemonName.Floette,
      dex: 670,
      type: Type.Fairy,
      eggGroup1: EggGroup.Fairy
    },
    {
      name: PokemonName.Florges,
      dex: 671,
      type: Type.Fairy,
      eggGroup1: EggGroup.Fairy
    },
    {
      name: PokemonName.Skiddo,
      dex: 672,
      type: Type.Grass,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Gogoat,
      dex: 673,
      type: Type.Grass,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Pancham,
      dex: 674,
      type: Type.Fighting,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.HumanLike
    },
    {
      name: PokemonName.Pangoro,
      dex: 675,
      type: Type.Fighting,
      type2: Type.Dark,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.HumanLike
    },
    {
      name: PokemonName.Furfrou,
      dex: 676,
      type: Type.Normal,
      category: Category.NonEvolving,

      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Espurr,
      dex: 677,
      type: Type.Psychic,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Meowstic,
      dex: 678,
      type: Type.Psychic,

      eggGroup1: EggGroup.Field,
      mustHaveForm: true,
      alternateForms: [
        {
          name: PokemonName.MeowsticMale,
          type: Type.Psychic
        },
        {
          name: PokemonName.MeowsticFemale,
          type: Type.Psychic
        }
      ]
    },
    {
      name: PokemonName.Honedge,
      dex: 679,
      type: Type.Steel,
      type2: Type.Ghost,

      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Doublade,
      dex: 680,
      type: Type.Steel,
      type2: Type.Ghost,

      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Aegislash,
      dex: 681,
      type: Type.Steel,
      type2: Type.Ghost,

      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Spritzee,
      dex: 682,
      type: Type.Fairy,
      eggGroup1: EggGroup.Fairy
    },
    {
      name: PokemonName.Aromatisse,
      dex: 683,
      type: Type.Fairy,
      eggGroup1: EggGroup.Fairy
    },
    {
      name: PokemonName.Swirlix,
      dex: 684,
      type: Type.Fairy,
      eggGroup1: EggGroup.Fairy
    },
    {
      name: PokemonName.Slurpuff,
      dex: 685,
      type: Type.Fairy,
      eggGroup1: EggGroup.Fairy
    },
    {
      name: PokemonName.Inkay,
      dex: 686,
      type: Type.Dark,
      type2: Type.Psychic,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Water2
    },
    {
      name: PokemonName.Malamar,
      dex: 687,
      type: Type.Dark,
      type2: Type.Psychic,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Water2
    },
    {
      name: PokemonName.Binacle,
      dex: 688,
      type: Type.Rock,
      type2: Type.Water,
      eggGroup1: EggGroup.Water3
    },
    {
      name: PokemonName.Barbaracle,
      dex: 689,
      type: Type.Rock,
      type2: Type.Water,
      eggGroup1: EggGroup.Water3
    },
    {
      name: PokemonName.Skrelp,
      dex: 690,
      type: Type.Poison,
      type2: Type.Water,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Dragalge,
      dex: 691,
      type: Type.Poison,
      type2: Type.Dragon,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Clauncher,
      dex: 692,
      type: Type.Water,

      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Water3
    },
    {
      name: PokemonName.Clawitzer,
      dex: 693,
      type: Type.Water,

      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Water3
    },
    {
      name: PokemonName.Helioptile,
      dex: 694,
      type: Type.Electric,
      type2: Type.Normal,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Heliolisk,
      dex: 695,
      type: Type.Electric,
      type2: Type.Normal,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Tyrunt,
      dex: 696,
      type: Type.Rock,
      type2: Type.Dragon,
      category: Category.Fossil,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Tyrantrum,
      dex: 697,
      type: Type.Rock,
      type2: Type.Dragon,
      category: Category.Fossil,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Amaura,
      dex: 698,
      type: Type.Rock,
      type2: Type.Ice,
      category: Category.Fossil,
      eggGroup1: EggGroup.Monster
    },
    {
      name: PokemonName.Aurorus,
      dex: 699,
      type: Type.Rock,
      type2: Type.Ice,
      category: Category.Fossil,
      eggGroup1: EggGroup.Monster
    },
    {
      name: PokemonName.Sylveon,
      dex: 700,
      type: Type.Fairy,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Hawlucha,
      dex: 701,
      type: Type.Fighting,
      type2: Type.Flying,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Flying,
      eggGroup2: EggGroup.HumanLike
    },
    {
      name: PokemonName.Dedenne,
      dex: 702,
      type: Type.Electric,
      type2: Type.Fairy,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.Fairy
    },
    {
      name: PokemonName.Carbink,
      dex: 703,
      type: Type.Rock,
      type2: Type.Fairy,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Fairy,
      eggGroup2: EggGroup.Mineral
    },
    {
      name: PokemonName.Goomy,
      dex: 704,
      type: Type.Dragon,
      eggGroup1: EggGroup.Dragon
    },
    {
      name: PokemonName.Sliggoo,
      dex: 705,
      type: Type.Dragon,
      eggGroup1: EggGroup.Dragon,
      regionalVariants: [
        {
          name: PokemonName.HisuianSliggoo,
          type: Type.Steel,
          type2: Type.Dragon
        }
      ]
    },
    {
      name: PokemonName.Goodra,
      dex: 706,
      type: Type.Dragon,
      eggGroup1: EggGroup.Dragon,
      regionalVariants: [
        {
          name: PokemonName.HisuianGoodra,
          type: Type.Steel,
          type2: Type.Dragon
        }
      ]
    },
    {
      name: PokemonName.Klefki,
      dex: 707,
      type: Type.Steel,
      type2: Type.Fairy,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Phantump,
      dex: 708,
      type: Type.Ghost,
      type2: Type.Grass,
      eggGroup1: EggGroup.Grass,
      eggGroup2: EggGroup.Amorphous
    },
    {
      name: PokemonName.Trevenant,
      dex: 709,
      type: Type.Ghost,
      type2: Type.Grass,
      eggGroup1: EggGroup.Grass,
      eggGroup2: EggGroup.Amorphous
    },
    {
      name: PokemonName.Pumpkaboo,
      dex: 710,
      type: Type.Ghost,
      type2: Type.Grass,
      eggGroup1: EggGroup.Amorphous
    },
    {
      name: PokemonName.Gourgeist,
      dex: 711,
      type: Type.Ghost,
      type2: Type.Grass,
      eggGroup1: EggGroup.Amorphous
    },
    {
      name: PokemonName.Bergmite,
      dex: 712,
      type: Type.Ice,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Mineral
    },
    {
      name: PokemonName.Avalugg,
      dex: 713,
      type: Type.Ice,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Mineral,
      regionalVariants: [
        {
          name: PokemonName.HisuianAvalugg,
          type: Type.Ice,
          type2: Type.Rock
        }
      ]
    },
    {
      name: PokemonName.Noibat,
      dex: 714,
      type: Type.Flying,
      type2: Type.Dragon,
      eggGroup1: EggGroup.Flying,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Noivern,
      dex: 715,
      type: Type.Flying,
      type2: Type.Dragon,
      eggGroup1: EggGroup.Flying,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Xerneas,
      dex: 716,
      type: Type.Fairy,
      category: [Category.NonEvolving, Category.Legendary],

      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Yveltal,
      dex: 717,
      type: Type.Dark,
      type2: Type.Flying,
      category: [Category.NonEvolving, Category.Legendary],

      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Zygarde,
      dex: 718,
      type: Type.Dragon,
      type2: Type.Ground,
      category: [Category.NonEvolving, Category.Legendary],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Diancie,
      dex: 719,
      type: Type.Rock,
      type2: Type.Fairy,
      category: [Category.NonEvolving, Category.Mythical],
      eggGroup1: EggGroup.NoEggs,
      megaEvolutions: [
        {
          name: PokemonName.MegaDiancie,
          type: Type.Rock,
          type2: Type.Fairy
        }
      ]
    },
    {
      name: PokemonName.Hoopa,
      dex: 720,
      type: Type.Psychic,
      category: [Category.NonEvolving, Category.Mythical],

      eggGroup1: EggGroup.NoEggs,
      mustHaveForm: true,
      alternateForms: [
        {
          name: PokemonName.HoopaConfined,
          type: Type.Psychic,
          type2: Type.Ghost,
          category: [Category.NonEvolving, Category.Mythical]
        },
        {
          name: PokemonName.HoopaUnbound,
          type: Type.Psychic,
          type2: Type.Dark,
          category: [Category.NonEvolving, Category.Mythical]
        }
      ]
    },
    {
      name: PokemonName.Volcanion,
      dex: 721,
      type: Type.Fire,
      type2: Type.Water,
      category: [Category.NonEvolving, Category.Mythical],

      eggGroup1: EggGroup.NoEggs
    }
  ]);
