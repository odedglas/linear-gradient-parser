import getStopColor from '.';

describe('utils / getStopColor', () => {

    describe('When unknown format', () => {
        it('Throws error for un supported format', () => {
            expect(() => getStopColor('whasss')).toThrow();
        });
    });

    describe('When stop color is in hex', () => {
        it('returns rgb formatted color', () => {
            expect(getStopColor('#ffffff')).toEqual('rgb(255, 255, 255)');
        });
    });

    describe('When color is short hex', () => {
        it('returns rgb formatted color', () => {
            expect(getStopColor('#fff')).toEqual('rgb(255, 255, 255)');
        });
    });

    describe('When stop color is in rgb', () => {
        it('returns rgb formatted color', () => {
            expect(getStopColor('rgb(252, 195, 164)')).toEqual('rgb(252, 195, 164)');
        });
    });

    describe('When stop color is in rgba', () => {
        it('returns rgba formatted color', () => {
            expect(getStopColor('rgba(0, 0, 0, 0.5)')).toEqual('rgba(0, 0, 0, 0.5)');
        });
    });
});


