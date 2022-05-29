function addRemove(arr) {
    let res = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'add') {
            res.push(i+1);
        } else {
            res.pop();
        }
    }
    if (res.length > 0) {
    return res.join("\n");
    } else {
        return 'Empty'
    }
}