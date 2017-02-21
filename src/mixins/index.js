import {
  mapGetters
}
from 'vuex'

module.exports = {
  'AUDIO': {
    computed: {
      ...mapGetters(['audio', 'isPlay', 'loadingState', 'currentIndex',
        'togglePlaylist', 'curList','searchList'
      ])
    },
    methods: {
      playAudio(param) {
          if (param.id) {
            this.$store.dispatch('getSong', param.id);
          } else if (param.index) {
            var index = param.index
            this.$store.commit('setAudio', index);
          }
        },
        play() {
          this.$store.commit('isPlay', true);
          document.getElementById('player')
            .play();
        },
        pause() {
          document.getElementById('player')
            .pause();
          this.$store.commit('isPlay', false);
        },
        prev() {
          if (this.currentIndex !== 0) {
            this.$store.commit('setAudio', this.currentIndex - 1);
          }
        },
        next() {
          if (this.currentIndex !== this.curList.length) {
            this.$store.commit('setAudio', this.currentIndex + 1);
          }
        },
        togglelist() {
          this.$store.commit('togglePlaylist', !this.togglePlaylist);
        },
        favlist(playlist){
          playlist.forEach(function(audio){
              this.$store.commit('addAudioList',{audio:audio,type:'favor'});
          });
        }
    }
  },
  'INIT': {
    data() {
        return {
          playList: [],
          playLists:[]
        }
      },
      created() {
        // 不同视图自己实现 获取不同的 playlist !!
        this.getList();
      }
  }
};
