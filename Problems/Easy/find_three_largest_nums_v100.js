// Time o(n) length of array | space O(1) track 5 points only
// function findThreeLargestNumbers(array) {
//   let largest = -Infinity;
//   let secondLargest = -Infinity;
//   let thirdLargest = -Infinity;
//   let temp;
//   let temp2;

//   for (let i=0; i<array.length; i++){
//     if (array[i] > largest) {
//       temp = largest;
//       largest = array[i];
//       temp2 = secondLargest;
//       secondLargest = temp;
//       thirdLargest = temp2;
//     } else if (array[i] > secondLargest) {
//       temp = secondLargest;
//       secondLargest = array[i];
//       thirdLargest = temp;
//     } else if (array[i] > thirdLargest) {
//       thirdLargest = array[i];
//     }
//   }

//   return [thirdLargest, secondLargest, largest];
// }

function findThreeLargestNumbers(array) {
  let retArr = new Array(3);
  let temp;

  for (let i=0; i<array.length; i++){
    if (!retArr[2] || array[i] > retArr[2]) {
      retArr.shift();
      retArr.push(array[i]);
    } else if (!retArr[1] || array[i] > retArr[1]) {
      temp = retArr[2];
      retArr.shift();
      retArr.pop();
      retArr.push(array[i]);
      retArr.push(temp);
    } else if (!retArr[0] || array[i] > retArr[0]) {
      retArr[0] = array[i];
    }
  }

  return retArr;
}

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;

let numbers = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];

let result = findThreeLargestNumbers(numbers);
console.log(result);