// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import FastClick from 'fastclick'
import router from './router/index'
import store from './store/index'
import './assets/js/rem-common'
import "./styles/index.scss"
// 下载 npm i lib-flexible --save 在main.js中引入
// 下载 npm i px2rem-loader --save 在build下的utils.js里配置
// 下载 npm i less less-loader --save   
import utils from "./utils/utils"
import ajax from './api/api';
import $ajax from "./api/request"


// import { ToastPlugin, LoadingPlugin, AlertPlugin, ConfirmPlugin } from 'vux'
// // 使用组件
// Vue.use(ToastPlugin, { position: 'middle' })
// Vue.use(LoadingPlugin)
// Vue.use(AlertPlugin)
// Vue.use(ConfirmPlugin)

// vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// 注册自定义插件(可配置默认项)
import vPopup from "./components/v-popup";
import { vLoading, vToast, vModal } from "./plugins/index";
Vue.component('v-popup', vPopup)
Vue.use(vLoading).use(vToast).use(vModal)


// FastClick.attach(document.body)

Vue.config.productionTip = false
Vue.prototype.$utils = utils;
Vue.prototype.$api = ajax
Vue.prototype.$ajax = $ajax


/* eslint-disable no-new */
new Vue({
  router,
  store,
  data: {
    Bus: new Vue()
  },
  render: h => h(App)
}).$mount('#app-box')


// 路由守卫 
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (to.path == "/first" && from.path == "/") {
    next()
  }
  if (to.matched.length === 0) { //匹配前往的路由不存在
    next(from.name ? { name: from.name } : '/error') //判断此跳转路由的来源路由是否存在，存在的情况跳转到来源路由，否则跳转到404页面
  } else {
    next(); //如果匹配到正确跳转
  }
})