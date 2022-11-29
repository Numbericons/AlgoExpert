//T: O(n) number of nodes since input target k could be == n | S: O(d) where d is the height of the tree 
class BST {
  constructor(value) {
    this.value = value;
  }
}

function findkVal(tree, k, ref, dir) { //L1 15
  if (tree.value === 25) debugger;

  if (ref.k === 0) return tree.value;
  let callRight, callLeft;

   if (!tree.right && dir === 'right') {
    ref.k -= 1;
    ref.highestFound = true;
    return tree.value;
   }

  if (tree.right) {
    callRight = findkVal(tree.right,k, ref, dir); //15 => 20 => 22

    if (ref.k === 0) return callRight;
  }
  
  if (ref.highestFound && ref.k === 1) {
    ref.k -= 1;
    return tree.value;
  }
  
  if (ref.k !== 1) ref.k -= 1;

  if (tree.left) {
    callLeft = findkVal(tree.left,k, ref);

    if (ref.k === 0) return callLeft; //found is set to true again, k is now 0, return callLeft val
    if (ref.k === 1) return tree.value;
  }

  return -1;
}

function findKthLargestValueInBst(tree, k) {
  if (!tree.left && !tree.right) {
    return k === 1 ? tree.value : -1;
  }
  
  let refObj = { k: k };

  const result = findkVal(tree, k, refObj);

  return result ? result : -1;
}

exports.BST = BST;
exports.findKthLargestValueInBst = findKthLargestValueInBst;


// **CASE 4 \\

const root = new BST(99727);

  let current1 = new BST(99);
  root.left = current1;

    current2 = new BST(727);
    current1.right = current2;

// **CASE 3 \\

// const root = new BST(20);

//   let current1 = new BST(25);
//   root.right = current1;

//     let current2 = new BST(30);
//     current1.right = current2;

//     current2 = new BST(21);
//     current1.left = current2;

//       current1 = new BST(22);
//       current2.right = current1;

//   current1 = new BST(15);
//   root.left = current1;

//     current2 = new BST(19);
//     current1.right = current2;

//     current2 = new BST(10);
//     current1.left = current2

// **CASE 2 \\

// const root = new BST(15);

// let current1 = new BST(20);
// root.right = current1;

// let current2 = new BST(22);
// current1.right = current2;

// current2 = new BST(17);
// current1.left = current2;

// current1 = new BST(5);
// root.left = current1;

// current2 = new BST(5);
// current1.right = current2;

// current2 = new BST(2);
// current1.left = current2;

// current1 = new BST(3);
// current2.right = current2;

// current1 = new BST(1);
// current2.left = current2;

// **CASE 1 \\

// const root = new BST(1);

// let current1 = new BST(2);
// root.right = current1;

// current2 = new BST(3);
// current1.right = current2;

// current1 = new BST(4);
// current2.right = current1;

// current2 = new BST(5);
// current1.right = current2;

let result = findKthLargestValueInBst(root, 1);
console.log(result);

/*
  Sorted structure, thinking log time could be possible
  Dont need to track the values, just the value at a specific stack frame
    Likely stack since need to essentially go to the largest value leaf and then go back up the stack
      Each stack operate on left and right children
      From largest element, go back up
        At that point, if input k is 1
          Want to return that value
        Other look for k - 1th element

  Start at 15
    Go Right => 20
      Go Right => 22
        Base case, no right*
            What about no left?
        K = 3, k - 1 = 2
    Back to 20
      Check K, K--  is 1
      Go to Left child 17
        K is 1, return 17
    Return to 20
  Return 15
    Element found return element
    If K was > 1, we would go left
      

  Start 15
*/