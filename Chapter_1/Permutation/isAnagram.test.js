const isAnagram = require('./isAnagram');


test('expect empty strings to return true', () => {
    expect(isAnagram('', '')).toBe(true);
});

test('expect the same word twice to be true', () => {
    expect(isAnagram('high', 'high')).toBe(true);
});

test('expect an anagram to be true', () => {
    expect(isAnagram('racecar', 'carrace')).toBe(true);
});

test('expect an anagram + 1 to not match', () => {
    expect(isAnagram('banana', 'bananal')).toBe(false);
});

test('expect an anagram + 1 to not match, (switched input)', () => {
    expect(isAnagram('bananal', 'banana')).toBe(false);
});