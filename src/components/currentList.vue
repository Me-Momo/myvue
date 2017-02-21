<template lang="html">
    <transition class="slide-fade">
      <div class="playlist" v-show="togglePlaylist">
        <ul class="list-group song_list current_song_list">
          <li class="list-group-item"><span @click='favlist(curList)' class='song_op'>收藏</span><span class='pull-right song_op' @click="closePlaylist">关闭</span></li>
          <li class="list-group-item song_list_item" v-for='(song,index) in curList'  title='点击播放'  @click='doPlay($event.target,{id:song.id})'>
            <span class="song_name"><span class="glyphicon glyphicon-volume-up"></span>&nbsp;{{ song.name }}</span><span class="song_album">{{ song.album.name }}</span>
            <span class="song_op glyphicon glyphicon-remove" @cilck.prevent='deleteAudio(index)' title="移除"></span>
          </li>
        </ul>
      </div>
</transition>
</template>

<script>

import { mapGetters } from 'vuex'
import {Indicator,Spinner } from 'mint-ui'
import { AUDIO } from '../mixins'
export default {
  mixins:[AUDIO],
  computed:{
    ...mapGetters(['curList','togglePlaylist','currentIndex'])
  },
  methods: {
    doPlay(target,param){
      var $li=$(target).nodeName==='LI'?$(target):$(target).closest('li');
      $li.addClass('current').siblings().removeClass('current');
      this.playAudio(param);
    },
    closePlaylist(){
      this.$store.commit('togglePlaylist',false);
    },
    deleteAudio(index){
      console.log(index)
      this.$store.commit('deleteAudio',index);
    }
  },
  watch:{
    currentIndex:function(){
      var _self=this;
      setTimeout(function(){
        var $li=$('.current_song_list .song_list_item').eq(_self
          .currentIndex-1);
        $li.addClass('current').siblings().removeClass('current');
      });

      // this.playAudio(param);
    }
  }
}

</script>
<style scoped>
.song_op{
  cursor: pointer;
}
.song_list_item.current .glyphicon.glyphicon-volume-up{
  opacity: 1;
}
.glyphicon.glyphicon-volume-up{
  opacity: 0;
  colot:rgb(228, 50, 37);
  transition: all .5s;
}

</style>
