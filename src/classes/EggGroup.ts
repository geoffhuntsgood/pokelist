import { EggGroupName } from "../enums";

export class EggGroup {
  constructor(
    public name: EggGroupName,
    public description: string
  ) {}
}
