import { describe, expect, test } from "vitest";
import { Ability, Generation, Move, Pokemon } from "../../classes";
import { MoveCategory, Type } from "../../enums";

describe("Class instantiation sanity checks", () => {
  test("Ability", () => {
    expect(new Ability(1, "", "", "")).toBeInstanceOf(Ability);
  });

  test("Generation", () => {
    expect(new Generation(1, [], [], [])).toBeInstanceOf(Generation);
  });

  test("Move", () => {
    expect(new Move(1, "", "", Type.Bug, MoveCategory.Physical)).toBeInstanceOf(
      Move
    );
  });

  test("Pokemon", () => {
    expect(new Pokemon(1, "", "", Type.Bug)).toBeInstanceOf(Pokemon);
  });
});
