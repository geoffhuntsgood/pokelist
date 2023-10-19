import { Pokemon } from "../../classes";
import { AbilityName, Category, EggGroupName, TypeName } from "../../enums";

export const gen6Pokemon: Pokemon[] = [
  {
    name: "chespin",
    displayName: "Chespin",
    dexNumber: 650,
    generation: 6,
    type: TypeName.Grass,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Overgrow,
      second: AbilityName.NA,
      hidden: AbilityName.Bulletproof
    }
  },
  {
    name: "quilladin",
    displayName: "Quilladin",
    dexNumber: 651,
    generation: 6,
    type: TypeName.Grass,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Overgrow,
      second: AbilityName.NA,
      hidden: AbilityName.Bulletproof
    }
  },
  {
    name: "chesnaught",
    displayName: "Chesnaught",
    dexNumber: 652,
    generation: 6,
    type: TypeName.Grass,
    type2: TypeName.Fighting,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Overgrow,
      second: AbilityName.NA,
      hidden: AbilityName.Bulletproof
    }
  },
  {
    name: "fennekin",
    displayName: "Fennekin",
    dexNumber: 653,
    generation: 6,
    type: TypeName.Fire,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Blaze,
      second: AbilityName.NA,
      hidden: AbilityName.Magician
    }
  },
  {
    name: "braixen",
    displayName: "Braixen",
    dexNumber: 654,
    generation: 6,
    type: TypeName.Fire,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Blaze,
      second: AbilityName.NA,
      hidden: AbilityName.Magician
    }
  },
  {
    name: "delphox",
    displayName: "Delphox",
    dexNumber: 655,
    generation: 6,
    type: TypeName.Fire,
    type2: TypeName.Psychic,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Blaze,
      second: AbilityName.NA,
      hidden: AbilityName.Magician
    }
  },
  {
    name: "froakie",
    displayName: "Froakie",
    dexNumber: 656,
    generation: 6,
    type: TypeName.Water,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Water1,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Torrent,
      second: AbilityName.NA,
      hidden: AbilityName.Protean
    }
  },
  {
    name: "frogadier",
    displayName: "Frogadier",
    dexNumber: 657,
    generation: 6,
    type: TypeName.Water,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Water1,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Torrent,
      second: AbilityName.NA,
      hidden: AbilityName.Protean
    }
  },
  {
    name: "greninja",
    displayName: "Greninja",
    dexNumber: 658,
    generation: 6,
    type: TypeName.Water,
    type2: TypeName.Dark,
    category: Category.Starter,
    eggGroups: {
      group1: EggGroupName.Water1,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Torrent,
      second: AbilityName.NA,
      hidden: AbilityName.Protean
    }
  },
  {
    name: "bunnelby",
    displayName: "Bunnelby",
    dexNumber: 659,
    generation: 6,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Pickup,
      second: AbilityName.CheekPouch,
      hidden: AbilityName.HugePower
    }
  },
  {
    name: "diggersby",
    displayName: "Diggersby",
    dexNumber: 660,
    generation: 6,
    type: TypeName.Normal,
    type2: TypeName.Ground,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 15
    },
    abilities: {
      first: AbilityName.Pickup,
      second: AbilityName.CheekPouch,
      hidden: AbilityName.HugePower
    }
  },
  {
    name: "fletchling",
    displayName: "Fletchling",
    dexNumber: 661,
    generation: 6,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Flying,
      cycles: 15
    },
    abilities: {
      first: AbilityName.BigPecks,
      second: AbilityName.NA,
      hidden: AbilityName.GaleWings
    }
  },
  {
    name: "fletchinder",
    displayName: "Fletchinder",
    dexNumber: 662,
    generation: 6,
    type: TypeName.Fire,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Flying,
      cycles: 15
    },
    abilities: {
      first: AbilityName.FlameBody,
      second: AbilityName.NA,
      hidden: AbilityName.GaleWings
    }
  },
  {
    name: "talonflame",
    displayName: "Talonflame",
    dexNumber: 663,
    generation: 6,
    type: TypeName.Fire,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Flying,
      cycles: 15
    },
    abilities: {
      first: AbilityName.FlameBody,
      second: AbilityName.NA,
      hidden: AbilityName.GaleWings
    }
  },
  {
    name: "scatterbug",
    displayName: "Scatterbug",
    dexNumber: 664,
    generation: 6,
    type: TypeName.Bug,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 15
    },
    abilities: {
      first: AbilityName.ShieldDust,
      second: AbilityName.CompoundEyes,
      hidden: AbilityName.FriendGuard
    }
  },
  {
    name: "spewpa",
    displayName: "Spewpa",
    dexNumber: 665,
    generation: 6,
    type: TypeName.Bug,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 15
    },
    abilities: {
      first: AbilityName.ShedSkin,
      second: AbilityName.NA,
      hidden: AbilityName.FriendGuard
    }
  },
  {
    name: "vivillon",
    displayName: "Vivillon",
    dexNumber: 666,
    generation: 6,
    type: TypeName.Bug,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Bug,
      cycles: 15
    },
    abilities: {
      first: AbilityName.ShieldDust,
      second: AbilityName.CompoundEyes,
      hidden: AbilityName.FriendGuard
    }
  },
  {
    name: "litleo",
    displayName: "Litleo",
    dexNumber: 667,
    generation: 6,
    type: TypeName.Fire,
    type2: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Rivalry,
      second: AbilityName.Unnerve,
      hidden: AbilityName.Moxie
    }
  },
  {
    name: "pyroar",
    displayName: "Pyroar",
    dexNumber: 668,
    generation: 6,
    type: TypeName.Fire,
    type2: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Rivalry,
      second: AbilityName.Unnerve,
      hidden: AbilityName.Moxie
    }
  },
  {
    name: "flabebe",
    displayName: "Flabebe",
    dexNumber: 669,
    generation: 6,
    type: TypeName.Fairy,
    eggGroups: {
      group1: EggGroupName.Fairy,
      cycles: 20
    },
    abilities: {
      first: AbilityName.FlowerVeil,
      second: AbilityName.NA,
      hidden: AbilityName.Symbiosis
    }
  },
  {
    name: "floette",
    displayName: "Floette",
    dexNumber: 670,
    generation: 6,
    type: TypeName.Fairy,
    eggGroups: {
      group1: EggGroupName.Fairy,
      cycles: 20
    },
    abilities: {
      first: AbilityName.FlowerVeil,
      second: AbilityName.NA,
      hidden: AbilityName.Symbiosis
    }
  },
  {
    name: "florges",
    displayName: "Florges",
    dexNumber: 671,
    generation: 6,
    type: TypeName.Fairy,
    eggGroups: {
      group1: EggGroupName.Fairy,
      cycles: 20
    },
    abilities: {
      first: AbilityName.FlowerVeil,
      second: AbilityName.NA,
      hidden: AbilityName.Symbiosis
    }
  },
  {
    name: "skiddo",
    displayName: "Skiddo",
    dexNumber: 672,
    generation: 6,
    type: TypeName.Grass,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.SapSipper,
      second: AbilityName.NA,
      hidden: AbilityName.GrassPelt
    }
  },
  {
    name: "gogoat",
    displayName: "Gogoat",
    dexNumber: 673,
    generation: 6,
    type: TypeName.Grass,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.SapSipper,
      second: AbilityName.NA,
      hidden: AbilityName.GrassPelt
    }
  },
  {
    name: "pancham",
    displayName: "Pancham",
    dexNumber: 674,
    generation: 6,
    type: TypeName.Fighting,
    eggGroups: {
      group1: EggGroupName.Field,
      group2: EggGroupName.HumanLike,
      cycles: 25
    },
    abilities: {
      first: AbilityName.IronFist,
      second: AbilityName.MoldBreaker,
      hidden: AbilityName.Scrappy
    }
  },
  {
    name: "pangoro",
    displayName: "Pangoro",
    dexNumber: 675,
    generation: 6,
    type: TypeName.Fighting,
    type2: TypeName.Dark,
    eggGroups: {
      group1: EggGroupName.Field,
      group2: EggGroupName.HumanLike,
      cycles: 25
    },
    abilities: {
      first: AbilityName.IronFist,
      second: AbilityName.MoldBreaker,
      hidden: AbilityName.Scrappy
    }
  },
  {
    name: "furfrou",
    displayName: "Furfrou",
    dexNumber: 676,
    generation: 6,
    type: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.FurCoat,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "espurr",
    displayName: "Espurr",
    dexNumber: 677,
    generation: 6,
    type: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.KeenEye,
      second: AbilityName.Infiltrator,
      hidden: AbilityName.OwnTempo
    }
  },
  {
    name: "meowstic",
    displayName: "Meowstic",
    dexNumber: 678,
    generation: 6,
    type: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 20
    },
    abilities: {
      first: AbilityName.NA,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "honedge",
    displayName: "Honedge",
    dexNumber: 679,
    generation: 6,
    type: TypeName.Steel,
    type2: TypeName.Ghost,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 20
    },
    abilities: {
      first: AbilityName.NoGuard,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "doublade",
    displayName: "Doublade",
    dexNumber: 680,
    generation: 6,
    type: TypeName.Steel,
    type2: TypeName.Ghost,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 20
    },
    abilities: {
      first: AbilityName.NoGuard,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "aegislash",
    displayName: "Aegislash",
    dexNumber: 681,
    generation: 6,
    type: TypeName.Steel,
    type2: TypeName.Ghost,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 20
    },
    abilities: {
      first: AbilityName.StanceChange,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "spritzee",
    displayName: "Spritzee",
    dexNumber: 682,
    generation: 6,
    type: TypeName.Fairy,
    eggGroups: {
      group1: EggGroupName.Fairy,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Healer,
      second: AbilityName.NA,
      hidden: AbilityName.AromaVeil
    }
  },
  {
    name: "aromatisse",
    displayName: "Aromatisse",
    dexNumber: 683,
    generation: 6,
    type: TypeName.Fairy,
    eggGroups: {
      group1: EggGroupName.Fairy,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Healer,
      second: AbilityName.NA,
      hidden: AbilityName.AromaVeil
    }
  },
  {
    name: "swirlix",
    displayName: "Swirlix",
    dexNumber: 684,
    generation: 6,
    type: TypeName.Fairy,
    eggGroups: {
      group1: EggGroupName.Fairy,
      cycles: 20
    },
    abilities: {
      first: AbilityName.SweetVeil,
      second: AbilityName.NA,
      hidden: AbilityName.Unburden
    }
  },
  {
    name: "slurpuff",
    displayName: "Slurpuff",
    dexNumber: 685,
    generation: 6,
    type: TypeName.Fairy,
    eggGroups: {
      group1: EggGroupName.Fairy,
      cycles: 20
    },
    abilities: {
      first: AbilityName.SweetVeil,
      second: AbilityName.NA,
      hidden: AbilityName.Unburden
    }
  },
  {
    name: "inkay",
    displayName: "Inkay",
    dexNumber: 686,
    generation: 6,
    type: TypeName.Dark,
    type2: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Water2,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Contrary,
      second: AbilityName.SuctionCups,
      hidden: AbilityName.Infiltrator
    }
  },
  {
    name: "malamar",
    displayName: "Malamar",
    dexNumber: 687,
    generation: 6,
    type: TypeName.Dark,
    type2: TypeName.Psychic,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Water2,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Contrary,
      second: AbilityName.SuctionCups,
      hidden: AbilityName.Infiltrator
    }
  },
  {
    name: "binacle",
    displayName: "Binacle",
    dexNumber: 688,
    generation: 6,
    type: TypeName.Rock,
    type2: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water3,
      cycles: 20
    },
    abilities: {
      first: AbilityName.ToughClaws,
      second: AbilityName.Sniper,
      hidden: AbilityName.Pickpocket
    }
  },
  {
    name: "barbaracle",
    displayName: "Barbaracle",
    dexNumber: 689,
    generation: 6,
    type: TypeName.Rock,
    type2: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water3,
      cycles: 20
    },
    abilities: {
      first: AbilityName.ToughClaws,
      second: AbilityName.Sniper,
      hidden: AbilityName.Pickpocket
    }
  },
  {
    name: "skrelp",
    displayName: "Skrelp",
    dexNumber: 690,
    generation: 6,
    type: TypeName.Poison,
    type2: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Dragon,
      cycles: 20
    },
    abilities: {
      first: AbilityName.PoisonPoint,
      second: AbilityName.PoisonTouch,
      hidden: AbilityName.Adaptability
    }
  },
  {
    name: "dragalge",
    displayName: "Dragalge",
    dexNumber: 691,
    generation: 6,
    type: TypeName.Poison,
    type2: TypeName.Dragon,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Dragon,
      cycles: 20
    },
    abilities: {
      first: AbilityName.PoisonPoint,
      second: AbilityName.PoisonTouch,
      hidden: AbilityName.Adaptability
    }
  },
  {
    name: "clauncher",
    displayName: "Clauncher",
    dexNumber: 692,
    generation: 6,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Water3,
      cycles: 15
    },
    abilities: {
      first: AbilityName.MegaLauncher,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "clawitzer",
    displayName: "Clawitzer",
    dexNumber: 693,
    generation: 6,
    type: TypeName.Water,
    eggGroups: {
      group1: EggGroupName.Water1,
      group2: EggGroupName.Water3,
      cycles: 15
    },
    abilities: {
      first: AbilityName.MegaLauncher,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "helioptile",
    displayName: "Helioptile",
    dexNumber: 694,
    generation: 6,
    type: TypeName.Electric,
    type2: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Dragon,
      cycles: 20
    },
    abilities: {
      first: AbilityName.DrySkin,
      second: AbilityName.SandVeil,
      hidden: AbilityName.SolarPower
    }
  },
  {
    name: "heliolisk",
    displayName: "Heliolisk",
    dexNumber: 695,
    generation: 6,
    type: TypeName.Electric,
    type2: TypeName.Normal,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Dragon,
      cycles: 20
    },
    abilities: {
      first: AbilityName.DrySkin,
      second: AbilityName.SandVeil,
      hidden: AbilityName.SolarPower
    }
  },
  {
    name: "tyrunt",
    displayName: "Tyrunt",
    dexNumber: 696,
    generation: 6,
    type: TypeName.Rock,
    type2: TypeName.Dragon,
    category: Category.Fossil,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Dragon,
      cycles: 30
    },
    abilities: {
      first: AbilityName.StrongJaw,
      second: AbilityName.NA,
      hidden: AbilityName.Sturdy
    }
  },
  {
    name: "tyrantrum",
    displayName: "Tyrantrum",
    dexNumber: 697,
    generation: 6,
    type: TypeName.Rock,
    type2: TypeName.Dragon,
    category: Category.Fossil,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Dragon,
      cycles: 30
    },
    abilities: {
      first: AbilityName.StrongJaw,
      second: AbilityName.NA,
      hidden: AbilityName.RockHead
    }
  },
  {
    name: "amaura",
    displayName: "Amaura",
    dexNumber: 698,
    generation: 6,
    type: TypeName.Rock,
    type2: TypeName.Ice,
    category: Category.Fossil,
    eggGroups: {
      group1: EggGroupName.Monster,
      cycles: 30
    },
    abilities: {
      first: AbilityName.Refrigerate,
      second: AbilityName.NA,
      hidden: AbilityName.SnowWarning
    }
  },
  {
    name: "aurorus",
    displayName: "Aurorus",
    dexNumber: 699,
    generation: 6,
    type: TypeName.Rock,
    type2: TypeName.Ice,
    category: Category.Fossil,
    eggGroups: {
      group1: EggGroupName.Monster,
      cycles: 30
    },
    abilities: {
      first: AbilityName.Refrigerate,
      second: AbilityName.NA,
      hidden: AbilityName.SnowWarning
    }
  },
  {
    name: "sylveon",
    displayName: "Sylveon",
    dexNumber: 700,
    generation: 6,
    type: TypeName.Fairy,
    eggGroups: {
      group1: EggGroupName.Field,
      cycles: 35
    },
    abilities: {
      first: AbilityName.CuteCharm,
      second: AbilityName.NA,
      hidden: AbilityName.Pixilate
    }
  },
  {
    name: "hawlucha",
    displayName: "Hawlucha",
    dexNumber: 701,
    generation: 6,
    type: TypeName.Fighting,
    type2: TypeName.Flying,
    eggGroups: {
      group1: EggGroupName.Flying,
      group2: EggGroupName.HumanLike,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Limber,
      second: AbilityName.Unburden,
      hidden: AbilityName.MoldBreaker
    }
  },
  {
    name: "dedenne",
    displayName: "Dedenne",
    dexNumber: 702,
    generation: 6,
    type: TypeName.Electric,
    type2: TypeName.Fairy,
    eggGroups: {
      group1: EggGroupName.Field,
      group2: EggGroupName.Fairy,
      cycles: 20
    },
    abilities: {
      first: AbilityName.CheekPouch,
      second: AbilityName.Pickup,
      hidden: AbilityName.Plus
    }
  },
  {
    name: "carbink",
    displayName: "Carbink",
    dexNumber: 703,
    generation: 6,
    type: TypeName.Rock,
    type2: TypeName.Fairy,
    eggGroups: {
      group1: EggGroupName.Fairy,
      group2: EggGroupName.Mineral,
      cycles: 25
    },
    abilities: {
      first: AbilityName.ClearBody,
      second: AbilityName.NA,
      hidden: AbilityName.Sturdy
    }
  },
  {
    name: "goomy",
    displayName: "Goomy",
    dexNumber: 704,
    generation: 6,
    type: TypeName.Dragon,
    eggGroups: {
      group1: EggGroupName.Dragon,
      cycles: 40
    },
    abilities: {
      first: AbilityName.SapSipper,
      second: AbilityName.Hydration,
      hidden: AbilityName.Gooey
    }
  },
  {
    name: "sliggoo",
    displayName: "Sliggoo",
    dexNumber: 705,
    generation: 6,
    type: TypeName.Dragon,
    eggGroups: {
      group1: EggGroupName.Dragon,
      cycles: 40
    },
    abilities: {
      first: AbilityName.SapSipper,
      second: AbilityName.Hydration,
      hidden: AbilityName.Gooey
    }
  },
  {
    name: "goodra",
    displayName: "Goodra",
    dexNumber: 706,
    generation: 6,
    type: TypeName.Dragon,
    eggGroups: {
      group1: EggGroupName.Dragon,
      cycles: 40
    },
    abilities: {
      first: AbilityName.SapSipper,
      second: AbilityName.Hydration,
      hidden: AbilityName.Gooey
    }
  },
  {
    name: "klefki",
    displayName: "Klefki",
    dexNumber: 707,
    generation: 6,
    type: TypeName.Steel,
    type2: TypeName.Fairy,
    eggGroups: {
      group1: EggGroupName.Mineral,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Prankster,
      second: AbilityName.NA,
      hidden: AbilityName.Magician
    }
  },
  {
    name: "phantump",
    displayName: "Phantump",
    dexNumber: 708,
    generation: 6,
    type: TypeName.Ghost,
    type2: TypeName.Grass,
    eggGroups: {
      group1: EggGroupName.Grass,
      group2: EggGroupName.Amorphous,
      cycles: 20
    },
    abilities: {
      first: AbilityName.NaturalCure,
      second: AbilityName.Frisk,
      hidden: AbilityName.Harvest
    }
  },
  {
    name: "trevenant",
    displayName: "Trevenant",
    dexNumber: 709,
    generation: 6,
    type: TypeName.Ghost,
    type2: TypeName.Grass,
    eggGroups: {
      group1: EggGroupName.Grass,
      group2: EggGroupName.Amorphous,
      cycles: 20
    },
    abilities: {
      first: AbilityName.NaturalCure,
      second: AbilityName.Frisk,
      hidden: AbilityName.Harvest
    }
  },
  {
    name: "pumpkaboo",
    displayName: "Pumpkaboo",
    dexNumber: 710,
    generation: 6,
    type: TypeName.Ghost,
    type2: TypeName.Grass,
    eggGroups: {
      group1: EggGroupName.Amorphous,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Pickup,
      second: AbilityName.Frisk,
      hidden: AbilityName.Insomnia
    }
  },
  {
    name: "gourgeist",
    displayName: "Gourgeist",
    dexNumber: 711,
    generation: 6,
    type: TypeName.Ghost,
    type2: TypeName.Grass,
    eggGroups: {
      group1: EggGroupName.Amorphous,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Pickup,
      second: AbilityName.Frisk,
      hidden: AbilityName.Insomnia
    }
  },
  {
    name: "bergmite",
    displayName: "Bergmite",
    dexNumber: 712,
    generation: 6,
    type: TypeName.Ice,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Mineral,
      cycles: 20
    },
    abilities: {
      first: AbilityName.OwnTempo,
      second: AbilityName.IceBody,
      hidden: AbilityName.Sturdy
    }
  },
  {
    name: "avalugg",
    displayName: "Avalugg",
    dexNumber: 713,
    generation: 6,
    type: TypeName.Ice,
    eggGroups: {
      group1: EggGroupName.Monster,
      group2: EggGroupName.Mineral,
      cycles: 20
    },
    abilities: {
      first: AbilityName.OwnTempo,
      second: AbilityName.IceBody,
      hidden: AbilityName.Sturdy
    }
  },
  {
    name: "noibat",
    displayName: "Noibat",
    dexNumber: 714,
    generation: 6,
    type: TypeName.Flying,
    type2: TypeName.Dragon,
    eggGroups: {
      group1: EggGroupName.Flying,
      group2: EggGroupName.Dragon,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Frisk,
      second: AbilityName.Infiltrator,
      hidden: AbilityName.Telepathy
    }
  },
  {
    name: "noivern",
    displayName: "Noivern",
    dexNumber: 715,
    generation: 6,
    type: TypeName.Flying,
    type2: TypeName.Dragon,
    eggGroups: {
      group1: EggGroupName.Flying,
      group2: EggGroupName.Dragon,
      cycles: 20
    },
    abilities: {
      first: AbilityName.Frisk,
      second: AbilityName.Infiltrator,
      hidden: AbilityName.Telepathy
    }
  },
  {
    name: "xerneas",
    displayName: "Xerneas",
    dexNumber: 716,
    generation: 6,
    type: TypeName.Fairy,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.FairyAura,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "yveltal",
    displayName: "Yveltal",
    dexNumber: 717,
    generation: 6,
    type: TypeName.Dark,
    type2: TypeName.Flying,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.DarkAura,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "zygarde",
    displayName: "Zygarde",
    dexNumber: 718,
    generation: 6,
    type: TypeName.Dragon,
    type2: TypeName.Ground,
    category: Category.Legendary,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.NA,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "diancie",
    displayName: "Diancie",
    dexNumber: 719,
    generation: 6,
    type: TypeName.Rock,
    type2: TypeName.Fairy,
    category: Category.Mythical,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 25
    },
    abilities: {
      first: AbilityName.ClearBody,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "hoopa",
    displayName: "Hoopa",
    dexNumber: 720,
    generation: 6,
    type: TypeName.Psychic,
    category: Category.Mythical,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.Magician,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  },
  {
    name: "volcanion",
    displayName: "Volcanion",
    dexNumber: 721,
    generation: 6,
    type: TypeName.Fire,
    type2: TypeName.Water,
    category: Category.Mythical,
    eggGroups: {
      group1: EggGroupName.NoEggs,
      cycles: 120
    },
    abilities: {
      first: AbilityName.WaterAbsorb,
      second: AbilityName.NA,
      hidden: AbilityName.NA
    }
  }
];
