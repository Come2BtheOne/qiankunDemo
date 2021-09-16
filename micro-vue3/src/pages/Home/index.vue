<template>
  <NSpace>
        年龄{{dbAge}}
        <NButton type="error" size="tiny" @click="addAge(1)">+1</NButton>
        <NButton type="error" size="tiny" @click="addAge(2)">+2</NButton>
  </NSpace>
   <NSpace>
        次数{{tbCount}}<NButton type="error" size="tiny">+</NButton>
  </NSpace>
    <div>
        <img :src="Logo" alt="" />
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '../../store'
import { NButton, NSpace } from 'naive-ui'
import Logo from '../../assets/logo.png'

export default defineComponent({
    components: {
        NButton,
        NSpace
    },
    setup() {
        const router = useRouter()
        const store = useStore()

        const querys = computed(()=> {
            return router.currentRoute.value.query
        })

        const addAge = (num: number) => {
            store.dispatch('Home/goAddAge', {
                multiple: num
            })
        }

        onMounted(()=>{
            console.log(querys.value);
            console.log(store);
            window.ZR = 66666;
        })

        return {
            dbAge: computed(()=> store.getters['Home/doubleAge']),
            tbCount: computed(()=> store.getters['Cart/trebleCount']),
            addAge,
            Logo
        }
    }
})
</script>

<style>

</style>