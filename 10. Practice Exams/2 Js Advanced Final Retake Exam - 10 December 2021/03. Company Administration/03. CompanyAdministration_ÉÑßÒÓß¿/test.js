const { expect } = require('chai');
const { companyAdministration } = require('./companyAdministration');

describe('test company administration', () => {
    describe('test hiring', () => {
        it('if position not programmer throws', () => {
            expect(() => companyAdministration.hiringEmployee('john', 'tester', 4)).to.throw(Error, `We are not looking for workers for this position.`)
        })

        it('if years of exp >= 3 hired, happy case', () => {
            expect(companyAdministration.hiringEmployee('john', 'Programmer', 3)).to.equal('john was successfully hired for the position Programmer.');
            expect(companyAdministration.hiringEmployee('john', 'Programmer', 4)).to.equal('john was successfully hired for the position Programmer.');
        })

        it('if experience too little not hired', () => {
            expect(companyAdministration.hiringEmployee('john', 'Programmer', 2)).to.equal(`john is not approved for this position.`)
        })
    })

    describe('calculating salary', () => {
        it('validate input hours must be number', () => {
            expect(() => companyAdministration.calculateSalary('a')).to.throw(Error, "Invalid hours");
            expect(() => companyAdministration.calculateSalary(-3)).to.throw(Error, "Invalid hours");
        })

        it('validate no bonus case', () => {
            expect(companyAdministration.calculateSalary(160)).to.equal(160*15);
            expect(companyAdministration.calculateSalary(2)).to.equal(30);
        })

        it('validate bonus case', () => {
            expect(companyAdministration.calculateSalary(161)).to.equal(161*15 + 1000);
        })
    })

    describe('firing employees', () => {
        it('throws for invalid input not array or indx out of range', () => {
            expect(() => companyAdministration.firedEmployee({}, 3)).to.throw(Error, "Invalid input");
            expect(() => companyAdministration.firedEmployee(['sa','bo'], 3)).to.throw(Error, "Invalid input");
            expect(() => companyAdministration.firedEmployee(['sa','bo'], -15)).to.throw(Error, "Invalid input");
            expect(() => companyAdministration.firedEmployee('sa', 3)).to.throw(Error, "Invalid input");
            expect(() => companyAdministration.firedEmployee(['sa'], 'sa')).to.throw(Error, "Invalid input");
        })

        it('returns correct new list of non-fired ppl', () => {
            expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 0)).to.equal("Ivan, George")
        })
    })
})