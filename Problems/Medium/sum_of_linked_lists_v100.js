//Time O(N + T) where N and T are the input lists || Space O(N+T)

// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  let val1 = linkedSum(linkedListOne);
  let val2 = linkedSum(linkedListTwo);

  const total = parseInt(val1) + parseInt(val2);

  return createLinkedList(total);
}

function createLinkedList(int) {
  const array = int.toString().split("");

  const headVal = array[array.length - 1 ];
  let head = new LinkedList(parseInt(headVal));
  let current = head;

  for (let i=array.length - 2; i >= 0; i--){
    current.next = new LinkedList(parseInt(array[i]));

    current = current.next
  }

  return head;
}

// function linkedSum(list) {
//   if (!list) return 0;

//   let sumArr = [list.value];

//   while (list.next) {
//     sumArr.push(list.next.value);
//     list = list.next;
//   }

//   return sumArr.reverse().join("");
// }

function linkedSum(list) {
  if (!list.next) return list.value.toString();

  return linkedSum(list.next) + list.value.toString();
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

let result = sumOfLinkedLists(listHead1);
console.log(result);

/*
  Plan 1:

  Using a helper, get the value of both linkedLists
  Add the results together

  Create a new linked list from the values, starting witht he least significant digit etc.
*/