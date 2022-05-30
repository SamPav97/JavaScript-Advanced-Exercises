
function sortNums(arr) {
    let res = [];
    arr.sort((a,b) => b - a);

    while (arr.length !== 0) {
        res.push(arr.pop());
        res.push(arr.shift());
    }
    return res
}

console.log(sortNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));