import { simpleGradient } from './test/stub';
import parser from '.';

describe('Linear Gradient Transformer', () => {

    describe('getBackground', () => {

        describe('When input is string', () => {

            it('Gets css from linear gradient string', () => {
                const result = parser.getBackground(simpleGradient.string);

                expect(result.angle).toEqual(simpleGradient.angle);
                expect(result.background).toEqual(simpleGradient.background);
            });
        });

        describe('When input is json', () => {

            it('Gets css from linear gradient string', () => {
                const result = parser.getBackground(simpleGradient);

                expect(result.angle).toEqual(simpleGradient.angle);
                expect(result.background).toEqual(simpleGradient.background);
            });
        });
    });
});
