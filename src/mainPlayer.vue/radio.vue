
<template lang='html'>
<div class='player-wrapper'>
    <div class='player  container-fluid'>
      <!-- <playlist></playlist> -->
        <div class='cover'>
            <img :src='audio.imgUrl'>
            <div class='mask'></div>
            <div class='bg  play-bg' :class='{hide: isPlay}' @click='play'></div>
            <div class='bg  pause-bg' :class='{hide: !isPlay}' @click='pause'></div>
        </div>
        <div class="info">
          <div class="music">
            <span class="name">{{audio.name }}</span>
            <span class='sub' v-for='(artist,index) in  audio.artists'><span v-show="index!=0"> / </span> {{ artist}}</span>
          </div>
          <div class="controller">


              <div class='bg  play-prev'@click='prev'></div>

              <div class="bg play-next" @click='next'></div>


        <div class='bg  play-list' :class='' @click='togglePlaylist'></div>


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
             <span  class='time'> {{ audio.currentTime  | timeFriendly }}- {{ audio.duration | timeFormat }}</span>
             </div>
           </div>
         </div>
         <!-- .info end -->

<audio id='player' :src='audio.mp3Url' @timeupdate='change' @ended='next()' @error='next'></audio>
</div>
</div>

</template>

<script>
import {
  mapGetters
} from 'vuex'


function moveThumb(width) {
  // $('.played').css('width','80%');
  $('.played').css('width', width);
}


export default {
  created() {
    this.init()
  },
  computed: {
    ...mapGetters(['audio', 'isPlay', 'loadingState', 'currentIndex','togglePlaylist'])
  },
  methods: {
    init: function() {

    }, //init end
    play() {
      this.$store.commit('setAudio', this.currentIndex);
      this.$store.commit('isPlay', true);
      document.getElementById('player').play();
    },
    pause() {
      document.getElementById('player').pause();
      this.$store.commit('isPlay', false);
    },
    change() {
      var curTime = document.getElementById('player').currentTime;
      this.$store.commit('setAudioCurrentTime', curTime);
    },
    prev() {
      if (this.currentIndex !== 0) {
        this.$store.commit('setAudio', this.currentIndex - 1);
      }
    },
    next() {
      if (this.currentIndex !== this.audioList.length) {
        this.$store.commit('setAudio', this.currentIndex + 1);
      }
    },
    togglePlaylist(){
      this.$store.commit('togglePlaylist',!this.togglePlaylist)
    }
  }
}
</script>
