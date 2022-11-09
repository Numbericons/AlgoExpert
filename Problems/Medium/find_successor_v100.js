// O(d) height of tree space, O(N) time
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function findSuccessor(tree, node) {
  const order = [];
  
  order = inOrder(tree, order, node);

  return order[order.length -1];

  // const idx = order.indexOf(node);
  // return order[idx + 1];
}

function inOrder(node, order, target) {
  if (node.left) inOrder(node.left, order, target);
  
  order.push(node);
  
  if (node.right) inOrder(node.right, order, target);

  return order;
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.findSuccessor = findSuccessor;


let input = "abcdcaf";

let result = findSuccessor(input);
console.log(result);

// 1. Traverse the left subtree, i.e., call Inorder (left->subtree)
// 2. Visit the root.
// 3. Traverse the right subtree, i.e., call Inorder(right->subtree)


/*
  Plan to construct the in order elements, return one after input node
    Maybe return the successor early, at time of adding i + 1, i.e. the successor to the list
      More of an average case improvement idea, too complex to short circuit the recursion

  Want a stack, leans towards recursive. O(d) height of tree space, O(N) time

  Av
*/