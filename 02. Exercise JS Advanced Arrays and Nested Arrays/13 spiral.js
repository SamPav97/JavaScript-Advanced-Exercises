function spiral(r, c) {

    const val = 0;

    let arr = Array(r);
    for (var i = 0; i < r; i++) {
        arr[i] = Array(c).fill(val);
    }


    let left = 0;
    let right = arr.length;
    let top = 0;
    let bottom = arr.length;
    let increasing = 1;

    while (left < right && top < bottom) {

        for (let i = left; i < right; i++) {
            arr[top][i] = increasing;
            increasing += 1;
        }
        top += 1;

        for (let i = top; i < bottom; i++) {
            arr[i][right - 1] = increasing;
            increasing += 1;
        }
        right -= 1;

        if (left > right && top > bottom) {
            break;
        }

        for (let i = right-1; i > left - 1; i--) {
            arr[bottom-1][i] = increasing;
            increasing += 1;
        }
        bottom -= 1

        for (let i = bottom-1; i > top-1; i--) {
            arr[i][left] = increasing;
            increasing += 1;
        }
        left += 1

    }
    for (const row of arr) {
        console.log(row.join(' '));
    }

}


spiral(5, 5)