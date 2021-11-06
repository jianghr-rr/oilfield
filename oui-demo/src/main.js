import Vue from 'vue';
import App from './App.vue';
import Oui from 'userty-design';
import 'userty-design/dist/usertyd.css';
import router from '@/router';
import store from '@/store';

Vue.config.productionTip = false;

Vue.use(Oui);
Vue.use(router);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
