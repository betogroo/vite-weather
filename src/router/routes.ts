import { RouteRecordRaw } from 'vue-router'
import CityView from '@/views/CityView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: 'Home',
      requiresAuth: false
    }
  },
  {
    path: '/about',
    name: 'AboutView',
    component: () => import('@/views/AboutView.vue'),
    meta: {
      title: 'Sobre',
      requiresAuth: false
    }
  },
  {
    path: '/cityview/:state/:city',
    name: 'CityView',
    component: CityView,
    meta: {
      title: 'Tempo Agora',
      requiresAuth: false
    }
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
    meta: {
      title: 'Home',
      requiresAuth: false
    }
  }
]

export default routes
