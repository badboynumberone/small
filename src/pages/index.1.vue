<template>
    <main>
        <!-- 轮播图 -->
        <div class="swiper">
            <div class="swiper_wrapper" v-if="images.length">
                <van-swipe :autoplay="3000" > 
                    <van-swipe-item v-for="(image, index) in images" :key="index" class="banner_item">
                        <img v-lazy="image" class="fill" />
                    </van-swipe-item>
                </van-swipe>
            </div>
            <img src="" alt="" hidden v-else>
        </div>
        <!-- 菜单栏 -->
        <div class="main_swiper">
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
        <router-link to="/food">hello,boyfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasffff</router-link>
    </main>
</template>
<script>
import Vue from 'vue'
import { Swipe, SwipeItem,Toast } from 'vant';
import {reqFoods} from '@/utils/getData';
Vue.use(Swipe).use(SwipeItem).use(Toast);
export default {
    name:"Index",
    data(){
        return{
            geohash:"114，31", 
            images: [
            ],
            menuList:[]
        }
    },
    async created(){
        const toast = Toast.loading({
            duration: 0,       // 持续展示 toast
            forbidClick: true, // 禁用背景点击
            loadingType: 'spinner',
            message: '加载中...'
            });
        let foods = await reqFoods();
        if(foods.code===0){
            this.menuList =foods.foods_type;
            this.images =  foods.banner_images;
        }
        Toast.clear();
    },
    activated(){

    },
    methods:{
        
    }
}
</script>
<style lang="scss" scoped>
    @import '@/../static/scss/mixin.scss';
    
    .swiper{
        overflow: hidden;
        .banner_item{
            height: 100%;
        }
        .van-swipe-item{
            background: #fff;
        }
    }
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
</style>
