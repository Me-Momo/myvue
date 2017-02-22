<template lang="html">
  <div class="radio_view container">
    <songList :songList='searchList' class='row'></songList>
  </div>
</template>

<script>
import Vue from 'vue'

import {
  Spinner
} from 'mint-ui';

import { mapGetters }from 'vuex'
import songList from '../components/songlist'

Vue.component(Spinner.name, Spinner);

export default {
  computed: {
    ...mapGetters(['loadingState', 'searchList', 'isPlay'])
  },
  components: {
    songList
  },
  beforeRouteEnter(to,from,next){
    next(vm=>{
      vm.$store.commit('setAudioList', {
        audioList: [],
        type: 'search'
      });
      for(var i=0;i<10;i++){
        vm.$store.dispatch('getRadio','search');
      }
      setTimeout(function(){
        for(var i=0;i<10;i++){
          vm.$store.dispatch('getRadio','search');
        }
      },500);
    });
  },
  methods: {

  }
}
</script>

<style scoped>
.row{
  display: block;
}
.mint-spinner-fading-circle {
  margin-left: calc(50% - 30px);
}
</style>
