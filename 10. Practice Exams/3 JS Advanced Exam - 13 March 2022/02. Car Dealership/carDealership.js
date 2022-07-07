class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar (model, horsepower, price, mileage) {
        if(model == '' || horsepower < 0 || price < 0 || mileage < 0){
            throw new Error("Invalid input!");
        }

        this.availableCars.push({model, horsepower, price, mileage})

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    }

    sellCar (model, desiredMileage) {
        let carToSell = this.availableCars.find(a => a.model == model); // I could avoid the for loop if i just get the index of this variable n delete it from list.
        let price = 0;

        if (carToSell == undefined) {
            throw new Error(`${model} was not found!`);
        }

        for (let index = 0; index < this.availableCars.length; index++) {
            if(this.availableCars[index].model == model) {
                if(this.availableCars[index].mileage <= desiredMileage) {
                    price = this.availableCars[index].price;
                } else if(this.availableCars[index].mileage <= (desiredMileage + 40000)) {
                    price = this.availableCars[index].price * 0.95;
                } else {
                    price = this.availableCars[index].price * 0.90;
                }
                let model = this.availableCars[index].model;
                let horsepower = this.availableCars[index].horsepower;
                let soldPrice = price
                this.soldCars.push({model, horsepower, soldPrice})

                this.totalIncome += soldPrice;
                this.availableCars.splice(index, 1);

                return `${model} was sold for ${soldPrice.toFixed(2)}$`

                
            }
            
        }

    }

    currentCar () {
        if (this.availableCars.length == 0) {
            return "There are no available cars"
        }

        let res = '-Available cars:\n'
        let autos = [];
        for (const car of this.availableCars) {
            autos.push(`---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`)
        }

        res += autos.join('\n')

        return res

    }

    salesReport (criteria) {
        if (criteria == 'horsepower') {
            this.soldCars.sort((a, b) => b.horsepower - a.horsepower)
        } else if (criteria == 'model') {
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model))
        } else {
            throw new Error("Invalid criteria!")
        }

        let res = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n`
        res += `-${this.soldCars.length} cars sold:\n`

        let cars = [];

        for (const car of this.soldCars) {
            cars.push(`---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`)
        }

        res += cars.join('\n')

        return res

    }

}


let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));

