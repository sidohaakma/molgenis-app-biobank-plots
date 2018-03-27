<template>
  <div id="application-container">
    <img src="./assets/img/bbmri-header.png" alt="bbmri header" id="bbmri-header"/>
    <div class="container">
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
  body {
    background-color: #E1E6EC;
  }

  #bbmri-header{
    width: 100%;
  }
  h4, h5 {
    color: #184B8A;
  }
  .card-subtitle {
    color: #BDC8DD;
  }
</style>
