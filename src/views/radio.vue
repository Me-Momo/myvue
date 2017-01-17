<template lang="html">
<ul>
<cell v-for='audio in searchList'>
  <img slot="img" :src='audio.imgUrl'></img>
  <div class='mask'></div>
  <div class='play-bg' :class='{hide: isPlay}' :id='audio.id' @click='play($event.target.attr.id)'></div>
  <div class='pause-bg' :class='{hide: !isPlay}' @click='pause'></div>
  <div slot="title">{{ audio.name }}</div>
  <div slot="title_" class="text-sm">{{ audio.artists[0].name }}</div>
  <span slot="icon" class="glyphicon glyphicon-music"></span>
</cell>
</ul>
<mt-spinner color="rgb(100, 100, 100)" v-show='loadingState'></mt-spinner>
</template>

<script>
import Vue from 'vue'
import { Spinner } from 'mint-ui';
import { mapGetters } from 'vuex'
import cell from '../components/cell'



Vue.component(Spinner.name, Spinner);
export default {
  computed:{
    ...mapGetters(['loadingState','searchList'])
  },components:{
    cell
  },created(){
    // TODO:just for test :20
    for(var i=0;i<20;i++){
        this.$store.dispatch('getRadio','radio');
    }
    var that=this
    setTimeout(()=>{
      that.loadingState=false;
    },3000);
    console.log(this.loadingState+"loadingState")
  },
  methods:{
    play(id){
       this.$store.commit('getSong',id)
    },pause(){

    }
  }
}
</script>

<style lang="css">
.cell .mask {
  position: absolute;
  left:0;
  top: 0;
  height: 50px;
  background: #000;
  opacity: 0.2;
  filter: alpha(opacity=20);
}
.cell .play-bg {
   position: absolute;
   top: 4px;
   left: 2px;
   cursor: pointer;
   background: url(../assets/images/audio_sprite.png) no-repeat  -68px -118px;
 }
 .cell .pause-bg {
    position: absolute;
    width: 20px;
      height: 21px;
      bottom: 1px;
      right: 0px;
    cursor: pointer;
    background: url(../assets/images/audio_sprite.png) no-repeat  0px -60px;
}



</style>
