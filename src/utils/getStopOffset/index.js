/**
 * Returns an offset
 * @param {String} offset - Stop offset, Can contain %
 * @returns {Number}
 */
const getStopOffset = (offset) => {
    offset = offset.toString().trim();
    console.log('Offset is : ', offset);
    if (offset.endsWith('%')) {
        return Number(offset.replace('%', ''));
    }

    // Assume 0-1 as percentage when offset has no %
    return Number(offset) * 100;
};

export default getStopOffset;
