import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/index',
    component: require('../views/index')
  }, {
    path: '/radio',
    component: require('../views/radio')
  }, {
    path: '/plistInfo',
    component: require('../views/plistInfo')
  }, {
    path: '/plistInfo/:id',
    component: require('../views/plist')
  }, {
    path: '/singer',
    component: require('../views/singer')
  }, {
    path: '/singer/list/:id',
    component: require('../views/singer_list')
  }, {
    path: '/search',
    component: require('../views/search')
  }, {
    path: '/player/:id',
    component: require('../views/mainPlayer')
  }, {
    path: '*',
    redirect: '/index'
  }]
});

export default router;
