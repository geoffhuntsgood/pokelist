import { describe, expect, test } from "vitest";
import { allPokemon, getByCategory, getByEggGroup, getByGen, getByType } from "../../api/pokemonApi";
import { Pokemon } from "../../classes";
import { Category, EggGroup, PokemonName, Type } from "../../enums";
import { gen1Pokemon } from "../../resources/pokemon/gen1Pokemon";

const checkList = (items: Pokemon[], length: number, first: PokemonName, last: PokemonName) => {
  expect(items).toHaveLength(length);
  expect(items[0]).toHaveProperty("name", first);
  expect(items.at(-1)).toHaveProperty("name", last);
};

describe("allPokemon tests", () => {
  test("Get all Pokemon", () => {
    expect(allPokemon).toHaveLength(1025);
  });
});

describe("getByGen tests", () => {
  test("Gen 1", () => {
    checkList(getByGen(1), 151, PokemonName.Bulbasaur, PokemonName.Mew);
  });

  test("Gen 2", () => {
    checkList(getByGen(2), 100, PokemonName.Chikorita, PokemonName.Celebi);
  });

  test("Gen 3", () => {
    checkList(getByGen(3), 135, PokemonName.Treecko, PokemonName.Deoxys);
  });

  test("Gen 4", () => {
    checkList(getByGen(4), 107, PokemonName.Turtwig, PokemonName.Arceus);
  });

  test("Gen 5", () => {
    checkList(getByGen(5), 156, PokemonName.Victini, PokemonName.Genesect);
  });

  test("Gen 6", () => {
    checkList(getByGen(6), 72, PokemonName.Chespin, PokemonName.Volcanion);
  });

  test("Gen 7", () => {
    checkList(getByGen(7), 88, PokemonName.Rowlet, PokemonName.Melmetal);
  });

  test("Gen 8", () => {
    checkList(getByGen(8), 96, PokemonName.Grookey, PokemonName.Enamorus);
  });

  test("Gen 9", () => {
    checkList(getByGen(9), 120, PokemonName.Sprigatito, PokemonName.Pecharunt);
  });

  test("Wrong gen", () => {
    expect(getByGen(44)).toHaveLength(0);
  });
});

describe("getByType tests", () => {
  test("Specified list", () => {
    checkList(getByType(Type.Bug, gen1Pokemon()), 12, PokemonName.Caterpie, PokemonName.Pinsir);
  });

  test("Default list", () => {
    checkList(getByType(Type.Bug), 92, PokemonName.Caterpie, PokemonName.SlitherWing);
  });
});

describe("getByCategory tests", () => {
  test("Specified list", () => {
    checkList(getByCategory(Category.Fossil, gen1Pokemon()), 5, PokemonName.Omanyte, PokemonName.Aerodactyl);
  });

  test("Default list", () => {
    checkList(getByCategory(Category.Fossil), 25, PokemonName.Omanyte, PokemonName.Arctovish);
  });
});

describe("getByEggGroup tests", () => {
  test("Specified list", () => {
    checkList(getByEggGroup(EggGroup.Amorphous, gen1Pokemon()), 7, PokemonName.Grimer, PokemonName.Weezing);
  });

  test("Default list", () => {
    checkList(getByEggGroup(EggGroup.Amorphous), 63, PokemonName.Grimer, PokemonName.Sinistcha);
  });
});
