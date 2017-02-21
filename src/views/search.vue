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
      <div class="tagCloud">
        <span class="label" @click='search($event.target.innerHTML)'>林俊杰</span>
        <span class="label" @click='search($event.target.innerHTML)'>周杰伦</span>
        <span class="label" @click='search($event.target.innerHTML)'>容祖儿</span>
      </div>
      <div class="searchResult">
        <list :audiolist='searchList' @play-audio="playAudio" ></list>
      </div>
    </div>
</div>


</template>

<script>
import list from '../components/List'
import {
  mapGetters
} from 'vuex'
import { AUDIO } from '../mixins'

export default {
  mixins:[AUDIO],
  data() {
    return {
      val: "",
      result: []
    }
  },
  components:{
    list
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
    vm.$store.commit('showHead',false);
  })
  },
  methods: {
    routerBack() {
        this.$store.commit('showHead',true);
      this.$router.go(-1);
    },
    search(val) {
      this.$store.dispatch('search', "q=" + val);
    }
  }
}
</script>

<style scoped>
.tagCloud{
  margin:20px 0 0;
  min-height: 5vh;
}
.label {
    border: 1px solid rgb(76, 175, 80);
    color: rgb(76, 175, 80);
    font-weight: normal;
    border-radius: 16px;
    margin-left: 7px;
    cursor: pointer;
}
.label:hover{
    border: 1px solid rgb(76, 175, 80);
}

.main{
  margin-top:0 !important;
}
span.cancle{
  margin-left: 23px;
  color:#fff;
}
</style>
