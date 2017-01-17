<template lang="html">
<div class="header" v-show='showHead'>
   <head-util></head-util>
   <head-nav></head-nav>
</div>
</template>

<script>
import headUtil from './head_util'
import headNav from './head_nav'
import { mapGetters } from 'vuex'

export default {
  computed:{
    ...mapGetters(['showHead'])
  },
  components:{
   headUtil,headNav
  }
}
</script>
