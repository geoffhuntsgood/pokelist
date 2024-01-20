import { Pokemon } from "../../classes/Pokemon";
import {
  Ability,
  Category,
  EggGroup,
  PokemonName,
  TypeName
} from "../../enums";

export const gen6Pokemon: Pokemon[] = [
  new Pokemon({
    name: PokemonName.Chespin,
    dex: 650,
    type: TypeName.Grass,
    category: Category.Starter,
    abilities: {
      first: Ability.Overgrow,
      hidden: Ability.Bulletproof
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Quilladin,
    dex: 651,
    type: TypeName.Grass,
    category: Category.Starter,
    abilities: {
      first: Ability.Overgrow,
      hidden: Ability.Bulletproof
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Chesnaught,
    dex: 652,
    type: TypeName.Grass,
    type2: TypeName.Fighting,
    category: Category.Starter,
    abilities: {
      first: Ability.Overgrow,
      hidden: Ability.Bulletproof
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Fennekin,
    dex: 653,
    type: TypeName.Fire,
    category: Category.Starter,
    abilities: {
      first: Ability.Blaze,
      hidden: Ability.Magician
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Braixen,
    dex: 654,
    type: TypeName.Fire,
    category: Category.Starter,
    abilities: {
      first: Ability.Blaze,
      hidden: Ability.Magician
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Delphox,
    dex: 655,
    type: TypeName.Fire,
    type2: TypeName.Psychic,
    category: Category.Starter,
    abilities: {
      first: Ability.Blaze,
      hidden: Ability.Magician
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Froakie,
    dex: 656,
    type: TypeName.Water,
    category: Category.Starter,
    abilities: {
      first: Ability.Torrent,
      hidden: Ability.Protean
    },
    eggGroups: [EggGroup.Water1]
  }),
  new Pokemon({
    name: PokemonName.Frogadier,
    dex: 657,
    type: TypeName.Water,
    category: Category.Starter,
    abilities: {
      first: Ability.Torrent,
      hidden: Ability.Protean
    },
    eggGroups: [EggGroup.Water1]
  }),
  new Pokemon({
    name: PokemonName.Greninja,
    dex: 658,
    type: TypeName.Water,
    type2: TypeName.Dark,
    category: Category.Starter,
    abilities: {
      first: Ability.Torrent,
      hidden: Ability.Protean
    },
    eggGroups: [EggGroup.Water1],
    forms: [
      {
        formName: PokemonName.GreninjaAsh,
        abilities: {
          first: Ability.BattleBond
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Bunnelby,
    dex: 659,
    type: TypeName.Normal,
    abilities: {
      first: Ability.Pickup,
      second: Ability.CheekPouch,
      hidden: Ability.HugePower
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Diggersby,
    dex: 660,
    type: TypeName.Normal,
    type2: TypeName.Ground,
    abilities: {
      first: Ability.Pickup,
      second: Ability.CheekPouch,
      hidden: Ability.HugePower
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Fletchling,
    dex: 661,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.BigPecks,
      hidden: Ability.GaleWings
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Fletchinder,
    dex: 662,
    type: TypeName.Fire,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.FlameBody,
      hidden: Ability.GaleWings
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Talonflame,
    dex: 663,
    type: TypeName.Fire,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.FlameBody,
      hidden: Ability.GaleWings
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Scatterbug,
    dex: 664,
    type: TypeName.Bug,
    abilities: {
      first: Ability.ShieldDust,
      second: Ability.CompoundEyes,
      hidden: Ability.FriendGuard
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Spewpa,
    dex: 665,
    type: TypeName.Bug,
    abilities: {
      first: Ability.ShedSkin,
      hidden: Ability.FriendGuard
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Vivillon,
    dex: 666,
    type: TypeName.Bug,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.ShieldDust,
      second: Ability.CompoundEyes,
      hidden: Ability.FriendGuard
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Litleo,
    dex: 667,
    type: TypeName.Fire,
    type2: TypeName.Normal,
    abilities: {
      first: Ability.Rivalry,
      second: Ability.Unnerve,
      hidden: Ability.Moxie
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Pyroar,
    dex: 668,
    type: TypeName.Fire,
    type2: TypeName.Normal,
    abilities: {
      first: Ability.Rivalry,
      second: Ability.Unnerve,
      hidden: Ability.Moxie
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Flabebe,
    dex: 669,
    type: TypeName.Fairy,
    abilities: {
      first: Ability.FlowerVeil,
      hidden: Ability.Symbiosis
    },
    eggGroups: [EggGroup.Fairy]
  }),
  new Pokemon({
    name: PokemonName.Floette,
    dex: 670,
    type: TypeName.Fairy,
    abilities: {
      first: Ability.FlowerVeil,
      hidden: Ability.Symbiosis
    },
    eggGroups: [EggGroup.Fairy]
  }),
  new Pokemon({
    name: PokemonName.Florges,
    dex: 671,
    type: TypeName.Fairy,
    abilities: {
      first: Ability.FlowerVeil,
      hidden: Ability.Symbiosis
    },
    eggGroups: [EggGroup.Fairy]
  }),
  new Pokemon({
    name: PokemonName.Skiddo,
    dex: 672,
    type: TypeName.Grass,
    abilities: {
      first: Ability.SapSipper,
      hidden: Ability.GrassPelt
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Gogoat,
    dex: 673,
    type: TypeName.Grass,
    abilities: {
      first: Ability.SapSipper,
      hidden: Ability.GrassPelt
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Pancham,
    dex: 674,
    type: TypeName.Fighting,
    abilities: {
      first: Ability.IronFist,
      second: Ability.MoldBreaker,
      hidden: Ability.Scrappy
    },
    eggGroups: [EggGroup.Field, EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Pangoro,
    dex: 675,
    type: TypeName.Fighting,
    type2: TypeName.Dark,
    abilities: {
      first: Ability.IronFist,
      second: Ability.MoldBreaker,
      hidden: Ability.Scrappy
    },
    eggGroups: [EggGroup.Field, EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Furfrou,
    dex: 676,
    type: TypeName.Normal,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.FurCoat
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Espurr,
    dex: 677,
    type: TypeName.Psychic,
    abilities: {
      first: Ability.KeenEye,
      second: Ability.Infiltrator,
      hidden: Ability.OwnTempo
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Meowstic,
    dex: 678,
    type: TypeName.Psychic,
    abilities: {
      first: Ability.KeenEye,
      second: Ability.Infiltrator,
      hidden: Ability.Prankster
    },
    eggGroups: [EggGroup.Field],
    defaultForm: PokemonName.MeowsticMale,
    forms: [
      {
        formName: PokemonName.MeowsticFemale,
        abilities: {
          first: Ability.KeenEye,
          second: Ability.Infiltrator,
          hidden: Ability.Competitive
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Honedge,
    dex: 679,
    type: TypeName.Steel,
    type2: TypeName.Ghost,
    abilities: {
      first: Ability.NoGuard
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Doublade,
    dex: 680,
    type: TypeName.Steel,
    type2: TypeName.Ghost,
    abilities: {
      first: Ability.NoGuard
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Aegislash,
    dex: 681,
    type: TypeName.Steel,
    type2: TypeName.Ghost,
    abilities: {
      first: Ability.StanceChange
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Spritzee,
    dex: 682,
    type: TypeName.Fairy,
    abilities: {
      first: Ability.Healer,
      hidden: Ability.AromaVeil
    },
    eggGroups: [EggGroup.Fairy]
  }),
  new Pokemon({
    name: PokemonName.Aromatisse,
    dex: 683,
    type: TypeName.Fairy,
    abilities: {
      first: Ability.Healer,
      hidden: Ability.AromaVeil
    },
    eggGroups: [EggGroup.Fairy]
  }),
  new Pokemon({
    name: PokemonName.Swirlix,
    dex: 684,
    type: TypeName.Fairy,
    abilities: {
      first: Ability.SweetVeil,
      hidden: Ability.Unburden
    },
    eggGroups: [EggGroup.Fairy]
  }),
  new Pokemon({
    name: PokemonName.Slurpuff,
    dex: 685,
    type: TypeName.Fairy,
    abilities: {
      first: Ability.SweetVeil,
      hidden: Ability.Unburden
    },
    eggGroups: [EggGroup.Fairy]
  }),
  new Pokemon({
    name: PokemonName.Inkay,
    dex: 686,
    type: TypeName.Dark,
    type2: TypeName.Psychic,
    abilities: {
      first: Ability.Contrary,
      second: Ability.SuctionCups,
      hidden: Ability.Infiltrator
    },
    eggGroups: [EggGroup.Water1, EggGroup.Water2]
  }),
  new Pokemon({
    name: PokemonName.Malamar,
    dex: 687,
    type: TypeName.Dark,
    type2: TypeName.Psychic,
    abilities: {
      first: Ability.Contrary,
      second: Ability.SuctionCups,
      hidden: Ability.Infiltrator
    },
    eggGroups: [EggGroup.Water1, EggGroup.Water2]
  }),
  new Pokemon({
    name: PokemonName.Binacle,
    dex: 688,
    type: TypeName.Rock,
    type2: TypeName.Water,
    abilities: {
      first: Ability.ToughClaws,
      second: Ability.Sniper,
      hidden: Ability.Pickpocket
    },
    eggGroups: [EggGroup.Water3]
  }),
  new Pokemon({
    name: PokemonName.Barbaracle,
    dex: 689,
    type: TypeName.Rock,
    type2: TypeName.Water,
    abilities: {
      first: Ability.ToughClaws,
      second: Ability.Sniper,
      hidden: Ability.Pickpocket
    },
    eggGroups: [EggGroup.Water3]
  }),
  new Pokemon({
    name: PokemonName.Skrelp,
    dex: 690,
    type: TypeName.Poison,
    type2: TypeName.Water,
    abilities: {
      first: Ability.PoisonPoint,
      second: Ability.PoisonTouch,
      hidden: Ability.Adaptability
    },
    eggGroups: [EggGroup.Water1, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Dragalge,
    dex: 691,
    type: TypeName.Poison,
    type2: TypeName.Dragon,
    abilities: {
      first: Ability.PoisonPoint,
      second: Ability.PoisonTouch,
      hidden: Ability.Adaptability
    },
    eggGroups: [EggGroup.Water1, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Clauncher,
    dex: 692,
    type: TypeName.Water,
    abilities: {
      first: Ability.MegaLauncher
    },
    eggGroups: [EggGroup.Water1, EggGroup.Water3]
  }),
  new Pokemon({
    name: PokemonName.Clawitzer,
    dex: 693,
    type: TypeName.Water,
    abilities: {
      first: Ability.MegaLauncher
    },
    eggGroups: [EggGroup.Water1, EggGroup.Water3]
  }),
  new Pokemon({
    name: PokemonName.Helioptile,
    dex: 694,
    type: TypeName.Electric,
    type2: TypeName.Normal,
    abilities: {
      first: Ability.DrySkin,
      second: Ability.SandVeil,
      hidden: Ability.SolarPower
    },
    eggGroups: [EggGroup.Monster, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Heliolisk,
    dex: 695,
    type: TypeName.Electric,
    type2: TypeName.Normal,
    abilities: {
      first: Ability.DrySkin,
      second: Ability.SandVeil,
      hidden: Ability.SolarPower
    },
    eggGroups: [EggGroup.Monster, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Tyrunt,
    dex: 696,
    type: TypeName.Rock,
    type2: TypeName.Dragon,
    category: Category.Fossil,
    abilities: {
      first: Ability.StrongJaw,
      hidden: Ability.Sturdy
    },
    eggGroups: [EggGroup.Monster, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Tyrantrum,
    dex: 697,
    type: TypeName.Rock,
    type2: TypeName.Dragon,
    category: Category.Fossil,
    abilities: {
      first: Ability.StrongJaw,
      hidden: Ability.RockHead
    },
    eggGroups: [EggGroup.Monster, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Amaura,
    dex: 698,
    type: TypeName.Rock,
    type2: TypeName.Ice,
    category: Category.Fossil,
    abilities: {
      first: Ability.Refrigerate,
      hidden: Ability.SnowWarning
    },
    eggGroups: [EggGroup.Monster]
  }),
  new Pokemon({
    name: PokemonName.Aurorus,
    dex: 699,
    type: TypeName.Rock,
    type2: TypeName.Ice,
    category: Category.Fossil,
    abilities: {
      first: Ability.Refrigerate,
      hidden: Ability.SnowWarning
    },
    eggGroups: [EggGroup.Monster]
  }),
  new Pokemon({
    name: PokemonName.Sylveon,
    dex: 700,
    type: TypeName.Fairy,
    abilities: {
      first: Ability.CuteCharm,
      hidden: Ability.Pixilate
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Hawlucha,
    dex: 701,
    type: TypeName.Fighting,
    type2: TypeName.Flying,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.Limber,
      second: Ability.Unburden,
      hidden: Ability.MoldBreaker
    },
    eggGroups: [EggGroup.Flying, EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Dedenne,
    dex: 702,
    type: TypeName.Electric,
    type2: TypeName.Fairy,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.CheekPouch,
      second: Ability.Pickup,
      hidden: Ability.Plus
    },
    eggGroups: [EggGroup.Field, EggGroup.Fairy]
  }),
  new Pokemon({
    name: PokemonName.Carbink,
    dex: 703,
    type: TypeName.Rock,
    type2: TypeName.Fairy,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.ClearBody,
      hidden: Ability.Sturdy
    },
    eggGroups: [EggGroup.Fairy, EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Goomy,
    dex: 704,
    type: TypeName.Dragon,
    abilities: {
      first: Ability.SapSipper,
      second: Ability.Hydration,
      hidden: Ability.Gooey
    },
    eggGroups: [EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Sliggoo,
    dex: 705,
    type: TypeName.Dragon,
    abilities: {
      first: Ability.SapSipper,
      second: Ability.Hydration,
      hidden: Ability.Gooey
    },
    eggGroups: [EggGroup.Dragon],
    forms: [
      {
        formName: PokemonName.HisuianSliggoo,
        type: TypeName.Steel,
        type2: TypeName.Dragon,
        abilities: {
          first: Ability.SapSipper,
          second: Ability.ShellArmor,
          hidden: Ability.Gooey
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Goodra,
    dex: 706,
    type: TypeName.Dragon,
    abilities: {
      first: Ability.SapSipper,
      second: Ability.Hydration,
      hidden: Ability.Gooey
    },
    eggGroups: [EggGroup.Dragon],
    forms: [
      {
        formName: PokemonName.HisuianGoodra,
        type: TypeName.Steel,
        type2: TypeName.Dragon,
        abilities: {
          first: Ability.SapSipper,
          second: Ability.ShellArmor,
          hidden: Ability.Gooey
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Klefki,
    dex: 707,
    type: TypeName.Steel,
    type2: TypeName.Fairy,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.Prankster,
      hidden: Ability.Magician
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Phantump,
    dex: 708,
    type: TypeName.Ghost,
    type2: TypeName.Grass,
    abilities: {
      first: Ability.NaturalCure,
      second: Ability.Frisk,
      hidden: Ability.Harvest
    },
    eggGroups: [EggGroup.Grass, EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Trevenant,
    dex: 709,
    type: TypeName.Ghost,
    type2: TypeName.Grass,
    abilities: {
      first: Ability.NaturalCure,
      second: Ability.Frisk,
      hidden: Ability.Harvest
    },
    eggGroups: [EggGroup.Grass, EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Pumpkaboo,
    dex: 710,
    type: TypeName.Ghost,
    type2: TypeName.Grass,
    abilities: {
      first: Ability.Pickup,
      second: Ability.Frisk,
      hidden: Ability.Insomnia
    },
    eggGroups: [EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Gourgeist,
    dex: 711,
    type: TypeName.Ghost,
    type2: TypeName.Grass,
    abilities: {
      first: Ability.Pickup,
      second: Ability.Frisk,
      hidden: Ability.Insomnia
    },
    eggGroups: [EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Bergmite,
    dex: 712,
    type: TypeName.Ice,
    abilities: {
      first: Ability.OwnTempo,
      second: Ability.IceBody,
      hidden: Ability.Sturdy
    },
    eggGroups: [EggGroup.Monster, EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Avalugg,
    dex: 713,
    type: TypeName.Ice,
    abilities: {
      first: Ability.OwnTempo,
      second: Ability.IceBody,
      hidden: Ability.Sturdy
    },
    eggGroups: [EggGroup.Monster, EggGroup.Mineral],
    forms: [
      {
        formName: PokemonName.HisuianAvalugg,
        type: TypeName.Ice,
        type2: TypeName.Rock,
        abilities: {
          first: Ability.StrongJaw,
          second: Ability.IceBody,
          hidden: Ability.Sturdy
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Noibat,
    dex: 714,
    type: TypeName.Flying,
    type2: TypeName.Dragon,
    abilities: {
      first: Ability.Frisk,
      second: Ability.Infiltrator,
      hidden: Ability.Telepathy
    },
    eggGroups: [EggGroup.Flying, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Noivern,
    dex: 715,
    type: TypeName.Flying,
    type2: TypeName.Dragon,
    abilities: {
      first: Ability.Frisk,
      second: Ability.Infiltrator,
      hidden: Ability.Telepathy
    },
    eggGroups: [EggGroup.Flying, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Xerneas,
    dex: 716,
    type: TypeName.Fairy,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.FairyAura
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Yveltal,
    dex: 717,
    type: TypeName.Dark,
    type2: TypeName.Flying,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.DarkAura
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Zygarde,
    dex: 718,
    type: TypeName.Dragon,
    type2: TypeName.Ground,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.AuraBreak,
      second: Ability.PowerConstruct
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Diancie,
    dex: 719,
    type: TypeName.Rock,
    type2: TypeName.Fairy,
    category: [Category.Mythical, Category.NonEvolve],
    abilities: {
      first: Ability.ClearBody,
      hidden: Ability.MagicBounce
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Hoopa,
    dex: 720,
    type: TypeName.Psychic,
    type2: TypeName.Ghost,
    category: [Category.Mythical, Category.NonEvolve],
    abilities: {
      first: Ability.Magician
    },
    eggGroups: [EggGroup.NoEggs],
    defaultForm: PokemonName.HoopaConfined,
    forms: [
      {
        formName: PokemonName.HoopaUnbound,
        type: TypeName.Psychic,
        type2: TypeName.Dark
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Volcanion,
    dex: 721,
    type: TypeName.Fire,
    type2: TypeName.Water,
    category: [Category.Mythical, Category.NonEvolve],
    abilities: {
      first: Ability.WaterAbsorb
    },
    eggGroups: [EggGroup.NoEggs]
  })
];
