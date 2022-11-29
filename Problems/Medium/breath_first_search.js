//T: O(n)  | S: O(n) 
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
    let queue = [this]; //using an array to represent a queue and o(1) shift

    while (queue.length) {
      let current = queue.shift();
      array.push(current.name);

      let children = current.children;

      for (let i=0; i<children.length; i++){
        queue.push(children[i]);
      }
    }

    return array;
  }
}

exports.Node = Node;

let input = "abcdcaf";

let result = (input);
console.log(result);

/*
*/