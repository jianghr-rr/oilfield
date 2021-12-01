import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Usertyd from 'userty-design/';
// import 'userty-design/dist/userty-design.less';

// Vue.use(Usertyd)

import { Button } from 'userty-design';
// import 'userty-design/lib/button/style';
Vue.use(Button);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
