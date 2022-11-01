//Goal: O(log n) time as halving array each iteration | O(log n) space for recursive calls

function binarySearch(array, target) {
  if (array.length === 0) return -1;

  const even = array.length % 2 === 0;

  const midpoint = even ? parseInt((array.length - 1) / 2) : parseInt(array.length / 2);
  const midEl = array[midpoint];

  if (midEl === target) return midpoint;

  if (midEl > target) {
    return binarySearch(array.slice(0, midpoint), target);
  } else {
    const found = binarySearch(array.slice(midpoint+1), target);
    return found === -1 ? -1 : midpoint + 1 + found;
  }
}

// Do not edit the line below.
exports.binarySearch = binarySearch;

function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const testEl = array[mid];
    
    if (target === testEl) {
      return mid;
    } else if (target < testEl) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

let array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];
let target = 33;

let result = binarySearch(array, target);
console.log(result);

//check middle element
//  see if current value is target
//    return idx
//    **have to account for idx w/ recursive calls when to right**
//  if value is < target
//    recrusive to right
//  if value is > target
//    recursive to left
