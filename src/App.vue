<template>
  <div id="app" class="">
    <transition name='bounce-in-out'>
    <customheader></customheader>
      </transition>
    <div class="main-wrapper">
    <div class="main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    </div>
    <player></player>
  </div>

</template>

<script type="es6">
import customheader from './components/header/header'
import player from './components/Player'

export default {
    name: 'app',
    components: {
    customheader,
    player
  }
}
</script>
