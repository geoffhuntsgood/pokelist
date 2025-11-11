import type { Ability } from "./Ability";
import type { Move } from "./Move";
import type { Pokemon } from "./Pokemon";

export class Generation {
  constructor(
    public readonly num: number,
    public readonly abilities?: Ability[],
    public readonly moves?: Move[],
    public readonly pokemon?: Pokemon[]
  ) {}
}
