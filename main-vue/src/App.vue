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
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
</style>