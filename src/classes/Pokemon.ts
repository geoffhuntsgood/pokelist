import { AlternateForm } from ".";
import { Category, EggGroup, PokemonName, Type } from "../enums";

export class Pokemon {
  constructor(
    public readonly name: PokemonName,
    public readonly dex: number,
    public readonly type: Type,
    public readonly eggGroup1: EggGroup,
    public readonly type2?: Type,
    public readonly eggGroup2?: EggGroup,
    public readonly category?: Category | Category[],
    public readonly mustHaveForm?: boolean,
    public readonly alternateForms?: AlternateForm[],
    public readonly regionalVariants?: AlternateForm[],
    public readonly megaEvolutions?: AlternateForm[],
    public simpleName?: string,
  ) {}
}
