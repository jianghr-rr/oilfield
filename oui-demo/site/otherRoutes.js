import HompageLayout from '../layouts/HompageLayout';
import BaseLayout from '../layouts/BaseLayout';

export default [
  {
    path: '/homepage/',
    component: HompageLayout,
    children: [
      {
        path: 'guide/',
        name: '指南',
        component: () => import(/* webpackChunkName: "homepage.guide" */ '../views/guide/index.vue'),
      },
      { path: '', redirect: 'guide' },
    ],
  },
  { path: '/*', redirect: '/homepage' },
];
