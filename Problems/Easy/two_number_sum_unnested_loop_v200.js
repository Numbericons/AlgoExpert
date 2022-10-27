// Time: O(N) N = length of array
// Space: O(N) N = inserts into numbers ref object

function twoNumberSum(array, targetSum) {
  const numbers = {};

  for (let k=0; k<array.length; k++){
    const target = targetSum - array[k];
    
    if (numbers[target]) return [array[k], target];

    numbers[array[k]] = true;
  }

  return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;