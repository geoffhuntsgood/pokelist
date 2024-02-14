import { mapNamesToPokemon } from "../../api/pokemonApi";
import { Pokemon } from "../../classes/Pokemon";
import { Category, EggGroup, PokemonName, Type } from "../../enums";
export const gen4Pokemon = (): Pokemon[] =>
  mapNamesToPokemon([
    {
      name: PokemonName.Turtwig,
      dex: 387,
      type: Type.Grass,
      category: Category.Starter,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Grass
    },
    {
      name: PokemonName.Grotle,
      dex: 388,
      type: Type.Grass,
      category: Category.Starter,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Grass
    },
    {
      name: PokemonName.Torterra,
      dex: 389,
      type: Type.Grass,
      type2: Type.Ground,
      category: Category.Starter,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Grass
    },
    {
      name: PokemonName.Chimchar,
      dex: 390,
      type: Type.Fire,
      category: Category.Starter,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.HumanLike
    },
    {
      name: PokemonName.Monferno,
      dex: 391,
      type: Type.Fire,
      type2: Type.Fighting,
      category: Category.Starter,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.HumanLike
    },
    {
      name: PokemonName.Infernape,
      dex: 392,
      type: Type.Fire,
      type2: Type.Fighting,
      category: Category.Starter,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.HumanLike
    },
    {
      name: PokemonName.Piplup,
      dex: 393,
      type: Type.Water,
      category: Category.Starter,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Field
    },
    {
      name: PokemonName.Prinplup,
      dex: 394,
      type: Type.Water,
      category: Category.Starter,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Field
    },
    {
      name: PokemonName.Empoleon,
      dex: 395,
      type: Type.Water,
      type2: Type.Steel,
      category: Category.Starter,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Field
    },
    {
      name: PokemonName.Starly,
      dex: 396,
      type: Type.Normal,
      type2: Type.Flying,
      eggGroup1: EggGroup.Flying
    },
    {
      name: PokemonName.Staravia,
      dex: 397,
      type: Type.Normal,
      type2: Type.Flying,
      eggGroup1: EggGroup.Flying
    },
    {
      name: PokemonName.Staraptor,
      dex: 398,
      type: Type.Normal,
      type2: Type.Flying,
      eggGroup1: EggGroup.Flying
    },
    {
      name: PokemonName.Bidoof,
      dex: 399,
      type: Type.Normal,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Field
    },
    {
      name: PokemonName.Bibarel,
      dex: 400,
      type: Type.Normal,
      type2: Type.Water,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Field
    },
    {
      name: PokemonName.Kricketot,
      dex: 401,
      type: Type.Bug,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Kricketune,
      dex: 402,
      type: Type.Bug,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Shinx,
      dex: 403,
      type: Type.Electric,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Luxio,
      dex: 404,
      type: Type.Electric,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Luxray,
      dex: 405,
      type: Type.Electric,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Budew,
      dex: 406,
      type: Type.Grass,
      type2: Type.Poison,
      category: Category.Baby,
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Roserade,
      dex: 407,
      type: Type.Grass,
      type2: Type.Poison,
      eggGroup1: EggGroup.Fairy,
      eggGroup2: EggGroup.Grass
    },
    {
      name: PokemonName.Cranidos,
      dex: 408,
      type: Type.Rock,
      category: Category.Fossil,
      eggGroup1: EggGroup.Monster
    },
    {
      name: PokemonName.Rampardos,
      dex: 409,
      type: Type.Rock,
      category: Category.Fossil,
      eggGroup1: EggGroup.Monster
    },
    {
      name: PokemonName.Shieldon,
      dex: 410,
      type: Type.Rock,
      type2: Type.Steel,
      category: Category.Fossil,
      eggGroup1: EggGroup.Monster
    },
    {
      name: PokemonName.Bastiodon,
      dex: 411,
      type: Type.Rock,
      type2: Type.Steel,
      category: Category.Fossil,
      eggGroup1: EggGroup.Monster
    },
    {
      name: PokemonName.Burmy,
      dex: 412,
      type: Type.Bug,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Wormadam,
      dex: 413,
      type: Type.Bug,
      eggGroup1: EggGroup.Bug,
      mustHaveForm: true,
      alternateForms: [
        {
          name: PokemonName.WormadamPlantCloak,
          type: Type.Bug,
          type2: Type.Grass
        },
        {
          name: PokemonName.WormadamSandyCloak,
          type: Type.Bug,
          type2: Type.Ground
        },
        {
          name: PokemonName.WormadamTrashCloak,
          type: Type.Bug,
          type2: Type.Steel
        }
      ]
    },
    {
      name: PokemonName.Mothim,
      dex: 414,
      type: Type.Bug,
      type2: Type.Flying,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Combee,
      dex: 415,
      type: Type.Bug,
      type2: Type.Flying,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Vespiquen,
      dex: 416,
      type: Type.Bug,
      type2: Type.Flying,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Pachirisu,
      dex: 417,
      type: Type.Electric,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.Fairy
    },
    {
      name: PokemonName.Buizel,
      dex: 418,
      type: Type.Water,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Field
    },
    {
      name: PokemonName.Floatzel,
      dex: 419,
      type: Type.Water,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Field
    },
    {
      name: PokemonName.Cherubi,
      dex: 420,
      type: Type.Grass,
      eggGroup1: EggGroup.Fairy,
      eggGroup2: EggGroup.Grass
    },
    {
      name: PokemonName.Cherrim,
      dex: 421,
      type: Type.Grass,
      eggGroup1: EggGroup.Fairy,
      eggGroup2: EggGroup.Grass
    },
    {
      name: PokemonName.Shellos,
      dex: 422,
      type: Type.Water,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Amorphous
    },
    {
      name: PokemonName.Gastrodon,
      dex: 423,
      type: Type.Water,
      type2: Type.Ground,
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Amorphous
    },
    {
      name: PokemonName.Ambipom,
      dex: 424,
      type: Type.Normal,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Drifloon,
      dex: 425,
      type: Type.Ghost,
      type2: Type.Flying,
      eggGroup1: EggGroup.Amorphous
    },
    {
      name: PokemonName.Drifblim,
      dex: 426,
      type: Type.Ghost,
      type2: Type.Flying,
      eggGroup1: EggGroup.Amorphous
    },
    {
      name: PokemonName.Buneary,
      dex: 427,
      type: Type.Normal,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.HumanLike
    },
    {
      name: PokemonName.Lopunny,
      dex: 428,
      type: Type.Normal,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.HumanLike,
      megaEvolutions: [
        {
          name: PokemonName.MegaLopunny,
          type: Type.Normal,
          type2: Type.Fighting
        }
      ]
    },
    {
      name: PokemonName.Mismagius,
      dex: 429,
      type: Type.Ghost,
      eggGroup1: EggGroup.Amorphous
    },
    {
      name: PokemonName.Honchkrow,
      dex: 430,
      type: Type.Dark,
      type2: Type.Flying,
      eggGroup1: EggGroup.Flying
    },
    {
      name: PokemonName.Glameow,
      dex: 431,
      type: Type.Normal,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Purugly,
      dex: 432,
      type: Type.Normal,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Chingling,
      dex: 433,
      type: Type.Psychic,
      category: Category.Baby,
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Stunky,
      dex: 434,
      type: Type.Poison,
      type2: Type.Dark,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Skuntank,
      dex: 435,
      type: Type.Poison,
      type2: Type.Dark,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Bronzor,
      dex: 436,
      type: Type.Steel,
      type2: Type.Psychic,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Bronzong,
      dex: 437,
      type: Type.Steel,
      type2: Type.Psychic,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Bonsly,
      dex: 438,
      type: Type.Rock,
      category: Category.Baby,
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.MimeJr,
      dex: 439,
      type: Type.Psychic,
      type2: Type.Fairy,
      category: Category.Baby,
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Happiny,
      dex: 440,
      type: Type.Normal,
      category: Category.Baby,
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Chatot,
      dex: 441,
      type: Type.Normal,
      type2: Type.Flying,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Flying
    },
    {
      name: PokemonName.Spiritomb,
      dex: 442,
      type: Type.Ghost,
      type2: Type.Dark,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Amorphous
    },
    {
      name: PokemonName.Gible,
      dex: 443,
      type: Type.Dragon,
      type2: Type.Ground,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Gabite,
      dex: 444,
      type: Type.Dragon,
      type2: Type.Ground,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Dragon
    },
    {
      name: PokemonName.Garchomp,
      dex: 445,
      type: Type.Dragon,
      type2: Type.Ground,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Dragon,
      megaEvolutions: [
        {
          name: PokemonName.MegaGarchomp,
          type: Type.Dragon,
          type2: Type.Ground
        }
      ]
    },
    {
      name: PokemonName.Munchlax,
      dex: 446,
      type: Type.Normal,
      category: Category.Baby,
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Riolu,
      dex: 447,
      type: Type.Fighting,
      category: Category.Baby,
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Lucario,
      dex: 448,
      type: Type.Fighting,
      type2: Type.Steel,
      eggGroup1: EggGroup.Field,
      eggGroup2: EggGroup.HumanLike,
      megaEvolutions: [
        {
          name: PokemonName.MegaLucario,
          type: Type.Fighting,
          type2: Type.Steel
        }
      ]
    },
    {
      name: PokemonName.Hippopotas,
      dex: 449,
      type: Type.Ground,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Hippowdon,
      dex: 450,
      type: Type.Ground,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Skorupi,
      dex: 451,
      type: Type.Poison,
      type2: Type.Bug,
      eggGroup1: EggGroup.Bug,
      eggGroup2: EggGroup.Water3
    },
    {
      name: PokemonName.Drapion,
      dex: 452,
      type: Type.Poison,
      type2: Type.Dark,
      eggGroup1: EggGroup.Bug,
      eggGroup2: EggGroup.Water3
    },
    {
      name: PokemonName.Croagunk,
      dex: 453,
      type: Type.Poison,
      type2: Type.Fighting,
      eggGroup1: EggGroup.HumanLike
    },
    {
      name: PokemonName.Toxicroak,
      dex: 454,
      type: Type.Poison,
      type2: Type.Fighting,
      eggGroup1: EggGroup.HumanLike
    },
    {
      name: PokemonName.Carnivine,
      dex: 455,
      type: Type.Grass,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Grass
    },
    {
      name: PokemonName.Finneon,
      dex: 456,
      type: Type.Water,
      eggGroup1: EggGroup.Water2
    },
    {
      name: PokemonName.Lumineon,
      dex: 457,
      type: Type.Water,
      eggGroup1: EggGroup.Water2
    },
    {
      name: PokemonName.Mantyke,
      dex: 458,
      type: Type.Water,
      type2: Type.Flying,
      category: Category.Baby,
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Snover,
      dex: 459,
      type: Type.Grass,
      type2: Type.Ice,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Grass
    },
    {
      name: PokemonName.Abomasnow,
      dex: 460,
      type: Type.Grass,
      type2: Type.Ice,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Grass,
      megaEvolutions: [
        {
          name: PokemonName.MegaAbomasnow,
          type: Type.Grass,
          type2: Type.Ice
        }
      ]
    },
    {
      name: PokemonName.Weavile,
      dex: 461,
      type: Type.Dark,
      type2: Type.Ice,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Magnezone,
      dex: 462,
      type: Type.Electric,
      type2: Type.Steel,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Lickilicky,
      dex: 463,
      type: Type.Normal,
      eggGroup1: EggGroup.Monster
    },
    {
      name: PokemonName.Rhyperior,
      dex: 464,
      type: Type.Ground,
      type2: Type.Rock,
      eggGroup1: EggGroup.Monster,
      eggGroup2: EggGroup.Field
    },
    {
      name: PokemonName.Tangrowth,
      dex: 465,
      type: Type.Grass,
      eggGroup1: EggGroup.Grass
    },
    {
      name: PokemonName.Electivire,
      dex: 466,
      type: Type.Electric,
      eggGroup1: EggGroup.HumanLike
    },
    {
      name: PokemonName.Magmortar,
      dex: 467,
      type: Type.Fire,
      eggGroup1: EggGroup.HumanLike
    },
    {
      name: PokemonName.Togekiss,
      dex: 468,
      type: Type.Fairy,
      type2: Type.Flying,
      eggGroup1: EggGroup.Flying,
      eggGroup2: EggGroup.Fairy
    },
    {
      name: PokemonName.Yanmega,
      dex: 469,
      type: Type.Bug,
      type2: Type.Flying,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Leafeon,
      dex: 470,
      type: Type.Grass,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Glaceon,
      dex: 471,
      type: Type.Ice,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.Gliscor,
      dex: 472,
      type: Type.Ground,
      type2: Type.Flying,
      eggGroup1: EggGroup.Bug
    },
    {
      name: PokemonName.Mamoswine,
      dex: 473,
      type: Type.Ice,
      type2: Type.Ground,
      eggGroup1: EggGroup.Field
    },
    {
      name: PokemonName.PorygonZ,
      dex: 474,
      type: Type.Normal,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Gallade,
      dex: 475,
      type: Type.Psychic,
      type2: Type.Fighting,
      eggGroup1: EggGroup.HumanLike,
      eggGroup2: EggGroup.Amorphous,
      megaEvolutions: [
        {
          name: PokemonName.MegaGallade,
          type: Type.Psychic,
          type2: Type.Fighting
        }
      ]
    },
    {
      name: PokemonName.Probopass,
      dex: 476,
      type: Type.Rock,
      type2: Type.Steel,
      eggGroup1: EggGroup.Mineral
    },
    {
      name: PokemonName.Dusknoir,
      dex: 477,
      type: Type.Ghost,
      eggGroup1: EggGroup.Amorphous
    },
    {
      name: PokemonName.Froslass,
      dex: 478,
      type: Type.Ice,
      type2: Type.Ghost,
      eggGroup1: EggGroup.Fairy,
      eggGroup2: EggGroup.Mineral
    },
    {
      name: PokemonName.Rotom,
      dex: 479,
      type: Type.Electric,
      type2: Type.Ghost,
      category: Category.NonEvolving,
      eggGroup1: EggGroup.Amorphous,
      alternateForms: [
        {
          name: PokemonName.RotomHeat,
          type: Type.Electric,
          type2: Type.Fire
        },
        {
          name: PokemonName.RotomWash,
          type: Type.Electric,
          type2: Type.Water
        },
        {
          name: PokemonName.RotomFrost,
          type: Type.Electric,
          type2: Type.Ice
        },
        {
          name: PokemonName.RotomFan,
          type: Type.Electric,
          type2: Type.Flying
        },
        {
          name: PokemonName.RotomMow,
          type: Type.Electric,
          type2: Type.Grass
        }
      ]
    },
    {
      name: PokemonName.Uxie,
      dex: 480,
      type: Type.Psychic,
      category: [Category.NonEvolving, Category.Legendary],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Mesprit,
      dex: 481,
      type: Type.Psychic,
      category: [Category.NonEvolving, Category.Legendary],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Azelf,
      dex: 482,
      type: Type.Psychic,
      category: [Category.NonEvolving, Category.Legendary],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Dialga,
      dex: 483,
      type: Type.Steel,
      type2: Type.Dragon,
      category: [Category.NonEvolving, Category.Legendary],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Palkia,
      dex: 484,
      type: Type.Water,
      type2: Type.Dragon,
      category: [Category.NonEvolving, Category.Legendary],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Heatran,
      dex: 485,
      type: Type.Fire,
      type2: Type.Steel,
      category: [Category.NonEvolving, Category.Legendary],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Regigigas,
      dex: 486,
      type: Type.Normal,
      category: [Category.NonEvolving, Category.Legendary],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Giratina,
      dex: 487,
      type: Type.Ghost,
      type2: Type.Dragon,
      category: [Category.NonEvolving, Category.Legendary],
      eggGroup1: EggGroup.NoEggs,
      alternateForms: [
        {
          name: PokemonName.GiratinaOrigin,
          type: Type.Ghost,
          type2: Type.Dragon
        }
      ]
    },
    {
      name: PokemonName.Cresselia,
      dex: 488,
      type: Type.Psychic,
      category: [Category.NonEvolving, Category.Legendary],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Phione,
      dex: 489,
      type: Type.Water,
      category: [Category.NonEvolving, Category.Mythical],
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Fairy
    },
    {
      name: PokemonName.Manaphy,
      dex: 490,
      type: Type.Water,
      category: [Category.NonEvolving, Category.Mythical],
      eggGroup1: EggGroup.Water1,
      eggGroup2: EggGroup.Fairy
    },
    {
      name: PokemonName.Darkrai,
      dex: 491,
      type: Type.Dark,
      category: [Category.NonEvolving, Category.Mythical],
      eggGroup1: EggGroup.NoEggs
    },
    {
      name: PokemonName.Shaymin,
      dex: 492,
      type: Type.Grass,
      category: [Category.NonEvolving, Category.Mythical],
      eggGroup1: EggGroup.NoEggs,
      mustHaveForm: true,
      alternateForms: [
        {
          name: PokemonName.ShayminLand,
          type: Type.Grass,
          category: [Category.NonEvolving, Category.Mythical]
        },
        {
          name: PokemonName.ShayminSky,
          type: Type.Grass,
          type2: Type.Flying,
          category: [Category.NonEvolving, Category.Mythical]
        }
      ]
    },
    {
      name: PokemonName.Arceus,
      dex: 493,
      type: Type.Normal,
      category: [Category.NonEvolving, Category.Mythical],
      eggGroup1: EggGroup.NoEggs
    }
  ]);
