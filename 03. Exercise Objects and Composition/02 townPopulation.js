function townPopulation(inp) {
    const obj = {};
    for (const el of inp) {
        const [key, value] = el.split(' <-> ');

        if (!(key in obj)) {
            obj[key] = 0;
        }
        obj[key] += Number(value);
    }

    for (const key in obj) {
        console.log(`${key} : ${[obj[key]]}`);
    }
}

townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
)
