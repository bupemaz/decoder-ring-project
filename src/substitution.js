// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

  const substitutionModule = (() => {
    //Set variable for the normal alphabet
    const REGULAR_ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
    
    //function to check fir unique letters 
    function _noRepetition(input) {
      
      const obj = input.split('').reduce((acc, char) =>
       {
        //Set acc and character to be true
        acc[char] = true;
        //Return what our accumulator is holding so that
        //it's true
        return acc;
        //Reduce into an empty object
      }, {});
      //Match the length of our keys to our input 
      return Object.keys(obj).length === input.length;
    }

   function substitution(input, alphabet, encode=true) {
   //passes in only a string that is 26 characters long 
   if(!alphabet || alphabet.length !==26) return false;
   
   //ensures that it is a unqiue string 
   if(!_noRepetition(alphabet)) return false;
   
   //checks to see if encode is true or false 
   const [main, secondary] = 
   encode ? [REGULAR_ALPHABET, alphabet] : [alphabet, REGULAR_ALPHABET];
   
   //reduce to hold letter and it's index 
   const key = main.split('').reduce((acc, letter, index) => {

   acc[letter] = secondary[index];

   return acc; 
   }, {' ' : ' ' });
   //return input and set to lowercase and retun as a string 
   return input
            .toLowerCase()
            .split('')
            .map((letter) => key[letter])
            .join('');

 }

 return { substitution };

})();

module.exports = { substitution: substitutionModule.substitution };
