<template>
    <div class="home-page">
        <el-row class="tac">
            <el-col :span="3">
                <el-menu
                    class="el-menu-vertical-demo"
                    :default-active="activeRoute"
                    @select="handleSelect"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                >
                    <el-menu-item index="Main">
                        <i class="el-icon-ship"></i>
                        <span>Vue主应用</span>
                    </el-menu-item>
                    <el-menu-item index="Vue">
                        <i class="el-icon-basketball"></i>
                        <span slot="title">Vue子应用</span>
                    </el-menu-item>
                    <el-menu-item index="React">
                        <i class="el-icon-soccer"></i>
                        <span slot="title">React子应用</span>
                    </el-menu-item>
                    <el-menu-item index="Vue3">
                        <i class="el-icon-basketball"></i>
                        <span slot="title">Vue3(vite+ts)</span>
                    </el-menu-item>
                    <el-menu-item index="Purehtml">
                        <i class="el-icon-football"></i>
                        <span slot="title">纯HTML</span>
                    </el-menu-item>
                    <el-menu-item index="Umi">
                        <i class="el-icon-soccer"></i>
                        <span slot="title">Umi子应用</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="21">
                <router-view id="MainAppArea" v-if="$route.name === 'Main'" />

                <div else id="MicroAppArea"></div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import start from '@/micro'
import { startOption } from "@/micro/config.js";
export default {
    computed: {
        activeRoute() {
            return this.$route.path.split('/')[1]
        }
    },
    mounted() {
        console.log(this.$route);
        if (!window.qiankunStarted) {
            window.qiankunStarted = true;
            start(startOption);
        }
    },
    methods: {
        handleSelect(index) {
            this.$router.push("/" + index)
        }
    }
}
</script>

<style lang="less">
@import url("../assets/styles/reset.less");
.home-page {
    height: 100vh;
    overflow: hidden;
    .tac {
        height: 100%;
    }
    .el-menu {
        border-right: 0;
    }
    .el-col,.el-menu {
        height: 100%;
    }
}

#MainAppArea, #MicroAppArea {
    height: 100%;
    overflow-y: auto;
}
</style>