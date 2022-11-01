// time o(n) visit each node once | space o(1) 
function nodeDepths(root) {
  let queue = [root]; // pretend its a queue w/ o(1) shift
  let depthSum = 0;
  let depth = 0;
  let stepsTillDepth = 1;
  let node;

  while (queue.length) { // 2  | 3
    node = queue.shift();
    
    if (depth > 0) sum += depth;

    stepsTillDepth -= 1;
    if (stepsTillDepth === 0) depth += 1;
    

    if (node.left) {
      queue.push(node.left);
      stepsTillDepth += 1;
    }

    if (node.right) {
      queue.push(node.right);  //  3 | 4 | 5
      stepsTillDepth += 1;
    }
  }

  return depthSum;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

exports.nodeDepths = nodeDepths;

let result = nodeDepths(input);
console.log(result);

//recursive version
//   recursive calls include a current depth variable 
//   also uses an arrays pass by reference to maintain the return array
//
//   base case is when no left or right children
//      Then it adds its current value to the return array
//   
//   call to left and a call to right
//     (2) adds value passed to it
//     (3) adds value passed to it
//     (2) calls (4) and (5)
//       4 and 5 add values
//        4 calls 8 and 9
//          8 and 9 add values
//        4 calls 5
//          5 adds value
//     (3) calls 6 and 7
//        6 and 7 add values

//BFS -> iterative version
//   iterative  current depth variable 
//   return array
//   
//   node starts in queue
//     add node depth to depth array (either add 0 or skip first)
//     enqueue children then
//   queue to root left and a call to right
//     (2) adds value passed to it
//     (3) adds value passed to it
//     (2) calls (4) and (5)
//       4 and 5 add values
//     (3) calls 6 and 7
//        6 and 7 add values
//     4 calls 8 and 9