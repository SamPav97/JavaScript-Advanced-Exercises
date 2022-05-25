function cookingByNums(...params) {
    let startWith = Number(params.shift())

    for (const action of params) {
        switch (action) {
            case 'chop': startWith /= 2; console.log(startWith); break;
            case 'dice': startWith = Math.sqrt(startWith); console.log(startWith); break;
            case 'spice': startWith += 1; console.log(startWith); break;
            case 'bake': startWith *= 3; console.log(startWith); break;
            case 'fillet': startWith -= startWith * 0.20; console.log(startWith); break;
        }
    }

}

cookingByNums('9', 'dice', 'spice', 'chop', 'bake', 'fillet')