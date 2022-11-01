//Time: o(n logn) n is length of queries array | Space: o(1)
function minimumWaitingTime(queries) {
  queries = queries.sort((a, b) => a - b);
  let retValue = 0;
  let pastDigits = 0;

  for (let i=0; i<queries.length; i++){
    retValue += pastDigits;

    pastDigits += queries[i];
  }

  return retValue;
}

// Do not edit the line below.
exports.minimumWaitingTime = minimumWaitingTime;

let queries = [3, 2, 1, 2, 6];


function minimumWaitingTime(queries) {
  queries = queries.sort((a, b) => a - b);
  let retValue = 0;
  let pastDigits = 0;

  for (let i=0; i<queries.length; i++){
    let queriesLeft = queries.length - (i + 1);

    retValue += queriesLeft * queries[i];
  }

  return retValue;
}