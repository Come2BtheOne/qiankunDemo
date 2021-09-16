<template>
    <div>
        <h1>作者:{{auth}}</h1> {{currentRouteName}}
        <NTabs type="card" :value="currentRouteName">
            <NTabPane name="home">
                <template v-slot:tab>
                    <router-link active-class="custom-router-active" :to="{path: '/home', query: {name: 'ddds'} }">主页</router-link>
                </template>
            </NTabPane>
            <NTabPane name="cart">
                <template v-slot:tab>
                    <router-link active-class="custom-router-active" :to="{path: '/cart/55'}">购物车页</router-link>
                </template>
            </NTabPane>
            <NTabPane name="mine">
                <template v-slot:tab>
                    <router-link active-class="custom-router-active" :to="{path: '/mine'}">我的</router-link>
                </template>
            </NTabPane>
        </NTabs>
    </div>
</template>

<script lang="ts">
import { ref, computed, watch, onMounted, onUnmounted, reactive, toRefs, getCurrentInstance, defineComponent } from 'vue';
import { useRouter } from 'vue-router'
import { NTabs, NTabPane } from 'naive-ui'

interface State {
    num: number
    auth: string
}

export default defineComponent({
     components: {
        NTabs,
        NTabPane
     },
    setup() {
        const router = useRouter()

        const state = reactive<State>({
            num: 1,
            auth: ""
        })

        const currentRouteName = computed(()=> router?.currentRoute?.value?.name?.toString())

        onMounted(()=>{
            const instance = getCurrentInstance()
            state.auth = instance?.appContext.config.globalProperties.$auth
        })

        onUnmounted(()=>{
        })

        return {
            ...toRefs(state),
            currentRouteName
        }
    }
})
</script>

<style>

</style>