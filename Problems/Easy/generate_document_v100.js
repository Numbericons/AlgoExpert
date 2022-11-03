//time O(c + d) || space O(d)

function getCounts(string) {
  let strObj = {};
  let array = string.split("");

  for (let k=0; k<array.length; k++){
    strObj[array[k]] = strObj[array[k]] ? strObj[array[k]] + 1 : 1;
  }

  return strObj;
}

function generateDocument(chars, doc) {
  const charCounts = getCounts(chars);
  const docCount = getCounts(doc);
  const docArr = doc.split("");

  for (let i=0; i<docArr.length; i++){
    let available = charCounts[docArr[i]] ? charCounts[docArr[i]] : 0;
    if (available < docCount[docArr[i]]) return false;
  }

  return true;
}

exports.generateDocument = generateDocument;

let characters = "Bste!hetsi ogEAxpelrt x ";
let document = "AlgoExpert is the Best!";

let result = generateDocument(characters, document);
console.log(result);

//O(N + M) iterate both strings | Space O(N + M)
//iterate characters
//   generate reference object with char counts/document
//   using helper
//iterate keys of document
//  check if given char count can be attained via characters string as well

