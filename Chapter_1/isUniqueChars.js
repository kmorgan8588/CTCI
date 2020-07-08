module.exports = function isUniqueChars(string) {
	const map = {};

	for (let c of str) {
		if (map[c]) return false;
		map[c] = 1;
	}

	return true;
};

