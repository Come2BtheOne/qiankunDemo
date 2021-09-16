import { computed, defineComponent, onMounted, reactive, ref, toRefs } from 'vue'
import { NButton, NDivider, NSpace } from 'naive-ui'
import Logo from '../../assets/logo.png'

export default defineComponent({
    components: {
        NSpace
    },
    setup() {
        const money = ref<number>(1200)

        const arr1 = ref<Array<string | number>>([])

        const dbMoney = computed(()=> money.value * 2)

        const changeMoney = () => {
            money.value = money.value * 2
        }

        onMounted(()=>{
            arr1.value = ['信息', '是的是的', '铁观音']
        })

        return () => {
            return (
                <>
                    <div>
                        <div>
                            我的马尼:<span>{money.value}</span>
                        </div>
                        <div>
                            双倍马尼:<span>{dbMoney.value}</span>
                        </div>
                        <NButton onClick={changeMoney} type="info" dashed>马尼x2</NButton>
                    </div>
                    <NDivider dashed></NDivider>
                    <NSpace>
                        {
                            arr1.value.map((item, idx)=> <span>{idx+1}.{item}</span>)
                        }
                    </NSpace>
                    <div>
                        <img src={Logo} style={{height: '100px', width: '100px'}} alt="" />
                    </div>
                </>
            )
        }
    }
})