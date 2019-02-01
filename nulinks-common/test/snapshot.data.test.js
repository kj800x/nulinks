import NULINKS_DATA from "../src/data";
import { search } from "../src/search";

const ALPHABET = [...'abcdefghijklmnopqrstuvwxyz']

const expectFirstToMatchSnapshot = (searchTerm) => {
  it("works on " + searchTerm, () => {
    expect(search(NULINKS_DATA)(searchTerm)[0].value.title).toMatchSnapshot()
  });
};


describe("searching data.js with the alphabet via snapshot", () => {
  ALPHABET.map(expectFirstToMatchSnapshot)
});
