import { Generation, Pokemon } from "../../classes";
import { pgen1 } from "./pgen1";
import { pgen2 } from "./pgen2";
import { pgen3 } from "./pgen3";
import { pgen4 } from "./pgen4";
import { pgen5 } from "./pgen5";
import { pgen6 } from "./pgen6";
import { pgen7 } from "./pgen7";
import { pgen8 } from "./pgen8";
import { pgen9 } from "./pgen9";

export const allPokemonGens: Generation[] = [
  pgen1,
  pgen2,
  pgen3,
  pgen4,
  pgen5,
  pgen6,
  pgen7,
  pgen8,
  pgen9
];

const allPokemon = [
  ...(pgen1.pokemon || []),
  ...(pgen2.pokemon || []),
  ...(pgen3.pokemon || []),
  ...(pgen4.pokemon || []),
  ...(pgen5.pokemon || []),
  ...(pgen6.pokemon || []),
  ...(pgen7.pokemon || []),
  ...(pgen8.pokemon || []),
  ...(pgen9.pokemon || [])
];

export const allPokemonNoVariants: Pokemon[] = allPokemon.filter(
  (p: Pokemon) => !p.isVariant
);

export const allPokemonWithVariants: Pokemon[] = allPokemon.filter(
  (p: Pokemon) => !p.noDefaultForm
);
