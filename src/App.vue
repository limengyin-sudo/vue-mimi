<template>
    <div class="app">
        <TabBar></TabBar>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
import TabBar from '@/components/TabBar'
export default {
    components:{
        TabBar
    }
}
</script>

<style lang="less" scoped>
    .app{
        width: 100%;
        height: 100%;
    }
</style>
