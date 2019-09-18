// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick' // 移动端 300毫秒 点击延迟问题
import 'minireset.css'
import '@/assets/styles/border.css' // 1px像素边框的问题

Vue.config.productionTip = false
fastClick.attach(document.body) // 配置使用

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
