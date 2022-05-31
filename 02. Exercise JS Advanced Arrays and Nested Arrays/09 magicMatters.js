function magicMat(mat) {
    let row_sum = []
    let col_sum = []
    for (let row = 0; row < mat.length; row++) {
        let sum = 0
        for (let col = 0; col < mat.length; col++) {
            sum += mat[row][col]
        }
        row_sum.push(sum)        
    }

    for (let col = 0; col < mat.length; col++) {
        let sum = 0
        for (let row = 0; row < mat.length; row++) {
            sum += mat[row][col]
        }
        col_sum.push(sum)
    }

    let res = true

    for (let i = 0; i < col_sum.length; i++) {
        if (row_sum[0] != row_sum[i]) {
            res = false
        }
        if (col_sum[0] != col_sum[i]) {
            res = false
        }
    }
    console.log(res);
}

magicMat([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   
   )