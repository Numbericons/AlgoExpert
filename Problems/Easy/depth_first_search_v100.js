// Time O(v + e) | O(N) nodes

// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.name);

    for (let i=0; i<this.children.length; i++){
      this.children[i].depthFirstSearch(array);
    }

    return array;
  }
}

exports.Node = Node;

let input = "abcdcaf";

let result = (input);
console.log(result);

/*
  Stack/recursive

  add own value to array
  iterate this.children array
    recursively call dfs w/ ret array

  Question: since input empty array, is it O(n) space to populate?
*/