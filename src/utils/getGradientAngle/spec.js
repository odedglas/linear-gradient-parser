import getGradientAngle from '.';

describe('utils / getGradientAngle', () => {
    const expectedAngle = 42.98228400751276;
    describe('When gradient properties are in %', () => {
       const gradient = {
           x1: '-63%',
           x2: '115%',
           y1: '194%',
           y2: '3%'
       };

       it(`Returns the proper expected angle ${expectedAngle}`, () => {
           expect(getGradientAngle(gradient)).toEqual(expectedAngle);
       });
    });

    describe('When gradient properties are strings', () => {
        const gradient = {
            x1: '-63',
            x2: '115',
            y1: '194',
            y2: '3'
        };

        it(`Returns the proper expected angle ${expectedAngle}`, () => {
            expect(getGradientAngle(gradient)).toEqual(expectedAngle);
        });
    });

    describe('When X Delta is 0', () => {

        it('Returns 180 when y2 greater than y1', () => {
            expect(getGradientAngle({
                x1: '0',
                x2: '0',
                y1: '-5',
                y2: '10',
            })).toEqual(180);
        });

        it('Returns 0 when y1 greater than y2', () => {
            expect(getGradientAngle({
                x1: '0',
                x2: '0',
                y1: '5',
                y2: '-10',
            })).toEqual(0);
        });
    });

    describe('When Y Delta is 0', () => {

        it('Returns 90 when x2 greater than x1', () => {
            expect(getGradientAngle({
                x1: '-32',
                x2: '422',
                y1: '0',
                y2: '0',
            })).toEqual(90);
        });

        it('Returns 270 when x1 greater than x2', () => {
            expect(getGradientAngle({
                x1: '231',
                x2: '33',
                y1: '0',
                y2: '0',
            })).toEqual(270);
        });
    });
});
