import { createRouter, createWebHistory } from 'vue-router'
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper';

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../pages/Home/index.vue')
  },
  {
    path: '/cart/:id',
    name: 'cart',
    component: () => import('../pages/Cart/index.vue')
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('../pages/Mine/index')
  },
]

const router = createRouter({
  history: createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? "/Vue3" : "/"),
  routes
})

export default router
