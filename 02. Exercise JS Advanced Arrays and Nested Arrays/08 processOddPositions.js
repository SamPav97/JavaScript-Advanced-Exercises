function processOddPos(arr) {
    let res = []
    let fin = []

    for (let i = 1; i < arr.length; i += 2) {
        res.push(arr[i] * 2)
    }
    fin = res.reverse()
    return fin.join(' ')
}

processOddPos([10, 15, 20, 25])