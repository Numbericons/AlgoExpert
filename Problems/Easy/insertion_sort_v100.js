//Time O(N)2 || Space O(1)

function insertionSort(array) {
  let sortedEnd = 0;

  for (let i=1; i<array.length; i++){
    let curr = i;
 
    for (let k=sortedEnd; k >= 0; k--){
      if (array[curr] < array[k]) {
        let temp = array[curr];
        array[curr] = array[k];
        array[k] = temp;

        curr = k;
      } else {
        break;
      }
    }

    sortedEnd += 1;
  }

  return array;
}

exports.insertionSort = insertionSort;

let input = [8, 5, 2, 9, 5, 6, 3];

let result = insertionSort(input);
console.log(result);