import { Category, PokemonName, Type } from "../enums";

export class AlternateForm {
  constructor(
    public readonly name: PokemonName,
    public readonly type: Type,
    public readonly type2?: Type,
    public readonly category?: Category | Category[],
    public simpleName?: string
  ) {}
}
