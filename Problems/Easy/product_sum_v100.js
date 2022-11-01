// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.

//Time: O(n) one iteration per element in array | space o(n) since 

function productSum(array, depth = 1) {
  if (array.length === 1) {
    if (Array.isArray(array[0])) {
      return productSum(array[0], depth + 1);
    } else {
      return array[0] * depth;
    }
  } 

  let total = 0;

  for (let i=0; i<array.length; i++){
    if (Array.isArray(array[i])) {
      total += productSum(array[i], depth + 1);
    } else {
      total += array[i];
    }
  }

  return total * depth;
}

// Do not edit the line below.
exports.productSum = productSum;

let input = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];

let result = productSum(input);
console.log(result);

// keep grand total
// iterate through array
//
//   check if element is an integer
//     if so add to grand total
//   if not
//     add to grand total a
//       call to recursive function
//          call includes the current depth of 2
//       