function largestNumber(...args) {
    let largest = Math.max(...args)
    console.log(`The largest number is ${largest}.`);
}

largestNumber(5, -3, 16)