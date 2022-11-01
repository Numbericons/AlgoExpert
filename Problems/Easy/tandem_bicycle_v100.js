function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  let retVal = 0;
  redShirtSpeeds = redShirtSpeeds.sort((a,b) => a - b);
  
  //if want fastest, want to match low values with high
  blueShirtSpeeds = fastest ? blueShirtSpeeds.sort((a,b) => b - a) : blueShirtSpeeds.sort((a,b) =>  a - b);
  
  for(let i=0; i<redShirtSpeeds.length; i++){
    const bigRed = redShirtSpeeds[i] > blueShirtSpeeds[i];
    retVal += bigRed ? redShirtSpeeds[i] : blueShirtSpeeds[i];
  }

  return retVal;
}

// Do not edit the line below.
exports.tandemBicycle = tandemBicycle;

const redShirtSpeeds = [5, 5, 3, 9, 2]
const blueShirtSpeeds = [3, 6, 7, 2, 1]
const fastest = true

let result = tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest);
console.log(result);