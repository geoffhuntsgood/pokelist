import { test, expect, describe } from "vitest";
import { displayTime, sanitizeText } from "../../utils/utils";
import { AlternateForm } from "../../classes";
import { PokemonName, Type } from "../../enums";

describe("displayTime tests", () => {
  test("Seconds only", () => {
    expect(displayTime(10)).toEqual("0:10");
  });

  test("Minutes and seconds", () => {
    expect(displayTime(1000)).toEqual("16:40");
  });

  test("Hours, minutes, and seconds with padding", () => {
    expect(displayTime(4082)).toEqual("1:08:02");
  });
});

describe("sanitizeText tests", () => {
  test("Remove all non-alphanumeric and set to lowercase", () => {
    expect(sanitizeText("!%@(-  a~sDF>7|")).toEqual("asdf7");
  });
});

describe("AlternateForm coverage test", () => {
  test("constructor", () => {
    const alternate = new AlternateForm(PokemonName.Bulbasaur, Type.Grass);
    expect(alternate).toHaveProperty("name", PokemonName.Bulbasaur);
  });
});