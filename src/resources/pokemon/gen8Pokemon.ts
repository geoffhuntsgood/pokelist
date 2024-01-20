import { Pokemon } from "../../classes/Pokemon";
import {
  Ability,
  Category,
  EggGroup,
  PokemonName,
  TypeName
} from "../../enums";

export const gen8Pokemon: Pokemon[] = [
  new Pokemon({
    name: PokemonName.Grookey,
    dex: 810,
    type: TypeName.Grass,
    category: Category.Starter,
    abilities: {
      first: Ability.Overgrow,
      hidden: Ability.GrassySurge
    },
    eggGroups: [EggGroup.Field, EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Thwackey,
    dex: 811,
    type: TypeName.Grass,
    category: Category.Starter,
    abilities: {
      first: Ability.Overgrow,
      hidden: Ability.GrassySurge
    },
    eggGroups: [EggGroup.Field, EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Rillaboom,
    dex: 812,
    type: TypeName.Grass,
    category: Category.Starter,
    abilities: {
      first: Ability.Overgrow,
      hidden: Ability.GrassySurge
    },
    eggGroups: [EggGroup.Field, EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Scorbunny,
    dex: 813,
    type: TypeName.Fire,
    category: Category.Starter,
    abilities: {
      first: Ability.Blaze,
      hidden: Ability.Libero
    },
    eggGroups: [EggGroup.Field, EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Raboot,
    dex: 814,
    type: TypeName.Fire,
    category: Category.Starter,
    abilities: {
      first: Ability.Blaze,
      hidden: Ability.Libero
    },
    eggGroups: [EggGroup.Field, EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Cinderace,
    dex: 815,
    type: TypeName.Fire,
    category: Category.Starter,
    abilities: {
      first: Ability.Blaze,
      hidden: Ability.Libero
    },
    eggGroups: [EggGroup.Field, EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Sobble,
    dex: 816,
    type: TypeName.Water,
    category: Category.Starter,
    abilities: {
      first: Ability.Torrent,
      hidden: Ability.Sniper
    },
    eggGroups: [EggGroup.Water1, EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Drizzile,
    dex: 817,
    type: TypeName.Water,
    category: Category.Starter,
    abilities: {
      first: Ability.Torrent,
      hidden: Ability.Sniper
    },
    eggGroups: [EggGroup.Water1, EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Inteleon,
    dex: 818,
    type: TypeName.Water,
    category: Category.Starter,
    abilities: {
      first: Ability.Torrent,
      hidden: Ability.Sniper
    },
    eggGroups: [EggGroup.Water1, EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Skwovet,
    dex: 819,
    type: TypeName.Normal,
    abilities: {
      first: Ability.CheekPouch,
      hidden: Ability.Gluttony
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Greedent,
    dex: 820,
    type: TypeName.Normal,
    abilities: {
      first: Ability.CheekPouch,
      hidden: Ability.Gluttony
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Rookidee,
    dex: 821,
    type: TypeName.Flying,
    abilities: {
      first: Ability.KeenEye,
      second: Ability.Unnerve,
      hidden: Ability.BigPecks
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Corvisquire,
    dex: 822,
    type: TypeName.Flying,
    abilities: {
      first: Ability.KeenEye,
      second: Ability.Unnerve,
      hidden: Ability.BigPecks
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Corviknight,
    dex: 823,
    type: TypeName.Flying,
    type2: TypeName.Steel,
    abilities: {
      first: Ability.Pressure,
      second: Ability.Unnerve,
      hidden: Ability.MirrorArmor
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Blipbug,
    dex: 824,
    type: TypeName.Bug,
    abilities: {
      first: Ability.Swarm,
      second: Ability.CompoundEyes,
      hidden: Ability.Telepathy
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Dottler,
    dex: 825,
    type: TypeName.Bug,
    type2: TypeName.Psychic,
    abilities: {
      first: Ability.Swarm,
      second: Ability.CompoundEyes,
      hidden: Ability.Telepathy
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Orbeetle,
    dex: 826,
    type: TypeName.Bug,
    type2: TypeName.Psychic,
    abilities: {
      first: Ability.Swarm,
      second: Ability.Frisk,
      hidden: Ability.Telepathy
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Nickit,
    dex: 827,
    type: TypeName.Dark,
    abilities: {
      first: Ability.RunAway,
      second: Ability.Unburden,
      hidden: Ability.Stakeout
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Thievul,
    dex: 828,
    type: TypeName.Dark,
    abilities: {
      first: Ability.RunAway,
      second: Ability.Unburden,
      hidden: Ability.Stakeout
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Gossifleur,
    dex: 829,
    type: TypeName.Grass,
    abilities: {
      first: Ability.CottonDown,
      second: Ability.Regenerator,
      hidden: Ability.EffectSpore
    },
    eggGroups: [EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Eldegoss,
    dex: 830,
    type: TypeName.Grass,
    abilities: {
      first: Ability.CottonDown,
      second: Ability.Regenerator,
      hidden: Ability.EffectSpore
    },
    eggGroups: [EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Wooloo,
    dex: 831,
    type: TypeName.Normal,
    abilities: {
      first: Ability.Fluffy,
      second: Ability.RunAway,
      hidden: Ability.Bulletproof
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Dubwool,
    dex: 832,
    type: TypeName.Normal,
    abilities: {
      first: Ability.Fluffy,
      second: Ability.Steadfast,
      hidden: Ability.Bulletproof
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Chewtle,
    dex: 833,
    type: TypeName.Water,
    abilities: {
      first: Ability.StrongJaw,
      second: Ability.ShellArmor,
      hidden: Ability.SwiftSwim
    },
    eggGroups: [EggGroup.Monster, EggGroup.Water1]
  }),
  new Pokemon({
    name: PokemonName.Drednaw,
    dex: 834,
    type: TypeName.Water,
    type2: TypeName.Rock,
    abilities: {
      first: Ability.StrongJaw,
      second: Ability.ShellArmor,
      hidden: Ability.SwiftSwim
    },
    eggGroups: [EggGroup.Monster, EggGroup.Water1]
  }),
  new Pokemon({
    name: PokemonName.Yamper,
    dex: 835,
    type: TypeName.Electric,
    abilities: {
      first: Ability.BallFetch,
      hidden: Ability.Rattled
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Boltund,
    dex: 836,
    type: TypeName.Electric,
    abilities: {
      first: Ability.StrongJaw,
      hidden: Ability.Competitive
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Rolycoly,
    dex: 837,
    type: TypeName.Rock,
    abilities: {
      first: Ability.SteamEngine,
      second: Ability.Heatproof,
      hidden: Ability.FlashFire
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Carkol,
    dex: 838,
    type: TypeName.Rock,
    type2: TypeName.Fire,
    abilities: {
      first: Ability.SteamEngine,
      second: Ability.FlameBody,
      hidden: Ability.FlashFire
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Coalossal,
    dex: 839,
    type: TypeName.Rock,
    type2: TypeName.Fire,
    abilities: {
      first: Ability.SteamEngine,
      second: Ability.FlameBody,
      hidden: Ability.FlashFire
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Applin,
    dex: 840,
    type: TypeName.Grass,
    type2: TypeName.Dragon,
    abilities: {
      first: Ability.Ripen,
      second: Ability.Gluttony,
      hidden: Ability.Bulletproof
    },
    eggGroups: [EggGroup.Grass, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Flapple,
    dex: 841,
    type: TypeName.Grass,
    type2: TypeName.Dragon,
    abilities: {
      first: Ability.Ripen,
      second: Ability.Gluttony,
      hidden: Ability.Hustle
    },
    eggGroups: [EggGroup.Grass, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Appletun,
    dex: 842,
    type: TypeName.Grass,
    type2: TypeName.Dragon,
    abilities: {
      first: Ability.Ripen,
      second: Ability.Gluttony,
      hidden: Ability.ThickFat
    },
    eggGroups: [EggGroup.Grass, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Silicobra,
    dex: 843,
    type: TypeName.Ground,
    abilities: {
      first: Ability.SandSpit,
      second: Ability.ShedSkin,
      hidden: Ability.SandVeil
    },
    eggGroups: [EggGroup.Field, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Sandaconda,
    dex: 844,
    type: TypeName.Ground,
    abilities: {
      first: Ability.SandSpit,
      second: Ability.ShedSkin,
      hidden: Ability.SandVeil
    },
    eggGroups: [EggGroup.Field, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Cramorant,
    dex: 845,
    type: TypeName.Flying,
    type2: TypeName.Water,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.GulpMissile
    },
    eggGroups: [EggGroup.Water1, EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Arrokuda,
    dex: 846,
    type: TypeName.Water,
    abilities: {
      first: Ability.SwiftSwim,
      hidden: Ability.PropellerTail
    },
    eggGroups: [EggGroup.Water2]
  }),
  new Pokemon({
    name: PokemonName.Barraskewda,
    dex: 847,
    type: TypeName.Water,
    abilities: {
      first: Ability.SwiftSwim,
      hidden: Ability.PropellerTail
    },
    eggGroups: [EggGroup.Water2]
  }),
  new Pokemon({
    name: PokemonName.Toxel,
    dex: 848,
    type: TypeName.Electric,
    type2: TypeName.Poison,
    category: Category.Baby,
    abilities: {
      first: Ability.Rattled,
      second: Ability.Static,
      hidden: Ability.Klutz
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Toxtricity,
    dex: 849,
    type: TypeName.Electric,
    type2: TypeName.Poison,
    abilities: {
      first: Ability.PunkRock,
      second: Ability.Plus,
      hidden: Ability.Technician
    },
    eggGroups: [EggGroup.HumanLike],
    defaultForm: PokemonName.ToxtricityAmped,
    forms: [
      {
        formName: PokemonName.ToxtricityLowKey,
        abilities: {
          first: Ability.PunkRock,
          second: Ability.Minus,
          hidden: Ability.Technician
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Sizzlipede,
    dex: 850,
    type: TypeName.Fire,
    type2: TypeName.Bug,
    abilities: {
      first: Ability.FlashFire,
      second: Ability.WhiteSmoke,
      hidden: Ability.FlameBody
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Centiskorch,
    dex: 851,
    type: TypeName.Fire,
    type2: TypeName.Bug,
    abilities: {
      first: Ability.FlashFire,
      second: Ability.WhiteSmoke,
      hidden: Ability.FlameBody
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Clobbopus,
    dex: 852,
    type: TypeName.Fighting,
    abilities: {
      first: Ability.Limber,
      hidden: Ability.Technician
    },
    eggGroups: [EggGroup.Water1, EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Grapploct,
    dex: 853,
    type: TypeName.Fighting,
    abilities: {
      first: Ability.Limber,
      hidden: Ability.Technician
    },
    eggGroups: [EggGroup.Water1, EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Sinistea,
    dex: 854,
    type: TypeName.Ghost,
    abilities: {
      first: Ability.WeakArmor,
      hidden: Ability.CursedBody
    },
    eggGroups: [EggGroup.Mineral, EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Polteageist,
    dex: 855,
    type: TypeName.Ghost,
    abilities: {
      first: Ability.WeakArmor,
      hidden: Ability.CursedBody
    },
    eggGroups: [EggGroup.Mineral, EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Hatenna,
    dex: 856,
    type: TypeName.Psychic,
    abilities: {
      first: Ability.Healer,
      second: Ability.Anticipation,
      hidden: Ability.MagicBounce
    },
    eggGroups: [EggGroup.Fairy]
  }),
  new Pokemon({
    name: PokemonName.Hattrem,
    dex: 857,
    type: TypeName.Psychic,
    abilities: {
      first: Ability.Healer,
      second: Ability.Anticipation,
      hidden: Ability.MagicBounce
    },
    eggGroups: [EggGroup.Fairy]
  }),
  new Pokemon({
    name: PokemonName.Hatterene,
    dex: 858,
    type: TypeName.Psychic,
    type2: TypeName.Fairy,
    abilities: {
      first: Ability.Healer,
      second: Ability.Anticipation,
      hidden: Ability.MagicBounce
    },
    eggGroups: [EggGroup.Fairy]
  }),
  new Pokemon({
    name: PokemonName.Impidimp,
    dex: 859,
    type: TypeName.Dark,
    type2: TypeName.Fairy,
    abilities: {
      first: Ability.Prankster,
      second: Ability.Frisk,
      hidden: Ability.Pickpocket
    },
    eggGroups: [EggGroup.Fairy, EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Morgrem,
    dex: 860,
    type: TypeName.Dark,
    type2: TypeName.Fairy,
    abilities: {
      first: Ability.Prankster,
      second: Ability.Frisk,
      hidden: Ability.Pickpocket
    },
    eggGroups: [EggGroup.Fairy, EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Grimmsnarl,
    dex: 861,
    type: TypeName.Dark,
    type2: TypeName.Fairy,
    abilities: {
      first: Ability.Prankster,
      second: Ability.Frisk,
      hidden: Ability.Pickpocket
    },
    eggGroups: [EggGroup.Fairy, EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Obstagoon,
    dex: 862,
    type: TypeName.Dark,
    type2: TypeName.Normal,
    abilities: {
      first: Ability.Reckless,
      second: Ability.Guts,
      hidden: Ability.Defiant
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Perrserker,
    dex: 863,
    type: TypeName.Steel,
    abilities: {
      first: Ability.BattleArmor,
      second: Ability.ToughClaws,
      hidden: Ability.SteelySpirit
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Cursola,
    dex: 864,
    type: TypeName.Ghost,
    abilities: {
      first: Ability.WeakArmor,
      hidden: Ability.PerishBody
    },
    eggGroups: [EggGroup.Water1, EggGroup.Water3]
  }),
  new Pokemon({
    name: PokemonName.Sirfetchd,
    dex: 865,
    type: TypeName.Fighting,
    abilities: {
      first: Ability.Steadfast,
      hidden: Ability.Scrappy
    },
    eggGroups: [EggGroup.Flying, EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.MrRime,
    dex: 866,
    type: TypeName.Ice,
    type2: TypeName.Psychic,
    abilities: {
      first: Ability.TangledFeet,
      second: Ability.ScreenCleaner,
      hidden: Ability.IceBody
    },
    eggGroups: [EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Runerigus,
    dex: 867,
    type: TypeName.Ground,
    type2: TypeName.Ghost,
    abilities: {
      first: Ability.WanderingSpirit
    },
    eggGroups: [EggGroup.Mineral, EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Milcery,
    dex: 868,
    type: TypeName.Fairy,
    abilities: {
      first: Ability.SweetVeil,
      hidden: Ability.AromaVeil
    },
    eggGroups: [EggGroup.Fairy, EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Alcremie,
    dex: 869,
    type: TypeName.Fairy,
    abilities: {
      first: Ability.SweetVeil,
      hidden: Ability.AromaVeil
    },
    eggGroups: [EggGroup.Fairy, EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Falinks,
    dex: 870,
    type: TypeName.Fighting,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.BattleArmor,
      hidden: Ability.Defiant
    },
    eggGroups: [EggGroup.Fairy, EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Pincurchin,
    dex: 871,
    type: TypeName.Electric,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.LightningRod,
      hidden: Ability.ElectricSurge
    },
    eggGroups: [EggGroup.Water1, EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Snom,
    dex: 872,
    type: TypeName.Ice,
    type2: TypeName.Bug,
    abilities: {
      first: Ability.ShieldDust,
      hidden: Ability.IceScales
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Frosmoth,
    dex: 873,
    type: TypeName.Ice,
    type2: TypeName.Bug,
    abilities: {
      first: Ability.ShieldDust,
      hidden: Ability.IceScales
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Stonjourner,
    dex: 874,
    type: TypeName.Rock,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.PowerSpot
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Eiscue,
    dex: 875,
    type: TypeName.Ice,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.IceFace
    },
    eggGroups: [EggGroup.Water1, EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Indeedee,
    dex: 876,
    type: TypeName.Psychic,
    type2: TypeName.Normal,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.InnerFocus,
      second: Ability.Synchronize,
      hidden: Ability.PsychicSurge
    },
    eggGroups: [EggGroup.Fairy],
    defaultForm: PokemonName.IndeedeeMale,
    forms: [
      {
        formName: PokemonName.IndeedeeFemale,
        abilities: {
          first: Ability.OwnTempo,
          second: Ability.Synchronize,
          hidden: Ability.PsychicSurge
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Morpeko,
    dex: 877,
    type: TypeName.Electric,
    type2: TypeName.Dark,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.HungerSwitch
    },
    eggGroups: [EggGroup.Field, EggGroup.Fairy]
  }),
  new Pokemon({
    name: PokemonName.Cufant,
    dex: 878,
    type: TypeName.Steel,
    abilities: {
      first: Ability.SheerForce,
      hidden: Ability.HeavyMetal
    },
    eggGroups: [EggGroup.Field, EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Copperajah,
    dex: 879,
    type: TypeName.Steel,
    abilities: {
      first: Ability.SheerForce,
      hidden: Ability.HeavyMetal
    },
    eggGroups: [EggGroup.Field, EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Dracozolt,
    dex: 880,
    type: TypeName.Electric,
    type2: TypeName.Dragon,
    category: [Category.Fossil, Category.NonEvolve],
    abilities: {
      first: Ability.VoltAbsorb,
      second: Ability.Hustle,
      hidden: Ability.SandRush
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Arctozolt,
    dex: 881,
    type: TypeName.Electric,
    type2: TypeName.Ice,
    category: [Category.Fossil, Category.NonEvolve],
    abilities: {
      first: Ability.VoltAbsorb,
      second: Ability.Static,
      hidden: Ability.SlushRush
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Dracovish,
    dex: 882,
    type: TypeName.Water,
    type2: TypeName.Dragon,
    category: [Category.Fossil, Category.NonEvolve],
    abilities: {
      first: Ability.WaterAbsorb,
      second: Ability.StrongJaw,
      hidden: Ability.SandRush
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Arctovish,
    dex: 883,
    type: TypeName.Water,
    type2: TypeName.Ice,
    category: [Category.Fossil, Category.NonEvolve],
    abilities: {
      first: Ability.WaterAbsorb,
      second: Ability.IceBody,
      hidden: Ability.SlushRush
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Duraludon,
    dex: 884,
    type: TypeName.Steel,
    type2: TypeName.Dragon,
    abilities: {
      first: Ability.LightMetal,
      second: Ability.HeavyMetal,
      hidden: Ability.Stalwart
    },
    eggGroups: [EggGroup.Mineral, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Dreepy,
    dex: 885,
    type: TypeName.Dragon,
    type2: TypeName.Ghost,
    abilities: {
      first: Ability.ClearBody,
      second: Ability.Infiltrator,
      hidden: Ability.CursedBody
    },
    eggGroups: [EggGroup.Amorphous, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Drakloak,
    dex: 886,
    type: TypeName.Dragon,
    type2: TypeName.Ghost,
    abilities: {
      first: Ability.ClearBody,
      second: Ability.Infiltrator,
      hidden: Ability.CursedBody
    },
    eggGroups: [EggGroup.Amorphous, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Dragapult,
    dex: 887,
    type: TypeName.Dragon,
    type2: TypeName.Ghost,
    abilities: {
      first: Ability.ClearBody,
      second: Ability.Infiltrator,
      hidden: Ability.CursedBody
    },
    eggGroups: [EggGroup.Amorphous, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Zacian,
    dex: 888,
    type: TypeName.Fairy,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.IntrepidSword
    },
    eggGroups: [EggGroup.NoEggs],
    defaultForm: PokemonName.ZacianHero,
    forms: [
      {
        formName: PokemonName.ZacianCrown,
        type: TypeName.Fairy,
        type2: TypeName.Steel
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Zamazenta,
    dex: 889,
    type: TypeName.Fighting,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.DauntlessShield
    },
    eggGroups: [EggGroup.NoEggs],
    defaultForm: PokemonName.ZamazentaHero,
    forms: [
      {
        formName: PokemonName.ZamazentaCrown,
        type: TypeName.Fighting,
        type2: TypeName.Steel
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Eternatus,
    dex: 890,
    type: TypeName.Poison,
    type2: TypeName.Dragon,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.Pressure
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Kubfu,
    dex: 891,
    type: TypeName.Fighting,
    category: Category.Legendary,
    abilities: {
      first: Ability.InnerFocus
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Urshifu,
    dex: 892,
    type: TypeName.Fighting,
    type2: TypeName.Dark,
    category: Category.Legendary,
    abilities: {
      first: Ability.UnseenFist
    },
    eggGroups: [EggGroup.NoEggs],
    defaultForm: PokemonName.UrshifuSingle,
    forms: [
      {
        formName: PokemonName.UrshifuRapid,
        type: TypeName.Fighting,
        type2: TypeName.Water
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Zarude,
    dex: 893,
    type: TypeName.Dark,
    type2: TypeName.Grass,
    category: [Category.Mythical, Category.NonEvolve],
    abilities: {
      first: Ability.LeafGuard
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Regieleki,
    dex: 894,
    type: TypeName.Electric,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.Transistor
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Regidrago,
    dex: 895,
    type: TypeName.Dragon,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.DragonsMaw
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Glastrier,
    dex: 896,
    type: TypeName.Ice,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.ChillingNeigh
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Spectrier,
    dex: 897,
    type: TypeName.Ghost,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.GrimNeigh
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Calyrex,
    dex: 898,
    type: TypeName.Psychic,
    type2: TypeName.Grass,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.Unnerve
    },
    eggGroups: [EggGroup.NoEggs],
    forms: [
      {
        formName: PokemonName.CalyrexIce,
        type: TypeName.Psychic,
        type2: TypeName.Ice,
        abilities: {
          first: Ability.AsOne
        }
      },
      {
        formName: PokemonName.CalyrexShadow,
        type: TypeName.Psychic,
        type2: TypeName.Ghost,
        abilities: {
          first: Ability.AsOne
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Wyrdeer,
    dex: 899,
    type: TypeName.Normal,
    type2: TypeName.Psychic,
    abilities: {
      first: Ability.Intimidate,
      second: Ability.Frisk,
      hidden: Ability.SapSipper
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Kleavor,
    dex: 900,
    type: TypeName.Bug,
    type2: TypeName.Rock,
    abilities: {
      first: Ability.Swarm,
      second: Ability.SheerForce,
      hidden: Ability.Sharpness
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Ursaluna,
    dex: 901,
    type: TypeName.Ground,
    type2: TypeName.Normal,
    abilities: {
      first: Ability.Guts,
      second: Ability.Bulletproof,
      hidden: Ability.Unnerve
    },
    eggGroups: [EggGroup.Field],
    forms: [
      {
        formName: PokemonName.UrsalunaBloodmoon,
        abilities: {
          first: Ability.MindsEye
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Basculegion,
    dex: 902,
    type: TypeName.Water,
    type2: TypeName.Ghost,
    abilities: {
      first: Ability.SwiftSwim,
      second: Ability.Adaptability,
      hidden: Ability.MoldBreaker
    },
    eggGroups: [EggGroup.Water2]
  }),
  new Pokemon({
    name: PokemonName.Sneasler,
    dex: 903,
    type: TypeName.Fighting,
    type2: TypeName.Poison,
    abilities: {
      first: Ability.Pressure,
      second: Ability.Unburden,
      hidden: Ability.PoisonTouch
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Overqwil,
    dex: 904,
    type: TypeName.Dark,
    type2: TypeName.Poison,
    abilities: {
      first: Ability.PoisonPoint,
      second: Ability.SwiftSwim,
      hidden: Ability.Intimidate
    },
    eggGroups: [EggGroup.Water2]
  }),
  new Pokemon({
    name: PokemonName.Enamorus,
    dex: 905,
    type: TypeName.Fairy,
    type2: TypeName.Flying,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.CuteCharm,
      hidden: Ability.Contrary
    },
    eggGroups: [EggGroup.NoEggs],
    defaultForm: PokemonName.EnamorusIncarnate,
    forms: [
      {
        formName: PokemonName.EnamorusTherian,
        abilities: {
          first: Ability.Overcoat
        }
      }
    ]
  })
];
