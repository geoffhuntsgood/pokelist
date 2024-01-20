import { Form, Pokemon } from "../../classes/Pokemon";
import { Category } from "../../enums";
import { gen1Pokemon } from "./gen1Pokemon";
import { gen2Pokemon } from "./gen2Pokemon";
import { gen3Pokemon } from "./gen3Pokemon";
import { gen4Pokemon } from "./gen4Pokemon";
import { gen5Pokemon } from "./gen5Pokemon";
import { gen6Pokemon } from "./gen6Pokemon";
import { gen7Pokemon } from "./gen7Pokemon";
import { gen8Pokemon } from "./gen8Pokemon";
import { gen9Pokemon } from "./gen9Pokemon";

/**
 * Returns the list of all current Pokemon.
 */
export const allPokemonList: Pokemon[] = [
  ...gen1Pokemon,
  ...gen2Pokemon,
  ...gen3Pokemon,
  ...gen4Pokemon,
  ...gen5Pokemon,
  ...gen6Pokemon,
  ...gen7Pokemon,
  ...gen8Pokemon,
  ...gen9Pokemon
];

/**
 * Returns the Pokemon of the specified generation
 * @param {number} gen the provided generation (1-9 valid)
 */
export const getPokemonByGen = (gen: number): Pokemon[] => {
  switch (gen) {
    case 1:
      return gen1Pokemon;
    case 2:
      return gen2Pokemon;
    case 3:
      return gen3Pokemon;
    case 4:
      return gen4Pokemon;
    case 5:
      return gen5Pokemon;
    case 6:
      return gen6Pokemon;
    case 7:
      return gen7Pokemon;
    case 8:
      return gen8Pokemon;
    case 9:
      return gen9Pokemon;
    default:
      return [];
  }
};

/**
 * Returns the list of Pokemon that are not part of an evolutionary line.
 * @param {boolean} includeOtherCategories Whether to include non-evolution Pokemon that match other categories (Legendary, etc.)
 */
export const getNonEvolvers = (includeOtherCategories: boolean): Pokemon[] => {
  if (includeOtherCategories) {
    return allPokemonList.filter((pokemon: Pokemon) => pokemon.category?.includes(Category.NonEvolve));
  }
  return allPokemonList.filter((pokemon: Pokemon) => pokemon.category === Category.NonEvolve);
};

/**
 * Returns the specified list of Pokemon with forms (regional/variants/etc.) included as additional Pokemon.
 * @param {Pokemon[]} pokemonList The provided list of Pokemon
 */
export const includeForms = (pokemonList: Pokemon[]): Pokemon[] => {
  return pokemonList.flatMap((pokemon: Pokemon) => {
    let toMap: Pokemon[] = [];
    let index = pokemonList.indexOf(pokemon) + 1;

    const original = pokemon.defaultForm ? new Pokemon({ ...pokemon, name: pokemon.defaultForm }) : pokemon;
    toMap.splice(index, 0, original);
    index++;

    const forms = pokemon.forms || [];
    forms.forEach((form: Form) => {
      toMap.splice(index, 0, new Pokemon({
        name: form.formName,
        dex: pokemon.dex,
        type: form.type || pokemon.type,
        type2: form.type2 || pokemon.type2,
        category: form.category,
        abilities: form.abilities || pokemon.abilities,
        eggGroups: pokemon.eggGroups
      }));
      index++;
    });
    return toMap;
  });
};
