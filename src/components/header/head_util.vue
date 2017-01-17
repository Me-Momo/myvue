<template lang="html">
  <div class="headToggle">
        <span class='glyphicon glyphicon-music left' v-show='toggleHeader'></span>
        <div class="input-group search">
          <input type="search" class="form-control" placeholder="Search for...">
          <span class="glyphicon glyphicon-search"></span>
        </div>
        <span class='glyphicon glyphicon-stats right' v-show='toggleHeader'></span>
</div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
import { Search } from 'mint-ui';
import { mapGetters } from 'vuex'
Vue.use(VueRouter)
Vue.component(Search.name, Search);
export default {
  computed:{
    ...mapGetters(['toggleHeader'])
  },
  methods:{

  }
}
</script>

<style lang="css">

</style>
