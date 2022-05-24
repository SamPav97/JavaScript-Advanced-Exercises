function aggregateElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }
    console.log(sum);

    let revSum = 0;
    for (let i = 0; i < arr.length; i++) {
        revSum += 1 / Number(arr[i]);
    }
    console.log(revSum);

    let concartSum = '';
    for (let i = 0; i < arr.length; i++) {
        concartSum += arr[i]
    }
    console.log(concartSum);
}

aggregateElements([1, 2, 3])