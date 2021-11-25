```js
  import Vue from 'vue';
  import { Button, message } from 'userty-design';
  import App from './App';

  Vue.use(Button);

  Vue.prototype.$message = message;

  new Vue({
    el: '#app',
    components: { App },
    template: '<App/>',
  });
```
