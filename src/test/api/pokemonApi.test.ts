import { describe, expect, test } from "vitest";
import * as api from "../../api/pokemonApi";
import { Pokemon } from "../../classes";
import { Category, EggGroup, PokemonName, Type } from "../../enums";
import { gen1Pokemon } from "../../resources/pokemon/gen1Pokemon";
import { gen3Pokemon } from "../../resources/pokemon/gen3Pokemon";
import { RegionName } from "../../enums/RegionName";

const checkList = (items: Pokemon[], length: number, first: PokemonName, last: PokemonName) => {
  expect(items).toHaveLength(length);
  expect(items[0]).toHaveProperty("name", first);
  expect(items.at(-1)).toHaveProperty("name", last);
};

describe("allPokemon tests", () => {
  test("Get all Pokemon", () => {
    expect(api.allPokemon).toHaveLength(1025);
  });
});

describe("getByGen tests", () => {
  test("Gen 1", () => {
    checkList(api.getByGen(1), 151, PokemonName.Bulbasaur, PokemonName.Mew);
  });

  test("Gen 2", () => {
    checkList(api.getByGen(2), 100, PokemonName.Chikorita, PokemonName.Celebi);
  });

  test("Gen 3", () => {
    checkList(api.getByGen(3), 135, PokemonName.Treecko, PokemonName.Deoxys);
  });

  test("Gen 4", () => {
    checkList(api.getByGen(4), 107, PokemonName.Turtwig, PokemonName.Arceus);
  });

  test("Gen 5", () => {
    checkList(api.getByGen(5), 156, PokemonName.Victini, PokemonName.Genesect);
  });

  test("Gen 6", () => {
    checkList(api.getByGen(6), 72, PokemonName.Chespin, PokemonName.Volcanion);
  });

  test("Gen 7", () => {
    checkList(api.getByGen(7), 88, PokemonName.Rowlet, PokemonName.Melmetal);
  });

  test("Gen 8", () => {
    checkList(api.getByGen(8), 96, PokemonName.Grookey, PokemonName.Enamorus);
  });

  test("Gen 9", () => {
    checkList(api.getByGen(9), 120, PokemonName.Sprigatito, PokemonName.Pecharunt);
  });

  test("Wrong gen", () => {
    expect(api.getByGen(44)).toHaveLength(0);
  });
});

describe("getByType tests", () => {
  test("Specified list", () => {
    checkList(api.getByType(Type.Bug, gen1Pokemon()), 12, PokemonName.Caterpie, PokemonName.Pinsir);
  });

  test("Default list", () => {
    checkList(api.getByType(Type.Bug), 92, PokemonName.Caterpie, PokemonName.SlitherWing);
  });
});

describe("getByCategory tests", () => {
  test("Specified list", () => {
    checkList(api.getByCategory(Category.Fossil, gen1Pokemon()), 5, PokemonName.Omanyte, PokemonName.Aerodactyl);
  });

  test("Default list", () => {
    checkList(api.getByCategory(Category.Fossil), 25, PokemonName.Omanyte, PokemonName.Arctovish);
  });
});

describe("getByEggGroup tests", () => {
  test("Specified list", () => {
    checkList(api.getByEggGroup(EggGroup.Amorphous, gen1Pokemon()), 7, PokemonName.Grimer, PokemonName.Weezing);
  });

  test("Default list", () => {
    checkList(api.getByEggGroup(EggGroup.Amorphous), 63, PokemonName.Grimer, PokemonName.Sinistcha);
  });
});

describe("getHasAlterateForm tests", () => {
  test("Specified list", () => {
    checkList(api.getHasAlternateForm(gen3Pokemon()), 3, PokemonName.Castform, PokemonName.Groudon);
  });

  test("Default list", () => {
    checkList(api.getHasAlternateForm(), 34, PokemonName.Castform, PokemonName.Terapagos);
  });
});

describe("getHasRegionalVariant tests", () => {
  test("Specified list, no specific region", () => {
    checkList(api.getHasRegionalVariant(undefined, gen1Pokemon()), 33, PokemonName.Rattata, PokemonName.Moltres);
  });

  test("Default list, provided region", () => {
    checkList(api.getHasRegionalVariant(RegionName.Paldean), 2, PokemonName.Tauros, PokemonName.Wooper); 
  });
});

describe("getHasMegaEvolution tests", () => {
  test("Specified list", () => {
    checkList(api.getHasMegaEvolution(gen1Pokemon()), 13, PokemonName.Venusaur, PokemonName.Mewtwo);
  });

  test("Default list", () => {
    checkList(api.getHasMegaEvolution(), 46, PokemonName.Venusaur, PokemonName.Diancie);
  });
});