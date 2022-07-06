class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetablesarr) {
        let allVegsAddedNow = [];
        for (const vegetable of vegetablesarr) {
            let [type, quantity, price] = vegetable.split(' ');
            allVegsAddedNow.push(type);
            quantity = Number(quantity);
            price = Number(price);

            let toAdd = this.availableProducts.filter(a => a.type == type)[0];// i could just use this as a variable instead of looping thru again: toAdd.price = ...
            // can do also instead of filter: .find(a => a.type == type) i can also add && or ||
            if (toAdd == undefined) {
                this.availableProducts.push({ type, quantity, price });
            } else {
                for (let index = 0; index < this.availableProducts.length; index++) {
                    if (this.availableProducts[index].type == type) {
                        this.availableProducts[index].quantity += quantity;
                        if (this.availableProducts[index].price < price) {
                            this.availableProducts[index].price = price;
                        }
                    }
                }
            }
        }
        let set = Array.from(new Set(allVegsAddedNow))
        return `Successfully added ${set.join(', ')}`;
    }

    buyingVegetables (selectedProducts) {
        let totalPrice = 0;

        for (const product of selectedProducts) {
            let [type, quantity] = product.split(' ');
            quantity = Number(quantity);

            let toAdd = this.availableProducts.filter(a => a.type == type)[0];

            if(toAdd == undefined) {
                throw new Error(`${type} is not available in the store, your current bill is ${'$' + totalPrice.toFixed(2)}.`)
            }

            for (let index = 0; index < this.availableProducts.length; index++) {
                if (this.availableProducts[index].type == type) {
                    if(this.availableProducts[index].quantity < quantity) {
                        throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is ${'$' + totalPrice.toFixed(2)}.`)
                    }
                    totalPrice += this.availableProducts[index].price * quantity;
                    this.availableProducts[index].quantity -= quantity;       
                }
            }
        }
        return `Great choice! You must pay the following amount ${'$' + totalPrice.toFixed(2)}.`
    }

    rottingVegetable (type, quantity) {
        let checkType = this.availableProducts.filter(a => a.type == type)[0];

        if(checkType == undefined) {
            throw new Error(`${type} is not available in the store.`)
        }

        for (let index = 0; index < this.availableProducts.length; index++) {
            if (this.availableProducts[index].type == type) {
                if(this.availableProducts[index].quantity - quantity < 0){
                    this.availableProducts[index].quantity = 0;
                    return `The entire quantity of the ${type} has been removed.`
                } else{
                    this.availableProducts[index].quantity -= quantity;
                    return `Some quantity of the ${type} has been removed.`
                }
            }
        }
    }

    revision () {
        let res = '';

        // let availableVeggies = this.availableProducts.map(function(i) {
        //     return i.type;
        //   });

        res+= `Available vegetables:\n`

        let vegs = [];

        //SORT LIST OF OBJECT BY 2 CRITERIA
        this.availableProducts.sort((a, b) => (a.price > b.price) ? 1 : (a.price === b.price) ? ((a.quantity > b.quantity) ? 1 : -1) : -1 )

        for (const vegg of this.availableProducts) {
            vegs.push(`${vegg.type}-${vegg.quantity}-${'$' + vegg.price}`)
        }

        res += vegs.join('\n')

        res += `\nThe owner of the store is ${this.owner}, and the location is ${this.location}.`

        return res
    }
}


let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());

