import { Pokemon } from "../../classes";
import { AbilityName, Category, EggGroupName, TypeName } from "../../enums";

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
      group1: EggGroupName.Flying,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Overgrow,
      second: AbilityName.NA,
      hidden: AbilityName.LongReach
    }
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
      group1: EggGroupName.Flying,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Overgrow,
      second: AbilityName.NA,
      hidden: AbilityName.LongReach
    }
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
      group1: EggGroupName.Flying,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Overgrow,
      second: AbilityName.NA,
      hidden: AbilityName.LongReach
    }
  },
  {
    name: "litten",
    displayName: "Litten",
    dexNumber: 725,
    generation: 7,
    type: TypeName.Fire,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Blaze,
      second: AbilityName.NA,
      hidden: AbilityName.Intimidate
    }
  },
  {
    name: "torracat",
    displayName: "Torracat",
    dexNumber: 726,
    generation: 7,
    type: TypeName.Fire,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Blaze,
      second: AbilityName.NA,
      hidden: AbilityName.Intimidate
    }
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
      group1: EggGroupName.Field,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Blaze,
      second: AbilityName.NA,
      hidden: AbilityName.Intimidate
    }
  },
  {
    name: "popplio",
    displayName: "Popplio",
    dexNumber: 728,
    generation: 7,
    type: TypeName.Water,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Field,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Torrent,
      second: AbilityName.NA,
      hidden: AbilityName.LiquidVoice
    }
  },
  {
    name: "brionne",
    displayName: "Brionne",
    dexNumber: 729,
    generation: 7,
    type: TypeName.Water,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Field,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Torrent,
      second: AbilityName.NA,
      hidden: AbilityName.LiquidVoice
    }
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
      group1: EggGroupName.Water1,
      group2: EggGroupName.Field,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Torrent,
      second: AbilityName.NA,
      hidden: AbilityName.LiquidVoice
    }
  },
  {
    name: "pikipek",
    displayName: "Pikipek",
    dexNumber: 731,
    generation: 7,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Flying,
      cycles: 15
    },
    abilities: {
      first: AbilityName.KeenEye,
      second: AbilityName.SkillLink,
      hidden: AbilityName.Pickup
    }
  },
  {
    name: "trumbeak",
    displayName: "Trumbeak",
    dexNumber: 732,
    generation: 7,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Flying,
      cycles: 15
    },
    abilities: {
      first: AbilityName.KeenEye,
      second: AbilityName.SkillLink,
      hidden: AbilityName.Pickup
    }
  },
  {
    name: "toucannon",
    displayName: "Toucannon",
    dexNumber: 733,
    generation: 7,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Flying,
      cycles: 15
    },
    abilities: {
      first: AbilityName.KeenEye,
      second: AbilityName.SkillLink,
      hidden: AbilityName.SheerForce
    }
  },
  {
    name: "yungoos",
    displayName: "Yungoos",
    dexNumber: 734,
    generation: 7,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Stakeout,
      second: AbilityName.StrongJaw,
      hidden: AbilityName.Adaptability
    }
  },
  {
    name: "gumshoos",
    displayName: "Gumshoos",
    dexNumber: 735,
    generation: 7,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Stakeout,
      second: AbilityName.StrongJaw,
      hidden: AbilityName.Adaptability
    }
  },
  {
    name: "grubbin",
    displayName: "Grubbin",
    dexNumber: 736,
    generation: 7,
    type: TypeName.Bug,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Swarm,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "charjabug",
    displayName: "Charjabug",
    dexNumber: 737,
    generation: 7,
    type: TypeName.Bug,
    type2: TypeName.Electric,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Battery,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "vikavolt",
    displayName: "Vikavolt",
    dexNumber: 738,
    generation: 7,
    type: TypeName.Bug,
    type2: TypeName.Electric,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Levitate,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "crabrawler",
    displayName: "Crabrawler",
    dexNumber: 739,
    generation: 7,
    type: TypeName.Fighting,
    eggGroups: {
      group1: EggGroupName.Water3,
      cycles: 20
    },
    abilities: {
      first: AbilityName.HyperCutter,
      second: AbilityName.IronFist,
      hidden: AbilityName.AngerPoint
    }
  },
  {
    name: "crabominable",
    displayName: "Crabominable",
    dexNumber: 740,
    generation: 7,
    type: TypeName.Fighting,
    type2: TypeName.Ice,
    eggGroups: {
      group1: EggGroupName.Water3,
      cycles: 20
    },
    abilities: {
      first: AbilityName.HyperCutter,
      second: AbilityName.IronFist,
      hidden: AbilityName.AngerPoint
    }
  },
  {
    name: "oricorio",
    displayName: "Oricorio",
    dexNumber: 741,
    generation: 7,
    type: [TypeName.Fire, TypeName.Electric, TypeName.Psychic, TypeName.Ghost],
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Flying,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Dancer,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "cutiefly",
    displayName: "Cutiefly",
    dexNumber: 742,
    generation: 7,
    type: TypeName.Bug,
    type2: TypeName.Fairy,
    eggGroups: {
      group1: EggGroupName.Bug,
      group2: EggGroupName.Fairy,
      cycles: 20
    },
    abilities: {
      first: AbilityName.HoneyGather,
      second: AbilityName.ShieldDust,
      hidden: AbilityName.SweetVeil
    }
  },
  {
    name: "ribombee",
    displayName: "Ribombee",
    dexNumber: 743,
    generation: 7,
    type: TypeName.Bug,
    type2: TypeName.Fairy,
    eggGroups: {
      group1: EggGroupName.Bug,
      group2: EggGroupName.Fairy,
      cycles: 20
    },
    abilities: {
      first: AbilityName.HoneyGather,
      second: AbilityName.ShieldDust,
      hidden: AbilityName.SweetVeil
    }
  },
  {
    name: "rockruff",
    displayName: "Rockruff",
    dexNumber: 744,
    generation: 7,
    type: TypeName.Rock,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 15
    },
    abilities: {
      first: AbilityName.KeenEye,
      second: AbilityName.VitalSpirit,
      hidden: AbilityName.Steadfast
    }
  },
  {
    name: "lycanroc",
    displayName: "Lycanroc",
    dexNumber: 745,
    generation: 7,
    type: TypeName.Rock,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 15
    },
    abilities: {
      first: AbilityName.NA,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "wishiwashi",
    displayName: "Wishiwashi",
    dexNumber: 746,
    generation: 7,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water2,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Schooling,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "mareanie",
    displayName: "Mareanie",
    dexNumber: 747,
    generation: 7,
    type: TypeName.Poison,
    type2: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water1,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Merciless,
      second: AbilityName.Limber,
      hidden: AbilityName.Regenerator
    }
  },
  {
    name: "toxapex",
    displayName: "Toxapex",
    dexNumber: 748,
    generation: 7,
    type: TypeName.Poison,
    type2: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water1,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Merciless,
      second: AbilityName.Limber,
      hidden: AbilityName.Regenerator
    }
  },
  {
    name: "mudbray",
    displayName: "Mudbray",
    dexNumber: 749,
    generation: 7,
    type: TypeName.Ground,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.OwnTempo,
      second: AbilityName.Stamina,
      hidden: AbilityName.InnerFocus
    }
  },
  {
    name: "mudsdale",
    displayName: "Mudsdale",
    dexNumber: 750,
    generation: 7,
    type: TypeName.Ground,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.OwnTempo,
      second: AbilityName.Stamina,
      hidden: AbilityName.InnerFocus
    }
  },
  {
    name: "dewpider",
    displayName: "Dewpider",
    dexNumber: 751,
    generation: 7,
    type: TypeName.Water,
    type2: TypeName.Bug,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Bug,
      cycles: 15
    },
    abilities: {
      first: AbilityName.WaterBubble,
      second: AbilityName.NA,
      hidden: AbilityName.WaterAbsorb
    }
  },
  {
    name: "araquanid",
    displayName: "Araquanid",
    dexNumber: 752,
    generation: 7,
    type: TypeName.Water,
    type2: TypeName.Bug,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Bug,
      cycles: 15
    },
    abilities: {
      first: AbilityName.WaterBubble,
      second: AbilityName.NA,
      hidden: AbilityName.WaterAbsorb
    }
  },
  {
    name: "fomantis",
    displayName: "Fomantis",
    dexNumber: 753,
    generation: 7,
    type: TypeName.Grass,
    eggGroups: {
      group1: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.LeafGuard,
      second: AbilityName.NA,
      hidden: AbilityName.Contrary
    }
  },
  {
    name: "lurantis",
    displayName: "Lurantis",
    dexNumber: 754,
    generation: 7,
    type: TypeName.Grass,
    eggGroups: {
      group1: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.LeafGuard,
      second: AbilityName.NA,
      hidden: AbilityName.Contrary
    }
  },
  {
    name: "morelull",
    displayName: "Morelull",
    dexNumber: 755,
    generation: 7,
    type: TypeName.Grass,
    type2: TypeName.Fairy,
    eggGroups: {
      group1: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Illuminate,
      second: AbilityName.EffectSpore,
      hidden: AbilityName.RainDish
    }
  },
  {
    name: "shiinotic",
    displayName: "Shiinotic",
    dexNumber: 756,
    generation: 7,
    type: TypeName.Grass,
    type2: TypeName.Fairy,
    eggGroups: {
      group1: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Illuminate,
      second: AbilityName.EffectSpore,
      hidden: AbilityName.RainDish
    }
  },
  {
    name: "salandit",
    displayName: "Salandit",
    dexNumber: 757,
    generation: 7,
    type: TypeName.Poison,
    type2: TypeName.Fire,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Dragon,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Corrosion,
      second: AbilityName.NA,
      hidden: AbilityName.Oblivious
    }
  },
  {
    name: "salazzle",
    displayName: "Salazzle",
    dexNumber: 758,
    generation: 7,
    type: TypeName.Poison,
    type2: TypeName.Fire,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Dragon,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Corrosion,
      second: AbilityName.NA,
      hidden: AbilityName.Oblivious
    }
  },
  {
    name: "stufful",
    displayName: "Stufful",
    dexNumber: 759,
    generation: 7,
    type: TypeName.Normal,
    type2: TypeName.Fighting,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Fluffy,
      second: AbilityName.Klutz,
      hidden: AbilityName.CuteCharm
    }
  },
  {
    name: "bewear",
    displayName: "Bewear",
    dexNumber: 760,
    generation: 7,
    type: TypeName.Normal,
    type2: TypeName.Fighting,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Fluffy,
      second: AbilityName.Klutz,
      hidden: AbilityName.Unnerve
    }
  },
  {
    name: "bounsweet",
    displayName: "Bounsweet",
    dexNumber: 761,
    generation: 7,
    type: TypeName.Grass,
    eggGroups: {
      group1: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.LeafGuard,
      second: AbilityName.Oblivious,
      hidden: AbilityName.SweetVeil
    }
  },
  {
    name: "steenee",
    displayName: "Steenee",
    dexNumber: 762,
    generation: 7,
    type: TypeName.Grass,
    eggGroups: {
      group1: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.LeafGuard,
      second: AbilityName.Oblivious,
      hidden: AbilityName.SweetVeil
    }
  },
  {
    name: "tsareena",
    displayName: "Tsareena",
    dexNumber: 763,
    generation: 7,
    type: TypeName.Grass,
    eggGroups: {
      group1: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.LeafGuard,
      second: AbilityName.QueenlyMajesty,
      hidden: AbilityName.SweetVeil
    }
  },
  {
    name: "comfey",
    displayName: "Comfey",
    dexNumber: 764,
    generation: 7,
    type: TypeName.Fairy,
    eggGroups: {
      group1: EggGroupName.Grass,
      cycles: 20
    },
    abilities: {
      first: AbilityName.FlowerVeil,
      second: AbilityName.Triage,
      hidden: AbilityName.NaturalCure
    }
  },
  {
    name: "oranguru",
    displayName: "Oranguru",
    dexNumber: 765,
    generation: 7,
    type: TypeName.Normal,
    type2: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.InnerFocus,
      second: AbilityName.Telepathy,
      hidden: AbilityName.Symbiosis
    }
  },
  {
    name: "passimian",
    displayName: "Passimian",
    dexNumber: 766,
    generation: 7,
    type: TypeName.Fighting,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Receiver,
      second: AbilityName.NA,
      hidden: AbilityName.Defiant
    }
  },
  {
    name: "wimpod",
    displayName: "Wimpod",
    dexNumber: 767,
    generation: 7,
    type: TypeName.Bug,
    type2: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Bug,
      group2: EggGroupName.Water3,
      cycles: 20
    },
    abilities: {
      first: AbilityName.WimpOut,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "golisopod",
    displayName: "Golisopod",
    dexNumber: 768,
    generation: 7,
    type: TypeName.Bug,
    type2: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Bug,
      group2: EggGroupName.Water3,
      cycles: 20
    },
    abilities: {
      first: AbilityName.EmergencyExit,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "sandygast",
    displayName: "Sandygast",
    dexNumber: 769,
    generation: 7,
    type: TypeName.Ghost,
    type2: TypeName.Ground,
    eggGroups: {
      group1: EggGroupName.Amorphous,
      cycles: 15
    },
    abilities: {
      first: AbilityName.WaterCompaction,
      second: AbilityName.NA,
      hidden: AbilityName.SandVeil
    }
  },
  {
    name: "palossand",
    displayName: "Palossand",
    dexNumber: 770,
    generation: 7,
    type: TypeName.Ghost,
    type2: TypeName.Ground,
    eggGroups: {
      group1: EggGroupName.Amorphous,
      cycles: 15
    },
    abilities: {
      first: AbilityName.WaterCompaction,
      second: AbilityName.NA,
      hidden: AbilityName.SandVeil
    }
  },
  {
    name: "pyukumuku",
    displayName: "Pyukumuku",
    dexNumber: 771,
    generation: 7,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water1,
      cycles: 15
    },
    abilities: {
      first: AbilityName.InnardsOut,
      second: AbilityName.NA,
      hidden: AbilityName.Unaware
    }
  },
  {
    name: "typenull",
    displayName: "Type: Null",
    dexNumber: 772,
    generation: 7,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.BattleArmor,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "silvally",
    displayName: "Silvally",
    dexNumber: 773,
    generation: 7,
    type: [
      TypeName.Normal,
      TypeName.Bug,
      TypeName.Dark,
      TypeName.Dragon,
      TypeName.Electric,
      TypeName.Fairy,
      TypeName.Fighting,
      TypeName.Fire,
      TypeName.Flying,
      TypeName.Ghost,
      TypeName.Grass,
      TypeName.Ground,
      TypeName.Ice,
      TypeName.Poison,
      TypeName.Psychic,
      TypeName.Rock,
      TypeName.Steel,
      TypeName.Water
    ],
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.RKSSystem,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "minior",
    displayName: "Minior",
    dexNumber: 774,
    generation: 7,
    type: TypeName.Rock,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 25
    },
    abilities: {
      first: AbilityName.ShieldsDown,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "komala",
    displayName: "Komala",
    dexNumber: 775,
    generation: 7,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Comatose,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "turtonator",
    displayName: "Turtonator",
    dexNumber: 776,
    generation: 7,
    type: TypeName.Fire,
    type2: TypeName.Dragon,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Dragon,
      cycles: 20
    },
    abilities: {
      first: AbilityName.ShellArmor,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "togedemaru",
    displayName: "Togedemaru",
    dexNumber: 777,
    generation: 7,
    type: TypeName.Electric,
    type2: TypeName.Steel,
    eggGroups: {
      group1: EggGroupName.Field,
      group2: EggGroupName.Fairy,
      cycles: 10
    },
    abilities: {
      first: AbilityName.IronBarbs,
      second: AbilityName.LightningRod,
      hidden: AbilityName.Sturdy
    }
  },
  {
    name: "mimikyu",
    displayName: "Mimikyu",
    dexNumber: 778,
    generation: 7,
    type: TypeName.Ghost,
    type2: TypeName.Fairy,
    eggGroups: {
      group1: EggGroupName.Amorphous,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Disguise,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "bruxish",
    displayName: "Bruxish",
    dexNumber: 779,
    generation: 7,
    type: TypeName.Water,
    type2: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.Water2,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Dazzling,
      second: AbilityName.StrongJaw,
      hidden: AbilityName.WonderSkin
    }
  },
  {
    name: "drampa",
    displayName: "Drampa",
    dexNumber: 780,
    generation: 7,
    type: TypeName.Normal,
    type2: TypeName.Dragon,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Dragon,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Berserk,
      second: AbilityName.SapSipper,
      hidden: AbilityName.CloudNine
    }
  },
  {
    name: "dhelmise",
    displayName: "Dhelmise",
    dexNumber: 781,
    generation: 7,
    type: TypeName.Ghost,
    type2: TypeName.Grass,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 25
    },
    abilities: {
      first: AbilityName.Steelworker,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "jangmoo",
    displayName: "Jangmo-O",
    dexNumber: 782,
    generation: 7,
    type: TypeName.Dragon,
    eggGroups: {
      group1: EggGroupName.Dragon,
      cycles: 40
    },
    abilities: {
      first: AbilityName.Bulletproof,
      second: AbilityName.Soundproof,
      hidden: AbilityName.Overcoat
    }
  },
  {
    name: "hakamoo",
    displayName: "Hakamo-O",
    dexNumber: 783,
    generation: 7,
    type: TypeName.Dragon,
    type2: TypeName.Fighting,
    eggGroups: {
      group1: EggGroupName.Dragon,
      cycles: 40
    },
    abilities: {
      first: AbilityName.Bulletproof,
      second: AbilityName.Soundproof,
      hidden: AbilityName.Overcoat
    }
  },
  {
    name: "kommoo",
    displayName: "Kommo-O",
    dexNumber: 784,
    generation: 7,
    type: TypeName.Dragon,
    type2: TypeName.Fighting,
    eggGroups: {
      group1: EggGroupName.Dragon,
      cycles: 40
    },
    abilities: {
      first: AbilityName.Bulletproof,
      second: AbilityName.Soundproof,
      hidden: AbilityName.Overcoat
    }
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
      group1: EggGroupName.NoEggs,
      cycles: 15
    },
    abilities: {
      first: AbilityName.ElectricSurge,
      second: AbilityName.NA,
      hidden: AbilityName.Telepathy
    }
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
      group1: EggGroupName.NoEggs,
      cycles: 15
    },
    abilities: {
      first: AbilityName.PsychicSurge,
      second: AbilityName.NA,
      hidden: AbilityName.Telepathy
    }
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
      group1: EggGroupName.NoEggs,
      cycles: 15
    },
    abilities: {
      first: AbilityName.GrassySurge,
      second: AbilityName.NA,
      hidden: AbilityName.Telepathy
    }
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
      group1: EggGroupName.NoEggs,
      cycles: 15
    },
    abilities: {
      first: AbilityName.MistySurge,
      second: AbilityName.NA,
      hidden: AbilityName.Telepathy
    }
  },
  {
    name: "cosmog",
    displayName: "Cosmog",
    dexNumber: 789,
    generation: 7,
    type: TypeName.Psychic,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.Unaware,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "cosmoem",
    displayName: "Cosmoem",
    dexNumber: 790,
    generation: 7,
    type: TypeName.Psychic,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.Sturdy,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
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
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.FullMetalBody,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
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
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.ShadowShield,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
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
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.BeastBoost,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
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
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.BeastBoost,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
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
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.BeastBoost,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "xurkitree",
    displayName: "Xurkitree",
    dexNumber: 796,
    generation: 7,
    type: TypeName.Electric,
    category: Category.UltraBeast,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.BeastBoost,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
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
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.BeastBoost,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
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
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.BeastBoost,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
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
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.BeastBoost,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "necrozma",
    displayName: "Necrozma",
    dexNumber: 800,
    generation: 7,
    type: TypeName.Psychic,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.PrismArmor,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
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
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.SoulHeart,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
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
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.Technician,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "poipole",
    displayName: "Poipole",
    dexNumber: 803,
    generation: 7,
    type: TypeName.Poison,
    category: Category.UltraBeast,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.BeastBoost,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
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
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.BeastBoost,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
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
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.BeastBoost,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
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
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.BeastBoost,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "zeraora",
    displayName: "Zeraora",
    dexNumber: 807,
    generation: 7,
    type: TypeName.Electric,
    category: Category.Mythical,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.VoltAbsorb,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "meltan",
    displayName: "Meltan",
    dexNumber: 808,
    generation: 7,
    type: TypeName.Steel,
    category: Category.Mythical,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.MagnetPull,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "melmetal",
    displayName: "Melmetal",
    dexNumber: 809,
    generation: 7,
    type: TypeName.Steel,
    category: Category.Mythical,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.IronFist,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  }
];
