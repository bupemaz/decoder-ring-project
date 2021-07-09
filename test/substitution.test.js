const substitutionModule = require("../src/substitution");
const expect = require("chai").expect;
const substitution = substitutionModule.substitution;

describe("subsititution false cases", () => {
  it("Should be false if the given alphabet is not exactly 26 characters long", () => {
    const expected = false;
    const actual = substitution("thinkful", "short");
    expect(actual).to.equal(expected);
  });
  it("Should be false if there are any duplicate characters in the given alphabet", () => {
    const expected = false;
    const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    expect(actual).to.equal(expected);
  });
})
describe("subsititution encoding and decoding", () => {
  it("correctly translates the given phrase, based on the alphabet given to the function", () => {
    const expected = 'jrufscpw';
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.equal(expected);
  });
  it("It maintains spaces in the message, before and after encoding or decoding", () => {
    const expected = 'elp xhm xf mbymwwmfj dne';
    const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.equal(expected);
  });
  it("Should be false if there are any duplicate characters in the given alphabet", () => {
    const expected = "y&ii$r&";
    const actual = substitution("Message", "$wae&zrdxtfcygvuhbijnokmpl");
    expect(actual).to.equal(expected);
  });
})