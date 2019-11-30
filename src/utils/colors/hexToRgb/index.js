export const hexRegExp = new RegExp(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);

/**
 * Converts a hex color string into rgb
 * @param {String} hex - Hex color string
 * @param {Number} opacity - The opacity to use
 * @returns {Object}
 */
const hexToRgb = (hex, opacity = 1) => {
    const result = hexRegExp.exec(hex);

    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
        a: opacity
    } : undefined;
};

export default hexToRgb;
