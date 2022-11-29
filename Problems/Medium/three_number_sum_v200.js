//T: O(n^2) size of array iterated across and the while loop looking at up to n - 1 elements | S: O(n) size of array

function threeNumberSum(array, target) {
  let retArr = [];

  array = array.sort((a,b) => a - b);
  
  for (let i=0; i<array.length; i++){
    let current = array[i];
    let left = i + 1;
    let right = array.length - 1;

    while (left < right) {
      let total = current + array[left] + array[right];
      if (total === target) {
        retArr.push([current, array[left], array[right]]);
        left += 1;
        right -= 1;
      } else if (total < target) {
        left += 1;
      } else {
        right -= 1;
      }
    }
  }

  return retArr;
}

exports.threeNumberSum = threeNumberSum;

let input = [12, 3, 1, 2, -6, 5, -8, 6];
// let input = [12, 3, 1, 2, -6, 5, 0, -8, -1];

let result = threeNumberSum(input, 0);
console.log(result);

/*
  Problem seems to hint at sorting the array initiall
    As the values will need to be ascending in output
  O(n log n)

  Iterate array, keep track of all values

  Then we can check pairs of values summed against the reference object to see if the needed element exists
    Points to a O(n^2) time solution
*/ 