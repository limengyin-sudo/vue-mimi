<template>
    <div id="main">
        <Header title="我的"></Header>
        <div id="content">
            <div class="login_body">
                <div>
                    <input type="text" class="login_text" placeholder="账户名/手机号/Email">
                </div>
                <div>
                    <input type="password" class="login_text" placeholder="请输入密码">
                </div>
                <div class="login_btn">
                    <input type="submit" value="登录">
                </div>
                <div class="login_link">
                    <a href="">立即注册</a>
                    <a href="">找回密码</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header'
export default {
    name:"Mine",
    components:{
        Header
    }
}
</script>

<style lang="less" scoped>
    #content{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .login_body{
            width: 90%;
            div{
                input{
                    width: 97%;
                    height: 36px;
                    border-radius: 3px;
                    border: none;
                    border-bottom: 1px solid #e6e6e6;
                    margin-top: 18px;
                    padding-left: 10px;
                }
            }
            .login_btn{
                input{
                    width: 100%;
                    height: 40px;
                    color: #333;
                    margin-top: 24px;
                }
            }
            .login_link{
                width: 100%;
                display: flex;
                justify-content: space-between;
                margin-top: 27px;
                a{
                    color: #666;
                    padding: 0 6px;
                }
            }
        }
    }
</style>