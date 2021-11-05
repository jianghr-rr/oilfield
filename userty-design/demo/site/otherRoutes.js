import HompageLayout from '../layouts/HompageLayout';
// import BaseLayout from '../layouts/BaseLayout';

export default [
  {
    path: '/homepage/',
    component: HompageLayout,
    children: [
      {
        path: 'guide/',
        name: '指南',
        component: () => import(/* webpackChunkName: "homepage.guide" */ '../views/guide/index.vue'),
        children: [
          {
            path: 'introduce',
            name: '介绍',
            component: () => import(/* webpackChunkName: "homepage.guide" */ '../pages/guide/introduce.vue'),
          },
          {
            path: 'designpr',
            name: '设计原则',
            component: () => import(/* webpackChunkName: "homepage.guide" */ '../pages/guide/design-principles.vue'),
          },
          {
            path: 'designspec',
            name: '设计规范',
            component: () => import(/* webpackChunkName: "homepage.guide" */ '../pages/guide/design-spec.vue'),
          },
          { path: '', redirect: 'introduce' },
        ],
      },
      {
        path: 'instructions/',
        name: '使用说明',
        component: () => import(/* webpackChunkName: "homepage.theme" */ '../views/guide/index.vue'),
        children: [
          {
            path: 'main',
            name: '使用说明',
            component: () => import(/* webpackChunkName: "homepage.guide" */ '../pages/instructions/index.vue'),
          },
        ],
      },
      {
        path: 'fag/',
        name: '常见问题',
        component: () => import(/* webpackChunkName: "homepage.theme" */ '../views/guide/index.vue'),
        children: [
          {
            path: 'main',
            name: '常见问题',
            component: () => import(/* webpackChunkName: "homepage.guide" */ '../pages/fag/index.vue'),
          },
        ],
      },
      {
        path: 'introduce/',
        name: '常见问题',
        component: () => import(/* webpackChunkName: "homepage.theme" */ '../views/guide/index.vue'),
        children: [
          {
            path: 'main',
            name: '常见问题',
            component: () => import(/* webpackChunkName: "homepage.guide" */ '../pages/introduce/index.vue'),
          },
        ],
      },
      {
        path: 'theme/',
        name: '主题',
        component: () => import(/* webpackChunkName: "homepage.theme" */ '../views/theme/index.vue'),
        children: [
          {
            path: 'main',
            name: '定制主题',
            component: () => import(/* webpackChunkName: "homepage.guide" */ '../pages/theme/main.vue'),
          },
          {
            path: 'use',
            name: '定制使用',
            component: () => import(/* webpackChunkName: "homepage.guide" */ '../pages/theme/use.vue'),
          },
          { path: '', redirect: 'guide' },
        ],
      },
      // {
      //   path: 'component',
      //   name: '组件',
      //   component: () => import(/* webpackChunkName: "homepage.component" */ '../views/component/index.vue'),
      // },
      {
        path: 'resource/',
        name: '设计资源',
        component: () => import(/* webpackChunkName: "homepage.resource" */ '../views/resource/index.vue'),children: [
          {
            path: 'main',
            name: '设计资源',
            component: () => import(/* webpackChunkName: "homepage.guide" */ '../pages/resource/main.vue'),
          },
        ],
      },
      { path: '', redirect: 'guide' },
    ],
  },
  // { path: '/*', redirect: '/homepage' },
];
