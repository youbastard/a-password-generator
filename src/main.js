import Vue from 'vue';
import App from '@/components/App';

import '@/styles/index.scss';

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.config.peformance = true;

new Vue({
  render: h => h(App)
}).$mount('#app');
