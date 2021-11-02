import 'babel-polyfill';
import './index.less';
import 'nprogress/nprogress.css';
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueClipboard from 'vue-clipboard2';
import VueStorage from 'vue-ls';
import NProgress from 'nprogress';
import router from './router';
import Oui from '../node_modules/userty-design';
import bootstrap from '../core/bootstrap';
import store from '../store/index.js';
import 'userty-design/dist/usertyd.css';

const mountedCallback = {
  install: Vue => {
    Vue.directive('mountedCallback', {
      inserted(el, binding, vnode) {
        binding.value(vnode);
      },
    });
  },
};

Vue.use(Vuex);
Vue.use(mountedCallback);
Vue.use(VueClipboard);
Vue.use(VueRouter);
Vue.use(Oui);
Vue.use(VueStorage, {
  namespace: 'pro__', // key prefix
  name: 'ls', // name variable Vue.[ls] or this.[$ls],
  storage: 'local',
});
Vue.component('VNodes', {
  functional: true,
  render: (h, ctx) => {
    return ctx.props.value;
  },
});

Vue.component('tempVar', {
  functional: true,
  render: (h, ctx) => {
    return ctx.scopedSlots && ctx.scopedSlots.default && ctx.scopedSlots.default(ctx.props);
  },
});
// const i18n = new VueI18n({
//   locale: isZhCN(location.pathname) ? zhCN.locale : enUS.locale,
//   messages: {
//     [enUS.locale]: { message: enUS.messages },
//     [zhCN.locale]: { message: zhCN.messages },
//   },
// });

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    NProgress.start();
  }
  next();
});

// console.log('bootstrap:::', bootstrap);

new Vue({
  el: '#app',
  router,
  store,
  created: bootstrap,
});
