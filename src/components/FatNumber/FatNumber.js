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
    onInc () {
      const val = this.val + 1;
      this.$emit('fatNumberEvent', { ...this.$options.propsData, val });
    },
    onDec () {
      const val = this.val - 1;
      this.$emit('fatNumberEvent', { ...this.$options.propsData, val });
    }
  }
};
