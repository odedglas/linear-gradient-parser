import { defined, getGradientStops } from '..';
import { POSITION_ATTRIBUTES } from '../../constnats';

let parser;

/**
 * Returns linear gradient position effecting properties
 * @param {HTMLElement} lg - The linear gradient element to parse
 * @returns {Object}
 */
const positionAttributes = (lg) => POSITION_ATTRIBUTES.reduce(
    (attributes, attr) => Object.assign(attributes, { [attr]: lg.getAttribute(attr) })
    , {});

/**
 * Parses an HTML linear gradient element into json rep
 * @param linearGradientString
 * @returns {LinearGradient}
 */
const parseLinearGradient = (linearGradientString) => {
    parser = parser || new DOMParser();
    const doc = parser.parseFromString(linearGradientString, 'image/svg+xml');
    const lg = doc.querySelector('linearGradient');

    if (!lg) {
        throw new Error('Couldn\'t parse svg string into linearGradient SVGElement');
    }

    return {
        ...positionAttributes(lg),
        stops: getGradientStops(lg).filter(({ offset, color }) =>
            defined(offset) && defined(color)
        )
    };
};

export default parseLinearGradient;
