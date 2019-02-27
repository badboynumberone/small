<template>
    <main @scroll="handleScroll()">
        <!-- 轮播图 -->
        <div class="swiper" v-if="images.length">
            <div class="swiper_wrapper" v-if="images.length">
                <van-swipe :autoplay="3000" > 
                    <van-swipe-item v-for="(image, index) in images" :key="index" class="banner_item">
                        <img :src="image" class="fill" />
                    </van-swipe-item>
                </van-swipe>
            </div>
            <img src="" alt="" hidden v-else>
        </div>
        <!-- 菜单栏 -->
        <div class="main_swiper" v-if="menuList.length">
            <van-swipe :autoplay="0">
                <van-swipe-item v-for="(list, index) in menuList" :key="index">
                    <div class="main_swiper_wrapper">
                        <router-link :to="{path:'/food',query:{geohash,food_title:list_item.imgTitle,food_id:list_item.imgId}}" class="link_food" v-for="(list_item,id) in list" :key="id">
                            <figure>
                                <img v-lazy="list_item.imgUrl">
                                <figcaption>{{list_item.imgTitle}}</figcaption>
                            </figure>
                        </router-link>
                    </div> 
                </van-swipe-item>
            </van-swipe>
        </div>
        <!-- 附近商家 -->
        <div class="near_shop" v-if="businessInfo.length" >
            <div class="near_shop_title">
               <van-icon name="cart-circle-o" />
               <span>附近商家</span>
            </div> 
            <div class="shop_list">
                <div class="shop_list_items" v-for="(item,index) in businessInfo" :key="index" @click="navigateTo(item.business_id)">
                    <div class="shop_captcha">
                        <img class="fill" v-lazy="item.business_img_url" alt="">
                    </div>
                    <div class="shop_info">
                        <p class="shop_line"><span class="shop_tag">品牌</span><span class="shop_name">{{item.business_name}}</span></p>
                        <p class="shop_line"><span><van-rate v-model="item.business_rating" /></span> <span class="shop_rating">{{item.business_rating}}</span><span class="month_sale">月销售{{item.month_sale_num}}单</span></p>
                        <p class="shop_line"><span class="transport_needing">￥{{item.start_price}} 起送 / 配送费约 ￥{{item.transport_price}}</span></p>
                    </div>
                    <div class="shop_transport">
                        <p class="transport_info">
                            <span v-show="(item.business_tag).includes(1)">保</span>
                            <span v-show="(item.business_tag).includes(2)">准</span>
                            <span v-show="(item.business_tag).includes(3)">票</span>
                        </p>
                        <p class="transport_business">
                            <span class="transport_business_name">{{item.transport_name}}</span>
                            <span class="transport_business_tag">准时达</span>
                        </p>
                        <p class="transport_long">
                            <span class="transport_distance">{{item.distance}}公里/</span><span class="transport_time">{{item.distance | getTransportTime }}</span>        
                        </p>
                    </div>  
                </div>
            </div>
        </div>
    </main>
