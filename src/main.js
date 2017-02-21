import Vue from 'vue'
import App from './App'
import router from './router'
import store from './utils/store'
import VueResource from 'vue-resource'
import mint from 'mint-ui'

import './utils/filter'
import 'mint-ui/lib/style.css'
import '../static/css/vue-material.css'
// 自定义样式
import './assets/css/style.css'
import './assets/css/player.css'
import './assets/css/swipe.css'
import './assets/css/mainplayer.css'

import './assets/js/swipe.js'

var VueMaterial = require('vue-material')

Vue.use(VueMaterial)

Vue.use(mint)
Vue.use(VueResource)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
