<template lang="html">
<div class="container">
  <nav class="nav navbar">
      <a class="nav-link active" @click="goback($event)"><span class='glyphicon glyphicon-home'></span></a>
      <span>{{ audio.name }}</span>
  </nav>

  <div class="row">
    <div class="hidden-md-down col-lg-6">
        <list :audiolist='curList' @play-audio="playAudio" ></list>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-5 song_info">
        <div class="info_box">
              <a href="javascript:void(0)" class="song_info_cover">
              <img :src="audio.imgUrl" alt=""></a>
              <div class="song_info_name"> {{ audio.name }}</div>
              <div class="song_info_artist"> {{ audio.artists[0].name   }}</div>
              <div class="song_info_album"> {{ audio.album.name  }}</div>
        </div>
        <div class="lrc_box" id="lrcbox">
              <!-- 控制lrc_inner做滚动 -->
              <div class="lrc_wrap">
              <section class="lrc_inner">
                   <p v-for='(lyric,index) in lyricArr' :data-line='index'>{{ lyric }}</p>
              </section>
              </div>
        </div>
    </div>
  </div>
  <!-- end .row -->
</div>
</template>

<script>

import list from '../components/List'
import Util from '../utils/utils.js'
import {
  AUDIO
}
from '../mixins'
import { mapGetters } from 'vuex'

export default {
  beforeRouteEnter(to,from,next){
    next(vm=>{
      vm.$store.commit('showHead',false)
        vm.$store.dispatch('getLyric',vm.audio.id)
      setTimeout(function(){
        vm.renderLyric(vm.audio.lyric)
      },1000);

    })
  },
  beforeRouteLeave(to,from,next){
    next(vm=>{
      vm.$store.commit('showHead',true)
    })
  },
  mixins: [AUDIO],
  data(){
    return {
      lyricArr:[],
      timeArr:[],
      lrcHighIndex:0,
      lrc:$('.lrc_inner>p')
    }
  },
  computed:{
    ...mapGetters(['audio','curTime','curList'])
  },
  components:{
    list
  },
  methods:{
      renderLyric(songinfo) {
           var arrMap = Util.LyricUtil.createLyric(this.audio.lyric);
           this.lyricArr=arrMap.lyricArr
           this.timeArr=arrMap.timeArr
      },
      goback(e){
        e.preventDefault();
        this.$store.commit('showHead',true)
        this.$router.go(-1)
      }
  },
  watch:{
    curTime:function(val,oldVal){
      var moveDis=40;
        if (Math.floor(val) >= this.timeArr[this.lrcHighIndex]) {

         this.lrc.eq(lrcHighIndex).addClass('on').siblings().removeClass('on');
             $('.lrc_wrap').animate({
                 "top": "-" + (moveDis*lrcHighIndex) + "px"
             }, 100);
        //      lrcMoveIndex++;
        //  }
         lrcHighIndex++;
     }
    }
  }
}
</script>

<style scoped>
.main{
  overflow-y: hidden;
}
   .container{
     height: 82vh;
   }
</style>
