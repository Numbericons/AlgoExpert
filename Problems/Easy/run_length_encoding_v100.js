// O(N) Time iterating string includes while loops but they forward our iteration | space o(n) to create array of length of string input

function runLengthEncoding(string) {
  let stringArr = string.split("");
  let retArr = [];

  for (let i=0; i<stringArr.length; i++){
    let current = stringArr[i];
    let count = 1;

    while (current === stringArr[i+1]) {
      i += 1;
      count +=1;
    }

    if (count > 9) {
      while (count > 9) {
        retArr.push(`9${current}`);
        count = count - 9;
      }
    }

    retArr.push(`${count}${current}`);
  }

  return retArr.join("");
}

// Do not edit the line below.
exports.runLengthEncoding = runLengthEncoding;

let input = "AAAAAAAAAAAAABBCCCCDD";

let result = runLengthEncoding(input);
console.log(result);

/*Plan 1
  Iterate string
    Pushing values into an array to join values to return a string
    Challenge: need to look at rest of string to check how many consecutive current chars
      What about an array created from the input string
      Since we want an array and O(1) deletion, need a reversed dynamic array
        Iterate backwards
          Pop until we stop seeing consecutive chars
            **Idea 2, just update idx, no need to actually remove
          Add number of pops + char
          Account for > 10 of a given char, e.x. 12 A's becomes: 9A3A
  Notes
    1 becomes '11' as in one 1
    333 becomes 33 etc.
*/