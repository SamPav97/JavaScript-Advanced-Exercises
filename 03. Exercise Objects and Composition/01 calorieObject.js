function calorieObjects(arr) {
    let dix = {};
    for (let i = 0; i < arr.length-1; i+=2) {
        dix[arr[i]] = Number(arr[i+1]);
    }
    console.log(dix);
}

calorieObjects(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])