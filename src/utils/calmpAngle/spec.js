import clampAngle from '.';

describe('utils / clampAngle', () => {
    it('Keeps angle when in range', () => {
        expect(clampAngle(10, 0 , 20)).toEqual(10);
    });

    it('Adds 360 to angle when smalled than min', () => {
        expect(clampAngle(-60, 0, 360)).toEqual(300);
    });

    it('Reduce 360 from angle when greater than max', () => {
        expect(clampAngle(420, 0, 360)).toEqual(60);
    });
});
