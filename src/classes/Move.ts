import { AttackType, TypeName } from "../enums";

export class Move {
  constructor(
    public name: string,
    public displayName: string,
    public generation: number,
    public type: TypeName | TypeName[],
    public attackType: AttackType,
    public description: string,
    public signatureOf?: string
  ) {}
}
