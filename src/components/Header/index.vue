<template>
    <div>
        <header id="header">
            <slot></slot><h1 class="title">{{title}}</h1>
        </header>
    </div>
</template>

<script>
export default {
    name:"Header",
    props:{
        title:{
            type:String,
            default:'咪咪电影'
        }
    }
}
</script>

<style lang="less" scoped>
    #header{
        width: 100%;
        height: 50px;
        color: #fff;
        background-color: #eb7070;
        border-bottom: 1px solid #eb7070;
        position: relative;
        .title{
            font-size: 20px;
            text-align: center;
            line-height: 50px;
            font-weight: normal;
            margin: 0;
        }
    }
</style>