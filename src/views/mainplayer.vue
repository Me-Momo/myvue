<template lang="html">
  <div class="mainplayer">
   <cell>
     <span slot="img" @clikc='this.$router.go(-1)'>返回</span>
     <span slot="title">{{ audio.name }}</span>
   </cell>
   <div class='col-lg-offset-4 col-lg-4 col-md-offset-3 col-md-6 col-sm-12'>
     <span></span>
     <img :src='audio.imgUrl' alt="">
   </div>
   <div class='col-lg-offset-4 col-lg-4 col-md-offset-3 col-md-6 col-sm-12'>
      {{ audio.lyric }}
   </div>
   </div>
</template>

<script>
import cell from '../components/cell'
import { mapGetters } from 'vuex'

export default {
  beforeRouteEnter(to,from,next){
    next(vm=>{
      vm.$store.commit('showHead',false)
      vm.$store.dispatch('getLyric','64634')
    })
  },
  beforeRouteLeave(to,from,next){
    next(vm=>{
      vm.$store.commit('showHead',true)
    })
  },
  computed:{
    ...mapGetters(['audio'])
  },
  components:{
    cell
  }
}
</script>

<style lang="css">
</style>
