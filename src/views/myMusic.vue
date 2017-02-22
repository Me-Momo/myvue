<template lang="html">
  <section class=''>
      <div class="profile">
        <div class="profile_cover">
          <img src="https://q3.qlogo.cn/g?b=qq&k=A05mSkjvDm1b9854Grp2Pw&s=140&t=1483345235" alt="">
        </div>
      </div>
      <div class='tabs'>
      <a href="#myFavList" data-toggle='collapse' class='tab-item' title='打开歌单'>我喜欢的歌曲({{ favList.length }})</a>
      <a href="#searchList" data-toggle='collapse' class='tab-item' title='打开歌单'>最近查找歌单({{ searchList.length }})</a>
    </div>
      <div id='myFavList' class='collapse container'>
        <div v-show='favList.length==0' style='font-size: 22px;
      text-align: center;'>空空如也~ 快去收藏歌曲吧 </div>
          <songList :songList='favList' id='myFavList'class='row'></songList>
      </div>
      <div id='searchList' class='collapse container'>
        <div v-show='searchList.length==0' style='font-size: 22px;
      text-align: center;'>空空如也~ </div>
        <songList :songList='searchList' class='row'>
        </songList>
      </div>
  </section>
</template>

<script>
import songList from '../components/songlist'
import { mapGetters }from 'vuex'
export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['favList','searchList'])
  },
  components: {
    songList
  },
  methods:{

  }
}
</script>

<style scoped>
.row {
    display: block;
    border: none;
}
.profile{
  background: url('https://y.gtimg.cn/mediastyle/yqq/img/bg_profile.jpg');
  height: 315px;
  padding-top: 65px;
  background-size: cover;
  text-align: center;
  color: rgb(255, 255, 255);
}
.profile_cover{
  display: block;
  width: 102px;
  height: 102px;
  margin: 0 auto;
  border: 4px solid rgb(255, 255, 255);
  border-radius: 99px;
  background: rgb(255, 255, 255);
  margin-left:calc(50% - 51px);
  overflow: hidden;
}
.tabs{
  color: rgb(255, 255, 255);
left: 0;
margin: -31px auto;
height: 60px;
font-size: 20px;
margin-bottom: 0;
width: 100%;
}
.tab-item,.tab-item:hover,.tab-item:visited,.tab-item:active{
  color:rgb(49, 194, 124);
  margin: 10px;
}
</style>
