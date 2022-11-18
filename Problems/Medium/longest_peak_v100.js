
//T: O(n) iterating across array, then continue left and right as far as possible | S: O(1)
function longestPeak(array) {
  let longest = 0;

  for (let i=1; i<array.length-1; i++){ // [1, 3, 2]
    if (array[i] === 10) debugger;
    if (array[i-1] >= array[i]) continue;
    if (array[i+1] >= array[i]) continue;

    let current = 1;
    let level = 1;
    
    while (array[i-level] < array[i-level+1]) {
      current += 1;
      level += 1;
    }

    if (current == 1) continue;

    level = 1;

    while (array[i+level] < array[i+level-1]) {
      current += 1;
      level += 1;
    }

    if (current > 1 && current > longest) longest = current;
  }

  return longest;
}

//T: O(n^2) iterating across array, then smaller portion of array but worst case n^2 | S: O(1)
// function longestPeak(array) {
//   let longest = 0;

//   for (let i=0; i<array.length; i++){ // [1, 3, 2]
//     let current = 1;
//     let direction = 'up';

//     if (longest > array.length - 1 - i) break;

//     for (let k=i+1; k<array.length; k++){ // i = 0, k = 1
//       if (array[k] === array[k-1]) break;

//       if (direction === 'up') {
//         if (array[k] > array[k-1]) {
//           current += 1; //2
//         } else {
//           if (current == 1) break;
//           direction = 'down';
//           current += 1; //3
//         }
//       } else {
//         if (array[k] < array[k-1]) {
//           current += 1;
//         } else {
//           break;
//         }
//       }
//     }
//     const longerPath = current > 1 && current > longest; //3
//     if (longerPath) longest = current; //3
//   }

//   return longest;
// }

//T: O(n^2) iterating across array, then smaller portion of array but worst case n^2 | S: O(1)
// function longestPeak(array) {
//   let longest = 0;

//   for (let i=0; i<array.length; i++){ // [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]
//     let current = 1;
//     let ascent = 0;
//     let direction = 'up';

//     if (longest > array.length - 1 - i) break;

//     for (let k=i; k<array.length; k++){ // i = 5, k = 4, array[k-1] = 0, array[k] = 10
//       if (array[k] === array[k-1]) break;
//       if (current > 1 && ascent <= 0) break; //break

//       if (direction === 'up') {
//         if (array[k] > array[k-1]) {
//           ascent += 1; //1
//           current += 1; //2
//         } else {
//           direction = 'down';
//           ascent -= 1; //0
//           if (ascent >= 0) current += 1; //3
//         }
//       } else {
//         if (array[k] < array[k-1]) {
//           ascent -= 1;
//           if (ascent >= 0) current += 1;
//         } else {
//           break;
//         }
//       }
//     }
//     const longerPath = ascent === 0 && current > 1 && current > longest; //3
//     if (longerPath) longest = current; //3
//   }

//   return longest;
// }

// Do not edit the line below.
exports.longestPeak = longestPeak;

// let input = [1, 3, 2];
let input = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];

let result = longestPeak(input);
console.log(result);

/*
  Track longest peak
  Iterate across the array
  At each idx, check the peak where current index can be the starting point

    If next val lower, continue
    If next val greater, go up as far possible
      Then check if we can go back down as far
      If so, check against longest peak
        Update longest if needed

  Check if remaining length of array is enough to challenge the longest peak
*/