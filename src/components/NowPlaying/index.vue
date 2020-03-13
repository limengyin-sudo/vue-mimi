<template>
    <div class="movie_body" ref="movie_body">
        <loading v-if="isLoading" />
        <Scroller v-else :handleToScroll="handleToScroll" :handleToTouchEnd="handleToTouchEnd">
            <ul>
                <li class="pullDown">{{ pullDownMsg }}</li>
                <li v-for="item in movieList" :key="item.id" >
                    <div class="pic_show" @tap="handleToDetail(item.id)"><img :src="item.img | setWH('128.180')" alt=""></div>
                    <div class="info_list">
                        <h2 @tap="handleToDetail(item.id)">{{item.nm}}
                            <!-- <img v-if="item.version" src="@/assets/maxs.png" alt="" /> -->
                        </h2>
                        <p>观众评分<span class="grade">{{item.sc}}</span></p>
                        <p>主演：{{item.star}}</p>
                        <p>上映时间：{{item.rt}}</p>
                    </div>
                    <div class="btn_mall">
                        购票
                    </div>
                </li>
            </ul>
        </Scroller>
    </div>
</template>

<script>

export default {
    name:'nowPlaying',
    data(){
        return {
            movieList:[],
            pullDownMsg:'',
            isLoading:true,
            prevCityId: -1
        }
    },
    activated(){
        var cityId = this.$store.state.city.id;
        // console.log(cityId)
        if(this.prevCityId === cityId){ return;}
        this.isLoading = true;
        this.axios.get('/api/movieOnInfoList?cityId=' + cityId).then(res=>{
            var msg = res.data.msg;
            if(msg === 'ok'){
                // console.log(res.data.data.movieList)
                this.isLoading = false
                this.movieList = res.data.data.movieList;
                this.prevCityId = cityId;
            }
        })
    },
    methods:{
        handleToDetail(id){
            console.log(id)
            this.$router.push('/movie/detail/1/'+id);
        },
        handleToScroll(pos){
            if(pos.y > 30){
                this.pullDownMsg = '正在更新中...';
            }
        },
        handleToTouchEnd(pos){
            if(pos.y > 30){
                this.axios.get('/api/movieOnInfoList?cityId=11').then((res)=>{
                    var msg = res.data.msg;
                    if( msg === 'ok'){
                        this.pullDownMsg = '更新成功';
                        setTimeout(()=>{
                            this.movieList = res.data.data.movieList;
                            this.pullDownMsg = '';
                        },1000)
                    }
                })
            }
        }
    }
}
</script>

<style lang="less" scoped>
    .movie_body{
        *{
            padding: 0;
            margin: 0;
        }
        ul{
            margin: 0 12px;
            .pullDown{
                margin: 0;
                padding: 0;
                border: none;
            }
            li{
                margin-top: 12px;
                display: flex;
                align-items: center;
                border-bottom: 1px solid #e6e6e6;
                padding-bottom: 10px;
                .pic_show{
                    width: 64px;
                    height: 90px;
                    // background-color: #eb7070;
                    img{
                        width: 100%;
                    }
                }
                .info_list{
                    margin-left: 10px;
                    flex: 1;
                    position: relative;
                    h2{
                        font-size: 16px;
                        line-height: 24px;
                        // width: 150px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        display: flex;
                        align-items: center;
                        // justify-content: space-around;
                        img{
                            width: 30px;
                        }
                    }
                    p{
                        font-size: 12px;
                        color: #666;
                        line-height: 22px;
                        width: 200px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        .grade{
                            font-weight: 700;
                            color: #eb7070;
                            font-size: 16px;
                        }
                    }

                }
                .btn_mall{
                    width: 47px;
                    height: 26px;
                    font-size: 14px;
                    line-height: 26px;
                    text-align: center;
                    background-color: #eb7070;
                    color: #fff;
                    border-radius: 4px;
                }
            }
        }
    }
</style>