function fibonacci(number, k) {
    let fib = [0, 1];
    let start = 0;
for (let i = 0; i <= number; i++) {
    let nextTerm = 0;
    for (let j = start; i <= k; i++) {
        if (fib.length >= k){
        nextTerm += fib[j];
        } else {
            nextTerm = fib[fib.length-1];
            break;
        }
    }
    fib.push(nextTerm);
    start += k;
}
console.log(fib);
}

fibonacci(6, 3)