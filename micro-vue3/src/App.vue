<template>
  <div id="MicroVue3">
    <NConfigProvider :theme="darkTheme">
      <Header />
      <Container />
    </NConfigProvider>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { darkTheme, NConfigProvider } from 'naive-ui'
  import Header from './layout/Header/index.vue'
  import Container from './layout/Container/index.vue'

  export default defineComponent({
    components: {
      Header,
      Container,
      NConfigProvider
    },
    setup() {
        return {
          darkTheme
        }
    }
  })
</script>

<style>
  @import url('./assets/style/reset.scss');
  @import url('./assets/style/common.scss');
</style>
