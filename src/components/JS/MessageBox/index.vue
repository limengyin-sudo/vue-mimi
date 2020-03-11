<template>
    <div class="measageBox">
        <h2>{{ title }}</h2>
        <p>{{ content }}</p>
        <div class="select">
            <div @touchstart="handleCancel">{{ cancel }}</div>
            <div @touchstart="handleOk">{{ ok }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name:"MessageBox"
}
</script>

<style lang="less" scoped>
    .measageBox{
        width: 200px;
        height: 120px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: #fff;
        box-shadow: 3px 3px 3px -2px rgba(0,0,0,.3);
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        h2{
            font-size: 18px;
        }
        h2,p{
            text-align: center;
            line-height: 40px;
            margin: 0;
        }
        .select{
            display: flex;
            position: absolute;
            bottom: 0;
            width: 100%;
            border-top: 1px solid #ccc;
            div{
                flex: 1;
                text-align: center;
                line-height: 30px;
                border-right: 1px solid #ccc;
            }
            div:last-child{
                border: none;
            }
        }
    }
</style>