// Time: O(N) N = length of array
// Space: O(N) N = inserts into numbers ref object

function twoNumberSum(array, targetSum) {
  const numbers = {};

  for (let i=0; i<array.length; i++){
    numbers[array[i]] = true;
  }

  for (let k=0; k<array.length; k++){
    numbers[array[k]] = true;

    const target = targetSum - array[k];

    if (numbers[target]) return [array[k], target];
  }

  return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;