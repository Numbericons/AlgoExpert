function firstDuplicateValue(array) {
  let refObj = {};

  for (let i=0; i<array.length; i++){
    if (!refObj[array[i]]) {
      refObj[array[i]] = true;
    } else {
      return array[i];
    }
  }

  return -1;
}

// Do not edit the line below.
exports.firstDuplicateValue = firstDuplicateValue;


let input = [2, 1, 5, 2, 3, 3, 4];
// .        [1, 0, 4, 1, 2, 2, 3]
/*
  {
    2: 1,  1 => 2
    1: 1,  
    5: 1,
    3: 1,  1 => 2
    4: 1
  }
*/

let result = firstDuplicateValue(input);
console.log(result);

/*
  Initial thought:
  Iterate array, count chars in ref obj
  Re-iterate Array, return first char where ref obj lookup returns a value > 1

  //Time: O(N) where is length of array | Space: O(C) where C is unique chars in array

  If we sort the array, N log N time, then we can't tell when given chars 2nd occurence came first
    Also cant tell when 2nd occurence happened this way
    Shouldnt need 2nd loop

  Revise initial:
  Only iterate array once, track the chars that have occured
    When re-encounter a tracked char, return that char as it will be the first of any potential 2nd occurences
    Still: Time: O(N) where is length of array | Space: O(C) where C is unique chars in array
        But we will return early in average cases
*/