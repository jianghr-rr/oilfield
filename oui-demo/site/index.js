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

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
import Md from '../components/md';
import Api from '../components/api';
// import './components';
// import './oui-components';
import demoBox from '../components/demoBox';
import demoContainer from '../components/demoContainer';
import demoSort from '../components/demoSort';

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
Vue.use(Antd);
Vue.component(Md.name, Md);
Vue.component(Api.name, Api);
Vue.component('demo-box', demoBox);
Vue.component('demo-container', demoContainer);
Vue.component('demo-sort', demoSort);

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    NProgress.start();
  }
  if (to.meta.requireAuth) {
      const isLocalLogin = localStorage.getItem('login');
      const isSessionLogin = sessionStorage.getItem('login');
      if (isSessionLogin || isLocalLogin) {
          next();
      } else {
          next('/login');
      }
  } else {
    next()
  }
});

// console.log('bootstrap:::', bootstrap);

new Vue({
  el: '#app',
  router,
  store,
  created: bootstrap,
});
