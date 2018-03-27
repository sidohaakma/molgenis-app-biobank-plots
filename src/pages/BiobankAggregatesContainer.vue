<template>
  <div class="container">

    <div class="row">
      <div class="col-3">
        <filters :filters="filters"></filters>
      </div>
      <div class="col-9">
        <plot-container></plot-container>
      </div>
    </div>

  </div>
</template>

<script>
  import Filters from './Filters'
  import PlotContainer from './PlotContainer'

  export default {
    name: 'BiobankCounts',
    components: {
      Filters,
      PlotContainer
    },
    computed: {
      filters () {
        return this.$store.state.filters
      }
    },
    created () {
    }
  }
</script>
