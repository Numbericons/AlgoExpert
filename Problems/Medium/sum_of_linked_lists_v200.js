//Time O(n) n based on the longer list | Space o(n) n based on longer list

// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  let total = [];
  let overflow = 0;

  let currOne = linkedListOne;
  let currTwo = linkedListTwo;

  while (currOne || currTwo) {
    let val1 = currOne ? currOne.value : 0;
    let val2 = currTwo ? currTwo.value : 0;

    let sum = val1 + val2 + overflow;
    if (sum > 9) {
      overflow = 1;
      sum -= 10;
    } else {
      overflow = 0;
    }

    if (currOne) currOne = currOne.next;
    if (currTwo) currTwo = currTwo.next;

    total.push(sum);
  }

  if (overflow) total.push(overflow);

  return createLinkedList(total);
}

function createLinkedList(int) {
  const array = int.reverse();

  const headVal = array[array.length - 1 ];
  let head = new LinkedList(headVal);
  let current = head;

  for (let i=array.length - 2; i >= 0; i--){
    current.next = new LinkedList(array[i]);

    current = current.next
  }

  return head;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.sumOfLinkedLists = sumOfLinkedLists;

// linkedListOne = 2 -> 4 -> 7 -> 1
// linkedListTwo = 9 -> 4 -> 5

let listHead1 = new LinkedList(2);
let listHead2 = new LinkedList(4);
let listHead3 = new LinkedList(7);
let listHead4 = new LinkedList(1);

listHead1.next = listHead2;
listHead2.next = listHead3;
listHead3.next = listHead4;

let listHeadTwo1 = new LinkedList(9);
let listHeadTwo2 = new LinkedList(4);
let listHeadTwo3 = new LinkedList(5);

listHeadTwo1.next = listHeadTwo2;
listHeadTwo2.next = listHeadTwo3;

let result = sumOfLinkedLists(listHead1, listHeadTwo1);
console.log(result);

/*
  Plan 1:

  Using a helper, get the value of both linkedLists
  Add the results together

  Create a new linked list from the values, starting witht he least significant digit etc.
*/