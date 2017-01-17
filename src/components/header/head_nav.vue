<template lang="html">
  <mt-navbar v-model="selected">
    <mt-tab-item><router-link to="/index">个性推荐</router-link></mt-tab-item>
    <mt-tab-item><router-link to="/plistInfo">歌单</router-link></mt-tab-item>
    <mt-tab-item><router-link to="/radio">主播电台</router-link></mt-tab-item>
    <mt-tab-item><router-link to="/index">个性推荐</router-link></mt-tab-item>
  </mt-navbar>
</template>

<script type="es6">
  import { Navbar, TabItem } from 'mint-ui'
export default {

}
</script>

<style lang="css">
</style>
