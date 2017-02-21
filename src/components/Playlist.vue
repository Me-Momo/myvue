<template lang="html">
  <section class='playlist_comp'>
      <div class="playlist_item col-xs-6 col-sm-6 col-md-4 col-lg-4" v-for="playlistItem in playList" title="点击查看详细歌单"  @click="goRouter(playlistItem.id)" >
          <div class="playlist_item_cover">
            <i class='glyphicon glyphicon-play-circle'></i>
            <img :src="playlistItem.imgUrl" alt="">
          </div>
          <p class='playlist_item_title'>{{ playlistItem.title }}</p>
      </div>
  </section>
</template>

<script>
export default {
  props:["playList"],
  methods: {
    goRouter(id) {
      var route = "/playlist/" + id;
      this.$router.push(route);
    }
  }
}
</script>

<style scoped>
    .playlist_item{
      cursor: pointer;
      text-align: center;
    }
    .playlist_item_cover{
      position: relative;
    }
    .playlist_item img{
      transition: all .5s ease-in-out;
    }
   .playlist_item i:hover+img{
     transform: scale(1.04);
   }
   .playlist_item i{
     opacity: 0;
     font-size: 32px;
     position: absolute;
     width: 100%;
     height: 107%;
     max-width: 200px;
     max-height:200px;
     left: -2.5%;
     top: -3.5%;
     transition: all 1s;
     color: rgba(255, 255, 255, 0.75);
     background: rgba(158, 158, 158, 0.15);
     text-align: center;
     padding-top: 50%;
   }
   @media screen and (min-width:1024px){
        .playlist_item i{
           left: inherit;
          top: inherit;
          padding-top: 91px;
        }
   }
   .playlist_item i:hover {
     opacity: 1;
     z-index:99;
   }
   .playlist_item_title {
    margin: 10px 8px 14px;
    height: 40px;
    overflow: hidden;
  }
</style>
