export default {
  name: 'FatToggle',
  props: {
    type: String,
    val: [String, Number, Boolean],
    k: String,
    text: String,
    label: String,
    onClick: Function
  },
  computed: {
    toggleState () {
      return (this.val) ? 'Disable' : 'Enable';
    }
  }
};
