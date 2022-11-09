//Time: O(N) where is N is nodes | Space: O(d) where d is the height of the root tree

function invertBinaryTree(tree) {
  let queue = [tree];

  while (queue.length) {
    let current = queue.shift();

    let temp = current.left;
    current.left = current.right;
    current.right = temp;

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return tree;
}

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.invertBinaryTree = invertBinaryTree;

let input = "abcdcaf";

let result = invertBinaryTree(input);
console.log(result);

/*
  Need to swap left and right values for current node
    Then iteratively or recursively call the function on those child node(s)

  O(N) -> each each node

  Iterative doesn't seem to need space, same time
    *Does need space for the queue, o(N) where recursive would be o(height of tree)

  
*/