<template>
    <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o" @click="navigateTo(0)">首页</van-tabbar-item>
        <van-tabbar-item icon="orders-o" @click="navigateTo(1)">记录</van-tabbar-item>
        <van-tabbar-item icon="goods-collect-o" @click="navigateTo(2)">收藏</van-tabbar-item>
        <van-tabbar-item icon="user-o" @click="navigateTo(3)">我的</van-tabbar-item>
    </van-tabbar>
</template>
<script>
import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar).use(TabbarItem);
export default {
    name:"Profile",
    created(){
        
    },
    mounted(){
        if(this.$route.path==="/me"){
            this.active=3;
        }else if(this.$route.path==="/index" || this.$route.path==="/"){
            this.active=0;
        }else if(this.$route.path==="/record"){
            this.active=1;
        }else{
            this.active=2;
        }
    },
    data(){
        return{
            active:0,
        }
    },
    methods:{
        navigateTo(val){
            
            switch(val){ 
                case 0 : this.$router.replace("/"); return;
                case 1 : this.$router.replace("/record");return;
                case 2 : this.$router.replace("/collection"); return;
                case 3 : this.$router.replace("/me"); return;
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .van-tabbar{
        height: 1.4rem;
        position: fixed;
        bottom:0px;
    }
</style>
