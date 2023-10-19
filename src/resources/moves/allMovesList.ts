import { gMaxMoves } from "./gMaxMoves";
import { gen1Moves } from "./gen1Moves";
import { gen2Moves } from "./gen2Moves";
import { gen3Moves } from "./gen3Moves";
import { gen4Moves } from "./gen4Moves";
import { gen5Moves } from "./gen5Moves";
import { gen6Moves } from "./gen6Moves";
import { gen7Moves } from "./gen7Moves";
import { gen8Moves } from "./gen8Moves";
import { gen9Moves } from "./gen9Moves";

export const allMovesList = gen1Moves
  .concat(gen2Moves)
  .concat(gen3Moves)
  .concat(gen4Moves)
  .concat(gen5Moves)
  .concat(gen6Moves)
  .concat(gen7Moves)
  .concat(gen8Moves)
  .concat(gMaxMoves)
  .concat(gen9Moves);
