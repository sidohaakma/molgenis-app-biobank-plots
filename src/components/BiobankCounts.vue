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
  import { GET_BIOBANKS, GET_FILTER_DATA } from '../store/actions'
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
      this.$store.dispatch(GET_BIOBANKS)
      this.$store.dispatch(GET_FILTER_DATA)
    }

  }
</script>
