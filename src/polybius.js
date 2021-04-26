// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  
  //Sets a final solution variable.
  let solution = "";
  //Sets an array for containing all letters and 2 digit codes.
  const letter = [
    { 11: "a" },
    { 21: "b" },
    { 31: "c" },
    { 41: "d" },
    { 51: "e" },
    { 12: "f" },
    { 22: "g" },
    { 32: "h" },
    { 42: "(i/j)" },
    { 52: "k" },
    { 13: "l" },
    { 23: "m" },
    { 33: "n" },
    { 43: "o" },
    { 53: "p" },
    { 14: "q" },
    { 24: "r" },
    { 34: "s" },
    { 44: "t" },
    { 54: "u" },
    { 15: "v" },
    { 25: "w" },
    { 35: "x" },
    { 45: "y" },
    { 55: "z" },
  ];
 

  function polybius(input, encode = true) {
    //Sets a holder array for pushing the results into.
    const solutionArr = [];
    //Makes sure any capital letters are set to lower case.
    input = input.toLowerCase();
    //Decode.
    if (!encode) {
      
      //Checks to make sure the input is even.
      if (input.replace(" ", "").length % 2 > 0) return false;
      
      //Sets up a loop going through as long as less than or equal to the input length.
      for (let i = 0; i <= input.length; i += 2) {
       
        //Checks for spaces.
        if (input.charCodeAt([i]) === 32) {
          //If so, pushes a space.
          solutionArr.push(" ");
          //Changes the value of i since we will be taking 2 numbers at a time. 
          i -= 1;
         
        } else {
          //Sets a variable that will look at 2 numbers at a time.
          let inputCode = input[i] + input[i + 1];
          
          //Loops through the alphabet length.
          for (let j = 0; j < 25; j++) {
            //Checks to find the matching code to the array key.
            if (inputCode === Object.keys(letter[j])[0]) {
              //Pushes the value of that key to the array.
              solutionArr.push(Object.values(letter[j])[0]);
            };
          };
        };
      };
      //Encode.
    } else if (encode) {
      
      //Sets a loop for the length of the input.
      for (let i = 0; i < input.length; i++) {
        //Assigns a variable for the current character.
        const inputLetter = input[i];
        //Checks to see if the character is a space.
        if (input.charCodeAt([i]) === 32) {
          //If it is, a space is pushed into the array.
          solutionArr.push(" ");
          
          //Checks to see if the chararacter is i or j.
        } else if (input.charCodeAt(i) === 105 || input.charCodeAt(i) === 106) {
          //If it is, the code of 42 is pushed into the array.  
          solutionArr.push(42);
          
          //Otherwise...  
        } else {
          //Loops through the alphabet.
          for (let j = 0; j < 25; j++) {
            //Checks to find the matching code to the array value.
            if (inputLetter === Object.values(letter[j])[0]) {
              //Pushes the value of that key to the array.
              solutionArr.push(Object.keys(letter[j])[0]);
            };  
          };
        };
      };
    };
    
    //Sets our solution to a formatted string from our array.
    solution = solutionArr.join("");

    //Returns our solution!
    return solution;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
