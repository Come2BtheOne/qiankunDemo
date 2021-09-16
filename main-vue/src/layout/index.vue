<template>
    <div class="home-page">
        <div class="left-wrap">
            <el-menu
                class="el-menu-vertical-demo"
                :collapse="isCollapse"
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
            <div class="collapse-btn" @click="isCollapse = !isCollapse">
                <i v-if="isCollapse" class="el-icon-d-arrow-right"></i>
                <i v-else class="el-icon-d-arrow-left"></i>
            </div>
        </div>
        <div class="right-wrap">
            <router-view id="MainAppArea" v-if="$route.name === 'Main'" />

            <div else id="MicroAppArea"></div>
        </div>
    </div>
</template>

<script>
import start from '@/micro'
import { startOption } from "@/micro/config.js";
export default {
    data() {
        return {
            isCollapse: false
        }
    },
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
.home-page {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    display: flex;
    .left-wrap {
        height: 100%;
        // width: 180px;
        position: relative;
        .collapse-btn {
            position: absolute;
            right: 0;
            bottom: 50%;
            cursor: pointer;
            color: #ffd04b;
            font-size: 24px;
        }
    }
    .right-wrap {
        height: 100%;
        min-width: calc(100% - 64px);
    }
    .el-menu {
        border-right: 0;
        height: 100%;
    }
}

#MainAppArea, #MicroAppArea {
    height: 100%;
    overflow-y: auto;
}
</style>