<template lang="html">
  <mt-navbar v-model="selected">
    <mt-tab-item><router-link to="/index">个性推荐</router-link></mt-tab-item>
    <mt-tab-item><router-link to="/singers">歌手</router-link></mt-tab-item>
    <mt-tab-item><router-link to="/radio">主播电台</router-link></mt-tab-item>
    <mt-tab-item><router-link to="/my">我的音乐</router-link></mt-tab-item>
  </mt-navbar>
</template>

<script type="es6">
export default {

}
</script>

<style lang="css">
</style>
