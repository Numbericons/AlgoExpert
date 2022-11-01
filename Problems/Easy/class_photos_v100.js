//Time O(n logn) for sorting | Space O(1) as we mutate the parameter arrays

function classPhotos (redShirtHeights, blueShirtHeights) {
  redShirtHeights = redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights = blueShirtHeights.sort((a, b) => a - b);

  let canRedBack = true;
  let canBlueBack = true;

  for (let i=0; i<redShirtHeights.length; i++){
    if (!canRedBack && !canBlueBack) return false;

    if (canRedBack) {
      if (redShirtHeights[i] <= blueShirtHeights[i]) canRedBack = false;
    }

    if (canBlueBack) {
      if (blueShirtHeights[i] <= redShirtHeights[i]) canBlueBack = false;
    }
  }

  return canRedBack || canBlueBack;
}

// Do not edit the line below.
exports.classPhotos = classPhotos;

let red = redShirtHeights = [5, 8, 1, 3 , 41];
let blue = blueShirtHeights = [6, 9, 2, 4, 51];

let result = classPhotos(red, blue);
console.log(result);

//sort both classes ascending (or descending but consistent)

// One for loop iterates across either class ()