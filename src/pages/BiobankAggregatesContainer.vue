<template>
  <div class="row">
    <div class="col-3">
      <filter-container/>
    </div>

    <div class="col-9">
      <chart-container/>
    </div>
  </div>
</template>

<script>
  import ChartContainer from '../components/ChartContainer'
  import FilterContainer from '../components/FilterContainer'

  export default {
    name: 'BiobankAggregatesContainer',
    computed: {
      activeFilters () {
        return this.$store.state.activeFilters
      }
    },
    created () {
      this.$store.dispatch('GET_SUBJECT_METADATA')
      this.$store.dispatch('GET_SUBJECT_AGGREGATION')
    },
    watch: {
      activeFilters () {
        this.$store.dispatch('UPDATE_SUBJECT_AGGREGATION')
      }
    },
    components: {
      ChartContainer,
      FilterContainer
    }
  }
</script>
