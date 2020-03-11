<template>
    <div class="search_body">
        <div class="search_bg">
            <div class="search_input">
                <input type="text" v-model="message">
                <van-icon name="search" size="20" class="van_icon" />
            </div>
        </div>
        <div class="search_content">
            <h3>电影/电视剧/综艺</h3>
            <ul>
                <li v-for="item of moviesList" :key="item.id">
                    <div class="img">
                        <img :src="item.img | setWH('128.180')" alt="">
                    </div>
                    <div class="info">
                        <p class="nm_sc">
                            <span class="nm">{{item.nm}}</span>
                            <span class="sc">{{item.sc}}</span>
                        </p>
                        <p>{{item.enm}}</p>
                        <p>{{item.cat}}</p>
                        <p>{{item.rt}}</p>
                    </div>
                </li>
            </ul> 
        </div>
    </div>
</template>

<script>
export default {
    name:"Search",
    data(){
        return {
            message:'',
            moviesList:[]
        }
    },
    methods:{
        cancelRequest(){
            if(typeof this.source === 'function'){
                this.source('终止请求')
            }
        }
    },
    watch:{
        message(newVal){
            /* 防止多次触发 */
            // clearTimeout()
            // setTimeout()
            var that = this;
            var cityId = this.$store.state.city.id;
            this.cancelRequest();
            this.axios.get('/api/searchList?cityId=' + cityId + '&kw=' + newVal,{
                cancelToken: new this.axios.CancelToken(function(c) {
                    console.log(1);
                    that.source = c;
                })
            }).then((res)=>{
                // console.log(res.data.data.movies)
                var msg = res.data.msg;
                var movies = res.data.data.movies;
                if(msg && movies){
                    this.moviesList = res.data.data.movies.list;
                }
            }).catch((err) => {
                if (this.axios.isCancel(err)) {
                    console.log('Rquest canceled', err.message); //请求如果被取消，这里是返回取消的message
                } else {
                    //handle error
                    console.log(err);
                }
            })    
        }
    }
}
</script>

<style lang="less" scoped>
    .search_body{
        width: 100%;
        // background-color: #fff;
        .search_bg{
            background-color: #eee;
            height: 52px;
            display: flex;
            align-items: center;
            justify-content: center;
            .search_input{
                width: 94%;
                height: 28px;
                position: relative;
                input{
                    width: 92%;
                    height: 28px;
                    background-color: #fff;
                    border-radius: 5px;
                    border: 1px solid #e6e6e6;
                    padding-left: 30px;
                }
                .van-icon{
                    position: absolute;
                    top: 16px;
                    left: 10px;
                    transform: translateY(-50%);
                }
            }
            
        }
        .search_content{
            padding: 0 20px;
            color: #666;
            h3{
                padding-bottom: 14px;
                font-size: 16px;
                border-bottom: 1px solid #e6e6e6;
            }
            li{
                display: flex;
                align-items: center;
                border-bottom: 1px solid #e6e6e6;
                .img{
                    img{
                        width: 80px;
                        height: 116px;
                        margin: 10px 10px 10px 0;
                    } 
                }
                .info{
                    flex: 3;
                    p{
                        margin: 10px 4px;
                        font-size: 14px;
                    }
                    .nm_sc{
                       display: flex;
                       justify-content: space-between;
                       .nm{
                           font-size: 18px;
                           font-weight: 700;
                       }
                       .sc{
                           color: #eb7070;
                           font-size: 16px;
                       }
                    }
                }
            }
            
        }
    }
</style>