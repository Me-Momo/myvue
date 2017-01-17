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
    path: '/playlist',
    component: require('../views/playlist')
  }, {
    path: '/playlist/:id',
    component: require('../views/playlist_id')
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
    path: '/my',
    component: require('../views/myMusic')
  }, {
    path: '*',
    redirect: '/index'
  }]
});

export default router;
