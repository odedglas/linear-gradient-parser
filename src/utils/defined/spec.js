import defined from '.';

describe('utils / defined', () => {

   it.each([
       true,
       false,
       'something',
       1,
       {}
   ])('Returns truthy when value (%p) is defined', (value) => expect(defined(value)).toBeTruthy());

   it.each([
       null,
       undefined
   ])('Returns false when value (%p) is un defined', (value) => expect(defined(value)).toBeFalsy());
});
