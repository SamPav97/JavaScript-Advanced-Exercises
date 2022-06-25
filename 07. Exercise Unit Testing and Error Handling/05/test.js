const { expect } = require('chai');
const { isSymmetric } = require('./symmetry.js');

describe('Symmetery checker', () => {
    it('works with symmetric array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });

    
    it('returns false for non-symmetric', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });

    it('returns false for non-array', () => {
        expect(isSymmetric(5)).to.be.false;
    });

    it('works with symmetric odd-length arr', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });

    it('works with symmetric string array', () => {
        expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true;
    });

    it('returns false for wrong string param', () => {
        expect(isSymmetric('abba')).to.be.false;
    });

    it('returns false for wrong type els', () => {
        expect(isSymmetric([1, 2, 2, '1'])).to.be.false;
    });

});

