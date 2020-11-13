/**
 * @name calculateEntropy
 *
 * @description calculates the entropy of a random password
 * based on the length and set of characters
 *
 * @param {number} pwLength - number of characters in the password
 * @param {number} setLength - number of available characters to choose from
 *
 * @returns {number} - number of bits of entropy in the generated password
 */
export default function calculateEntropy (pwLength, setLength) {
  const entropy = Math.log2(setLength) * pwLength;
  return entropy;
}
