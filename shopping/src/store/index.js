import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutaions";
import actions from "./actions";
import getters from "./getters.js"

// 安装插件
Vue.use(Vuex)

const state = {
  cartList:  []
};
// store对象
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

export default store;
