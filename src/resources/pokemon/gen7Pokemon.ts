import { Pokemon } from "../../classes/Pokemon";
import {
  Ability,
  Category,
  EggGroup,
  PokemonName,
  TypeName
} from "../../enums";

export const gen7Pokemon: Pokemon[] = [
  new Pokemon({
    name: PokemonName.Rowlet,
    dex: 722,
    type: TypeName.Grass,
    type2: TypeName.Flying,
    category: Category.Starter,
    abilities: {
      first: Ability.Overgrow,
      hidden: Ability.LongReach
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Dartrix,
    dex: 723,
    type: TypeName.Grass,
    type2: TypeName.Flying,
    category: Category.Starter,
    abilities: {
      first: Ability.Overgrow,
      hidden: Ability.LongReach
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Decidueye,
    dex: 724,
    type: TypeName.Grass,
    type2: TypeName.Ghost,
    category: Category.Starter,
    abilities: {
      first: Ability.Overgrow,
      hidden: Ability.LongReach
    },
    eggGroups: [EggGroup.Flying],
    forms: [
      {
        formName: PokemonName.HisuianDecidueye,
        type: TypeName.Grass,
        type2: TypeName.Fighting,
        abilities: {
          first: Ability.Overgrow,
          hidden: Ability.Scrappy
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Litten,
    dex: 725,
    type: TypeName.Fire,
    category: Category.Starter,
    abilities: {
      first: Ability.Blaze,
      hidden: Ability.Intimidate
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Torracat,
    dex: 726,
    type: TypeName.Fire,
    category: Category.Starter,
    abilities: {
      first: Ability.Blaze,
      hidden: Ability.Intimidate
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Incineroar,
    dex: 727,
    type: TypeName.Fire,
    type2: TypeName.Dark,
    category: Category.Starter,
    abilities: {
      first: Ability.Blaze,
      hidden: Ability.Intimidate
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Popplio,
    dex: 728,
    type: TypeName.Water,
    category: Category.Starter,
    abilities: {
      first: Ability.Torrent,
      hidden: Ability.LiquidVoice
    },
    eggGroups: [EggGroup.Water1, EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Brionne,
    dex: 729,
    type: TypeName.Water,
    category: Category.Starter,
    abilities: {
      first: Ability.Torrent,
      hidden: Ability.LiquidVoice
    },
    eggGroups: [EggGroup.Water1, EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Primarina,
    dex: 730,
    type: TypeName.Water,
    type2: TypeName.Fairy,
    category: Category.Starter,
    abilities: {
      first: Ability.Torrent,
      hidden: Ability.LiquidVoice
    },
    eggGroups: [EggGroup.Water1, EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Pikipek,
    dex: 731,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.KeenEye,
      second: Ability.SkillLink,
      hidden: Ability.Pickup
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Trumbeak,
    dex: 732,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.KeenEye,
      second: Ability.SkillLink,
      hidden: Ability.Pickup
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Toucannon,
    dex: 733,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.KeenEye,
      second: Ability.SkillLink,
      hidden: Ability.SheerForce
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Yungoos,
    dex: 734,
    type: TypeName.Normal,
    abilities: {
      first: Ability.Stakeout,
      second: Ability.StrongJaw,
      hidden: Ability.Adaptability
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Gumshoos,
    dex: 735,
    type: TypeName.Normal,
    abilities: {
      first: Ability.Stakeout,
      second: Ability.StrongJaw,
      hidden: Ability.Adaptability
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Grubbin,
    dex: 736,
    type: TypeName.Bug,
    abilities: {
      first: Ability.Swarm
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Charjabug,
    dex: 737,
    type: TypeName.Bug,
    type2: TypeName.Electric,
    abilities: {
      first: Ability.Battery
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Vikavolt,
    dex: 738,
    type: TypeName.Bug,
    type2: TypeName.Electric,
    abilities: {
      first: Ability.Levitate
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Crabrawler,
    dex: 739,
    type: TypeName.Fighting,
    abilities: {
      first: Ability.HyperCutter,
      second: Ability.IronFist,
      hidden: Ability.AngerPoint
    },
    eggGroups: [EggGroup.Water3]
  }),
  new Pokemon({
    name: PokemonName.Crabominable,
    dex: 740,
    type: TypeName.Fighting,
    type2: TypeName.Ice,
    abilities: {
      first: Ability.HyperCutter,
      second: Ability.IronFist,
      hidden: Ability.AngerPoint
    },
    eggGroups: [EggGroup.Water3]
  }),
  new Pokemon({
    name: PokemonName.Oricorio,
    dex: 741,
    type: TypeName.Fire,
    type2: TypeName.Flying,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.Dancer
    },
    eggGroups: [EggGroup.Flying],
    defaultForm: PokemonName.OricorioBaile,
    forms: [
      {
        formName: PokemonName.OricorioPomPom,
        type: TypeName.Electric,
        type2: TypeName.Flying,
        category: Category.NonEvolve
      },
      {
        formName: PokemonName.OricorioPau,
        type: TypeName.Psychic,
        type2: TypeName.Flying,
        category: Category.NonEvolve
      },
      {
        formName: PokemonName.OricorioSensu,
        type: TypeName.Ghost,
        type2: TypeName.Flying,
        category: Category.NonEvolve
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Cutiefly,
    dex: 742,
    type: TypeName.Bug,
    type2: TypeName.Fairy,
    abilities: {
      first: Ability.HoneyGather,
      second: Ability.ShieldDust,
      hidden: Ability.SweetVeil
    },
    eggGroups: [EggGroup.Bug, EggGroup.Fairy]
  }),
  new Pokemon({
    name: PokemonName.Ribombee,
    dex: 743,
    type: TypeName.Bug,
    type2: TypeName.Fairy,
    abilities: {
      first: Ability.HoneyGather,
      second: Ability.ShieldDust,
      hidden: Ability.SweetVeil
    },
    eggGroups: [EggGroup.Bug, EggGroup.Fairy]
  }),
  new Pokemon({
    name: PokemonName.Rockruff,
    dex: 744,
    type: TypeName.Rock,
    abilities: {
      first: Ability.KeenEye,
      second: Ability.VitalSpirit,
      hidden: Ability.Steadfast
    },
    eggGroups: [EggGroup.Field],
    forms: [
      {
        formName: PokemonName.RockruffOwnTempo,
        abilities: {
          first: Ability.OwnTempo
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Lycanroc,
    dex: 745,
    type: TypeName.Rock,
    abilities: {
      first: Ability.KeenEye,
      second: Ability.SandRush,
      hidden: Ability.Steadfast
    },
    eggGroups: [EggGroup.Field],
    defaultForm: PokemonName.LycanrocMidday,
    forms: [
      {
        formName: PokemonName.LycanrocMidnight,
        abilities: {
          first: Ability.KeenEye,
          second: Ability.VitalSpirit,
          hidden: Ability.NoGuard
        }
      },
      {
        formName: PokemonName.LycanrocDusk,
        abilities: {
          first: Ability.ToughClaws
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Wishiwashi,
    dex: 746,
    type: TypeName.Water,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.Schooling
    },
    eggGroups: [EggGroup.Water2]
  }),
  new Pokemon({
    name: PokemonName.Mareanie,
    dex: 747,
    type: TypeName.Poison,
    type2: TypeName.Water,
    abilities: {
      first: Ability.Merciless,
      second: Ability.Limber,
      hidden: Ability.Regenerator
    },
    eggGroups: [EggGroup.Water1]
  }),
  new Pokemon({
    name: PokemonName.Toxapex,
    dex: 748,
    type: TypeName.Poison,
    type2: TypeName.Water,
    abilities: {
      first: Ability.Merciless,
      second: Ability.Limber,
      hidden: Ability.Regenerator
    },
    eggGroups: [EggGroup.Water1]
  }),
  new Pokemon({
    name: PokemonName.Mudbray,
    dex: 749,
    type: TypeName.Ground,
    abilities: {
      first: Ability.OwnTempo,
      second: Ability.Stamina,
      hidden: Ability.InnerFocus
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Mudsdale,
    dex: 750,
    type: TypeName.Ground,
    abilities: {
      first: Ability.OwnTempo,
      second: Ability.Stamina,
      hidden: Ability.InnerFocus
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Dewpider,
    dex: 751,
    type: TypeName.Water,
    type2: TypeName.Bug,
    abilities: {
      first: Ability.WaterBubble,
      hidden: Ability.WaterAbsorb
    },
    eggGroups: [EggGroup.Water1, EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Araquanid,
    dex: 752,
    type: TypeName.Water,
    type2: TypeName.Bug,
    abilities: {
      first: Ability.WaterBubble,
      hidden: Ability.WaterAbsorb
    },
    eggGroups: [EggGroup.Water1, EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Fomantis,
    dex: 753,
    type: TypeName.Grass,
    abilities: {
      first: Ability.LeafGuard,
      hidden: Ability.Contrary
    },
    eggGroups: [EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Lurantis,
    dex: 754,
    type: TypeName.Grass,
    abilities: {
      first: Ability.LeafGuard,
      hidden: Ability.Contrary
    },
    eggGroups: [EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Morelull,
    dex: 755,
    type: TypeName.Grass,
    type2: TypeName.Fairy,
    abilities: {
      first: Ability.Illuminate,
      second: Ability.EffectSpore,
      hidden: Ability.RainDish
    },
    eggGroups: [EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Shiinotic,
    dex: 756,
    type: TypeName.Grass,
    type2: TypeName.Fairy,
    abilities: {
      first: Ability.Illuminate,
      second: Ability.EffectSpore,
      hidden: Ability.RainDish
    },
    eggGroups: [EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Salandit,
    dex: 757,
    type: TypeName.Poison,
    type2: TypeName.Fire,
    abilities: {
      first: Ability.Corrosion,
      hidden: Ability.Oblivious
    },
    eggGroups: [EggGroup.Monster, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Salazzle,
    dex: 758,
    type: TypeName.Poison,
    type2: TypeName.Fire,
    abilities: {
      first: Ability.Corrosion,
      hidden: Ability.Oblivious
    },
    eggGroups: [EggGroup.Monster, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Stufful,
    dex: 759,
    type: TypeName.Normal,
    type2: TypeName.Fighting,
    abilities: {
      first: Ability.Fluffy,
      second: Ability.Klutz,
      hidden: Ability.CuteCharm
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Bewear,
    dex: 760,
    type: TypeName.Normal,
    type2: TypeName.Fighting,
    abilities: {
      first: Ability.Fluffy,
      second: Ability.Klutz,
      hidden: Ability.Unnerve
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Bounsweet,
    dex: 761,
    type: TypeName.Grass,
    abilities: {
      first: Ability.LeafGuard,
      second: Ability.Oblivious,
      hidden: Ability.SweetVeil
    },
    eggGroups: [EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Steenee,
    dex: 762,
    type: TypeName.Grass,
    abilities: {
      first: Ability.LeafGuard,
      second: Ability.Oblivious,
      hidden: Ability.SweetVeil
    },
    eggGroups: [EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Tsareena,
    dex: 763,
    type: TypeName.Grass,
    abilities: {
      first: Ability.LeafGuard,
      second: Ability.QueenlyMajesty,
      hidden: Ability.SweetVeil
    },
    eggGroups: [EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Comfey,
    dex: 764,
    type: TypeName.Fairy,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.FlowerVeil,
      second: Ability.Triage,
      hidden: Ability.NaturalCure
    },
    eggGroups: [EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Oranguru,
    dex: 765,
    type: TypeName.Normal,
    type2: TypeName.Psychic,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.InnerFocus,
      second: Ability.Telepathy,
      hidden: Ability.Symbiosis
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Passimian,
    dex: 766,
    type: TypeName.Fighting,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.Receiver,
      hidden: Ability.Defiant
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Wimpod,
    dex: 767,
    type: TypeName.Bug,
    type2: TypeName.Water,
    abilities: {
      first: Ability.WimpOut
    },
    eggGroups: [EggGroup.Bug, EggGroup.Water3]
  }),
  new Pokemon({
    name: PokemonName.Golisopod,
    dex: 768,
    type: TypeName.Bug,
    type2: TypeName.Water,
    abilities: {
      first: Ability.EmergencyExit
    },
    eggGroups: [EggGroup.Bug, EggGroup.Water3]
  }),
  new Pokemon({
    name: PokemonName.Sandygast,
    dex: 769,
    type: TypeName.Ghost,
    type2: TypeName.Ground,
    abilities: {
      first: Ability.WaterCompaction,
      hidden: Ability.SandVeil
    },
    eggGroups: [EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Palossand,
    dex: 770,
    type: TypeName.Ghost,
    type2: TypeName.Ground,
    abilities: {
      first: Ability.WaterCompaction,
      hidden: Ability.SandVeil
    },
    eggGroups: [EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Pyukumuku,
    dex: 771,
    type: TypeName.Water,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.InnardsOut,
      hidden: Ability.Unaware
    },
    eggGroups: [EggGroup.Water1]
  }),
  new Pokemon({
    name: PokemonName.TypeNull,
    dex: 772,
    type: TypeName.Normal,
    abilities: {
      first: Ability.BattleArmor
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Silvally,
    dex: 773,
    type: TypeName.Normal,
    abilities: {
      first: Ability.RKSSystem
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Minior,
    dex: 774,
    type: TypeName.Rock,
    type2: TypeName.Flying,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.ShieldsDown
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Komala,
    dex: 775,
    type: TypeName.Normal,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.Comatose
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Turtonator,
    dex: 776,
    type: TypeName.Fire,
    type2: TypeName.Dragon,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.ShellArmor
    },
    eggGroups: [EggGroup.Monster, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Togedemaru,
    dex: 777,
    type: TypeName.Electric,
    type2: TypeName.Steel,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.IronBarbs,
      second: Ability.LightningRod,
      hidden: Ability.Sturdy
    },
    eggGroups: [EggGroup.Field, EggGroup.Fairy]
  }),
  new Pokemon({
    name: PokemonName.Mimikyu,
    dex: 778,
    type: TypeName.Ghost,
    type2: TypeName.Fairy,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.Disguise
    },
    eggGroups: [EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Bruxish,
    dex: 779,
    type: TypeName.Water,
    type2: TypeName.Psychic,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.Dazzling,
      second: Ability.StrongJaw,
      hidden: Ability.WonderSkin
    },
    eggGroups: [EggGroup.Water2]
  }),
  new Pokemon({
    name: PokemonName.Drampa,
    dex: 780,
    type: TypeName.Normal,
    type2: TypeName.Dragon,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.Berserk,
      second: Ability.SapSipper,
      hidden: Ability.CloudNine
    },
    eggGroups: [EggGroup.Monster, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Dhelmise,
    dex: 781,
    type: TypeName.Ghost,
    type2: TypeName.Grass,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.Steelworker
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.JangmoO,
    dex: 782,
    type: TypeName.Dragon,
    abilities: {
      first: Ability.Bulletproof,
      second: Ability.Soundproof,
      hidden: Ability.Overcoat
    },
    eggGroups: [EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.HakamoO,
    dex: 783,
    type: TypeName.Dragon,
    type2: TypeName.Fighting,
    abilities: {
      first: Ability.Bulletproof,
      second: Ability.Soundproof,
      hidden: Ability.Overcoat
    },
    eggGroups: [EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.KommoO,
    dex: 784,
    type: TypeName.Dragon,
    type2: TypeName.Fighting,
    abilities: {
      first: Ability.Bulletproof,
      second: Ability.Soundproof,
      hidden: Ability.Overcoat
    },
    eggGroups: [EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.TapuKoko,
    dex: 785,
    type: TypeName.Electric,
    type2: TypeName.Fairy,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.ElectricSurge,
      hidden: Ability.Telepathy
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.TapuLele,
    dex: 786,
    type: TypeName.Psychic,
    type2: TypeName.Fairy,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.PsychicSurge,
      hidden: Ability.Telepathy
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.TapuBulu,
    dex: 787,
    type: TypeName.Grass,
    type2: TypeName.Fairy,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.GrassySurge,
      hidden: Ability.Telepathy
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.TapuFini,
    dex: 788,
    type: TypeName.Water,
    type2: TypeName.Fairy,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.MistySurge,
      hidden: Ability.Telepathy
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Cosmog,
    dex: 789,
    type: TypeName.Psychic,
    category: Category.Legendary,
    abilities: {
      first: Ability.Unaware
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Cosmoem,
    dex: 790,
    type: TypeName.Psychic,
    category: Category.Legendary,
    abilities: {
      first: Ability.Sturdy
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Solgaleo,
    dex: 791,
    type: TypeName.Psychic,
    type2: TypeName.Steel,
    category: Category.Legendary,
    abilities: {
      first: Ability.FullMetalBody
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Lunala,
    dex: 792,
    type: TypeName.Psychic,
    type2: TypeName.Ghost,
    category: Category.Legendary,
    abilities: {
      first: Ability.ShadowShield
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Nihilego,
    dex: 793,
    type: TypeName.Rock,
    type2: TypeName.Poison,
    category: [Category.UltraBeast, Category.NonEvolve],
    abilities: {
      first: Ability.BeastBoost
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Buzzwole,
    dex: 794,
    type: TypeName.Bug,
    type2: TypeName.Fighting,
    category: [Category.UltraBeast, Category.NonEvolve],
    abilities: {
      first: Ability.BeastBoost
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Pheromosa,
    dex: 795,
    type: TypeName.Bug,
    type2: TypeName.Fighting,
    category: [Category.UltraBeast, Category.NonEvolve],
    abilities: {
      first: Ability.BeastBoost
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Xurkitree,
    dex: 796,
    type: TypeName.Electric,
    category: [Category.UltraBeast, Category.NonEvolve],
    abilities: {
      first: Ability.BeastBoost
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Celesteela,
    dex: 797,
    type: TypeName.Steel,
    type2: TypeName.Flying,
    category: [Category.UltraBeast, Category.NonEvolve],
    abilities: {
      first: Ability.BeastBoost
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Kartana,
    dex: 798,
    type: TypeName.Grass,
    type2: TypeName.Steel,
    category: [Category.UltraBeast, Category.NonEvolve],
    abilities: {
      first: Ability.BeastBoost
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Guzzlord,
    dex: 799,
    type: TypeName.Dark,
    type2: TypeName.Dragon,
    category: [Category.UltraBeast, Category.NonEvolve],
    abilities: {
      first: Ability.BeastBoost
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Necrozma,
    dex: 800,
    type: TypeName.Psychic,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.PrismArmor
    },
    eggGroups: [EggGroup.NoEggs],
    forms: [
      {
        formName: PokemonName.NecrozmaDuskMane,
        type: TypeName.Psychic,
        type2: TypeName.Steel
      },
      {
        formName: PokemonName.NecrozmaDawnWings,
        type: TypeName.Psychic,
        type2: TypeName.Ghost
      },
      {
        formName: PokemonName.NecrozmaUltra,
        type: TypeName.Psychic,
        type2: TypeName.Dragon,
        abilities: {
          first: Ability.Neuroforce
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Magearna,
    dex: 801,
    type: TypeName.Steel,
    type2: TypeName.Fairy,
    category: [Category.Mythical, Category.NonEvolve],
    abilities: {
      first: Ability.SoulHeart
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Marshadow,
    dex: 802,
    type: TypeName.Fighting,
    type2: TypeName.Ghost,
    category: [Category.Mythical, Category.NonEvolve],
    abilities: {
      first: Ability.Technician
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Poipole,
    dex: 803,
    type: TypeName.Poison,
    category: Category.UltraBeast,
    abilities: {
      first: Ability.BeastBoost
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Naganadel,
    dex: 804,
    type: TypeName.Poison,
    type2: TypeName.Dragon,
    category: Category.UltraBeast,
    abilities: {
      first: Ability.BeastBoost
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Stakataka,
    dex: 805,
    type: TypeName.Rock,
    type2: TypeName.Steel,
    category: [Category.UltraBeast, Category.NonEvolve],
    abilities: {
      first: Ability.BeastBoost
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Blacephalon,
    dex: 806,
    type: TypeName.Fire,
    type2: TypeName.Ghost,
    category: [Category.UltraBeast, Category.NonEvolve],
    abilities: {
      first: Ability.BeastBoost
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Zeraora,
    dex: 807,
    type: TypeName.Electric,
    category: [Category.Mythical, Category.NonEvolve],
    abilities: {
      first: Ability.VoltAbsorb
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Meltan,
    dex: 808,
    type: TypeName.Steel,
    category: Category.Mythical,
    abilities: {
      first: Ability.MagnetPull
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Melmetal,
    dex: 809,
    type: TypeName.Steel,
    category: Category.Mythical,
    abilities: {
      first: Ability.IronFist
    },
    eggGroups: [EggGroup.NoEggs]
  })
];
