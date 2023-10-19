import { AbilityName } from "../enums";

export class PokemonAbilities {
  constructor(public first: AbilityName | AbilityName[], public second: AbilityName, public hidden: AbilityName | AbilityName[]) {}
}
