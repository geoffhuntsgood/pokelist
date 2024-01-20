import { describe, expect, test } from "vitest";
import { Abilities, Form, Pokemon } from "../../classes/Pokemon";
import {
  Ability,
  Category,
  EggGroup,
  PokemonName,
  TypeName
} from "../../enums";

describe("Subclass initialization tests", () => {
  test("Initialize Abilities and Form via class constructor", () => {
    const pokemon = new Pokemon({
      name: PokemonName.Bulbasaur,
      dex: 1,
      type: TypeName.Grass,
      type2: TypeName.Poison,
      category: Category.Starter,
      abilities: new Abilities(
        Ability.Adaptability,
        Ability.Adaptability,
        Ability.Adaptability
      ),
      eggGroups: [EggGroup.NoEggs],
      forms: [
        new Form({
          formName: PokemonName.Bulbasaur,
          type: TypeName.Grass,
          type2: TypeName.Poison,
          category: Category.Starter,
          abilities: new Abilities(
            Ability.Adaptability,
            Ability.Adaptability,
            Ability.Adaptability
          )
        })
      ]
    });

    expect(pokemon.simpleName).toEqual("bulbasaur");
  });
});
