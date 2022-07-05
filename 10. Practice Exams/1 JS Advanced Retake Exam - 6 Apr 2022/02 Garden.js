class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    // plantClass = class Plant{
    //     constructor(plantName, spaceRequired){
    //         this.plantName = plantName;
    //         this.spaceRequired = spaceRequired;
    //         this.ripe = false;
    //         this.quantity = 0
    //     }
    // }

    addPlant(plantName, spaceRequired) {
        if (spaceRequired > this.spaceAvailable) {
            throw new Error("Not enough space in the garden.");
        }

        this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 })
        this.spaceAvailable -= spaceRequired
        return `The ${plantName} has been successfully planted in the garden.`
    }

    ripenPlant(plantName, quantity) {

        // let names = this.plants.map(a => a.plantName)
        // if(!names.includes(plantName)) {
        //     throw new Error(`There is no ${plantName} in the garden.`);
        // }

        for (const obj of this.plants) {
            if (obj.plantName == plantName) {
                if (obj.ripe == true) {
                    throw new Error(`The ${plantName} is already ripe.`)
                }
                if (quantity <= 0) {
                    throw new Error("he quantity cannot be zero or negative.")
                } else if (quantity == 1) {
                    obj.quantity = quantity
                    obj.ripe = true;
                    return (`${quantity} ${plantName} has successfully ripened.`)
                } else {
                    obj.quantity = quantity
                    obj.ripe = true
                    return (`${quantity} ${plantName}s have successfully ripened.`)
                }
            }
        }
        throw new Error(`There is no ${plantName} in the garden.`);
    }

    harvestPlant(plantName) {
        for (let i = 0; i < this.plants.length; ++i) {
            if (this.plants[i].plantName == plantName) {
                if (this.plants[i].ripe == false) {
                    throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
                }

                //not checked this
                this.spaceAvailable += this.plants[i].spaceRequired
                this.storage.push({ plantName: this.plants[i].plantName, quantity: this.plants[i].quantity })
                this.plants.splice(i, 1);
                return `The ${plantName} has been successfully harvested.`
            }
        }
        throw new Error(`There is no ${plantName} in the garden.`)
    }


    generateReport() {
        let res = '';

        res += `The garden has ${this.spaceAvailable} free space left.\n`

        let names = this.plants.map(a => a.plantName).sort((a, b) => a.localeCompare(b))

        res += `Plants in the garden: ${names.join(', ')}\n`

        if (this.storage.length == 0) {
            res += "Plants in storage: The storage is empty.";
        } else {
            let lstOfStrings = [];

            for (const couple of this.storage) {
                let tuple = Object.entries(couple);
                lstOfStrings.push(`${tuple[0][1]} (${tuple[1][1]})`)
            }
            res += `Plants in storage: ${lstOfStrings.join(', ')}`
        }

        return res


    }



}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 100));
console.log(myGarden.addPlant('cucumber', 30));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
//console.log(myGarden.ripenPlant('orange', 4));
console.log(myGarden.ripenPlant('olive', 30));
console.log(myGarden.ripenPlant('cucumber', -5));

