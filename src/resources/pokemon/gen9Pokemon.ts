import { Pokemon } from "../../classes/Pokemon";
import {
  Ability,
  Category,
  EggGroup,
  PokemonName,
  TypeName
} from "../../enums";

export const gen9Pokemon: Pokemon[] = [
  new Pokemon({
    name: PokemonName.Sprigatito,
    dex: 906,
    type: TypeName.Grass,
    category: Category.Starter,
    abilities: {
      first: Ability.Overgrow,
      hidden: Ability.Protean
    },
    eggGroups: [EggGroup.Field, EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Floragato,
    dex: 907,
    type: TypeName.Grass,
    category: Category.Starter,
    abilities: {
      first: Ability.Overgrow,
      hidden: Ability.Protean
    },
    eggGroups: [EggGroup.Field, EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Meowscarada,
    dex: 908,
    type: TypeName.Grass,
    type2: TypeName.Dark,
    category: Category.Starter,
    abilities: {
      first: Ability.Overgrow,
      hidden: Ability.Protean
    },
    eggGroups: [EggGroup.Field, EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Fuecoco,
    dex: 909,
    type: TypeName.Fire,
    category: Category.Starter,
    abilities: {
      first: Ability.Blaze,
      hidden: Ability.Unaware
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Crocalor,
    dex: 910,
    type: TypeName.Fire,
    category: Category.Starter,
    abilities: {
      first: Ability.Blaze,
      hidden: Ability.Unaware
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Skeledirge,
    dex: 911,
    type: TypeName.Fire,
    type2: TypeName.Ghost,
    category: Category.Starter,
    abilities: {
      first: Ability.Blaze,
      hidden: Ability.Unaware
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Quaxly,
    dex: 912,
    type: TypeName.Water,
    category: Category.Starter,
    abilities: {
      first: Ability.Torrent,
      hidden: Ability.Moxie
    },
    eggGroups: [EggGroup.Flying, EggGroup.Water1]
  }),
  new Pokemon({
    name: PokemonName.Quaxwell,
    dex: 913,
    type: TypeName.Water,
    category: Category.Starter,
    abilities: {
      first: Ability.Torrent,
      hidden: Ability.Moxie
    },
    eggGroups: [EggGroup.Flying, EggGroup.Water1]
  }),
  new Pokemon({
    name: PokemonName.Quaquaval,
    dex: 914,
    type: TypeName.Water,
    type2: TypeName.Fighting,
    category: Category.Starter,
    abilities: {
      first: Ability.Torrent,
      hidden: Ability.Moxie
    },
    eggGroups: [EggGroup.Flying, EggGroup.Water1]
  }),
  new Pokemon({
    name: PokemonName.Lechonk,
    dex: 915,
    type: TypeName.Normal,
    abilities: {
      first: Ability.AromaVeil,
      second: Ability.Gluttony,
      hidden: Ability.ThickFat
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Oinkologne,
    dex: 916,
    type: TypeName.Normal,
    abilities: {
      first: Ability.LingeringAroma,
      second: Ability.Gluttony,
      hidden: Ability.ThickFat
    },
    eggGroups: [EggGroup.Field],
    defaultForm: PokemonName.OinkologneMale,
    forms: [
      {
        formName: PokemonName.OinkologneFemale,
        abilities: {
          first: Ability.AromaVeil,
          second: Ability.Gluttony,
          hidden: Ability.ThickFat
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Tarountula,
    dex: 917,
    type: TypeName.Bug,
    abilities: {
      first: Ability.Insomnia,
      hidden: Ability.Stakeout
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Spidops,
    dex: 918,
    type: TypeName.Bug,
    abilities: {
      first: Ability.Insomnia,
      hidden: Ability.Stakeout
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Nymble,
    dex: 919,
    type: TypeName.Bug,
    abilities: {
      first: Ability.Swarm,
      hidden: Ability.TintedLens
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Lokix,
    dex: 920,
    type: TypeName.Bug,
    type2: TypeName.Dark,
    abilities: {
      first: Ability.Swarm,
      hidden: Ability.TintedLens
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Pawmi,
    dex: 921,
    type: TypeName.Electric,
    abilities: {
      first: Ability.Static,
      second: Ability.NaturalCure,
      hidden: Ability.IronFist
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Pawmo,
    dex: 922,
    type: TypeName.Electric,
    type2: TypeName.Fighting,
    abilities: {
      first: Ability.VoltAbsorb,
      second: Ability.NaturalCure,
      hidden: Ability.IronFist
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Pawmot,
    dex: 923,
    type: TypeName.Electric,
    type2: TypeName.Fighting,
    abilities: {
      first: Ability.VoltAbsorb,
      second: Ability.NaturalCure,
      hidden: Ability.IronFist
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Tandemaus,
    dex: 924,
    type: TypeName.Normal,
    abilities: {
      first: Ability.RunAway,
      second: Ability.Pickup,
      hidden: Ability.OwnTempo
    },
    eggGroups: [EggGroup.Field, EggGroup.Fairy]
  }),
  new Pokemon({
    name: PokemonName.Maushold,
    dex: 925,
    type: TypeName.Normal,
    abilities: {
      first: Ability.FriendGuard,
      second: Ability.CheekPouch,
      hidden: Ability.Technician
    },
    eggGroups: [EggGroup.Field, EggGroup.Fairy]
  }),
  new Pokemon({
    name: PokemonName.Fidough,
    dex: 926,
    type: TypeName.Fairy,
    abilities: {
      first: Ability.OwnTempo,
      hidden: Ability.Klutz
    },
    eggGroups: [EggGroup.Field, EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Dachsbun,
    dex: 927,
    type: TypeName.Fairy,
    abilities: {
      first: Ability.WellBakedBody,
      hidden: Ability.AromaVeil
    },
    eggGroups: [EggGroup.Field, EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Smoliv,
    dex: 928,
    type: TypeName.Grass,
    type2: TypeName.Normal,
    abilities: {
      first: Ability.EarlyBird,
      hidden: Ability.Harvest
    },
    eggGroups: [EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Dolliv,
    dex: 929,
    type: TypeName.Grass,
    type2: TypeName.Normal,
    abilities: {
      first: Ability.EarlyBird,
      hidden: Ability.Harvest
    },
    eggGroups: [EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Arboliva,
    dex: 930,
    type: TypeName.Grass,
    type2: TypeName.Normal,
    abilities: {
      first: Ability.SeedSower,
      hidden: Ability.Harvest
    },
    eggGroups: [EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Squawkabilly,
    dex: 931,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.Intimidate,
      second: Ability.Hustle,
      hidden: Ability.Guts
    },
    eggGroups: [EggGroup.Flying],
    defaultForm: PokemonName.SquawkabillyGreen,
    forms: [
      {
        formName: PokemonName.SquawkabillyBlue,
        abilities: {
          first: Ability.Intimidate,
          second: Ability.Hustle,
          hidden: Ability.Guts
        }
      },
      {
        formName: PokemonName.SquawkabillyYellow,
        abilities: {
          first: Ability.Intimidate,
          second: Ability.Hustle,
          hidden: Ability.SheerForce
        }
      },
      {
        formName: PokemonName.SquawkabillyWhite,
        abilities: {
          first: Ability.Intimidate,
          second: Ability.Hustle,
          hidden: Ability.SheerForce
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Nacli,
    dex: 932,
    type: TypeName.Rock,
    abilities: {
      first: Ability.PurifyingSalt,
      second: Ability.Sturdy,
      hidden: Ability.ClearBody
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Naclstack,
    dex: 933,
    type: TypeName.Rock,
    abilities: {
      first: Ability.PurifyingSalt,
      second: Ability.Sturdy,
      hidden: Ability.ClearBody
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Garganacl,
    dex: 934,
    type: TypeName.Rock,
    abilities: {
      first: Ability.PurifyingSalt,
      second: Ability.Sturdy,
      hidden: Ability.ClearBody
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Charcadet,
    dex: 935,
    type: TypeName.Fire,
    abilities: {
      first: Ability.FlashFire,
      hidden: Ability.FlameBody
    },
    eggGroups: [EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Armarouge,
    dex: 936,
    type: TypeName.Fire,
    type2: TypeName.Psychic,
    abilities: {
      first: Ability.FlashFire,
      hidden: Ability.WeakArmor
    },
    eggGroups: [EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Ceruledge,
    dex: 937,
    type: TypeName.Fire,
    type2: TypeName.Ghost,
    abilities: {
      first: Ability.FlashFire,
      hidden: Ability.WeakArmor
    },
    eggGroups: [EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Tadbulb,
    dex: 938,
    type: TypeName.Electric,
    abilities: {
      first: Ability.OwnTempo,
      second: Ability.Static,
      hidden: Ability.Damp
    },
    eggGroups: [EggGroup.Water1]
  }),
  new Pokemon({
    name: PokemonName.Bellibolt,
    dex: 939,
    type: TypeName.Electric,
    abilities: {
      first: Ability.Electromorphosis,
      second: Ability.Static,
      hidden: Ability.Damp
    },
    eggGroups: [EggGroup.Water1]
  }),
  new Pokemon({
    name: PokemonName.Wattrel,
    dex: 940,
    type: TypeName.Electric,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.WindPower,
      second: Ability.VoltAbsorb,
      hidden: Ability.Competitive
    },
    eggGroups: [EggGroup.Water1, EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Kilowattrel,
    dex: 941,
    type: TypeName.Electric,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.WindPower,
      second: Ability.VoltAbsorb,
      hidden: Ability.Competitive
    },
    eggGroups: [EggGroup.Water1, EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Maschiff,
    dex: 942,
    type: TypeName.Dark,
    abilities: {
      first: Ability.Intimidate,
      second: Ability.RunAway,
      hidden: Ability.Stakeout
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Mabosstiff,
    dex: 943,
    type: TypeName.Dark,
    abilities: {
      first: Ability.Intimidate,
      second: Ability.GuardDog,
      hidden: Ability.Stakeout
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Shroodle,
    dex: 944,
    type: TypeName.Poison,
    type2: TypeName.Normal,
    abilities: {
      first: Ability.Unburden,
      second: Ability.Pickpocket,
      hidden: Ability.Prankster
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Grafaiai,
    dex: 945,
    type: TypeName.Poison,
    type2: TypeName.Normal,
    abilities: {
      first: Ability.Unburden,
      second: Ability.PoisonTouch,
      hidden: Ability.Prankster
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Bramblin,
    dex: 946,
    type: TypeName.Grass,
    type2: TypeName.Ghost,
    abilities: {
      first: Ability.WindRider,
      hidden: Ability.Infiltrator
    },
    eggGroups: [EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Brambleghast,
    dex: 947,
    type: TypeName.Grass,
    type2: TypeName.Ghost,
    abilities: {
      first: Ability.WindRider,
      hidden: Ability.Infiltrator
    },
    eggGroups: [EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Toedscool,
    dex: 948,
    type: TypeName.Ground,
    type2: TypeName.Grass,
    abilities: {
      first: Ability.MyceliumMight
    },
    eggGroups: [EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Toedscruel,
    dex: 949,
    type: TypeName.Ground,
    type2: TypeName.Grass,
    abilities: {
      first: Ability.MyceliumMight
    },
    eggGroups: [EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Klawf,
    dex: 950,
    type: TypeName.Rock,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.AngerShell,
      second: Ability.ShellArmor,
      hidden: Ability.Regenerator
    },
    eggGroups: [EggGroup.Water3]
  }),
  new Pokemon({
    name: PokemonName.Capsakid,
    dex: 951,
    type: TypeName.Grass,
    abilities: {
      first: Ability.Chlorophyll,
      second: Ability.Insomnia,
      hidden: Ability.Klutz
    },
    eggGroups: [EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Scovillain,
    dex: 952,
    type: TypeName.Grass,
    type2: TypeName.Fire,
    abilities: {
      first: Ability.Chlorophyll,
      second: Ability.Insomnia,
      hidden: Ability.Moody
    },
    eggGroups: [EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Rellor,
    dex: 953,
    type: TypeName.Bug,
    abilities: {
      first: Ability.CompoundEyes,
      hidden: Ability.ShedSkin
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Rabsca,
    dex: 954,
    type: TypeName.Bug,
    type2: TypeName.Psychic,
    abilities: {
      first: Ability.Synchronize,
      hidden: Ability.Telepathy
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Flittle,
    dex: 955,
    type: TypeName.Psychic,
    abilities: {
      first: Ability.Anticipation,
      second: Ability.Frisk,
      hidden: Ability.SpeedBoost
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Espathra,
    dex: 956,
    type: TypeName.Psychic,
    abilities: {
      first: Ability.Opportunist,
      second: Ability.Frisk,
      hidden: Ability.SpeedBoost
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Tinkatink,
    dex: 957,
    type: TypeName.Fairy,
    type2: TypeName.Steel,
    abilities: {
      first: Ability.MoldBreaker,
      second: Ability.OwnTempo,
      hidden: Ability.Pickpocket
    },
    eggGroups: [EggGroup.Fairy]
  }),
  new Pokemon({
    name: PokemonName.Tinkatuff,
    dex: 958,
    type: TypeName.Fairy,
    type2: TypeName.Steel,
    abilities: {
      first: Ability.MoldBreaker,
      second: Ability.OwnTempo,
      hidden: Ability.Pickpocket
    },
    eggGroups: [EggGroup.Fairy]
  }),
  new Pokemon({
    name: PokemonName.Tinkaton,
    dex: 959,
    type: TypeName.Fairy,
    type2: TypeName.Steel,
    abilities: {
      first: Ability.MoldBreaker,
      second: Ability.OwnTempo,
      hidden: Ability.Pickpocket
    },
    eggGroups: [EggGroup.Fairy]
  }),
  new Pokemon({
    name: PokemonName.Wiglett,
    dex: 960,
    type: TypeName.Water,
    abilities: {
      first: Ability.Gooey,
      second: Ability.Rattled,
      hidden: Ability.SandVeil
    },
    eggGroups: [EggGroup.Water3]
  }),
  new Pokemon({
    name: PokemonName.Wugtrio,
    dex: 961,
    type: TypeName.Water,
    abilities: {
      first: Ability.Gooey,
      second: Ability.Rattled,
      hidden: Ability.SandVeil
    },
    eggGroups: [EggGroup.Water3]
  }),
  new Pokemon({
    name: PokemonName.Bombirdier,
    dex: 962,
    type: TypeName.Flying,
    type2: TypeName.Dark,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.BigPecks,
      second: Ability.KeenEye,
      hidden: Ability.RockyPayload
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Finizen,
    dex: 963,
    type: TypeName.Water,
    abilities: {
      first: Ability.WaterVeil
    },
    eggGroups: [EggGroup.Field, EggGroup.Water2]
  }),
  new Pokemon({
    name: PokemonName.Palafin,
    dex: 964,
    type: TypeName.Water,
    abilities: {
      first: Ability.ZeroToHero
    },
    eggGroups: [EggGroup.Field, EggGroup.Water2]
  }),
  new Pokemon({
    name: PokemonName.Varoom,
    dex: 965,
    type: TypeName.Steel,
    type2: TypeName.Poison,
    abilities: {
      first: Ability.Overcoat,
      hidden: Ability.SlowStart
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Revavroom,
    dex: 966,
    type: TypeName.Steel,
    type2: TypeName.Poison,
    abilities: {
      first: Ability.Overcoat,
      hidden: Ability.Filter
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Cyclizar,
    dex: 967,
    type: TypeName.Dragon,
    type2: TypeName.Normal,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.ShedSkin,
      hidden: Ability.Regenerator
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Orthworm,
    dex: 968,
    type: TypeName.Steel,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.EarthEater,
      hidden: Ability.SandVeil
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Glimmet,
    dex: 969,
    type: TypeName.Rock,
    type2: TypeName.Poison,
    abilities: {
      first: Ability.ToxicDebris,
      hidden: Ability.Corrosion
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Glimmora,
    dex: 970,
    type: TypeName.Rock,
    type2: TypeName.Poison,
    abilities: {
      first: Ability.ToxicDebris,
      hidden: Ability.Corrosion
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Greavard,
    dex: 971,
    type: TypeName.Ghost,
    abilities: {
      first: Ability.Pickup,
      hidden: Ability.Fluffy
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Houndstone,
    dex: 972,
    type: TypeName.Ghost,
    abilities: {
      first: Ability.SandRush,
      hidden: Ability.Fluffy
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Flamigo,
    dex: 973,
    type: TypeName.Flying,
    type2: TypeName.Fighting,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.Scrappy,
      second: Ability.TangledFeet,
      hidden: Ability.Costar
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Cetoddle,
    dex: 974,
    type: TypeName.Ice,
    abilities: {
      first: Ability.ThickFat,
      second: Ability.SnowCloak,
      hidden: Ability.SheerForce
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Cetitan,
    dex: 975,
    type: TypeName.Ice,
    abilities: {
      first: Ability.ThickFat,
      second: Ability.SlushRush,
      hidden: Ability.SheerForce
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Veluza,
    dex: 976,
    type: TypeName.Water,
    type2: TypeName.Psychic,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.MoldBreaker,
      hidden: Ability.Sharpness
    },
    eggGroups: [EggGroup.Water2]
  }),
  new Pokemon({
    name: PokemonName.Dondozo,
    dex: 977,
    type: TypeName.Water,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.Unaware,
      second: Ability.Oblivious,
      hidden: Ability.WaterVeil
    },
    eggGroups: [EggGroup.Water2]
  }),
  new Pokemon({
    name: PokemonName.Tatsugiri,
    dex: 978,
    type: TypeName.Dragon,
    type2: TypeName.Water,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.Commander,
      hidden: Ability.StormDrain
    },
    eggGroups: [EggGroup.Water2]
  }),
  new Pokemon({
    name: PokemonName.Annihilape,
    dex: 979,
    type: TypeName.Fighting,
    type2: TypeName.Ghost,
    abilities: {
      first: Ability.VitalSpirit,
      second: Ability.InnerFocus,
      hidden: Ability.Defiant
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Clodsire,
    dex: 980,
    type: TypeName.Poison,
    type2: TypeName.Ground,
    abilities: {
      first: Ability.PoisonPoint,
      second: Ability.WaterAbsorb,
      hidden: Ability.Unaware
    },
    eggGroups: [EggGroup.Water1, EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Farigiraf,
    dex: 981,
    type: TypeName.Normal,
    type2: TypeName.Psychic,
    abilities: {
      first: Ability.CudChew,
      second: Ability.ArmorTail,
      hidden: Ability.SapSipper
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Dudunsparce,
    dex: 982,
    type: TypeName.Normal,
    abilities: {
      first: Ability.SereneGrace,
      second: Ability.RunAway,
      hidden: Ability.Rattled
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Kingambit,
    dex: 983,
    type: TypeName.Dark,
    type2: TypeName.Steel,
    abilities: {
      first: Ability.Defiant,
      second: Ability.SupremeOverlord,
      hidden: Ability.Pressure
    },
    eggGroups: [EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.GreatTusk,
    dex: 984,
    type: TypeName.Ground,
    type2: TypeName.Fighting,
    category: [Category.Paradox, Category.NonEvolve],
    abilities: {
      first: Ability.Protosynthesis
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.ScreamTail,
    dex: 985,
    type: TypeName.Fairy,
    type2: TypeName.Psychic,
    category: [Category.Paradox, Category.NonEvolve],
    abilities: {
      first: Ability.Protosynthesis
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.BruteBonnet,
    dex: 986,
    type: TypeName.Grass,
    type2: TypeName.Dark,
    category: [Category.Paradox, Category.NonEvolve],
    abilities: {
      first: Ability.Protosynthesis
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.FlutterMane,
    dex: 987,
    type: TypeName.Ghost,
    type2: TypeName.Fairy,
    category: [Category.Paradox, Category.NonEvolve],
    abilities: {
      first: Ability.Protosynthesis
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.SlitherWing,
    dex: 988,
    type: TypeName.Bug,
    type2: TypeName.Fighting,
    category: [Category.Paradox, Category.NonEvolve],
    abilities: {
      first: Ability.Protosynthesis
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.SandyShocks,
    dex: 989,
    type: TypeName.Electric,
    type2: TypeName.Ground,
    category: [Category.Paradox, Category.NonEvolve],
    abilities: {
      first: Ability.Protosynthesis
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.IronTreads,
    dex: 990,
    type: TypeName.Ground,
    type2: TypeName.Steel,
    category: [Category.Paradox, Category.NonEvolve],
    abilities: {
      first: Ability.QuarkDrive
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.IronBundle,
    dex: 991,
    type: TypeName.Ice,
    type2: TypeName.Water,
    category: [Category.Paradox, Category.NonEvolve],
    abilities: {
      first: Ability.QuarkDrive
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.IronHands,
    dex: 992,
    type: TypeName.Fighting,
    type2: TypeName.Electric,
    category: [Category.Paradox, Category.NonEvolve],
    abilities: {
      first: Ability.QuarkDrive
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.IronJugulis,
    dex: 993,
    type: TypeName.Dark,
    type2: TypeName.Flying,
    category: [Category.Paradox, Category.NonEvolve],
    abilities: {
      first: Ability.QuarkDrive
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.IronMoth,
    dex: 994,
    type: TypeName.Fire,
    type2: TypeName.Poison,
    category: [Category.Paradox, Category.NonEvolve],
    abilities: {
      first: Ability.QuarkDrive
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.IronThorns,
    dex: 995,
    type: TypeName.Rock,
    type2: TypeName.Electric,
    category: [Category.Paradox, Category.NonEvolve],
    abilities: {
      first: Ability.QuarkDrive
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Frigibax,
    dex: 996,
    type: TypeName.Dragon,
    type2: TypeName.Ice,
    abilities: {
      first: Ability.ThermalExchange,
      hidden: Ability.IceBody
    },
    eggGroups: [EggGroup.Dragon, EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Arctibax,
    dex: 997,
    type: TypeName.Dragon,
    type2: TypeName.Ice,
    abilities: {
      first: Ability.ThermalExchange,
      hidden: Ability.IceBody
    },
    eggGroups: [EggGroup.Dragon, EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Baxcalibur,
    dex: 998,
    type: TypeName.Dragon,
    type2: TypeName.Ice,
    abilities: {
      first: Ability.ThermalExchange,
      hidden: Ability.IceBody
    },
    eggGroups: [EggGroup.Dragon, EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Gimmighoul,
    dex: 999,
    type: TypeName.Ghost,
    abilities: {
      first: Ability.Rattled
    },
    eggGroups: [EggGroup.NoEggs],
    defaultForm: PokemonName.GimmighoulChest,
    forms: [
      {
        formName: PokemonName.GimmighoulRoaming,
        abilities: {
          first: Ability.RunAway
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Gholdengo,
    dex: 1000,
    type: TypeName.Steel,
    type2: TypeName.Ghost,
    abilities: {
      first: Ability.GoodAsGold
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.WoChien,
    dex: 1001,
    type: TypeName.Dark,
    type2: TypeName.Grass,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.TabletsOfRuin
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.ChienPao,
    dex: 1002,
    type: TypeName.Dark,
    type2: TypeName.Ice,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.SwordOfRuin
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.TingLu,
    dex: 1003,
    type: TypeName.Dark,
    type2: TypeName.Ground,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.VesselOfRuin
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.ChiYu,
    dex: 1004,
    type: TypeName.Dark,
    type2: TypeName.Fire,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.BeadsOfRuin
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.RoaringMoon,
    dex: 1005,
    type: TypeName.Dragon,
    type2: TypeName.Dark,
    category: [Category.Paradox, Category.NonEvolve],
    abilities: {
      first: Ability.Protosynthesis
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.IronValiant,
    dex: 1006,
    type: TypeName.Fairy,
    type2: TypeName.Fighting,
    category: [Category.Paradox, Category.NonEvolve],
    abilities: {
      first: Ability.QuarkDrive
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Koraidon,
    dex: 1007,
    type: TypeName.Fighting,
    type2: TypeName.Dragon,
    category: [Category.Legendary, Category.Paradox, Category.NonEvolve],
    abilities: {
      first: Ability.OrichalcumPulse
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Miraidon,
    dex: 1008,
    type: TypeName.Electric,
    type2: TypeName.Dragon,
    category: [Category.Legendary, Category.Paradox, Category.NonEvolve],
    abilities: {
      first: Ability.HadronEngine
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.WalkingWake,
    dex: 1009,
    type: TypeName.Water,
    type2: TypeName.Dragon,
    category: [Category.Paradox, Category.NonEvolve],
    abilities: {
      first: Ability.Protosynthesis
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.IronLeaves,
    dex: 1010,
    type: TypeName.Grass,
    type2: TypeName.Psychic,
    category: [Category.Paradox, Category.NonEvolve],
    abilities: {
      first: Ability.QuarkDrive
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Dipplin,
    dex: 1011,
    type: TypeName.Grass,
    type2: TypeName.Dragon,
    abilities: {
      first: Ability.SupersweetSyrup,
      second: Ability.Gluttony,
      hidden: Ability.StickyHold
    },
    eggGroups: [EggGroup.Grass, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Poltchageist,
    dex: 1012,
    type: TypeName.Grass,
    type2: TypeName.Ghost,
    abilities: {
      first: Ability.Hospitality,
      hidden: Ability.Heatproof
    },
    eggGroups: [EggGroup.Mineral, EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Sinistcha,
    dex: 1013,
    type: TypeName.Grass,
    type2: TypeName.Ghost,
    abilities: {
      first: Ability.Hospitality,
      hidden: Ability.Heatproof
    },
    eggGroups: [EggGroup.Mineral, EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Okidogi,
    dex: 1014,
    type: TypeName.Poison,
    type2: TypeName.Fighting,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.ToxicChain,
      hidden: Ability.GuardDog
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Munkidori,
    dex: 1015,
    type: TypeName.Poison,
    type2: TypeName.Psychic,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.ToxicChain,
      hidden: Ability.Frisk
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Fezandipiti,
    dex: 1016,
    type: TypeName.Poison,
    type2: TypeName.Fairy,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.ToxicChain,
      hidden: Ability.Technician
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Ogerpon,
    dex: 1017,
    type: TypeName.Grass,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.Defiant
    },
    eggGroups: [EggGroup.NoEggs],
    defaultForm: PokemonName.OgerponTeal,
    forms: [
      {
        formName: PokemonName.OgerponWellspring,
        type: TypeName.Grass,
        type2: TypeName.Water,
        abilities: {
          first: Ability.WaterAbsorb
        }
      },
      {
        formName: PokemonName.OgerponHearthflame,
        type: TypeName.Grass,
        type2: TypeName.Fire,
        abilities: {
          first: Ability.MoldBreaker
        }
      },
      {
        formName: PokemonName.OgerponCornerstone,
        type: TypeName.Grass,
        type2: TypeName.Rock,
        abilities: {
          first: Ability.Sturdy
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Archaludon,
    dex: 1018,
    type: TypeName.Steel,
    type2: TypeName.Dragon,
    abilities: {
      first: Ability.Stamina,
      second: Ability.Sturdy,
      hidden: Ability.Stalwart
    },
    eggGroups: [EggGroup.Mineral, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Hydrapple,
    dex: 1019,
    type: TypeName.Grass,
    type2: TypeName.Dragon,
    abilities: {
      first: Ability.SupersweetSyrup,
      second: Ability.Regenerator,
      hidden: Ability.StickyHold
    },
    eggGroups: [EggGroup.Grass, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.GougingFire,
    dex: 1020,
    type: TypeName.Fire,
    type2: TypeName.Dragon,
    category: [Category.Paradox, Category.NonEvolve],
    abilities: {
      first: Ability.Protosynthesis
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.RagingBolt,
    dex: 1021,
    type: TypeName.Electric,
    type2: TypeName.Dragon,
    category: [Category.Paradox, Category.NonEvolve],
    abilities: {
      first: Ability.Protosynthesis
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.IronBoulder,
    dex: 1022,
    type: TypeName.Rock,
    type2: TypeName.Psychic,
    category: [Category.Paradox, Category.NonEvolve],
    abilities: {
      first: Ability.QuarkDrive
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.IronCrown,
    dex: 1023,
    type: TypeName.Steel,
    type2: TypeName.Psychic,
    category: [Category.Paradox, Category.NonEvolve],
    abilities: {
      first: Ability.QuarkDrive
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Terapagos,
    dex: 1024,
    type: TypeName.Normal,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.TeraShift
    },
    eggGroups: [EggGroup.NoEggs],
    defaultForm: PokemonName.TerapagosNormal,
    forms: [
      {
        formName: PokemonName.TerapagosTerastal,
        abilities: {
          first: Ability.TeraShell
        }
      },
      {
        formName: PokemonName.TerapagosStellar,
        abilities: {
          first: Ability.TeraformZero
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Pecharunt,
    dex: 1025,
    type: TypeName.Poison,
    type2: TypeName.Ghost,
    category: [Category.Mythical, Category.NonEvolve],
    abilities: {
      first: Ability.PoisonPuppeteer
    },
    eggGroups: [EggGroup.NoEggs]
  })
];
