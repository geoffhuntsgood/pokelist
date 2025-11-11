import type { Generation, Move } from "../../classes";
import { mgen1 } from "./mgen1";
import { mgen2 } from "./mgen2";
import { mgen3 } from "./mgen3";
import { mgen4 } from "./mgen4";
import { mgen5 } from "./mgen5";
import { mgen6 } from "./mgen6";
import { mgen7 } from "./mgen7";
import { mgen8 } from "./mgen8";
import { mgen9 } from "./mgen9";
import { mgmax } from "./mgmax";

export const allMoveGens: Generation[] = [
  mgen1,
  mgen2,
  mgen3,
  mgen4,
  mgen5,
  mgen6,
  mgen7,
  mgen8,
  mgen9
];

export const allMoves: Move[] = [
  ...(mgen1.moves || []),
  ...(mgen2.moves || []),
  ...(mgen3.moves || []),
  ...(mgen4.moves || []),
  ...(mgen5.moves || []),
  ...(mgen6.moves || []),
  ...(mgen7.moves || []),
  ...(mgen8.moves || []),
  ...(mgen9.moves || [])
];

export const allMovesWithGMax: Move[] = [...allMoves, ...mgmax];
