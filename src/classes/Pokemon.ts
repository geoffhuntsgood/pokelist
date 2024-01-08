import { Category, EggGroup, TypeName } from "../enums";

export class Pokemon {
  constructor(
    public name: string,
    public displayName: string,
    public dexNumber: number,
    public generation: number,
    public type: TypeName,
    public eggGroups: {
      group1: EggGroup,
      cycles: number,
      group2?: EggGroup,
    },
    public type2?: TypeName,
    public formTypes?: TypeName[],
    public category?: Category,
  ) {}
}
