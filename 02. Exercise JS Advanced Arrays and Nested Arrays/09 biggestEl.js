function biggestEl(mat) {
    let biggest = -999999999999999999999
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] > biggest) {
                biggest = mat[i][j];
            } 
        }
    }
    return biggest
}

console.log (biggestEl([[20, 50, 10],
    [8, 33, 145]]));