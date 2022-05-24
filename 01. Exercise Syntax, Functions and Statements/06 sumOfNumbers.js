function sumOfNumbers(a, b) {
    let sum = 0;
    for (let i = Number(a); i < (Number(b)+1); i++) {
            sum += i
    }
    console.log(sum);
}

sumOfNumbers('1', '5')