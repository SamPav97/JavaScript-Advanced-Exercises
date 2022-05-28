function diagonalSum(mat) {
    let mainDiag = [];
    let secondaryDiag = [];
    for (let row = 0; row < mat.length; row++) {
        for (let col = 0; col < mat[row].length; col++) {
           if (row == col) {
               mainDiag.push(mat[row][col]);
           }
        }
    }
    for (let row = 0; row < mat.length; row++) {
        for (let col = 0; col < mat.length; col++) {
            if (row + col == mat.length-1) {
                secondaryDiag.push(mat[row][col]);
            }
        }
    }
    let primSum = mainDiag.reduce((a, v) => a + v, 0);
    let secSum = secondaryDiag.reduce((a, v) => a + v, 0);

    return primSum + ' ' + secSum
}

console.log(diagonalSum([[20, 40],
    [10, 60]]
   ));