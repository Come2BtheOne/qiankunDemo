<template>
  <div>
    <a>Vue子应用</a>
    <img :src="require('../assets/logo.png')"/>
    <el-button @click="dialogVisible = true">弹窗</el-button>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      @closed="onClosed"
    >
      <span>子应用vue的弹窗</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {onStateChangeFn, setStateFn} from '@/micro/globalState.js'

export default {
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    onClosed() {
      window.__POWERED_BY_QIANKUN__ && setStateFn({
        VueMicroDisable: false
      })
    }
  },
  mounted() {
    window.__POWERED_BY_QIANKUN__ && onStateChangeFn((value, prev)=>{
      console.log(111,value, prev)
      this.dialogVisible = value.VueMicroDisable
    })
  }
}
</script>

<style>

</style>