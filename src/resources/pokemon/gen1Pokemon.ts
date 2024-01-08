import { Pokemon } from "../../classes/Pokemon";
import { Category, EggGroup, TypeName } from "../../enums";

export const gen1Pokemon: Pokemon[] = [
  {
    name: "bulbasaur",
    displayName: "Bulbasaur",
    dexNumber: 1,
    generation: 1,
    type: TypeName.Grass,
    type2: TypeName.Poison,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroup.Monster,
      group2: EggGroup.Grass,
      cycles: 20
    },
  },
  {
    name: "ivysaur",
    displayName: "Ivysaur",
    dexNumber: 2,
    generation: 1,
    type: TypeName.Grass,
    type2: TypeName.Poison,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroup.Monster,
      group2: EggGroup.Grass,
      cycles: 20
    },
  },
  {
    name: "venusaur",
    displayName: "Venusaur",
    dexNumber: 3,
    generation: 1,
    type: TypeName.Grass,
    type2: TypeName.Poison,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroup.Monster,
      group2: EggGroup.Grass,
      cycles: 20
    },
  },
  {
    name: "charmander",
    displayName: "Charmander",
    dexNumber: 4,
    generation: 1,
    type: TypeName.Fire,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroup.Monster,
      group2: EggGroup.Dragon,
      cycles: 20
    },
  },
  {
    name: "charmeleon",
    displayName: "Charmeleon",
    dexNumber: 5,
    generation: 1,
    type: TypeName.Fire,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroup.Monster,
      group2: EggGroup.Dragon,
      cycles: 20
    },
  },
  {
    name: "charizard",
    displayName: "Charizard",
    dexNumber: 6,
    generation: 1,
    type: TypeName.Fire,
    type2: TypeName.Flying,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroup.Monster,
      group2: EggGroup.Dragon,
      cycles: 20
    },
  },
  {
    name: "squirtle",
    displayName: "Squirtle",
    dexNumber: 7,
    generation: 1,
    type: TypeName.Water,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroup.Monster,
      group2: EggGroup.Water1,
      cycles: 20
    },
  },
  {
    name: "wartortle",
    displayName: "Wartortle",
    dexNumber: 8,
    generation: 1,
    type: TypeName.Water,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroup.Monster,
      group2: EggGroup.Water1,
      cycles: 20
    },
  },
  {
    name: "blastoise",
    displayName: "Blastoise",
    dexNumber: 9,
    generation: 1,
    type: TypeName.Water,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroup.Monster,
      group2: EggGroup.Water1,
      cycles: 20
    },
  },
  {
    name: "caterpie",
    displayName: "Caterpie",
    dexNumber: 10,
    generation: 1,
    type: TypeName.Bug,
    eggGroups: {
      group1: EggGroup.Bug,
      cycles: 15
    },
  },
  {
    name: "metapod",
    displayName: "Metapod",
    dexNumber: 11,
    generation: 1,
    type: TypeName.Bug,
    eggGroups: {
      group1: EggGroup.Bug,
      cycles: 15
    },
  },
  {
    name: "butterfree",
    displayName: "Butterfree",
    dexNumber: 12,
    generation: 1,
    type: TypeName.Bug,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroup.Bug,
      cycles: 15
    },
  },
  {
    name: "weedle",
    displayName: "Weedle",
    dexNumber: 13,
    generation: 1,
    type: TypeName.Bug,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroup.Bug,
      cycles: 15
    },
  },
  {
    name: "kakuna",
    displayName: "Kakuna",
    dexNumber: 14,
    generation: 1,
    type: TypeName.Bug,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroup.Bug,
      cycles: 15
    },
  },
  {
    name: "beedrill",
    displayName: "Beedrill",
    dexNumber: 15,
    generation: 1,
    type: TypeName.Bug,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroup.Bug,
      cycles: 15
    },
  },
  {
    name: "pidgey",
    displayName: "Pidgey",
    dexNumber: 16,
    generation: 1,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroup.Flying,
      cycles: 15
    },
  },
  {
    name: "pidgeotto",
    displayName: "Pidgeotto",
    dexNumber: 17,
    generation: 1,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroup.Flying,
      cycles: 15
    },
  },
  {
    name: "pidgeot",
    displayName: "Pidgeot",
    dexNumber: 18,
    generation: 1,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroup.Flying,
      cycles: 15
    },
  },
  {
    name: "rattata",
    displayName: "Rattata",
    dexNumber: 19,
    generation: 1,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroup.Field,
      cycles: 15
    },
  },
  {
    name: "raticate",
    displayName: "Raticate",
    dexNumber: 20,
    generation: 1,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroup.Field,
      cycles: 15
    },
  },
  {
    name: "spearow",
    displayName: "Spearow",
    dexNumber: 21,
    generation: 1,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroup.Flying,
      cycles: 15
    },
  },
  {
    name: "fearow",
    displayName: "Fearow",
    dexNumber: 22,
    generation: 1,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroup.Flying,
      cycles: 15
    },
  },
  {
    name: "ekans",
    displayName: "Ekans",
    dexNumber: 23,
    generation: 1,
    type: TypeName.Poison,
    eggGroups: {
      group1: EggGroup.Field,
      group2: EggGroup.Dragon,
      cycles: 20
    },
  },
  {
    name: "arbok",
    displayName: "Arbok",
    dexNumber: 24,
    generation: 1,
    type: TypeName.Poison,
    eggGroups: {
      group1: EggGroup.Field,
      group2: EggGroup.Dragon,
      cycles: 20
    },
  },
  {
    name: "pikachu",
    displayName: "Pikachu",
    dexNumber: 25,
    generation: 1,
    type: TypeName.Electric,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroup.Field,
      group2: EggGroup.Fairy,
      cycles: 10
    },
  },
  {
    name: "raichu",
    displayName: "Raichu",
    dexNumber: 26,
    generation: 1,
    type: TypeName.Electric,
    eggGroups: {
      group1: EggGroup.Field,
      group2: EggGroup.Fairy,
      cycles: 10
    },
  },
  {
    name: "sandshrew",
    displayName: "Sandshrew",
    dexNumber: 27,
    generation: 1,
    type: TypeName.Ground,
    eggGroups: {
      group1: EggGroup.Field,
      cycles: 20
    },
  },
  {
    name: "sandslash",
    displayName: "Sandslash",
    dexNumber: 28,
    generation: 1,
    type: TypeName.Ground,
    eggGroups: {
      group1: EggGroup.Field,
      cycles: 20
    },
  },
  {
    name: "nidoran",
    displayName: "Nidoran♀",
    dexNumber: 29,
    generation: 1,
    type: TypeName.Poison,
    eggGroups: {
      group1: EggGroup.Monster,
      group2: EggGroup.Field,
      cycles: 20
    },
  },
  {
    name: "nidorina",
    displayName: "Nidorina",
    dexNumber: 30,
    generation: 1,
    type: TypeName.Poison,
    eggGroups: {
      group1: EggGroup.NoEggs,
      cycles: 20
    },
  },
  {
    name: "nidoqueen",
    displayName: "Nidoqueen",
    dexNumber: 31,
    generation: 1,
    type: TypeName.Poison,
    type2: TypeName.Ground,
    eggGroups: {
      group1: EggGroup.NoEggs,
      cycles: 20
    },
  },
  {
    name: "nidoran",
    displayName: "Nidoran♂",
    dexNumber: 32,
    generation: 1,
    type: TypeName.Poison,
    eggGroups: {
      group1: EggGroup.Monster,
      group2: EggGroup.Field,
      cycles: 20
    },
  },
  {
    name: "nidorino",
    displayName: "Nidorino",
    dexNumber: 33,
    generation: 1,
    type: TypeName.Poison,
    eggGroups: {
      group1: EggGroup.Monster,
      group2: EggGroup.Field,
      cycles: 20
    },
  },
  {
    name: "nidoking",
    displayName: "Nidoking",
    dexNumber: 34,
    generation: 1,
    type: TypeName.Poison,
    type2: TypeName.Ground,
    eggGroups: {
      group1: EggGroup.Monster,
      group2: EggGroup.Field,
      cycles: 20
    },
  },
  {
    name: "clefairy",
    displayName: "Clefairy",
    dexNumber: 35,
    generation: 1,
    type: TypeName.Fairy,
    eggGroups: {
      group1: EggGroup.Fairy,
      cycles: 10
    },
  },
  {
    name: "clefable",
    displayName: "Clefable",
    dexNumber: 36,
    generation: 1,
    type: TypeName.Fairy,
    eggGroups: {
      group1: EggGroup.Fairy,
      cycles: 10
    },
  },
  {
    name: "vulpix",
    displayName: "Vulpix",
    dexNumber: 37,
    generation: 1,
    type: TypeName.Fire,
    eggGroups: {
      group1: EggGroup.Field,
      cycles: 20
    },
  },
  {
    name: "ninetales",
    displayName: "Ninetales",
    dexNumber: 38,
    generation: 1,
    type: TypeName.Fire,
    eggGroups: {
      group1: EggGroup.Field,
      cycles: 20
    },
  },
  {
    name: "jigglypuff",
    displayName: "Jigglypuff",
    dexNumber: 39,
    generation: 1,
    type: TypeName.Normal,
    type2: TypeName.Fairy,
    eggGroups: {
      group1: EggGroup.Fairy,
      cycles: 10
    },
  },
  {
    name: "wigglytuff",
    displayName: "Wigglytuff",
    dexNumber: 40,
    generation: 1,
    type: TypeName.Normal,
    type2: TypeName.Fairy,
    eggGroups: {
      group1: EggGroup.Fairy,
      cycles: 10
    },
  },
  {
    name: "zubat",
    displayName: "Zubat",
    dexNumber: 41,
    generation: 1,
    type: TypeName.Poison,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroup.Flying,
      cycles: 15
    },
  },
  {
    name: "golbat",
    displayName: "Golbat",
    dexNumber: 42,
    generation: 1,
    type: TypeName.Poison,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroup.Flying,
      cycles: 15
    },
  },
  {
    name: "oddish",
    displayName: "Oddish",
    dexNumber: 43,
    generation: 1,
    type: TypeName.Grass,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroup.Grass,
      cycles: 20
    },
  },
  {
    name: "gloom",
    displayName: "Gloom",
    dexNumber: 44,
    generation: 1,
    type: TypeName.Grass,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroup.Grass,
      cycles: 20
    },
  },
  {
    name: "vileplume",
    displayName: "Vileplume",
    dexNumber: 45,
    generation: 1,
    type: TypeName.Grass,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroup.Grass,
      cycles: 20
    },
  },
  {
    name: "paras",
    displayName: "Paras",
    dexNumber: 46,
    generation: 1,
    type: TypeName.Bug,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroup.Bug,
      group2: EggGroup.Grass,
      cycles: 20
    },
  },
  {
    name: "parasect",
    displayName: "Parasect",
    dexNumber: 47,
    generation: 1,
    type: TypeName.Bug,
    type2: TypeName.Grass,
    eggGroups: {
      group1: EggGroup.Bug,
      group2: EggGroup.Grass,
      cycles: 20
    },
  },
  {
    name: "venonat",
    displayName: "Venonat",
    dexNumber: 48,
    generation: 1,
    type: TypeName.Bug,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroup.Bug,
      cycles: 20
    },
  },
  {
    name: "venomoth",
    displayName: "Venomoth",
    dexNumber: 49,
    generation: 1,
    type: TypeName.Bug,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroup.Bug,
      cycles: 20
    },
  },
  {
    name: "diglett",
    displayName: "Diglett",
    dexNumber: 50,
    generation: 1,
    type: TypeName.Ground,
    eggGroups: {
      group1: EggGroup.Field,
      cycles: 20
    },
  },
  {
    name: "dugtrio",
    displayName: "Dugtrio",
    dexNumber: 51,
    generation: 1,
    type: TypeName.Ground,
    eggGroups: {
      group1: EggGroup.Field,
      cycles: 20
    },
  },
  {
    name: "meowth",
    displayName: "Meowth",
    dexNumber: 52,
    generation: 1,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroup.Field,
      cycles: 20
    },
  },
  {
    name: "persian",
    displayName: "Persian",
    dexNumber: 53,
    generation: 1,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroup.Field,
      cycles: 20
    },
  },
  {
    name: "psyduck",
    displayName: "Psyduck",
    dexNumber: 54,
    generation: 1,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroup.Water1,
      group2: EggGroup.Field,
      cycles: 20
    },
  },
  {
    name: "golduck",
    displayName: "Golduck",
    dexNumber: 55,
    generation: 1,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroup.Water1,
      group2: EggGroup.Field,
      cycles: 20
    },
  },
  {
    name: "mankey",
    displayName: "Mankey",
    dexNumber: 56,
    generation: 1,
    type: TypeName.Fighting,
    eggGroups: {
      group1: EggGroup.Field,
      cycles: 20
    },
  },
  {
    name: "primeape",
    displayName: "Primeape",
    dexNumber: 57,
    generation: 1,
    type: TypeName.Fighting,
    eggGroups: {
      group1: EggGroup.Field,
      cycles: 20
    },
  },
  {
    name: "growlithe",
    displayName: "Growlithe",
    dexNumber: 58,
    generation: 1,
    type: TypeName.Fire,
    eggGroups: {
      group1: EggGroup.Field,
      cycles: 20
    },
  },
  {
    name: "arcanine",
    displayName: "Arcanine",
    dexNumber: 59,
    generation: 1,
    type: TypeName.Fire,
    eggGroups: {
      group1: EggGroup.Field,
      cycles: 20
    },
  },
  {
    name: "poliwag",
    displayName: "Poliwag",
    dexNumber: 60,
    generation: 1,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroup.Water1,
      cycles: 20
    },
  },
  {
    name: "poliwhirl",
    displayName: "Poliwhirl",
    dexNumber: 61,
    generation: 1,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroup.Water1,
      cycles: 20
    },
  },
  {
    name: "poliwrath",
    displayName: "Poliwrath",
    dexNumber: 62,
    generation: 1,
    type: TypeName.Water,
    type2: TypeName.Fighting,
    eggGroups: {
      group1: EggGroup.Water1,
      cycles: 20
    },
  },
  {
    name: "abra",
    displayName: "Abra",
    dexNumber: 63,
    generation: 1,
    type: TypeName.Psychic,
    eggGroups: {
      group1: EggGroup.HumanLike,
      cycles: 20
    },
  },
  {
    name: "kadabra",
    displayName: "Kadabra",
    dexNumber: 64,
    generation: 1,
    type: TypeName.Psychic,
    eggGroups: {
      group1: EggGroup.HumanLike,
      cycles: 20
    },
  },
  {
    name: "alakazam",
    displayName: "Alakazam",
    dexNumber: 65,
    generation: 1,
    type: TypeName.Psychic,
    eggGroups: {
      group1: EggGroup.HumanLike,
      cycles: 20
    },
  },
  {
    name: "machop",
    displayName: "Machop",
    dexNumber: 66,
    generation: 1,
    type: TypeName.Fighting,
    eggGroups: {
      group1: EggGroup.HumanLike,
      cycles: 20
    },
  },
  {
    name: "machoke",
    displayName: "Machoke",
    dexNumber: 67,
    generation: 1,
    type: TypeName.Fighting,
    eggGroups: {
      group1: EggGroup.HumanLike,
      cycles: 20
    },
  },
  {
    name: "machamp",
    displayName: "Machamp",
    dexNumber: 68,
    generation: 1,
    type: TypeName.Fighting,
    eggGroups: {
      group1: EggGroup.HumanLike,
      cycles: 20
    },
  },
  {
    name: "bellsprout",
    displayName: "Bellsprout",
    dexNumber: 69,
    generation: 1,
    type: TypeName.Grass,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroup.Grass,
      cycles: 20
    },
  },
  {
    name: "weepinbell",
    displayName: "Weepinbell",
    dexNumber: 70,
    generation: 1,
    type: TypeName.Grass,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroup.Grass,
      cycles: 20
    },
  },
  {
    name: "victreebel",
    displayName: "Victreebel",
    dexNumber: 71,
    generation: 1,
    type: TypeName.Grass,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroup.Grass,
      cycles: 20
    },
  },
  {
    name: "tentacool",
    displayName: "Tentacool",
    dexNumber: 72,
    generation: 1,
    type: TypeName.Water,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroup.Water3,
      cycles: 20
    },
  },
  {
    name: "tentacruel",
    displayName: "Tentacruel",
    dexNumber: 73,
    generation: 1,
    type: TypeName.Water,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroup.Water3,
      cycles: 20
    },
  },
  {
    name: "geodude",
    displayName: "Geodude",
    dexNumber: 74,
    generation: 1,
    type: TypeName.Rock,
    type2: TypeName.Ground,
    eggGroups: {
      group1: EggGroup.Mineral,
      cycles: 15
    },
  },
  {
    name: "graveler",
    displayName: "Graveler",
    dexNumber: 75,
    generation: 1,
    type: TypeName.Rock,
    type2: TypeName.Ground,
    eggGroups: {
      group1: EggGroup.Mineral,
      cycles: 15
    },
  },
  {
    name: "golem",
    displayName: "Golem",
    dexNumber: 76,
    generation: 1,
    type: TypeName.Rock,
    type2: TypeName.Ground,
    eggGroups: {
      group1: EggGroup.Mineral,
      cycles: 15
    },
  },
  {
    name: "ponyta",
    displayName: "Ponyta",
    dexNumber: 77,
    generation: 1,
    type: TypeName.Fire,
    eggGroups: {
      group1: EggGroup.Field,
      cycles: 20
    },
  },
  {
    name: "rapidash",
    displayName: "Rapidash",
    dexNumber: 78,
    generation: 1,
    type: TypeName.Fire,
    eggGroups: {
      group1: EggGroup.Field,
      cycles: 20
    },
  },
  {
    name: "slowpoke",
    displayName: "Slowpoke",
    dexNumber: 79,
    generation: 1,
    type: TypeName.Water,
    type2: TypeName.Psychic,
    eggGroups: {
      group1: EggGroup.Monster,
      group2: EggGroup.Water1,
      cycles: 20
    },
  },
  {
    name: "slowbro",
    displayName: "Slowbro",
    dexNumber: 80,
    generation: 1,
    type: TypeName.Water,
    type2: TypeName.Psychic,
    eggGroups: {
      group1: EggGroup.Monster,
      group2: EggGroup.Water1,
      cycles: 20
    },
  },
  {
    name: "magnemite",
    displayName: "Magnemite",
    dexNumber: 81,
    generation: 1,
    type: TypeName.Electric,
    type2: TypeName.Steel,
    eggGroups: {
      group1: EggGroup.Mineral,
      cycles: 20
    },
  },
  {
    name: "magneton",
    displayName: "Magneton",
    dexNumber: 82,
    generation: 1,
    type: TypeName.Electric,
    type2: TypeName.Steel,
    eggGroups: {
      group1: EggGroup.Mineral,
      cycles: 20
    },
  },
  {
    name: "farfetchd",
    displayName: "Farfetchd",
    dexNumber: 83,
    generation: 1,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroup.Flying,
      group2: EggGroup.Field,
      cycles: 20
    },
  },
  {
    name: "doduo",
    displayName: "Doduo",
    dexNumber: 84,
    generation: 1,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroup.Flying,
      cycles: 20
    },
  },
  {
    name: "dodrio",
    displayName: "Dodrio",
    dexNumber: 85,
    generation: 1,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroup.Flying,
      cycles: 20
    },
  },
  {
    name: "seel",
    displayName: "Seel",
    dexNumber: 86,
    generation: 1,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroup.Water1,
      group2: EggGroup.Field,
      cycles: 20
    },
  },
  {
    name: "dewgong",
    displayName: "Dewgong",
    dexNumber: 87,
    generation: 1,
    type: TypeName.Water,
    type2: TypeName.Ice,
    eggGroups: {
      group1: EggGroup.Water1,
      group2: EggGroup.Field,
      cycles: 20
    },
  },
  {
    name: "grimer",
    displayName: "Grimer",
    dexNumber: 88,
    generation: 1,
    type: TypeName.Poison,
    eggGroups: {
      group1: EggGroup.Amorphous,
      cycles: 20
    },
  },
  {
    name: "muk",
    displayName: "Muk",
    dexNumber: 89,
    generation: 1,
    type: TypeName.Poison,
    eggGroups: {
      group1: EggGroup.Amorphous,
      cycles: 20
    },
  },
  {
    name: "shellder",
    displayName: "Shellder",
    dexNumber: 90,
    generation: 1,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroup.Water3,
      cycles: 20
    },
  },
  {
    name: "cloyster",
    displayName: "Cloyster",
    dexNumber: 91,
    generation: 1,
    type: TypeName.Water,
    type2: TypeName.Ice,
    eggGroups: {
      group1: EggGroup.Water3,
      cycles: 20
    },
  },
  {
    name: "gastly",
    displayName: "Gastly",
    dexNumber: 92,
    generation: 1,
    type: TypeName.Ghost,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroup.Amorphous,
      cycles: 20
    },
  },
  {
    name: "haunter",
    displayName: "Haunter",
    dexNumber: 93,
    generation: 1,
    type: TypeName.Ghost,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroup.Amorphous,
      cycles: 20
    },
  },
  {
    name: "gengar",
    displayName: "Gengar",
    dexNumber: 94,
    generation: 1,
    type: TypeName.Ghost,
    type2: TypeName.Poison,
    eggGroups: {
      group1: EggGroup.Amorphous,
      cycles: 20
    },
  },
  {
    name: "onix",
    displayName: "Onix",
    dexNumber: 95,
    generation: 1,
    type: TypeName.Rock,
    type2: TypeName.Ground,
    eggGroups: {
      group1: EggGroup.Mineral,
      cycles: 25
    },
  },
  {
    name: "drowzee",
    displayName: "Drowzee",
    dexNumber: 96,
    generation: 1,
    type: TypeName.Psychic,
    eggGroups: {
      group1: EggGroup.HumanLike,
      cycles: 20
    },
  },
  {
    name: "hypno",
    displayName: "Hypno",
    dexNumber: 97,
    generation: 1,
    type: TypeName.Psychic,
    eggGroups: {
      group1: EggGroup.HumanLike,
      cycles: 20
    },
  },
  {
    name: "krabby",
    displayName: "Krabby",
    dexNumber: 98,
    generation: 1,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroup.Water3,
      cycles: 20
    },
  },
  {
    name: "kingler",
    displayName: "Kingler",
    dexNumber: 99,
    generation: 1,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroup.Water3,
      cycles: 20
    },
  },
  {
    name: "voltorb",
    displayName: "Voltorb",
    dexNumber: 100,
    generation: 1,
    type: TypeName.Electric,
    eggGroups: {
      group1: EggGroup.Mineral,
      cycles: 20
    },
  },
  {
    name: "electrode",
    displayName: "Electrode",
    dexNumber: 101,
    generation: 1,
    type: TypeName.Electric,
    eggGroups: {
      group1: EggGroup.Mineral,
      cycles: 20
    },
  },
  {
    name: "exeggcute",
    displayName: "Exeggcute",
    dexNumber: 102,
    generation: 1,
    type: TypeName.Grass,
    type2: TypeName.Psychic,
    eggGroups: {
      group1: EggGroup.Grass,
      cycles: 20
    },
  },
  {
    name: "exeggutor",
    displayName: "Exeggutor",
    dexNumber: 103,
    generation: 1,
    type: TypeName.Grass,
    type2: TypeName.Psychic,
    eggGroups: {
      group1: EggGroup.Grass,
      cycles: 20
    },
  },
  {
    name: "cubone",
    displayName: "Cubone",
    dexNumber: 104,
    generation: 1,
    type: TypeName.Ground,
    eggGroups: {
      group1: EggGroup.Monster,
      cycles: 20
    },
  },
  {
    name: "marowak",
    displayName: "Marowak",
    dexNumber: 105,
    generation: 1,
    type: TypeName.Ground,
    eggGroups: {
      group1: EggGroup.Monster,
      cycles: 20
    },
  },
  {
    name: "hitmonlee",
    displayName: "Hitmonlee",
    dexNumber: 106,
    generation: 1,
    type: TypeName.Fighting,
    eggGroups: {
      group1: EggGroup.HumanLike,
      cycles: 25
    },
  },
  {
    name: "hitmonchan",
    displayName: "Hitmonchan",
    dexNumber: 107,
    generation: 1,
    type: TypeName.Fighting,
    eggGroups: {
      group1: EggGroup.HumanLike,
      cycles: 25
    },
  },
  {
    name: "lickitung",
    displayName: "Lickitung",
    dexNumber: 108,
    generation: 1,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroup.Monster,
      cycles: 20
    },
  },
  {
    name: "koffing",
    displayName: "Koffing",
    dexNumber: 109,
    generation: 1,
    type: TypeName.Poison,
    eggGroups: {
      group1: EggGroup.Amorphous,
      cycles: 20
    },
  },
  {
    name: "weezing",
    displayName: "Weezing",
    dexNumber: 110,
    generation: 1,
    type: TypeName.Poison,
    eggGroups: {
      group1: EggGroup.Amorphous,
      cycles: 20
    },
  },
  {
    name: "rhyhorn",
    displayName: "Rhyhorn",
    dexNumber: 111,
    generation: 1,
    type: TypeName.Ground,
    type2: TypeName.Rock,
    eggGroups: {
      group1: EggGroup.Monster,
      group2: EggGroup.Field,
      cycles: 20
    },
  },
  {
    name: "rhydon",
    displayName: "Rhydon",
    dexNumber: 112,
    generation: 1,
    type: TypeName.Ground,
    type2: TypeName.Rock,
    eggGroups: {
      group1: EggGroup.Monster,
      group2: EggGroup.Field,
      cycles: 20
    },
  },
  {
    name: "chansey",
    displayName: "Chansey",
    dexNumber: 113,
    generation: 1,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroup.Fairy,
      cycles: 40
    },
  },
  {
    name: "tangela",
    displayName: "Tangela",
    dexNumber: 114,
    generation: 1,
    type: TypeName.Grass,
    eggGroups: {
      group1: EggGroup.Grass,
      cycles: 20
    },
  },
  {
    name: "kangaskhan",
    displayName: "Kangaskhan",
    dexNumber: 115,
    generation: 1,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroup.Monster,
      cycles: 20
    },
  },
  {
    name: "horsea",
    displayName: "Horsea",
    dexNumber: 116,
    generation: 1,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroup.Water1,
      group2: EggGroup.Dragon,
      cycles: 20
    },
  },
  {
    name: "seadra",
    displayName: "Seadra",
    dexNumber: 117,
    generation: 1,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroup.Water1,
      group2: EggGroup.Dragon,
      cycles: 20
    },
  },
  {
    name: "goldeen",
    displayName: "Goldeen",
    dexNumber: 118,
    generation: 1,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroup.Water2,
      cycles: 20
    },
  },
  {
    name: "seaking",
    displayName: "Seaking",
    dexNumber: 119,
    generation: 1,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroup.Water2,
      cycles: 20
    },
  },
  {
    name: "staryu",
    displayName: "Staryu",
    dexNumber: 120,
    generation: 1,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroup.Water3,
      cycles: 20
    },
  },
  {
    name: "starmie",
    displayName: "Starmie",
    dexNumber: 121,
    generation: 1,
    type: TypeName.Water,
    type2: TypeName.Psychic,
    eggGroups: {
      group1: EggGroup.Water3,
      cycles: 20
    },
  },
  {
    name: "mrmime",
    displayName: "Mr. Mime",
    dexNumber: 122,
    generation: 1,
    type: TypeName.Psychic,
    type2: TypeName.Fairy,
    eggGroups: {
      group1: EggGroup.HumanLike,
      cycles: 25
    },
  },
  {
    name: "scyther",
    displayName: "Scyther",
    dexNumber: 123,
    generation: 1,
    type: TypeName.Bug,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroup.Bug,
      cycles: 25
    },
  },
  {
    name: "jynx",
    displayName: "Jynx",
    dexNumber: 124,
    generation: 1,
    type: TypeName.Ice,
    type2: TypeName.Psychic,
    eggGroups: {
      group1: EggGroup.HumanLike,
      cycles: 25
    },
  },
  {
    name: "electabuzz",
    displayName: "Electabuzz",
    dexNumber: 125,
    generation: 1,
    type: TypeName.Electric,
    eggGroups: {
      group1: EggGroup.HumanLike,
      cycles: 25
    },
  },
  {
    name: "magmar",
    displayName: "Magmar",
    dexNumber: 126,
    generation: 1,
    type: TypeName.Fire,
    eggGroups: {
      group1: EggGroup.HumanLike,
      cycles: 25
    },
  },
  {
    name: "pinsir",
    displayName: "Pinsir",
    dexNumber: 127,
    generation: 1,
    type: TypeName.Bug,
    eggGroups: {
      group1: EggGroup.Bug,
      cycles: 25
    },
  },
  {
    name: "tauros",
    displayName: "Tauros",
    dexNumber: 128,
    generation: 1,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroup.Field,
      cycles: 20
    },
  },
  {
    dexNumber: 129,
    generation: 1,
    name: "magikarp",
    displayName: "Magikarp",
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroup.Water2,
      group2: EggGroup.Dragon,
      cycles: 5
    },
  },
  {
    name: "gyarados",
    displayName: "Gyarados",
    dexNumber: 130,
    generation: 1,
    type: TypeName.Water,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroup.Water2,
      group2: EggGroup.Dragon,
      cycles: 5
    },
  },
  {
    name: "lapras",
    displayName: "Lapras",
    dexNumber: 131,
    generation: 1,
    type: TypeName.Water,
    type2: TypeName.Ice,
    eggGroups: {
      group1: EggGroup.Monster,
      group2: EggGroup.Water1,
      cycles: 40
    },
  },
  {
    name: "ditto",
    displayName: "Ditto",
    dexNumber: 132,
    generation: 1,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroup.Ditto,
      cycles: 20
    },
  },
  {
    name: "eevee",
    displayName: "Eevee",
    dexNumber: 133,
    generation: 1,
    type: TypeName.Normal,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroup.Field,
      cycles: 35
    },
  },
  {
    name: "vaporeon",
    displayName: "Vaporeon",
    dexNumber: 134,
    generation: 1,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroup.Field,
      cycles: 35
    },
  },
  {
    name: "jolteon",
    displayName: "Jolteon",
    dexNumber: 135,
    generation: 1,
    type: TypeName.Electric,
    eggGroups: {
      group1: EggGroup.Field,
      cycles: 35
    },
  },
  {
    name: "flareon",
    displayName: "Flareon",
    dexNumber: 136,
    generation: 1,
    type: TypeName.Fire,
    eggGroups: {
      group1: EggGroup.Field,
      cycles: 35
    },
  },
  {
    name: "porygon",
    displayName: "Porygon",
    dexNumber: 137,
    generation: 1,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroup.Mineral,
      cycles: 20
    },
  },
  {
    name: "omanyte",
    displayName: "Omanyte",
    dexNumber: 138,
    generation: 1,
    type: TypeName.Rock,
    type2: TypeName.Water,
    category: Category.Fossil,
    eggGroups: {
      group1: EggGroup.Water1,
      group2: EggGroup.Water3,
      cycles: 30
    },
  },
  {
    name: "omastar",
    displayName: "Omastar",
    dexNumber: 139,
    generation: 1,
    type: TypeName.Rock,
    type2: TypeName.Water,
    category: Category.Fossil,
    eggGroups: {
      group1: EggGroup.Water1,
      group2: EggGroup.Water3,
      cycles: 30
    },
  },
  {
    name: "kabuto",
    displayName: "Kabuto",
    dexNumber: 140,
    generation: 1,
    type: TypeName.Rock,
    type2: TypeName.Water,
    category: Category.Fossil,
    eggGroups: {
      group1: EggGroup.Water1,
      group2: EggGroup.Water3,
      cycles: 30
    },
  },
  {
    name: "kabutops",
    displayName: "Kabutops",
    dexNumber: 141,
    generation: 1,
    type: TypeName.Rock,
    type2: TypeName.Water,
    category: Category.Fossil,
    eggGroups: {
      group1: EggGroup.Water1,
      group2: EggGroup.Water3,
      cycles: 30
    },
  },
  {
    name: "aerodactyl",
    displayName: "Aerodactyl",
    dexNumber: 142,
    generation: 1,
    type: TypeName.Rock,
    type2: TypeName.Flying,
    category: Category.Fossil,
    eggGroups: {
      group1: EggGroup.Flying,
      cycles: 35
    },
  },
  {
    name: "snorlax",
    displayName: "Snorlax",
    dexNumber: 143,
    generation: 1,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroup.Monster,
      cycles: 40
    },
  },
  {
    name: "articuno",
    displayName: "Articuno",
    dexNumber: 144,
    generation: 1,
    type: TypeName.Ice,
    type2: TypeName.Flying,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroup.NoEggs,
      cycles: 80
    },
  },
  {
    name: "zapdos",
    displayName: "Zapdos",
    dexNumber: 145,
    generation: 1,
    type: TypeName.Electric,
    type2: TypeName.Flying,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroup.NoEggs,
      cycles: 80
    },
  },
  {
    name: "moltres",
    displayName: "Moltres",
    dexNumber: 146,
    generation: 1,
    type: TypeName.Fire,
    type2: TypeName.Flying,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroup.NoEggs,
      cycles: 80
    },
  },
  {
    name: "dratini",
    displayName: "Dratini",
    dexNumber: 147,
    generation: 1,
    type: TypeName.Dragon,
    eggGroups: {
      group1: EggGroup.Water1,
      group2: EggGroup.Dragon,
      cycles: 40
    },
  },
  {
    name: "dragonair",
    displayName: "Dragonair",
    dexNumber: 148,
    generation: 1,
    type: TypeName.Dragon,
    eggGroups: {
      group1: EggGroup.Water1,
      group2: EggGroup.Dragon,
      cycles: 40
    },
  },
  {
    name: "dragonite",
    displayName: "Dragonite",
    dexNumber: 149,
    generation: 1,
    type: TypeName.Dragon,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroup.Water1,
      group2: EggGroup.Dragon,
      cycles: 40
    },
  },
  {
    name: "mewtwo",
    displayName: "Mewtwo",
    dexNumber: 150,
    generation: 1,
    type: TypeName.Psychic,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroup.NoEggs,
      cycles: 120
    },
  },
  {
    name: "mew",
    displayName: "Mew",
    dexNumber: 151,
    generation: 1,
    type: TypeName.Psychic,
    category: Category.Mythical,
    eggGroups: {
      group1: EggGroup.NoEggs,
      cycles: 120
    },
  }
];
