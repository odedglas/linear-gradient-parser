import { getStopOffset, getStopColor } from '..';
import { ATTRIBUTES } from '../../constnats';

/**
 * Returns a CSSStyleDeclaration from a astring
 * @param {String} styleString
 * @returns {CSSStyleDeclaration}
 */
const getStyles = (styleString) => {
    const el = document.createElement('div');

    el.setAttribute('style', styleString);

    return el.style;
};

/**
 * Returns a given stop html element it's color
 * @param {HTMLElement} stop
 * @returns {String} rgb / rgba formatted color
 */
const getColor = (stop) => {
    const attributeColor = stop.getAttribute(ATTRIBUTES.STOP_COLOR);
    if (attributeColor) {
        const opacity = stop.getAttribute(ATTRIBUTES.STOP_OPACITY);

        return getStopColor(attributeColor, opacity);
    }

    const {
        [ATTRIBUTES.STOP_COLOR]: styleColor,
        [ATTRIBUTES.STOP_OPACITY]: styleOpacity
    } = getStyles(stop.getAttribute(ATTRIBUTES.STYLE));

    return styleColor ? getStopColor(styleColor, styleOpacity) : undefined;
};

/**
 * Parses a Linear gradient HTML element into Stop
 * @param {HTMLElement} lg - The linear gradient
 * @returns {Stop[]}
 */
const getGradientStops = (lg) => Array.from(lg.querySelectorAll('stop'))
    .map((stop) => {

    const offset = getStopOffset(stop.getAttribute(ATTRIBUTES.OFFSET));
    const color = getColor(stop);

    return { offset: Number(offset), color };
});

export default getGradientStops;
