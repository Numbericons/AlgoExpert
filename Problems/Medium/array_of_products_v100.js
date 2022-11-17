// function arrayOfProducts(array) {
//   let retArr = [];
  
//   for (let i=0; i<array.length; i++){
//     let nextTotal = 1;
//     for (let k=0; k<array.length; k++){
//       if (i !== k) nextTotal *= array[k];
//     }

//     retArr.push(nextTotal);
//   }

//   return retArr;
// }


//T: O(N) where is length of array | S: O(N) 

function arrayOfProducts(array) {
  let retArr = [];
  let refObj = {};
  let currProduct = 1;
  
  for (let i=0; i<array.length; i++){
    refObj[i] = {};

    refObj[i].preProd = currProduct;

    currProduct *= array[i];
  }

  currProduct = 1

  for (let j=array.length - 1; j >= 0; j--) {
    refObj[j].postProd = currProduct;

    currProduct *= array[j];
  }

  for (let k=0; k<array.length; k++){
    const product = refObj[k].preProd * refObj[k].postProd;
    retArr.push(product);
  }

  return retArr;
}



// Do not edit the line below.
exports.arrayOfProducts = arrayOfProducts;

let input = [5,1,4,2];

let result = arrayOfProducts(input);
console.log(result);

/*
  Need to check every element
    Can we mutate the array? Doesn't seem helpful since need refernece to original
      Unless we iterate, use a hash table to store all values
        Then iterate again

  Wonder if tracking current total up until now helps more than just average case
    Then end of iteration add current value

  Input is something like [5,1,4,2] => [8 ,40, 10, 20]
*/