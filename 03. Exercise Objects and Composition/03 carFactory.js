function carFactory(obj){
    const res = {}

    res.model = obj.model


    if (obj.power <= 90){
        res.engine = {power: 90, volume: 1800}
    } else if (obj.power > 90 && obj.power <= 120) {
        res.engine = {power: 120, volume: 2400}
    } else if (obj.power > 120) {
        res.engine = {power: 200, volume: 3500}
    }

    

    res.carriage = {type: obj.carriage, color: obj.color}

    res.wheels = obj.wheelsize % 2 != 0 ? [obj.wheelsize, obj.wheelsize, obj.wheelsize, obj.wheelsize]: [obj.wheelsize-1, obj.wheelsize-1, obj.wheelsize-1, obj.wheelsize-1]

    return res
}



console.log(carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
));