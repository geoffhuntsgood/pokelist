import { mapNamesToPokemon } from "../../api/pokemonApi";
import { Pokemon } from "../../classes/Pokemon";
import { Category, EggGroup, PokemonName, Type } from "../../enums";
export const gen3Pokemon = (): Pokemon[] =>
  mapNamesToPokemon([
    {
      name: PokemonName.Treecko,
      dex: 252,
      type: Type.Grass,
      category: Category.Starter,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Grovyle,
      dex: 253,
      type: Type.Grass,
      category: Category.Starter,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Sceptile,
      dex: 254,
      type: Type.Grass,
      category: Category.Starter,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Dragon,
      megaEvolutions: [
        {
          name: PokemonName.MegaSceptile,
          type: Type.Grass,
          type2: Type.Dragon
        }
      ]
    },
    {
      name: PokemonName.Torchic,
      dex: 255,
      type: Type.Fire,
      category: Category.Starter,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Combusken,
      dex: 256,
      type: Type.Fire,
      type2: Type.Fighting,
      category: Category.Starter,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Blaziken,
      dex: 257,
      type: Type.Fire,
      type2: Type.Fighting,
      category: Category.Starter,
      eggGroup1: EggGroup.Field,
      megaEvolutions: [
        {
          name: PokemonName.MegaBlaziken,
          type: Type.Fire,
          type2: Type.Fighting
        }
      ]
    },
    {
      name: PokemonName.Mudkip,
      dex: 258,
      type: Type.Water,
      category: Category.Starter,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Water1
    },
    {
      name: PokemonName.Marshtomp,
      dex: 259,
      type: Type.Water,
      type2: Type.Ground,
      category: Category.Starter,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Water1
    },
    {
      name: PokemonName.Swampert,
      dex: 260,
      type: Type.Water,
      type2: Type.Ground,
      category: Category.Starter,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Water1,
      megaEvolutions: [
        {
          name: PokemonName.MegaSwampert,
          type: Type.Water,
          type2: Type.Ground
        }
      ]
    },
    {
      name: PokemonName.Poochyena,
      dex: 261,
      type: Type.Dark,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Mightyena,
      dex: 262,
      type: Type.Dark,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Zigzagoon,
      dex: 263,
      type: Type.Normal,
      eggGroup1: EggGroup.Field,
      regionalVariants: [
        {
          name: PokemonName.GalarianZigzagoon,
          type: Type.Dark,
          type2: Type.Normal
        }
      ]
    },
    {
      name: PokemonName.Linoone,
      dex: 264,
      type: Type.Normal,
      eggGroup1: EggGroup.Field,
      regionalVariants: [
        {
          name: PokemonName.GalarianLinoone,
          type: Type.Dark,
          type2: Type.Normal
        }
      ]
    },
    {
      name: PokemonName.Wurmple,
      dex: 265,
      type: Type.Bug,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Silcoon,
      dex: 266,
      type: Type.Bug,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Beautifly,
      dex: 267,
      type: Type.Bug,
      type2: Type.Flying,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Cascoon,
      dex: 268,
      type: Type.Bug,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Dustox,
      dex: 269,
      type: Type.Bug,
      type2: Type.Poison,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Lotad,
      dex: 270,
      type: Type.Water,
      type2: Type.Grass,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Grass
    },
    {
      name: PokemonName.Lombre,
      dex: 271,
      type: Type.Water,
      type2: Type.Grass,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Grass
    },
    {
      name: PokemonName.Ludicolo,
      dex: 272,
      type: Type.Water,
      type2: Type.Grass,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Grass
    },
    {
      name: PokemonName.Seedot,
      dex: 273,
      type: Type.Grass,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.Grass
    },
    {
      name: PokemonName.Nuzleaf,
      dex: 274,
      type: Type.Grass,
      type2: Type.Dark,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.Grass
    },
    {
      name: PokemonName.Shiftry,
      dex: 275,
      type: Type.Grass,
      type2: Type.Dark,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.Grass
    },
    {
      name: PokemonName.Taillow,
      dex: 276,
      type: Type.Normal,
      type2: Type.Flying,
      eggGroup1: EggGroup.Flying
    },
    {
      name: PokemonName.Swellow,
      dex: 277,
      type: Type.Normal,
      type2: Type.Flying,
      eggGroup1: EggGroup.Flying
    },
    {
      name: PokemonName.Wingull,
      dex: 278,
      type: Type.Water,
      type2: Type.Flying,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Flying
    },
    {
      name: PokemonName.Pelipper,
      dex: 279,
      type: Type.Water,
      type2: Type.Flying,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Flying
    },
    {
      name: PokemonName.Ralts,
      dex: 280,
      type: Type.Psychic,
      type2: Type.Fairy,
      eggGroup1: EggGroup.HumanLike,
      eggGroup2: EggGroup.Amorphous
    },
    {
      name: PokemonName.Kirlia,
      dex: 281,
      type: Type.Psychic,
      type2: Type.Fairy,
      eggGroup1: EggGroup.HumanLike,
      eggGroup2: EggGroup.Amorphous
    },
    {
      name: PokemonName.Gardevoir,
      dex: 282,
      type: Type.Psychic,
      type2: Type.Fairy,
      eggGroup1: EggGroup.HumanLike,
      eggGroup2: EggGroup.Amorphous,
      megaEvolutions: [
        {
          name: PokemonName.MegaGardevoir,
          type: Type.Psychic,
          type2: Type.Fairy
        }
      ]
    },
    {
      name: PokemonName.Surskit,
      dex: 283,
      type: Type.Bug,
      type2: Type.Water,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Bug
    },
    {
      name: PokemonName.Masquerain,
      dex: 284,
      type: Type.Bug,
      type2: Type.Flying,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Bug
    },
    {
      name: PokemonName.Shroomish,
      dex: 285,
      type: Type.Grass,
      eggGroup1: EggGroup.Fairy,
      eggGroup2: EggGroup.Grass
    },
    {
      name: PokemonName.Breloom,
      dex: 286,
      type: Type.Grass,
      type2: Type.Fighting,
      eggGroup1: EggGroup.Fairy,
      eggGroup2: EggGroup.Grass
    },
    {
      name: PokemonName.Slakoth,
      dex: 287,
      type: Type.Normal,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Vigoroth,
      dex: 288,
      type: Type.Normal,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Slaking,
      dex: 289,
      type: Type.Normal,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Nincada,
      dex: 290,
      type: Type.Bug,
      type2: Type.Ground,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Ninjask,
      dex: 291,
      type: Type.Bug,
      type2: Type.Flying,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Shedinja,
      dex: 292,
      type: Type.Bug,
      type2: Type.Ghost,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Whismur,
      dex: 293,
      type: Type.Normal,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Field
    },
    {
      name: PokemonName.Loudred,
      dex: 294,
      type: Type.Normal,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Field
    },
    {
      name: PokemonName.Exploud,
      dex: 295,
      type: Type.Normal,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Field
    },
    {
      name: PokemonName.Makuhita,
      dex: 296,
      type: Type.Fighting,
      eggGroup1: EggGroup.HumanLike
    },
    {
      name: PokemonName.Hariyama,
      dex: 297,
      type: Type.Fighting,
      eggGroup1: EggGroup.HumanLike
    },
    {
      name: PokemonName.Azurill,
      dex: 298,
      type: Type.Normal,
      type2: Type.Fairy,
      category: Category.Baby,
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Nosepass,
      dex: 299,
      type: Type.Rock,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Skitty,
      dex: 300,
      type: Type.Normal,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.Fairy
    },
    {
      name: PokemonName.Delcatty,
      dex: 301,
      type: Type.Normal,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.Fairy
    },
    {
      name: PokemonName.Sableye,
      dex: 302,
      type: Type.Dark,
      type2: Type.Ghost,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.HumanLike,
      megaEvolutions: [
        {
          name: PokemonName.MegaSableye,
          type: Type.Dark,
          type2: Type.Ghost
        }
      ]
    },
    {
      name: PokemonName.Mawile,
      dex: 303,
      type: Type.Steel,
      type2: Type.Fairy,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.Fairy,
      megaEvolutions: [
        {
          name: PokemonName.MegaMawile,
          type: Type.Steel,
          type2: Type.Fairy
        }
      ]
    },
    {
      name: PokemonName.Aron,
      dex: 304,
      type: Type.Steel,
      type2: Type.Rock,
      eggGroup1: EggGroup.Monster
    },
    {
      name: PokemonName.Lairon,
      dex: 305,
      type: Type.Steel,
      type2: Type.Rock,
      eggGroup1: EggGroup.Monster
    },
    {
      name: PokemonName.Aggron,
      dex: 306,
      type: Type.Steel,
      type2: Type.Rock,
      eggGroup1: EggGroup.Monster,
      megaEvolutions: [
        {
          name: PokemonName.MegaAggron,
          type: Type.Steel,
          type2: Type.Rock
        }
      ]
    },
    {
      name: PokemonName.Meditite,
      dex: 307,
      type: Type.Fighting,
      type2: Type.Psychic,
      eggGroup1: EggGroup.HumanLike
    },
    {
      name: PokemonName.Medicham,
      dex: 308,
      type: Type.Fighting,
      type2: Type.Psychic,
      eggGroup1: EggGroup.HumanLike,
      megaEvolutions: [
        {
          name: PokemonName.MegaMedicham,
          type: Type.Fighting,
          type2: Type.Psychic
        }
      ]
    },
    {
      name: PokemonName.Electrike,
      dex: 309,
      type: Type.Electric,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Manectric,
      dex: 310,
      type: Type.Electric,
      eggGroup1: EggGroup.Field,
      megaEvolutions: [
        {
          name: PokemonName.MegaManectric,
          type: Type.Electric
        }
      ]
    },
    {
      name: PokemonName.Plusle,
      dex: 311,
      type: Type.Electric,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Fairy
    },
    {
      name: PokemonName.Minun,
      dex: 312,
      type: Type.Electric,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Fairy
    },
    {
      name: PokemonName.Volbeat,
      dex: 313,
      type: Type.Bug,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Bug,
      eggGroup2: EggGroup.HumanLike
    },
    {
      name: PokemonName.Illumise,
      dex: 314,
      type: Type.Bug,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Bug,
      eggGroup2: EggGroup.HumanLike
    },
    {
      name: PokemonName.Roselia,
      dex: 315,
      type: Type.Grass,
      type2: Type.Poison,
      eggGroup1: EggGroup.Fairy,
      eggGroup2: EggGroup.Grass
    },
    {
      name: PokemonName.Gulpin,
      dex: 316,
      type: Type.Poison,
      eggGroup1: EggGroup.Amorphous
    },
    {
      name: PokemonName.Swalot,
      dex: 317,
      type: Type.Poison,
      eggGroup1: EggGroup.Amorphous
    },
    {
      name: PokemonName.Carvanha,
      dex: 318,
      type: Type.Water,
      type2: Type.Dark,
      eggGroup1: EggGroup.Water2
    },
    {
      name: PokemonName.Sharpedo,
      dex: 319,
      type: Type.Water,
      type2: Type.Dark,
      eggGroup1: EggGroup.Water2,
      megaEvolutions: [
        {
          name: PokemonName.MegaSharpedo,
          type: Type.Water,
          type2: Type.Dark
        }
      ]
    },
    {
      name: PokemonName.Wailmer,
      dex: 320,
      type: Type.Water,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.Water2
    },
    {
      name: PokemonName.Wailord,
      dex: 321,
      type: Type.Water,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.Water2
    },
    {
      name: PokemonName.Numel,
      dex: 322,
      type: Type.Fire,
      type2: Type.Ground,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Camerupt,
      dex: 323,
      type: Type.Fire,
      type2: Type.Ground,
      eggGroup1: EggGroup.Field,
      megaEvolutions: [
        {
          name: PokemonName.MegaCamerupt,
          type: Type.Fire,
          type2: Type.Ground
        }
      ]
    },
    {
      name: PokemonName.Torkoal,
      dex: 324,
      type: Type.Fire,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Spoink,
      dex: 325,
      type: Type.Psychic,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Grumpig,
      dex: 326,
      type: Type.Psychic,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Spinda,
      dex: 327,
      type: Type.Normal,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.HumanLike
    },
    {
      name: PokemonName.Trapinch,
      dex: 328,
      type: Type.Ground,
      eggGroup1: EggGroup.Bug,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Vibrava,
      dex: 329,
      type: Type.Ground,
      type2: Type.Dragon,
      eggGroup1: EggGroup.Bug,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Flygon,
      dex: 330,
      type: Type.Ground,
      type2: Type.Dragon,
      eggGroup1: EggGroup.Bug,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Cacnea,
      dex: 331,
      type: Type.Grass,
      eggGroup1: EggGroup.Grass,
      eggGroup2: EggGroup.HumanLike
    },
    {
      name: PokemonName.Cacturne,
      dex: 332,
      type: Type.Grass,
      type2: Type.Dark,
      eggGroup1: EggGroup.Grass,
      eggGroup2: EggGroup.HumanLike
    },
    {
      name: PokemonName.Swablu,
      dex: 333,
      type: Type.Normal,
      type2: Type.Flying,
      eggGroup1: EggGroup.Flying,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Altaria,
      dex: 334,
      type: Type.Dragon,
      type2: Type.Flying,
      eggGroup1: EggGroup.Flying,
      eggGroup2: EggGroup.Dragon,
      megaEvolutions: [
        {
          name: PokemonName.MegaAltaria,
          type: Type.Dragon,
          type2: Type.Fairy
        }
      ]
    },
    {
      name: PokemonName.Zangoose,
      dex: 335,
      type: Type.Normal,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Seviper,
      dex: 336,
      type: Type.Poison,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Lunatone,
      dex: 337,
      type: Type.Rock,
      type2: Type.Psychic,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Solrock,
      dex: 338,
      type: Type.Rock,
      type2: Type.Psychic,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Barboach,
      dex: 339,
      type: Type.Water,
      type2: Type.Ground,
      eggGroup1: EggGroup.Water2
    },
    {
      name: PokemonName.Whiscash,
      dex: 340,
      type: Type.Water,
      type2: Type.Ground,
      eggGroup1: EggGroup.Water2
    },
    {
      name: PokemonName.Corphish,
      dex: 341,
      type: Type.Water,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Water3
    },
    {
      name: PokemonName.Crawdaunt,
      dex: 342,
      type: Type.Water,
      type2: Type.Dark,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Water3
    },
    {
      name: PokemonName.Baltoy,
      dex: 343,
      type: Type.Ground,
      type2: Type.Psychic,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Claydol,
      dex: 344,
      type: Type.Ground,
      type2: Type.Psychic,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Lileep,
      dex: 345,
      type: Type.Rock,
      type2: Type.Grass,
      category: Category.Fossil,
      eggGroup1: EggGroup.Water3
    },
    {
      name: PokemonName.Cradily,
      dex: 346,
      type: Type.Rock,
      type2: Type.Grass,
      category: Category.Fossil,
      eggGroup1: EggGroup.Water3
    },
    {
      name: PokemonName.Anorith,
      dex: 347,
      type: Type.Rock,
      type2: Type.Bug,
      category: Category.Fossil,
      eggGroup1: EggGroup.Water3
    },
    {
      name: PokemonName.Armaldo,
      dex: 348,
      type: Type.Rock,
      type2: Type.Bug,
      category: Category.Fossil,
      eggGroup1: EggGroup.Water3
    },
    {
      name: PokemonName.Feebas,
      dex: 349,
      type: Type.Water,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Milotic,
      dex: 350,
      type: Type.Water,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Castform,
      dex: 351,
      type: Type.Normal,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Fairy,
      eggGroup2: EggGroup.Amorphous,
      alternateForms: [
        {
          name: PokemonName.CastformSunny,
          type: Type.Fire,
          category: Category.NonEvolving
        },
        {
          name: PokemonName.CastformRainy,
          type: Type.Water,
          category: Category.NonEvolving
        },
        {
          name: PokemonName.CastformSnowy,
          type: Type.Ice,
          category: Category.NonEvolving
        }
      ]
    },
    {
      name: PokemonName.Kecleon,
      dex: 352,
      type: Type.Normal,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Shuppet,
      dex: 353,
      type: Type.Ghost,
      eggGroup1: EggGroup.Amorphous
    },
    {
      name: PokemonName.Banette,
      dex: 354,
      type: Type.Ghost,
      eggGroup1: EggGroup.Amorphous,
      megaEvolutions: [
        {
          name: PokemonName.MegaBanette,
          type: Type.Ghost
        }
      ]
    },
    {
      name: PokemonName.Duskull,
      dex: 355,
      type: Type.Ghost,
      eggGroup1: EggGroup.Amorphous
    },
    {
      name: PokemonName.Dusclops,
      dex: 356,
      type: Type.Ghost,
      eggGroup1: EggGroup.Amorphous
    },
    {
      name: PokemonName.Tropius,
      dex: 357,
      type: Type.Grass,
      type2: Type.Flying,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Grass
    },
    {
      name: PokemonName.Chimecho,
      dex: 358,
      type: Type.Psychic,
      eggGroup1: EggGroup.Amorphous
    },
    {
      name: PokemonName.Absol,
      dex: 359,
      type: Type.Dark,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Field,
      megaEvolutions: [
        {
          name: PokemonName.MegaAbsol,
          type: Type.Dark
        }
      ]
    },
    {
      name: PokemonName.Wynaut,
      dex: 360,
      type: Type.Psychic,
      category: Category.Baby,
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Snorunt,
      dex: 361,
      type: Type.Ice,
      eggGroup1: EggGroup.Fairy,
      eggGroup2: EggGroup.Mineral
    },
    {
      name: PokemonName.Glalie,
      dex: 362,
      type: Type.Ice,
      eggGroup1: EggGroup.Fairy,
      eggGroup2: EggGroup.Mineral,
      megaEvolutions: [
        {
          name: PokemonName.MegaGlalie,
          type: Type.Ice
        }
      ]
    },
    {
      name: PokemonName.Spheal,
      dex: 363,
      type: Type.Ice,
      type2: Type.Water,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Field
    },
    {
      name: PokemonName.Sealeo,
      dex: 364,
      type: Type.Ice,
      type2: Type.Water,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Field
    },
    {
      name: PokemonName.Walrein,
      dex: 365,
      type: Type.Ice,
      type2: Type.Water,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Field
    },
    {
      name: PokemonName.Clamperl,
      dex: 366,
      type: Type.Water,
      eggGroup1: EggGroup.Water1
    },
    {
      name: PokemonName.Huntail,
      dex: 367,
      type: Type.Water,
      eggGroup1: EggGroup.Water1
    },
    {
      name: PokemonName.Gorebyss,
      dex: 368,
      type: Type.Water,
      eggGroup1: EggGroup.Water1
    },
    {
      name: PokemonName.Relicanth,
      dex: 369,
      type: Type.Water,
      type2: Type.Rock,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Water2
    },
    {
      name: PokemonName.Luvdisc,
      dex: 370,
      type: Type.Water,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Water2
    },
    {
      name: PokemonName.Bagon,
      dex: 371,
      type: Type.Dragon,
      eggGroup1: EggGroup.Dragon
    },
    {
      name: PokemonName.Shelgon,
      dex: 372,
      type: Type.Dragon,
      eggGroup1: EggGroup.Dragon
    },
    {
      name: PokemonName.Salamence,
      dex: 373,
      type: Type.Dragon,
      type2: Type.Flying,
      eggGroup1: EggGroup.Dragon,
      megaEvolutions: [
        {
          name: PokemonName.MegaSalamence,
          type: Type.Dragon,
          type2: Type.Flying
        }
      ]
    },
    {
      name: PokemonName.Beldum,
      dex: 374,
      type: Type.Steel,
      type2: Type.Psychic,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Metang,
      dex: 375,
      type: Type.Steel,
      type2: Type.Psychic,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Metagross,
      dex: 376,
      type: Type.Steel,
      type2: Type.Psychic,
      eggGroup1: EggGroup.Mineral,
      megaEvolutions: [
        {
          name: PokemonName.MegaMetagross,
          type: Type.Steel,
          type2: Type.Psychic
        }
      ]
    },
    {
      name: PokemonName.Regirock,
      dex: 377,
      type: Type.Rock,
      category: [Category.NonEvolving, Category.Legendary],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Regice,
      dex: 378,
      type: Type.Ice,
      category: [Category.NonEvolving, Category.Legendary],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Registeel,
      dex: 379,
      type: Type.Steel,
      category: [Category.NonEvolving, Category.Legendary],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Latias,
      dex: 380,
      type: Type.Dragon,
      type2: Type.Flying,
      category: [Category.NonEvolving, Category.Legendary],
      eggGroup1: EggGroup.NoEggs,
      megaEvolutions: [
        {
          name: PokemonName.MegaLatias,
          type: Type.Dragon,
          type2: Type.Flying
        }
      ]
    },
    {
      name: PokemonName.Latios,
      dex: 381,
      type: Type.Dragon,
      type2: Type.Flying,
      category: [Category.NonEvolving, Category.Legendary],
      eggGroup1: EggGroup.NoEggs,
      megaEvolutions: [
        {
          name: PokemonName.MegaLatios,
          type: Type.Dragon,
          type2: Type.Flying
        }
      ]
    },
    {
      name: PokemonName.Kyogre,
      dex: 382,
      type: Type.Water,
      category: [Category.NonEvolving, Category.Legendary],
      eggGroup1: EggGroup.NoEggs,
      alternateForms: [
        {
          name: PokemonName.KyogrePrimal,
          type: Type.Water
        }
      ]
    },
    {
      name: PokemonName.Groudon,
      dex: 383,
      type: Type.Ground,
      category: [Category.NonEvolving, Category.Legendary],
      eggGroup1: EggGroup.NoEggs,
      alternateForms: [
        {
          name: PokemonName.GroudonPrimal,
          type: Type.Ground
        }
      ]
    },
    {
      name: PokemonName.Rayquaza,
      dex: 384,
      type: Type.Dragon,
      type2: Type.Flying,
      category: [Category.NonEvolving, Category.Legendary],
      eggGroup1: EggGroup.NoEggs,
      megaEvolutions: [
        {
          name: PokemonName.MegaRayquaza,
          type: Type.Dragon,
          type2: Type.Flying
        }
      ]
    },
    {
      name: PokemonName.Jirachi,
      dex: 385,
      type: Type.Steel,
      type2: Type.Psychic,
      category: [Category.NonEvolving, Category.Mythical],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Deoxys,
      dex: 386,
      type: Type.Psychic,
      category: [Category.NonEvolving, Category.Mythical],
      eggGroup1: EggGroup.NoEggs
    }
  ]);
