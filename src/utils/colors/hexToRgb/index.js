export const hexRegExp = new RegExp(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
export const hexShortRegExp = new RegExp(/^#?([a-f\d])([a-f\d])([a-f\d])$/i);

/**
 * Converts a hex color string into rgb
 * @param {String} hex - Hex color string
 * @param {Number} opacity - The opacity to use
 * @returns {Object}
 */
const hexToRgb = (hex, opacity = 1) => {
    let result = hexRegExp.exec(hex) || hexShortRegExp.exec(hex);

    return result ? {
        r: parseInt(result[1].repeat(3 - result[1].length), 16),
        g: parseInt(result[2].repeat(3 - result[2].length), 16),
        b: parseInt(result[3].repeat(3 - result[3].length), 16),
        a: opacity
    } : undefined;
};

export default hexToRgb;
