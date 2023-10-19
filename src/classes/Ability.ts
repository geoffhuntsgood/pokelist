import { AbilityName } from "../enums";

export class Ability {
  constructor(
    public name: string,
    public displayName: AbilityName,
    public generation: number,
    public description: string
  ) {}
}
