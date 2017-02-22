<template lang="html">
  <section>
    
  </section>
</template>

<script>
import cell from '../components/cell'
import { AUDIO } from '../mixins'
export default {
  mixins: [AUDIO],
  data() {
    return {
      playlist: {
        title: ''
      }
    }
  },
  components: {
    cell
  },
  methods:{

  }
}
</script>

<style scrope>
.media-body {
    margin-left: 20px;
}
.media-heading::before {
    width: 54px;
    height: 24px;
    background: linear-grei;
    display: inline-block;
    content: '歌单';
    font-size: 16px;
    line-height: 24px;
    text-align: center;
}
</style>
