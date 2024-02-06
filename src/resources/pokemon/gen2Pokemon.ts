import { mapNamesToPokemon } from "../../api/pokemonApi";
import { Pokemon } from "../../classes";
import { Category, EggGroup, PokemonName, Type } from "../../enums";
export const gen2Pokemon = (): Pokemon[] =>
  mapNamesToPokemon([
    {
      name: PokemonName.Chikorita,
      dex: 152,
      type: Type.Grass,
      category: Category.Starter,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Grass
    },
    {
      name: PokemonName.Bayleef,
      dex: 153,
      type: Type.Grass,
      category: Category.Starter,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Grass
    },
    {
      name: PokemonName.Meganium,
      dex: 154,
      type: Type.Grass,
      category: Category.Starter,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Grass
    },
    {
      name: PokemonName.Cyndaquil,
      dex: 155,
      type: Type.Fire,
      category: Category.Starter,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Quilava,
      dex: 156,
      type: Type.Fire,
      category: Category.Starter,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Typhlosion,
      dex: 157,
      type: Type.Fire,
      category: Category.Starter,
      eggGroup1: EggGroup.Field,
      regionalVariants: [
        {
          name: PokemonName.HisuianTyphlosion,
          type: Type.Fire,
          type2: Type.Ghost,
          category: Category.Starter
        }
      ]
    },
    {
      name: PokemonName.Totodile,
      dex: 158,
      type: Type.Water,
      category: Category.Starter,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Water1
    },
    {
      name: PokemonName.Croconaw,
      dex: 159,
      type: Type.Water,
      category: Category.Starter,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Water1
    },
    {
      name: PokemonName.Feraligatr,
      dex: 160,
      type: Type.Water,
      category: Category.Starter,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Water1
    },
    {
      name: PokemonName.Sentret,
      dex: 161,
      type: Type.Normal,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Furret,
      dex: 162,
      type: Type.Normal,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Hoothoot,
      dex: 163,
      type: Type.Normal,
      type2: Type.Flying,
      eggGroup1: EggGroup.Flying
    },
    {
      name: PokemonName.Noctowl,
      dex: 164,
      type: Type.Normal,
      type2: Type.Flying,
      eggGroup1: EggGroup.Flying
    },
    {
      name: PokemonName.Ledyba,
      dex: 165,
      type: Type.Bug,
      type2: Type.Flying,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Ledian,
      dex: 166,
      type: Type.Bug,
      type2: Type.Flying,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Spinarak,
      dex: 167,
      type: Type.Bug,
      type2: Type.Poison,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Ariados,
      dex: 168,
      type: Type.Bug,
      type2: Type.Poison,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Crobat,
      dex: 169,
      type: Type.Poison,
      type2: Type.Flying,
      eggGroup1: EggGroup.Flying
    },
    {
      name: PokemonName.Chinchou,
      dex: 170,
      type: Type.Water,
      type2: Type.Electric,
      eggGroup1: EggGroup.Water2
    },
    {
      name: PokemonName.Lanturn,
      dex: 171,
      type: Type.Water,
      type2: Type.Electric,
      eggGroup1: EggGroup.Water2
    },
    {
      name: PokemonName.Pichu,
      dex: 172,
      type: Type.Electric,
      category: Category.Baby,
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Cleffa,
      dex: 173,
      type: Type.Fairy,
      category: Category.Baby,
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Igglybuff,
      dex: 174,
      type: Type.Normal,
      type2: Type.Fairy,
      category: Category.Baby,
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Togepi,
      dex: 175,
      type: Type.Fairy,
      category: Category.Baby,
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Togetic,
      dex: 176,
      type: Type.Fairy,
      type2: Type.Flying,
      eggGroup1: EggGroup.Flying,
      eggGroup2: EggGroup.Fairy
    },
    {
      name: PokemonName.Natu,
      dex: 177,
      type: Type.Psychic,
      type2: Type.Flying,
      eggGroup1: EggGroup.Flying
    },
    {
      name: PokemonName.Xatu,
      dex: 178,
      type: Type.Psychic,
      type2: Type.Flying,
      eggGroup1: EggGroup.Flying
    },
    {
      name: PokemonName.Mareep,
      dex: 179,
      type: Type.Electric,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Field
    },
    {
      name: PokemonName.Flaaffy,
      dex: 180,
      type: Type.Electric,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Field
    },
    {
      name: PokemonName.Ampharos,
      dex: 181,
      type: Type.Electric,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Field,
      megaEvolutions: [
        {
          name: PokemonName.MegaAmpharos,
          type: Type.Electric,
          type2: Type.Dragon
        }
      ]
    },
    {
      name: PokemonName.Bellossom,
      dex: 182,
      type: Type.Grass,
      eggGroup1: EggGroup.Grass
    },
    {
      name: PokemonName.Marill,
      dex: 183,
      type: Type.Water,
      type2: Type.Fairy,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Fairy
    },
    {
      name: PokemonName.Azumarill,
      dex: 184,
      type: Type.Water,
      type2: Type.Fairy,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Fairy
    },
    {
      name: PokemonName.Sudowoodo,
      dex: 185,
      type: Type.Rock,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Politoed,
      dex: 186,
      type: Type.Water,
      eggGroup1: EggGroup.Water1
    },
    {
      name: PokemonName.Hoppip,
      dex: 187,
      type: Type.Grass,
      type2: Type.Flying,
      eggGroup1: EggGroup.Fairy,
      eggGroup2: EggGroup.Grass
    },
    {
      name: PokemonName.Skiploom,
      dex: 188,
      type: Type.Grass,
      type2: Type.Flying,
      eggGroup1: EggGroup.Fairy,
      eggGroup2: EggGroup.Grass
    },
    {
      name: PokemonName.Jumpluff,
      dex: 189,
      type: Type.Grass,
      type2: Type.Flying,
      eggGroup1: EggGroup.Fairy,
      eggGroup2: EggGroup.Grass
    },
    {
      name: PokemonName.Aipom,
      dex: 190,
      type: Type.Normal,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Sunkern,
      dex: 191,
      type: Type.Grass,
      eggGroup1: EggGroup.Grass
    },
    {
      name: PokemonName.Sunflora,
      dex: 192,
      type: Type.Grass,
      eggGroup1: EggGroup.Grass
    },
    {
      name: PokemonName.Yanma,
      dex: 193,
      type: Type.Bug,
      type2: Type.Flying,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Wooper,
      dex: 194,
      type: Type.Water,
      type2: Type.Ground,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Field,
      regionalVariants: [
        {
          name: PokemonName.PaldeanWooper,
          type: Type.Poison,
          type2: Type.Ground
        }
      ]
    },
    {
      name: PokemonName.Quagsire,
      dex: 195,
      type: Type.Water,
      type2: Type.Ground,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Field
    },
    {
      name: PokemonName.Espeon,
      dex: 196,
      type: Type.Psychic,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Umbreon,
      dex: 197,
      type: Type.Dark,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Murkrow,
      dex: 198,
      type: Type.Dark,
      type2: Type.Flying,
      eggGroup1: EggGroup.Flying
    },
    {
      name: PokemonName.Slowking,
      dex: 199,
      type: Type.Water,
      type2: Type.Psychic,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Water1,
      regionalVariants: [
        {
          name: PokemonName.GalarianSlowking,
          type: Type.Poison,
          type2: Type.Psychic
        }
      ]
    },
    {
      name: PokemonName.Misdreavus,
      dex: 200,
      type: Type.Ghost,
      eggGroup1: EggGroup.Amorphous
    },
    {
      name: PokemonName.Unown,
      dex: 201,
      type: Type.Psychic,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Wobbuffet,
      dex: 202,
      type: Type.Psychic,
      eggGroup1: EggGroup.Amorphous
    },
    {
      name: PokemonName.Girafarig,
      dex: 203,
      type: Type.Normal,
      type2: Type.Psychic,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Pineco,
      dex: 204,
      type: Type.Bug,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Forretress,
      dex: 205,
      type: Type.Bug,
      type2: Type.Steel,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Dunsparce,
      dex: 206,
      type: Type.Normal,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Gligar,
      dex: 207,
      type: Type.Ground,
      type2: Type.Flying,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Steelix,
      dex: 208,
      type: Type.Steel,
      type2: Type.Ground,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Snubbull,
      dex: 209,
      type: Type.Fairy,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.Fairy
    },
    {
      name: PokemonName.Granbull,
      dex: 210,
      type: Type.Fairy,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.Fairy
    },
    {
      name: PokemonName.Qwilfish,
      dex: 211,
      type: Type.Water,
      type2: Type.Poison,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Water2,
      regionalVariants: [
        {
          name: PokemonName.HisuianQwilfish,
          type: Type.Dark,
          type2: Type.Poison
        }
      ]
    },
    {
      name: PokemonName.Scizor,
      dex: 212,
      type: Type.Bug,
      type2: Type.Steel,
      eggGroup1: EggGroup.Bug,
      megaEvolutions: [
        {
          name: PokemonName.MegaScizor,
          type: Type.Bug,
          type2: Type.Steel
        }
      ]
    },
    {
      name: PokemonName.Shuckle,
      dex: 213,
      type: Type.Bug,
      type2: Type.Rock,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Heracross,
      dex: 214,
      type: Type.Bug,
      type2: Type.Fighting,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Bug,
      megaEvolutions: [
        {
          name: PokemonName.MegaHeracross,
          type: Type.Bug,
          type2: Type.Fighting
        }
      ]
    },
    {
      name: PokemonName.Sneasel,
      dex: 215,
      type: Type.Dark,
      type2: Type.Ice,
      eggGroup1: EggGroup.Field,
      regionalVariants: [
        {
          name: PokemonName.HisuianSneasel,
          type: Type.Fighting,
          type2: Type.Poison
        }
      ]
    },
    {
      name: PokemonName.Teddiursa,
      dex: 216,
      type: Type.Normal,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Ursaring,
      dex: 217,
      type: Type.Normal,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Slugma,
      dex: 218,
      type: Type.Fire,
      eggGroup1: EggGroup.Amorphous
    },
    {
      name: PokemonName.Magcargo,
      dex: 219,
      type: Type.Fire,
      type2: Type.Rock,
      eggGroup1: EggGroup.Amorphous
    },
    {
      name: PokemonName.Swinub,
      dex: 220,
      type: Type.Ice,
      type2: Type.Ground,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Piloswine,
      dex: 221,
      type: Type.Ice,
      type2: Type.Ground,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Corsola,
      dex: 222,
      type: Type.Water,
      type2: Type.Rock,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Water3,
      regionalVariants: [
        {
          name: PokemonName.GalarianCorsola,
          type: Type.Ghost
        }
      ]
    },
    {
      name: PokemonName.Remoraid,
      dex: 223,
      type: Type.Water,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Water2
    },
    {
      name: PokemonName.Octillery,
      dex: 224,
      type: Type.Water,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Water2
    },
    {
      name: PokemonName.Delibird,
      dex: 225,
      type: Type.Ice,
      type2: Type.Flying,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Field
    },
    {
      name: PokemonName.Mantine,
      dex: 226,
      type: Type.Water,
      type2: Type.Flying,
      eggGroup1: EggGroup.Water1
    },
    {
      name: PokemonName.Skarmory,
      dex: 227,
      type: Type.Steel,
      type2: Type.Flying,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Flying
    },
    {
      name: PokemonName.Houndour,
      dex: 228,
      type: Type.Dark,
      type2: Type.Fire,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Houndoom,
      dex: 229,
      type: Type.Dark,
      type2: Type.Fire,
      eggGroup1: EggGroup.Field,
      megaEvolutions: [
        {
          name: PokemonName.MegaHoundoom,
          type: Type.Dark,
          type2: Type.Fire
        }
      ]
    },
    {
      name: PokemonName.Kingdra,
      dex: 230,
      type: Type.Water,
      type2: Type.Dragon,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Phanpy,
      dex: 231,
      type: Type.Ground,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Donphan,
      dex: 232,
      type: Type.Ground,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Porygon2,
      dex: 233,
      type: Type.Normal,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Stantler,
      dex: 234,
      type: Type.Normal,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Smeargle,
      dex: 235,
      type: Type.Normal,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Tyrogue,
      dex: 236,
      type: Type.Fighting,
      category: Category.Baby,
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Hitmontop,
      dex: 237,
      type: Type.Fighting,
      eggGroup1: EggGroup.HumanLike
    },
    {
      name: PokemonName.Smoochum,
      dex: 238,
      type: Type.Ice,
      type2: Type.Psychic,
      category: Category.Baby,
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Elekid,
      dex: 239,
      type: Type.Electric,
      category: Category.Baby,
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Magby,
      dex: 240,
      type: Type.Fire,
      category: Category.Baby,
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Miltank,
      dex: 241,
      type: Type.Normal,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Blissey,
      dex: 242,
      type: Type.Normal,
      eggGroup1: EggGroup.Fairy
    },
    {
      name: PokemonName.Raikou,
      dex: 243,
      type: Type.Electric,
      category: [Category.NonEvolving, Category.Legendary],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Entei,
      dex: 244,
      type: Type.Fire,
      category: [Category.NonEvolving, Category.Legendary],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Suicune,
      dex: 245,
      type: Type.Water,
      category: [Category.NonEvolving, Category.Legendary],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Larvitar,
      dex: 246,
      type: Type.Rock,
      type2: Type.Ground,
      eggGroup1: EggGroup.Monster
    },
    {
      name: PokemonName.Pupitar,
      dex: 247,
      type: Type.Rock,
      type2: Type.Ground,
      eggGroup1: EggGroup.Monster
    },
    {
      name: PokemonName.Tyranitar,
      dex: 248,
      type: Type.Rock,
      type2: Type.Dark,
      eggGroup1: EggGroup.Monster,
      megaEvolutions: [
        {
          name: PokemonName.MegaTyranitar,
          type: Type.Rock,
          type2: Type.Dark
        }
      ]
    },
    {
      name: PokemonName.Lugia,
      dex: 249,
      type: Type.Psychic,
      type2: Type.Flying,
      category: [Category.NonEvolving, Category.Legendary],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.HoOh,
      dex: 250,
      type: Type.Fire,
      type2: Type.Flying,
      category: [Category.NonEvolving, Category.Legendary],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Celebi,
      dex: 251,
      type: Type.Psychic,
      type2: Type.Grass,
      category: [Category.NonEvolving, Category.Mythical],
      eggGroup1: EggGroup.NoEggs
    }
  ]);
