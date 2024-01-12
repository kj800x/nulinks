import { toDefaultSuggestion, toSuggestion } from "../src/format";

describe("toDefaultSuggestion", () => {
  it("returns an object in the correct shape", () => {
    const match = {
      representativeKeyword: "pay",
      value: { title: "Payments & Money", target: "https://pay.neu.edu/" },
    };
    const actual = toDefaultSuggestion(match);
    const expected = {
      description:
        "pay <match>Payments &amp; Money</match> <url>https://pay.neu.edu/</url>",
    };

    expect(actual).toEqual(expected);
  });
});

describe("toSuggestion", () => {
  it("returns an object in the correct shape", () => {
    const match = {
      representativeKeyword: "pay",
      value: { title: "Payments & Money", target: "https://pay.neu.edu/" },
    };
    const actual = toSuggestion(match);
    const expected = {
      content: "pay",
      description:
        "pay <match>Payments &amp; Money</match> <url>https://pay.neu.edu/</url>",
    };

    expect(actual).toEqual(expected);
  });
});
