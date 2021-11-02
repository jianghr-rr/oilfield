import "babel-polyfill";
import Vue from "vue";
import App from "./App.vue";
import Oui from "oui-vue";
// import "oui-vue/style.js";
import 'ant-design-vue/style.js';

Vue.use(Oui);

new Vue({
  el: "#app",
  render: h => h(App)
});
