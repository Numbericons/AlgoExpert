// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function calcBranchSums(node, total, sums) {
  if (!node.left && !node.right) sums.push(node.value + total);

  if (node.left) calcBranchSums(node.left, total + node.value, sums)
  if (node.right) calcBranchSums(node.right, total + node.value, sums)
}

function branchSums(root) {
  let sums = [];

  calcBranchSums(root, 0, sums);
  
  return sums;
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;

// function branchSums(root, sum=0) {
//   if (!root.left && !root.right) return root.value + sum;
  
//   let sums = [];

//   if (root.left) {
//     val = branchSums(root.left, sum+root.value)
//     valueArr.push(val[0] + val[1]);
//   } else {
//     valueArr.push(0);
//   }
  
//   if (root.right) {
//     val = branchSums(root.right, sum+root.value)
//     valueArr.push(val[0] + val[1]);
//   } else {
//     valueArr.push(0);
//   }

//   return valueArr;
// }

//add some process where have val + perms(left) and val + perms(right)


// Example:
//        1
//      2       3
//     4   5   6 7
//    8 9 10

//recursive idea
//  function returns an array with 2 elements
//     first element is recursive call to left if el.left else 0
//     second element is recrusive call to right if el.right else 0

// 2nd idea -> iterative
//   have a stack
//   at given node, add left side and permutations
//      then add right side and permutations
//   