<template>
  <div class="row">

    <!-- Filter container -->
    <div class="col-3">
      <filter-container/>
    </div>

    <div class="col-9">
      <plot-container></plot-container>
    </div>
  </div>
</template>

<script>
  import FilterContainer from '../components/FilterContainer'
  import PlotContainer from '../components/PlotContainer'

  export default {
    name: 'BiobankAggregatesContainer',
    created () {
      this.$store.dispatch('GET_SUBJECT_DATA')
    },
    components: {
      FilterContainer,
      PlotContainer
    }
  }
</script>
