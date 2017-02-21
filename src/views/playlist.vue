<template lang="html">
  <div class="container">
    <playlist v-for="item in playList" :playList="item"></playlist>
  </div>
</template>

<script>
import playlist from '../components/playlist'
import plist from '../json/allPlist'
import {
  INIT
} from '../mixins'
import {
  Indicator
} from 'mint-ui';
export default {
  mixins: [INIT],
  components: {
     playlist
  },
  methods:{
    getList() {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'snake'
      });
      this.parseList(plist);
    },
    parseList(data) {
      setTimeout(() => {
        Indicator.close();
        this.playList.push(data);
      }, 2000);
    }
  }
}
</script>
