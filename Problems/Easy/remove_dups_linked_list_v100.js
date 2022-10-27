//Time: o(n), length of linked list | Space: o(1) mutated existing linked list

// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  let current = linkedList;

  while (current.next !== null) {
    if (current.value === current.next.value) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return linkedList;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;

// linkedList = 1 -> 1 -> 3 -> 4 -> 4 -> 4 -> 5 -> 6-> 6// the head node with value 1

// 1 is current list value, its next list's value is 1
//   since next lists' value is equal, current list's next list becomes the list with value 3
//       While holds, now current and current.next value are different
//         Current.next becomes current.next.next

//Approach 1

//start at head
//  Keep checking if next node has same value as current
//     If true, keep trying to find the next different valued node
//  Stop when next is null
//return list