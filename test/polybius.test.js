const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius()", () => {
  describe("encoding a message", () => {
    it("encodes letters into numeric pairs.", () => {
      const message = "constitution";
      const actual = polybius(message);
      const expected = "314333344442445444424333";

      expect(actual).to.equal(expected);
    });

    it("translates 'i' and 'j' to 42.", () => {
      const message = "jiffy";
      const actual = polybius(message);
      const expected = "4242121245";

      expect(actual).to.equal(expected);
    });

    it("leaves spaces as they are.", () => {
      const message = "subtle hint";
      const actual = polybius(message);
      const expected = "345421441351 32423344";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("returns false if the numbers excluding spaces is odd.", () => {
      const message = "12 345";
      const actual = polybius(message, false);

      expect(actual).to.be.false;
    });
    
    it("decodes numeric pairs into letters.", () => {
      const message = "4424435342311113";
      const actual = polybius(message, false);
      const expected = "trop(i/j)cal";

      expect(actual).to.equal(expected);
    });

    it("translates 42 to 'i' and 'j'; that is '(i/j)'.", () => {
      const message = "423342542445";
      const actual = polybius(message, false);

      expect(actual).to.include("i");
      expect(actual).to.include("j");
    });

    it("leaves spaces as they are.", () => {
      const message = "532443 4324 314333";
      const actual = polybius(message, false);
      const expected = "pro or con";
      expect(actual).to.equal(expected);
    });
  });
});
