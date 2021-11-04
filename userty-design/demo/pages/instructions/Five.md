```js
  import Vue from 'vue';
  import { Button, message } from 'ant-design-vue';
  import App from './App';

  Vue.config.productionTip = false;

  /* v1.1.2 */
  Vue.component(Button.name, Button);
  Vue.component(Button.Group.name, Button.Group);

  /* v1.1.3+ 自动注册Button下组件，如Button.Group */
  Vue.use(Button);

  Vue.prototype.$message = message;

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    components: { App },
    template: '<App/>',
  });
```
