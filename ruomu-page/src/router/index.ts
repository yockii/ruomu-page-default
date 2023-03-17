import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/edit',
    name: 'Editor',
    component: () => import('@/view/editor.vue')
  },
  {
    path: '/',
    name: 'RuntimePage',
    component: () => import('@/view/runtime-page.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router