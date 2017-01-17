<template lang="html">
  <transition name='bounce-in-out'>
<div class="headToggle">
      <div class="input-group search">
        <input type="search" class="form-control" placeholder="Search for..."   v-bind:value="val" v-on:input="handle($event.target.value)"  c>
        <span class="glyphicon glyphicon-search"></span>
      </div>
      <span class='glyphicon glyphicon-back right' @click='routerBack'></span>
</div>
</transition>

</template>

<script>
import Vue from 'vue'
import {
  Search,
  Cell
} from 'mint-ui'
import {
  mapGetters
} from 'vuex'

Vue.component(Cell.name, Cell);
Vue.component(Search.name, Search);

export default {
  data() {
    return {
      val: "",
      result: []
    }
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
  watch: {
    val: function(val, oldVal) {
      console.log("测试new val:%s,old vla:%s", val, oldVal);
      this.$store.commit('search', val);
    }
  }
}
</script>

<style lang="css">
.mt-cell .icon{
  width:24px;
  height:24px;
  background: url('../assets/images/iconall.png') 0px -538px;
}
</style>
