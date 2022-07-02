function autoCompany(lst) {
    let cars = {};


    for(let str of lst){
    let [brand, model, quant] = str.split(' | ');
    
    if (cars.hasOwnProperty(brand) == false) {
        cars[brand] = {};
    }

    if (cars[brand].hasOwnProperty(model) == false) {
        cars[brand][model] = 0;
    }
    cars[brand][model] += Number(quant)

    }

    for (const brand in cars) {
        console.log(brand);
        // za seki tuple, tupala mi go logni po sledniq nachin
        Object.entries(cars[brand]).forEach(el => console.log('###' + el[0] + ' -> ' + el[1]))
        }
    


}

autoCompany(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)