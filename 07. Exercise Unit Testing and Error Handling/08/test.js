const { expect } = require('chai');
const { mathEnforcer } = require('./mathEnforcer');

describe('math enforcing', () => {
    it('test add num happy case', () => {
        expect(mathEnforcer.addFive(5)).to.equal(10);
        expect(mathEnforcer.addFive(-5)).to.equal(0);
        expect(mathEnforcer.addFive(4.2)).to.be.closeTo(9.2, 0.01);
        
        
    });

    it('test add num when not num', () => {
        expect(mathEnforcer.addFive('a')).to.equal(undefined);
    });

    it('test subtract num when not num', () => {
        expect(mathEnforcer.subtractTen('a')).to.equal(undefined);
    });

    it('subtract happy case', () => {
        expect(mathEnforcer.subtractTen(10)).to.equal(0);
        expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
        expect(mathEnforcer.subtractTen(10.5)).to.be.closeTo(0.5, 0.01);
    })

    it('add the two nums', () => {
        expect(mathEnforcer.sum(1, 5)).to.equal(6);
        expect(mathEnforcer.sum(1, "sam")).to.equal(undefined);
        expect(mathEnforcer.sum('sam', 1)).to.equal(undefined);
        expect(mathEnforcer.sum(10, -10)).to.equal(0);
        expect(mathEnforcer.sum(-10, 10)).to.equal(0);
        expect(mathEnforcer.sum(10, 4.2)).to.closeTo(14.2, 0.01);
        expect(mathEnforcer.sum(4.2, 10)).to.closeTo(14.2, 0.01);
    })
});