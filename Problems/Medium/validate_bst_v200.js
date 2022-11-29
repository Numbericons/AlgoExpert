//T: O(n)  | S: O(n)
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
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

  static findNodeObj(array, id) {
    for (let i=0; i<array.length; i++){
      if (array[i].id === id) return array[i];
    }
  }

  static createTree(object) {
    const array = object.tree.nodes;
    const rootId = parseInt(array[0].id);

    let stack = [array[0]];
    let current, root, node, next;

    while (stack.length) {
      current = stack.pop();
      node = new BST(current.value);

      if (current.id === rootId.toString()) root = node;
      if (current.direction) current.parent[current.direction] = node;

      if (current.left) {
        next = BST.findNodeObj(array, current.left);
        next.direction = 'left';
        next.parent = node;
        stack.push(next);
      }
      if (current.right) {
        next = BST.findNodeObj(array, current.right);
        next.direction = 'right';
        next.parent = node;
        stack.push(next);
      }
    }

    return root;
  }
}

function validateDescendent(direction, ancestors, left, right) {
  const array = Object.keys(ancestors);

  for (let i=0;i<array.length; i++){
    if (direction === 'left') {
      if (left && ancestors[array[i]] <= left.value) return false;
      if (right && ancestors[array[i]] <= right.value) return false;
    } else {
      if (left && ancestors[array[i]] > left.value) return false;
      if (right && ancestors[array[i]] > right.value) return false;
    }
  }


  return true;
}

function validateBst(tree, min=-Infinity, max=Infinity) {
  const leftVal = tree.left ? tree.left.value : -Infinity;
  const rightVal = tree.right ? tree.right.value : Infinity;

  if (tree.value <= leftVal || tree.value > rightVal) return false;
  if (tree.value < min || tree.value > max) return false;

  const validLeft = tree.left ? validateBst(tree.left, min ,tree.value - 1) : true;
  const validRight = tree.right ? validateBst(tree.right, tree.value, max) : true;

  return validLeft && validRight;
}

exports.BST = BST;
exports.validateBst = validateBst;


// let input = {
//   "tree": {
//     "nodes": [
//       {"id": "10", "left": "5", "right": "15", "value": 10},
//       {"id": "15", "left": "13", "right": "22", "value": 15},
//       {"id": "22", "left": null, "right": null, "value": 22},
//       {"id": "13", "left": null, "right": "16", "value": 13},
//       {"id": "16", "left": null, "right": null, "value": 16},
//       {"id": "5", "left": "2", "right": "5-2", "value": 5},
//       {"id": "5-2", "left": null, "right": null, "value": 5},
//       {"id": "2", "left": "1", "right": null, "value": 2},
//       {"id": "1", "left": null, "right": null, "value": 1}
//     ],
//     "root": "10"
//   }
// }

// let input = {
//   "tree": {
//     "nodes": [
//       {"id": "10", "left": "5", "right": "15", "value": 10},
//       {"id": "15", "left": null, "right": "22", "value": 15},
//       {"id": "22", "left": null, "right": null, "value": 22},
//       {"id": "5", "left": "2", "right": "5-2", "value": 5},
//       {"id": "5-2", "left": null, "right": "11", "value": 5},
//       {"id": "11", "left": null, "right": null, "value": 11},
//       {"id": "2", "left": "1", "right": null, "value": 2},
//       {"id": "1", "left": null, "right": null, "value": 1}
//     ],
//     "root": "10"
//   }
// }

// let input = {
//   "tree": {
//     "nodes": [
//       {"id": "10", "left": "5", "right": "15", "value": 10},
//       {"id": "15", "left": null, "right": null, "value": 15},
//       {"id": "5", "left": null, "right": "10-2", "value": 5},
//       {"id": "10-2", "left": null, "right": null, "value": 10}
//     ],
//     "root": "10"
//   }
// }

let input = {
  "tree": {
    "nodes": [
      {"id": "10", "left": "5", "right": "15", "value": 10},
      {"id": "15", "left": "13", "right": "22", "value": 15},
      {"id": "22", "left": null, "right": null, "value": 22},
      {"id": "13", "left": null, "right": "14", "value": 13},
      {"id": "14", "left": null, "right": null, "value": 14},
      {"id": "5", "left": "2", "right": "5-2", "value": 5},
      {"id": "5-2", "left": null, "right": null, "value": 5},
      {"id": "2", "left": "1", "right": null, "value": 2},
      {"id": "1", "left": null, "right": null, "value": 1}
    ],
    "root": "10"
  }
}

let result = BST.createTree(input);
console.log(result);

let finalResult = validateBst(result)

console.log(finalResult);
/*

*/