</template>
<script>
import Vue from 'vue'
import { Swipe, SwipeItem,Toast } from 'vant';
import {reqFoods} from '@/utils/getData';
import {getCityFromGPS} from '@/utils/utils';
import {showLoading,clearToast} from '@/utils/show';
Vue.use(Swipe).use(SwipeItem).use(Toast);
console.log(this.$show)
export default {
    name:"Index",
    data(){
        return{
            latitude:'',
            longtitude:'',
            geohash:"114，31", 
            images: [
            ],//轮播图信息
            menuList:[],//食物信息
            businessInfo:[],
            scloll:true,
            city:"",
            num: [1,2,3,4,5,6,7,8,9,10]//商家信息
        }
    },
    filters:{
        getTransportTime(val){
            let baseTime = val*3;
            let totalTime=parseInt(baseTime+10);
            if(totalTime>=60){
                let hour = Math.ceil(totalTime/60);
                let minutes = totalTime%60;
                return `${hour}小时${minutes}分钟`;
            }
            return `${totalTime}分钟`;
        }
    },
    computed:{
    },
    created(){
        this.getData();
    },
    methods:{
        //获取当前地理位置经纬度
        //发送经纬度给后台
        //后台返回相应的轮播图和距离较近的商家
        //一旦城市发生改变
        //刷新页面重新获取数据
        //下拉刷新
        handleScroll(){
            if(this.$el.scrollTop+this.$el.offsetHeight>this.$el.scrollHeight){
                this.loadmore();
                this.scloll=true;
                this.list +=1;
            }else{
                this.scloll=false;
            }
        },
        loadmore() {
            
            setTimeout(() => {
                for(var i = 0; i <10; i++) {
                this.num.push(i);
                }
            }, 2000)
        },
        navigateTo(val){
            this.$router.push({path:`/shops/${val}`});
        },
        async getData(){
            this.$show.showLoading();
            let location = await getCityFromGPS();
            if(!location.street){
                 this.$show.showNotice('定位失败');
            }
            this.init();
            let foods = await reqFoods();
            if(foods.code===0){
                this.menuList =foods.foods_type;
                this.images =  foods.banner_images;
                this.businessInfo = foods.business_info;
            }
            this.$show.clearToast();
        },
        // async refresh(){
        //     //重新发送位置和城市从而获得对应的轮播图，商家详情
        //     let foods = await reqFoods();
        // },
        init(){
            this.latitude = localStorage.getItem('latitude') || '31.771397'
            this.longtitude = localStorage.getItem('longtitude')|| '119.981861'
            this.city = localStorage.getItem("city")
        }
    },
    activated() {
        if(this.city !==localStorage.getItem('city') ){
            this.city = localStorage.getItem('city');
            // this.refresh();
        }
    },
}
</script>
<style lang="scss" scoped>
    @import '@/../static/scss/mixin.scss';
    //轮播图
    .swiper{
        overflow: hidden;
        .banner_item{
            height: 100%;
        }
        .van-swipe-item{
            background: #fff;
        }
    }
    //中间食品菜单栏
    .main_swiper_wrapper{
        display: flex;
        flex-flow: row wrap;
        background: #fff;
        height: 5rem;
        
        .link_food{
            text-align: center;
            width: 25%;
            padding: 0.2rem 0;
            figure{
                img{
                    @include wh(60px,60px);
                }
                figcaption{
                    margin-top: 5px;
                    @include sc(14px,#666);
                }
            }
            
        }
        
    }
    //商家列表
    .near_shop{
        .near_shop_title{
            display: flex;
            align-items: center;
            padding: 0.2rem 0.2rem;
            .van-icon{
                display:inline-block;
                vertical-align: middle;
                font-size: 30px;
            }
            span{
                
                margin-left: 5px;
            }
        }
        .shop_list_items{
            display: flex;
            justify-content: space-between;
            padding: 20px 10px;
            border-bottom: 1px solid #f9f9f9;
            .shop_captcha{
                width: 100px;
                margin-right: 10px;
            }
            .shop_info{
                height: 100%;
                flex: 1;
                .shop_line{
                    white-space: nowrap;
                    margin-bottom: 15px;
                    &:last-child{
                        margin-bottom: 0px;
                    }
                    .shop_tag{
                        display: inline-block;
                        padding: 0px 4px;
                        background: #ffd930;
                        font-size: 14px;
                        @include borderRadius(5px);
                        margin-right: 10px;
                    }
                    .shop_name{
                        font-weight: bold;
                    }
                    .shop_rating{
                        color: #ff6000;
                        margin-right: 10px;
                    }
                    .month_sale{
                        @include sc(16px,#666);
                        
                    }
                    .transport_needing{
                        @include sc(16px,#666);
                    }
                }
                
                
            }
            .shop_transport{
                text-align: right;
                p:not(:last-child){
                    white-space: nowrap;
                    margin-bottom: 15px;
                }
                .transport_info{
                    span{
                        @include sc(12px,#666);
                        @include borderRadius(5px);
                        display: inline-block;
                        border: 1px solid #f1f1f1;
                        padding: 0 2px;
                    }
                }
                .transport_business{
                    .transport_business_name{
                        @include sc(1px,#fff);
                        background: #3190e8;
                        border: 1px solid #3190e8;
                        @include borderRadius(3px);
                        padding: 0 2px;
                    }
                    .transport_business_tag{
                        @include sc(1px,#3190e8);
                        border: 1px solid #3190e8;
                        @include borderRadius(3px);
                        padding: 0 2px;
                    }
                }
                .transport_long{
                    .transport_distance,.transport_time{
                        @include sc(16px,#666);
                        white-space: nowrap;
                    }
                    .transport_time{
                        color: #3190e8;
                    }
                }
            }
            
        }
    }
</style>
