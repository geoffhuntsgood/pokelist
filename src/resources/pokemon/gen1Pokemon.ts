import { Pokemon } from "../../classes/Pokemon";
import {
  Ability,
  Category,
  EggGroup,
  PokemonName,
  TypeName
} from "../../enums";

export const gen1Pokemon: Pokemon[] = [
  new Pokemon({
    name: PokemonName.Bulbasaur,
    dex: 1,
    type: TypeName.Grass,
    type2: TypeName.Poison,
    category: Category.Starter,
    abilities: {
      first: Ability.Overgrow,
      hidden: Ability.Chlorophyll
    },
    eggGroups: [EggGroup.Monster, EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Ivysaur,
    dex: 2,
    type: TypeName.Grass,
    type2: TypeName.Poison,
    category: Category.Starter,
    abilities: {
      first: Ability.Overgrow,
      hidden: Ability.Chlorophyll
    },
    eggGroups: [EggGroup.Monster, EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Venusaur,
    dex: 3,
    type: TypeName.Grass,
    type2: TypeName.Poison,
    category: Category.Starter,
    abilities: {
      first: Ability.Overgrow,
      hidden: Ability.Chlorophyll
    },
    eggGroups: [EggGroup.Monster, EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Charmander,
    dex: 4,
    type: TypeName.Fire,
    category: Category.Starter,
    abilities: {
      first: Ability.Blaze,
      hidden: Ability.SolarPower
    },
    eggGroups: [EggGroup.Monster, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Charmeleon,
    dex: 5,
    type: TypeName.Fire,
    category: Category.Starter,
    abilities: {
      first: Ability.Blaze,
      hidden: Ability.SolarPower
    },
    eggGroups: [EggGroup.Monster, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Charizard,
    dex: 6,
    type: TypeName.Fire,
    type2: TypeName.Flying,
    category: Category.Starter,
    abilities: {
      first: Ability.Blaze,
      hidden: Ability.SolarPower
    },
    eggGroups: [EggGroup.Monster, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Squirtle,
    dex: 7,
    type: TypeName.Water,
    category: Category.Starter,
    abilities: {
      first: Ability.Torrent,
      hidden: Ability.RainDish
    },
    eggGroups: [EggGroup.Monster, EggGroup.Water1]
  }),
  new Pokemon({
    name: PokemonName.Wartortle,
    dex: 8,
    type: TypeName.Water,
    category: Category.Starter,
    abilities: {
      first: Ability.Torrent,
      hidden: Ability.RainDish
    },
    eggGroups: [EggGroup.Monster, EggGroup.Water1]
  }),
  new Pokemon({
    name: PokemonName.Blastoise,
    dex: 9,
    type: TypeName.Water,
    category: Category.Starter,
    abilities: {
      first: Ability.Torrent,
      hidden: Ability.RainDish
    },
    eggGroups: [EggGroup.Monster, EggGroup.Water1]
  }),
  new Pokemon({
    name: PokemonName.Caterpie,
    dex: 10,
    type: TypeName.Bug,
    abilities: {
      first: Ability.ShieldDust,
      hidden: Ability.RunAway
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Metapod,
    dex: 11,
    type: TypeName.Bug,
    abilities: {
      first: Ability.ShedSkin
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Butterfree,
    dex: 12,
    type: TypeName.Bug,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.CompoundEyes,
      hidden: Ability.TintedLens
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Weedle,
    dex: 13,
    type: TypeName.Bug,
    type2: TypeName.Poison,
    abilities: {
      first: Ability.ShieldDust,
      hidden: Ability.RunAway
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Kakuna,
    dex: 14,
    type: TypeName.Bug,
    type2: TypeName.Poison,
    abilities: {
      first: Ability.ShedSkin
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Beedrill,
    dex: 15,
    type: TypeName.Bug,
    type2: TypeName.Poison,
    abilities: {
      first: Ability.Swarm,
      hidden: Ability.Sniper
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Pidgey,
    dex: 16,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.KeenEye,
      second: Ability.TangledFeet,
      hidden: Ability.BigPecks
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Pidgeotto,
    dex: 17,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.KeenEye,
      second: Ability.TangledFeet,
      hidden: Ability.BigPecks
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Pidgeot,
    dex: 18,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.KeenEye,
      second: Ability.TangledFeet,
      hidden: Ability.BigPecks
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Rattata,
    dex: 19,
    type: TypeName.Normal,
    abilities: {
      first: Ability.RunAway,
      second: Ability.Guts,
      hidden: Ability.Hustle
    },
    eggGroups: [EggGroup.Field],
    forms: [
      {
        formName: PokemonName.AlolanRattata,
        type: TypeName.Dark,
        type2: TypeName.Normal,
        abilities: {
          first: Ability.Gluttony,
          second: Ability.Hustle,
          hidden: Ability.ThickFat
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Raticate,
    dex: 20,
    type: TypeName.Normal,
    abilities: {
      first: Ability.RunAway,
      second: Ability.Guts,
      hidden: Ability.Hustle
    },
    eggGroups: [EggGroup.Field],
    forms: [
      {
        formName: PokemonName.AlolanRaticate,
        type: TypeName.Dark,
        type2: TypeName.Normal,
        abilities: {
          first: Ability.Gluttony,
          second: Ability.Hustle,
          hidden: Ability.ThickFat
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Spearow,
    dex: 21,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.KeenEye,
      hidden: Ability.Sniper
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Fearow,
    dex: 22,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.KeenEye,
      hidden: Ability.Sniper
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Ekans,
    dex: 23,
    type: TypeName.Poison,
    abilities: {
      first: Ability.Intimidate,
      second: Ability.ShedSkin,
      hidden: Ability.Unnerve
    },
    eggGroups: [EggGroup.Field, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Arbok,
    dex: 24,
    type: TypeName.Poison,
    abilities: {
      first: Ability.Intimidate,
      second: Ability.ShedSkin,
      hidden: Ability.Unnerve
    },
    eggGroups: [EggGroup.Field, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Pikachu,
    dex: 25,
    type: TypeName.Electric,
    category: Category.Starter,
    abilities: {
      first: Ability.Static,
      hidden: Ability.LightningRod
    },
    eggGroups: [EggGroup.Field, EggGroup.Fairy]
  }),
  new Pokemon({
    name: PokemonName.Raichu,
    dex: 26,
    type: TypeName.Electric,
    abilities: {
      first: Ability.Static,
      hidden: Ability.LightningRod
    },
    eggGroups: [EggGroup.Field, EggGroup.Fairy],
    forms: [
      {
        formName: PokemonName.AlolanRaichu,
        type: TypeName.Electric,
        type2: TypeName.Psychic,
        category: Category.UniqueAbility,
        abilities: {
          first: Ability.SurgeSurfer
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Sandshrew,
    dex: 27,
    type: TypeName.Ground,
    abilities: {
      first: Ability.SandVeil,
      hidden: Ability.SandRush
    },
    eggGroups: [EggGroup.Field],
    forms: [
      {
        formName: PokemonName.AlolanSandshrew,
        type: TypeName.Ice,
        type2: TypeName.Steel,
        abilities: {
          first: Ability.SnowCloak,
          hidden: Ability.SlushRush
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Sandslash,
    dex: 28,
    type: TypeName.Ground,
    abilities: {
      first: Ability.SandVeil,
      hidden: Ability.SandRush
    },
    eggGroups: [EggGroup.Field],
    forms: [
      {
        formName: PokemonName.AlolanSandslash,
        type: TypeName.Ice,
        type2: TypeName.Steel,
        abilities: {
          first: Ability.SnowCloak,
          hidden: Ability.SlushRush
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.NidoranF,
    dex: 29,
    type: TypeName.Poison,
    abilities: {
      first: Ability.PoisonPoint,
      second: Ability.Rivalry,
      hidden: Ability.Hustle
    },
    eggGroups: [EggGroup.Monster, EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Nidorina,
    dex: 30,
    type: TypeName.Poison,
    abilities: {
      first: Ability.PoisonPoint,
      second: Ability.Rivalry,
      hidden: Ability.Hustle
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Nidoqueen,
    dex: 31,
    type: TypeName.Poison,
    type2: TypeName.Ground,
    abilities: {
      first: Ability.PoisonPoint,
      second: Ability.Rivalry,
      hidden: Ability.SheerForce
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.NidoranM,
    dex: 32,
    type: TypeName.Poison,
    abilities: {
      first: Ability.PoisonPoint,
      second: Ability.Rivalry,
      hidden: Ability.Hustle
    },
    eggGroups: [EggGroup.Monster, EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Nidorino,
    dex: 33,
    type: TypeName.Poison,
    abilities: {
      first: Ability.PoisonPoint,
      second: Ability.Rivalry,
      hidden: Ability.Hustle
    },
    eggGroups: [EggGroup.Monster, EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Nidoking,
    dex: 34,
    type: TypeName.Poison,
    type2: TypeName.Ground,
    abilities: {
      first: Ability.PoisonPoint,
      second: Ability.Rivalry,
      hidden: Ability.SheerForce
    },
    eggGroups: [EggGroup.Monster, EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Clefairy,
    dex: 35,
    type: TypeName.Fairy,
    abilities: {
      first: Ability.CuteCharm,
      second: Ability.MagicGuard,
      hidden: Ability.FriendGuard
    },
    eggGroups: [EggGroup.Fairy]
  }),
  new Pokemon({
    name: PokemonName.Clefable,
    dex: 36,
    type: TypeName.Fairy,
    abilities: {
      first: Ability.CuteCharm,
      second: Ability.MagicGuard,
      hidden: Ability.Unaware
    },
    eggGroups: [EggGroup.Fairy]
  }),
  new Pokemon({
    name: PokemonName.Vulpix,
    dex: 37,
    type: TypeName.Fire,
    abilities: {
      first: Ability.FlashFire,
      hidden: Ability.Drought
    },
    eggGroups: [EggGroup.Field],
    forms: [
      {
        formName: PokemonName.AlolanVulpix,
        type: TypeName.Ice,
        abilities: {
          first: Ability.SnowCloak,
          hidden: Ability.SnowWarning
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Ninetales,
    dex: 38,
    type: TypeName.Fire,
    abilities: {
      first: Ability.FlashFire,
      hidden: Ability.Drought
    },
    eggGroups: [EggGroup.Field],
    forms: [
      {
        formName: PokemonName.AlolanNinetales,
        type: TypeName.Ice,
        type2: TypeName.Fairy,
        abilities: {
          first: Ability.SnowCloak,
          hidden: Ability.SnowWarning
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Jigglypuff,
    dex: 39,
    type: TypeName.Normal,
    type2: TypeName.Fairy,
    abilities: {
      first: Ability.CuteCharm,
      second: Ability.Competitive,
      hidden: Ability.FriendGuard
    },
    eggGroups: [EggGroup.Fairy]
  }),
  new Pokemon({
    name: PokemonName.Wigglytuff,
    dex: 40,
    type: TypeName.Normal,
    type2: TypeName.Fairy,
    abilities: {
      first: Ability.CuteCharm,
      second: Ability.Competitive,
      hidden: Ability.Frisk
    },
    eggGroups: [EggGroup.Fairy]
  }),
  new Pokemon({
    name: PokemonName.Zubat,
    dex: 41,
    type: TypeName.Poison,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.InnerFocus,
      hidden: Ability.Infiltrator
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Golbat,
    dex: 42,
    type: TypeName.Poison,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.InnerFocus,
      hidden: Ability.Infiltrator
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Oddish,
    dex: 43,
    type: TypeName.Grass,
    type2: TypeName.Poison,
    abilities: {
      first: Ability.Chlorophyll,
      hidden: Ability.RunAway
    },
    eggGroups: [EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Gloom,
    dex: 44,
    type: TypeName.Grass,
    type2: TypeName.Poison,
    abilities: {
      first: Ability.Chlorophyll,
      hidden: Ability.Stench
    },
    eggGroups: [EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Vileplume,
    dex: 45,
    type: TypeName.Grass,
    type2: TypeName.Poison,
    abilities: {
      first: Ability.Chlorophyll,
      hidden: Ability.EffectSpore
    },
    eggGroups: [EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Paras,
    dex: 46,
    type: TypeName.Bug,
    type2: TypeName.Poison,
    abilities: {
      first: Ability.EffectSpore,
      second: Ability.DrySkin,
      hidden: Ability.Damp
    },
    eggGroups: [EggGroup.Bug, EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Parasect,
    dex: 47,
    type: TypeName.Bug,
    type2: TypeName.Grass,
    abilities: {
      first: Ability.EffectSpore,
      second: Ability.DrySkin,
      hidden: Ability.Damp
    },
    eggGroups: [EggGroup.Bug, EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Venonat,
    dex: 48,
    type: TypeName.Bug,
    type2: TypeName.Poison,
    abilities: {
      first: Ability.CompoundEyes,
      second: Ability.TintedLens,
      hidden: Ability.RunAway
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Venomoth,
    dex: 49,
    type: TypeName.Bug,
    type2: TypeName.Poison,
    abilities: {
      first: Ability.ShieldDust,
      second: Ability.TintedLens,
      hidden: Ability.WonderSkin
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Diglett,
    dex: 50,
    type: TypeName.Ground,
    abilities: {
      first: Ability.SandVeil,
      second: Ability.ArenaTrap,
      hidden: Ability.SandForce
    },
    eggGroups: [EggGroup.Field],
    forms: [
      {
        formName: PokemonName.AlolanDiglett,
        type: TypeName.Ground,
        type2: TypeName.Steel,
        abilities: {
          first: Ability.SandVeil,
          second: Ability.TanglingHair,
          hidden: Ability.SandForce
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Dugtrio,
    dex: 51,
    type: TypeName.Ground,
    abilities: {
      first: Ability.SandVeil,
      second: Ability.ArenaTrap,
      hidden: Ability.SandForce
    },
    eggGroups: [EggGroup.Field],
    forms: [
      {
        formName: PokemonName.AlolanDugtrio,
        type: TypeName.Ground,
        type2: TypeName.Steel,
        abilities: {
          first: Ability.SandVeil,
          second: Ability.TanglingHair,
          hidden: Ability.SandForce
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Meowth,
    dex: 52,
    type: TypeName.Normal,
    abilities: {
      first: Ability.Pickup,
      second: Ability.Technician,
      hidden: Ability.Unnerve
    },
    eggGroups: [EggGroup.Field],
    forms: [
      {
        formName: PokemonName.AlolanMeowth,
        type: TypeName.Dark,
        abilities: {
          first: Ability.Pickup,
          second: Ability.Technician,
          hidden: Ability.Rattled
        }
      },
      {
        formName: PokemonName.GalarianMeowth,
        type: TypeName.Steel,
        abilities: {
          first: Ability.Pickup,
          second: Ability.ToughClaws,
          hidden: Ability.Unnerve
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Persian,
    dex: 53,
    type: TypeName.Normal,
    abilities: {
      first: Ability.Limber,
      second: Ability.Technician,
      hidden: Ability.Unnerve
    },
    eggGroups: [EggGroup.Field],
    forms: [
      {
        formName: PokemonName.AlolanPersian,
        type: TypeName.Dark,
        abilities: {
          first: Ability.FurCoat,
          second: Ability.Technician,
          hidden: Ability.Rattled
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Psyduck,
    dex: 54,
    type: TypeName.Water,
    abilities: {
      first: Ability.Damp,
      second: Ability.CloudNine,
      hidden: Ability.SwiftSwim
    },
    eggGroups: [EggGroup.Water1, EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Golduck,
    dex: 55,
    type: TypeName.Water,
    abilities: {
      first: Ability.Damp,
      second: Ability.CloudNine,
      hidden: Ability.SwiftSwim
    },
    eggGroups: [EggGroup.Water1, EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Mankey,
    dex: 56,
    type: TypeName.Fighting,
    abilities: {
      first: Ability.VitalSpirit,
      second: Ability.AngerPoint,
      hidden: Ability.Defiant
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Primeape,
    dex: 57,
    type: TypeName.Fighting,
    abilities: {
      first: Ability.VitalSpirit,
      second: Ability.AngerPoint,
      hidden: Ability.Defiant
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Growlithe,
    dex: 58,
    type: TypeName.Fire,
    abilities: {
      first: Ability.Intimidate,
      second: Ability.FlashFire,
      hidden: Ability.Justified
    },
    eggGroups: [EggGroup.Field],
    forms: [
      {
        formName: PokemonName.HisuianGrowlithe,
        type: TypeName.Fire,
        type2: TypeName.Rock,
        abilities: {
          first: Ability.Intimidate,
          second: Ability.FlashFire,
          hidden: Ability.RockHead
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Arcanine,
    dex: 59,
    type: TypeName.Fire,
    abilities: {
      first: Ability.Intimidate,
      second: Ability.FlashFire,
      hidden: Ability.Justified
    },
    eggGroups: [EggGroup.Field],
    forms: [
      {
        formName: PokemonName.HisuianArcanine,
        type: TypeName.Fire,
        type2: TypeName.Rock,
        abilities: {
          first: Ability.Intimidate,
          second: Ability.FlashFire,
          hidden: Ability.RockHead
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Poliwag,
    dex: 60,
    type: TypeName.Water,
    abilities: {
      first: Ability.WaterAbsorb,
      second: Ability.Damp,
      hidden: Ability.SwiftSwim
    },
    eggGroups: [EggGroup.Water1]
  }),
  new Pokemon({
    name: PokemonName.Poliwhirl,
    dex: 61,
    type: TypeName.Water,
    abilities: {
      first: Ability.WaterAbsorb,
      second: Ability.Damp,
      hidden: Ability.SwiftSwim
    },
    eggGroups: [EggGroup.Water1]
  }),
  new Pokemon({
    name: PokemonName.Poliwrath,
    dex: 62,
    type: TypeName.Water,
    type2: TypeName.Fighting,
    abilities: {
      first: Ability.WaterAbsorb,
      second: Ability.Damp,
      hidden: Ability.SwiftSwim
    },
    eggGroups: [EggGroup.Water1]
  }),
  new Pokemon({
    name: PokemonName.Abra,
    dex: 63,
    type: TypeName.Psychic,
    abilities: {
      first: Ability.Synchronize,
      second: Ability.InnerFocus,
      hidden: Ability.MagicGuard
    },
    eggGroups: [EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Kadabra,
    dex: 64,
    type: TypeName.Psychic,
    abilities: {
      first: Ability.Synchronize,
      second: Ability.InnerFocus,
      hidden: Ability.MagicGuard
    },
    eggGroups: [EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Alakazam,
    dex: 65,
    type: TypeName.Psychic,
    abilities: {
      first: Ability.Synchronize,
      second: Ability.InnerFocus,
      hidden: Ability.MagicGuard
    },
    eggGroups: [EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Machop,
    dex: 66,
    type: TypeName.Fighting,
    abilities: {
      first: Ability.Guts,
      second: Ability.NoGuard,
      hidden: Ability.Steadfast
    },
    eggGroups: [EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Machoke,
    dex: 67,
    type: TypeName.Fighting,
    abilities: {
      first: Ability.Guts,
      second: Ability.NoGuard,
      hidden: Ability.Steadfast
    },
    eggGroups: [EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Machamp,
    dex: 68,
    type: TypeName.Fighting,
    abilities: {
      first: Ability.Guts,
      second: Ability.NoGuard,
      hidden: Ability.Steadfast
    },
    eggGroups: [EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Bellsprout,
    dex: 69,
    type: TypeName.Grass,
    type2: TypeName.Poison,
    abilities: {
      first: Ability.Chlorophyll,
      hidden: Ability.Gluttony
    },
    eggGroups: [EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Weepinbell,
    dex: 70,
    type: TypeName.Grass,
    type2: TypeName.Poison,
    abilities: {
      first: Ability.Chlorophyll,
      hidden: Ability.Gluttony
    },
    eggGroups: [EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Victreebel,
    dex: 71,
    type: TypeName.Grass,
    type2: TypeName.Poison,
    abilities: {
      first: Ability.Chlorophyll,
      hidden: Ability.Gluttony
    },
    eggGroups: [EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Tentacool,
    dex: 72,
    type: TypeName.Water,
    type2: TypeName.Poison,
    abilities: {
      first: Ability.ClearBody,
      second: Ability.LiquidOoze,
      hidden: Ability.RainDish
    },
    eggGroups: [EggGroup.Water3]
  }),
  new Pokemon({
    name: PokemonName.Tentacruel,
    dex: 73,
    type: TypeName.Water,
    type2: TypeName.Poison,
    abilities: {
      first: Ability.ClearBody,
      second: Ability.LiquidOoze,
      hidden: Ability.RainDish
    },
    eggGroups: [EggGroup.Water3]
  }),
  new Pokemon({
    name: PokemonName.Geodude,
    dex: 74,
    type: TypeName.Rock,
    type2: TypeName.Ground,
    abilities: {
      first: Ability.RockHead,
      second: Ability.Sturdy,
      hidden: Ability.SandVeil
    },
    eggGroups: [EggGroup.Mineral],
    forms: [
      {
        formName: PokemonName.AlolanGeodude,
        type: TypeName.Rock,
        type2: TypeName.Electric,
        abilities: {
          first: Ability.MagnetPull,
          second: Ability.Sturdy,
          hidden: Ability.Galvanize
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Graveler,
    dex: 75,
    type: TypeName.Rock,
    type2: TypeName.Ground,
    abilities: {
      first: Ability.RockHead,
      second: Ability.Sturdy,
      hidden: Ability.SandVeil
    },
    eggGroups: [EggGroup.Mineral],
    forms: [
      {
        formName: PokemonName.AlolanGraveler,
        type: TypeName.Rock,
        type2: TypeName.Electric,
        abilities: {
          first: Ability.MagnetPull,
          second: Ability.Sturdy,
          hidden: Ability.Galvanize
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Golem,
    dex: 76,
    type: TypeName.Rock,
    type2: TypeName.Ground,
    abilities: {
      first: Ability.RockHead,
      second: Ability.Sturdy,
      hidden: Ability.SandVeil
    },
    eggGroups: [EggGroup.Mineral],
    forms: [
      {
        formName: PokemonName.AlolanGolem,
        type: TypeName.Rock,
        type2: TypeName.Electric,
        abilities: {
          first: Ability.MagnetPull,
          second: Ability.Sturdy,
          hidden: Ability.Galvanize
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Ponyta,
    dex: 77,
    type: TypeName.Fire,
    abilities: {
      first: Ability.RunAway,
      second: Ability.FlashFire,
      hidden: Ability.FlameBody
    },
    eggGroups: [EggGroup.Field],
    forms: [
      {
        formName: PokemonName.GalarianPonyta,
        type: TypeName.Psychic,
        abilities: {
          first: Ability.RunAway,
          second: Ability.PastelVeil,
          hidden: Ability.Anticipation
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Rapidash,
    dex: 78,
    type: TypeName.Fire,
    abilities: {
      first: Ability.RunAway,
      second: Ability.FlashFire,
      hidden: Ability.FlameBody
    },
    eggGroups: [EggGroup.Field],
    forms: [
      {
        formName: PokemonName.GalarianRapidash,
        type: TypeName.Psychic,
        type2: TypeName.Fairy,
        abilities: {
          first: Ability.RunAway,
          second: Ability.PastelVeil,
          hidden: Ability.Anticipation
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Slowpoke,
    dex: 79,
    type: TypeName.Water,
    type2: TypeName.Psychic,
    abilities: {
      first: Ability.Oblivious,
      second: Ability.OwnTempo,
      hidden: Ability.Regenerator
    },
    eggGroups: [EggGroup.Monster, EggGroup.Water1],
    forms: [
      {
        formName: PokemonName.GalarianSlowpoke,
        type: TypeName.Psychic,
        abilities: {
          first: Ability.Gluttony,
          second: Ability.OwnTempo,
          hidden: Ability.Regenerator
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Slowbro,
    dex: 80,
    type: TypeName.Water,
    type2: TypeName.Psychic,
    abilities: {
      first: Ability.Oblivious,
      second: Ability.OwnTempo,
      hidden: Ability.Regenerator
    },
    eggGroups: [EggGroup.Monster, EggGroup.Water1],
    forms: [
      {
        formName: PokemonName.GalarianSlowpoke,
        type: TypeName.Poison,
        type2: TypeName.Psychic,
        abilities: {
          first: Ability.QuickDraw,
          second: Ability.OwnTempo,
          hidden: Ability.Regenerator
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Magnemite,
    dex: 81,
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
    name: PokemonName.Magneton,
    dex: 82,
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
    name: PokemonName.Farfetchd,
    dex: 83,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.KeenEye,
      second: Ability.InnerFocus,
      hidden: Ability.Defiant
    },
    eggGroups: [EggGroup.Flying, EggGroup.Field],
    forms: [
      {
        formName: PokemonName.GalarianFarfetchd,
        type: TypeName.Fighting,
        abilities: {
          first: Ability.Steadfast,
          hidden: Ability.Scrappy
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Doduo,
    dex: 84,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.RunAway,
      second: Ability.EarlyBird,
      hidden: Ability.TangledFeet
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Dodrio,
    dex: 85,
    type: TypeName.Normal,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.RunAway,
      second: Ability.EarlyBird,
      hidden: Ability.TangledFeet
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Seel,
    dex: 86,
    type: TypeName.Water,
    abilities: {
      first: Ability.ThickFat,
      second: Ability.Hydration,
      hidden: Ability.IceBody
    },
    eggGroups: [EggGroup.Water1, EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Dewgong,
    dex: 87,
    type: TypeName.Water,
    type2: TypeName.Ice,
    abilities: {
      first: Ability.ThickFat,
      second: Ability.Hydration,
      hidden: Ability.IceBody
    },
    eggGroups: [EggGroup.Water1, EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Grimer,
    dex: 88,
    type: TypeName.Poison,
    abilities: {
      first: Ability.Stench,
      second: Ability.StickyHold,
      hidden: Ability.PoisonTouch
    },
    eggGroups: [EggGroup.Amorphous],
    forms: [
      {
        formName: PokemonName.AlolanGrimer,
        type: TypeName.Poison,
        type2: TypeName.Dark,
        abilities: {
          first: Ability.PoisonTouch,
          second: Ability.Gluttony,
          hidden: Ability.PowerOfAlchemy
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Muk,
    dex: 89,
    type: TypeName.Poison,
    abilities: {
      first: Ability.Stench,
      second: Ability.StickyHold,
      hidden: Ability.PoisonTouch
    },
    eggGroups: [EggGroup.Amorphous],
    forms: [
      {
        formName: PokemonName.AlolanMuk,
        type: TypeName.Poison,
        type2: TypeName.Dark,
        abilities: {
          first: Ability.PoisonTouch,
          second: Ability.Gluttony,
          hidden: Ability.PowerOfAlchemy
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Shellder,
    dex: 90,
    type: TypeName.Water,
    abilities: {
      first: Ability.ShellArmor,
      second: Ability.SkillLink,
      hidden: Ability.Overcoat
    },
    eggGroups: [EggGroup.Water3]
  }),
  new Pokemon({
    name: PokemonName.Cloyster,
    dex: 91,
    type: TypeName.Water,
    type2: TypeName.Ice,
    abilities: {
      first: Ability.ShellArmor,
      second: Ability.SkillLink,
      hidden: Ability.Overcoat
    },
    eggGroups: [EggGroup.Water3]
  }),
  new Pokemon({
    name: PokemonName.Gastly,
    dex: 92,
    type: TypeName.Ghost,
    type2: TypeName.Poison,
    abilities: {
      first: Ability.Levitate
    },
    eggGroups: [EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Haunter,
    dex: 93,
    type: TypeName.Ghost,
    type2: TypeName.Poison,
    abilities: {
      first: Ability.Levitate
    },
    eggGroups: [EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Gengar,
    dex: 94,
    type: TypeName.Ghost,
    type2: TypeName.Poison,
    abilities: {
      first: Ability.CursedBody
    },
    eggGroups: [EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Onix,
    dex: 95,
    type: TypeName.Rock,
    type2: TypeName.Ground,
    abilities: {
      first: Ability.RockHead,
      second: Ability.Sturdy,
      hidden: Ability.WeakArmor
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Drowzee,
    dex: 96,
    type: TypeName.Psychic,
    abilities: {
      first: Ability.Insomnia,
      second: Ability.Forewarn,
      hidden: Ability.InnerFocus
    },
    eggGroups: [EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Hypno,
    dex: 97,
    type: TypeName.Psychic,
    abilities: {
      first: Ability.Insomnia,
      second: Ability.Forewarn,
      hidden: Ability.InnerFocus
    },
    eggGroups: [EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Krabby,
    dex: 98,
    type: TypeName.Water,
    abilities: {
      first: Ability.HyperCutter,
      second: Ability.ShellArmor,
      hidden: Ability.SheerForce
    },
    eggGroups: [EggGroup.Water3]
  }),
  new Pokemon({
    name: PokemonName.Kingler,
    dex: 99,
    type: TypeName.Water,
    abilities: {
      first: Ability.HyperCutter,
      second: Ability.ShellArmor,
      hidden: Ability.SheerForce
    },
    eggGroups: [EggGroup.Water3]
  }),
  new Pokemon({
    name: PokemonName.Voltorb,
    dex: 100,
    type: TypeName.Electric,
    abilities: {
      first: Ability.Soundproof,
      second: Ability.Static,
      hidden: Ability.Aftermath
    },
    eggGroups: [EggGroup.Mineral],
    forms: [
      {
        formName: PokemonName.HisuianVoltorb,
        type: TypeName.Electric,
        type2: TypeName.Grass
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Electrode,
    dex: 101,
    type: TypeName.Electric,
    abilities: {
      first: Ability.Soundproof,
      second: Ability.Static,
      hidden: Ability.Aftermath
    },
    eggGroups: [EggGroup.Mineral],
    forms: [
      {
        formName: PokemonName.HisuianElectrode,
        type: TypeName.Electric,
        type2: TypeName.Grass
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Exeggcute,
    dex: 102,
    type: TypeName.Grass,
    type2: TypeName.Psychic,
    abilities: {
      first: Ability.Chlorophyll,
      hidden: Ability.Harvest
    },
    eggGroups: [EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Exeggutor,
    dex: 103,
    type: TypeName.Grass,
    type2: TypeName.Psychic,
    abilities: {
      first: Ability.Chlorophyll,
      hidden: Ability.Harvest
    },
    eggGroups: [EggGroup.Grass],
    forms: [
      {
        formName: PokemonName.AlolanExeggutor,
        type: TypeName.Grass,
        type2: TypeName.Dragon,
        abilities: {
          first: Ability.Frisk,
          hidden: Ability.Harvest
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Cubone,
    dex: 104,
    type: TypeName.Ground,
    abilities: {
      first: Ability.RockHead,
      second: Ability.LightningRod,
      hidden: Ability.BattleArmor
    },
    eggGroups: [EggGroup.Monster]
  }),
  new Pokemon({
    name: PokemonName.Marowak,
    dex: 105,
    type: TypeName.Ground,
    abilities: {
      first: Ability.RockHead,
      second: Ability.LightningRod,
      hidden: Ability.BattleArmor
    },
    eggGroups: [EggGroup.Monster],
    forms: [
      {
        formName: PokemonName.AlolanMarowak,
        type: TypeName.Fire,
        type2: TypeName.Ghost,
        abilities: {
          first: Ability.CursedBody,
          second: Ability.LightningRod,
          hidden: Ability.RockHead
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Hitmonlee,
    dex: 106,
    type: TypeName.Fighting,
    abilities: {
      first: Ability.Limber,
      second: Ability.Reckless,
      hidden: Ability.Unburden
    },
    eggGroups: [EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Hitmonchan,
    dex: 107,
    type: TypeName.Fighting,
    abilities: {
      first: Ability.KeenEye,
      second: Ability.IronFist,
      hidden: Ability.InnerFocus
    },
    eggGroups: [EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Lickitung,
    dex: 108,
    type: TypeName.Normal,
    abilities: {
      first: Ability.OwnTempo,
      second: Ability.Oblivious,
      hidden: Ability.CloudNine
    },
    eggGroups: [EggGroup.Monster]
  }),
  new Pokemon({
    name: PokemonName.Koffing,
    dex: 109,
    type: TypeName.Poison,
    abilities: {
      first: Ability.Levitate,
      second: Ability.NeutralizingGas,
      hidden: Ability.Stench
    },
    eggGroups: [EggGroup.Amorphous]
  }),
  new Pokemon({
    name: PokemonName.Weezing,
    dex: 110,
    type: TypeName.Poison,
    abilities: {
      first: Ability.Levitate,
      second: Ability.NeutralizingGas,
      hidden: Ability.Stench
    },
    eggGroups: [EggGroup.Amorphous],
    forms: [
      {
        formName: PokemonName.GalarianWeezing,
        type: TypeName.Poison,
        type2: TypeName.Fairy,
        abilities: {
          first: Ability.Levitate,
          second: Ability.NeutralizingGas,
          hidden: Ability.MistySurge
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Rhyhorn,
    dex: 111,
    type: TypeName.Ground,
    type2: TypeName.Rock,
    abilities: {
      first: Ability.LightningRod,
      second: Ability.RockHead,
      hidden: Ability.Reckless
    },
    eggGroups: [EggGroup.Monster, EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Rhydon,
    dex: 112,
    type: TypeName.Ground,
    type2: TypeName.Rock,
    abilities: {
      first: Ability.LightningRod,
      second: Ability.RockHead,
      hidden: Ability.Reckless
    },
    eggGroups: [EggGroup.Monster, EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Chansey,
    dex: 113,
    type: TypeName.Normal,
    abilities: {
      first: Ability.NaturalCure,
      second: Ability.SereneGrace,
      hidden: Ability.Healer
    },
    eggGroups: [EggGroup.Fairy]
  }),
  new Pokemon({
    name: PokemonName.Tangela,
    dex: 114,
    type: TypeName.Grass,
    abilities: {
      first: Ability.Chlorophyll,
      second: Ability.LeafGuard,
      hidden: Ability.Regenerator
    },
    eggGroups: [EggGroup.Grass]
  }),
  new Pokemon({
    name: PokemonName.Kangaskhan,
    dex: 115,
    type: TypeName.Normal,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.EarlyBird,
      second: Ability.Scrappy,
      hidden: Ability.InnerFocus
    },
    eggGroups: [EggGroup.Monster]
  }),
  new Pokemon({
    name: PokemonName.Horsea,
    dex: 116,
    type: TypeName.Water,
    abilities: {
      first: Ability.SwiftSwim,
      second: Ability.Sniper,
      hidden: Ability.Damp
    },
    eggGroups: [EggGroup.Water1, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Seadra,
    dex: 117,
    type: TypeName.Water,
    abilities: {
      first: Ability.PoisonPoint,
      second: Ability.Sniper,
      hidden: Ability.Damp
    },
    eggGroups: [EggGroup.Water1, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Goldeen,
    dex: 118,
    type: TypeName.Water,
    abilities: {
      first: Ability.SwiftSwim,
      second: Ability.WaterVeil,
      hidden: Ability.LightningRod
    },
    eggGroups: [EggGroup.Water2]
  }),
  new Pokemon({
    name: PokemonName.Seaking,
    dex: 119,
    type: TypeName.Water,
    abilities: {
      first: Ability.SwiftSwim,
      second: Ability.WaterVeil,
      hidden: Ability.LightningRod
    },
    eggGroups: [EggGroup.Water2]
  }),
  new Pokemon({
    name: PokemonName.Staryu,
    dex: 120,
    type: TypeName.Water,
    abilities: {
      first: Ability.Illuminate,
      second: Ability.NaturalCure,
      hidden: Ability.Analytic
    },
    eggGroups: [EggGroup.Water3]
  }),
  new Pokemon({
    name: PokemonName.Starmie,
    dex: 121,
    type: TypeName.Water,
    type2: TypeName.Psychic,
    abilities: {
      first: Ability.Illuminate,
      second: Ability.NaturalCure,
      hidden: Ability.Analytic
    },
    eggGroups: [EggGroup.Water3]
  }),
  new Pokemon({
    name: PokemonName.MrMime,
    dex: 122,
    type: TypeName.Psychic,
    type2: TypeName.Fairy,
    abilities: {
      first: Ability.Soundproof,
      second: Ability.Filter,
      hidden: Ability.Technician
    },
    eggGroups: [EggGroup.HumanLike],
    forms: [
      {
        formName: PokemonName.GalarianMrMime,
        type: TypeName.Ice,
        type2: TypeName.Psychic,
        abilities: {
          first: Ability.VitalSpirit,
          second: Ability.ScreenCleaner,
          hidden: Ability.IceBody
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Scyther,
    dex: 123,
    type: TypeName.Bug,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.Swarm,
      second: Ability.Technician,
      hidden: Ability.Steadfast
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Jynx,
    dex: 124,
    type: TypeName.Ice,
    type2: TypeName.Psychic,
    abilities: {
      first: Ability.Oblivious,
      second: Ability.Forewarn,
      hidden: Ability.DrySkin
    },
    eggGroups: [EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Electabuzz,
    dex: 125,
    type: TypeName.Electric,
    abilities: {
      first: Ability.Static,
      hidden: Ability.VitalSpirit
    },
    eggGroups: [EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Magmar,
    dex: 126,
    type: TypeName.Fire,
    abilities: {
      first: Ability.FlameBody,
      hidden: Ability.VitalSpirit
    },
    eggGroups: [EggGroup.HumanLike]
  }),
  new Pokemon({
    name: PokemonName.Pinsir,
    dex: 127,
    type: TypeName.Bug,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.HyperCutter,
      second: Ability.MoldBreaker,
      hidden: Ability.Moxie
    },
    eggGroups: [EggGroup.Bug]
  }),
  new Pokemon({
    name: PokemonName.Tauros,
    dex: 128,
    type: TypeName.Normal,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.Intimidate,
      second: Ability.AngerPoint,
      hidden: Ability.SheerForce
    },
    eggGroups: [EggGroup.Field],
    forms: [
      {
        formName: PokemonName.PaldeanTaurosCombat,
        type: TypeName.Fighting,
        abilities: {
          first: Ability.Intimidate,
          second: Ability.AngerPoint,
          hidden: Ability.CudChew
        }
      },
      {
        formName: PokemonName.PaldeanTaurosBlaze,
        type: TypeName.Fighting,
        type2: TypeName.Fire,
        abilities: {
          first: Ability.Intimidate,
          second: Ability.AngerPoint,
          hidden: Ability.CudChew
        }
      },
      {
        formName: PokemonName.PaldeanTaurosAqua,
        type: TypeName.Fighting,
        type2: TypeName.Water,
        abilities: {
          first: Ability.Intimidate,
          second: Ability.AngerPoint,
          hidden: Ability.CudChew
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Magikarp,
    dex: 129,
    type: TypeName.Water,
    abilities: {
      first: Ability.SwiftSwim,
      hidden: Ability.Rattled
    },
    eggGroups: [EggGroup.Water2, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Gyarados,
    dex: 130,
    type: TypeName.Water,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.Intimidate,
      hidden: Ability.Moxie
    },
    eggGroups: [EggGroup.Water2, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Lapras,
    dex: 131,
    type: TypeName.Water,
    type2: TypeName.Ice,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.WaterAbsorb,
      second: Ability.ShellArmor,
      hidden: Ability.Hydration
    },
    eggGroups: [EggGroup.Monster, EggGroup.Water1]
  }),
  new Pokemon({
    name: PokemonName.Ditto,
    dex: 132,
    type: TypeName.Normal,
    category: Category.NonEvolve,
    abilities: {
      first: Ability.Limber,
      hidden: Ability.Imposter
    },
    eggGroups: [EggGroup.Ditto]
  }),
  new Pokemon({
    name: PokemonName.Eevee,
    dex: 133,
    type: TypeName.Normal,
    category: Category.Starter,
    abilities: {
      first: Ability.RunAway,
      second: Ability.Adaptability,
      hidden: Ability.Anticipation
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Vaporeon,
    dex: 134,
    type: TypeName.Water,
    abilities: {
      first: Ability.WaterAbsorb,
      hidden: Ability.Hydration
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Jolteon,
    dex: 135,
    type: TypeName.Electric,
    abilities: {
      first: Ability.VoltAbsorb,
      hidden: Ability.QuickFeet
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Flareon,
    dex: 136,
    type: TypeName.Fire,
    abilities: {
      first: Ability.FlashFire,
      hidden: Ability.Guts
    },
    eggGroups: [EggGroup.Field]
  }),
  new Pokemon({
    name: PokemonName.Porygon,
    dex: 137,
    type: TypeName.Normal,
    abilities: {
      first: Ability.Trace,
      second: Ability.Download,
      hidden: Ability.Analytic
    },
    eggGroups: [EggGroup.Mineral]
  }),
  new Pokemon({
    name: PokemonName.Omanyte,
    dex: 138,
    type: TypeName.Rock,
    type2: TypeName.Water,
    category: Category.Fossil,
    abilities: {
      first: Ability.SwiftSwim,
      second: Ability.ShellArmor,
      hidden: Ability.WeakArmor
    },
    eggGroups: [EggGroup.Water1, EggGroup.Water3]
  }),
  new Pokemon({
    name: PokemonName.Omastar,
    dex: 139,
    type: TypeName.Rock,
    type2: TypeName.Water,
    category: Category.Fossil,
    abilities: {
      first: Ability.SwiftSwim,
      second: Ability.ShellArmor,
      hidden: Ability.WeakArmor
    },
    eggGroups: [EggGroup.Water1, EggGroup.Water3]
  }),
  new Pokemon({
    name: PokemonName.Kabuto,
    dex: 140,
    type: TypeName.Rock,
    type2: TypeName.Water,
    category: Category.Fossil,
    abilities: {
      first: Ability.SwiftSwim,
      second: Ability.BattleArmor,
      hidden: Ability.WeakArmor
    },
    eggGroups: [EggGroup.Water1, EggGroup.Water3]
  }),
  new Pokemon({
    name: PokemonName.Kabutops,
    dex: 141,
    type: TypeName.Rock,
    type2: TypeName.Water,
    category: Category.Fossil,
    abilities: {
      first: Ability.SwiftSwim,
      second: Ability.BattleArmor,
      hidden: Ability.WeakArmor
    },
    eggGroups: [EggGroup.Water1, EggGroup.Water3]
  }),
  new Pokemon({
    name: PokemonName.Aerodactyl,
    dex: 142,
    type: TypeName.Rock,
    type2: TypeName.Flying,
    category: [Category.Fossil, Category.NonEvolve],
    abilities: {
      first: Ability.RockHead,
      second: Ability.Pressure,
      hidden: Ability.Unnerve
    },
    eggGroups: [EggGroup.Flying]
  }),
  new Pokemon({
    name: PokemonName.Snorlax,
    dex: 143,
    type: TypeName.Normal,
    abilities: {
      first: Ability.Immunity,
      second: Ability.ThickFat,
      hidden: Ability.Gluttony
    },
    eggGroups: [EggGroup.Monster]
  }),
  new Pokemon({
    name: PokemonName.Articuno,
    dex: 144,
    type: TypeName.Ice,
    type2: TypeName.Flying,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.Pressure,
      hidden: Ability.SnowCloak
    },
    eggGroups: [EggGroup.NoEggs],
    forms: [
      {
        formName: PokemonName.GalarianArticuno,
        type: TypeName.Psychic,
        type2: TypeName.Flying,
        category: [Category.Legendary, Category.NonEvolve],
        abilities: {
          first: Ability.Competitive
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Zapdos,
    dex: 145,
    type: TypeName.Electric,
    type2: TypeName.Flying,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.Pressure,
      hidden: Ability.Static
    },
    eggGroups: [EggGroup.NoEggs],
    forms: [
      {
        formName: PokemonName.GalarianZapdos,
        type: TypeName.Fighting,
        type2: TypeName.Flying,
        category: [Category.Legendary, Category.NonEvolve],
        abilities: {
          first: Ability.Defiant
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Moltres,
    dex: 146,
    type: TypeName.Fire,
    type2: TypeName.Flying,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.Pressure,
      hidden: Ability.FlameBody
    },
    eggGroups: [EggGroup.NoEggs],
    forms: [
      {
        formName: PokemonName.GalarianMoltres,
        type: TypeName.Dark,
        type2: TypeName.Flying,
        category: [Category.Legendary, Category.NonEvolve],
        abilities: {
          first: Ability.Berserk
        }
      }
    ]
  }),
  new Pokemon({
    name: PokemonName.Dratini,
    dex: 147,
    type: TypeName.Dragon,
    abilities: {
      first: Ability.ShedSkin,
      hidden: Ability.MarvelScale
    },
    eggGroups: [EggGroup.Water1, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Dragonair,
    dex: 148,
    type: TypeName.Dragon,
    abilities: {
      first: Ability.ShedSkin,
      hidden: Ability.MarvelScale
    },
    eggGroups: [EggGroup.Water1, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Dragonite,
    dex: 149,
    type: TypeName.Dragon,
    type2: TypeName.Flying,
    abilities: {
      first: Ability.InnerFocus,
      hidden: Ability.Multiscale
    },
    eggGroups: [EggGroup.Water1, EggGroup.Dragon]
  }),
  new Pokemon({
    name: PokemonName.Mewtwo,
    dex: 150,
    type: TypeName.Psychic,
    category: [Category.Legendary, Category.NonEvolve],
    abilities: {
      first: Ability.Pressure,
      hidden: Ability.Unnerve
    },
    eggGroups: [EggGroup.NoEggs]
  }),
  new Pokemon({
    name: PokemonName.Mew,
    dex: 151,
    type: TypeName.Psychic,
    category: [Category.Mythical, Category.NonEvolve],
    abilities: {
      first: Ability.Synchronize
    },
    eggGroups: [EggGroup.NoEggs]
  })
];
