function rotate(arr, steps) {
    for (let i = 0; i < steps; i++) {
        if (i > arr.length-1) {
            steps -= i
            i = 0;
        }
        arr.unshift(arr.pop(arr[i]))
    }
    return arr.join(' ')
}

console.log(rotate(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
));