<template>
  <div id="application-container">
    <div class="container">
      <img src="./img/bbmri-header.png" alt="bbmri header" id="bbmri-header" class="mb-4"/>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #bbmri-header {
    width: 100%;
  }

  h4, h5, a {
    color: #184B8A;
  }
</style>
