/*
Main Problem:
Sort array of String
*/

/**
 1. * Empty array
 2. * Array of with one element
 3. * Empty String
 4. * Array with multiple elements
 5. * Capitalization differences
 */
describe('Sort array of Strings', () => {
    it('returs empty array when no names are given', () => {
        const result = sortArray();

        expect(result).toEqual([]);
    });

    it('returns array with one element when one given name', () => {
        const result = sortArray('Tomi');

        expect(result).toEqual(['Tomi']);
    });
});

function sortArray(...names: string[]): string[] {
    return names;
}
