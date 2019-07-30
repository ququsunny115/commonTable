import Vue from 'vue'
import Router from 'vue-router'
// import cteate from '@/views/create'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/create',
      name: 'create',
      component: () => import('@/views/create')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('@/views/list')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/searchContainer')
    },
    {
      path: '/searchAndTable',
      name: 'searchAndTable',
      component: () => import('@/views/searchAndTable')
    }
  ]
})
