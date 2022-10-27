// Time: O(N) N = length of array
// Space: O(1)

function isValidSubsequence(array, sequence) {
  for (let k=0; k<array.length; k++){
    if (array[k] === sequence[0]) sequence.shift();

    if (sequence.length === 0) break;
  }

  return sequence.length === 0 ? true : false;
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;

//iterate through larger array
//  since need to be in order, remove elements from sequence when array[i] equal at first position of sequence
//  at end, if sequence is empty, it is a valid subsequence

isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10 ], [1, 6, -1, 10]);

// array = [5, 1, 22, 25, 6, -1, 8, 10 ]
// sequence = [1, 6, -1, 10]  ->   -1, 10