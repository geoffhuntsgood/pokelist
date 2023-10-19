import { PokemonAbilities, PokemonEggGroups } from ".";
import { Category, TypeName } from "../enums";

export class Pokemon {
  constructor(
    public name: string,
    public displayName: string,
    public dexNumber: number,
    public generation: number,
    public type: TypeName | TypeName[],
    public eggGroups: PokemonEggGroups,
    public abilities: PokemonAbilities,
    public type2?: TypeName | TypeName[],
    public category?: Category
  ) {}
}
