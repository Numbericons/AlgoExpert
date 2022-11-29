//T: O(n) length of string | S: O(n) length of string from split and memory for stack
function balancedBrackets(string) {
  let stack = [];
  let array = string.split("");

  const bracketBuddies = {
    '}': '{',
    ']': '[',
    ')': '(',
    '{': 'left',
    '[': 'left', 
    '(': 'left'
  }

  for (let i=0; i<array.length; i++){
    const type = bracketBuddies[array[i]];
    if (type === 'left') {
      stack.push(array[i]);
    } else if (type) {
      if (stack[stack.length -1] === type) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}

exports.balancedBrackets = balancedBrackets;

let input = "abcdcaf";

let result = (input);
console.log(result);

/*
  Iterate string
    Check top of stack
      If current element is a left
        Add to stack
      If current element is right and closes top element
        Pop that element and continue
      If current element is a right element and not closing last
        Return false
  Return true when iteration completes if stack is empty
*/