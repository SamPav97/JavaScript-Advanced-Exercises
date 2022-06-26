const { expect } = require('chai');
const { rgbToHexColor } = require('./RGBtoHEX.js');


describe ('Color cheker', () => {
    it('converts black', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });

    it('converts to white', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });

    it('converts to soft uni blue', () => {
        expect(rgbToHexColor(35, 68, 101)).to.equal('#234465');
    });

    it ('fails to conver bcuz of larger nums', () => {
        expect(rgbToHexColor(256, 68, 101)).to.equal(undefined);
        expect(rgbToHexColor(35, 256, 101)).to.equal(undefined);
        expect(rgbToHexColor(35, 68, 256)).to.equal(undefined);
    });

    it ('fails to conver bcuz of smaller nums', () => {
        expect(rgbToHexColor(-2, 68, 101)).to.equal(undefined);
        expect(rgbToHexColor(35, -2, 101)).to.equal(undefined);
        expect(rgbToHexColor(35, 68, -2)).to.equal(undefined);
    });

    it('fails because input is not int', () => {
        expect(rgbToHexColor(256.4, 68, 101)).to.equal(undefined);
    });

    it('fails because string inst of int', () => {
        expect(rgbToHexColor('256', 68, 101)).to.equal(undefined);
        expect(rgbToHexColor('kur', 68, 101)).to.equal(undefined);
    });
})