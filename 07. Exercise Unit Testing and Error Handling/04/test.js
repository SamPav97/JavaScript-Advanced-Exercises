const { expect } = require('chai');
const { sum } = require('./04 sumOfNumbers.js');


describe('sum checker', () => {
    it('check happy case', () => {
        expect(sum([1, 2, 3])   ).to.equal(6);
    });

});