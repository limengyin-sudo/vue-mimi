<template>
    <div class="cinema_body">
        <ul>
            <li v-for="item in cinemaList" :key="item.id">
                <div>
                    <span>{{item.nm}}</span>
                    <!-- <span class="q"><span class="price">{{item.sellPrice}}</span>元起</span> -->
                </div>
                <div class="address">
                    <div class="addr">{{item.addr}}</div>
                    <div>{{item.distance}}</div>
                </div>
                <div class="card">
                    <div v-for="(num,key) in item.tag" :key="key" v-if="num === 1" :class="key | classCard" >
                        {{key | formatCard}}
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"CiList",
    data(){
        return {
            cinemaList:[]
        }
    },
    mounted(){
        this.axios.get('/api/cinemaList?cityId=10').then(res=>{
            console.log(res.data.data)
            var msg = res.data.msg;
            if(msg === 'ok'){
                this.cinemaList = res.data.data.cinemas;
            }
        })
    },
    filters:{
        formatCard(key){
            var card = [
                { key : 'allowRefund' , value : '改签'},
                { key : 'endorse' , value : '退'},
                { key : 'sell' , value : '折扣卡'},
                { key : 'snack' , value : '小吃'}
            ];
            for(var i = 0; i < card.length; i++){
                if(card[i].key === key){
                    return card[i].value;
                }
            }
            return '';
        },
        classCard(key){
            var card = [
                    { key : 'allowRefund' , value : 'bl'},
                    { key : 'endorse' , value : 'bl'},
                    { key : 'sell' , value : 'or'},
                    { key : 'snack' , value : 'or'}
                ];
            for(var i = 0; i < card.length; i++){
                if(card[i].key === key){
                    return card[i].value;
                }
            }
            return '';
        }
    }
}
</script>

<style lang="less" scoped>
    .cinema_body{
        ul{
            padding: 20px;
            li{
                border-bottom: 1px solid #e6e6e6;
                margin-bottom: 20px;
                div{
                    margin-bottom: 10px;
                }
                .address{
                    font-size: 14px;
                    color: #666;
                    div:nth-of-type(2){
                        float: right;
                    }
                }
                .card{
                    display: flex;
                    div{
                        margin-right: 10px;
                        padding: 4px;
                        height: 15px;
                        line-height: 15px;
                        border-radius: 2px;
                    }
                    .or{
                        color: #f90;
                        border: 1px solid #f90;
                    }
                    .bl{
                        color: skyblue;
                        border: 1px solid skyblue;
                    }
                }
            }
        }
    }
</style>