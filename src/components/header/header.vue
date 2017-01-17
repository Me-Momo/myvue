<template lang="html">
<div class="header" v-show='toggleHeader'>
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
    ...mapGetters(['toggleHeader'])
  },
  components:{
   headUtil,headNav
  }
}
</script>
