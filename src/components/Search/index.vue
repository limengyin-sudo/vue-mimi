<template>
    <div class="search_body">
        <div class="search_bg">
            <div class="search_input">
                <input type="text">
                <van-icon name="search" size="20" class="van_icon" />
            </div>
        </div>
        <div class="search_content">
            <h3>电影/电视剧/综艺</h3>
        </div>
    </div>
</template>

<script>
export default {
    name:"Search"
}
</script>

<style lang="less" scoped>
    .search_body{
        width: 100%;
        // background-color: #fff;
        .search_bg{
            background-color: #eee;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            .search_input{
                width: 92%;
                height: 26px;
                position: relative;
                input{
                    width: 100%;
                    height: 26px;
                    background-color: #fff;
                    border-radius: 5px;
                    border: 1px solid #e6e6e6;
                    padding: 0;
                }
                .van-icon{
                    position: absolute;
                    top: 16px;
                    left: 10px;
                    transform: translateY(-50%);
                }
            }
            
        }
    }
</style>