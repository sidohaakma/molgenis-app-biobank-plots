<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">Number of Samples per Biobank</h4>
      <h6 class="card-subtitle mb-2">Total number of samples: {{numberOfSamples}}</h6>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'plot-container',
    data () {
      return {
        numberOfSamples: 'xxxx'
      }
    }
  }
</script>
