import formatRgb from '../formatRgb';
import parseRgb, { rgbRegExp } from '../parseRgb';
import hexToRgb, { hexRegExp } from '../hexToRgb';

const colorClassifiers = [
    { regexp: hexRegExp, handler: hexToRgb },
    { regexp: rgbRegExp, handler: parseRgb }
];

const getStopColor = (color, opacity) => {
    const classifier = colorClassifiers.find(({ regexp }) => regexp.test(color));
    if (!classifier) {
        throw new Error(`Stop color - ${color} does not follow one of the accepted formats Hex / Rgb / Rgba `);
    }

    const parsedColor = classifier.handler(color, opacity);

    return formatRgb(parsedColor);
};

export default getStopColor;
