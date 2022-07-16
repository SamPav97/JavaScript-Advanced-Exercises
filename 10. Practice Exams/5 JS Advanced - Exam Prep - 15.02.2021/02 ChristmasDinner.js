class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};

    }

    get budget() {
        return this._budget;
    }
    set budget(newBudget) {
        if (newBudget < 0) {
            throw new Error("The budget cannot be a negative number");
        } else {
            this._budget = newBudget;
        }
    }

    shopping(product) {
        let [prod, price] = product;
        price = Number(price);

        if (price <= this.budget) {
            this.budget -= price;
            this.products.push(prod);
            return `You have successfully bought ${prod}!`
        } else {
            throw new Error("Not enough money to buy this product")
        }
    }

    recipes(recipe) {

        for (const searchedProduct of recipe.productsList) {
            if (!this.products.includes(searchedProduct)) {
                throw new Error("We do not have this product");
            }
        }

        this.dishes.push(recipe);
        return `${recipe.recipeName} has been successfully cooked!`
    }

    inviteGuests(name, dish) {
        let srchedDish = this.dishes.find(a => a.recipeName == dish);

        if(srchedDish == undefined) {
            throw new Error("We do not have this dish");
        }
        if(Object.keys(this.guests).includes(name)) {
            throw new Error("This guest has already been invited")
        }

        this.guests[name] = dish;
        return `You have successfully invited ${name}!`
    }

    showAttendance() {
        let res = [];
        let keys = Object.keys(this.guests)
        for (let index = 0; index < keys.length; index++) {
            let products = this.dishes.find(a => a.recipeName == this.guests[keys[index]])
            res.push(`${keys[index]} will eat ${this.guests[keys[index]]}, which consists of ${products.productsList.join(', ')}`)
        }
        return res.join('\n')
    }

}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: [ 'Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());