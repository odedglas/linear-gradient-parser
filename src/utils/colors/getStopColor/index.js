import formatRgb from '../formatRgb';
import parseRgb, { rgbRegExp } from '../parseRgb';
import hexToRgb, { hexRegExp, sortHexRegExp } from '../hexToRgb';

const colorClassifiers = [
    { regexps: [hexRegExp, sortHexRegExp], handler: hexToRgb },
    { regexps: [rgbRegExp], handler: parseRgb }
];

const getStopColor = (color, opacity) => {
    const classifier = colorClassifiers.find(({ regexps }) =>
        regexps.some((regexp) => regexp.test(color))
    );

    if (!classifier) {
        throw new Error(`Stop color - ${color} does not follow one of the accepted formats Hex / Rgb / Rgba `);
    }

    const parsedColor = classifier.handler(color, opacity);

    return formatRgb(parsedColor);
};

export default getStopColor;
