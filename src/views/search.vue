<template lang="html">
<mt-search v-model="value" :result.sync="searchList"></mt-search>
<mt-cell
    v-for="item in searchList"
    :title="item.name"
    islink to="/player/item.id">
    <span slot="icon" class="icon"></span>
  </mt-cell>
</template>

<script>
import Vue from 'vue'
import { Search,Cell } from 'mint-ui'
import { mapGetters } from 'vuex'

Vue.component(Cell.name, Cell);
Vue.component(Search.name, Search);

export default {
  data(){
    return {value:"",result:[]}
  },
  computed:{
    ...mapGetters(['searchList'])
  },
  methods:{
    routerBack(){
      this.$router.go(-1);
    }
  },
  watch:{
    value:function(val,oldVal){
      console.log("测试new val:%s,old vla:%s",val,oldVal);
      this.$store.commit('search',val);
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
