//T: O(n^2) size of array nested for loop, decreasing search space w/ each iteratin for avg time | S: O(n) size of array
function threeNumberSum(array, targetSum) {
  let retArr = [];
  let triples = {};

  array = array.sort((a,b) => a - b);

  array.forEach(el => { triples[el] = true });

  for (let i=0; i<array.length; i++){
    let left = i;
    let right = array.length - 1;

    while (left < right) {
      let total = array[left] + array[right]
      let target = targetSum - total;
      if (target === array[left] || target === array[right]) {
        right -=1;
        continue;
      }

      if (triples[target]) {
        const triple = makeTriple(array[left], array[right], target);
        const tripleKey = triple.join(',')
        const existing = triples[tripleKey];

        if (!existing) {
          retArr.push(triple);
          triples[tripleKey] = true;
        }
      }

      if (target <= targetSum - total) {
        right -= 1;
      } else {
        left += 1;
      }
    }
  }

  return retArr;
}

//T: O(n^2) size of array nested for loop, decreasing search space w/ each iteratin for avg time | S: O(n) size of array
// function threeNumberSum(array, targetSum) { //[12, 3, 1, 2, -6, 5, -8, 6]
//   let retArr = [];
//   let triples = {};

//   array = array.sort((a,b) => a - b); // [-8, -6, 1, 2, 3, 5, 6, 12]

//   array.forEach(el => { triples[el] = true });

//   for (let i=0; i<array.length; i++){
//     for (let k=i+1; k<array.length; k++){
//       let target = targetSum - array[i] - array[k]; //i = 1, k = 2
//       if (target === array[i] || target === array[k]) continue;
//       if (triples[target]) { //5  match
//         const triple = makeTriple(array[i], array[k], target);
//         const tripleKey = triple.join(',')
//         const existing = triples[tripleKey];

//         if (!existing) retArr.push(triple);
//         triples[tripleKey] = true;
//       }
//     }
//   }

//   return retArr;
// }

function makeTriple(num1, num2, num3) {
  let array = [];

  const first = num3 < num1 ? num3 : num1;
  array.push(first);

  if (num3 > num1) {
    if (num3 > num2) {
      array.push(num2);
      array.push(num3)
    } else {
      array.push(num3);
      array.push(num2);
    }
  } else {
    array.push(num1);
    array.push(num2);
  }

  return array;
}

exports.threeNumberSum = threeNumberSum;

// let input = [12, 3, 1, 2, -6, 5, -8, 6];
let input = [12, 3, 1, 2, -6, 5, 0, -8, -1];

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