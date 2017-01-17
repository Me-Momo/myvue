<template lang="html">
<mt-search v-model="value" :result.sync="result"></mt-search>
<mt-cell
    v-for="item in result"
    :title="item.title"
    :value="item.value" islink to="">
    <span slot="icon" class="icon"></span>
  </mt-cell>
</template>

<script>
import Vue from 'vue'
import { Search,Cell } from 'mint-ui';
Vue.component(Cell.name, Cell);
Vue.component(Search.name, Search);

export default {
  methods:{
    routerBack(){
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="css">
.mt-cell .icon{
  width:24px;
  height:24px;
  background: url('../images/iconall.png') 0px -538px;
}
</style>
