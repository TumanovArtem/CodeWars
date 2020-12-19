function nextBigger(n){

  let nArr = n.toString().split('').map((ch) => {
    return parseInt(ch);
  });
  let rightPart = [nArr[nArr.length - 1]];
  for (let i = nArr.length - 2; i >= 0; i--) {

    let x = 10;
    let pos;

    for (let j = 0; j < rightPart.length; j++) {
      if ((rightPart[j] > nArr[i]) && (nArr[i] < x)) {
        x = rightPart[j];
        pos = j;
      }
    }

    if (x === 10) {
      rightPart.unshift(nArr[i]);
    }
    else {
      rightPart[pos] = nArr[i];
      nArr[i] = x;
      nArr = nArr.slice(0, i + 1).concat(rightPart.sort());
      return parseInt(nArr.join(''));
    }
  }

  return -1;
}
//console.log(nextBigger(890));
console.log(nextBigger(2017));//83559
