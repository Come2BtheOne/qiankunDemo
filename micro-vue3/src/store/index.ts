import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import Home from './modules/home'
import Cart from './modules/cart'

export const key: InjectionKey<Store<any>> = Symbol()

export const store = createStore({
  modules: {
		Home,
		Cart
	}
})

// 定义自己的 `useStore` 组合式函数
export function useStore () {
  return baseUseStore(key)
}