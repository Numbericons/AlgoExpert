//T: O(n)  | S: O(n) 
class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = new BST(value);
      }
    } else {
      if (this.right) {
        this.right.insert(value);
      } else {
        this.right = new BST(value);
      }
    }

    return this;
  }
}

// function minHeightBst(array) {
  // if (array.length === 0) return null;
//   let middle = Math.floor(array.length / 2);
//   const head = new BST(array[middle]);

//   if (array.length === 1) return head;

//   head.left = minHeightBst(array.slice(0,middle));
//   head.right = minHeightBst(array.slice(middle+1));
  
//   return head;
// }

function minHeightBst(array, first=0, last=array.length) {
  if (first >= last) return null;

  let middle = first + Math.floor((last - first) / 2);
  const head = new BST(array[middle]);

  if (first + 1 === last) return head;

  head.left = minHeightBst(array, first, middle);
  head.right = minHeightBst(array, middle+1, last);
  
  return head;
}

exports.BST = BST;
exports.minHeightBst = minHeightBst;


let input = [1, 2, 5, 7, 10, 13, 14, 15, 22];

let result = minHeightBst(input);
console.log(result);

/*
  A pattern:
    Want middle value in a sequence
      Start with array length 9
        Want 4 values to the left
        Want 4 values to the right
      Left values 1,2,5,7
        Take middle again, either 1 or 2
          Taking 5
            Left 1,2
            Right 7
      
  Believe sample is showing that if we take either of the middle elements of a sequence the above holds
    
  
*/