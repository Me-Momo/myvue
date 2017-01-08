<style>

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

</style>

<template>

<div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
</div>

</template>

<script>

// App作为父组件，建议App中不写业务逻辑，作为应用的layout，
// 根据需求，做一个布局。比如：Header/Container/Sidebar。

import Hello from './components/Hello'

export default {
    name: 'app',
    components: {
        Hello
    }
}

</script>
