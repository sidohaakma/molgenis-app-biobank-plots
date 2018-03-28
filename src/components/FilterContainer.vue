<template>
  <div class="card">
    <div class="card-header">
      <div class="row">
        <div class="col-6">
          <h4>Filters</h4>
        </div>

        <div class="col-6">
          <button
            id="reset-filter-btn"
            class="btn btn-sm btn-primary float-right"
            @click="resetFilters">
            Reset
          </button>
        </div>
      </div>
    </div>

    <div class="card-body">
      <div v-for="filter in filterComponents" class="mb-4" :key="filter.id">
        <filter-component :filter="filter"/>
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
        this.$store.commit('RESET_ALL_ACTIVE_FILTERS')
      }
    },
    computed: {
      filterComponents () {
        return this.$store.state.filterComponents
      }
    },
    components: {
      FilterComponent
    }
  }
</script>
