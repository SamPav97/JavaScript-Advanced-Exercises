function diagAttack(arr){
    
    function printMat(matrix) {
        for (const row of matrix) {
            console.log(row.join(' '));
        }
    }

    let mainSum = 0;
    let secSum = 0;
    let secondaryDiag = [];
    

    mat = arr.map(x => x.split(' '));
    matNums = mat.map(y => y.map(z => Number(z)));
    let mid = Math.floor(matNums.length / 2);

    for (let row = 0; row < matNums.length; row++) {
        for (let col = 0; col < matNums.length; col++) {
            if (row == col) {
                mainSum += matNums[row][col];
            } else if (row == mat.length-col-1) {
                secSum += matNums[row][col];
                secondaryDiag.push(matNums[row][col])
            }
        }
    }
    secSum += matNums[mid][mid];

    if (mainSum == secSum) {
        for (let row = 0; row < matNums.length; row++) {
            for (let col = 0; col < matNums.length; col++) {
                if (row != col && row != matNums.length-col-1) {
                    matNums[row][col] = mainSum;
                }
            }
        }
        printMat(matNums)
    } else {
        printMat(matNums)
    }

    
}







diagAttack(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']

)