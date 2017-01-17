<template lang="html">
    <transition name="slide-fade">
      <div class="playlist" v-show="togglePlaylist">
          <ul class="list">
            <li class="audio-row"></li>
            <li class="audio-row"  v-for="(audio,index) in audioList" :class='{ audioRowCur:(index===  currentIndex) }'>
                    <span :class='{cur:(index === currentIndex)}'></span>
                  <div class="index"> {{ index }}</div>
                  <div class="info"  @click="playAudio(index)"> {{ audio.name }}
                    <div class="artist" v-for="(artist,index) in audio.artists">  <span v-show="index!==0">/</span>{{ artist }} </div>
                   </div>
                  <div class="duration"> {{ audio.duration | timeFormat }}</div>
                  <span class="delete" @click="deleteAudio(index)"  v-if="index  !==currentIndex" class='glyphicon glyphicon-remove pull-right'></span>
                  <div class='bg play-icon' v-else ></div>
           </li>
          </ul>
           <div class="closePlaylist" @click="closePlaylist">关闭</div>
      </div>
</transition>
</template>

<script>

import {INIT,PLAY_AUDIO} from '../mixins'
import {Indicator,Spinner } from 'mint-ui'

export default {
  mixins:[INIT,PLAY_AUDIO],
  methods: {
    getList(){
      Indicator.open({
        text: '加载中...',
        spinnerType: 'snake'
      });
    for(var i=0;i<50;i++){
      this.$store.dispatch('getRadio','init');
      }
      setTimeout(()=> {
      //  TODO:当全部加载完毕时关闭
        Indicator.close();
      }, 1000);
    },
    closePlaylist(){
      this.$store.commit('togglePlaylist',false);
    },
    deleteAudio(index){
      this.$store.commit('deleteAudio',index);
    }
  }
}
</script>
<style scoped>
span.glyphicon.glyphicon-remove.pull-right {
    width: 32px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    right: 0;
    position: absolute;
}
</style>
