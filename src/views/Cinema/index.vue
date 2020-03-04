<template>
    <div id="main">
        <Header title="咪咪影院"></Header>
        <div id="content">
            <div class="cinema_menu">
                <router-link class="cinema_switch" tag="div" to="/cinema/allCity">
                    全城 <van-icon name="arrow-down" />
                </router-link>
                <router-link class="brand_switch" tag="div" to="/cinema/brand">
                    品牌 <van-icon name="arrow-down" />
                </router-link>
                <router-link class="feature_switch" tag="div" to="/cinema/feature">
                    特色 <van-icon name="arrow-down" />
                </router-link>
            </div>
        </div>
        <CiList></CiList>
    </div>
</template>

<script>
import Header from '@/components/Header'
import CiList from '@/components/CiList'
export default {
    name:"Cinema",
    components:{
        Header,
        CiList
    }
}
</script>

<style lang="less" scoped>
    #content{
        width: 100%;
        line-height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        .cinema_menu{
            width: 90%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #e6e6e6;
            color: #333;
            .router-link-active{
                color: #eb7070;
            }
        }
    }
</style>