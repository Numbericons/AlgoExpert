// function spiralTraverse(array) {
//   const directions = { 
//     'right': {
//       'next': 'down',
//       'transform': [1,0],
//       'stopEarly': 0
//     },
//     'down': {
//       'next': 'left',
//       'transform': [0,-1],
//       'stopEarly': 0
//     },
//     'left': {
//       'next': 'up',
//       'transform': [-1,0],
//       'stopEarly': 0
//     },
//     'up': {
//       'next': 'right',
//       'transform': [0,1],
//       'stopEarly': 1
//     }
//   };

//   let retArr = [];
//   let currDirection = 'right';
//   let position = [0,0]

//   while (currDirection) {
//     let currLength = retArr.length;

//     goDirection(array, position, currDirection, retArr, directions);
//     currDirection = directions[currDirection].next;

//     if (currLength === retArr.length) currDirection = null;
//   }

//   return retArr
// }

// function goDirection(array, position, dir, retArr, refObj) { //right, [0,0], 
//   const stop = refObj[dir].stopEarly;
//   const transform = refObj[dir].transform;

//   while (array[position[1]] && array[position[1]][position[0]]) {
//     retArr.push(array[position[1]][position[0]]);

//     position[0] += transform[0];
//     position[1] += transform[1];

//     //below checks if we need to stop early based on previous spiraling

//     const outBoundsY = !array[position[1] + (transform[1] * stop)];
//     const outBoundsX = array[position[1]] && !array[position[1]][position[0] + (transform[0] * stop)];

//     if (outBoundsY || outBoundsX)  {
//       position[0] -= transform[0];
//       position[1] -= transform[1];
//       break;
//     }
//   }

//   refObj[dir].stopEarly += 1;
// }

function goDirection(array, position, dir, retArr, refObj) {
  const transform = refObj[dir].transform;

  while (array[position[1]] && array[position[1]][position[0]]) {
    if (array[position[1]][position[0]] === '#') break; //position has previously been visited

    retArr.push(array[position[1]][position[0]]);
    array[position[1]][position[0]] = '#';

    position[0] += transform[0];
    position[1] += transform[1];
  }

  position[0] -= transform[0]; //reverse last change that put position out of bounds
  position[1] -= transform[1];

  return position;
}

function startNextDir(directions, currDirection, position) {
  let transform = directions[currDirection].transform;
  position[0] += transform[0];
  position[1] += transform[1];

  return position;
}

function spiralTraverse(array) {
  const directions = { 
    'right': {
      'next': 'down',
      'transform': [1,0]
    },
    'down': {
      'next': 'left',
      'transform': [0,1]
    },
    'left': {
      'next': 'up',
      'transform': [-1,0]
    },
    'up': {
      'next': 'right',
      'transform': [0,-1]
    }
  };

  let retArr = [];
  let currDirection = 'right';
  let position = [0,0];
  const totalSteps = array.length * array[0].length;

  while (retArr.length < totalSteps) {
    position = goDirection(array, position, currDirection, retArr, directions);

    currDirection = directions[currDirection].next;

    position = startNextDir(directions, currDirection, position);
  }

  return retArr;
}

exports.spiralTraverse = spiralTraverse;

let input = [[1 , 2 , 3 , 4],
             [12, 13, 14, 5],
             [11, 16, 15, 6],
             [10, 9 , 8 , 7]];

let result = spiralTraverse(input);
console.log(result);

/*
  Travel current direction
    Current directions starts as right
      When reach the end point of current direction
        Make a right angle turn

*/