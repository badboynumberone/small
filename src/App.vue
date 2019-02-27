<template>
  <div id="app">
    <main>
      <!-- 导航栏 -->
            <van-nav-bar
              :title="$route.meta.title"
              :right-text="rightText"
              :left-arrow="$route.meta.isArrow"
              @click-left="onClickLeft"
            />
        <!-- 下拉刷新 -->
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh" :disabled="isPull">
            <!-- 页面显示加载效果 -->

            <transition :name="transitionName">
                <keep-alive :include="keepAlive">
                    <router-view/>
                </keep-alive>
            </transition>
        </van-pull-refresh>  
        <TabBar v-if="$route.meta.isTabbar"></TabBar>
    </main>
  </div>
</template>

<script>
import Vue from 'vue'
import {setStore,getStore,removeStore} from './utils/utils'
import { NavBar,PullRefresh  } from 'vant';
Vue.use(NavBar).use(PullRefresh);
import TabBar from '@/components/tabbar'
export default {
  name: 'App',
  mounted(){ 
    setStore("userName",{name:"dzf",age:16,sex:"female"});
  },
  data(){
    return{
        transitionName:"",//过渡动画
        rightText:"",//上边按钮是否有文字
        isLoading:false,//
        isPull:false,//是否禁用下拉
        excludeTransitions:['Index','Collection','Me','Record'],
        bindKey:[1,2],//除此之外的特效
        keepAlive:['Index']
    }
  },
  computed:{
  },
  methods:{
    onClickLeft(){
      this.$root.$children[0].transitionName="slide-right";
      this.$router.back();
    },
    onRefresh(){
      window.location.reload();
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
      }, 500);
    }
  },
  watch:{
    //控制动画
    '$route' (to,from){
      if(this.excludeTransitions.includes(from.name)){
        if(!this.excludeTransitions.includes(to.name)){
          this.transitionName="slide-left"
        }else{
          this.transitionName=""
        }
      }else{
        if(this.excludeTransitions.includes(to.name)){
          this.transitionName="slide-right"
        }else{
          this.transitionName="slide-left"
        }
      }
    }
  },
  components:{
    TabBar
  }
}
</script>

<style lang="scss" >
    
    // 下拉刷新
    .van-pull-refresh__track{
      position: absolute;
      height: 100%;
      top: 0px;
      left: 0px;
      width: 100%;
    }
    .van-pull-refresh__head{
        top: 0rem;
    }
    body{
      height: 100%;
    }
    #app{
      height: 100%;
      font-size: 0.35rem;
    }
    .slide-left-leave {
      position: absolute;
      top: 0;
    }
    .slide-left-leave-active {
      transition: all 0.3s linear;

      position: absolute;
      top: 0;
    }
    .slide-left-leave-to {
      transform: translateX(-100%);
      position: absolute;
      top: 0;
      opacity: 0;
    }

    .slide-left-enter {
      transform: translateX(100%);
      position: absolute !important;
      width: 100%;
      top: 0;
    }
    .slide-left-enter-active {
      transition: all 0.3s linear;
      position: absolute !important;
      top: 0;
    }
    .slide-left-enter-to {
      transform: translateX(0);
      position: absolute !important;
      top: 0;
    }

    .slide-right-enter {
      transform: translateX(-100%);
      position: absolute !important;
      top: 0;
    }
    .slide-right-enter-active {
      transition: all 0.3s linear;
      position: absolute !important;
      top: 0;
    }
    .slide-right-enter-to {
      transform: translateX(0);
      position: absolute !important;
      top: 0;
    }

    .slide-right-leave {
      transform: translateX(0);
      position: absolute !important;
      top: 0;
    }
    .slide-right-leave-active {
      transition: all 0.3s linear;
      position: absolute !important;
      top: 0;
    }
    .slide-right-leave-to {
      transform: translateX(100%);
      position: absolute !important;
      top: 0;
      opacity: 0;
    }
</style>
