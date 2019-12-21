import {
    parseLinearGradient,
    getGradientAngle,
    getStopColor,
    getStopOffset,
    getAngleCords
} from './utils';

/**
 * Formats into linear gradient background property
 * @param {Number} angle - The linear gradient degree
 * @param {Stop[]} stops - The linear gradient stops
 * @returns {String}
 */
const asBackground = ({ angle, stops }) => stops.length === 1 ? stops[0].color : `linear-gradient(${angle}deg, ${
    stops
    .map(stop => `${stop.color} ${stop.offset}%`)
    .join(', ')
})`;

const parserHandlers = {
    string: parseLinearGradient,
    object: (gradient) => ({
        ...gradient,
        stops: gradient.stops.map(({ offset, color, opacity }) => ({
            offset: getStopOffset(offset),
            color: getStopColor(color, opacity)
        }))
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
