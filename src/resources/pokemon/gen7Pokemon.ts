import { Pokemon } from "../../classes/Pokemon";
import { Category, EggGroup, TypeName } from "../../enums";

export const gen7Pokemon: Pokemon[] = [
  {
    name: "rowlet",
    displayName: "Rowlet",
    dexNumber: 722,
    generation: 7,
    type: TypeName.Grass,
    type2: TypeName.Flying,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroup.Flying,
      cycles: 15
    },
  },
  {
    name: "dartrix",
    displayName: "Dartrix",
    dexNumber: 723,
    generation: 7,
    type: TypeName.Grass,
    type2: TypeName.Flying,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroup.Flying,
      cycles: 15
    },
  },
  {
    name: "decidueye",
    displayName: "Decidueye",
    dexNumber: 724,
    generation: 7,
    type: TypeName.Grass,
    type2: TypeName.Ghost,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroup.Flying,
      cycles: 15
    },
  },
  {
    name: "litten",
    displayName: "Litten",
    dexNumber: 725,
    generation: 7,
    type: TypeName.Fire,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroup.Field,
      cycles: 15
    },
  },
  {
    name: "torracat",
    displayName: "Torracat",
    dexNumber: 726,
    generation: 7,
    type: TypeName.Fire,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroup.Field,
      cycles: 15
    },
  },
  {
    name: "incineroar",
    displayName: "Incineroar",
    dexNumber: 727,
    generation: 7,
    type: TypeName.Fire,
    type2: TypeName.Dark,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroup.Field,
      cycles: 15
    },
  },
  {
    name: "popplio",
    displayName: "Popplio",
    dexNumber: 728,
    generation: 7,
    type: TypeName.Water,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroup.Water1,
      group2: EggGroup.Field,
      cycles: 15
    },
  },
  {
    name: "brionne",
    displayName: "Brionne",
    dexNumber: 729,
    generation: 7,
    type: TypeName.Water,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroup.Water1,
      group2: EggGroup.Field,
      cycles: 15
    },
  },
  {
    name: "primarina",
    displayName: "Primarina",
    dexNumber: 730,
    generation: 7,
    type: TypeName.Water,
    type2: TypeName.Fairy,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroup.Water1,
      group2: EggGroup.Field,
      cycles: 15
    },
  },
  {
    name: "pikipek",
    displayName: "Pikipek",
    dexNumber: 731,
    generation: 7,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroup.Flying,
      cycles: 15
    },
  },
  {
    name: "trumbeak",
    displayName: "Trumbeak",
    dexNumber: 732,
    generation: 7,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroup.Flying,
      cycles: 15
    },
  },
  {
    name: "toucannon",
    displayName: "Toucannon",
    dexNumber: 733,
    generation: 7,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroup.Flying,
      cycles: 15
    },
  },
  {
    name: "yungoos",
    displayName: "Yungoos",
    dexNumber: 734,
    generation: 7,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroup.Field,
      cycles: 15
    },
  },
  {
    name: "gumshoos",
    displayName: "Gumshoos",
    dexNumber: 735,
    generation: 7,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroup.Field,
      cycles: 15
    },
  },
  {
    name: "grubbin",
    displayName: "Grubbin",
    dexNumber: 736,
    generation: 7,
    type: TypeName.Bug,
    eggGroups: {
      group1: EggGroup.Bug,
      cycles: 15
    },
  },
  {
    name: "charjabug",
    displayName: "Charjabug",
    dexNumber: 737,
    generation: 7,
    type: TypeName.Bug,
    type2: TypeName.Electric,
    eggGroups: {
      group1: EggGroup.Bug,
      cycles: 15
    },
  },
  {
    name: "vikavolt",
    displayName: "Vikavolt",
    dexNumber: 738,
    generation: 7,
    type: TypeName.Bug,
    type2: TypeName.Electric,
    eggGroups: {
      group1: EggGroup.Bug,
      cycles: 15
    },
  },
  {
    name: "crabrawler",
    displayName: "Crabrawler",
    dexNumber: 739,
    generation: 7,
    type: TypeName.Fighting,
    eggGroups: {
      group1: EggGroup.Water3,
      cycles: 20
    },
  },
  {
    name: "crabominable",
    displayName: "Crabominable",
    dexNumber: 740,
    generation: 7,
    type: TypeName.Fighting,
    type2: TypeName.Ice,
    eggGroups: {
      group1: EggGroup.Water3,
      cycles: 20
    },
  },
  {
    name: "oricorio",
    displayName: "Oricorio",
    dexNumber: 741,
    generation: 7,
    type: TypeName.Flying,
    formTypes: [TypeName.Fire, TypeName.Electric, TypeName.Psychic, TypeName.Ghost],
    eggGroups: {
      group1: EggGroup.Flying,
      cycles: 20
    },
  },
  {
    name: "cutiefly",
    displayName: "Cutiefly",
    dexNumber: 742,
    generation: 7,
    type: TypeName.Bug,
    type2: TypeName.Fairy,
    eggGroups: {
      group1: EggGroup.Bug,
      group2: EggGroup.Fairy,
      cycles: 20
    },
  },
  {
    name: "ribombee",
    displayName: "Ribombee",
    dexNumber: 743,
    generation: 7,
    type: TypeName.Bug,
    type2: TypeName.Fairy,
    eggGroups: {
      group1: EggGroup.Bug,
      group2: EggGroup.Fairy,
      cycles: 20
    },
  },
  {
    name: "rockruff",
    displayName: "Rockruff",
    dexNumber: 744,
    generation: 7,
    type: TypeName.Rock,
    eggGroups: {
      group1: EggGroup.Field,
      cycles: 15
    },
  },
  {
    name: "lycanroc",
    displayName: "Lycanroc",
    dexNumber: 745,
    generation: 7,
    type: TypeName.Rock,
    eggGroups: {
      group1: EggGroup.Field,
      cycles: 15
    },
  },
  {
    name: "wishiwashi",
    displayName: "Wishiwashi",
    dexNumber: 746,
    generation: 7,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroup.Water2,
      cycles: 15
    },
  },
  {
    name: "mareanie",
    displayName: "Mareanie",
    dexNumber: 747,
    generation: 7,
    type: TypeName.Poison,
    type2: TypeName.Water,
    eggGroups: {
      group1: EggGroup.Water1,
      cycles: 20
    },
  },
  {
    name: "toxapex",
    displayName: "Toxapex",
    dexNumber: 748,
    generation: 7,
    type: TypeName.Poison,
    type2: TypeName.Water,
    eggGroups: {
      group1: EggGroup.Water1,
      cycles: 20
    },
  },
  {
    name: "mudbray",
    displayName: "Mudbray",
    dexNumber: 749,
    generation: 7,
    type: TypeName.Ground,
    eggGroups: {
      group1: EggGroup.Field,
      cycles: 20
    },
  },
  {
    name: "mudsdale",
    displayName: "Mudsdale",
    dexNumber: 750,
    generation: 7,
    type: TypeName.Ground,
    eggGroups: {
      group1: EggGroup.Field,
      cycles: 20
    },
  },
  {
    name: "dewpider",
    displayName: "Dewpider",
    dexNumber: 751,
    generation: 7,
    type: TypeName.Water,
    type2: TypeName.Bug,
    eggGroups: {
      group1: EggGroup.Water1,
      group2: EggGroup.Bug,
      cycles: 15
    },
  },
  {
    name: "araquanid",
    displayName: "Araquanid",
    dexNumber: 752,
    generation: 7,
    type: TypeName.Water,
    type2: TypeName.Bug,
    eggGroups: {
      group1: EggGroup.Water1,
      group2: EggGroup.Bug,
      cycles: 15
    },
  },
  {
    name: "fomantis",
    displayName: "Fomantis",
    dexNumber: 753,
    generation: 7,
    type: TypeName.Grass,
    eggGroups: {
      group1: EggGroup.Grass,
      cycles: 20
    },
  },
  {
    name: "lurantis",
    displayName: "Lurantis",
    dexNumber: 754,
    generation: 7,
    type: TypeName.Grass,
    eggGroups: {
      group1: EggGroup.Grass,
      cycles: 20
    },
  },
  {
    name: "morelull",
    displayName: "Morelull",
    dexNumber: 755,
    generation: 7,
    type: TypeName.Grass,
    type2: TypeName.Fairy,
    eggGroups: {
      group1: EggGroup.Grass,
      cycles: 20
    },
  },
  {
    name: "shiinotic",
    displayName: "Shiinotic",
    dexNumber: 756,
    generation: 7,
    type: TypeName.Grass,
    type2: TypeName.Fairy,
    eggGroups: {
      group1: EggGroup.Grass,
      cycles: 20
    },
  },
  {
    name: "salandit",
    displayName: "Salandit",
    dexNumber: 757,
    generation: 7,
    type: TypeName.Poison,
    type2: TypeName.Fire,
    eggGroups: {
      group1: EggGroup.Monster,
      group2: EggGroup.Dragon,
      cycles: 20
    },
  },
  {
    name: "salazzle",
    displayName: "Salazzle",
    dexNumber: 758,
    generation: 7,
    type: TypeName.Poison,
    type2: TypeName.Fire,
    eggGroups: {
      group1: EggGroup.Monster,
      group2: EggGroup.Dragon,
      cycles: 20
    },
  },
  {
    name: "stufful",
    displayName: "Stufful",
    dexNumber: 759,
    generation: 7,
    type: TypeName.Normal,
    type2: TypeName.Fighting,
    eggGroups: {
      group1: EggGroup.Field,
      cycles: 15
    },
  },
  {
    name: "bewear",
    displayName: "Bewear",
    dexNumber: 760,
    generation: 7,
    type: TypeName.Normal,
    type2: TypeName.Fighting,
    eggGroups: {
      group1: EggGroup.Field,
      cycles: 15
    },
  },
  {
    name: "bounsweet",
    displayName: "Bounsweet",
    dexNumber: 761,
    generation: 7,
    type: TypeName.Grass,
    eggGroups: {
      group1: EggGroup.Grass,
      cycles: 20
    },
  },
  {
    name: "steenee",
    displayName: "Steenee",
    dexNumber: 762,
    generation: 7,
    type: TypeName.Grass,
    eggGroups: {
      group1: EggGroup.Grass,
      cycles: 20
    },
  },
  {
    name: "tsareena",
    displayName: "Tsareena",
    dexNumber: 763,
    generation: 7,
    type: TypeName.Grass,
    eggGroups: {
      group1: EggGroup.Grass,
      cycles: 20
    },
  },
  {
    name: "comfey",
    displayName: "Comfey",
    dexNumber: 764,
    generation: 7,
    type: TypeName.Fairy,
    eggGroups: {
      group1: EggGroup.Grass,
      cycles: 20
    },
  },
  {
    name: "oranguru",
    displayName: "Oranguru",
    dexNumber: 765,
    generation: 7,
    type: TypeName.Normal,
    type2: TypeName.Psychic,
    eggGroups: {
      group1: EggGroup.Field,
      cycles: 20
    },
  },
  {
    name: "passimian",
    displayName: "Passimian",
    dexNumber: 766,
    generation: 7,
    type: TypeName.Fighting,
    eggGroups: {
      group1: EggGroup.Field,
      cycles: 20
    },
  },
  {
    name: "wimpod",
    displayName: "Wimpod",
    dexNumber: 767,
    generation: 7,
    type: TypeName.Bug,
    type2: TypeName.Water,
    eggGroups: {
      group1: EggGroup.Bug,
      group2: EggGroup.Water3,
      cycles: 20
    },
  },
  {
    name: "golisopod",
    displayName: "Golisopod",
    dexNumber: 768,
    generation: 7,
    type: TypeName.Bug,
    type2: TypeName.Water,
    eggGroups: {
      group1: EggGroup.Bug,
      group2: EggGroup.Water3,
      cycles: 20
    },
  },
  {
    name: "sandygast",
    displayName: "Sandygast",
    dexNumber: 769,
    generation: 7,
    type: TypeName.Ghost,
    type2: TypeName.Ground,
    eggGroups: {
      group1: EggGroup.Amorphous,
      cycles: 15
    },
  },
  {
    name: "palossand",
    displayName: "Palossand",
    dexNumber: 770,
    generation: 7,
    type: TypeName.Ghost,
    type2: TypeName.Ground,
    eggGroups: {
      group1: EggGroup.Amorphous,
      cycles: 15
    },
  },
  {
    name: "pyukumuku",
    displayName: "Pyukumuku",
    dexNumber: 771,
    generation: 7,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroup.Water1,
      cycles: 15
    },
  },
  {
    name: "typenull",
    displayName: "Type: Null",
    dexNumber: 772,
    generation: 7,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroup.NoEggs,
      cycles: 120
    },
  },
  {
    name: "silvally",
    displayName: "Silvally",
    dexNumber: 773,
    generation: 7,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroup.NoEggs,
      cycles: 120
    },
  },
  {
    name: "minior",
    displayName: "Minior",
    dexNumber: 774,
    generation: 7,
    type: TypeName.Rock,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroup.Mineral,
      cycles: 25
    },
  },
  {
    name: "komala",
    displayName: "Komala",
    dexNumber: 775,
    generation: 7,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroup.Field,
      cycles: 20
    },
  },
  {
    name: "turtonator",
    displayName: "Turtonator",
    dexNumber: 776,
    generation: 7,
    type: TypeName.Fire,
    type2: TypeName.Dragon,
    eggGroups: {
      group1: EggGroup.Monster,
      group2: EggGroup.Dragon,
      cycles: 20
    },
  },
  {
    name: "togedemaru",
    displayName: "Togedemaru",
    dexNumber: 777,
    generation: 7,
    type: TypeName.Electric,
    type2: TypeName.Steel,
    eggGroups: {
      group1: EggGroup.Field,
      group2: EggGroup.Fairy,
      cycles: 10
    },
  },
  {
    name: "mimikyu",
    displayName: "Mimikyu",
    dexNumber: 778,
    generation: 7,
    type: TypeName.Ghost,
    type2: TypeName.Fairy,
    eggGroups: {
      group1: EggGroup.Amorphous,
      cycles: 20
    },
  },
  {
    name: "bruxish",
    displayName: "Bruxish",
    dexNumber: 779,
    generation: 7,
    type: TypeName.Water,
    type2: TypeName.Psychic,
    eggGroups: {
      group1: EggGroup.Water2,
      cycles: 15
    },
  },
  {
    name: "drampa",
    displayName: "Drampa",
    dexNumber: 780,
    generation: 7,
    type: TypeName.Normal,
    type2: TypeName.Dragon,
    eggGroups: {
      group1: EggGroup.Monster,
      group2: EggGroup.Dragon,
      cycles: 20
    },
  },
  {
    name: "dhelmise",
    displayName: "Dhelmise",
    dexNumber: 781,
    generation: 7,
    type: TypeName.Ghost,
    type2: TypeName.Grass,
    eggGroups: {
      group1: EggGroup.Mineral,
      cycles: 25
    },
  },
  {
    name: "jangmoo",
    displayName: "Jangmo-O",
    dexNumber: 782,
    generation: 7,
    type: TypeName.Dragon,
    eggGroups: {
      group1: EggGroup.Dragon,
      cycles: 40
    },
  },
  {
    name: "hakamoo",
    displayName: "Hakamo-O",
    dexNumber: 783,
    generation: 7,
    type: TypeName.Dragon,
    type2: TypeName.Fighting,
    eggGroups: {
      group1: EggGroup.Dragon,
      cycles: 40
    },
  },
  {
    name: "kommoo",
    displayName: "Kommo-O",
    dexNumber: 784,
    generation: 7,
    type: TypeName.Dragon,
    type2: TypeName.Fighting,
    eggGroups: {
      group1: EggGroup.Dragon,
      cycles: 40
    },
  },
  {
    name: "tapukoko",
    displayName: "Tapu Koko",
    dexNumber: 785,
    generation: 7,
    type: TypeName.Electric,
    type2: TypeName.Fairy,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroup.NoEggs,
      cycles: 15
    },
  },
  {
    name: "tapulele",
    displayName: "Tapu Lele",
    dexNumber: 786,
    generation: 7,
    type: TypeName.Psychic,
    type2: TypeName.Fairy,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroup.NoEggs,
      cycles: 15
    },
  },
  {
    name: "tapubulu",
    displayName: "Tapu Bulu",
    dexNumber: 787,
    generation: 7,
    type: TypeName.Grass,
    type2: TypeName.Fairy,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroup.NoEggs,
      cycles: 15
    },
  },
  {
    name: "tapufini",
    displayName: "Tapu Fini",
    dexNumber: 788,
    generation: 7,
    type: TypeName.Water,
    type2: TypeName.Fairy,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroup.NoEggs,
      cycles: 15
    },
  },
  {
    name: "cosmog",
    displayName: "Cosmog",
    dexNumber: 789,
    generation: 7,
    type: TypeName.Psychic,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroup.NoEggs,
      cycles: 120
    },
  },
  {
    name: "cosmoem",
    displayName: "Cosmoem",
    dexNumber: 790,
    generation: 7,
    type: TypeName.Psychic,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroup.NoEggs,
      cycles: 120
    },
  },
  {
    name: "solgaleo",
    displayName: "Solgaleo",
    dexNumber: 791,
    generation: 7,
    type: TypeName.Psychic,
    type2: TypeName.Steel,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroup.NoEggs,
      cycles: 120
    },
  },
  {
    name: "lunala",
    displayName: "Lunala",
    dexNumber: 792,
    generation: 7,
    type: TypeName.Psychic,
    type2: TypeName.Ghost,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroup.NoEggs,
      cycles: 120
    },
  },
  {
    name: "nihilego",
    displayName: "Nihilego",
    dexNumber: 793,
    generation: 7,
    type: TypeName.Rock,
    type2: TypeName.Poison,
    category: Category.UltraBeast,
    eggGroups: {
      group1: EggGroup.NoEggs,
      cycles: 120
    },
  },
  {
    name: "buzzwole",
    displayName: "Buzzwole",
    dexNumber: 794,
    generation: 7,
    type: TypeName.Bug,
    type2: TypeName.Fighting,
    category: Category.UltraBeast,
    eggGroups: {
      group1: EggGroup.NoEggs,
      cycles: 120
    },
  },
  {
    name: "pheromosa",
    displayName: "Pheromosa",
    dexNumber: 795,
    generation: 7,
    type: TypeName.Bug,
    type2: TypeName.Fighting,
    category: Category.UltraBeast,
    eggGroups: {
      group1: EggGroup.NoEggs,
      cycles: 120
    },
  },
  {
    name: "xurkitree",
    displayName: "Xurkitree",
    dexNumber: 796,
    generation: 7,
    type: TypeName.Electric,
    category: Category.UltraBeast,
    eggGroups: {
      group1: EggGroup.NoEggs,
      cycles: 120
    },
  },
  {
    name: "celesteela",
    displayName: "Celesteela",
    dexNumber: 797,
    generation: 7,
    type: TypeName.Steel,
    type2: TypeName.Flying,
    category: Category.UltraBeast,
    eggGroups: {
      group1: EggGroup.NoEggs,
      cycles: 120
    },
  },
  {
    name: "kartana",
    displayName: "Kartana",
    dexNumber: 798,
    generation: 7,
    type: TypeName.Grass,
    type2: TypeName.Steel,
    category: Category.UltraBeast,
    eggGroups: {
      group1: EggGroup.NoEggs,
      cycles: 120
    },
  },
  {
    name: "guzzlord",
    displayName: "Guzzlord",
    dexNumber: 799,
    generation: 7,
    type: TypeName.Dark,
    type2: TypeName.Dragon,
    category: Category.UltraBeast,
    eggGroups: {
      group1: EggGroup.NoEggs,
      cycles: 120
    },
  },
  {
    name: "necrozma",
    displayName: "Necrozma",
    dexNumber: 800,
    generation: 7,
    type: TypeName.Psychic,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroup.NoEggs,
      cycles: 120
    },
  },
  {
    name: "magearna",
    displayName: "Magearna",
    dexNumber: 801,
    generation: 7,
    type: TypeName.Steel,
    type2: TypeName.Fairy,
    category: Category.Mythical,
    eggGroups: {
      group1: EggGroup.NoEggs,
      cycles: 120
    },
  },
  {
    name: "marshadow",
    displayName: "Marshadow",
    dexNumber: 802,
    generation: 7,
    type: TypeName.Fighting,
    type2: TypeName.Ghost,
    category: Category.Mythical,
    eggGroups: {
      group1: EggGroup.NoEggs,
      cycles: 120
    },
  },
  {
    name: "poipole",
    displayName: "Poipole",
    dexNumber: 803,
    generation: 7,
    type: TypeName.Poison,
    category: Category.UltraBeast,
    eggGroups: {
      group1: EggGroup.NoEggs,
      cycles: 120
    },
  },
  {
    name: "naganadel",
    displayName: "Naganadel",
    dexNumber: 804,
    generation: 7,
    type: TypeName.Poison,
    type2: TypeName.Dragon,
    category: Category.UltraBeast,
    eggGroups: {
      group1: EggGroup.NoEggs,
      cycles: 120
    },
  },
  {
    name: "stakataka",
    displayName: "Stakataka",
    dexNumber: 805,
    generation: 7,
    type: TypeName.Rock,
    type2: TypeName.Steel,
    category: Category.UltraBeast,
    eggGroups: {
      group1: EggGroup.NoEggs,
      cycles: 120
    },
  },
  {
    name: "blacephalon",
    displayName: "Blacephalon",
    dexNumber: 806,
    generation: 7,
    type: TypeName.Fire,
    type2: TypeName.Ghost,
    category: Category.UltraBeast,
    eggGroups: {
      group1: EggGroup.NoEggs,
      cycles: 120
    },
  },
  {
    name: "zeraora",
    displayName: "Zeraora",
    dexNumber: 807,
    generation: 7,
    type: TypeName.Electric,
    category: Category.Mythical,
    eggGroups: {
      group1: EggGroup.NoEggs,
      cycles: 120
    },
  },
  {
    name: "meltan",
    displayName: "Meltan",
    dexNumber: 808,
    generation: 7,
    type: TypeName.Steel,
    category: Category.Mythical,
    eggGroups: {
      group1: EggGroup.NoEggs,
      cycles: 120
    },
  },
  {
    name: "melmetal",
    displayName: "Melmetal",
    dexNumber: 809,
    generation: 7,
    type: TypeName.Steel,
    category: Category.Mythical,
    eggGroups: {
      group1: EggGroup.NoEggs,
      cycles: 120
    },
  }
];
