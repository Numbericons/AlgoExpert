//iterate throug potential sub array
//  find index of first element within big array
//    slice big from 1 element after ^index
//  if sub becomes empty, return true

// function isValidSubsequence(array, sequence) {
//   let arrCopy = array.slice();

//   for (let i = 0; i < sequence.length; i++) {
//     const idx = arrCopy.indexOf(sequence[i]);

//     if (idx === -1) return false;

//     arrCopy = arrCopy.slice(idx + 1);
//   }
//   return true;
//   // Write your code here.
// }

function isValidSubsequence(array, sequence) {
  let subIdx = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === sequence[subIdx]) {
      subIdx += 1;
      if (subIdx === sequence.length) return true;
    }
  }

  return false;
}

const arr = [5, 1, 22, 25, 6, -1, 8, 10]
const seq = [1, 6, -1, 10]

isValidSubsequence(arr,seq);
