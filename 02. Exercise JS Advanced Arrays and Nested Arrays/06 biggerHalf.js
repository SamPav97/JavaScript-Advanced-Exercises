function biggerHalf(lst) {
    lst.sort((a, b) => a - b);
    res = lst.slice(Math.floor(lst.length / 2), lst.length);
    return res;
}

biggerHalf([4, 7, 2, 5])