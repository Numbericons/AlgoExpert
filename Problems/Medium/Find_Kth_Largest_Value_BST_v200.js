//T: O(h + k) height + input k nodes | S: O(h) where d is the height of the tree 
class BST {
  constructor(value) {
    this.value = value;
  }
}

function reverseInOrderTraverse(node, k, reference) {
  if (!node || reference.visited >= k) return;

  reverseInOrderTraverse(node.right, k, reference)

  if (reference.visited < k) {
    reference.visited += 1;
    reference.lastValue = node.value;
    reverseInOrderTraverse(node.left, k, reference)
  }
}

function findKthLargestValueInBst(tree, k) {
  let reference = {
    visited: 0,
    lastValue: null 
  }

  reverseInOrderTraverse(tree, k, reference);

  return reference.lastValue;
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