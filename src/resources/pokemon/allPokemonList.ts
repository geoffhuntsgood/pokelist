import { Pokemon } from "../../classes/Pokemon";
import { gen1Pokemon } from "./gen1Pokemon";
import { gen2Pokemon } from "./gen2Pokemon";
import { gen3Pokemon } from "./gen3Pokemon";
import { gen4Pokemon } from "./gen4Pokemon";
import { gen5Pokemon } from "./gen5Pokemon";
import { gen6Pokemon } from "./gen6Pokemon";
import { gen7Pokemon } from "./gen7Pokemon";
import { gen8Pokemon } from "./gen8Pokemon";
import { gen9Pokemon } from "./gen9Pokemon";

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
