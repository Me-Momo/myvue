module.exports = {
  'PLAY_AUDIO': {
    methods: {
      playAudio(param) {
        console.log('playAudio' + param)
        if (param.id) {
          this.$store.dispatch('getSong', param.id)
        } else if (param.index) {
          var index = param.index
          this.$store.commit('setAudio', index)
        }
      }
    }
  },
  'INIT': {
    created() {
      this.getList();
    }
  }
};
