function negPos(lst) {
    let res = []
    for (const el of lst) {
        if (el < 0) {
            res.unshift(el)
        } else {
            res.push(el)
        }
    }
    console.log(res.join("\n"));
}
negPos([7, -2, 8, 9])