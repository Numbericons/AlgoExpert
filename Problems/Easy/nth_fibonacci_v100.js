function getNthFib(n) {
  const fib = getFib(n);

  return fib[fib.length - 1];
}

function getFib(n){
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const sequence = getFib(n - 1);
  sequence.push(sequence[sequence.length - 2] + sequence[sequence.length - 1]);
  
  return sequence;
}

// Do not edit the line below.
exports.getNthFib = getNthFib;

let input = 9;

let result = getFib(input);
console.log(result);