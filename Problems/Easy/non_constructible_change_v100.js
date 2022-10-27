function makeCoinsObj(coins) {
  const obj = {};

  coins.forEach(coin => { obj[coin] ? obj[coin] += 1 : obj[coin] = 1 })

  return obj;
}

function makeChange(tryChange, coinObj, allCoins) {

}

// function nonConstructibleChange(coins) {
//   const coinObj = makeCoinsObj(coins);

//   const allCoins = Object.keys(coinObj);
//   let tryChange = 1;
//   let minChangeFail;

//   while (!minChangeFail) {
//     let change = makeChange(tryChange, coinObj, allCoins);

//     if (!change) {
//       minChangeFail = tryChange;
//     } else {
//       tryChange += 1;
//     }
//   }
  
//   return minChangeFail;
// }

function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b);

  let currChange = 0;

  for (let i=0; i<coins.length; i++){
    if (coins[i] > currChange + 1) {
      return currChange + 1;
    }
    
    currChange += coins[i];
  }

  return currChange + 1;
}

// Do not edit the line below.
exports.nonConstructibleChange = nonConstructibleChange;

let result = nonConstructibleChange([6, 4, 5, 1, 1, 8, 9]);
console.log(result)

// coins = [5, 7, 1, 1, 2, 3, 22]

//Approach 1

//Create reference object to track each coin and their respective counts
//  Get keys to know type of keys
//
//Start counting up and check if we can create the given #
//  Return when that is no longer the case

//Approach 2

//  Some of above but calculate permutations of coins
//   Then put in order and determine missing number 
//       or return one above highest possible value if no gaps (if actually possible)
//  Iterate keys, nested for loop for number of given coin available
//    Match these keys (nested k times) with all other coins and their various numbers
//      This gives all possible change including a given coin