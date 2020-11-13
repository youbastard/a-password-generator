
import FatNumber from '@/components/FatNumber';
import FatToggle from '@/components/FatToggle';
import TheToast from '@/components/Toast';

import SvgClipboard from '@/assets/clipboard-copy.svg';

import getCharset from '@/utils/get-charset';
import generatePassword from '@/utils/generate-password';
import calculateEntropy from '@/utils/calculate-entropy';

import passwordOptions from '@/constants/password-options';

export default {
  name: 'PassGenerator',
  components: {
    FatNumber,
    FatToggle,
    SvgClipboard,
    TheToast
  },
  data () {
    return {
      pw: null,
      opts: passwordOptions
    };
  },
  computed: {
    // reduce the options array to a key/value pair
    // and call the 'getCharset' function with that
    // object. it will return an array of all
    // characters that can be selected as part of the
    // password generation
    charset () {
      const options = this.opts.reduce((obj, opt) => {
        obj[opt.k] = opt.val;
        return obj;
      }, {});
      return getCharset(options);
    },
    // calculate the amount of password entry based
    // on the the selected password length and options
    entropy () {
      const entropy = calculateEntropy(this.pwLength, this.charset.length);
      return entropy.toFixed(1);
    },
    pwLength () {
      // return this.opts.find((o) => o.k === 'pwLength').val;
      return 36;
    },
    useGroups () {
      return this.opts.find((o) => o.k === 'useGroups').val;
    }
  },
  methods: {
    //
    onToggleClick (opt) {
      console.log(opt);
    },
    // calls the generatePassword utiltiy
    generate () {
      this.pw = generatePassword(this.pwLength, this.charset, this.useGroups);
    },
    // copies the generated password into a users clipboard
    // and generates a toast notifying the user
    // requires support for the clipboard API
    async copyPassword () {
      if (!navigator.clipboard) {
        return;
      }
      try {
        await navigator.clipboard.writeText(this.pw);
        // trigger toast
      } catch (error) {
        console.error('Copy failed', error);
      }
    }
  }
};
