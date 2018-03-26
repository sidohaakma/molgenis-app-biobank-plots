<template>
  <div id="app">
    <img src="./assets/logo.png">
    <BiobankCounts/>
  </div>
</template>

<script>
import BiobankCounts from './components/BiobankCounts'

export default {
  name: 'App',
  components: {
    BiobankCounts
  }
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
