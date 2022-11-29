//T: O(n) nodes since binary so not factoring edges | S: O(n) nodes since binary so not factoring edges
function inOrderTraverse(tree, array) {
  if (!tree) return;

  inOrderTraverse(tree.left, array);
  array.push(tree.value);
  inOrderTraverse(tree.right, array); 

  return array;
}

//go left, visit self, go right

function preOrderTraverse(tree, array) {
  if (!tree) return;

  array.push(tree.value);
  preOrderTraverse(tree.left, array);
  preOrderTraverse(tree.right, array); 

  return array;
}

//think: visit self, go left, go right

function postOrderTraverse(tree, array) {
  if (!tree) return;

  postOrderTraverse(tree.left, array);
  postOrderTraverse(tree.right, array); 
  array.push(tree.value);

  return array;
}

//think: go left, go right, visit self

exports.inOrderTraverse = inOrderTraverse;
exports.preOrderTraverse = preOrderTraverse;
exports.postOrderTraverse = postOrderTraverse;

let input = "abcdcaf";

let result = (input);
console.log(result);

/*
*/