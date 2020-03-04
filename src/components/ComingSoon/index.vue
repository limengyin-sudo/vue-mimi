<template>
    <div class="movie_body">
        <ul>
            <li>
                <div class="pic_show"><img src="" alt=""></div>
                <div class="info_list">
                    <h2>亲爱的，新年好</h2>
                    <p>观众评分<span class="grade">9.2</span></p>
                    <p>主演：白百何，魏大勋，张子枫</p>
                    <p>今天65家影院放映648场</p>
                </div>
                <div class="btn_mall">
                    预售
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'comingSoon'
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
                    background-color: #eb7070;
                    img{
                        width: 100%
                    }
                }
                .info_list{
                    margin-left: 10px;
                    flex: 1;
                    position: relative;
                    h2{
                        font-size: 18px;
                        line-height: 24px;
                        width: 150px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
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
                    background-color: skyblue;
                    color: #fff;
                    border-radius: 4px;
                }
            }
        }
    }
</style>