import { RouteRecordRaw } from 'vue-router'
import CityView from '@/views/CityView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'AboutView',
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/cityview/:state/:city',
    name: 'CityView',
    component: CityView
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue')
  }
]

export default routes
