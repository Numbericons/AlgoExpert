function bubbleSort(array) {
  for (let i=0; i<array.length - 1; i++){
    if (array[i] > array[i+1]) {
      let temp = array[i];
      array[i] = array[i+1];
      array[i+1] = temp;

      i = -1;
    }
  }

  return array;
}

// Do not edit the line below.
exports.bubbleSort = bubbleSort;

let result = bubbleSort([8, 5, 2, 9, 5, 6 , 3]);
console.log(result);

// array = [ 8, 5, 2, 9, 5, 6 , 3]
//    after first for loop iteration
//    [ 5, 8, 2, 9, 5, 6 , 3]

//     No swap on i = 0 (after reset)
//       Swap on i = 1
//     [ 5, 2, 8, 9, 5, 6 , 3]

//iterate array
//  nested iteration
//    compare to swap array[i] & array[i+1]

//  