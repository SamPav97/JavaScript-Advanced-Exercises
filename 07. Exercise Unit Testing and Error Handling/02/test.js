const { expect } = require('chai');
const { isOddOrEven } = require('./isOddOrEven');

describe('testing odd n even', () => {
    it('happy case even', () => {
        expect(isOddOrEven('sasa')).to.equal('even');
    });

    it('happy case odd', () => {
        expect(isOddOrEven('sas')).to.equal('odd')
    })

    it('not string', () => {
        expect(isOddOrEven([1, 2, 3, 4])).to.equal(undefined);
    })
})