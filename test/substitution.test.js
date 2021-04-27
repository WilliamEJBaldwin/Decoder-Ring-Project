const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution()", () => {
  describe("error handling", () => {
    it("returns false if there is no alphabet.", () => {
      const message = "Alphabet missing!";
      const actual = substitution(message);
      
      expect(actual).to.be.false;
    });

    it("returns false if the alphabet length is anything other than 26.", () => {
      const message = "The alphabet should be exactly 26 characters!";
      const alphabet = "thequickbrownfox";
      const actual = substitution(message, alphabet);
      
      expect(actual).to.be.false;
    });

    it("returns false if there are repeating characters in the alphabet.", () => {
      const message = "There should be no repeating characters in the alphabet!";
      const alphabet = "thequickbrownfoxjumpedover";
      const actual = substitution(message, alphabet);
      
      expect(actual).to.be.false;
    });
  });

  describe("encoding a message", () => {
    it("encodes a message with the given alphabet.", () => {
      const message = "international";
      const alphabet = "byaetfzpngoriulvmkcxwqhjsd";
      const actual = substitution(message, alphabet);
      const expected = "nuxtkubxnlubr";

      expect(actual).to.equal(expected);
    });

    it("works with special characters in the alphabet.", () => {
      const message = "mystery";
      const alphabet = "rqfl$hy%kj@gzi#xanmstovw&d";
      const actual = substitution(message, alphabet);
      const expected = "z&ms$n&";

      expect(actual).to.equal(expected);
    });

    it("leaves spaces as they are.", () => {
      const message = "the pearl is in the river";
      const alphabet = "msvpxdcanbikhgtrweyzqlojuf";
      const actual = substitution(message, alphabet);
      const expected = "zax rxmek ny ng zax enlxe";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("decodes a message with the given alphabet.", () => {
      const message = "ptpzbthao";
      const alphabet = "tlakwvgoumesydnfzqphbcijrx";
      const actual = substitution(message, alphabet, false);
      const expected = "sasquatch";

      expect(actual).to.equal(expected);
    });

    it("works with special characters in the alphabet.", () => {
      const message = ".auy$m";
      const alphabet = "dniy$gflpjko%uar#mes@qwt.b";
      const actual = substitution(message, alphabet, false);
      const expected = "yonder";

      expect(actual).to.equal(expected);
    });

    it("leaves spaces as they are.", () => {
      const message = "gkh umle xge pdfk umz hlhz";
      const alphabet = "gprhzqvmsyoctkdajfeulnxbiw";
      const actual = substitution(message, alphabet, false);
      const expected = "and thus was born the dude";

      expect(actual).to.equal(expected);
    });
  });
});
