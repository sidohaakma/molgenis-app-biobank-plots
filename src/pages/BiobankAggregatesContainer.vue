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
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
        <div class="toggle-filter-container d-lg-none">
          <div class="col-xs-12 col-sm-12 col-md-12 mb-2 pr-0 text-right">
            <button class="btn btn-secondary" type="button" data-toggle="collapse" data-target="#filter-container"
                    aria-expanded="true" aria-controls="filter-container">
              <i class="fa fa-expand"></i>
            </button>
          </div>
        </div>

        <div id="filter-container" class="d-lg-none filter-container p-4 mb-5 collapse show"
             :style="{ 'background-color': backgroundColor }">
          <filter-container/>
        </div>

        <div class="d-none d-lg-block filter-container p-4 mb-5" :style="{ 'background-color': backgroundColor }">
          <filter-container/>
        </div>
      </div>

      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-9 col-xl-9">
        <chart-container/>
      </div>
    </template>
  </div>
</template>

<style>
  .filter-container {
    box-shadow: 5px 5px 7px #d7dae0;
    border: none;
  }

  /* Centers the loading spinner */
  .spinner-container {
    height: 80vh;
  }
</style>

<script>
  import ChartContainer from '../components/ChartContainer'
  import FilterContainer from '../components/FilterContainer'

  const {backgroundColor} = window.__INITIAL_STATE__ || {}

  export default {
    name: 'BiobankAggregatesContainer',
    data () {
      return {
        backgroundColor: backgroundColor
      }
    },
    computed: {
      activeFilters () {
        return this.$store.state.activeFilters
      },
      loading () {
        return this.$store.state.loading
      }
    },
    created () {
      this.$store.dispatch('FETCH_METADATA')
      this.$store.dispatch('FETCH_AGGREGATES')
    },
    watch: {
      activeFilters () {
        this.$store.dispatch('FETCH_AGGREGATES')
      }
    },
    components: {
      ChartContainer,
      FilterContainer
    }
  }
</script>
