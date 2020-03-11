<template>
    <div id="main">
        <Header title="咪咪电影"></Header>
        <div id="content">
            <div class="movie_menu">
                <router-link class="city_name" tag="div" to="/movie/city">
                    <span>{{$store.state.city.nm}}</span><van-icon name="arrow-down" class="arrow-lower"/>
                </router-link>
                <div class="hot_switch">
                    <router-link class="hot_item" tag="div" to="/movie/nowPlaying">正在热映</router-link >
                    <router-link class="hot_item" tag="div" to="/movie/comingSoon">即将上映</router-link>
                </div>
                <router-link class="search_entry" tag="div" to="/movie/search">
                    <van-icon name="search" size="24" />
                </router-link>
            </div>
            <keep-alive>
                <router-view />
            </keep-alive>
        </div>
    </div>
</template>

<script>

import Header from '@/components/Header';
import { messageBox } from '@/components/JS';

export default {
    name:"Movie",
    components:{
        Header
    },
    mounted(){
        setTimeout(()=>{
            this.axios.get('/api/getLocation').then(res => {
                let msg = res.data.msg;
                if(msg === 'ok'){
                    let nm = res.data.data.nm;
                    let id = res.data.data.id;
                    if(this.$store.state.city.id == id) { return; }
                    messageBox({
                        title: '定位',
                        content: nm,
                        cancel: '取消',
                        ok: '切换定位',
                        handleOk(){
                            window.localStorage.setItem('nowNm',nm);
                            window.localStorage.setItem('nowId',id);              
                            window.location.reload();
                        }
                    })
                }
            })
        },2000)
    }
}
</script>

<style lang="less" scoped>
    #content{
        .movie_menu{
            width: 100%;
            height: 46px;
            border-bottom: 1px solid #e6e6e6;
            display: flex;
            align-items: center;
            justify-content: space-between; 
            .city_name{
                margin-left: 20px;
                height: 100%;
                line-height: 47px;
                color: #333;
            }
            .hot_switch{
                display: flex;
                height: 100%;
                line-height: 46px;
                color: #666;
                .router-link-active{
                    color: #eb7070;
                    border-bottom: 2px solid #eb7070;
                    margin-right: 6px;
                }
                .hot_item{
                    font-size: 16px;
                    width: 80px;
                    text-align: center;
                    margin: 0 12px;
                    font-weight: 700;
                }
            }
            .search_entry{
                display: flex;
                align-items: center;
                margin-right: 20px;
                height: 100%;
                line-height: 46px;
                color: #eb7070;
            }
        }
    }
</style>