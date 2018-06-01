<template>
  <div id="app">
    <img src="./assets/logo.png">
    123
    <!-- <my-header></my-header>
    <my-header></my-header> -->
  </div>
</template>

<script>
import MyHeader from '@/components/myHeader'
export default {
  name: 'App',
  components: {
      MyHeader,
  },
}
</script>

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
