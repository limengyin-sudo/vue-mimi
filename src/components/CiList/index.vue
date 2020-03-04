<template>
    <div class="cinema_body">
        <ul>
            <li>
                <div>
                    <span>大地影院(****店)</span>
                    <span class="q"><span class="price">22.9</span>元起</span>
                </div>
                <div class="address">
                    <span>******3层</span>
                    <span>100.5km</span>
                </div>
                <div class="card">
                    <div class="or">小吃</div>
                    <div class="bl">折扣卡</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"CiList"
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
                    .q{
                        font-size: 10px;
                        color: #333;
                        .price{
                            font-size: 20px;
                            color: #eb7070;
                            margin-left: 4px;
                        }
                    }
                }
                .address{
                    font-size: 14px;
                    color: #666;
                    span:nth-of-type(2){
                        float: right;
                    }
                }
                .card{
                    display: flex;
                    div{
                        padding: 0 3px;
                        height: 15px;
                        line-height: 15px;
                        border-radius: 2px;
                    }
                    .or{
                        color: #f90;
                        border: 1px solid #f90;
                        margin-right: 10px;
                    }
                    .bl{
                        color: #589daf;
                        border: 1px solid #589daf;
                    }
                }
            }
        }
    }
</style>