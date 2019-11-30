import formatRgb from './index';

describe('utils / formatRgb', () => {
    const rgb = {
        r: 255,
        g: 125,
        b: 25
    };

    describe('When no opacity is given', () => {
        it('Returns an rgb string', () => {
            expect(formatRgb(rgb)).toEqual('rgb(255, 125, 25)');
        });
    });
    describe('When opacity is given', () => {
        it('Returns rbg string when opacity is 1', () => {
            expect(formatRgb(rgb)).toEqual('rgb(255, 125, 25)');
        });

        it('Returns rgba string', () => {
            expect(formatRgb({
                ...rgb,
                a: 0.5
            })).toEqual('rgba(255, 125, 25, 0.5)');
        });
    });
});
