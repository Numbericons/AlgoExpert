//T: O(n)  | S: O(n) 

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  addChild(node, target) {
    let newNode = new BST(target)

    if (node && node.value > target) {
      if (node.left) {
        if (node.left.value > target) {
          node.left.left = newNode;
        } else {
          newNode.left = node.left;
          node.left = newNode;
        }
      } else {
        node.left = newNode;
      }
    } else {
      if (node.right) {
        if (node.right.value > target) {
          node.right.left = newNode;
        } else {
          newNode.left = node.right;
          node.right = newNode;
        }
      } else {
        node.right = newNode;
      }
    }
  }

  insert(target, node = this) {
    const currDiff = Math.abs(target - node.value);
    let leftDiff = Infinity;
    let rightDiff = Infinity;
    
    if (node.left) leftDiff = Math.abs(target - node.left.value);
    if (node.right) rightDiff = Math.abs(target - node.right.value);

    if (currDiff < leftDiff) {
      if (currDiff < rightDiff) {
        //try to insert towards the direction with a lesser diff
          //dont want each bst node to track its smallest and largest children
            //Still insufficient, could be a value in the middle that we want
        
        this.addChild(node, target);
      } else {
        if (node.right) {
          this.insert(target, node.right)
        } else {
          node.right = new BST(target);
        }
      }
    } else {
      const next = leftDiff < rightDiff ? node.left : node.right;
      if (next) this.insert(target, next);
    }
  }

  contains(value) {
    
  }

  remove(value) {
    if (!this.left && !this.right) return this;

    return this;
  }
}

exports.BST = BST;

let head = new BST(10);
head.insert(5);
head.insert(15);
head.insert(2);
head.insert(5);
head.insert(13);
head.insert(22);
head.insert(1);
head.insert(14);
head.insert(12);

let result = (head);
console.log(result);



/*
  Insert
    Find the correct parent
    Starts at root, calc difference (and send diff in recursive calls)
      If target - root is positive
        Try to go right
      If target - root is negative
        Try to go left

    When correct parent found
      If target < parent
        Check if parent.left
          If not, set target node as child
          If so, if target > node.left
            target becomes node.left and node.left becomes target.left
            Else: target becomes node.left.left
      Else
        Check if parent.right

  Contains seems to be a traversal

  Removal returns early if no children
    Covers 

*/