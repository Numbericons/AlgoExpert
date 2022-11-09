//Time: O(N) where N is chars | Space: O(N) where N is unique chars 

// function minimumCharactersForWords(words) {
//   const combinedWords = words.join("");  //O(N) words => 
//   const combinedArr = combinedWords.split(""); //array of chars instead of an array of strings => O(N) chars
//   let charRef = {};
//   let retArr = [];
  
//   combinedArr.forEach(char => { 
//     charRef[char] = charRef[char] ? charRef[char] + 1 : 1;
//   }) //O(N) time chars and O(N) space unique chars

//   const keys = Object.keys(charRef); //O(N) keys

//   for (let i=0; i<keys.length; i++){ //O(N) keys
//     const count = charRef[keys[i]];

//     for (let k=0; k<count; k++){ //O(N) count of keys => O(N) chars 
//       retArr.push(keys[i]);
//     }
//   }

//   return retArr;
// }

//Time: O(N) where N is chars | Space: O(N) where N is unique chars 

// function minimumCharactersForWords(words) {
//   const combinedWords = words.join("");
//   const combinedArr = combinedWords.split("");
//   let charRef = {};
//   let retArr = [];
  
//   combinedArr.forEach(char => { 
//     charRef[char] = charRef[char] ? charRef[char] + 1 : 1;
//   })

//   const keys = Object.keys(charRef);

//   for (let i=0; i<keys.length; i++){
//     const count = charRef[keys[i]];

//     for (let k=0; k<count; k++){
//       retArr.push(keys[i]);
//     }
//   }

//   return retArr;
// }

//Time: O(N^2) where N is number of words | Space: O(N) where N is unique chars from words array

function minimumCharactersForWords(words) {
  let charRef = {};
  let retArr = [];
  
  words.forEach(word => {
    let wordRef = {};
    let wordArr = word.split("");
    
    wordArr.forEach(char => {
      wordRef[char] = wordRef[char] ? wordRef[char] + 1 : 1;
    })

    const wordKeys = Object.keys(wordRef);

    wordKeys.forEach(key => {
      let bigger = charRef[key] ? wordRef[key] > charRef[key] : true;
      
      if (bigger) charRef[key] = wordRef[key];
    })

  })

  const keys = Object.keys(charRef);

  for (let i=0; i<keys.length; i++){
    const count = charRef[keys[i]];

    for (let k=0; k<count; k++){
      retArr.push(keys[i]);
    }
  }

  return retArr;
}

// Do not edit the line below.
exports.minimumCharactersForWords = minimumCharactersForWords;


let input = ["this", "that", "did", "deed" , "them!" , "a"];

let result = minimumCharactersForWords(input);
console.log(result);

/*
  initial thought
        Have to iterate input, seems like linear time would ideal but have any array of strings
          Idea: join the input into one long string
             Iterate across string
    Iterate input array words
      Use hash map to store characters needed and counts
    Return object.keys from the hash map
      Populate an array of characters (can repeat)
*/