<template lang="html">
  <ul class="list-group song_list">
    <li class="list-group-item song_list_item" v-for='(song,index) in songList'><span class="song_index" :class='{ "hidden-sm-down":song.imgUrl }'>{{ index+1 }}</span><span  class="song_icon glyphicon glyphicon-play-circle"  title='点击播放'  @click='doPlay($event.target,{id:song.id})' v-if='!song.imgUrl'></span>
      <img v-else :src='song.imgUrl' class='song_img'  title='点击播放' @click='playAudio({id:song.id})'/>
      <span class="song_name">{{ song.name }}</span><span class="song_album">{{ song.album.name }}</span></li>
  </ul>
</template>

<script>
import { AUDIO } from '../mixins'
export default {
  props:['songList'],
  mixins:[AUDIO],
  methods:{
    doPlay(target,param){
      var $li=$(target).closest('li');
      $(".song_icon").removeClass('glyphicon-pause').addClass('glyphicon-play-circle');
      $(target).addClass('glyphicon-pause').removeClass('glyphicon-play-circle');
      $li.addClass('current').siblings().removeClass('current');
      this.playAudio(param);
    }
  }
}
</script>

<style lang="css">
.song_list{
  border: 1px solid rgba(128, 128, 128, 0.19);
  border-bottom-width: 0;
  color: rgb(51, 51, 51);
  font-size: 12px;
}
.song_list_item {
  border: none;
  border-radius: 0;
  padding: 0.5rem 1.25rem;
  display: -ms-flexbox;
  display: flex;
  text-align: left;
  padding-top: 10px;
  padding-bottom: 10px;
  text-overflow: ellipsis;
  max-height: 40px;
  line-height: 25px;
  overflow: hidden;
  color: rgb(51, 51, 51);
}
.list-group-item {
  padding-right: 2rem !important;
}
.song_list_item:nth-of-type(even){
  background: rgba(158, 158, 158, 0.12);
}
.song_list_item.current {
  border-left: 4px solid rgba(216, 17, 17, 0.92);
  background: rgba(255, 235, 59, 0.46);
  color: rgba(216, 17, 17, 0.92);
}
.song_list_item>.song_index,.song_list_item>.song_icon{
  flex:1;
}
.song_list_item>.song_icon{
  cursor: pointer;
  font-size: 19px;
}
.song_list_item>.song_img{
  width: 40px;
  height: 40px;
  margin:-.45rem 1rem -.5rem -4rem;
  cursor: pointer;
}
.song_list_item>.song_name{
  flex:4;
  max-width: 44%;
}
.song_list_item>.song_album{
  flex:3;
}
@media screen and (max-width:764px){
  .song_list{
    border-width: 0;
  }
  .song_list_item>.song_img{
      margin:-.45rem 1rem -.5rem -1rem;
  }
}
</style>
