function storeCatalogue(arr) {
    //get them into dictionaries.
    //sort them
    //create the alphabetical output

    let catalogue = {};
    for (const text of arr) {
        let [product, price] = text.split(' : ');
        letter = product[0];

        if (catalogue.hasOwnProperty(letter) == false) {
            catalogue[letter] = {};
        }

        catalogue[letter][product] = price;
    }

    let byLetters = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));

    for (const letter of byLetters) {
        let sortedProducts = Object.keys(catalogue[letter]).sort((a, b) => a.localeCompare(b));
        
        console.log(letter);
        for (const product of sortedProducts) {
            console.log(`  ${product}: ${catalogue[letter][product]}`);
        }
    }
    
}

storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)