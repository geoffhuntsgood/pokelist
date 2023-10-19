import { Move, Pokemon } from "../classes";
import { AbilityName } from "../enums";

export const sanitizeInput = (input: string) => input.replace("/^[a-zA-Z0-9]$/g", "").toLowerCase();

export const checkAbility = (pokemon: Pokemon, ability: AbilityName) => {
  return (
    pokemon.abilities.first === ability || pokemon.abilities.second === ability || pokemon.abilities.hidden === ability
  );
};

export const getTypeString = (pokemon: Pokemon) => {
  const firstType = Array.isArray(pokemon.type) ? "Multiple" : `${pokemon.type}`;
  let secondType;
  if (pokemon.type2) {
    if (Array.isArray(pokemon.type2)) {
      secondType = "Multiple";
    } else {
      secondType = `${pokemon.type2}`;
    }
  }

  return `${firstType}${secondType ? `/${secondType}` : ""}`;
};

export const getMoveTypeString = (move: Move) => {
  return Array.isArray(move.type) ? "Multiple" : `${move.type}`;
};

export const getEggGroupString = (pokemon: Pokemon) => {
  return `${pokemon.eggGroups.group1}${pokemon.eggGroups.group2 ? `/${pokemon.eggGroups.group2}` : ""}`;
};
