<template>
  <div class="row">
    <template v-if="loading">
      <div class="col-12">
        <div class="spinner-container text-muted d-flex flex-column justify-content-center align-items-center">
          <i class="fa fa-spinner fa-spin fa-5x"></i>
          <hr>
          <p>Loading charts and data...</p>
        </div>
      </div>
    </template>

    <template v-else>
      <div class="col-3">
        <filter-container/>
      </div>

      <div class="col-9">
        <chart-container/>
      </div>
    </template>
  </div>
</template>

<style>
  /* Centers the loading spinner */
  .spinner-container {
    height: 80vh;
  }
</style>

<script>
  import ChartContainer from '../components/ChartContainer'
  import FilterContainer from '../components/FilterContainer'

  export default {
    name: 'BiobankAggregatesContainer',
    computed: {
      activeFilters () {
        return this.$store.state.activeFilters
      },
      loading () {
        return this.$store.state.loading
      }
    },
    created () {
      this.$store.dispatch('GET_SUBJECT_METADATA')
      this.$store.dispatch('FETCH_SUBJECT_AGGREGATES')
    },
    watch: {
      activeFilters () {
        this.$store.dispatch('FETCH_SUBJECT_AGGREGATES')
      }
    },
    components: {
      ChartContainer,
      FilterContainer
    }
  }
</script>
