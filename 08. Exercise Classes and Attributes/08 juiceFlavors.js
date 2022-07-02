function juiceFlav(lst){
    const bottles = {};
    let objs = {};

    for (const couple of lst) {
        let [juice, quantity] = couple.split(' => ');

        if (!objs.hasOwnProperty(juice)){
            objs[juice] = 0
        }
        objs[juice] += Number(quantity);
        while(objs[juice] >= 1000){
            if (!bottles.hasOwnProperty(juice)){
                bottles[juice] = 0;
            }
            bottles[juice] += 1
            objs[juice] -= 1000
        }
    }

    for (const [key, value] of Object.entries(bottles)) {
        console.log(`${key} => ${value}`);
    }



}

juiceFlav(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']

)