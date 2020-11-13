import CopyLeft from '@/components/CopyLeft';

export default {
  name: 'SiteFooter',
  components: {
    CopyLeft
  },
  data () {
    return {
      currentYear: (new Date()).getFullYear()
    };
  }
};
