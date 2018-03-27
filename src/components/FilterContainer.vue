<template>
  <div class="card">
    <div class="card-header">
      <div class="row">
        <div class="col-6">
          <h4>Filters</h4>
        </div>

        <div class="col-6">
          <button id="reset-filter-btn" class="btn btn-sm btn-primary float-right" @click="resetFilters">
            Reset
          </button>
        </div>
      </div>
    </div>

    <div class="card-body">
      <div v-for="filter in filters" class="mb-4">
        <filter-component
          :filter="filter"
          :key="filter.id">
        </filter-component>
      </div>
    </div>
  </div>
</template>

<script>
  import FilterComponent from './filter-components/FilterComponent'

  export default {
    name: 'FilterContainer',
    methods: {
      resetFilters () {
        // go go reset filters
      }
    },
    computed: {
      filters () {
        return this.$store.state.filters
      }
    },
    components: {
      FilterComponent
    }
  }
</script>
