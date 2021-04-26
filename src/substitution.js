// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  //Creates a variable for the standard alphabet string.
  const alphabetStandard = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet, encode = true) {
    //Sets a variable for our solution string.
    let solution = "";
    //Sets a variable for the character currently being coded.
    let currChar = "";

    //Error tests.
    //Returns false if no alphabet present or length is not 26 characters.
    if (!alphabet || alphabet.length !== 26) return false;
    //Converts to lower case.
    input = input.toLowerCase();
    //Returns false if ther are duplicate characters in the alphabet.
    for (let i = 0; i < alphabet.length; i++) {
      const check1 = alphabet.charAt(i);
      for (let j = (i += 1); j < alphabet.length; j++) {
        let check2 = alphabet.charAt(j);
        if (check1 === check2) return false;
      };
    };

    //Loops through the input.
    for (let i = 0; i < input.length; i++) {
      //Assigns the current character to the currChar variable.
        currChar = input[i];
        //Checks for spaces.
        if (input.charCodeAt(i) === 32) {
          //And pushes a space if there is one.
          solution += currChar;
        
        //If there is anything but a space...  
        } else {
          //Decode.
          if (encode === false) {
            //Assigns a variable to the position of the inputted character in the given alphabet.
            let alphaPos = alphabet.indexOf(currChar);
            //And adds the character at the same position in the standard alphabet to the solution string.
            solution += alphabetStandard[alphaPos];
          //Encode.
          } else {
          //Assigns a variable to the position of the inputted character in the standard alphabet.  
          let alphaPos = alphabetStandard.indexOf(currChar);
          //And adds the character at the same position in the given alphabet to the solution string.
          solution += alphabet[alphaPos]
        };
      };
    };
    //Returns our solution!
    return solution;
    
  }
  return {
    substitution,
  };
})();
module.exports = { substitution: substitutionModule.substitution };
