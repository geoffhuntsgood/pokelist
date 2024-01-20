import { Pokemon } from "../../classes/Pokemon";
import {
  Ability,
  Category,
  EggGroup,
  PokemonName,
  TypeName
} from "../../enums";

export const gen4Pokemon: Pokemon[] = [
  new Pokemon({
    name: PokemonName.Turtwig,
    dex: 387,
    type: TypeName.Grass,
    category: Category.Starter,
    abilities: {
      first: Ability.Overgrow,
      hidden: Ability.ShellArmor
    },
    eggGroups: [EggGroup.Monster, EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Grotle,
    dex: 388,
    type: TypeName.Grass,
    category: Category.Starter,
    abilities: {
      first: Ability.Overgrow,
      hidden: Ability.ShellArmor
    },
    eggGroups: [EggGroup.Monster, EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Torterra,
    dex: 389,
    type: TypeName.Grass,
    type2: TypeName.Ground,
    category: Category.Starter,
    abilities: {
      first: Ability.Overgrow,
      hidden: Ability.ShellArmor
    },
    eggGroups: [EggGroup.Monster, EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Chimchar,
    dex: 390,
    type: TypeName.Fire,
    category: Category.Starter,
    abilities: {
      first: Ability.Blaze,
      hidden: Ability.IronFist
    },
    eggGroups: [EggGroup.Field, EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Monferno,
    dex: 391,
    type: TypeName.Fire,
    type2: TypeName.Fighting,
    category: Category.Starter,
    abilities: {
      first: Ability.Blaze,
      hidden: Ability.IronFist
    },
    eggGroups: [EggGroup.Field, EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Infernape,
    dex: 392,
    type: TypeName.Fire,
    type2: TypeName.Fighting,
    category: Category.Starter,
    abilities: {
      first: Ability.Blaze,
      hidden: Ability.IronFist
    },
    eggGroups: [EggGroup.Field, EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Piplup,
    dex: 393,
    type: TypeName.Water,
    category: Category.Starter,
    abilities: {
      first: Ability.Torrent,
      hidden: Ability.Competitive
    },
    eggGroups: [EggGroup.Water1, EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Prinplup,
    dex: 394,
    type: TypeName.Water,
    category: Category.Starter,
    abilities: {
      first: Ability.Torrent,
      hidden: Ability.Competitive
    },
    eggGroups: [EggGroup.Water1, EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Empoleon,
    dex: 395,
    type: TypeName.Water,
    type2: TypeName.Steel,
    category: Category.Starter,
    abilities: {
      first: Ability.Torrent,
      hidden: Ability.Competitive
    },
    eggGroups: [EggGroup.Water1, EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Starly,
    dex: 396,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.KeenEye,
      hidden: Ability.Reckless
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Staravia,
    dex: 397,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.Intimidate,
      hidden: Ability.Reckless
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Staraptor,
    dex: 398,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.Intimidate,
      hidden: Ability.Reckless
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Bidoof,
    dex: 399,
    type: TypeName.Normal,
    abilities: {
      first: Ability.Simple,
      second: Ability.Unaware,
      hidden: Ability.Moody
    },
    eggGroups: [EggGroup.Water1, EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Bibarel,
    dex: 400,
    type: TypeName.Normal,
    type2: TypeName.Water,
    abilities: {
      first: Ability.Simple,
      second: Ability.Unaware,
      hidden: Ability.Moody
    },
    eggGroups: [EggGroup.Water1, EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Kricketot,
    dex: 401,
    type: TypeName.Bug,
    abilities: {
      first: Ability.ShedSkin,
      hidden: Ability.RunAway
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Kricketune,
    dex: 402,
    type: TypeName.Bug,
    abilities: {
      first: Ability.Swarm,
      hidden: Ability.Technician
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Shinx,
    dex: 403,
    type: TypeName.Electric,
    abilities: {
      first: Ability.Rivalry,
      second: Ability.Intimidate,
      hidden: Ability.Guts
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Luxio,
    dex: 404,
    type: TypeName.Electric,
    abilities: {
      first: Ability.Rivalry,
      second: Ability.Intimidate,
      hidden: Ability.Guts
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Luxray,
    dex: 405,
    type: TypeName.Electric,
    abilities: {
      first: Ability.Rivalry,
      second: Ability.Intimidate,
      hidden: Ability.Guts
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Budew,
    dex: 406,
    type: TypeName.Grass,
    type2: TypeName.Poison,
    category: Category.Baby,
    abilities: {
      first: Ability.NaturalCure,
      second: Ability.PoisonPoint,
      hidden: Ability.LeafGuard
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Roserade,
    dex: 407,
    type: TypeName.Grass,
    type2: TypeName.Poison,
    abilities: {
      first: Ability.NaturalCure,
      second: Ability.PoisonPoint,
      hidden: Ability.Technician
    },
    eggGroups: [EggGroup.Fairy, EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Cranidos,
    dex: 408,
    type: TypeName.Rock,
    category: Category.Fossil,
    abilities: {
      first: Ability.MoldBreaker,
      hidden: Ability.SheerForce
    },
    eggGroups: [EggGroup.Monster]
  }),
  new Pokemon({
    name: PokemonName.Rampardos,
    dex: 409,
    type: TypeName.Rock,
    category: Category.Fossil,
    abilities: {
      first: Ability.MoldBreaker,
      hidden: Ability.SheerForce
    },
    eggGroups: [EggGroup.Monster]
  }),
  new Pokemon({
    name: PokemonName.Shieldon,
    dex: 410,
    type: TypeName.Rock,
    type2: TypeName.Steel,
    category: Category.Fossil,
    abilities: {
      first: Ability.Sturdy,
      hidden: Ability.Soundproof
    },
    eggGroups: [EggGroup.Monster]
  }),
  new Pokemon({
    name: PokemonName.Bastiodon,
    dex: 411,
    type: TypeName.Rock,
    type2: TypeName.Steel,
    category: Category.Fossil,
    abilities: {
      first: Ability.Sturdy,
      hidden: Ability.Soundproof
    },
    eggGroups: [EggGroup.Monster]
  }),
  new Pokemon({
    name: PokemonName.Burmy,
    dex: 412,
    type: TypeName.Bug,
    abilities: {
      first: Ability.ShedSkin,
      hidden: Ability.Overcoat
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Wormadam,
    dex: 413,
    type: TypeName.Bug,
    type2: TypeName.Grass,
    abilities: {
      first: Ability.Anticipation,
      hidden: Ability.Overcoat
    },
    eggGroups: [EggGroup.Bug],
    defaultForm: PokemonName.WormadamPlantCloak,
    forms: [
      {
        formName: PokemonName.WormadamSandyCloak,
        type: TypeName.Bug,
        type2: TypeName.Ground
      },
      {
        formName: PokemonName.WormadamTrashCloak,
        type: TypeName.Bug,
        type2: TypeName.Steel
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Mothim,
    dex: 414,
    type: TypeName.Bug,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.Swarm,
      hidden: Ability.TintedLens
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Combee,
    dex: 415,
    type: TypeName.Bug,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.HoneyGather,
      hidden: Ability.Hustle
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Vespiquen,
    dex: 416,
    type: TypeName.Bug,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.Pressure,
      hidden: Ability.Unnerve
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Pachirisu,
    dex: 417,
    type: TypeName.Electric,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.RunAway,
      second: Ability.Pickup,
      hidden: Ability.VoltAbsorb
    },
    eggGroups: [EggGroup.Field, EggGroup.Fairy]
  }),
  new Pokemon({
    name: PokemonName.Buizel,
    dex: 418,
    type: TypeName.Water,
    abilities: {
      first: Ability.SwiftSwim,
      hidden: Ability.WaterVeil
    },
    eggGroups: [EggGroup.Water1, EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Floatzel,
    dex: 419,
    type: TypeName.Water,
    abilities: {
      first: Ability.SwiftSwim,
      hidden: Ability.WaterVeil
    },
    eggGroups: [EggGroup.Water1, EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Cherubi,
    dex: 420,
    type: TypeName.Grass,
    abilities: {
      first: Ability.Chlorophyll
    },
    eggGroups: [EggGroup.Fairy, EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Cherrim,
    dex: 421,
    type: TypeName.Grass,
    abilities: {
      first: Ability.FlowerGift
    },
    eggGroups: [EggGroup.Fairy, EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Shellos,
    dex: 422,
    type: TypeName.Water,
    abilities: {
      first: Ability.StickyHold,
      second: Ability.StormDrain,
      hidden: Ability.SandForce
    },
    eggGroups: [EggGroup.Water1, EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Gastrodon,
    dex: 423,
    type: TypeName.Water,
    type2: TypeName.Ground,
    abilities: {
      first: Ability.StickyHold,
      second: Ability.StormDrain,
      hidden: Ability.SandForce
    },
    eggGroups: [EggGroup.Water1, EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Ambipom,
    dex: 424,
    type: TypeName.Normal,
    abilities: {
      first: Ability.Technician,
      second: Ability.Pickup,
      hidden: Ability.SkillLink
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Drifloon,
    dex: 425,
    type: TypeName.Ghost,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.Aftermath,
      second: Ability.Unburden,
      hidden: Ability.FlareBoost
    },
    eggGroups: [EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Drifblim,
    dex: 426,
    type: TypeName.Ghost,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.Aftermath,
      second: Ability.Unburden,
      hidden: Ability.FlareBoost
    },
    eggGroups: [EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Buneary,
    dex: 427,
    type: TypeName.Normal,
    abilities: {
      first: Ability.RunAway,
      second: Ability.Klutz,
      hidden: Ability.Limber
    },
    eggGroups: [EggGroup.Field, EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Lopunny,
    dex: 428,
    type: TypeName.Normal,
    abilities: {
      first: Ability.CuteCharm,
      second: Ability.Klutz,
      hidden: Ability.Limber
    },
    eggGroups: [EggGroup.Field, EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Mismagius,
    dex: 429,
    type: TypeName.Ghost,
    abilities: {
      first: Ability.Levitate
    },
    eggGroups: [EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Honchkrow,
    dex: 430,
    type: TypeName.Dark,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.Insomnia,
      second: Ability.SuperLuck,
      hidden: Ability.Moxie
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Glameow,
    dex: 431,
    type: TypeName.Normal,
    abilities: {
      first: Ability.Limber,
      second: Ability.OwnTempo,
      hidden: Ability.KeenEye
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Purugly,
    dex: 432,
    type: TypeName.Normal,
    abilities: {
      first: Ability.ThickFat,
      second: Ability.OwnTempo,
      hidden: Ability.Defiant
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Chingling,
    dex: 433,
    type: TypeName.Psychic,
    category: Category.Baby,
    abilities: {
      first: Ability.Levitate
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Stunky,
    dex: 434,
    type: TypeName.Poison,
    type2: TypeName.Dark,
    abilities: {
      first: Ability.Stench,
      second: Ability.Aftermath,
      hidden: Ability.KeenEye
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Skuntank,
    dex: 435,
    type: TypeName.Poison,
    type2: TypeName.Dark,
    abilities: {
      first: Ability.Stench,
      second: Ability.Aftermath,
      hidden: Ability.KeenEye
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Bronzor,
    dex: 436,
    type: TypeName.Steel,
    type2: TypeName.Psychic,
    abilities: {
      first: Ability.Levitate,
      second: Ability.Heatproof,
      hidden: Ability.HeavyMetal
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Bronzong,
    dex: 437,
    type: TypeName.Steel,
    type2: TypeName.Psychic,
    abilities: {
      first: Ability.Levitate,
      second: Ability.Heatproof,
      hidden: Ability.HeavyMetal
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Bonsly,
    dex: 438,
    type: TypeName.Rock,
    category: Category.Baby,
    abilities: {
      first: Ability.Sturdy,
      second: Ability.RockHead,
      hidden: Ability.Rattled
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.MimeJr,
    dex: 439,
    type: TypeName.Psychic,
    type2: TypeName.Fairy,
    category: Category.Baby,
    abilities: {
      first: Ability.Soundproof,
      second: Ability.Filter,
      hidden: Ability.Technician
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Happiny,
    dex: 440,
    type: TypeName.Normal,
    category: Category.Baby,
    abilities: {
      first: Ability.NaturalCure,
      second: Ability.SereneGrace,
      hidden: Ability.FriendGuard
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Chatot,
    dex: 441,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.KeenEye,
      second: Ability.TangledFeet,
      hidden: Ability.BigPecks
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Spiritomb,
    dex: 442,
    type: TypeName.Ghost,
    type2: TypeName.Dark,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.Pressure,
      hidden: Ability.Infiltrator
    },
    eggGroups: [EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Gible,
    dex: 443,
    type: TypeName.Dragon,
    type2: TypeName.Ground,
    abilities: {
      first: Ability.SandVeil,
      hidden: Ability.RoughSkin
    },
    eggGroups: [EggGroup.Monster, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Gabite,
    dex: 444,
    type: TypeName.Dragon,
    type2: TypeName.Ground,
    abilities: {
      first: Ability.SandVeil,
      hidden: Ability.RoughSkin
    },
    eggGroups: [EggGroup.Monster, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Garchomp,
    dex: 445,
    type: TypeName.Dragon,
    type2: TypeName.Ground,
    abilities: {
      first: Ability.SandVeil,
      hidden: Ability.RoughSkin
    },
    eggGroups: [EggGroup.Monster, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Munchlax,
    dex: 446,
    type: TypeName.Normal,
    category: Category.Baby,
    abilities: {
      first: Ability.Pickup,
      second: Ability.ThickFat,
      hidden: Ability.Gluttony
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Riolu,
    dex: 447,
    type: TypeName.Fighting,
    category: Category.Baby,
    abilities: {
      first: Ability.Steadfast,
      second: Ability.InnerFocus,
      hidden: Ability.Prankster
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Lucario,
    dex: 448,
    type: TypeName.Fighting,
    type2: TypeName.Steel,
    abilities: {
      first: Ability.Steadfast,
      second: Ability.InnerFocus,
      hidden: Ability.Justified
    },
    eggGroups: [EggGroup.Field, EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Hippopotas,
    dex: 449,
    type: TypeName.Ground,
    abilities: {
      first: Ability.SandStream,
      hidden: Ability.SandForce
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Hippowdon,
    dex: 450,
    type: TypeName.Ground,
    abilities: {
      first: Ability.SandStream,
      hidden: Ability.SandForce
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Skorupi,
    dex: 451,
    type: TypeName.Poison,
    type2: TypeName.Bug,
    abilities: {
      first: Ability.BattleArmor,
      second: Ability.Sniper,
      hidden: Ability.KeenEye
    },
    eggGroups: [EggGroup.Bug, EggGroup.Water3]
  }),
  new Pokemon({
    name: PokemonName.Drapion,
    dex: 452,
    type: TypeName.Poison,
    type2: TypeName.Dark,
    abilities: {
      first: Ability.BattleArmor,
      second: Ability.Sniper,
      hidden: Ability.KeenEye
    },
    eggGroups: [EggGroup.Bug, EggGroup.Water3]
  }),
  new Pokemon({
    name: PokemonName.Croagunk,
    dex: 453,
    type: TypeName.Poison,
    type2: TypeName.Fighting,
    abilities: {
      first: Ability.Anticipation,
      second: Ability.DrySkin,
      hidden: Ability.PoisonTouch
    },
    eggGroups: [EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Toxicroak,
    dex: 454,
    type: TypeName.Poison,
    type2: TypeName.Fighting,
    abilities: {
      first: Ability.Anticipation,
      second: Ability.DrySkin,
      hidden: Ability.PoisonTouch
    },
    eggGroups: [EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Carnivine,
    dex: 455,
    type: TypeName.Grass,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.Levitate
    },
    eggGroups: [EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Finneon,
    dex: 456,
    type: TypeName.Water,
    abilities: {
      first: Ability.SwiftSwim,
      second: Ability.StormDrain,
      hidden: Ability.WaterVeil
    },
    eggGroups: [EggGroup.Water2]
  }),
  new Pokemon({
    name: PokemonName.Lumineon,
    dex: 457,
    type: TypeName.Water,
    abilities: {
      first: Ability.SwiftSwim,
      second: Ability.StormDrain,
      hidden: Ability.WaterVeil
    },
    eggGroups: [EggGroup.Water2]
  }),
  new Pokemon({
    name: PokemonName.Mantyke,
    dex: 458,
    type: TypeName.Water,
    type2: TypeName.Flying,
    category: Category.Baby,
    abilities: {
      first: Ability.SwiftSwim,
      second: Ability.WaterAbsorb,
      hidden: Ability.WaterVeil
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Snover,
    dex: 459,
    type: TypeName.Grass,
    type2: TypeName.Ice,
    abilities: {
      first: Ability.SnowWarning,
      hidden: Ability.Soundproof
    },
    eggGroups: [EggGroup.Monster, EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Abomasnow,
    dex: 460,
    type: TypeName.Grass,
    type2: TypeName.Ice,
    abilities: {
      first: Ability.SnowWarning,
      hidden: Ability.Soundproof
    },
    eggGroups: [EggGroup.Monster, EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Weavile,
    dex: 461,
    type: TypeName.Dark,
    type2: TypeName.Ice,
    abilities: {
      first: Ability.Pressure,
      hidden: Ability.Pickpocket
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Magnezone,
    dex: 462,
    type: TypeName.Electric,
    type2: TypeName.Steel,
    abilities: {
      first: Ability.MagnetPull,
      second: Ability.Sturdy,
      hidden: Ability.Analytic
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Lickilicky,
    dex: 463,
    type: TypeName.Normal,
    abilities: {
      first: Ability.OwnTempo,
      second: Ability.Oblivious,
      hidden: Ability.CloudNine
    },
    eggGroups: [EggGroup.Monster]
  }),
  new Pokemon({
    name: PokemonName.Rhyperior,
    dex: 464,
    type: TypeName.Ground,
    type2: TypeName.Rock,
    abilities: {
      first: Ability.LightningRod,
      second: Ability.SolidRock,
      hidden: Ability.Reckless
    },
    eggGroups: [EggGroup.Monster, EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Tangrowth,
    dex: 465,
    type: TypeName.Grass,
    abilities: {
      first: Ability.Chlorophyll,
      second: Ability.LeafGuard,
      hidden: Ability.Regenerator
    },
    eggGroups: [EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Electivire,
    dex: 466,
    type: TypeName.Electric,
    abilities: {
      first: Ability.MotorDrive,
      hidden: Ability.VitalSpirit
    },
    eggGroups: [EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Magmortar,
    dex: 467,
    type: TypeName.Fire,
    abilities: {
      first: Ability.FlameBody,
      hidden: Ability.VitalSpirit
    },
    eggGroups: [EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Togekiss,
    dex: 468,
    type: TypeName.Fairy,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.Hustle,
      second: Ability.SereneGrace,
      hidden: Ability.SuperLuck
    },
    eggGroups: [EggGroup.Flying, EggGroup.Fairy]
  }),
  new Pokemon({
    name: PokemonName.Yanmega,
    dex: 469,
    type: TypeName.Bug,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.SpeedBoost,
      second: Ability.TintedLens,
      hidden: Ability.Frisk
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Leafeon,
    dex: 470,
    type: TypeName.Grass,
    abilities: {
      first: Ability.LeafGuard,
      hidden: Ability.Chlorophyll
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Glaceon,
    dex: 471,
    type: TypeName.Ice,
    abilities: {
      first: Ability.SnowCloak,
      hidden: Ability.IceBody
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Gliscor,
    dex: 472,
    type: TypeName.Ground,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.HyperCutter,
      second: Ability.SandVeil,
      hidden: Ability.PoisonHeal
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Mamoswine,
    dex: 473,
    type: TypeName.Ice,
    type2: TypeName.Ground,
    abilities: {
      first: Ability.Oblivious,
      second: Ability.SnowCloak,
      hidden: Ability.ThickFat
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.PorygonZ,
    dex: 474,
    type: TypeName.Normal,
    abilities: {
      first: Ability.Adaptability,
      second: Ability.Download,
      hidden: Ability.Analytic
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Gallade,
    dex: 475,
    type: TypeName.Psychic,
    type2: TypeName.Fighting,
    abilities: {
      first: Ability.Steadfast,
      second: Ability.Sharpness,
      hidden: Ability.Justified
    },
    eggGroups: [EggGroup.HumanLike, EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Probopass,
    dex: 476,
    type: TypeName.Rock,
    type2: TypeName.Steel,
    abilities: {
      first: Ability.Sturdy,
      second: Ability.MagnetPull,
      hidden: Ability.SandForce
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Dusknoir,
    dex: 477,
    type: TypeName.Ghost,
    abilities: {
      first: Ability.Pressure,
      hidden: Ability.Frisk
    },
    eggGroups: [EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Froslass,
    dex: 478,
    type: TypeName.Ice,
    type2: TypeName.Ghost,
    abilities: {
      first: Ability.SnowCloak,
      hidden: Ability.CursedBody
    },
    eggGroups: [EggGroup.Fairy, EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Rotom,
    dex: 479,
    type: TypeName.Electric,
    type2: TypeName.Ghost,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.Levitate
    },
    eggGroups: [EggGroup.Amorphous],
    forms: [
      {
        formName: PokemonName.RotomHeat,
        type: TypeName.Electric,
        type2: TypeName.Fire
      },
      {
        formName: PokemonName.RotomWash,
        type: TypeName.Electric,
        type2: TypeName.Water
      },
      {
        formName: PokemonName.RotomFrost,
        type: TypeName.Electric,
        type2: TypeName.Ice
      },
      {
        formName: PokemonName.RotomFan,
        type: TypeName.Electric,
        type2: TypeName.Flying
      },
      {
        formName: PokemonName.RotomMow,
        type: TypeName.Electric,
        type2: TypeName.Grass
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Uxie,
    dex: 480,
    type: TypeName.Psychic,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.Levitate
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Mesprit,
    dex: 481,
    type: TypeName.Psychic,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.Levitate
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Azelf,
    dex: 482,
    type: TypeName.Psychic,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.Levitate
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Dialga,
    dex: 483,
    type: TypeName.Steel,
    type2: TypeName.Dragon,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.Pressure,
      hidden: Ability.Telepathy
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Palkia,
    dex: 484,
    type: TypeName.Water,
    type2: TypeName.Dragon,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.Pressure,
      hidden: Ability.Telepathy
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Heatran,
    dex: 485,
    type: TypeName.Fire,
    type2: TypeName.Steel,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.FlashFire,
      hidden: Ability.FlameBody
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Regigigas,
    dex: 486,
    type: TypeName.Normal,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.SlowStart
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Giratina,
    dex: 487,
    type: TypeName.Ghost,
    type2: TypeName.Dragon,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.Pressure,
      hidden: Ability.Telepathy
    },
    eggGroups: [EggGroup.NoEggs],
    forms: [
      {
        formName: PokemonName.GiratinaOrigin,
        abilities: {
          first: Ability.Levitate
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Cresselia,
    dex: 488,
    type: TypeName.Psychic,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.Levitate
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Phione,
    dex: 489,
    type: TypeName.Water,
    category: [Category.Mythical, Category.NonEvolve],
    abilities: {
      first: Ability.Hydration
    },
    eggGroups: [EggGroup.Water1, EggGroup.Fairy]
  }),
  new Pokemon({
    name: PokemonName.Manaphy,
    dex: 490,
    type: TypeName.Water,
    category: [Category.Mythical, Category.NonEvolve],
    abilities: {
      first: Ability.Hydration
    },
    eggGroups: [EggGroup.Water1, EggGroup.Fairy]
  }),
  new Pokemon({
    name: PokemonName.Darkrai,
    dex: 491,
    type: TypeName.Dark,
    category: [Category.Mythical, Category.NonEvolve],
    abilities: {
      first: Ability.BadDreams
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Shaymin,
    dex: 492,
    type: TypeName.Grass,
    category: [Category.Mythical, Category.NonEvolve],
    abilities: {
      first: Ability.NaturalCure
    },
    eggGroups: [EggGroup.NoEggs],
    defaultForm: PokemonName.ShayminLand,
    forms: [
      {
        formName: PokemonName.ShayminSky,
        type: TypeName.Grass,
        type2: TypeName.Flying,
        abilities: {
          first: Ability.SereneGrace
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Arceus,
    dex: 493,
    type: TypeName.Normal,
    category: [Category.Mythical, Category.NonEvolve],
    abilities: {
      first: Ability.Multitype
    },
    eggGroups: [EggGroup.NoEggs]
  })
];
