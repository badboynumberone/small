import Vue from 'vue'
import router from '@/router'
import { NavBar,Icon,Tag,Dialog} from 'vant';
Vue.use(NavBar).use(Icon).use(Tag).use(Dialog);
 

//获取当前位置信息
export function getCityFromGPS() {
    return new Promise(function(resolve,reject){
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function (r) {
            if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                var addComp =Object.assign(r.address,r.point) ;
                if(addComp){
                    localStorage.setItem("latitude",addComp.lat);
                    localStorage.setItem("longtitude",addComp.lng);
                    localStorage.setItem("city",addComp.city);
                    resolve(addComp);
                }else{
                    reject();
                }
            } else {
            console.log('err-->', this.getStatus());
            }
        }, {
            enableHighAccuracy: false
        })
    })
      
}

//检查状态是否登录
export function checkLoginState(){
    if(!getApp().globalData.phone){
        Dialog.confirm({
            title: '登录提示',
            message: '您尚未登录请先去登录'
            }).then(() => {
            // on confirm
                
                router.push({path:"/login"});
            }).catch(() => {
            // on cancel
            });
        return;
    }
}
//更新用户信息
export function updateUserInfo(data) {
    let globalData = getApp().globalData;
    globalData.id = data.id;
    globalData.address = data.address;
    globalData.name = data.name;
    globalData.avatar = data.imgurl;
    globalData.firmID = data.firmid;
    globalData.gender = data.gender;
    globalData.phone = data.mobile;
    globalData.point = data.point;
    globalData.premiseID = data.premiseid;
    globalData.premiseInfo = data.premise;
    globalData.nickName = data.nickname;
    globalData.audit = data.audit;
    globalData.emailCheck = data.mail;
    globalData.firmInfo = data.agentfirm;
    globalData.apply_state = data.apply_state;
    globalData.version = data.version;
    globalData.contact = data.contact;
    globalData.idcard = data.idcard;
    globalData.money = data.money;
    globalData.city = data.city;
    globalData.lat=data.lat;
    globalData.lng=data.lng;
  }
 //清除用户信息 
 export  function clearUpUserInfo() {
    let globalData = getApp().globalData;
    globalData.id = undefined;
    globalData.address = undefined;
    globalData.name = undefined;
    globalData.avatar = undefined;
    globalData.firmID = undefined;
    globalData.gender = undefined;
    globalData.phone = undefined;
    globalData.point = undefined;
    globalData.premiseID = undefined;
    globalData.premiseInfo = undefined;
    globalData.nickName = undefined;
    globalData.audit = undefined;
    globalData.emailCheck = undefined;
    globalData.firmInfo = undefined;
    globalData.apply_state = undefined;
    globalData.version = undefined;
    globalData.contact = undefined;
    globalData.idcard = undefined;
    globalData.money = undefined;
  }
  /**
 * 存储localStorage
 */
export const setStore = (name, content) => {
	if (!name) return;
	if (typeof content !== 'string') {
		content = JSON.stringify(content);
	}
	window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
export const getStore = name => {
	if (!name) return;
    return window.localStorage.getItem(name);
    
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
	if (!name) return;
	window.localStorage.removeItem(name);
}
//等待描述
function wait(time) {
    return new Promise(function (res, rej) {
      setTimeout(() => res(), time);
    })
  }