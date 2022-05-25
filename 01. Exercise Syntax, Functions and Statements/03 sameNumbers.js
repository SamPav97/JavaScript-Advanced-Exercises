function sameNums(n) {
    let allSame = true;
    let lst = String(n).split('');
    for (const el of lst) {
        if (el != lst[0]) {
            allSame = false;
        }
    }
    console.log(allSame);

    let sum = 0;

    for (const el of lst) {
        sum += Number(el);
    }
    console.log(sum);
}

sameNums(1234)