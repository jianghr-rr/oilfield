// 路由配置
const options = {
  routes: [
    {
      path: '/login',
      name: '登录页',
      component: () => import('@/pages/login')
    },
    // {
    //   path: '*',
    //   name: '404',
    //   component: () => import('@/pages/exception/404'),
    // },
    {
      path: '/',
      name: '首页',
      component: () => import('@/pages/primaryLayout/index.vue'),
      meta: {
          requireAuth: true
      }
      // children: [
      //   {
      //     path: 'dashboard',
      //     name: 'Dashboard',
      //     meta: {
      //       icon: 'dashboard'
      //     },
      //     component: () => import('@/pages/primaryLayout/index.vue'),
      //   }
      // ]
    },
  ]
}

export default options
