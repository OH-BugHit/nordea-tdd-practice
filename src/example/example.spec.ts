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

    it('return empty array when empty name is given', () => {
        const result = sortArray('');
        expect(result).toEqual([]);
    });

    it('returns array of sorted names when multiple names are given', () => {
        const result = sortArray('Petteri', 'Aapo');

        expect(result).toEqual(['Aapo', 'Petteri']);
    });

    it('returns array of names sorted by small alphabetic first', () => {
        const result = sortArray('Tomi', 'tomi');

        expect(result).toEqual(['tomi', 'Tomi']);
    });
});

function sortArray(...names: string[]): string[] {
    const removeEmptyNames = (name: string) => !!name;
    const sortByLowerCase = (a: string, b: string) =>
        a.toLowerCase() > b.toLowerCase() ? 1 : -1;

    return names.filter(removeEmptyNames).sort().sort(sortByLowerCase);
}
