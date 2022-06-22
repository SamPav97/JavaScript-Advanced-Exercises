function argumentInfo(...params) {
    let types = {}

    for (const par of params) {

        console.log(`${typeof par}: ${par}`);

        if (!Object.keys(types).includes(String(typeof par))) {
            types[String(typeof par)] = 0;
        }
        types[String(typeof par)]++
    }

    types = Object.entries(types).sort((a,b) => b[1] - a[1])
    for (const key of types) {
        console.log(`${key[0]} = ${key[1]}`);
    }
}



argumentInfo({ name: 'bob'}, 3.333, 9.999);