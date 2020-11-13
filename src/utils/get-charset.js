import UPPERCASE from '@/constants/uppercase';
import LOWERCASE from '@/constants/lowercase';
import NUMBERS from '@/constants/numbers';
import SYMBOLS from '@/constants/symbols';

/**
 *
 * @param {object} options
 * @param {boolean} options.useUppercase - should the password contain uppercase letters
 * @param {boolean} options.useLowercase - should the password contain lowercase letters
 * @param {boolean} options.useNumbers - should the password contain numbers
 * @param {boolean} options.useSymbols - should the password contain symbols
 *
 * @param {array} - characters set
 */
export default function getCharset ({ useUppercase, useLowercase, useNumbers, useSymbols }) {
  // create an array of all the desired
  // characters and filter null elements
  // does this include 0?
  const charset = Array.prototype.concat(
    (useUppercase && UPPERCASE),
    (useLowercase && LOWERCASE),
    (useNumbers && NUMBERS),
    (useSymbols && SYMBOLS)
  ).filter(Boolean);

  // if all the options were false
  // throw an error, because otherwise
  // the password would suck
  if (charset.length === 0) {
    throw new Error('No options selected');
  }

  // return the charset
  return charset;
}
