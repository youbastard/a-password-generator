export default {
  name: 'FatToggle',
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
      const val = !this.val;
      this.$emit('fatToggleEvent', { ...this.$options.propsData, val });
    }
  }
};
