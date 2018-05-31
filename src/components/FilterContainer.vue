<template>
  <div>
    <div class="row">
      <div class="col-6">
        <h4>Filters</h4>
      </div>

      <div class="col-6">
        <button
          id="reset-filter-btn"
          class="btn btn-sm btn-primary float-right"
          :style="{ 'background-color': primaryColor, 'border-color':primaryColor}"
          @click="resetFilters">
          Reset
        </button>
      </div>
    </div>

    <div class="row mb-4">
      <div class="col">
        <span id="total-number-of-samples" class="small text-secondary">{{totalNumberOfSamples}} samples</span>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div v-for="filter in filters" :key="filter.id">
          <filter-component :filter="filter" class="mb-1"></filter-component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import FilterComponent from './filters/FilterComponent'

  const {backgroundColor, primaryColor} = window.__INITIAL_STATE__ || {}

  export default {
    name: 'FilterContainer',
    data () {
      return {
        backgroundColor: backgroundColor,
        primaryColor: primaryColor
      }
    },
    methods: {
      resetFilters () {
        this.$store.commit('RESET_ALL_ACTIVE_FILTERS')
      }
    },
    computed: {
      filters () {
        return this.$store.state.filters
      },
      totalNumberOfSamples () {
        return this.$store.state.totalNumberOfSamples
      }
    },
    components: {
      FilterComponent
    }
  }
</script>
