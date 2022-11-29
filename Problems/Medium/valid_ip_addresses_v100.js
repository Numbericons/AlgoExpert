//T: O(n)  | S: O(n) 
function validIPAddresses(string) {
  return generateIPs(string, 3, 0);

  function generateIPs(string, decimals, start) {
    let array = [];
    let startsZero = false;

    if (decimals === 0) {
      const remainder = string.slice(start);
      startsZero = remainder[0] === '0' && remainder.length > 1;
      return parseInt(remainder) <= 255  && !startsZero ? remainder : '';
    }
    
    for (let i=0; i<3; i++){ //'1921680'
      let remainingLen = string.length - start - i;
      if ((decimals + 1) * 3 < remainingLen) continue;
      
      let current = string.slice(start, start + i + 1);

      startsZero = current[0] === '0' && current.length > 1;
      if (startsZero) continue;

      if (parseInt(current) > 255) continue;

      if (decimals > 0) current += '.';
      
      let childArr = generateIPs(string, decimals - 1, start + i + 1); // string, 2, start: 1

      if (typeof childArr === 'string') childArr = [childArr];

      for (let i=0; i<childArr.length; i++){
        if (childArr[i].length) array.push(current + childArr[i]);
      }
    }

    return array;
  }
}

exports.validIPAddresses = validIPAddresses;

// let input = '1921680'; // '1' + call('921680', 2)
let input = "00001"; // '1' + call('921680', 2)

let result = validIPAddresses(input);
console.log(result);

/*
  L1 '1921680', 3 dec, start 0 => For loop i is 0, current is '1.' calls child
    L2 '921680', 2 dec, start 1 => For loop i is 0, current is '9.'
      L3 '21680', 1 dec, start 2 => For loop i is 0, current is '2.' calls child
        L4 '1680', 0 dec, start 3 => For return '' as 1680 > 255
      L3 '21680', 1 dec, start 2 => For loop i is 1, current is '21.' calls child
        L4 '680', 0 dec, start 4 => For return '' as 680 > 255
      L3 '21680', 1 dec, start 2 => For loop i is 1, current is '216.' calls child
        L4 '80', 0 dec, start 5 => For return '80'
      L3 '21680', 1 dec, start 2 => For loop i is 1, current is '216.', return '216.80' 
    L2 '921680', 2 dec, start 1 => For loop i is 0, adds return '9.216.80'

    L2 '921680', 2 dec, start 1 => For loop i is 1, current is '92.', calls child
      L3 '1680', 1 dec, start 3 => For loop i is 0, current is '1.' calls child
        L4 '680', 0 dec, start 4 => For return '' as 680 > 255
      L3 '1680', 1 dec, start 3 => For loop i is 1, current is '16.' calls child
        L4 '80', 0 dec, start 5 => For return '80'
      L3 '1680', 1 dec, start 3 => For loop i is 1, return '16.80'
      L3 '1680', 1 dec, start 3 => For loop i is 2, current is '168.' calls child
        L4 '0', 0 dec, start 6 => For return '0'
      L3 '1680', 1 dec, start 3 => For loop i is 2, return '168.0'
    
      

    L2 '921680', 2 dec, start 1 => For loop i is 2, current is '921.' too large
  L1 '1921680', 3 dec, start 0 => For loop i is 1, current is '19.' calls child
    L2 '21680', 2 dec, start 2 => For loop i is 0, current is '2.' remaing length insufficient
    L2 '21680', 2 dec, start 2 => For loop i is 1, current is '21.'=> call child
      L3 '680', 1 dec, start 4 => For loop i is 0, current is '6.'=> iterate for loop, too large
      *if dec is 1 and len 3 return len if <= 255
    L2 '21680', 2 dec, start 2 => For loop i is 1, current is '21.'=> Child empty str, length constraint fails
    L2 '21680', 2 dec, start 2 => For loop i is 2, current is '216.'=> Call child
      L3 '80', 1 dec, start 5 => For loop i is 0, current is '8'=> iterate until i is 0, return '80'
    L2 '21680', 2 dec, start 2 => For loop i is 2, current is '216.'=> return '216.80'
  L1 '1921680', 3 dec, start 0 => For loop i is 1, current is '19.' => add '19.216.80' to array for pushing
  L1 '1921680', 3 dec, start 0 => For loop i is 2, current is '192.' => call child
    L2 '1680', 2 dec, start 3 => For loop i is 0, current is '1.' => calls child
      L3 '680' too large
    L2 '1680', 2 dec, start 3 => For loop i is 1, current is '16.' => calls child
      L3 return '80'
    L2 '1680', 2 dec, start 3 => For loop i is 1, current is '16.' returns 16.80
    L2 '1680', 2 dec, start 3 => For loop i is 2, current is '168.' => calls child
      L3 return '0'
  L1 gets 2 values to push to array [192.16.80, 192.168.0]


*/

/*
  Track number of decimals used
    Know there is a decimal after any 3 digits, since can't lead w/ a 0
      Also when 3 digits, needs to be <= 255
  Iterating across string
   See if a decimal can occur after current digit
    By making a call to the remainder of the string with - 1 decimals remaining
    Pattern - Always start w/ first digit

  When see if can make next recursive call
    Check if length of remaining string is >= 3 * decimals remaining

  

  // '1' + call('921680', 2)
*/