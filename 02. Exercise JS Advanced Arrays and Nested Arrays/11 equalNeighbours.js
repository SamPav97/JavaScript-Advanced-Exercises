function equalNeighbours (mat) {
    let res = 0;
    for (let row = 0; row < mat.length; row++) {
        for (let col = 0; col < mat.length-1; col++) {
            if (mat[row][col] == mat[row][col+1]) {
                    res += 1
                }
        }
    }
    
    for (let col = 0; col < mat.length; col++) {
        for (let row = 0; row < mat.length-1; row++) {
            if (mat[row][col] == mat[row+1][col]) {
                res += 1
            }
            
        }
        
    }
    return res
}

console.log(equalNeighbours([['test', 'yes', 'yo', 'ho'],
                            ['well', 'done', 'yo', '6'],
                            ['not', 'done', 'yet', '5']]
))