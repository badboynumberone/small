import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Record from '@/pages/record'
import Collection from '@/pages/collection'
import Login from '@/pages/login'
import Me from '@/pages/Profile'
import Food from '@/pages/food'
import Shops from '@/pages/shops'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta:{
        isTabbar:true,
        title:"首页",
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      props:true,
      meta:{
        isArrow:true,
        title:"登录",
        
      }
    },
    {
      path: '/record',
      name: 'Record',
      component: Record,
      meta:{
        isTabbar:true,
        title:"记录",
      }
    },
    {
      path: '/collection',
      name: 'Collection',
      component: Collection,
      meta:{
        isTabbar:true,
        title:"收藏",
      }
    },
    {
      path: '/me',
      name: 'Me',
      component: Me,
      meta:{
        isTabbar:true,
        title:"我的",
      }
    },
    {
      path: '/food',
      name: 'Food',
      component: Food,
      meta:{
        isTabbar:true,
        title:"食品列表",
        isArrow:true
      }
    },
    {
      path: '/shops/:business_id',
      name: 'Shops',
      component: Shops,
      meta:{
        
        title:"店铺详情",
        isArrow:true,
        isRefresh:true
      }
    }
  ],
  mode:"hash"
})



