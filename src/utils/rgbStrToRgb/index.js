export const rgbRex = new RegExp('^rgb\\((25[0-5]|2[0-4][0-9]|1[0-9]?[0-9]?|[1-9][0-9]?|[0-9]), ?(25[0-5]|2[0-4][0-9]|1[0-9]?[0-9]?|[1-9][0-9]?|[0-9]), ?(25[0-5]|2[0-4][0-9]|1[0-9]?[0-9]?|[1-9][0-9]?|[0-9])\\)$')

/**
 * Converts a rgb string into rgb
 * @param {String} rgbStr string
 * @param {Number} opacity - The opacity to use
 * @returns {Object}
 */
export const rgbStrToRgb = (rgbStr, opacity = 1) => {
    const result = rgbRex.exec(rgbStr.replace(/\s/g, ''));

    if (result) {
        const [, r, g, b] = result;
        return {
            r: parseInt(r),
            g: parseInt(g),
            b: parseInt(b),
            a: opacity
        };
    } else {
        return undefined;
    }

};

