function roadRadar(speed, location){
    switch (location) {
        case "residential":
            if (speed > 20 && speed <= 40) {
                console.log(`The speed is ${speed - 20} km/h faster than the allowed speed of ${20} - speeding`);
            } else if (speed > 40 && speed <= 60) {
                console.log(`The speed is ${speed - 20} km/h faster than the allowed speed of ${20} - excessive speeding`);
            } else if (speed > 60) {
                console.log(`The speed is ${speed - 20} km/h faster than the allowed speed of ${20} - reckless driving`);
            } else {
                console.log(`Driving ${speed} km/h in a 20 zone`);
            }
            break;
        
        case "city":
            if (speed > 50 && speed <= 70) {
                console.log(`The speed is ${speed - 50} km/h faster than the allowed speed of ${50} - speeding`);
            } else if (speed > 70 && speed <= 90) {
                console.log(`The speed is ${speed - 50} km/h faster than the allowed speed of ${50} - excessive speeding`);
            } else if (speed > 90) {
                console.log(`The speed is ${speed - 50} km/h faster than the allowed speed of ${50} - reckless driving`);
            } else {
                console.log(`Driving ${speed} km/h in a 50 zone`);
            }
            break;
        
        case "interstate":
            if (speed > 90 && speed <= 110) {
                console.log(`The speed is ${speed - 90} km/h faster than the allowed speed of ${90} - speeding`);
            } else if (speed > 110 && speed <= 130) {
                console.log(`The speed is ${speed - 90} km/h faster than the allowed speed of ${90} - excessive speeding`);
            } else if (speed > 130) {
                console.log(`The speed is ${speed - 90} km/h faster than the allowed speed of ${90} - reckless driving`);
            } else {
                console.log(`Driving ${speed} km/h in a 90 zone`);
            }
            break;
        
        case "motorway":
            if (speed > 130 && speed <= 150) {
                console.log(`The speed is ${speed - 130} km/h faster than the allowed speed of ${130} - speeding`);
            } else if (speed > 150 && speed <= 170) {
                console.log(`The speed is ${speed - 130} km/h faster than the allowed speed of ${130} - excessive speeding`);
            } else if (speed > 170) {
                console.log(`The speed is ${speed - 130} km/h faster than the allowed speed of ${130} - reckless driving`);
            } else {
                console.log(`Driving ${speed} km/h in a 130 zone`);
            }
            break;
    }

}

roadRadar(200, 'motorway')