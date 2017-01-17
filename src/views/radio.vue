<template lang="html">
<ul>
<cell v-for='audio in searchList'>
  <div slot="img">
    <img :src='audio.imgUrl'></img>
    <div class='mask'></div>
    <div class='play-bg' :class='{hide: isPlay}'  @click='playAudio({id:audio.id})'></div>
    <div class='pause-bg' :class='{hide: !isPlay}' @click='pause'></div>
  </div>
  <div slot="title">{{ audio.name }}</div>
  <div slot="title_" class="text-sm">{{ audio.artists[0].name }}</div>
  <span slot="icon" class="glyphicon glyphicon-music"></span>
</cell>
<mt-spinner color="#f44336" type="fading-circle"  :size='60' v-show='loadingState'></mt-spinner>
</ul>

</template>

<script>
import Vue from 'vue'

import {
  Spinner
} from 'mint-ui';
import {
  mapGetters
} from 'vuex'
import cell from '../components/cell'

Vue.component(Spinner.name, Spinner);

export default {
  computed: {
    ...mapGetters(['loadingState', 'searchList', 'isPlay'])
  },
  components: {
    cell
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      //利用路由的before钩子解除router-view的缓存限制，重新获取列表
      var info = {
        audioList: [],
        type: 'search'
      }
      vm.$store.commit('setAudioList', info);
      vm.getList();
      $(window)
        .scroll(function() {
          var scrollHeight = $('.main')
            .height();
          var scrollTop = $(window)
            .scrollTop();
          var height = $(window)
            .height();
          if (scrollHeight - (scrollTop + height) > 100) {
            //TODO:限定不超过50条
            if (vm.searchList.length > 50) {
              $(window)
                .off('scroll')

            } else {
              vm.getList();
            }
          }

        })
    })
  },
  beforeRouteLeave(to, from, next) {
    next()
  },
  methods: {
    getList() {
      // TODO:just for test :20
      for (var i = 0; i < 5; i++) {
        this.$store.dispatch('getRadio', 'search');
      }
    },
    pause() {
      this.$store.commit('isPlay', false);
    },
    playAudio(param) {
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
ul.radio-playlist {
  padding: 0;
}

.cell .mask {
  position: absolute;
  left: 0;
  top: 0;
  width：100%； height: 50px;
  background: #000;
  opacity: 0.2;
  filter: alpha(opacity=20);
}

.cell .play-bg {
  position: absolute;
  width: 33px;
  height: 33px;
  top: 4px;
  left: 2px;
  cursor: pointer;
  background: url(../assets/images/audio_sprite.png) no-repeat -68px -118px;
}

.cell .pause-bg {
  position: absolute;
  width: 20px;
  height: 21px;
  bottom: 1px;
  right: 0px;
  cursor: pointer;
  background: url(../assets/images/audio_sprite.png) no-repeat 0px -60px;
}

.mint-spinner-fading-circle {
  margin-left: calc(50% - 30px);
}
</style>
