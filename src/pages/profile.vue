<template>
    <main>
        <!-- 个人信息 -->
        <section class="introduce">
            <div class="introduce_top" @click="navigateTo1('/login')">
                <div class="person_header">
                    <img class="fill" src="" alt="">
                </div>
                <p>点击注册/登录</p>
                <van-icon name="arrow " />
            </div>
            <div class="introduce_bottom">
                <div class="account">
                    <p class="money">0</p>
                    <p class="font_account">账户余额</p>
                </div>
                <div class="my_point">
                    <p class="point">0</p>
                    <p class="font_point">我的积分(分)</p>
                </div>
            </div>
        </section>
        <section class="profile_list">
           <div class="profile_cell">
               <div class="profile_wrapper">
                   <div class="get_point" @click="slideDown()">
                       <div class="get_point_wrapper">
                           <van-icon name="clock " />
                            <span>如何获取积分</span>
                            <van-icon name="arrow " />
                       </div>
                    </div>
                    <div class="hidden_point" :class="{'active':getPointActive}">
                        <div class="hidden_point_wrapper">
                            <span>绑定积分 +10积分</span>
                            <van-tag round type="danger">去绑定</van-tag>
                        </div>
                    </div>
               </div>
           </div>
           <div class="profile_cell" @click="navigateTo2()">
               <div class="profile_wrapper">
                   <div class="get_point">
                       <div class="get_point_wrapper">
                           <van-icon name="bill " />
                            <span>积分消费记录</span>
                            <van-icon name="arrow " />
                       </div>
                    </div>
               </div>
           </div>
           <div class="profile_cell">
               <div class="profile_wrapper">
                   <div class="get_point">
                       <div class="get_point_wrapper">
                        <van-icon name="coupon " />
                        <span>购房抵用券</span>
                        <van-icon name="arrow " />
                        </div>
                    </div>
               </div>
           </div>
           <div class="profile_cell">
               <div class="profile_wrapper">
                   <div class="get_point">
                       <div class="get_point_wrapper">
                        <van-icon name="manager " />
                        <span>关于我们</span>
                        <van-icon name="arrow " />
                        </div>
                    </div>
               </div>
           </div>
           <div class="profile_cell">
               <div class="profile_wrapper">
                   <div class="get_point">
                       <div class="get_point_wrapper">
                        <van-icon name="chat " />
                        <span>意见反馈</span>
                        <van-icon name="arrow " />
                        </div>
                    </div>
               </div>
           </div>
           <div class="profile_cell">
               <div class="profile_wrapper">
                   <div class="get_point">
                       <div class="get_point_wrapper">
                        <van-icon name="lock " />
                        <span>修改密码</span>
                        <van-icon name="arrow " />
                        </div>
                    </div>
               </div>
           </div>
           <div class="profile_cell">
               <div class="profile_wrapper" style="flex-flow:cloumn nowrap">
                   <p>版本:<br>联系邮箱:</p>
               </div>
           </div>
           
        </section>
    </main>
</template>
<script>
import Vue from 'Vue';
import {mapState} from 'Vuex';
import { NavBar,Icon,Tag,Dialog} from 'vant';
Vue.use(NavBar).use(Icon).use(Tag).use(Dialog);
import {checkLoginState} from '@/utils/utils'
export default {
    name:"Profile",
    data(){
        return{
            activeNames: '1',
            getPointActive:false
            
        }
    },
    computed:{
    },
    mounted(){
        console.log(this.$route.meta.isTabbar)
    },
    methods:{
        navigateTo1(val){
            
            this.$router.push({name:"Login",params:{id:"10"}});
        },
        navigateTo2(){
            checkLoginState();
            // this.$router.push({path:val});
        },
        slideDown(){
            this.getPointActive = !this.getPointActive;
        },
        
    }
}
</script>
<style lang="scss" scoped>
    @import '@/../static/scss/mixin.scss';
    .introduce{
        @include wh(90%,250px);
        margin: 10px auto;
        padding: 20px;
        background: #fff;
        box-shadow:0px 0px 1.33333vw 1.33333vw rgba(0, 0, 0, 0.04);
        .introduce_top{
            display: flex;
            height: 50%;
            align-items: center;
            position: relative;
            .person_header{
                width: 80px;
                height: 80px;
                overflow: hidden;
                @include borderRadius(50%);
                background: #ccc;
                margin-right: 10px;
            }
            p{
                font-size: 20px;
            }
            .van-icon{
                position: absolute;
                right: 0px;
                font-size: 30px;
            }
        }
        .introduce_bottom{
            display: flex;
            height: 50%;
            .account,.my_point{
                height: 100%;
                flex:1;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-flow: column nowrap;
                font-size: 20px;
                p{
                    margin-bottom: 10px;
                }
                .font_point,.font_account{
                    @include sc(16px,#ccc);
                }
            }
        }
    }
    .profile_list{
        width: 100%;
        background: #f8f8f8;
        .profile_cell{
            width: 100%;
            border-bottom: 1px solid #F8F8F8;
            background: #fff;
        }
        .profile_cell:last-child .profile_wrapper{
            justify-content: center;
            p{
                margin-left: -0.8108rem;
                color:#ccc;
                text-align: center;
            }
        }
        .profile_wrapper{
            
            background: #fff;
            .get_point{
                width: 100%;
                .get_point_wrapper{
                    height: 1.2865rem;
                    width: 90%;
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    position: relative;
                }
            }
            .hidden_point{
                background: #f8f8f8;
                .hidden_point_wrapper{
                    background: #f8f8f8;
                    padding: 0 0.5rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 90%;
                    margin: 0 auto;
                    background-origin: border-box;
                    height: 0px;
                    overflow: hidden;
                    transition: all 0.3s;
                }
            }
            .active{
                .hidden_point_wrapper{
                    height: 60px;
                }
            } 
            i{
                @include sc(0.5405rem,#ccc);
                display: inline-block;
                vertical-align: middle;
                margin-right: 0.2703rem;
            }
            span{
                display: inline-block;
                vertical-align: middle;
                font-size: 0.37rem;
            }
            i:last-child{
                position: absolute;
                right: 0px;
                @include ct;
            }
        }
    }
</style>
