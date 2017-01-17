<template lang="html">
  <div>
    <div id="carousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" class="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
        <li data-target="#carousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <img src="http://p4.music.126.net/mWlFYss6Erb26BVSoKAgAQ==/18727981557629468.jpg" alt="First slide">
        </div>
        <div class="carousel-item">
          <img src="http://p4.music.126.net/mWlFYss6Erb26BVSoKAgAQ==/18727981557629468.jpg" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img src="http://p4.music.126.net/mWlFYss6Erb26BVSoKAgAQ==/18727981557629468.jpg" alt="Third slide">
        </div>
      </div>
      <a class="left carousel-control" href="#carousel" role="button" data-slide="prev">
        <span class="icon-prev" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#carousel" role="button" data-slide="next">
        <span class="icon-next" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <plistInfo></plistInfo>
    <plistInfo></plistInfo>
  </div>

</template>

<script>
import plistInfo from './plistInfo'
export default {
  components:{
plistInfo
  }
}

</script>
<style media="screen">
.carousel-item{
     text-align: center;
}

</style>
