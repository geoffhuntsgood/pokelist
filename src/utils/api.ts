import { Ability, Generation, Move, Pokemon } from "../classes";
import { MoveCategory, PokemonCategory, Type } from "../enums";
import { allAbilities, allAbilityGens } from "../lists/abilities";
import { allMoveGens, allMoves } from "../lists/moves";
import {
  allPokemonGens,
  allPokemonNoVariants,
  allPokemonWithVariants
} from "../lists/pokemon";

// Pokemon
export const getPokemonByGen = (g: string): Pokemon[] => {
  if (g === "All") {
    return allPokemonNoVariants;
  }

  const pokeGen = allPokemonGens.filter((gen: Generation) => {
    return gen.num === Number(g);
  });

  if (pokeGen.length === 0 || !pokeGen[0].pokemon) {
    return [];
  } else {
    return pokeGen[0].pokemon.filter((p: Pokemon) => {
      return !p.isVariant;
    });
  }
};

export const getPokemonByType = (t: Type): Pokemon[] => {
  return allPokemonWithVariants.filter((p: Pokemon) => {
    return !p.noDefaultForm && (p.type === t || p.type2 === t);
  });
};

export const getPokemonByCat = (c: PokemonCategory): Pokemon[] => {
  return allPokemonNoVariants.filter((p: Pokemon) => {
    return p.category === c || p.category2 === c;
  });
};

// Moves
export const getMovesByGen = (g: string): Move[] => {
  if (g === "All") {
    return allMoves;
  }

  const moveGen = allMoveGens.filter((gen: Generation) => {
    return gen.num === Number(g);
  });

  if (moveGen.length === 0 || !moveGen[0].moves) {
    return [];
  } else {
    return moveGen[0].moves;
  }
};

export const getMovesByType = (t: Type): Move[] => {
  return allMoves.filter((m: Move) => {
    return m.type === t;
  });
};

export const getMovesByCat = (c: MoveCategory): Move[] => {
  return allMoves.filter((m: Move) => {
    return m.cat === c;
  });
};

// Abilities
export const getAbilitiesByGen = (g: string): Ability[] => {
  if (g === "All") {
    return allAbilities;
  }

  const abilGen = allAbilityGens.filter((gen: Generation) => {
    return gen.num === Number(g);
  });

  if (abilGen.length === 0 || !abilGen[0].abilities) {
    return [];
  } else {
    return abilGen[0].abilities;
  }
};
