import hexToRgb from './index';

describe('utils / hexToRgb', () => {
    const colorHex = '#ffffff';

    describe('When color is not an hex', () => {

        it.each([
            'red',
            'string'
        ])('Should return an undefined for (%p)', (input) => {
            expect(hexToRgb(input)).toBeUndefined();
        });
    });

    describe('When no opacity given', () => {

        it('Returns default opacity', () => {
            expect(hexToRgb(colorHex)).toEqual({
                r: 255,
                g: 255,
                b: 255,
                a: 1
            });
        });
    });

    describe('When opacity is passed', () => {
        expect(hexToRgb(colorHex, 0.5)).toEqual({
            r: 255,
            g: 255,
            b: 255,
            a: 0.5
        });
    });
});
