// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import store from './store/index';
import show from './utils/show';
Vue.prototype.$show = show;
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '../static/images/elmlogo.jpeg',
  loading: '../static/images/loading.png',
  attempt: 1
})
Vue.use(VueLazyload)
Vue.use(Vant);
//引入css样式
import '@/../static/scss/common.scss'
import 'lib-flexible'
Vue.config.productionTip = false

/* eslint-disable no-new */
let vue=new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

Vue.prototype.$storage = {};
//创建getApp类似api
const _GLOBAL_DATA = {
  globalData: Vue.prototype.$storage,
  $root:vue
};
window.getApp = () => {
  return _GLOBAL_DATA;
}


