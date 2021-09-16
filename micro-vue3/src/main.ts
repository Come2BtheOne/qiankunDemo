import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';

/**
 * 渲染函数
 * 两种情况：主应用生命周期钩子中运行 / 微应用单独启动时运行
 */

 let instance: any = null
// 独立运行时，直接挂载应用
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    render()
}

renderWithQiankun({
    bootstrap() {
        console.log("Vue3子应用:bootstraped");
    },
    mount(props: any) {
        console.log("Vue3子应用:mount", props);
        render(props);
    },
    unmount(props: any) {
        console.log("Vue3子应用:unmount");
        instance.unmount();
        instance = null;
    },
});

function render(props?: any) {
    // 挂载应用
    instance = createApp(App)
    instance.config.globalProperties.$auth = 'ZR'
    instance.use(router)
    instance.use(store, key)
    instance.mount(props ? props.container.querySelector("#app") : document.getElementById("app"))
}