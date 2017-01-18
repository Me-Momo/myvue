
<template lang='html'>
<div class='player-wrapper'>
    <currentList></currentList>
        <transition name="slide-fade">
    <div class='player  container-fluid' v-show='!togglePlaylist'>
      <!-- <playlist></playlist> -->
        <div class='cover'>
            <img :src='audio.imgUrl'>
            <div class='mask'></div>
            <div class='bg  play-bg' :class='{hide: isPlay}' @click='playAudio({index:currentIndex})'></div>
            <div class='bg  pause-bg' :class='{hide: !isPlay}' @click='pause'></div>
        </div>
        <div class="info" @click='goRouter'>
          <div class="music">
            <span class="name">{{audio.name }}</span>
            <span class='sub' v-for='(artist,index) in  audio.artists'><span v-show="index!=0"> / </span> {{ artist.name}}</span>
          </div>
          <div class="controller">
              <div class='bg  play-prev'@click='prev'></div>
              <div class="bg play-next" @click='next'></div>
        <div class='bg  play-list' :class='' @click='togglelist'></div>
          </div>
          <div class="lyric">
            <div class="lyric-content"></div>
          </div>
          <div class="slider-wrap">
             <div class='slider'>
             <div class='bar'>
                <div class="loaded"></div>
                <div class='played'><span class='bg thumb' id=''></span></div>
             </div>
             <span  class='time'> {{ audio.currentTime  | timeFormat }}- {{ audio.duration | timeFormat }}</span>
             </div>
           </div>
         </div>
         <!-- .info end -->
<audio id='player' :src='audio.mp3Url' autoplay @timeupdate='change' @ended='next' @error='errorHandle' @dataunavaliable='errorHandle' ></audio>
<mt-spinner color="#f44336" type="fading-circle"  :size='60' v-show='loadingState'></mt-spinner>
</div>
</transition>
</div>

</template>

<script>
import {
  mapGetters
} from 'vuex'
import {
  Spinner,Toast
} from 'mint-ui'
import {PLAY_AUDIO} from '../mixins'
import currentList from './currentList'
export default {
  components:{
    currentList
  },
  computed: {
    ...mapGetters(['audio', 'isPlay', 'loadingState', 'currentIndex', 'togglePlaylist', 'curList'])
  },
  methods: {
    play() {
      this.$store.commit('isPlay', true);
      document.getElementById('player').play();
    },
    pause() {
      document.getElementById('player').pause();
      this.$store.commit('isPlay', false);
    },
    change() {
      var curTime = document.getElementById('player').currentTime * 1000;
      this.$store.commit('setAudioCurrentTime', curTime);
      $('.played').css('width', curTime * 2 * 60 / this.audio.duration + "%");
    },
    prev() {
      if (this.currentIndex !== 0) {

        this.$store.commit('setAudio',this.currentIndex - 1);
      }
    },
    errorHandle(){
      Toast({
        message: '出错了',
        position: 'bottom',
        duration: 2000
      });this.next()
      this.$store.commit('deleteAudio',this.currentIndex);
      this.$store.commit('isPlay',false)
    },
    next() {
      if (this.currentIndex !== this.curList.length) {
        this.$store.commit('setAudio',this.currentIndex+1);
      }
    },
    togglelist() {
      this.$store.commit('togglePlaylist', !this.togglePlaylist)
    },
    goRouter(){
      this.$router.push('/mainplayer')
    }
  },
  watch: {
    isPlay: function(val, oldVal) {
      if (val === false) {
        document.getElementById('player').pause();
      } else {
        if(this.curList.length>0){
            document.getElementById('player').play();
        }
      }
    }
  }
}
</script>
