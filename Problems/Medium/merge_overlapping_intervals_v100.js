//T: O(n^2) size of array *  | S: O(n) space for size of array
function mergeArrs(array1, array2) { //[4,7], [3,5]
  if (!array1) return array2;
  if (!array2) return array1;

  const start = array1[0] < array2[0] ? array1[0] : array2[0];
  const end = array1[1] > array2[1] ? array1[1] : array2[1];

  return [start, end];
}

function minValue(object, keys, array) {
  let small = Infinity;

  for (let i=0; i<keys.length; i++){
    let current = object[keys[i]];
    if (current < small) small = current;
  }

  return small;
}

function updateArr(object, keys, currArr, retArray, smallIdx) {
  let mergedArr = mergeArrs(currArr, retArray[smallIdx]);

  for (let k=0; k<keys.length; k++){
    if (object[keys[k]] === smallIdx) continue;

    mergedArr = mergeArrs(mergedArr, retArray[object[keys[k]]]);
    
    retArray.length  === 2 ? retArray.splice(1) : retArray.splice(object[keys[k]], 1);
  }

  retArray[smallIdx] = mergedArr;

  return retArray;
}

function mergeOverlappingIntervals(array) {
  let intervalNumbs = {};
  let retArr = [];
  let smallIdx;

  for (let i=0; i<array.length; i++){
    let indices = {};

    for (let k=array[i][0]; k<=array[i][1]; k++) {
      if (intervalNumbs[k])  {
        indices[k]= intervalNumbs[k];
      }
    }

    const indexKeys = Object.keys(indices);

    if (indexKeys.length) {
      smallIdx = minValue(indices, indexKeys);
      retArr = updateArr(indices, indexKeys, array[i], retArr, smallIdx);
    } else {
      retArr.push(array[i]);
      smallIdx = retArr.length - 1;
    }

    for (let k=array[i][0]; k<=array[i][1]; k++) {
      intervalNumbs[k] = `${smallIdx}`;
    }
  }

  return retArr;
}

exports.mergeOverlappingIntervals = mergeOverlappingIntervals;

// let input = [[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]];
// let input = [[1, 3], [2, 8], [9, 10]];
// let input = [[43, 49],[9, 12],[12, 54],[45, 90],[91, 93]];
let input = [[2, 3], [4, 5], [6, 7], [8, 9], [1, 10]];

let result = mergeOverlappingIntervals(input);
console.log(result);

/*
  Create a reference object to know which numbers have been seen in intervals
    The values point to the index of the interval within the return array

  Iterate across input Array
*/