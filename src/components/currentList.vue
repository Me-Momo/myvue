<template lang="html">
    <transition name="slide-fade">
      <div class="playlist" v-show="togglePlaylist">
          <ul class="list">
            <li class="audio-row"></li>
            <li class="audio-row"  v-for="(audio,index) in curList" :class='{ audioRowCur:(index === currentIndex) }'>
                    <span :class='{cur:(index === currentIndex)}'></span>
                  <div class="index"> {{ index+1 }}</div>
                  <div class="info"  @click="playAudio({index:index})">
                    {{ audio.name }}
                    <div class="artist" v-for="(artist,index) in audio.artists">  <span v-show="index!==0">/</span>{{ artist.name }} </div>
                   </div>
                  <div class="duration"> {{ audio.duration | timeFormat }}</div>
                  <span class="delete" @click="deleteAudio(index)"  v-if="index  !==currentIndex" class='glyphicon glyphicon-remove pull-right'></span>
                  <div class='bg play-icon' v-else ></div>
           </li>
           <li class="closePlaylist" @click="closePlaylist">关闭</li>
          </ul>

      </div>
</transition>
</template>

<script>

// import { PLAY_AUDIO } from '../mixins'
import { mapGetters } from 'vuex'
import {Indicator,Spinner } from 'mint-ui'

export default {
  // mixins:[PLAY_AUDIO],
  computed:{
    ...mapGetters(['curList','togglePlaylist','currentIndex'])
  },
  methods: {
    // getList(){
    // // for(var i=0;i<10;i++){
    //   this.$store.dispatch('getRadio','current');
    //   }
    // },
    closePlaylist(){
      this.$store.commit('togglePlaylist',false);
    },
    deleteAudio(index){
      this.$store.commit('deleteAudio',index);
    },
    playAudio(param) {  console.log(param)
        if (param.id) {
          this.$store.dispatch('getSong', param.id)
        } else if (param.index) {
        var index = param.index
      this.$store.commit('setAudio', index)
    }
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
