import clampAngle from '../calmpAngle';

/**
 * Formats a given position attribute
 * @param {String} pos - the position value
 * @returns {Number}
 */
const formatPosition = (pos) => Number(`${pos}`.trim().endsWith('%') ?
    pos.trim().replace('%', '') : pos);

/**
 * Returns a gradient angle by a given position properties
 * @param {String} x1 - The gradient x1 position
 * @param {String} x2 - The gradient x2 position
 * @param {String} y1 - The gradient y1 position
 * @param {String} y2 - The gradient y2 position
 * @returns {Number}
 */
const getGradientAngle = ({ x1, x2, y1, y2 }) => {

    [x1, x2, y1, y2] = [x1, x2, y1, y2].map(formatPosition);

    const x = x2 - x1;
    const y = y2 - y1;

    // Single axis
    if (y === 0) {
        return x1 > x2 ? 270 : 90;
    }

    if (x === 0) {
        return y1 > y2 ? 0 : 180;
    }

    // Converts angle in degrees
    const angleRad = Math.atan2(y, x);
    return clampAngle((angleRad * 180 / Math.PI) + 90);
};

export default getGradientAngle;
