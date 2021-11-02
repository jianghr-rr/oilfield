import Layout from '../components/layout.vue';
import demoRoutes from './demoRoutes';

export default [
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "homepage.guide" */ '../views/login/index.vue'),
  },
  {
    path: '/components',
    component: Layout,
    props: route => {
      const name = route.path.split('/components/')[1].split('/')[0];
      return { name, showDemo: true };
    },
    children: demoRoutes.map(item => ({
      ...item,
      meta: {
        requireAuth: true
      }
    })),
  },
  { path: '/*', redirect: '/components/button-cn/' },
];
