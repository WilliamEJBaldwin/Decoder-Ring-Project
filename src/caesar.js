// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  
  function caesar(input, shift, encode = true) {
    //Checks to see if there is no shift.
    if (!shift) return false;
    //Checks to see if the shift is zero, larger than 25, or less than -25.
    if (shift == 0 || shift > 25 || shift < -25) return false;
    //Changes the shift if we are decoding.
    if (!encode) shift *= -1;
    //Makes sure all of the input is set to lower case.
    input = input.toLowerCase();
    //Assigns a code that can handle the length of a shift. 
    let codeString = "bcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxy"
    //Assign a modifier variable to account for the accounting code string.
    let codeNormal = 25;
    //Sets a variable to contain our solution.
    let solution = "";
    //Assigns 1 variable to contain the shift and my modifier.
    let codeShift = codeNormal + shift;
    //Loops through the input.
    for (let i = 0; i < input.length; i++) {
      //Sets a variable for the ASCII code of the current input.
      currChar = input.charCodeAt(i)
        //Checks for the non-lower case letters.
        if (currChar > 122 || currChar < 97) {
          //And pushes them into our solution.
          solution += input[i]
          //Otherwise...
        } else {
          //We add the correctly modified character into our array.
          solution += codeString[currChar + codeShift - 97]
        } 
    }
     //Return our solution. 
    return solution;
    

  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };