function isMonotonic(array) {
  let increasing = true;
  let decreasing = true;

  for (let i=1; i<array.length; i++){
    if (array[i] > array[i-1]) {
      if (!increasing) break
      decreasing = false;
    } else if (array[i] < [array[i-1]]) {
      if (!decreasing) break
      increasing = false;
    }
  }

  return increasing || decreasing;
}

//time o(n) | space o(1)

function isMonotonic(array) {
  let last = '';

  for (let i=1; i<array.length; i++){
    if (array[i] > array[i-1]) {
      if (last === 'decreasing') return false;
      last = 'increasing';
    } else if (array[i] < [array[i-1]]) {
      if (last === 'increasing') return false;
      last = 'decreasing';
    }
  }

  return true;
}

// Do not edit the line below.
exports.isMonotonic = isMonotonic;

let input = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001];

let result = isMonotonic(input);
console.log(result);

//thoughts
//  could be something with abs value here
//  

//idea 1 
//  booleans for increasing & decreasing
//  iterate array
//    compare element to last
//    if same, continue
//    otherwise increasing or decreasing becomes false
//      if both variables are false, function returns false