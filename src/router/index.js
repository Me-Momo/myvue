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
    path: '/playlist/:id',
    component: require('../views/playlist_id')
  }, {
    path: '/singer/:name',
    component: require('../views/singer')
  }, {
    path: '/singers',
    component: require('../views/singer_list')
  }, {
    path: '/search',
    component: require('../views/search')
  }, {
    path: '/my',
    component: require('../views/myMusic')
  }, {
    path: '/mainplayer',
    component: require('../views/mainplayer')
  }, {
    path: '*',
    redirect: '/index'
  }]
});

export default router;
