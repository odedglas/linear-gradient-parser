import { simpleGradient } from '../../test/stub';
import { hexToRgb } from '../';
import getGradientStops from '.';

const parser = new DOMParser();

describe('utils / getGradientStops', () => {
    let gradient, stops;

    beforeEach(() => {
        const doc = parser.parseFromString(simpleGradient.string, 'image/svg+xml');

        gradient = doc.querySelector('linearGradient');
        stops = getGradientStops(gradient);
    });

    describe('General', () => {
        it('Returns proper amount of stops', () => {
            expect(stops.length).toEqual(simpleGradient.stops.length);
        });

        it.each(
            simpleGradient.stops.map((stop, index) => ({ ...stop, index }))
        )('Should return proper stop properties', (gradientStop) => {
            const resultStop = stops[gradientStop.index];

            const { r, g, b, a } = hexToRgb(gradientStop.color, gradientStop.opacity);
            const expectedColor = gradientStop.opacity ? `rgba(${r}, ${g}, ${b}, ${a})` :
                `rgb(${r}, ${g}, ${b})`;

            expect(resultStop.color).toEqual(expectedColor);
            expect(resultStop.offset).toEqual(gradientStop.offset * 100);
        });
    });

    describe('When stop has percentage offset', () => {
        const gradientString = `<linearGradient xmlns="http://www.w3.org/2000/svg">
                <stop offset="0%" stop-color="#ffffff"> </stop> 
                <stop offset="50%" stop-color="#ffffff"> </stop> 
                <stop offset="100%" stop-color="#ffffff"> </stop> 
            </linearGradient>`;
        let gradient;

        beforeEach(() => {
            const doc = parser.parseFromString(gradientString, 'image/svg+xml');

            gradient = doc.querySelector('linearGradient');
            stops = getGradientStops(gradient);
        });

        it.each([0, 50, 100])('Returns offset (%p) as number', (offset) => {
            const stopsOffset = stops.map((stop) => stop.offset);
            expect(stopsOffset.includes(offset)).toBeTruthy();
        });
    });

    describe('When stop has numeric offset', () => {
        const gradientString = `<linearGradient xmlns="http://www.w3.org/2000/svg">
                <stop offset="0" stop-color="#ffffff"> </stop> 
                <stop offset="0.5" stop-color="#ffffff"> </stop> 
                <stop offset="1" stop-color="#ffffff"> </stop> 
            </linearGradient>`;
        let gradient;

        beforeEach(() => {
            const doc = parser.parseFromString(gradientString, 'image/svg+xml');

            gradient = doc.querySelector('linearGradient');
            stops = getGradientStops(gradient);
        });

        it.each([0, 50, 100])('Returns offset (%p) as number', (offset) => {
            const stopsOffset = stops.map((stop) => stop.offset);
            expect(stopsOffset.includes(offset)).toBeTruthy();
        });
    });

    describe('When stop colors are in style', () => {
        const gradientString = `<linearGradient xmlns="http://www.w3.org/2000/svg">
                <stop offset="1" style='stop-color: #ffffff'> </stop> 
            </linearGradient>`;
        let gradient;

        beforeEach(() => {
            const doc = parser.parseFromString(gradientString, 'image/svg+xml');

            gradient = doc.querySelector('linearGradient');
            stops = getGradientStops(gradient);
        });

        it('Returns hex color', () => {
            expect(stops[0].color).toEqual('rgb(255, 255, 255)');
        });
    });
});
