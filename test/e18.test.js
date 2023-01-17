import { describe, expect, it } from "vitest";
import { joinToString } from "../exercises/e18";

describe("isArrayIncludes", () => {
  it("Should exist", () => {
    expect(joinToString).toBeInstanceOf(Function);
  });
  it("Should return a correct string with symbols between array items values only", () => {
    expect(
      joinToString(
        [
          "Devslopes",
          "is",
          "teaching",
          "me",
          "FOR",
          "loops",
          "and",
          "functions",
          "!",
        ],
        " "
      )
    ).toEqual("Devslopes is teaching me FOR loops and functions !");
  });
  it("should combine the first few letters of the alpha bet", () => {
    expect(joinToString(["a", "b", "c", "d"], "-")).toBe("a-b-c-d");
  });
});
