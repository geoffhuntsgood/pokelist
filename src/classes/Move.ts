import { MoveCategory, Type } from "../enums";

export class Move {
  constructor(
    public readonly num: number,
    public readonly name: string,
    public readonly displayName: string,
    public readonly type: Type,
    public readonly cat: MoveCategory
  ) {}
}
