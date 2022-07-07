const { expect } = require('chai');
const { rentCar } = require('./rentCar');

describe('test rentCar', () => {
    describe('test search car method', () => {
        it('invalid input throws', () => {
            expect(() => rentCar.searchCar(1, 1)).to.throw(Error, "Invalid input!");
            expect(() => rentCar.searchCar('sas', 1)).to.throw(Error, "Invalid input!");
            expect(() => rentCar.searchCar({}, 'sas')).to.throw(Error, "Invalid input!");
            expect(() => rentCar.searchCar('sas', '2')).to.throw(Error, "Invalid input!");
        })

        it('finds model happy case', () => {
            expect(rentCar.searchCar(['bmw', 'mercedes', 'lada'], 'lada')).to.equal('There is 1 car of model lada in the catalog!');
            expect(rentCar.searchCar(['bmw', 'mercedes', 'lada', 'lada'], 'lada')).to.equal('There is 2 car of model lada in the catalog!');
        })

        it('throws no model found', () => {
            expect(() => rentCar.searchCar([], 'lada')).to.throw(Error, 'There are no such models in the catalog!');
            expect(() => rentCar.searchCar(['bmw'], 'lada')).to.throw(Error, 'There are no such models in the catalog!');
        })
    })

    describe('test calculate car price method', () => {
        it('throws invalid input', () => {
            expect(() => rentCar.calculatePriceOfCar(33, 33)).to.throw(Error, "Invalid input!");
            expect(() => rentCar.calculatePriceOfCar('sass', 'as')).to.throw(Error, "Invalid input!");
            expect(() => rentCar.calculatePriceOfCar([], 33)).to.throw(Error, "Invalid input!");
            //expect(() => rentCar.calculatePriceOfCar('BMW', -3)).to.throw(Error, "Invalid input!");
        })

        it('returns price to rent for n days', () => {
            expect(rentCar.calculatePriceOfCar('BMW', 2)).to.equal(`You choose BMW and it will cost $90!`)
            expect(rentCar.calculatePriceOfCar('Volkswagen', 2)).to.equal(`You choose Volkswagen and it will cost $40!`)
            expect(rentCar.calculatePriceOfCar('Audi', 2)).to.equal(`You choose Audi and it will cost $72!`)
            expect(rentCar.calculatePriceOfCar('Toyota', 2)).to.equal(`You choose Toyota and it will cost $80!`)
            expect(rentCar.calculatePriceOfCar('Mercedes', 2)).to.equal(`You choose Mercedes and it will cost $100!`)
        })

        it('throw no such model in catalogue', () => {
            expect(() => rentCar.calculatePriceOfCar('lada', 2)).to.throw(Error, 'No such model in the catalog!');
        })
    })

    describe('test check budget method', () => {
        it('throws error coz input not numbers', () => {
            expect(() => rentCar.checkBudget('s', 1, 2)).to.throw(Error, "Invalid input!");
            expect(() => rentCar.checkBudget(3, [], 2)).to.throw(Error, "Invalid input!");
            expect(() => rentCar.checkBudget(3, 1, {})).to.throw(Error, "Invalid input!");
        })

        it('happy case rented car', () => {
            expect(rentCar.checkBudget(10, 2, 30)).to.equal(`You rent a car!`);
            expect(rentCar.checkBudget(10, 2, 20)).to.equal(`You rent a car!`);
        })

        it('cant rent not enough budget', () => {
            expect(rentCar.checkBudget(10, 2, 19)).to.equal('You need a bigger budget!');
        })
    })
})