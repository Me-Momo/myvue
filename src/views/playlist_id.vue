<template>
<div class="plist-view container">
    <div class="media">
    <div class="media-left media-middle">
      <a href="#">
        <img class="media-object" src="//y.gtimg.cn/music/photo_new/T002R300x300M000000Ljw6T1Mwyji.jpg?max_age=2592000" alt=" 歌单名  +图" >
        <i class='cover_mask'></i>
      </a>
    </div>
    <div class="media-body">
      <h4 class="media-heading"> 歌单名 </h4>
      <p> 歌单介绍 </p>
    </div>
  </div>
  <list :audiolist='searchList' @play-audio='playAudio' @add-all-list='addAllList'></list>
  </div>
</template>

<script type="es6">
import Vue from 'vue'

import {
  Indicator
}

from 'mint-ui'
import {
  Loadmore
}

from 'mint-ui';
import { mapGetters } from 'vuex'
import { AUDIO } from '../mixins'
import list from '../components/List'

Vue.component(Loadmore.name, Loadmore);
export default {
  mixins: [AUDIO],
  computed: {
    ...mapGetters(['searchList','currentIndex'])
  },
  components:{
    list
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
        // 通过 `vm` 访问组件实例,to和from都是路由对象
        var hash = vm.$route.params.id
        vm.$store.dispatch('getPlaylist', hash);
        setTimeout(() => {
          Indicator.close()
        }, 1000)
      })
    },
    methods: {
      addAllList() {
        var that = this
        this.searchList.map(function(item) {
          that.$store.dispatch('getSong', item.id);
        })
      }
    }
}
</script>
<style scoped>
.media {
    position: relative;
    max-height: 300px;
    max-width: 300px;
    margin: 10px 0 !important;
}
.media-left{
  position: relative;
}
</style>
