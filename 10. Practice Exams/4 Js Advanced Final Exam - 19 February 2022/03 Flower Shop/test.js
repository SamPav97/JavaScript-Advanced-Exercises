const { expect } = require('chai');
const { flowerShop } = require('./03 flowerShop');

describe('Testing the flower shop', () => {
    describe('testing calcPriceOfFlowers method', () => {
        it('throws for diff input from one string and two nums', () => {
            expect(() => flowerShop.calcPriceOfFlowers('s','s',1)).to.throw(Error, "Invalid input!");
            expect(() => flowerShop.calcPriceOfFlowers(1,'s',[])).to.throw(Error, "Invalid input!");
            expect(() => flowerShop.calcPriceOfFlowers('s',1,'1')).to.throw(Error, "Invalid input!");
            expect(() => flowerShop.calcPriceOfFlowers('kitka', 2.4, 3.33)).to.throw(Error, "Invalid input!");
        })

        it('returns happy case', () => {
            expect(flowerShop.calcPriceOfFlowers('kitka', 2, 3)).to.equal(`You need $6.00 to buy kitka!`);

        })
    })

    describe('test checkFlowersAvailable method', () => {
        it('returns flowers available happy case', () => {
            expect(flowerShop.checkFlowersAvailable('Rose', ["Rose", "Lily", "Orchid"])).to.equal(`The Rose are available!`);
        })
        it('returns sold out', () => {
            expect(flowerShop.checkFlowersAvailable('Rose', ["Lily", "Orchid"])).to.equal(`The Rose are sold! You need to purchase more!`);
        })
    })

    describe('test sellFlowers method', () => {
        it('throws invalid input if not array and number', () => {
            expect(() => flowerShop.sellFlowers([], 's')).to.throw(Error, "Invalid input!");
            expect(() => flowerShop.sellFlowers('s', 1.2)).to.throw(Error, "Invalid input!");
            expect(() => flowerShop.sellFlowers([], {})).to.throw(Error, "Invalid input!");
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], -1)).to.throw(Error, "Invalid input!");
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 4)).to.throw(Error, "Invalid input!");
        })

        it('returns flowers joined after one was sold', () => {
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1)).to.equal('Rose / Orchid');
        })
    })
})