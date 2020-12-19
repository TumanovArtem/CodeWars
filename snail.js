snail = function(array) {
  
  let result = [];
  let length = array.length;
  if (length === 1 && array[0][0] === undefined) {
      return [];
  }

  for (var n = 0; n < Math.ceil(length / 2); n++) {
    for (let j = n; j < length - n - 1; j++) {//first row
      result.push(array[n][j]);
    }
    for (let i = n; i < length - n - 1; i++) {//last column
      result.push(array[i][length - n - 1]);
    }
    for (let j = length - n - 1; j > n; j--) {//last row
      result.push(array[length - n - 1][j]);
    }
    for (let i = length - n - 1; i > n; i--) {//first column
      result.push(array[i][n]);
    }

  }

  if (length % 2 !== 0)
    result.push(array[n - 1][n - 1]);

  return result;
}

console.log(snail([[]]));