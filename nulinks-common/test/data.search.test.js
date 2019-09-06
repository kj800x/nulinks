import NULINKS_DATA from "../src/data";
import { search } from "../src/search";

const ALPHABET = [..."abcdefghijklmnopqrstuvwxyz"];
const IMPORTANT_SEARCH_TERMS = [
  "regis",
  "reg",
  "class",
  "sched",
  "co-op",
  "co-op-se",
  "nuca",
  "mai",
  "hous",
  "audit",
  "coun",
  "fin",
  "fas", // This one because I can never spell it correctly
  "faf",
  "hours",
  "pay",
  "emergency", // These ones should resolve to the NUPD emergency number
  "fire", // These ones should resolve to the NUPD emergency number
  "medical", // These ones should resolve to the NUPD emergency number
  "bill",
  "bills",
  "work",
  "work-re"
];

const TEST_CASES = [...ALPHABET, ...IMPORTANT_SEARCH_TERMS];

const itsFirstResultMatchesSnapshot = searchTerm => {
  it(`matches snapshot for term ${searchTerm}`, () => {
    const results = search(NULINKS_DATA)(searchTerm);
    const value = results.length > 0 ? results[0].value.title : null;
    expect(value).toMatchSnapshot();
  });
};

describe("searching data.js", () => {
  TEST_CASES.map(itsFirstResultMatchesSnapshot);
});
