const { expect } = require('chai');
const { lookupChar } = require('./lookupChar');

describe('looking up', () => {
    it('first param not string', () => {
        expect(lookupChar([23], 3)).to.equal(undefined)
        expect(lookupChar(23, 3)).to.equal(undefined)
    })

    it('second param not int', () => {
        expect(lookupChar('sami', 'sa')).to.equal(undefined);
        expect(lookupChar('sami', 4.2)).to.equal(undefined);
    });

    it('incorrect index', () => {
        expect(lookupChar('sami', 10)).to.equal('Incorrect index');
        expect(lookupChar('sami', -10)).to.equal('Incorrect index')
    })

    it('happy case', () => {
        expect(lookupChar('sami', 2)).to.equal('m')
    })
})