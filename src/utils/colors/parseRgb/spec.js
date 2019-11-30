import parseRgb from './index';

describe('utils / parseRgb', () => {
    describe('When RGB string', () => {

        describe('When valid', () => {

            it('Converts into rgba json format', () => {
                expect(parseRgb('rgb(255, 255, 255)')).toMatchObject({
                    r: 255,
                    g: 255,
                    b: 255,
                    a: 1
                });
            });
        });

        describe('When invalid', () => {

            it.each([
                'rbg(277, 0, 0)',
                'rgb(255, 255)',
            ])('Returns undefined for invalid color (%p)', (invalidColor) => {
                expect(parseRgb(invalidColor)).toBeUndefined();
            });
        });
    });

    describe('When RGBA', () => {

        describe('When valid', () => {

            it('Converts into rgba json format', () => {
                expect(parseRgb('rgb(0, 0, 255, 0.3)')).toMatchObject({
                    r: 0,
                    g: 0,
                    b: 255,
                    a: 0.3
                });
            });
        });

        describe('When invalid', () => {

            it.each([
                'rbg(255, 0, 0, 3)'
            ])('Returns undefined for invalid color (%p)', (invalidColor) => {
                expect(parseRgb(invalidColor)).toBeUndefined();
            });
        });
    });
});


