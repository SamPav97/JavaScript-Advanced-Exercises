const { expect } = require('chai');
const { carService } = require('./03. Car service_Resources');

describe('test carService', () => {
    describe('test is it expensive return', () => {
        it('returns severe issue', () => {
            expect(carService.isItExpensive('Engine')).to.equal(`The issue with the car is more severe and it will cost more money`);
            expect(carService.isItExpensive('Transmission')).to.equal(`The issue with the car is more severe and it will cost more money`);
        })
        it('returns not severe', () => {
            expect(carService.isItExpensive('Window')).to.equal(`The overall price will be a bit cheaper`);
        })
    })

    describe('test if discount applies', () => {

        it('throws error for invalid inp', () => {
            expect(() => carService.discount('sas', 10)).to.throw(Error, "Invalid input");
            expect(() => carService.discount('sas', '10')).to.throw(Error, "Invalid input");
            expect(() => carService.discount([], 10)).to.throw(Error, "Invalid input");
            expect(() => carService.discount('sas', {})).to.throw(Error, "Invalid input");
            expect(() => carService.discount(2, 'sas')).to.throw(Error, "Invalid input");
        })

        it('returns no discount', () => {
            expect(carService.discount(1, 1)).to.equal("You cannot apply a discount")
        })

        it('returns discount applied', () => {
            expect(carService.discount(3, 10)).to.equal(`Discount applied! You saved ${10*0.15}$`);
            expect(carService.discount(6, 10)).to.equal(`Discount applied! You saved ${10*0.15}$`);
            expect(carService.discount(7, 10)).to.equal(`Discount applied! You saved ${10*0.15}$`);

            expect(carService.discount(8, 10)).to.equal(`Discount applied! You saved ${10*0.30}$`);
        })
    })

    describe('parts to buy method', () => {
        it('throws invalid input', () => {
            expect(() => carService.partsToBuy([], 'sas')).to.throw(Error, "Invalid input");
            expect(() => carService.partsToBuy('sas', [])).to.throw(Error, "Invalid input");
            expect(() => carService.partsToBuy([], 12)).to.throw(Error, "Invalid input");
            expect(() => carService.partsToBuy([], {})).to.throw(Error, "Invalid input");
            expect(() => carService.partsToBuy({}, [])).to.throw(Error, "Invalid input");
            expect(() => carService.partsToBuy(12, [])).to.throw(Error, "Invalid input");
        })

        it('return price', () => {
            expect(carService.partsToBuy([], ['sas'])).to.equal(0);

            expect(carService.partsToBuy([{part: "blowoff valve", price: 1}, {part: "coil springs", price: 2}], 
            ["blowoff valve", "coil springs"])).to.equal(3);

            expect(carService.partsToBuy([{part: "blowoff valve", price: 1}, {part: "coil springs", price: 2}], 
            ["blowoff valve", "coil springs", 'Window'])).to.equal(3);
        })

        
    })
})