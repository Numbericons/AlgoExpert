// Time: O(N log N) N = length of array based on sorting
// Space: O(1)

// [3, 5, -4, 8, 11, 1, -1, 6]

function twoNumberSum(array, targetSum) {
  const sorted = array.sort((a, b) => a - b);
  let firstIdx = 0;
  let lastIdx = sorted.length - 1;

  while (firstIdx < lastIdx) {
    let sum = sorted[firstIdx] + sorted[lastIdx];

    if (sum === targetSum) return [sorted[firstIdx], sorted[lastIdx]] 

    if (sum < targetSum) { //increase left side
                            //firstIdx only increases and lastIdx only decreases ensuring we don't traverse already covered ground)
      firstIdx += 1;
    } else {
      lastIdx -= 1; 
    }
  }

  return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;