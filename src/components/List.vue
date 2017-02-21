<template lang="html">
  <ul class="list-group">
    <li class="list-group-item list-group-item-warning row" >
        <div class="col-lg-1 col-md-1 col-xs-1 col-sm-1">
        </div>
        <div class="col-lg-4 col-md-4 col-xs-3 col-sm-4">
          歌曲名
        </div>
        <div class="col-lg-4 col-md-4 col-xs-4 col-sm-4">
          专辑名
        </div>
          <span class='pull-right' @click="addAllList" >播放全部</span>
    </li>
    <li class="list-group-item row" v-for="(audio,index) in audiolist" @click='addSign($event)'>
      <span class="sign"></span>
      <div class="col-lg-1 col-md-1 col-xs-1 col-sm-1">
        {{ index }}
      </div>
      <div class="col-lg-4 col-md-4 col-xs-3 col-sm-4 title"
        title="双击播放"
       @dblclick="playAudio({id:audio.id,index:index})" @touchend='playAudio({id:audio.id,index:index})'>
        {{ audio.name }}
      </div>
      <div class="col-lg-4 col-md-4 col-xs-4 col-sm-4 album">
      {{ audio.album.name }}
      </div>
      <span class='badge pull-right'>{{ audio.popularity }}</span>
    </li>
  </ul>
</template>

<script>
import  { mapGetters } from "vuex"

export default {
  props:["audiolist"],
  data(){
    return{
      TimeFn:null
    }
  },
  computed:{
    ...mapGetters(['currentIndex'])
  },
  methods:{
    addSign:function(e){
      var $target=e.target.nodeName==='LI'?$(e.target):$(e.target).closest('li')
      $target.siblings('li').removeClass('current').end().addClass('current')
    },
    playAudio:function(params){
      clearTimeout(this.TimeFn);
      var that=this
      that.TimeFn = setTimeout(function(){
            that.$emit("play-audio",params)
      },300);
    },
    addAllList() {

    }
  }
}
</script>

<style>
.list-group-item>[class^='col-']{
  cursor: pointer;
  padding: 0;
}
.list-group-item.current {
  background: rgba(255, 235, 59, 0.34);
}
.list-group-item.current>.sign{
display: inline-block;
width: 3px;
height: 70%;
position: absolute;
left: 0;
top: 15%;
opacity: 0;
background: rgb(255, 87, 34);
transition: all .2s;
}
.list-group-item.current>.sign{
opacity: 1.0;
}
.cover_mask {
  position: absolute;
  left: 0;
  top: 0;
  bottom: -2px;
  right: -21px;
  background: url(../assets/images/album_cover.png);
  background-size: cover;
}

</style>
