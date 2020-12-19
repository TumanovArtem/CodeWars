function validSolution(board){
    let size = 9;
    for (let i = 0; i < size; i++) {
      
      //Get next row
      let row = [];
      for (let j = 0; j < size; j++) {
        row.push(board[i][j]);
      }
      row.sort();
      
      //Get next column
      let col = [];
      for (let j = 0; j < size; j++) {
        col.push(board[i][j]);
      }
      col.sort();
      
      //Get next block
      let block = [];
      let baseI = Math.floor( i / 3 );
      let baseJ =  i % 3;
      for (let j = 0; j < size; j++) {
        let incI = Math.floor( j / 3 );
        let incJ = j % 3;
        block.push(board[baseI * 3 + incI][baseJ *3 + incJ]);
      } 
      block.sort();

      //Check rows, columns and blocks
      for (let j = 0; j < row.length; j++) {
        if (row[j] === 0 || (row[j] !== j + 1)) return false;
        if ((col[j] === 0) || (col[j] != j + 1)) return false;
        if ((block[j] === 0) || (block[j] != j + 1)) return false;
      }
      
    }
    return true
  }

  console.log(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
                [6, 7, 2, 1, 9, 5, 3, 4, 8],
                [1, 9, 8, 3, 4, 2, 5, 6, 7],
                [8, 5, 9, 7, 6, 1, 4, 2, 3],
                [4, 2, 6, 8, 5, 3, 7, 9, 1],
                [7, 1, 3, 9, 2, 4, 8, 5, 6],
                [9, 6, 1, 5, 3, 7, 2, 8, 4],
                [2, 8, 7, 4, 1, 9, 6, 3, 5],
                [3, 4, 5, 2, 8, 6, 1, 7, 9]]));