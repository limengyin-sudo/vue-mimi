<template>
    <div class="city_body">
        <div class="city_list">
            <div class="city_hot">
                <h2>热门城市</h2>
                <ul class="clearfix">
                    <li v-for="item in hotList" :key="item.id">{{item.nm}}</li>
                </ul>
            </div>
            <div class="city_sort">
                <van-index-bar v-for="item in cityList" :key="item.index">
                    <van-index-anchor :index="item.index" />
                    <van-cell :title="itemList.nm" v-for="itemList in item.list" :key="itemList.id" />
                </van-index-bar>
            </div>
        </div>
        <!-- <div class="city_index">
            <ul>
                <li v-for="item in cityList" :key="item.index">{{item.index}}</li>
            </ul>
        </div> -->
    </div>
</template>

<script>
export default {
    name:"City",
    data(){
        return {
            cityList:[],
            hotList:[]
        }
    },
    mounted(){
       this.axios.get('/api/cityList').then((res)=>{
           console.log(res)
           var msg = res.data.msg;
           if(msg === 'ok'){
               var cities = res.data.data.cities;
               //[ { index : 'A' , list : [{ nm :'阿城' , id : 123}]}]
               var { cityList,hotList } = this.formatCityList(cities);
               this.cityList = cityList;
               this.hotList = hotList;
           }
       })
    },
    methods:{
        formatCityList(cities){
            var cityList = [];
            var hotList = [];
            for(var i = 0; i < cities.length; i++){
                if(cities[i].isHot === 1){
                    hotList.push(cities[i]);
                }
            }
            for(var i = 0; i < cities.length; i++){
                var firstLetter = cities[i].py.substring(0,1).toUpperCase();
                if(toCom(firstLetter)){
                    cityList.push({ index : firstLetter , list : [{ nm:cities[i].nm , id:cities[i].id}]});
                }else{
                    for(var j = 0; j < cityList.length; j++){
                        if( cityList[j].index === firstLetter){
                            cityList[j].list.push({ nm:cities[i].nm , id:cities[i].id});
                        }
                    }
                }
            }
            cityList.sort((n1,n2)=>{
                if( n1.index > n2.index){
                    return 1;
                }else if(n1.index < n2.index){
                    return -1;
                }else{
                    return 0;
                }
            });
            function toCom(firstLetter){
                for(var i = 0; i < cityList.length; i++){
                    if(cityList[i].index === firstLetter){
                        return false;
                    }
                }
                return true;
            }
            console.log(cityList);
            console.log(hotList)
            return {
                cityList,
                hotList
            };
        },
        // handleToIndex(index){
        //     var h2 = this.$refs.city_sort.getElementsByTagName('h2');
        //     this.$refs.city_sort.parentNode.scrollTop = h2[index].offsetTop;
        // }
    }
}
</script>

<style lang="less" scoped>
    .city_body{
        width: 100%;
        background-color: #fff;
        .city_hot{
            h2{
                font-size: 16px;
                margin: 16px 16px 0;
                color: #333;
                font-weight: normal;
            }
            .clearfix{
                display: flex;
                flex-wrap: wrap;
                margin-left: 20px;
                li{
                    padding: 4px 10px;
                    border: 1px solid #666;
                    border-radius: 2px;
                    margin-right: 24px;
                    margin-top: 16px;
                    color: #333;
                }
            }
        }
        .city_sort{
            margin-top: 20px;
            color: #323233;
            /deep/.van-index-bar__sidebar{
                top: 54%;
            }
            /deep/.van-index-bar__index{
                font-weight: 10;
                line-height: 16px;
            }
        }
        // .city_index{
        //     ul{
        //         position: fixed;
        //         right: 14px;
        //         top: 260px;
        //         font-size: 12px;
        //         li{
        //             margin-top: 2px;
        //         }
        //     }
        // }
    }
</style>