import TabsView from '@/layouts/tabs/TabsView'
import PageView from '@/layouts/PageView'

// 路由配置
const options = {
  routes: [
    {
      path: '/login',
      name: '登录页',
      component: () => import('@/pages/login')
    },
    {
      path: '*',
      name: '404',
      component: () => import('@/pages/exception/404'),
    },
    {
      path: '/403',
      name: '403',
      component: () => import('@/pages/exception/403'),
    },
    {
      path: '/',
      name: '首页',
      component: TabsView,
      redirect: '/form/grid',
      children: [
        {
          path: 'form',
          name: '表单页 / Form Page',
          meta: {
            // icon: 'form',
            page: {
              cacheAble: false
            }
          },
          component: PageView,
          children: [
            {
              path: 'grid',
              name: '多类型布局表单',
              component: () => import('@/pages/dashboard/form/grid'),
            },
            {
              path: 'step',
              name: '分步表单',
              meta: {
                showTitle: false,
              },
              component: () => import('@/pages/dashboard/form/step'),
            }
          ]
        },
        {
          path: 'list',
          name: '表格页 / Sheet Page',
          meta: {
            // icon: 'table'
          },
          component: PageView,
          children: [
            {
              path: 'query',
              name: '可搜索查询表格',
              meta: {
                authority: 'queryForm',
              },
              component: () => import('@/pages/dashboard/list'),
            }
          ]
        },
        {
          path: 'cardlist',
          name: '列表页 / List Page',
          meta: {
            // icon: 'profile'
          },
          component: PageView,
          children: [
            {
              path: 'basic',
              name: '卡片列表页',
              component: () => import('@/pages/dashboard/cardlist')
            }
          ]
        },
        {
          path: 'message',
          name: '消息页 / Message Page',
          meta: {
            // icon: 'check-circle-o',
          },
          component: PageView,
          children: [
            {
              path: 'panel',
              name: '消息面板',
              component: () => import('@/pages/dashboard/messagePanel')
            }
          ]
        }
      ]
    }
  ]
}

export default options
