/**
 * Determines if undefined or null
 * @param {?} value - The value to check
 * @returns {Boolean}
 */
const defined = (value) => {
    return value !== undefined && value !== null;
};

export default defined;
