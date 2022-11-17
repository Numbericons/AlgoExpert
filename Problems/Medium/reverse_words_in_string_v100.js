//Time: O(n) where n is chars in string | Spac. : O(n) where n is words in string 

function reverseWordsInString(string) {
  let retArr = [];
  let firstIdx = '';

  for (let i=string.length - 1; i>=0; i--){
    firstIdx = i - 1;

    if (string[i] === ' ') { // !
      while (string[firstIdx] === ' ') { //best!
        firstIdx -= 1;
      }
    } else {
      while (string[firstIdx] && string[firstIdx] !== ' ') {
        firstIdx -= 1;
      }
    }

    let word = getWord(string, firstIdx + 1, i+1)
    retArr.push(word);

    i = firstIdx + 1;
  }

  return retArr.join("");
}

function getWord(str, start, end) {
  let retArr = [];

  for (let k=start; k<end; k++){
    retArr.push(str[k]);
  }

  return retArr.join("");
}

// Do not edit the line below.
exports.reverseWordsInString = reverseWordsInString;

let input = "AlgoExpert is the best!";

let result = reverseWordsInString(input);
console.log(result);

/*
 No split or reverse

  But have join, hinting at populating an array during the algo to join and return

  Have to iterate the entire string, implying a goal of linear time
  
  Space will involve length of array if adding to an array to later join


*/