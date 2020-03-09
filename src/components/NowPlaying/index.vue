<template>
    <div class="movie_body">
        <ul>
            <li v-for="item in movieList" :key="item.id">
                <div class="pic_show"><img :src="item.img | setWH('128.180')" alt=""></div>
                <div class="info_list">
                    <h2>{{item.nm}}
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
    </div>
</template>

<script>
export default {
    name:'nowPlaying',
    data(){
        return {
            movieList:[]
        }
    },
    mounted(){
        this.axios.get('/api/movieOnInfoList?cityId=10').then(res=>{
            var msg = res.data.msg;
            if(msg === 'ok'){
                console.log(res.data.data.movieList)
                this.movieList = res.data.data.movieList;
            }
        })
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