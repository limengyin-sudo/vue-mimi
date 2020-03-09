<template>
    <div class="tabBar-container">
        <ul>
            <router-link to="/movie" tag="li">
                <i class="iconfont icon-gongxiang-"></i>
                <p>电影</p>
            </router-link>
            <router-link to="/cinema" tag="li">
                <i class="iconfont icon-cinema2"></i>
                <p>影院</p>
            </router-link>
            <router-link to="/mine" tag="li">
                <i class="iconfont icon-wode"></i>
                <p>我的</p>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:"TabBar"
}
</script>

<style lang="less" scoped>
    .active{
        color: #eb7070;
    }
    .tabBar-container{
        width: 100%;
        height: 50px;
        position: fixed;
        bottom: 0;
        z-index: 100;
        background-color: #fff;
        border-top: 2px solid #ddd;
        ul{
            display: flex;
            justify-content: space-around;
            align-items: center;
            text-align: center;
            li{
                padding-top: 3px;
                flex: 1;
                cursor: pointer;
                color: #333;
                .iconfont{
                    font-size: 20px;
                }
                p{
                    margin-top: 3px;
                    font-size: 16px;
                    
                }
            }
            .router-link-active{
                color: #eb7070;
            }
        }
    }
</style>