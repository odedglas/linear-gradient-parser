/**
 * Formats a given position attribute
 * @param {String} pos - the position value
 * @returns {Number}
 */
const formatPosition = (pos) => pos.trim().endsWith('%') ?
    Number(pos.trim().replace('%', '')) : pos;

/**
 * Returns a gradient angle by a given position properties
 * @param {String} x1 - The gradient x1 position
 * @param {String} x2 - The gradient x2 position
 * @param {String} y1 - The gradient y1 position
 * @param {String} y2 - The gradient y2 position
 * @returns {Number}
 */
const getGradientAngle = ({ x1, x2, y1, y2 }) => {

    const x = formatPosition(x2) - formatPosition(x1);
    const y = formatPosition(y2) - formatPosition(y1);

    // Use 90deg for gradients only in the x-direction
    if (y === 0) {
        return 90;
    }

    // Converts angle in degrees
    const angleRad = Math.atan(y/x);
    return angleRad * 180 / Math.PI;
};

export default getGradientAngle;
