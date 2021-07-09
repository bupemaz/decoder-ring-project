const caesarModule = require("../src/caesar");
const expect = require("chai").expect;
const caesar = caesarModule.caesar;

describe("caesar cipher false cases", () => {
  it("Should be false if the shift value is less than -25", () => {
    const input = ("thinkful", -26);
    const expected = false;
    const actual = caesar(input);
    expect(actual).to.equal(expected);
  });
  it("Should be false if the shift value is greater than 25", () => {
    const input1 = ("thinkful", 99);
    const expected = false;
    const actual = caesar(input1);
    expect(actual).to.equal(expected);
  });
  it("Should be false if not present.", () => {
    const input2 = "thinkful";
    const expected = false;
    const actual = caesar(input2);
    expect(actual).to.equal(expected);
  });
})

describe("caesar shift cases", () => {
  it("Should shift letters by specified key value", () => {
    const expected = 'wklqnixo';
    const actual = caesar("thinkful", 3);
    expect(actual).to.equal(expected);
  });
  it("Should be false if the shift value is greater than 25", () => {
    const expected = 'qefkhcri';
    const actual = caesar("thinkful", -3);
    expect(actual).to.eql(expected);
  });
})




