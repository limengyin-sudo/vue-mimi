<template>
    <div id="detail-container" class="slide-enter-active">
        <Header id="header" title="影片详情">
            <van-icon name="arrow-left" @touchstart="handleToBack" />
        </Header>
        <Loading v-if="isLoading"/>
        <div v-else class="contentDetail">
            <div class="detail_list">
                <div class="detail_list_bg"></div>
                <div class="detail_list_filter"></div>
                <div class="detail_list_content">
                    <div class="detail_list_img">
                        <img :src="detailMovie.img | setWH('148.208')" alt="">
                    </div>
                    <div class="detail_list_info">
                        <h2>{{detailMovie.nm}}</h2>
                        <p>{{detailMovie.enm}}</p>
                        <p>{{detailMovie.cat}}</p>
                        <p>{{detailMovie.src}}/{{detailMovie.episodeDur}}分钟</p>
                        <p>{{detailMovie.star}}</p>
                        <p>{{detailMovie.pubDesc}}</p>
                    </div>
                </div>
            </div>
            <div class="detail_intro">
                <p>剧情简介：{{detailMovie.dra}}</p>
            </div>
            <div class="detail_player swiper-container" ref="detail_player">
                <ul class="swiper-wrapper">
                    <li id="swiper-slide" v-for="(item,index) in detailMovie.photos" :key="index">
                        <div>
                            <img :src="item | setWH('40.127')" alt="">
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header'
export default {
    name:"detail",
    data(){
        return {
            detailMovie:[],
            isLoading:true
        }
    },
    components:{
        Header
    },
    props:['id'],
    methods:{
        handleToBack(){
            this.$router.back();
        }
    },
    mounted(){
        console.log(this.id);
        this.axios.get('/api/detailmovie?movieId='+this.id).then((res)=>{
            var msg = res.data.msg;
            if(msg === 'ok'){
                this.isLoading = false
                // console.log(res.data.data.detailMovie)
                this.detailMovie = res.data.data.detailMovie;
                this.$nextTick(()=>{
                    new Swiper(this.$refs.detail_player,{
                        slidersPerView:'auto',
                        freeMode:true,
                        freeModeSticky:true
                    })
                })
            }
        })
    }
}
</script>

<style lang="less" scoped>
    #detail-container{
        position: absolute;
        left: 0;
        top: 0;
        z-index: 99;
        width: 100%;
        min-height: 100%;
        background-color: #fff;
        #header{
            position: relative;
            text-align: center;
            /deep/.van-icon{
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                left: 16px;
                font-size: 20px;
            }
        }
        .contentDetail{
            margin-bottom: 0;
            .detail_list{
                position: absolute;
                bottom: 0;
                height: 200px;
                width: 100%;
                position: relative;
                overflow: hidden;
                .detail_list_bg{
                    width: 100%;
                    height: 100%;
                    background: url('../../assets/img.jpg') 0 40%;
                    filter: blur(8px);
                }
                .detail_list_filter{
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    background-color: #40454d;
                    opacity: .55;
                    position: absolute;
                    bottom: 0;
                }
                .detail_list_content{
                    // background-color: red;
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    bottom: 0;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    .detail_list_img{
                        img{
                            width: 100px;
                            margin: 20px;
                        }
                    }
                    .detail_list_info{
                        h2,p{
                            margin: 3px;
                        }
                        h2{
                            font-size: 20px;
                        }
                    }
                }
            }
            .detail_intro{
                padding: 6px 11px;
                p{
                    line-height: 1.6em;
                }
            }
            .detail_player{
                margin: 20px;
                // background-color: pink;
                #swiper-slide{
                    width: 200px;
                    margin-right: 20px;
                    img{
                        width: 100%;
                        margin-bottom: 5px;
                    }
                }
            }
        }
    }
    #detail-container.slide-enter-active{
        animation: 0.5s slideMovie;
    }
    @keyframes slideMovie{
        0%{ transform: translateX(100%);}
        100%{ transform: translateX(0%);}
    }
</style>