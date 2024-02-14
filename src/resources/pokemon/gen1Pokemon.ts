import { mapNamesToPokemon } from "../../api/pokemonApi";
import { Pokemon } from "../../classes";
import { Category, EggGroup, PokemonName, Type } from "../../enums";

export const gen1Pokemon = (): Pokemon[] =>
  mapNamesToPokemon([
    {
      name: PokemonName.Bulbasaur,
      dex: 1,
      type: Type.Grass,
      type2: Type.Poison,
      category: Category.Starter,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Grass
    },
    {
      name: PokemonName.Ivysaur,
      dex: 2,
      type: Type.Grass,
      type2: Type.Poison,
      category: Category.Starter,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Grass
    },
    {
      name: PokemonName.Venusaur,
      dex: 3,
      type: Type.Grass,
      type2: Type.Poison,
      category: Category.Starter,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Grass,
      megaEvolutions: [
        {
          name: PokemonName.MegaVenusaur,
          type: Type.Grass,
          type2: Type.Poison
        }
      ]
    },
    {
      name: PokemonName.Charmander,
      dex: 4,
      type: Type.Fire,
      category: Category.Starter,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Charmeleon,
      dex: 5,
      type: Type.Fire,
      category: Category.Starter,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Charizard,
      dex: 6,
      type: Type.Fire,
      type2: Type.Flying,
      category: Category.Starter,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Dragon,
      megaEvolutions: [
        {
          name: PokemonName.MegaCharizardX,
          type: Type.Fire,
          type2: Type.Dragon
        },
        {
          name: PokemonName.MegaCharizardY,
          type: Type.Fire,
          type2: Type.Flying
        }
      ]
    },
    {
      name: PokemonName.Squirtle,
      dex: 7,
      type: Type.Water,
      category: Category.Starter,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Water1
    },
    {
      name: PokemonName.Wartortle,
      dex: 8,
      type: Type.Water,
      category: Category.Starter,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Water1
    },
    {
      name: PokemonName.Blastoise,
      dex: 9,
      type: Type.Water,
      category: Category.Starter,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Water1,
      megaEvolutions: [
        {
          name: PokemonName.MegaBlastoise,
          type: Type.Water
        }
      ]
    },
    {
      name: PokemonName.Caterpie,
      dex: 10,
      type: Type.Bug,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Metapod,
      dex: 11,
      type: Type.Bug,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Butterfree,
      dex: 12,
      type: Type.Bug,
      type2: Type.Flying,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Weedle,
      dex: 13,
      type: Type.Bug,
      type2: Type.Poison,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Kakuna,
      dex: 14,
      type: Type.Bug,
      type2: Type.Poison,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Beedrill,
      dex: 15,
      type: Type.Bug,
      type2: Type.Poison,
      eggGroup1: EggGroup.Bug,
      megaEvolutions: [
        {
          name: PokemonName.MegaBeedrill,
          type: Type.Bug,
          type2: Type.Poison
        }
      ]
    },
    {
      name: PokemonName.Pidgey,
      dex: 16,
      type: Type.Normal,
      type2: Type.Flying,
      eggGroup1: EggGroup.Flying
    },
    {
      name: PokemonName.Pidgeotto,
      dex: 17,
      type: Type.Normal,
      type2: Type.Flying,
      eggGroup1: EggGroup.Flying
    },
    {
      name: PokemonName.Pidgeot,
      dex: 18,
      type: Type.Normal,
      type2: Type.Flying,
      eggGroup1: EggGroup.Flying,
      megaEvolutions: [
        {
          name: PokemonName.MegaPidgeot,
          type: Type.Normal,
          type2: Type.Flying
        }
      ]
    },
    {
      name: PokemonName.Rattata,
      dex: 19,
      type: Type.Normal,
      eggGroup1: EggGroup.Field,
      regionalVariants: [
        {
          name: PokemonName.AlolanRattata,
          type: Type.Dark,
          type2: Type.Normal
        }
      ]
    },
    {
      name: PokemonName.Raticate,
      dex: 20,
      type: Type.Normal,
      eggGroup1: EggGroup.Field,
      regionalVariants: [
        {
          name: PokemonName.AlolanRaticate,
          type: Type.Dark,
          type2: Type.Normal
        }
      ]
    },
    {
      name: PokemonName.Spearow,
      dex: 21,
      type: Type.Normal,
      type2: Type.Flying,
      eggGroup1: EggGroup.Flying
    },
    {
      name: PokemonName.Fearow,
      dex: 22,
      type: Type.Normal,
      type2: Type.Flying,
      eggGroup1: EggGroup.Flying
    },
    {
      name: PokemonName.Ekans,
      dex: 23,
      type: Type.Poison,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Arbok,
      dex: 24,
      type: Type.Poison,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Pikachu,
      dex: 25,
      type: Type.Electric,
      category: Category.Starter,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.Fairy
    },
    {
      name: PokemonName.Raichu,
      dex: 26,
      type: Type.Electric,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.Fairy,
      regionalVariants: [
        {
          name: PokemonName.AlolanRaichu,
          type: Type.Electric,
          type2: Type.Psychic
        }
      ]
    },
    {
      name: PokemonName.Sandshrew,
      dex: 27,
      type: Type.Ground,
      eggGroup1: EggGroup.Field,
      regionalVariants: [
        {
          name: PokemonName.AlolanSandshrew,
          type: Type.Ice,
          type2: Type.Steel
        }
      ]
    },
    {
      name: PokemonName.Sandslash,
      dex: 28,
      type: Type.Ground,
      eggGroup1: EggGroup.Field,
      regionalVariants: [
        {
          name: PokemonName.AlolanSandslash,
          type: Type.Ice,
          type2: Type.Steel
        }
      ]
    },
    {
      name: PokemonName.NidoranF,
      dex: 29,
      type: Type.Poison,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Field
    },
    {
      name: PokemonName.Nidorina,
      dex: 30,
      type: Type.Poison,
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Nidoqueen,
      dex: 31,
      type: Type.Poison,
      type2: Type.Ground,
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.NidoranM,
      dex: 32,
      type: Type.Poison,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Field
    },
    {
      name: PokemonName.Nidorino,
      dex: 33,
      type: Type.Poison,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Field
    },
    {
      name: PokemonName.Nidoking,
      dex: 34,
      type: Type.Poison,
      type2: Type.Ground,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Field
    },
    {
      name: PokemonName.Clefairy,
      dex: 35,
      type: Type.Fairy,
      eggGroup1: EggGroup.Fairy
    },
    {
      name: PokemonName.Clefable,
      dex: 36,
      type: Type.Fairy,
      eggGroup1: EggGroup.Fairy
    },
    {
      name: PokemonName.Vulpix,
      dex: 37,
      type: Type.Fire,
      eggGroup1: EggGroup.Field,
      regionalVariants: [
        {
          name: PokemonName.AlolanVulpix,
          type: Type.Ice
        }
      ]
    },
    {
      name: PokemonName.Ninetales,
      dex: 38,
      type: Type.Fire,
      eggGroup1: EggGroup.Field,
      regionalVariants: [
        {
          name: PokemonName.AlolanNinetales,
          type: Type.Ice,
          type2: Type.Fairy
        }
      ]
    },
    {
      name: PokemonName.Jigglypuff,
      dex: 39,
      type: Type.Normal,
      type2: Type.Fairy,
      eggGroup1: EggGroup.Fairy
    },
    {
      name: PokemonName.Wigglytuff,
      dex: 40,
      type: Type.Normal,
      type2: Type.Fairy,
      eggGroup1: EggGroup.Fairy
    },
    {
      name: PokemonName.Zubat,
      dex: 41,
      type: Type.Poison,
      type2: Type.Flying,
      eggGroup1: EggGroup.Flying
    },
    {
      name: PokemonName.Golbat,
      dex: 42,
      type: Type.Poison,
      type2: Type.Flying,
      eggGroup1: EggGroup.Flying
    },
    {
      name: PokemonName.Oddish,
      dex: 43,
      type: Type.Grass,
      type2: Type.Poison,
      eggGroup1: EggGroup.Grass
    },
    {
      name: PokemonName.Gloom,
      dex: 44,
      type: Type.Grass,
      type2: Type.Poison,
      eggGroup1: EggGroup.Grass
    },
    {
      name: PokemonName.Vileplume,
      dex: 45,
      type: Type.Grass,
      type2: Type.Poison,
      eggGroup1: EggGroup.Grass
    },
    {
      name: PokemonName.Paras,
      dex: 46,
      type: Type.Bug,
      type2: Type.Poison,
      eggGroup1: EggGroup.Bug,
      eggGroup2: EggGroup.Grass
    },
    {
      name: PokemonName.Parasect,
      dex: 47,
      type: Type.Bug,
      type2: Type.Grass,
      eggGroup1: EggGroup.Bug,
      eggGroup2: EggGroup.Grass
    },
    {
      name: PokemonName.Venonat,
      dex: 48,
      type: Type.Bug,
      type2: Type.Poison,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Venomoth,
      dex: 49,
      type: Type.Bug,
      type2: Type.Poison,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Diglett,
      dex: 50,
      type: Type.Ground,
      eggGroup1: EggGroup.Field,
      regionalVariants: [
        {
          name: PokemonName.AlolanDiglett,
          type: Type.Ground,
          type2: Type.Steel
        }
      ]
    },
    {
      name: PokemonName.Dugtrio,
      dex: 51,
      type: Type.Ground,
      eggGroup1: EggGroup.Field,
      regionalVariants: [
        {
          name: PokemonName.AlolanDugtrio,
          type: Type.Ground,
          type2: Type.Steel
        }
      ]
    },
    {
      name: PokemonName.Meowth,
      dex: 52,
      type: Type.Normal,
      eggGroup1: EggGroup.Field,
      regionalVariants: [
        {
          name: PokemonName.AlolanMeowth,
          type: Type.Dark
        },
        {
          name: PokemonName.GalarianMeowth,
          type: Type.Steel
        }
      ]
    },
    {
      name: PokemonName.Persian,
      dex: 53,
      type: Type.Normal,
      eggGroup1: EggGroup.Field,
      regionalVariants: [
        {
          name: PokemonName.AlolanPersian,
          type: Type.Dark
        }
      ]
    },
    {
      name: PokemonName.Psyduck,
      dex: 54,
      type: Type.Water,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Field
    },
    {
      name: PokemonName.Golduck,
      dex: 55,
      type: Type.Water,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Field
    },
    {
      name: PokemonName.Mankey,
      dex: 56,
      type: Type.Fighting,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Primeape,
      dex: 57,
      type: Type.Fighting,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Growlithe,
      dex: 58,
      type: Type.Fire,
      eggGroup1: EggGroup.Field,
      regionalVariants: [
        {
          name: PokemonName.HisuianGrowlithe,
          type: Type.Fire,
          type2: Type.Rock
        }
      ]
    },
    {
      name: PokemonName.Arcanine,
      dex: 59,
      type: Type.Fire,
      eggGroup1: EggGroup.Field,
      regionalVariants: [
        {
          name: PokemonName.HisuianArcanine,
          type: Type.Fire,
          type2: Type.Rock
        }
      ]
    },
    {
      name: PokemonName.Poliwag,
      dex: 60,
      type: Type.Water,
      eggGroup1: EggGroup.Water1
    },
    {
      name: PokemonName.Poliwhirl,
      dex: 61,
      type: Type.Water,
      eggGroup1: EggGroup.Water1
    },
    {
      name: PokemonName.Poliwrath,
      dex: 62,
      type: Type.Water,
      type2: Type.Fighting,
      eggGroup1: EggGroup.Water1
    },
    {
      name: PokemonName.Abra,
      dex: 63,
      type: Type.Psychic,
      eggGroup1: EggGroup.HumanLike
    },
    {
      name: PokemonName.Kadabra,
      dex: 64,
      type: Type.Psychic,
      eggGroup1: EggGroup.HumanLike
    },
    {
      name: PokemonName.Alakazam,
      dex: 65,
      type: Type.Psychic,
      eggGroup1: EggGroup.HumanLike,
      megaEvolutions: [
        {
          name: PokemonName.MegaAlakazam,
          type: Type.Psychic
        }
      ]
    },
    {
      name: PokemonName.Machop,
      dex: 66,
      type: Type.Fighting,
      eggGroup1: EggGroup.HumanLike
    },
    {
      name: PokemonName.Machoke,
      dex: 67,
      type: Type.Fighting,
      eggGroup1: EggGroup.HumanLike
    },
    {
      name: PokemonName.Machamp,
      dex: 68,
      type: Type.Fighting,
      eggGroup1: EggGroup.HumanLike
    },
    {
      name: PokemonName.Bellsprout,
      dex: 69,
      type: Type.Grass,
      type2: Type.Poison,
      eggGroup1: EggGroup.Grass
    },
    {
      name: PokemonName.Weepinbell,
      dex: 70,
      type: Type.Grass,
      type2: Type.Poison,
      eggGroup1: EggGroup.Grass
    },
    {
      name: PokemonName.Victreebel,
      dex: 71,
      type: Type.Grass,
      type2: Type.Poison,
      eggGroup1: EggGroup.Grass
    },
    {
      name: PokemonName.Tentacool,
      dex: 72,
      type: Type.Water,
      type2: Type.Poison,
      eggGroup1: EggGroup.Water3
    },
    {
      name: PokemonName.Tentacruel,
      dex: 73,
      type: Type.Water,
      type2: Type.Poison,
      eggGroup1: EggGroup.Water3
    },
    {
      name: PokemonName.Geodude,
      dex: 74,
      type: Type.Rock,
      type2: Type.Ground,
      eggGroup1: EggGroup.Mineral,
      regionalVariants: [
        {
          name: PokemonName.AlolanGeodude,
          type: Type.Rock,
          type2: Type.Electric
        }
      ]
    },
    {
      name: PokemonName.Graveler,
      dex: 75,
      type: Type.Rock,
      type2: Type.Ground,
      eggGroup1: EggGroup.Mineral,
      regionalVariants: [
        {
          name: PokemonName.AlolanGraveler,
          type: Type.Rock,
          type2: Type.Electric
        }
      ]
    },
    {
      name: PokemonName.Golem,
      dex: 76,
      type: Type.Rock,
      type2: Type.Ground,
      eggGroup1: EggGroup.Mineral,
      regionalVariants: [
        {
          name: PokemonName.AlolanGolem,
          type: Type.Rock,
          type2: Type.Electric
        }
      ]
    },
    {
      name: PokemonName.Ponyta,
      dex: 77,
      type: Type.Fire,
      eggGroup1: EggGroup.Field,
      regionalVariants: [
        {
          name: PokemonName.GalarianPonyta,
          type: Type.Psychic
        }
      ]
    },
    {
      name: PokemonName.Rapidash,
      dex: 78,
      type: Type.Fire,
      eggGroup1: EggGroup.Field,
      regionalVariants: [
        {
          name: PokemonName.GalarianRapidash,
          type: Type.Psychic,
          type2: Type.Fairy
        }
      ]
    },
    {
      name: PokemonName.Slowpoke,
      dex: 79,
      type: Type.Water,
      type2: Type.Psychic,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Water1,
      regionalVariants: [
        {
          name: PokemonName.GalarianSlowpoke,
          type: Type.Psychic
        }
      ]
    },
    {
      name: PokemonName.Slowbro,
      dex: 80,
      type: Type.Water,
      type2: Type.Psychic,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Water1,
      regionalVariants: [
        {
          name: PokemonName.GalarianSlowbro,
          type: Type.Poison,
          type2: Type.Psychic
        }
      ],
      megaEvolutions: [
        {
          name: PokemonName.MegaSlowbro,
          type: Type.Water,
          type2: Type.Psychic
        }
      ]
    },
    {
      name: PokemonName.Magnemite,
      dex: 81,
      type: Type.Electric,
      type2: Type.Steel,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Magneton,
      dex: 82,
      type: Type.Electric,
      type2: Type.Steel,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Farfetchd,
      dex: 83,
      type: Type.Normal,
      type2: Type.Flying,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Flying,
      eggGroup2: EggGroup.Field,
      regionalVariants: [
        {
          name: PokemonName.GalarianFarfetchd,
          type: Type.Fighting
        }
      ]
    },
    {
      name: PokemonName.Doduo,
      dex: 84,
      type: Type.Normal,
      type2: Type.Flying,
      eggGroup1: EggGroup.Flying
    },
    {
      name: PokemonName.Dodrio,
      dex: 85,
      type: Type.Normal,
      type2: Type.Flying,
      eggGroup1: EggGroup.Flying
    },
    {
      name: PokemonName.Seel,
      dex: 86,
      type: Type.Water,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Field
    },
    {
      name: PokemonName.Dewgong,
      dex: 87,
      type: Type.Water,
      type2: Type.Ice,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Field
    },
    {
      name: PokemonName.Grimer,
      dex: 88,
      type: Type.Poison,
      eggGroup1: EggGroup.Amorphous,
      regionalVariants: [
        {
          name: PokemonName.AlolanGrimer,
          type: Type.Poison,
          type2: Type.Dark
        }
      ]
    },
    {
      name: PokemonName.Muk,
      dex: 89,
      type: Type.Poison,
      eggGroup1: EggGroup.Amorphous,
      regionalVariants: [
        {
          name: PokemonName.AlolanMuk,
          type: Type.Poison,
          type2: Type.Dark
        }
      ]
    },
    {
      name: PokemonName.Shellder,
      dex: 90,
      type: Type.Water,
      eggGroup1: EggGroup.Water3
    },
    {
      name: PokemonName.Cloyster,
      dex: 91,
      type: Type.Water,
      type2: Type.Ice,
      eggGroup1: EggGroup.Water3
    },
    {
      name: PokemonName.Gastly,
      dex: 92,
      type: Type.Ghost,
      type2: Type.Poison,
      eggGroup1: EggGroup.Amorphous
    },
    {
      name: PokemonName.Haunter,
      dex: 93,
      type: Type.Ghost,
      type2: Type.Poison,
      eggGroup1: EggGroup.Amorphous
    },
    {
      name: PokemonName.Gengar,
      dex: 94,
      type: Type.Ghost,
      type2: Type.Poison,
      eggGroup1: EggGroup.Amorphous,
      megaEvolutions: [
        {
          name: PokemonName.MegaGengar,
          type: Type.Ghost,
          type2: Type.Poison
        }
      ]
    },
    {
      name: PokemonName.Onix,
      dex: 95,
      type: Type.Rock,
      type2: Type.Ground,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Drowzee,
      dex: 96,
      type: Type.Psychic,
      eggGroup1: EggGroup.HumanLike
    },
    {
      name: PokemonName.Hypno,
      dex: 97,
      type: Type.Psychic,
      eggGroup1: EggGroup.HumanLike
    },
    {
      name: PokemonName.Krabby,
      dex: 98,
      type: Type.Water,
      eggGroup1: EggGroup.Water3
    },
    {
      name: PokemonName.Kingler,
      dex: 99,
      type: Type.Water,
      eggGroup1: EggGroup.Water3
    },
    {
      name: PokemonName.Voltorb,
      dex: 100,
      type: Type.Electric,
      eggGroup1: EggGroup.Mineral,
      regionalVariants: [
        {
          name: PokemonName.HisuianVoltorb,
          type: Type.Electric,
          type2: Type.Grass
        }
      ]
    },
    {
      name: PokemonName.Electrode,
      dex: 101,
      type: Type.Electric,
      eggGroup1: EggGroup.Mineral,
      regionalVariants: [
        {
          name: PokemonName.HisuianElectrode,
          type: Type.Electric,
          type2: Type.Grass
        }
      ]
    },
    {
      name: PokemonName.Exeggcute,
      dex: 102,
      type: Type.Grass,
      type2: Type.Psychic,
      eggGroup1: EggGroup.Grass
    },
    {
      name: PokemonName.Exeggutor,
      dex: 103,
      type: Type.Grass,
      type2: Type.Psychic,
      eggGroup1: EggGroup.Grass,
      regionalVariants: [
        {
          name: PokemonName.AlolanExeggutor,
          type: Type.Grass,
          type2: Type.Dragon
        }
      ]
    },
    {
      name: PokemonName.Cubone,
      dex: 104,
      type: Type.Ground,
      eggGroup1: EggGroup.Monster
    },
    {
      name: PokemonName.Marowak,
      dex: 105,
      type: Type.Ground,
      eggGroup1: EggGroup.Monster,
      regionalVariants: [
        {
          name: PokemonName.AlolanMarowak,
          type: Type.Fire,
          type2: Type.Ghost
        }
      ]
    },
    {
      name: PokemonName.Hitmonlee,
      dex: 106,
      type: Type.Fighting,
      eggGroup1: EggGroup.HumanLike
    },
    {
      name: PokemonName.Hitmonchan,
      dex: 107,
      type: Type.Fighting,
      eggGroup1: EggGroup.HumanLike
    },
    {
      name: PokemonName.Lickitung,
      dex: 108,
      type: Type.Normal,
      eggGroup1: EggGroup.Monster
    },
    {
      name: PokemonName.Koffing,
      dex: 109,
      type: Type.Poison,
      eggGroup1: EggGroup.Amorphous
    },
    {
      name: PokemonName.Weezing,
      dex: 110,
      type: Type.Poison,
      eggGroup1: EggGroup.Amorphous,
      regionalVariants: [
        {
          name: PokemonName.GalarianWeezing,
          type: Type.Poison,
          type2: Type.Fairy
        }
      ]
    },
    {
      name: PokemonName.Rhyhorn,
      dex: 111,
      type: Type.Ground,
      type2: Type.Rock,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Field
    },
    {
      name: PokemonName.Rhydon,
      dex: 112,
      type: Type.Ground,
      type2: Type.Rock,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Field
    },
    {
      name: PokemonName.Chansey,
      dex: 113,
      type: Type.Normal,
      eggGroup1: EggGroup.Fairy
    },
    {
      name: PokemonName.Tangela,
      dex: 114,
      type: Type.Grass,
      eggGroup1: EggGroup.Grass
    },
    {
      name: PokemonName.Kangaskhan,
      dex: 115,
      type: Type.Normal,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Monster,
      megaEvolutions: [
        {
          name: PokemonName.MegaKangaskhan,
          type: Type.Normal
        }
      ]
    },
    {
      name: PokemonName.Horsea,
      dex: 116,
      type: Type.Water,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Seadra,
      dex: 117,
      type: Type.Water,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Goldeen,
      dex: 118,
      type: Type.Water,
      eggGroup1: EggGroup.Water2
    },
    {
      name: PokemonName.Seaking,
      dex: 119,
      type: Type.Water,
      eggGroup1: EggGroup.Water2
    },
    {
      name: PokemonName.Staryu,
      dex: 120,
      type: Type.Water,
      eggGroup1: EggGroup.Water3
    },
    {
      name: PokemonName.Starmie,
      dex: 121,
      type: Type.Water,
      type2: Type.Psychic,
      eggGroup1: EggGroup.Water3
    },
    {
      name: PokemonName.MrMime,
      dex: 122,
      type: Type.Psychic,
      type2: Type.Fairy,
      eggGroup1: EggGroup.HumanLike,
      regionalVariants: [
        {
          name: PokemonName.GalarianMrMime,
          type: Type.Ice,
          type2: Type.Psychic
        }
      ]
    },
    {
      name: PokemonName.Scyther,
      dex: 123,
      type: Type.Bug,
      type2: Type.Flying,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Jynx,
      dex: 124,
      type: Type.Ice,
      type2: Type.Psychic,
      eggGroup1: EggGroup.HumanLike
    },
    {
      name: PokemonName.Electabuzz,
      dex: 125,
      type: Type.Electric,
      eggGroup1: EggGroup.HumanLike
    },
    {
      name: PokemonName.Magmar,
      dex: 126,
      type: Type.Fire,
      eggGroup1: EggGroup.HumanLike
    },
    {
      name: PokemonName.Pinsir,
      dex: 127,
      type: Type.Bug,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Bug,
      megaEvolutions: [
        {
          name: PokemonName.MegaPinsir,
          type: Type.Bug,
          type2: Type.Flying
        }
      ]
    },
    {
      name: PokemonName.Tauros,
      dex: 128,
      type: Type.Normal,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Field,
      regionalVariants: [
        {
          name: PokemonName.PaldeanTaurosCombat,
          type: Type.Fighting,
          category: Category.NonEvolving
        },
        {
          name: PokemonName.PaldeanTaurosBlaze,
          type: Type.Fighting,
          type2: Type.Fire,
          category: Category.NonEvolving
        },
        {
          name: PokemonName.PaldeanTaurosAqua,
          type: Type.Fighting,
          type2: Type.Water,
          category: Category.NonEvolving
        }
      ]
    },
    {
      name: PokemonName.Magikarp,
      dex: 129,
      type: Type.Water,
      eggGroup1: EggGroup.Water2,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Gyarados,
      dex: 130,
      type: Type.Water,
      type2: Type.Flying,
      eggGroup1: EggGroup.Water2,
      eggGroup2: EggGroup.Dragon,
      megaEvolutions: [
        {
          name: PokemonName.MegaGyarados,
          type: Type.Water,
          type2: Type.Dark
        }
      ]
    },
    {
      name: PokemonName.Lapras,
      dex: 131,
      type: Type.Water,
      type2: Type.Ice,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Water1
    },
    {
      name: PokemonName.Ditto,
      dex: 132,
      type: Type.Normal,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Ditto
    },
    {
      name: PokemonName.Eevee,
      dex: 133,
      type: Type.Normal,
      category: Category.Starter,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Vaporeon,
      dex: 134,
      type: Type.Water,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Jolteon,
      dex: 135,
      type: Type.Electric,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Flareon,
      dex: 136,
      type: Type.Fire,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Porygon,
      dex: 137,
      type: Type.Normal,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Omanyte,
      dex: 138,
      type: Type.Rock,
      type2: Type.Water,
      category: Category.Fossil,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Water3
    },
    {
      name: PokemonName.Omastar,
      dex: 139,
      type: Type.Rock,
      type2: Type.Water,
      category: Category.Fossil,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Water3
    },
    {
      name: PokemonName.Kabuto,
      dex: 140,
      type: Type.Rock,
      type2: Type.Water,
      category: Category.Fossil,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Water3
    },
    {
      name: PokemonName.Kabutops,
      dex: 141,
      type: Type.Rock,
      type2: Type.Water,
      category: Category.Fossil,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Water3
    },
    {
      name: PokemonName.Aerodactyl,
      dex: 142,
      type: Type.Rock,
      type2: Type.Flying,
      category: [Category.Fossil, Category.NonEvolving],
      eggGroup1: EggGroup.Flying,
      megaEvolutions: [
        {
          name: PokemonName.MegaAerodactyl,
          type: Type.Rock,
          type2: Type.Flying
        }
      ]
    },
    {
      name: PokemonName.Snorlax,
      dex: 143,
      type: Type.Normal,
      eggGroup1: EggGroup.Monster
    },
    {
      name: PokemonName.Articuno,
      dex: 144,
      type: Type.Ice,
      type2: Type.Flying,
      category: [Category.NonEvolving, Category.Legendary],
      eggGroup1: EggGroup.NoEggs,
      regionalVariants: [
        {
          name: PokemonName.GalarianArticuno,
          type: Type.Psychic,
          type2: Type.Flying,
          category: [Category.NonEvolving, Category.Legendary]
        }
      ]
    },
    {
      name: PokemonName.Zapdos,
      dex: 145,
      type: Type.Electric,
      type2: Type.Flying,
      category: [Category.NonEvolving, Category.Legendary],
      eggGroup1: EggGroup.NoEggs,
      regionalVariants: [
        {
          name: PokemonName.GalarianZapdos,
          type: Type.Fighting,
          type2: Type.Flying,
          category: [Category.NonEvolving, Category.Legendary]
        }
      ]
    },
    {
      name: PokemonName.Moltres,
      dex: 146,
      type: Type.Fire,
      type2: Type.Flying,
      category: [Category.NonEvolving, Category.Legendary],
      eggGroup1: EggGroup.NoEggs,
      regionalVariants: [
        {
          name: PokemonName.GalarianMoltres,
          type: Type.Dark,
          type2: Type.Flying,
          category: [Category.NonEvolving, Category.Legendary]
        }
      ]
    },
    {
      name: PokemonName.Dratini,
      dex: 147,
      type: Type.Dragon,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Dragonair,
      dex: 148,
      type: Type.Dragon,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Dragonite,
      dex: 149,
      type: Type.Dragon,
      type2: Type.Flying,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Mewtwo,
      dex: 150,
      type: Type.Psychic,
      category: [Category.NonEvolving, Category.Legendary],
      eggGroup1: EggGroup.NoEggs,
      megaEvolutions: [
        {
          name: PokemonName.MegaMewtwoX,
          type: Type.Psychic,
          type2: Type.Fighting
        },
        {
          name: PokemonName.MegaMewtwoY,
          type: Type.Psychic
        }
      ]
    },
    {
      name: PokemonName.Mew,
      dex: 151,
      type: Type.Psychic,
      category: [Category.NonEvolving, Category.Mythical],
      eggGroup1: EggGroup.NoEggs
    }
  ]);
