function nthEl(arr, step) {
    let res = [];

    for (let i = 0; i < arr.length; i+=step) {
        res.push(arr[i]);
    }
    return res

    return arr.filter((element, index) => index % step == 0)
}