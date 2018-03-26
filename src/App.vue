<template>
  <div id="app">
    <img src="./assets/img/bbmri-header.png" alt="bbmri header" id="bbmri-header"/>
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
  body {
    background-color: #E1E6EC;
  }

  #bbmri-header{
    width: 100%;
  }
  h4 {
    color: #184B8A;
  }
  .card-subtitle {
    color: #BDC8DD;
  }
  legend{
    color: #184B8A;
  }
</style>
