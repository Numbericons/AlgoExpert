// sample input: array = [1, 2, 3, 5, 6, 8, 9]

// other solution
//   low and high number pointers
//     if current number is lower than 'low' (or vice versa)
//       current number is added to the front (or back)

function sortedSquaredArray(array) {
  return array.map(el => el ** 2).sort((a, b) => a - b);
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;


//   2 inserts -> 1**2 and 2**2
//    1 is high and low, then 1 is low and 4 is high
//   new array -> [1,4]
        // 1 is low, 4 is high
//   now current is 3 or 3**2 = 9
//     9 is the new high
//   [1,4,9]
        // 1 is low, 9 is high

// [-4, -2, 0, 1, 4, 8, 10]
//  -4 => 16
//   [16], low is 16, high is 16
//  -2 => 4
//    [4,16] low is 4, high is 16
//  0 => 0, is low/high is true [0 is low]
//    [0, 4, 16], 0 is low, high is 16
//  1 => 1, not low/high
//    [0, 1, 4, 16], 0 is low, high is 16
//    Idea: compare current to low and high
//      determine smaller diff, if that is low, iterate up until find place
//         if that is high, iterate down until find place



// [-4, -2, 0, 1, 4, 8, 10]


// [0, 0, 0, 0, 0, 0, 0]

// i = 6
// small idx = 0
// big idx = 6

// abs smallVal = 4
// abs bigVal = 10

// abs small > big ?
//   No -> return array at i becomes larger val squared
//     and big idx --

// [-4, -2, 0, 1, 4, 8, 10]
// [0, 0, 0, 0, 0, 0, 100]

// small idx = 0
// big idx = 5

// abs smallVal = 4
// abs bigVal = 8

// abs small > big ?
//   No -> return array at i becomes larger val squared
//     and big idx --

// [-4, -2, 0, 1, 4, 8, 10]
// [0, 0, 0, 0, 0, 64, 100]

// small idx = 0
// big idx = 4

// abs smallVal = 4
// abs bigVal = 8

// abs small > big ?
//   No -> equal, return array at i becomes larger val squared
//     and big idx --

// [-4, -2, 0, 1, 4, 8, 10]
// [0, 0, 0, 0, 16, 64, 100]

// small idx = 0
// big idx = 3

// abs smallVal = 4
// abs bigVal = 1

// abs small > big ?
//   Yes -> return array at given idx becomes smaller val squared
//     and small idx ++

// [-4, -2, 0, 1, 4, 8, 10]
// [0, 0, 0, 16, 16, 64, 100]

// small idx = 1
// big idx = 3

// abs smallVal = 2
// abs bigVal = 1

// abs small > big ?
//   Yes -> return array at given idx becomes smaller val squared
//     and small idx ++

// [-4, -2, 0, 1, 4, 8, 10]
// [0, 0, 4, 16, 16, 64, 100]

// small idx = 2
// big idx = 3

// abs smallVal = 0
// abs bigVal = 1

// abs small > big ?
//   No -> return array at given idx becomes Larger val squared
//     and large idx --

// [-4, -2, 0, 1, 4, 8, 10]
// [0, 1, 4, 16, 16, 64, 100]

// small idx = 2
// big idx = 2

// abs smallVal = 0
// abs bigVal = 0

// abs small > big ?
//   No -> return array at given idx becomes Larger val squared
//     and large idx --

// end of loop:

// [-4, -2, 0, 1, 4, 8, 10]
// [0, 1, 4, 16, 16, 64, 100]
