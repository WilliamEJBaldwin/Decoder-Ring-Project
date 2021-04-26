// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar()", () => {
  describe("error messages", () => {
    it("returns false if shift = undefined.", () => {
      const message = "Shift is undefined!"
      const shift = undefined;
      const actual = caesar(message, shift)
     
      expect(actual).to.be.false;
    });

    it("returns false if shift is = 0.", () => {
      const message = "Shift must not be zero!";
      const shift = 0;
      const actual = caesar(message, shift);
     
      expect(actual).to.be.false;
    });

    it("returns false if shift is > 25.", () => {
      const message = "Shift must not be greater than 25!";
      const shift = 26;
      const actual = caesar(message, shift);
     
      expect(actual).to.be.false;
    });

    it("returns false if shift is < -25.", () => {
      const message = "Shift must not be less than -25!";
      const shift = -26;
      const actual = caesar(message, shift);
      
      expect(actual).to.be.false;
    });
  });

  describe("encoding message errors.", () => {
    it("encodes a message once properly shifted.", () => {
      const message = "four";
      const shift = 2;
      const actual = caesar(message, shift);
      const expected = "hqwt";
     
      expect(actual).to.equal(expected);
    });

    it("leaves symbols and spaces as they are.", () => {
      const message = "four $core.";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "irxu $fruh.";
     
      expect(actual).to.equal(expected);
    });

    it("counts capital letters as if they are lower case.", () => {
      const message = "HEllo ROboT";
      const shift = 4;
      const actual = caesar(message, shift);
      const expected = "lipps vsfsx";
      
      expect(actual).to.equal(expected);
    });

    it("handles letters wrapping the end of the alphabet.", () => {
      const message = "xylophone";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "aborskrqh";
      
      expect(actual).to.equal(expected);
    });

    it("handles letters wrapping the front of the alphabet.", () => {
      const message = "babble";
      const shift = -3;
      const actual = caesar(message, shift);
      const expected = "yxyyib";
      
      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("decodes by doing the opposite of the shift.", () => {
      const message = "ugxgp";
      const shift = 2;
      const actual = caesar(message, shift, false);
      const expected = "seven";
      
      expect(actual).to.equal(expected);
    });

    it("leaves symbols and spaces as they are.", () => {
      const message = "uxp udlvlq?";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "rum raisin?";
      
      expect(actual).to.equal(expected);
    });

    it("counts capital letters as if they are lower case.", () => {
      const message = "VKhsKhUg";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "shepherd";
      
      expect(actual).to.equal(expected);
    });

    it("handles letters wrapping the end of the alphabet.", () => {
      const message = "ixccb";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "fuzzy";
     
      expect(actual).to.equal(expected);
    });

    it("handles letters wrapping the front of the alphabet.", () => {
      const message = "yrlvxkzv";
      const shift = -3;
      const actual = caesar(message, shift, false);
      const expected = "buoyancy";
      
      expect(actual).to.equal(expected);
    });
  });
});
