<template>
  <div id="app" class="">
    <customheader></customheader>
    <div class="main-wrapper">
    <div class="main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    </div>
    <playlist></playlist>
    <player></player>
  </div>
</template>

<script type="es6">
import customheader from './components/header/header'
import playlist from './components/Playlist'
import player from './components/Player'

export default {
    name: 'app',
    components: {
    customheader,
    playlist,
    player
  }
}
</script>
