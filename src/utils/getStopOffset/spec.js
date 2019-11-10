import getStopOffset from '.';

describe('utils / getStopOffset', () => {

    describe('When offset is a number', () => {
        const offset = 1;

        it('Returns as percentage', () => {
            expect(getStopOffset(offset)).toEqual(100);
        });
    });

    describe('When offset is a number string', () => {
        const offset = '0.5';

        it('Returns as percentage', () => {
            expect(getStopOffset(offset)).toEqual(50);
        });
    });

    describe('When offset is a percentage string', () => {
        const offset = '75%';

        it('Returns as percentage', () => {
            expect(getStopOffset(offset)).toEqual(75);
        });
    });
});
