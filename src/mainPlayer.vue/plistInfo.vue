<template lang="html">
      <div class="playlist plist_info" v-show="togglePlaylist">
          <ul class="list">
            <li class="audio-row"  v-for="(audio,index) in audioList" :class='{ audioRowCur:(index===  currentIndex) }'>
                    <span :class='{cur:(index === currentIndex)}'></span>
                  <div class="index"> {{ index }}</div>
                  <div class="info"  @click="playAudio(index)"> {{ audio.name }}
                    <div class="artist" v-for="(artist,index) in audio.artists">  <span v-show="index!==0">/</span>{{ artist }} </div>
                   </div>
                  <div class="duration"> {{ audio.duration | timeFormat }}</div>
                  <div class="delete" @click="deleteAudio(index)"  v-if="index  !==currentIndex"> × </div>
                  <div class='bg play-icon' v-else ></div>
           </li>
          </ul>
           <div class="closePlaylist" @click="closePlaylist">关闭</div>
      </div>
</template>

<script>

import {PLAY_AUDIO} from '../mixins'
import {Indicator } from 'mint-ui'

export default {
  mixins:[PLAY_AUDIO],
  beforeRouteEnter (to, from, next) {
  next(vm => {
    // 通过 `vm` 访问组件实例,to和from都是路由对象
    console.log("测试路由hash"+to.param.id);
    vm.$store.commit('getPlaylist',id);
  })
},
  methods: {
    getList(){
      Indicator.open({
        text: '加载中...',
        spinnerType: 'snake'
      });
      for(var i=0;i<50;i++){
      this.$store.dispatch('getRadio');
      }
      setTimeout(()=> {
      //  TODO:当全部加载完毕时关闭
        Indicator.close();
      }, 1000);
    },
    deleteAudio(index){
      this.$store.commit('deleteAudio',index);
    }
  }
}
</script>
<style media="screen">
  .plist_info.playlist{
    position: relative;
    height:90vh;
    overflow: hidden;
  }
</style>
