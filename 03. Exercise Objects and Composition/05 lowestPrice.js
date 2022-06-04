function lowestPrice(arr){
    const object = {}
    for (const str of arr) {
        let [town, product, price] = str.split(' | ');
        price = Number(price)

        if (!object[product]) {
            object[product] = {town, price};
        } else if (price < object[product].price) {
            object[product] = {town, price};
        }
    }

    for (const key in object) {
        console.log(`${key} -> ${object[key].price} (${object[key].town})`);
    }
}

lowestPrice(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 900',
'New York | Burger | 10']
)