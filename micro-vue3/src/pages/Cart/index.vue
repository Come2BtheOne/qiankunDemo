<template>
  <h2 ref="TitleNode">购物车页</h2>
  <NSpace>
    <NButton type="primary" size="tiny" @click="getVNode">获取VNode</NButton>
    <NButton type="primary" size="tiny" @click="addOne">num + 1</NButton>
  </NSpace>
  <div>1xNum: {{num}}</div>
  <div>2xNum: {{dbNum}}</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed, ref, toRefs, reactive, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { NButton, NSpace } from 'naive-ui'

export default defineComponent({
    components: {
        NButton,
        NSpace
    },
    setup(props, context) {
        const router = useRouter()
        const TitleNode = ref(null)
        const state = reactive({num: 0, dbNum: 0})

        const params = computed(()=> {
            return router.currentRoute.value.params
        })

        const stopHandle = watchEffect(()=>{
            state.dbNum = state.num * 2
        })

        const getVNode = () => {
            console.log(TitleNode.value)
        }

        onMounted(()=>{
            // console.log(params.value)
            console.log(window.ZR);
        })

        return {
            ...toRefs(state),
            TitleNode,
            getVNode,
            addOne: () => {
                state.num += 1
                if(state.dbNum >= 10){
                    stopHandle()
                }
            }
        }
    }
})
</script>

<style>

</style>