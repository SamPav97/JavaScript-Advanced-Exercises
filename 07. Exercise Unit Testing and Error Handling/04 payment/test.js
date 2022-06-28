const { expire, expect, should } = require('chai');
const PaymentPackage = require('./PaymentPackage')

describe('testing object paymentPackage', () => {
    describe('test constructor', () => {
        it('should initiate happy case', () => {
            let pp = new PaymentPackage('kurvendil', 10)
            expect(pp.name).to.equal('kurvendil')
            expect(pp.value).to.equal(10)
            expect(pp.VAT).to.equal(20)
            expect(pp.active).to.equal(true)
        })

        it('should initiate but throws error because name is not string', () => {
            expect(() => new PaymentPackage(11, 10)).to.throw(Error)
        })

        it('should initiate but throws error because name is empty string', () => {
            expect(() => new PaymentPackage('', 10)).to.throw(Error)
        })

        it('should initiate but throws error because value is string', () => {
            expect(() => new PaymentPackage('sami', 'str')).to.throw(Error, 'Value must be a non-negative number')
        })

        it('should initiate but throws error because value is negative', () => {
            expect(() => new PaymentPackage('sami', -3)).to.throw(Error, 'Value must be a non-negative number')
        })

        it('should initiate but throws error because vat is negative', () => {
            let pp = new PaymentPackage('kurvendil', 10)
            expect(() => pp.VAT = -3).to.throw(Error, 'VAT must be a non-negative number')
        })

        it('should initiate but throws error because vat is negative', () => {
            let pp = new PaymentPackage('kurvendil', 10)
            expect(() => pp.VAT = 'sas').to.throw(Error, 'VAT must be a non-negative number')
        })

        it('should change vat', () => {
            let pp = new PaymentPackage('kurvendil', 10)
            expect(pp.VAT = 10).to.equal(10)
        })

        it('should initiate but throws error because active not boolean', () => {
            let pp = new PaymentPackage('kurvendil', 10)
            expect(() => pp.active = 'sas').to.throw(Error, 'Active status must be a boolean')
        })

        it('change active stat', () => {
            let pp = new PaymentPackage('kurvendil', 10)
            expect(pp.active = false).to.equal(false)
        })
    })

    describe('test method to string', () => {
        it('to string', () => {
            let pp = new PaymentPackage('kurvendil', 10)
            expect(pp.toString()).to.equal(`Package: kurvendil\n- Value (excl. VAT): 10\n- Value (VAT 20%): ${10 * (1 + 20 / 100)}`)
        })
        it('to string inactive', () => {
            let pp = new PaymentPackage('kurvendil', 10)
            pp.active = false
            expect(pp.toString()).to.equal(`Package: kurvendil (inactive)\n- Value (excl. VAT): 10\n- Value (VAT 20%): ${10 * (1 + 20 / 100)}`)
        })
    })
})