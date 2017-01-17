<template>
  <div class="plist-view">
    <div class="pull-left"><img src="http://p3.music.126.net/8UaJe7gMPwcVfdEQIGEREg==/5667982441251386.jpg" alt=""><span class="glyphicon glyphicon-info-sign" @click="展示一个封面"></span></div>
    <div class="pull-right">歌单介绍</div>
  <div class="playlist plist_info">

      <ul class="list">
        <li class="audio-row">播放全部</li>
        <li class="audio-row"  v-for="(audio,index) in searchList" :class='{ audioRowCur:(index===  currentIndex) }'>
                <span :class='{cur:(index === currentIndex)}'></span>
              <div class="index"> {{ index }}</div>
              <div class="info"  @click="playAudio(index)"> {{ audio.name }}
                <div class="artist" v-for="(artist,index) in audio.artists">  <span v-show="index!==0">/</span>{{ artist }} </div>
               </div>
              <div class="duration"> {{ audio.duration | timeFormat }}</div>

       </li>
      </ul>

  </div>
  </div>
</template>

<script type="es6">
import Vue from 'vue'
import {PLAY_AUDIO} from '../mixins'
import {Indicator } from 'mint-ui'
import { Loadmore } from 'mint-ui';
import { mapGetters } from 'vuex'

Vue.component(Loadmore.name, Loadmore);
export default {
  mixins:[PLAY_AUDIO],
  computed:{
    ...mapGetters(['searchList'])
  },
  beforeRouteEnter (to, from, next) {
  next(vm => {
    Indicator.open({
      text:"加载中...",
      spinnerType:"snack"
    })
    // 通过 `vm` 访问组件实例,to和from都是路由对象
    var hash=vm.$route.params.id
    vm.$store.dispatch('getPlaylist',hash);
   setTimeout(()=>{
     Indicator.close();
   },1000);
  })
},
  methods: {
}
}
</script>
<style scoped>
  .plist-view>div:first-child{
    height:34vh;
    width:100%;
  }
  .plist-view>div>.pull-left{
    width: 25vh;
    height: 100%;
  }
  .plist-view>div>.pull-left>img{
    width: 100%;
    height: 100%;
  }
  span.glyphicon.glyphicon-info-sign {
      position: absolute;
      top: calc(100% - 37px);
      right: 20px;
      z-index: 999;
      font-size: 17px;
  }
  .plist-view>div:not(.playlist) {
      float:left;
      height: 50%;
      width: 50%;
      padding: 16px;
      position: relative;
  }
  .plist-view>.playlist{
      height: relative;
      height: 60%;
      bottom: 0;
  }

</style>
