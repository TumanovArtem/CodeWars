console.log(solequa(12));

function solequa( n ) {
  const result = [];

  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      const expResult1 = i;
      const expResult2 = n / i;
      const sum = expResult1 + expResult2;
      const x = sum / 2;
      const y = sum / 4 - expResult1 / 2;
      if (x % 1 === 0 && x >= 0 && y % 1 === 0 && y >= 0) {
        result.push([x, y]);
      }
    }
  }

  return result;
}
