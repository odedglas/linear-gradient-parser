import getGradientAngle from '.';

const expectedAngle = (x, y) => {
    const angleRad = Math.atan(y/x);
    return angleRad * 180 / Math.PI;
};

describe('utils / getGradientAngle', () => {
    describe('When gradient properties are in %', () => {
       const gradient = {
           x1: '-63%',
           x2: '115%',
           y1: '194%',
           y2: '3%'
       };

       const expected = expectedAngle(
           115 - (-63),
           3 - 194
       );

       it('Returns 90 deg for 0 Y delta', () => {
           expect(getGradientAngle({
               ...gradient,
               y1: '0',
               y2: '0',
           })).toEqual(90);
       });

       it('Returns -90 deg for 0 X delta', () => {
           expect(getGradientAngle({
               ...gradient,
               x1: '5',
               x2: '5'
           }));
       });

       it(`Returns the proper expected angle ${expected}`, () => {
           expect(getGradientAngle(gradient)).toEqual(expected);
       });
    });
});
