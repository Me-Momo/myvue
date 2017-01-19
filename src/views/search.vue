<template lang="html">
  <div class="search">
  <transition name='bounce-in-out'>
    <div class="headToggle">
      <div class="input-group search">
        <input type="search" class="form-control" placeholder="Search for..."   v-bind:value="val" v-on:input="handle($event.target.value)" autofocus>
        <span class="glyphicon glyphicon-search"></span>
      </div>
      <span class='cancle' @click='routerBack'>取  消</span>
</div>
</transition>

<div class="container">
  <div class="row clearfix">
    <div class="col-md-8 col-sm-12">
      <div class="media">
         <a href="#" class="pull-left"><img  src="http://p3.music.126.net/8UaJe7gMPwcVfdEQIGEREg==/5667982441251386.jpg" class="media-object" alt='' /></a>
        <div class="media-body">
          <h4 class="media-heading">

          </h4> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
        </div>
      </div>
    </div>
    <div class="col-md-4 col-sm-12  pull-left">
      <p class='text-muted text-xl-left'>热门搜索</p>
       <span class="label">陈奕迅</span> <span class="label">Bigbang</span>
    </div>
  </div>
  <div class="row">
    <ul class='searchList'>
    <cell v-for='audio in searchList'>
      <div slot="img">
        <img :src='audio.imgUrl'></img>
        <div class='play-bg' :class='{hide: isPlay}'  @click='playAudio({id:audio.id})'></div>
        <div class='pause-bg' :class='{hide: !isPlay}' @click='pause'></div>
      </div>
      <div slot="title">{{ audio.name }}</div>
      <div slot="title_" class="text-sm">{{ audio.artists[0].name }}</div>
      <span slot="icon" class="glyphicon glyphicon-music"></span>
    </cell>
    <mt-spinner color="#f44336" type="fading-circle"  :size='60' v-show='loadingState'></mt-spinner>
    </ul>

  </div>
</div>




</div>


</template>

<script>
import cell from '../components/cell'
import {
  mapGetters
} from 'vuex'


export default {
  data() {
    return {
      val: "",
      result: []
    }
  },
  components:{
    cell
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
    vm.$store.commit('showHead',false);
  })
  },
  computed: {
    ...mapGetters(['searchList'])
  },
  methods: {
    routerBack() {
        this.$store.commit('showHead',true);
      this.$router.go(-1);
    },
    handle(val) {
      this.$store.dispatch('search', "q=" + val);
    }
  },
  watch:{
    searchList:function(val,oldVal){
      console.log("searchList val:%s;oldVal:%s",val,oldVal)
    }
  }
}
</script>

<style scoped>
.mt-cell .icon{
  width:24px;
  height:24px;
  background: url('../assets/images/iconall.png') 0px -538px;
}
.main{
  margin-top:0 !important;
}
span.cancle{
  margin-left: 23px;
  color:#fff;
}
</style>
