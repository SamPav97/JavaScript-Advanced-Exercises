function solution() {
    //make stock
    //make recepies
    //command for recepie
    let stock = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 };

    let recepie = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };

    return function (line) {
        let [com, inp, qunatity] = line.split(' ');
        let actions = {
            restock: () => { stock[inp] += Number(qunatity); return 'Success' },
            prepare: () => {
                for (const key of Object.entries(recepie[inp])) {
                    if ((key[1] * Number(qunatity)) > stock[key[0]]) {
                        return `Error: not enough ${key[0]} in stock`
                    }
                }
                for (const key of Object.entries(recepie[inp])) {
                    stock[key[0]] -= (key[1] * qunatity)
                }
                return `Success`
            },
            report: () => {return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`
    }
}
return actions[com]();
}

}


let manager = solution();
console.log(manager('restock flavour 50'))
console.log(manager('prepare lemonade 4'))
console.log(manager('restock carbohydrate 10'))
console.log(manager('restock flavour 10'))
console.log(manager('prepare apple 1'))
console.log(manager('restock fat 10'))
console.log(manager('prepare burger 1'))
console.log(manager('report'))
