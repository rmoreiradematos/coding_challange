/**
 * License Key Formatting
 * 
 * Reformats a string of alphanumeric characters and dashes. The input string is separated 
 * into N + 1 groups by N dashes. The function aims to reformat the string such that 
 * each group contains exactly K characters, except for the first group, which could 
 * be shorter than K but must contain at least one character. A dash is inserted between 
 * groups, and all lowercase letters are converted to uppercase.
 * 
 * @param {string} S - The input string containing alphanumeric characters and dashes.
 * @param {number} K - The number of characters each group (except possibly the first) should have after formatting.
 * @returns {string} - The reformatted string.
 * 
 * @example
 * // returns '5F3Z-2E9W'
 * licenseKeyFormatting("5F3Z-2e-9-w", 4)
 * 
 * @example
 * // returns '2-5G-3J'
 * licenseKeyFormatting("2-5g-3-J", 2)
 */
function licenseKeyFormatting(S, K) {
  let str = S.replace(/-/g, '').toUpperCase();
  let arr = str.split('');
  let result = [];

  while (arr.length > 0) {
    result.unshift(arr.splice(-K).join(''));
  }

  return result.join('-');
}

module.exports = {
  licenseKeyFormatting
};