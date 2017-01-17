import {
  mapGetters
}
from 'vuex'

module.exports = {

  'PLAY_AUDIO': {
    computed: {
      ...mapGetters(['audio', 'audioList', 'currentIndex', 'togglePlaylist'])
    },
    methods: {
      playAudio(index) {
        this.$store.commit('setAudio', index);
        // 根据 audio.id获取歌词
        // this.$store.dispatch('getLrc', hash);
      }
    }
  },
  'INIT': {
    data(){
        return {
          playList:[]
        }
      },
    created() {
      // 不同视图自己实现 获取不同的 playlist !!
      this.getList();
    }
  }
};
