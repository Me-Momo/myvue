<template lang="html">
  <div class="plist container">
    <ul>
      <li v-for="item in searchList">
         <router-link to="/plist/item.id">
           <img v-lazy="item.imgUrl" />
         <div class="intro">{{
           <!-- TODO: add someIntroduce -->
            item.name,JSON.stringify(item.ablum)}} </div>
       </router-link>
      </li>
    </ul>
		</div>
</template>

<script>
import Vue from 'vue'
import {
  mapGetters
} from 'vuex'
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);


export default {
  computed:{
    ...mapGetters(['searchList'])
  },
  created(){
     this.$store.commit('search','最新');
  }
}
</script>

<style lang="css">
image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>
