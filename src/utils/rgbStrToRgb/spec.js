import { rgbStrToRgb } from './index';

describe('utils / rgbStrToRgb', () => {

    describe('Legal rgb string', () => {
        it.each([
            'rgb(255,255,255)',
            'rgb(255, 255,255)',
            'rgb(255,255,255)',
        ])('Run rgb without opacity', (input) => {
            expect(rgbStrToRgb(input)).toEqual({
                r: 255,
                g: 255,
                b: 255,
                a: 1
            });
        });
    });

    it('Run rgb with opacity', () => {
        expect(rgbStrToRgb('rgb(255,255,215)', 0.5)).toEqual({
            r: 255,
            g: 255,
            b: 215,
            a: 0.5
        });
    });

    describe('Illegal rgb string', () => {
        it.each([
            'rgb(255,255,257)',
            'rgb(255, 255)',
        ])('Run rgb without opacity', (input) => {
            expect(rgbStrToRgb(input)).toBeUndefined();
        });
    });
});
