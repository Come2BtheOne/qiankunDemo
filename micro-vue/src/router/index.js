import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/home'},
    { path: '/home', component: () => import('../pages/index.vue')},
]

const router = new VueRouter({
    mode: 'history',
  // 在 render 中创建 VueRouter，可以保证在卸载微应用时，移除 location 事件监听，防止事件污染
    base: window.__POWERED_BY_QIANKUN__ ? "/Vue" : "/",
    routes,
})

export default router;