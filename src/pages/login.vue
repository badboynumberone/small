<template>
    <main>
        <div class="login_box">
            <div class="login_wrapper">
                <h2>{{loginWays?'短信验证码登录':'账号密码登录'}}</h2>
                <form action="" @submit.prevent="login()">
                    <div class="code_login" v-show="loginWays">
                        
                        <div class="phone_wrapper">
                            <van-icon name="phone-o" />
                            <input class="fill" type="text" v-model="phone"  placeholder="请输入手机号">
                        </div>
                        <div class="code_wrapper">
                            <van-icon name="certificate" />
                            <input class="fill" type="text" placeholder="请输入验证码" maxlength="6" v-model="code">
                            <span class="getcode" ref="code" @click="getCode()" :class="{'code_active':computeTime}">{{computeTime?`获取验证码(${computeTime})s`:"点击获取验证码"}}</span>
                        </div>
                    </div>
                    <div class="password_login" v-show="!loginWays">
                        
                        <div class="phone_wrapper">
                            <van-icon name="contact" />
                            <input class="fill" type="text" placeholder="请输入手机号" v-model="phone">
                        </div>
                        <div class="code_wrapper">
                            <van-icon name="passed" />
                            <input class="fill" type="password" placeholder="请输入密码" v-model="password">
                        </div>
                    </div>
                    <div class="submir_button" >
                        <input  type="submit" value="登录">
                    </div>
                    <span class="change_login_btn" @click="changeWays()">{{loginWays?'账号密码登录':'短信验证码登录'}}</span>
                    <span class="register_btn">注册淘房居</span>
                </form> 
            </div>
            
        </div>
    </main>  
</template>
<script>
import Vue from 'Vue'
import { NavBar,Dialog } from 'vant';
import { setInterval, clearInterval } from 'timers';
Vue.use(NavBar).use(Dialog);
export default {
    name:"Login",
    props:['id'],
    data(){
        return{
            loginWays:true,//登录方式
            phone:"",//手机号码
            computeTime:0,//计时器
            code:"",
            password:""
        }
    },
    mounted(){
        console.log(this.id)
    },
    methods:{
        
        //改变登录方式
        changeWays(){
            this.loginWays = ! this.loginWays;
        },
        //是否是手机号码
        isPhone(val){
            if(/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(val)){
                return true;
            }
            return false;
        },
        //点击获取验证码
        getCode(){
            let timeId=null;
            let self =this;
            if(!this.isPhone(this.phone)){
                Dialog.alert({
                    title: '标题',
                    message: '手机号输入错误，请重新输入'
                    }).then(() => {
                    // on close
                });
                return;
            }
            if(!this.computeTime){
                this.computeTime=60;
                timeId = setInterval(function(){
                    self.computeTime--;
                    if(self.computeTime<=0){
                        self.computeTime=0;
                        clearInterval(timeId)
                    }
                },1000);
                //发送请求
            }
        },
        
        login(){
            if(this.loginWays){
                if(!this.isPhone(this.phone)){
                    Dialog.alert({
                        title: '标题',
                        message: '手机号输入错误，请重新输入'
                        }).then(() => {
                        // on close
                    });
                    return;
                }
                console.log(this.code)
                if(this.code.length<6){
                    Dialog.alert({
                        title: '标题',
                        message: '验证码不足6位，请重新输入'
                        }).then(() => {
                        // on close
                    });
                     return;
                }

                // 发送请求
            }else{
                if(!this.isPhone(this.phone)){
                    Dialog.alert({
                        title: '标题',
                        message: '手机号输入错误，请重新输入'
                        }).then(() => {
                        // on close
                    });
                    return;
                }
                if(this.password.length<6){
                    Dialog.alert({
                        title: '标题',
                        message: '密码不足6位，请重新输入'
                        }).then(() => {
                        // on close
                    });
                     return;
                }

                // 发送请求
            }
            
        }
    },
    watch:{
        phone:function(val){
            if(this.isPhone(val)){
                this.$refs.code.style.color="#000";
            }else{
                this.$refs.code.style.color="#666";
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '@/../static/scss/mixin.scss';
    .login_box{
        font-size: 0.3784rem;
        width: 90%;
        margin: 0 auto;
        .login_wrapper{
            >h2{
                @include sc(40px,#000);
                padding: 20px 0;
            }
                input{
                    text-indent:60px;
                    line-height: 70px;
                    width: 100%;
                }
                input[type="submit"]{
                    text-indent: 0px;
                    background: #88C9FD;
                    @include sc(22px,#fff);
                    margin-top: 10px;
                    @include borderRadius(5px);
                }
                .phone_wrapper,.code_wrapper{
                    position: relative;
                    width: 100%;
                    height: 70px;
                    border:1px solid #ccc;
                    background: #fff;
                    overflow: hidden;
                    @include borderRadius(5px);
                    margin-top: 20px;
                    
                }
                .van-icon{
                    @include ct;
                    left: 20px;
                }
                .getcode{
                    position: absolute;
                    @include ct;
                    right: 20px;
                    color: #666;
                }
                .code_active{
                    color:#666 !important;
                }
                .change_login_btn,.register_btn{
                    line-height: 50px;
                    color: #666;
                }
                .register_btn{
                    float: right;
                    
                }
        }
        
    }
</style>
