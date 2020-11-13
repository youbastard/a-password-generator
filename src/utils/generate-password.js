/**
 * @name generatePassword
 *
 * @description randomly generates a new password given a set of options
 *
 * @param {number} pwLength - desired length of the password (not including hyphens for groups)
 * @param {array} charset - array of characters which can appear in the password
 * @param {boolean} useGroups - if true, the password will be split into groups of 4 chars seperated by a hyphen
 *
 * @returns {object} a random password that can never be guess by man or machine
 */
export default function generatePassword (pwLength, charset, useGroups) {
  let password = ''; // password string

  // if all the options were false
  // throw an error, because otherwise
  // the password would suck
  if (charset.length === 0) {
    throw new Error('No options selected');
  }

  // generate a random index within the
  // array and append the character at
  // that index to the password string
  // do this until the password string
  // is the desired length
  while (password.length < pwLength) {
    const idx = Math.floor(Math.random() * charset.length);
    password += charset[idx];
  }

  // if useGroups is set to true, split
  // the string in to groups of four
  // characters joined by a hyphen
  if (useGroups) {
    password = password.match(/.{1,4}/g).join('-');
  }

  // return the new super secure password
  return password;
};
