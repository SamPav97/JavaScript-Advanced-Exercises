function smallestTwo(arr) {
    arr.sort((a, b) => a - b);
    console.log(arr[0] + ' ' + arr[1]);
}

smallestTwo([30, 15, 50, 5])