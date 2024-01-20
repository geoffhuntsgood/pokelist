import { describe, expect, test } from "vitest";
import { PokemonName } from "../../enums";
import { allPokemonList, getNonEvolvers, getPokemonByGen, includeForms } from "../../resources/pokemon/pokemonLists";

describe("allPokemonList tests", () => {
  test("Get all Pokemon", () => {
    expect(allPokemonList).toHaveLength(1025);
  });
});

describe("getPokemonByGen tests", () => {
  test("Gen 1", () => {
    const gen1 = getPokemonByGen(1);
    expect(gen1).toHaveLength(151);
    expect(gen1[0]).toHaveProperty("name", PokemonName.Bulbasaur);
    expect(gen1[150]).toHaveProperty("name", PokemonName.Mew);
  });

  test("Gen 2", () => {
    const gen2 = getPokemonByGen(2);
    expect(gen2).toHaveLength(100);
    expect(gen2[0]).toHaveProperty("name", PokemonName.Chikorita);
    expect(gen2[99]).toHaveProperty("name", PokemonName.Celebi);
  });

  test("Gen 3", () => {
    const gen3 = getPokemonByGen(3);
    expect(gen3).toHaveLength(135);
    expect(gen3[0]).toHaveProperty("name", PokemonName.Treecko);
    expect(gen3[134]).toHaveProperty("name", PokemonName.Deoxys);
  });

  test("Gen 4", () => {
    const gen4 = getPokemonByGen(4);
    expect(gen4).toHaveLength(107);
    expect(gen4[0]).toHaveProperty("name", PokemonName.Turtwig);
    expect(gen4[106]).toHaveProperty("name", PokemonName.Arceus);
  });

  test("Gen 5", () => {
    const gen5 = getPokemonByGen(5);
    expect(gen5).toHaveLength(156);
    expect(gen5[0]).toHaveProperty("name", PokemonName.Victini);
    expect(gen5[155]).toHaveProperty("name", PokemonName.Genesect);
  });

  test("Gen 6", () => {
    const gen6 = getPokemonByGen(6);
    expect(gen6).toHaveLength(72);
    expect(gen6[0]).toHaveProperty("name", PokemonName.Chespin);
    expect(gen6[71]).toHaveProperty("name", PokemonName.Volcanion);
  });

  test("Gen 7", () => {
    const gen7 = getPokemonByGen(7);
    expect(gen7).toHaveLength(88);
    expect(gen7[0]).toHaveProperty("name", PokemonName.Rowlet);
    expect(gen7[87]).toHaveProperty("name", PokemonName.Melmetal);
  });

  test("Gen 8", () => {
    const gen8 = getPokemonByGen(8);
    expect(gen8).toHaveLength(96);
    expect(gen8[0]).toHaveProperty("name", PokemonName.Grookey);
    expect(gen8[95]).toHaveProperty("name", PokemonName.Enamorus);
  });

  test("Gen 9", () => {
    const gen9 = getPokemonByGen(9);
    expect(gen9).toHaveLength(120);
    expect(gen9[0]).toHaveProperty("name", PokemonName.Sprigatito);
    expect(gen9[119]).toHaveProperty("name", PokemonName.Pecharunt);
  });

  test("Wrong gen", () => {
    expect(getPokemonByGen(44)).toHaveLength(0);
  });
});

describe("getNonEvolvers tests", () => {
  test("With other categories", () => {
    const pokemon = getNonEvolvers(true);
    expect(pokemon).toHaveLength(205);
    expect(pokemon[0]).toHaveProperty("name", PokemonName.Farfetchd);
    expect(pokemon[204]).toHaveProperty("name", PokemonName.Pecharunt);
  });

  test("Without other categories", () => {
    const pokemon = getNonEvolvers(false);
    expect(pokemon).toHaveLength(87);
    expect(pokemon[0]).toHaveProperty("name", PokemonName.Farfetchd);
    expect(pokemon[86]).toHaveProperty("name", PokemonName.Tatsugiri);
  });
});

describe("includeForms tests", () => {
  test("With forms and no defaultForm", () => {
    const castforms = includeForms([...allPokemonList.filter(p => p.name === PokemonName.Castform)]);
    expect(castforms).toHaveLength(4);
    expect(castforms[0]).toHaveProperty("name", PokemonName.Castform);
    expect(castforms[1]).toHaveProperty("name", PokemonName.CastformSunny);
    expect(castforms[2]).toHaveProperty("name", PokemonName.CastformRainy);
    expect(castforms[3]).toHaveProperty("name", PokemonName.CastformSnowy);
  });

  test("With forms and defaultForm", () => {
    const basculins = includeForms([...allPokemonList.filter(p => p.name === PokemonName.Basculin)]);
    expect(basculins).toHaveLength(3);
    expect(basculins[0]).toHaveProperty("name", PokemonName.BasculinRed);
    expect(basculins[1]).toHaveProperty("name", PokemonName.BasculinBlue);
    expect(basculins[2]).toHaveProperty("name", PokemonName.BasculinWhite);
  });

  test("With neither", () => {
    const bulbasaur = includeForms([...allPokemonList.filter(p => p.name === PokemonName.Bulbasaur)]);
    expect(bulbasaur).toHaveLength(1);
    expect(bulbasaur[0]).toHaveProperty("name", PokemonName.Bulbasaur);
  });
});