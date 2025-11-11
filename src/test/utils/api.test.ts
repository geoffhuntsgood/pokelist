import { describe, expect, test } from "vitest";
import { MoveCategory, PokemonCategory, Type } from "../../enums";
import {
  getAbilitiesByGen,
  getMovesByCat,
  getMovesByGen,
  getMovesByType,
  getPokemonByCat,
  getPokemonByGen,
  getPokemonByType
} from "../../utils/api";

describe("api.ts tests", () => {
  // Pokemon
  describe("getPokemonByGen", () => {
    test("Incorrect value", () => {
      expect(getPokemonByGen("99")).toHaveLength(0);
    });

    test("All", () => {
      expect(getPokemonByGen("All")).toHaveLength(1025);
    });

    test("1", () => {
      expect(getPokemonByGen("1")).toHaveLength(151);
    });

    test("2", () => {
      expect(getPokemonByGen("2")).toHaveLength(100);
    });

    test("3", () => {
      expect(getPokemonByGen("3")).toHaveLength(135);
    });

    test("4", () => {
      expect(getPokemonByGen("4")).toHaveLength(107);
    });

    test("5", () => {
      expect(getPokemonByGen("5")).toHaveLength(156);
    });

    test("6", () => {
      expect(getPokemonByGen("6")).toHaveLength(72);
    });

    test("7", () => {
      expect(getPokemonByGen("7")).toHaveLength(88);
    });

    test("8", () => {
      expect(getPokemonByGen("8")).toHaveLength(96);
    });

    test("9", () => {
      expect(getPokemonByGen("9")).toHaveLength(120);
    });
  });

  describe("getPokemonByType", () => {
    test("Bug", () => {
      expect(getPokemonByType(Type.Bug)).toHaveLength(97);
    });

    test("Dark", () => {
      expect(getPokemonByType(Type.Dark)).toHaveLength(84);
    });

    test("Dragon", () => {
      expect(getPokemonByType(Type.Dragon)).toHaveLength(81);
    });

    test("Electric", () => {
      expect(getPokemonByType(Type.Electric)).toHaveLength(84);
    });

    test("Fairy", () => {
      expect(getPokemonByType(Type.Fairy)).toHaveLength(74);
    });

    test("Fighting", () => {
      expect(getPokemonByType(Type.Fighting)).toHaveLength(89);
    });

    test("Fire", () => {
      expect(getPokemonByType(Type.Fire)).toHaveLength(95);
    });

    test("Flying", () => {
      expect(getPokemonByType(Type.Flying)).toHaveLength(122);
    });

    test("Ghost", () => {
      expect(getPokemonByType(Type.Ghost)).toHaveLength(76);
    });

    test("Grass", () => {
      expect(getPokemonByType(Type.Grass)).toHaveLength(141);
    });

    test("Ground", () => {
      expect(getPokemonByType(Type.Ground)).toHaveLength(84);
    });

    test("Ice", () => {
      expect(getPokemonByType(Type.Ice)).toHaveLength(62);
    });

    test("Normal", () => {
      expect(getPokemonByType(Type.Normal)).toHaveLength(140);
    });

    test("Poison", () => {
      expect(getPokemonByType(Type.Poison)).toHaveLength(93);
    });

    test("Psychic", () => {
      expect(getPokemonByType(Type.Psychic)).toHaveLength(122);
    });

    test("Rock", () => {
      expect(getPokemonByType(Type.Rock)).toHaveLength(84);
    });

    test("Steel", () => {
      expect(getPokemonByType(Type.Steel)).toHaveLength(80);
    });

    test("Varies", () => {
      expect(getPokemonByType(Type.Varies)).toHaveLength(0);
    });

    test("Water", () => {
      expect(getPokemonByType(Type.Water)).toHaveLength(164);
    });
  });

  describe("getPokemonByCat", () => {
    test("Baby", () => {
      expect(getPokemonByCat(PokemonCategory.Baby)).toHaveLength(19);
    });

    test("Fossil", () => {
      expect(getPokemonByCat(PokemonCategory.Fossil)).toHaveLength(25);
    });

    test("Legendary", () => {
      expect(getPokemonByCat(PokemonCategory.Legendary)).toHaveLength(71);
    });

    test("Mythical", () => {
      expect(getPokemonByCat(PokemonCategory.Mythical)).toHaveLength(23);
    });

    test("Paradox", () => {
      expect(getPokemonByCat(PokemonCategory.Paradox)).toHaveLength(22);
    });

    test("Ultra Beast", () => {
      expect(getPokemonByCat(PokemonCategory.UltraBeast)).toHaveLength(11);
    });
  });

  // Moves
  describe("getMovesByGen", () => {
    test("Incorrect value", () => {
      expect(getMovesByGen("99")).toHaveLength(0);
    });

    test("All", () => {
      expect(getMovesByGen("All")).toHaveLength(920);
    });

    test("1", () => {
      expect(getMovesByGen("1")).toHaveLength(165);
    });

    test("2", () => {
      expect(getMovesByGen("2")).toHaveLength(86);
    });

    test("3", () => {
      expect(getMovesByGen("3")).toHaveLength(103);
    });

    test("4", () => {
      expect(getMovesByGen("4")).toHaveLength(113);
    });

    test("5", () => {
      expect(getMovesByGen("5")).toHaveLength(92);
    });

    test("6", () => {
      expect(getMovesByGen("6")).toHaveLength(62);
    });

    test("7", () => {
      expect(getMovesByGen("7")).toHaveLength(121);
    });

    test("8", () => {
      expect(getMovesByGen("8")).toHaveLength(108);
    });

    test("9", () => {
      expect(getMovesByGen("9")).toHaveLength(70);
    });
  });

  describe("getMovesByType", () => {
    test("Bug", () => {
      expect(getMovesByType(Type.Bug)).toHaveLength(34);
    });

    test("Dark", () => {
      expect(getMovesByType(Type.Dark)).toHaveLength(52);
    });

    test("Dragon", () => {
      expect(getMovesByType(Type.Dragon)).toHaveLength(32);
    });

    test("Electric", () => {
      expect(getMovesByType(Type.Electric)).toHaveLength(49);
    });

    test("Fairy", () => {
      expect(getMovesByType(Type.Fairy)).toHaveLength(33);
    });

    test("Fighting", () => {
      expect(getMovesByType(Type.Fighting)).toHaveLength(57);
    });

    test("Fire", () => {
      expect(getMovesByType(Type.Fire)).toHaveLength(47);
    });

    test("Flying", () => {
      expect(getMovesByType(Type.Flying)).toHaveLength(31);
    });

    test("Ghost", () => {
      expect(getMovesByType(Type.Ghost)).toHaveLength(35);
    });

    test("Grass", () => {
      expect(getMovesByType(Type.Grass)).toHaveLength(59);
    });

    test("Ground", () => {
      expect(getMovesByType(Type.Ground)).toHaveLength(31);
    });

    test("Ice", () => {
      expect(getMovesByType(Type.Ice)).toHaveLength(33);
    });

    test("Normal", () => {
      expect(getMovesByType(Type.Normal)).toHaveLength(200);
    });

    test("Poison", () => {
      expect(getMovesByType(Type.Poison)).toHaveLength(36);
    });

    test("Psychic", () => {
      expect(getMovesByType(Type.Psychic)).toHaveLength(78);
    });

    test("Rock", () => {
      expect(getMovesByType(Type.Rock)).toHaveLength(26);
    });

    test("Steel", () => {
      expect(getMovesByType(Type.Steel)).toHaveLength(38);
    });

    test("Water", () => {
      expect(getMovesByType(Type.Water)).toHaveLength(49);
    });
  });

  describe("getMovesByCat", () => {
    test("Physical", () => {
      expect(getMovesByCat(MoveCategory.Physical)).toHaveLength(372);
    });

    test("Special", () => {
      expect(getMovesByCat(MoveCategory.Special)).toHaveLength(259);
    });

    test("Status", () => {
      expect(getMovesByCat(MoveCategory.Status)).toHaveLength(271);
    });

    test("Unknown", () => {
      expect(getMovesByCat(MoveCategory.Unknown)).toHaveLength(18);
    });
  });

  // Abilities
  describe("getAbilitiesByGen", () => {
    test("Incorrect value", () => {
      expect(getAbilitiesByGen("99")).toHaveLength(0);
    });

    test("All", () => {
      expect(getAbilitiesByGen("All")).toHaveLength(310);
    });

    test("3", () => {
      expect(getAbilitiesByGen("3")).toHaveLength(76);
    });

    test("4", () => {
      expect(getAbilitiesByGen("4")).toHaveLength(47);
    });

    test("5", () => {
      expect(getAbilitiesByGen("5")).toHaveLength(41);
    });

    test("6", () => {
      expect(getAbilitiesByGen("6")).toHaveLength(27);
    });

    test("7", () => {
      expect(getAbilitiesByGen("7")).toHaveLength(42);
    });

    test("8", () => {
      expect(getAbilitiesByGen("8")).toHaveLength(34);
    });

    test("9", () => {
      expect(getAbilitiesByGen("9")).toHaveLength(43);
    });
  });
});
