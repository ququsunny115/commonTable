import Vue from 'vue'
import Router from 'vue-router'
// import cteate from '@/views/create'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/testList',
      name: 'testList',
      component: () => import('@/views/testList')
    },
    {
      path: '/testSearch',
      name: 'testSearch',
      component: () => import('@/views/testSearch')
    },
    {
      path: '/testSearchList',
      name: 'testSearchList',
      component: () => import('@/views/testSearchList')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('@/views/searchListContainer')
    },
    {
      path: '/searchContainer',
      name: 'searchContainer',
      component: () => import('@/views/searchContainer')
    },
    {
      path: '/listContainer',
      name: 'listContainer',
      component: () => import('@/views/listContainer')
    }
  ]
})
