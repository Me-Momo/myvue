// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// 在 webpack.base.conf 中被设置为入口文件
import Vue from 'vue'
import App from './App'

/* eslint-disable no-new */
// 实例化 #app vm实例
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})
