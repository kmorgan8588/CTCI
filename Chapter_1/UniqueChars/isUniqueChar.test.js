const isUniqueChars = require('./isUniqueChars');


test('an empty string should return true', () => {
	expect(isUniqueChars('')).toBe(true);
});

test('a string of length one should return true', () => {
	expect(isUniqueChars('a')).toBe(true);
	expect(isUniqueChars('e')).toBe(true);
	expect(isUniqueChars('r')).toBe(true);
	expect(isUniqueChars('u')).toBe(true);
	expect(isUniqueChars('x')).toBe(true);
	expect(isUniqueChars('y')).toBe(true);
});

test('banana should fail', () => {
	expect(isUniqueChars('Banana')).toBe(false);
});

test('upper and lowercase alphabet should pass', () => {
	expect(isUniqueChars('AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz')).toBe(true);
});
