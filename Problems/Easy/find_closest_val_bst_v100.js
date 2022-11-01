// time o(n) since BST could have all nodes to one side | Space is o(n) number of stacks
function findClosestValueInBst(tree, target) {
  return findClosest(tree, target, Infinity);
}

function findClosest(tree, target, closest) {
  if (tree.value === target) {
    return tree.value;
  }

  const isCloser = Math.abs(target - tree.value) < Math.abs(target - closest);
  if (isCloser) closest = tree.value;

  if (tree.value < target) {
    if (tree.right) {
      return findClosest(tree.right, target, closest)
    }
  } else {
    if (tree.left) {
      return findClosest(tree.left, target, closest)
    }
  }

  return closest;
}


// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// time O(n) -> number of nodes average case O(logn) as discard half of tree each time
// space O(1) don't use additional memory without recursion
function findClosestValueInBst(tree, target) {
  let closest = Infinity;
  let node = tree;

  while (node) {
    if (node.value === target) return node.value;

    const isCloser = Math.abs(target - node.value) < Math.abs(target - closest);
    if (isCloser) closest = node.value;

    node = node.value < target ? node.right : node.left;
  }

  return closest;
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;

//          10
//       /      \ 
//      5         15
//    /  \      /    \
//   2    5    13    22
//  /           \
// 1            14