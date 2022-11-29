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

function reconstructBst(array) {
  const head = new BST(array[0]);
  let idx = 1;
  
  for (let i=idx; i<array.length; i++){
    head.insert(array[i]);
  }
  
  return head;
}

exports.BST = BST;
exports.reconstructBst = reconstructBst;


let input = "abcdcaf";

let result = reconstructBst(input);
console.log(result);

/*
  Know pattern is Current, left, right

  Iterate array

    Create a BST of current element
      Include a parent value?
    
  
*/