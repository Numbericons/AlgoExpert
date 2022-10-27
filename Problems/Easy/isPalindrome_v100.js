function isPalindrome(string) {
  let first = 0;
  let last = string.length - 1;
  
  while (first < last) {
    if (string[first] !== string[last]) return false;

    first += 1;
    last -= 1;
  }

  return true;
}

// Do not edit the line below.
exports.isPalindrome = isPalindrome;

function reverse(string) {
  if (string.length < 2) return string;
  const len = string.length - 1;

  return string[len] + reverse(string.slice(0, len));
}

function isPalindrome(string) {
  return string === reverse(string);
}

// Do not edit the line below.
exports.isPalindrome = isPalindrome;

// string = abcdcba

// iterate chars of strings
//    create new string in reverse order
//  o(n) time for the iteration and o(n) space for the new string;

//Pointer approach idea
//   Start/end of string pointers
//   Check if equal, return false if not
//     else increase start, decrease end

//   Gives o(1) space since no new string created
//     Is time o(log n) or o(n) => only have to iterate at most 1/2 of elements
//       Believe o(n) but average case should be ~ 1/2 of iterating entire string