import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/about.vue')
  },
  {
    path: '/tsx',
    name: 'tsx',
    component: () => import('@/views/tsx-demo')
  },
  {
    alias: '/design',
    path: '/',
    name: 'Designer',
    component: () => import('@/views/designer.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
