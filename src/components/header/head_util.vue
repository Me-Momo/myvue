<template lang="html">
  <div class="headToggle">
        <span class='glyphicon glyphicon-music left' v-show='true'></span>
        <div class="input-group search">
          <input type="search" class="form-control" placeholder="Search for..."  v-on:click="goSearch()">
          <span class="glyphicon glyphicon-search"></span>
        </div>
        <span class='glyphicon glyphicon-stats right' v-show='true'></span>
</div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default {
  methods:{
    goSearch(){
      this.$router.push('/search')
    }
  }
}
</script>

<style lang="css">

</style>
