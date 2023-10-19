import { EggGroupName } from "../enums";

export class PokemonEggGroups {
  constructor(public group1: EggGroupName, public cycles: number, public group2?: EggGroupName) {}
}
