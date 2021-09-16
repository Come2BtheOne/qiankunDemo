<template>
    <div id="main-vue">
        <Layout />
    </div>
</template>

<script>
import Layout from './layout'
export default {
    name: 'App',
    components: {
        Layout
    }
}
</script>

<style lang="less">
@import url("./assets/styles/reset.less");
</style>