//O(n) time | O(1) space => object has a bound of 26 lowercase char keys
function firstNonRepeatingCharacter(string) {
  let charRef = {};

  for (let k=0; k<string.length; k++){
    charRef[string[k]] = charRef[string[k]] ?  charRef[string[k]] + 1 : 1;
  }

  for (let i=0; i<string.length; i++){
    if (charRef[string[i]] === 1) return string.indexOf(string[i]);
  }

  return -1;
}

//O(nlogn) time | O(1) space => doesn't work, since would need to mutate the input string and then still need reference to original indexes of chars
// function firstNonRepeatingCharacter(string) {
//   string = string.split('').sort((a,b) => {
//     return a.charCodeAt() - b.charCodeAt();
//   }).join("");

//   for (let i=0; i<string.length - 1; i++){
//     if (string[i] === string[i+1]) return i;
//   }

//   // Write your code here.
//   return -1;
// }

// Do not edit the line below.
exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;

let string = "abcdcaf";

let result = firstNonRepeatingCharacter(string);
console.log(result);
// The first non-repeating character is "b" and is found at index 1.

//plan 1: O(n) time | O(n) space

// iterate string
//   created object with count of each char seen

// iterate the string again
//   return the index of the first char to have a value in ref object > 1

//plan 2: O(nlogn) time | o(1) space
// sort array first
//   return the index of the first char where the next char is the same