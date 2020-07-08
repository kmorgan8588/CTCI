module.exports = function isAnagram(string1, string2) {
    const charMap = {};
    if (string1.length > string2.length) [string1, string2] = [string2, string1];
    //if we have extra characters in string1, then we get a false positive in the second loop
    for (let c of string1) {
        if (charMap[c]) charMap[c]++;
        else {
            charMap[c] = 1;
        }
    }

    for (let c of string2) {
        if (charMap[c]) charMap[c]--;
        else {
            return false;
        }
    }

    return true;
};

/**
 * no extra store implementation
 * 
 * const isAnagram = (string1, string2) => {
 *      return string1.split('').sort().join('') === string2.split('').sort().join('');
 * }
 *  Space: O(1) constant space
 *  Time: O(n log n) sort time for both strings
 * 
 */