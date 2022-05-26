function sumFirstLast(arr) {
    let sum = Number(arr.pop()) + Number(arr.shift());
    return sum
}
console.log(sumFirstLast(['20', '30', '40']));