```js
  import Vue from 'vue';
  import Usertyd from 'userty-design';
  import 'userty-design/dist/userty-design.less';
  import App from './App';

  Vue.use(Usertyd)

  new Vue({
    render: h => h(App),
  }).$mount('#app');
```
