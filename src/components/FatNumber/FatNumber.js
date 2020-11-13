export default {
  name: 'FatNumber',
  props: {
    type: String,
    val: [String, Number, Boolean],
    k: String,
    text: String,
    label: String
  },
  computed: {
    toggleState () {
      return (this.val) ? 'Disable' : 'Enable';
    }
  },
  methods: {
    onClick () {

    }
  }
};
