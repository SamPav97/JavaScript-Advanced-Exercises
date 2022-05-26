function evenPosEl(lst) {
    let res = [];
    for (let i = 0; i < lst.length; i+=2) {
        res.push(lst[i]);
    }
    console.log(res.join(' '));
}

evenPosEl(['20', '30', '40', '50', '60'])