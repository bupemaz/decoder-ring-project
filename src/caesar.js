// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  function lowercaseOnly(array) {
    return array.map((character) => {
      const unicode = character.toLowerCase().charCodeAt();
      return unicode >= 97 && unicode <= 122 ? unicode : character;
    });
  }

  function caesar(input, shift, encode = true) {
    // ensures that shift is not beyond or above alpahabet length 
    if (shift < -25 || shift > 25 || !shift) {
      return false;
    }
    // ensures leftward shift 
    if (encode === false) {
      shift = shift * -1;
    }
     
    //to return unicode numbers
    let letterArray = input.split("");
    let unicodeNumbers = lowercaseOnly(letterArray);

    // excludes spaces and allows only for valid letters
    let shiftedNumbers = unicodeNumbers.map((number) => {
      return typeof number === "number" ? number + shift : number;
    });

    // loop to handle the end or beginning of the string 
    let endNumbers = shiftedNumbers.map((number) => {
      if (typeof number === "number") {
        if (number < 97) {
          return number + 26;
        }
        if (number > 122) {
          return number - 26;
        }
      }
      return number;
    });

    //convert the unicode back to a string 
    let outputArray = endNumbers.map((number) => {
      return typeof number === "number" ? String.fromCharCode(number) : number;
    });
    return outputArray.join("");
  }

  
  return {
    caesar
  };
   

})();

module.exports = { caesar: caesarModule.caesar };
