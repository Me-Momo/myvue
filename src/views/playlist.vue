<template lang="html">
  <section class='plistInfo container'>
      <div class="row">
<div class="col-12"><span class='glyphicon glyphicon-calendar'></span>
 <span class="title">推荐歌单</span><span class="more text-muted text-sm-right">更多</span>
</div>
<div class="card-wrap" @click="goRouter(playlist.id)"  v-for="playlist in playList">
<card>
  <img slot='img' src="http://p3.music.126.net/8UaJe7gMPwcVfdEQIGEREg==/5667982441251386.jpg" alt="">
  <span slot="icon" class="glyphicon glyphicon-info-sign"></span>
  <span slot="tips">{{ playlist.popularity }}</span>
  <div slot="text">{{ playlist.title }}</div>
</card>
</div>


     </div>
  </section>
</template>

<script>
import Vue from 'vue'
import {
  Header,
  Indicator
} from 'mint-ui';
import card from '../components/card'

import list_plist from '../json/plist'
import {
  INIT
} from '../mixins'
Vue.component(Header.name, Header);

export default {
  mixins: [INIT],
  components: {
    card
  },
  methods: {
    getList() {
      Indicator.open({
      text: '加载中...',
      spinnerType: 'snake'
      });
      this.parseList(list_plist);
    },
    parseList(data) {
      setTimeout(() => {
        Indicator.close();
        this.playList = data;
      }, 2000);

    },
    goRouter(id) {
      var route = "/playlist/" + id;
      console.log(route)
      this.$router.push(route);
    }
  }
}
</script>

<style scoped>
.plistInfo.container {
  margin-bottom: 15px;
}

.card-wrap {
  float: left;
  width: 50%;
}

.plistInfo .col-12 {
  position: relative;
  width: 100%;
  font-size: 1em;
  padding: 0px 12px;
  border-top: 1px solid rgb(158, 158, 158);
}

@media screen and (min-width: 767px) {
  .plistInfo .col-12 {
    font-size: 1.3em;
  }
  .card-wrap {
    width: 33%;
  }
}

.plistInfo .col-12>span:last-child {
  position: absolute;
  right: 17px;
  top: calc(50% - 10px);
}
</style>
