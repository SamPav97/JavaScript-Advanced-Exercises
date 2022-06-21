
function solve(ar, v, input) {
    let stuff = JSON.parse(input);
    let res = [];

    for (const cube of stuff) {
        let current = {
        area: ar.call(cube),
        volume: v.call(cube)
        }
        res.push(current);
    }
    return res
}







function area() {
    return Math.abs(this.x * this.y);
};


function vol() {
    return Math.abs(this.x * this.y * this.z);
};


console.log(solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`));
    