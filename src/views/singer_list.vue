<template lang="html">
  <section class='container'>
    <h5>热门歌手</h5>
    <div class="col-lg-2  col-md-2  col-sm-2 col-xs-3"  @click="goRouter(singer.name)"  v-for="singer in singerList" :title="singer.name +'的音乐'">
        <div class="card">
          <img class="card-img-top" :src="singer.imgUrl" alt="Card image cap" style='width:130px;'>
          <div class="card-block">
            <p class="card-title text-sm-center">{{ singer.name}}</p>
          </div>
        </div>
      </div>
      <h6>入驻歌手</h6>
       <ul class="other_singerList">
         <li  v-for='singer in oth_singerList'  @click='goRouter(singer)' :title="singer +'的音乐'">{{ singer }}</li>
       </ul>
  </section>
</template>

<script>
import singer from '../json/singer'
import oth_singer from '../json/oth_singer'
import {
  INIT
} from '../mixins'
import {
  Indicator
} from 'mint-ui';
export default {
  mixins: [INIT],
  data(){
    return {
      singerList:[],
      oth_singerList:[]
    }
  },
  methods: {
    goRouter(name) {
      var route = "/singer/" + name;
      this.$router.push(route);
    },getList() {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'snake'
      });
      this.parseList();
    },
    parseList() {
      var that=this
      setTimeout(() => {
        Indicator.close();
        that.singerList=singer;
        that.oth_singerList=oth_singer;
      }, 2000);
    }
  }
}
</script>

<style scoped>

.card {
  background: none;
  border:none;
  cursor: pointer;
}
.card img{
  border: 2px solid rgba(0, 0, 0, 0.125);
  box-sizing: content-box;
}
h5::before,h6::before{
    content: '';
    width: calc(1.5rem - 6px);
    height: calc(1.5rem - 6px);
    vertical-align: middle;
    border: 4px solid rgb(193, 13, 12);
    border-radius: 50%;
    display: inline-block;
    margin: 0 9px 0 4px;
}
h5,h6 {
    border-bottom: 2.5px solid rgb(193, 13, 12);
    padding: 8px 0;
    width: 100%;
    clear: left;
}
ul.other_singerList {
    padding: 0 5px;
}
.other_singerList>li{
  float: left;
  display: inline-block;
  overflow: hidden;
  padding: 5px 10px;
  cursor: pointer;
}
.other_singerList>li:hover{
  text-decoration: underline;
}
</style>
