import { test, expect, describe } from "vitest";
import { displayTime, sanitizeText } from "../../utils/utils";

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
