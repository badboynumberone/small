import Vue from 'vue';
import Vant from 'vant'

import { Toast } from 'vant';
Vue.use(Vant).use(Toast);
//显示加载框
export function showLoading(){
    Toast.loading({
        duration: 0,       // 持续展示 toast
        forbidClick: true, // 禁用背景点击
        loadingType: 'spinner',
        message: '加载中...'
    });
}
//隐藏加框
export function clearToast(){
    Toast.clear();
}

//文字提示框
export function showNotice(val){
    Toast(val);
    setTimeout(function(){clearToast()},1000);
}

export default {
    showLoading,
    clearToast,
    showNotice
}