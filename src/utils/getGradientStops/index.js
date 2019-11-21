import { hexToRgb, getStopOffset } from '..';
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
 * Parses a Linear gradient HTML element into Stop
 * @param {HTMLElement} lg - The linear gradient
 * @returns {Stop[]}
 */
const getGradientStops = (lg) => Array.from(lg.querySelectorAll('stop'))
    .map((stop) => {

    const offset = getStopOffset(stop.getAttribute(ATTRIBUTES.OFFSET));

    let color;
    let opacity;

    // Try to find the color using `stop-color` and `stop-opacity`
    if (stop.hasAttribute(ATTRIBUTES.STOP_COLOR)) {
        color = stop.getAttribute(ATTRIBUTES.STOP_COLOR);
        opacity = stop.getAttribute(ATTRIBUTES.STOP_OPACITY);

        if (opacity) {
            const rgb = hexToRgb(color);

            if (rgb) {
                const { r, g, b } = rgb;
                color = `rgba(${r}, ${g}, ${b}, ${opacity})`;
            }
        }
    }

    // Try to find the color using `style`
    if (!color && stop.hasAttribute(ATTRIBUTES.STYLE)) {
        const styles = getStyles(stop.getAttribute(ATTRIBUTES.STYLE));
        color = styles[ATTRIBUTES.STOP_COLOR];
    }

    return { offset: Number(offset), color };
});

export default getGradientStops;
