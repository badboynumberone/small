import Vue from 'Vue'
import Vuex from 'Vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex);

export default new Vuex.Store({
    state,mutations,actions
})