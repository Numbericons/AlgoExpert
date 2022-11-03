//Time O(N)2 where n is length of array

function selectionSort(array) {
  // let sorted = [];
  
  for (let i=0; i<array.length-1; i++){
    let currVal = array[i]; //8
    let smallIdx = i;

    for (let k=i+1; k<array.length; k++){
      if (array[k] < currVal) {
        currVal = array[k];
        smallIdx = k;
      }
    }

    if (i !== smallIdx) {
      // sorted.push(array[smallIdx]);
      let temp = array[smallIdx];

      array[smallIdx] = array[i];
      array[i] = temp;
    }
  }

  return array;
}

// Do not edit the line below.
exports.selectionSort = selectionSort;

let input = [8, 5, 2, 9, 5, 6, 3];
// let input = [1, 2, 3];

let result = selectionSort(input);
console.log(result);