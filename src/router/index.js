import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      alias: '/index',
      name: 'Index',
      component: () => import('@/pages/Index')
    },
    {
      path: "/first",
      name: "First",
      component: () => import('../pages/First'),
      children: [
        {
          path: "/first/firstTwo",
          name: "FirstTwo",
          component: () => import('../pages/subPage/FirstTwo.vue'),
          children: [
            {
              path: '/first/firstTwo/firstThree',
              name: 'FirstThree',
              component: () => import('../pages/subPage/childPage/FirstThree')
            },
            {
              path: '/first/firstTwo/secondThree',
              name: 'SecondThree',
              component: () => import('../pages/subPage/childPage/SecondThree.vue')
            }
          ]
        },
        {
          path: "/first/secondTwo",
          name: "SecondTwo",
          component: () => import('../pages/subPage/SecondTwo.vue')
        }
      ]
    },
    {
      path: "/second",
      name: "Second",
      component: () => import('../pages/Second'),
      children: [
        {
          path: "/second/secondTwo",
          name: "SecondTwo2",
          component: () => import('../pages/subPage/SecondTwo.vue')
        }
      ]
    },
    {
      path: '/waterfall',
      name: 'waterfall',
      component: () => import('../pages/waterfall.vue')
    },
    {
      path: '/testPage',
      name: 'testPage',
      component: () => import('../pages/testPage.vue')
    },
    {
      path: '/vantTest',
      name: 'vantTest',
      component: () => import('../pages/vantTest.vue')
    },
    {
      path: '/customComTest',
      name: 'customComTest',
      component: () => import('../pages/customComTest.vue')
    },
    {
      path: '/loadingTest',
      name: 'loadingTest',
      component: () => import('../pages/loadingTest.vue')
    },
    {
      path: "*",
      component: () => import('../pages/Error'),
      hidden: true
    }
  ]
})
