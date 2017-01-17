<template lang="html">
  <div class="swipe">
 <mt-swipe :auto="5000">
   <mt-swipe-item>
      <img src="http://p4.music.126.net/Lgnt2GIRDmFG71xumme_jg==/18800549324984629.jpg" alt="轮播图">
   </mt-swipe-item>
   <mt-swipe-item>
       <img src="http://p3.music.126.net/BUnK2WVqCmzLPr05AIB0FQ==/3312828535856973.jpg" alt="轮播图">
   </mt-swipe-item>
   <mt-swipe-item>
      <img src="http://p4.music.126.net/Lgnt2GIRDmFG71xumme_jg==/18800549324984629.jpg" alt="轮播图">
   </mt-swipe-item>
   <mt-swipe-item>
       <img src="http://p3.music.126.net/BUnK2WVqCmzLPr05AIB0FQ==/3312828535856973.jpg" alt="轮播图">
   </mt-swipe-item>
 </mt-swipe>
 </div>
</template>
<script>
  import { Swipe, SwipeItem,Indicator,Cell } from 'mint-ui'

export default {
  components:{ }
}
</script>

<style lang="css">
</style>
