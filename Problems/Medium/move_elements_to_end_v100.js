//Time: O() wh.  re is | Space: O(1) where is 
//T: O(N) where is N is length of array | S: O(1) constant stpace w/ 2 pointers being updated

// function moveElementToEnd(array, toMove) {
//   let start = 0;
//   let idxToSwap = array.length - 1;

//   while(start < idxToSwap) {
//     if (array[start] !== toMove) {
//       start += 1; 
//       continue;
//     }

//     if (array[idxToSwap] === toMove) {
//       idxToSwap -= 1;
//       continue;
//     }

//     swapElements(array, start, idxToSwap);
//     start += 1;
//     idxToSwap -= 1;
//   }

//   return array;
// }

function swapElements(array, idx1, idx2) {
  const temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

function moveElementToEnd(array, toMove) {
  let start = 0;
  let idxToSwap = array.length - 1;

  while(start < idxToSwap) {
    if (array[start] !== toMove) {
      start += 1; 
    } else if (array[idxToSwap] === toMove) {
      idxToSwap -= 1;
    } else {
      swapElements(array, start, idxToSwap);
      start += 1;
      idxToSwap -= 1;
    }
  }

  return array;
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;

let input = [2, 1, 2, 2, 2, 3, 4, 2]
let toMove = 2

let result = moveElementToEnd(input, toMove);
console.log(result);

/*
  Thinking 2 points
    Current -> reference to current element to check if it needs to move
    End -> Reference to last non toMove element

  while start < end
    Increase start until the current element is a toMove element

*/