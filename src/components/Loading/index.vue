<template>
    <div class="loader">
        <img src="../../assets/timg.gif" alt="">
    </div>
</template>

<script>
export default {
    name:"Loading"
}
</script>

<style lang="less" scoped>
    .loader{
        width:100%;
        height: 516px;
        position: relative;
        text-align: center;
        // background-color: red;
        img{
            width: 200px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
    }
</style>