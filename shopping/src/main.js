import Vue from 'vue'
import App from './App.vue'

// 3.挂载
import router from './router'
import store from './store'

import FastClick from 'fastclick'
import VueLazyload from "vue-lazyload";

import toast from 'components/common/toast'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
// 安装toast插件
Vue.use(toast)

// 解决客户端300ms延迟
FastClick.attach(document.body)
// 使用懒加载的插件
Vue.use(VueLazyload, {
  loading: require('assets/img/common/placeholder.png')
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
