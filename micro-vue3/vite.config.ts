import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import qiankun from 'vite-plugin-qiankun';

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  },
  build: {
    assetsInlineLimit: 10240
  },
  server: {
    port: 9300,
    open: true,
    cors: true
  },
  plugins: [
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    // 这里的 'Vue3MicroApp' 是子应用名，主应用注册时AppName需保持一致
    qiankun('Vue3MicroApp', {useDevMode: true}),
  ],
  // 生产环境需要指定运行域名作为base
  base: 'http://localhost:9300/'
})



