import {
    parseLinearGradient,
    getGradientAngle,
    hexToRgb,
    formatRgb,
    getStopOffset,
    getAngleCords
} from './utils';
import { rgbRex, rgbStrToRgb, rgbaRex, rgbaStrToRgb } from './utils/rgbStrToRgb';

/**
 * Formats into linear gradient background property
 * @param {Number} angle - The linear gradient degree
 * @param {Stop[]} stops - The linear gradient stops
 * @returns {String}
 */
const asBackground = ({ angle, stops }) => `linear-gradient(${angle}deg, ${
    stops
    .map(stop => `${stop.color} ${stop.offset}%`)
    .join(', ')
})`;

const parserHandlers = {
    string: parseLinearGradient,
    object: (gradient) => ({
        ...gradient,
        stops: gradient.stops.map(({ offset, color, opacity }) => {
            const hexMatcher = /#[\da-f]{6}/i;
            let rgb;
            if (hexMatcher.test(color)) {
                rgb = hexToRgb(color, opacity);
            } else if (rgbRex.test(color)) {
                rgb = rgbStrToRgb(color, opacity);
            } else if (rgbaRex.test(color)) {
                rgb = rgbaStrToRgb(color);
            }
            return {
                offset: getStopOffset(offset),
                color: formatRgb(rgb)
            };
        })
    })
};

export default {

    /**
     * Transform a given linear gradient ( String or json ) into css background image property
     * @param {String|LinearGradient} linearGradient - The linear gradient
     * @returns BackgroundResult
     */
    getBackground(linearGradient) {
        const handleType = typeof linearGradient;
        const handler = parserHandlers[handleType];

        if (!handler) {
            throw new Error('Cannot parse non JSON / SVG String input');
        }

        linearGradient = handler(linearGradient);

        const stops = linearGradient.stops || linearGradient.children;
        const angle = getGradientAngle(linearGradient);

        const background = asBackground({ angle, stops });

        return { angle, background };
    },

    getGradientCords(angle) {
        const { startPoint, endPoint } = getAngleCords(angle);

        return {
            x1: startPoint.x,
            y1: startPoint.y,
            x2: endPoint.x,
            y2: endPoint.y
        };
    }
};
