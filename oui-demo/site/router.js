import otherRoutes from './otherRoutes';
import VueRouter from 'vue-router';

const routes = [
  ...otherRoutes,
  // { path: '/*', redirect: '/homepage/guide' },
];

export default new VueRouter({
  mode: 'history',
  fallback: false,
  routes,
});
