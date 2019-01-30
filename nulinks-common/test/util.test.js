import { toLower } from "../src/util";

describe("toLower", () => {
  it("lowercases words", () => {
    expect(toLower("HELLO")).toEqual("hello")
  });
})
