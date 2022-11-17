//O(N*M) => N and M are the lengths of the input arrays, O(1) Space

// function smallestDifference(arrayOne, arrayTwo) {
//   let retArr = [];
//   let minDiff = Infinity;

//   for (let i=0; i<arrayOne.length; i++){
//     for (let k=0; k<arrayTwo.length; k++){
//       let diff = Math.abs(arrayOne[i] - arrayTwo[k]);

//       if (diff < minDiff) {
//         retArr = [arrayOne[i], arrayTwo[k]];
//         minDiff = diff;
//       }
//     }
//   }

//   return retArr;
// }

// function smallestDifference(arrayOne, arrayTwo) {
//   let retArr = [];
//   let minDiff = Infinity;

//   arrayOne = arrayOne.sort((a,b) => a - b);
//   arrayTwo = arrayTwo.sort((a,b) => a - b);

//   for (let i=0; i<arrayOne.length; i++){
//     // if (i === 5) debugger;

//     let mid = Math.floor(arrayTwo.length / 2);
//     let diff = Math.abs(arrayOne[i] - arrayTwo[mid]);

//     if (diff < minDiff) {
//       retArr = [arrayOne[i], arrayTwo[mid]]
//       minDiff = diff;
//     }

//     while (mid > 0 && mid < arrayTwo.length) {
//       if (arrayOne[i] - arrayTwo[mid] < 0) {
//         if (arrayOne[i] > 0) {
//           mid = Math.floor((mid + (arrayTwo.length - mid) / 2));
//         } else {
//           mid = Math.floor(mid / 2);
//         }
//       } else {
//         if (arrayOne[i] > 0) {
//           mid = Math.floor(mid / 2);
//         } else {
//           mid = Math.floor((mid + (arrayTwo.length - mid) / 2));
//         }
//       }

//       diff = Math.abs(arrayOne[i] - arrayTwo[mid]);

//       if (diff < minDiff) {
//         retArr = [arrayOne[i], arrayTwo[mid]]
//         minDiff = diff;
//       }

//       if (mid === arrayTwo.length - 1) break;
//     }
//   }

//   return retArr;
// }

function smallestDifference(arrayOne, arrayTwo) {
  let idxOne = 0;
  let idxTwo = 0;
  let current;
  let smallest = Infinity;
  let smallPair = [];

  arrayTwo = arrayTwo.sort((a,b) => a - b);
  arrayOne = arrayOne.sort((a,b) => a - b);

  while(idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    let valOne = arrayOne[idxOne];
    let valTwo = arrayTwo[idxTwo];

    current = Math.abs(valOne - valTwo);

    if (valOne < valTwo) {
      idxOne += 1;
    } else if (valOne > valTwo) {
      idxTwo += 1;
    } else {
      return [valOne, valTwo];
    }

    if (current < smallest) {
      smallest = current;
      smallPair = [valOne, valTwo];
    }
  }

  return smallPair;
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;

let arrayOne = [-1, 5, 10, 20, 28, 3]; // [-1, 3, 5, 10, 20, 28]
let arrayTwo = [26, 134, 135, 15, 17]; // [15, 17, 26, 134, 135]

let result = smallestDifference(arrayOne, arrayTwo);
console.log(result);

/*
  Basic approach
    Track current smallest difference
    Iterate one array
      Compare differences possible against elements in other array
  O(N*M) => N and M are the lengths of the input arrays, O(1) Space

  
*/