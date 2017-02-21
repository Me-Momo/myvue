<template lang="html">
   <div class="singer_view container">
     <div class="row">
       <div class="col-md-12  col-lg-9">
        <h5>{{ singer_name }}</h5>
        <img src="http://p3.music.126.net/_cB2figc8IpT89DYhpARxA==/3389794350704969.jpg?param=640y300" alt="歌手图片" style='width:100%;'>
        <div class="tabs">
          <span class="tab current" data-target='top_50'>热门50单曲</span>
          <span class='tab'>所有专辑</span>
          <span class="tab">相关MV</span>
          <span class='tab'>歌手介绍</span>
        </div>
        <div id="top50">
          <div class="btn-op">
          <button @click='' class='btn btn-primary'><span class="glyphicon glyphicon-play-circle"></span>&nbsp;播放</button>
          <button @click='' class='btn btn-primary'>
<span class="glyphicon glyphicon-heart-empty"></span>&nbsp;收藏</button>
          </div>
        <songList :songList='searchList'></songList>
        </div>
        </div>
        <aside class="col-lg-3 hidden-lg-down">
          <div class="ad">广告区域</div>
          <h6>相似歌手</h6>
            <ul class="similar_singer_list">
              <li class="similar_singer_list_item"  @click="goRouter(singer.name)"  v-for="singer in singerList" :title="singer.name +'的音乐'">
                  <img :src="singer.imgUrl" alt="simger cover">
                  <p>{{ singer.name}}</p>
              </li>
            </ul>
        </aside>
     </div>
     <footer class='row'>
        Copyright © 2017 Copyright kasmine All Rights Reserved.
     </footer>
   </div>
</template>

<script>
import { mapGetters }from 'vuex'
import songList from '../components/songlist'
import singer from '../json/singer'
export default {
  data(){
    return {
      singer_name:'',
      singerList:[]
    }
  },
  computed: {
    ...mapGetters(['searchList'])
  },
  beforeRouteEnter(to,from,next){
    next(vm=>{
      vm.$store.commit('setAudioList', {
        audioList: [],
        type: 'search'
      });
      vm.singer_name=to.params.name;
      vm.$store.dispatch('search', "q=" + vm.singer_name+"&limit=50");
      vm.singerList=singer;
    });
  },
  beforeRouteUpdate(to,from,next){
    // next(vm=>{
      console.log(to)
      var info = {
        audioList: [],
        type: 'search'
      }
      // vm.$store.commit('setAudioList', info);
      // vm.singer_name=to.params.name;
      // vm.$store.dispatch('search', "q=" + vm.singer_name+"&limit=50");
      // vm.singerList=singer;
    // });
  },
  components:{
    songList
  },
  methods:{
    goRouter(name) {
      var route = "/singer/" + name;
      this.$router.push(route);
    }
  }
}
</script>

<style scoped>
.row{
  display: block;
}
.tabs{
  display: flex;
  text-align: center;
  background: #fff;
}
.tab:last-child {
    border-right: 1px solid rgb(204, 204, 204);
}

.tab.current+.tab {
    border-left: 1px solid rgb(204, 204, 204);
}
.tab.current {
    border-top-color: rgb(244, 67, 54);
    border-bottom: none;
}
.tab:hover{
  border-top-color:rgb(244, 67, 54);
}
.tab:first-child {
    border-left: 1px solid rgb(204, 204, 204);
}
.tab {
    flex: 1;
    padding: 8px 0;
    border-bottom: 1px solid rgb(204, 204, 204);
    border-top:4px solid #fff;
}
h5 {
  padding: 18px 10px 2px 16px;
}
.btn-op {
    margin: 6px 12px;
}
.btn-op>button {
    box-shadow: 0 4px 7px -6px #000;
    padding: 0.3rem 0.8rem;
}

aside h6 {
    position: relative;
    font-weight: 600;
    height: 23px;
    margin-bottom: 20px;
    border-bottom: 1px solid rgb(204, 204, 204);
    color: rgb(51, 51, 51);
}
aside .ad{
  margin:50px 0;
  border:1px solid rgb(158, 158, 158);
  height:350px;
}
.similar_singer_list {
  padding:0;
}
.similar_singer_list_item {
    float: left;
    margin: 0 10px;
    cursor: pointer;
}
.similar_singer_list_item img{
    margin-bottom: 8px;
    width: 60px;
}
</style>
