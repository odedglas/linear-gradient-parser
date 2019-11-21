import parseLinearGradient from '.';

const positionProps = {
    x1: '10',
    x2: '30',
    y1: '10',
    y2: '-50'
};

describe('utils / parseLinearGradient', () => {
    const gradientString = `<linearGradient xmlns="http://www.w3.org/2000/svg" 
        x1="${positionProps.x1}" 
        x2="${positionProps.x2}" 
        y1="${positionProps.y1}" 
        y2="${positionProps.y2}">
                <stop offset="1" style='stop-color: #ffffff'> </stop> 
            </linearGradient>`;

    describe('When unvalid', () => {

        it('Throws an error', () => {
            expect(() => parseLinearGradient('Hey')).toThrow();
        });
    });

    describe('When valid', () => {
       const gradient = parseLinearGradient(gradientString);

       it('Builds correct stops', () => {
          expect(gradient.stops.length).toEqual(1);
          expect(gradient.stops[0].color).toEqual('rgb(255, 255, 255)');
       });

       it.each(Object.keys(positionProps))('Should return poroper position attribute (%p)', (attr) => {
           expect(gradient[attr]).toEqual(positionProps[attr]);
       });
    });
});
