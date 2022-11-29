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

  insert(target, node = this, bestDiff = Infinity) {
    const currDiff = Math.abs(target - node.value);
    
    const next = target < node.value ? node.left : node.right;
    const nextDiff = currDiff < bestDiff ? currDiff : bestDiff;

    const recursiveDiff = next ? this.insert(target, next, nextDiff) : Infinity;

    const currentDiffLowest = currDiff <= bestDiff && currDiff < recursiveDiff;

    if (currentDiffLowest) this.addChild(node, target);

    const newBestDiff = nextDiff <= recursiveDiff ? nextDiff : recursiveDiff;

    return newBestDiff;
  }

  contains(value) {
    if (value === this.value) return true;

    if (this.value > value) {
      if (this.left) return this.left.contains(value);
    } else {
      if (this.right) return this.right.contains(value);
    }
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

console.log(head);



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

    

  Contains seems to be a simple traversal

  Removal returns early if no children
    Covers 

    Known we had a BST
      Need a value bigger than root's left value
        Smallest value to the right of root
      Or a value smaller than roots right value

    Keep reference to stranded children
      Recursively access and then Insert those values into head
    

*/