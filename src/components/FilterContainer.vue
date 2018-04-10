<template>
  <div class="filter-container p-4 mb-5" :style="{ 'background-color': backgroundColor }">
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

    <hr>

    <div class="row">
      <div class="col-12">
        <div v-for="filter in filters" :key="filter.id">
          <filter-component :filter="filter"/>
          <hr class="mt-4">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .filter-container {
    box-shadow: 5px 5px 7px #d7dae0;
    border: none;
  }
</style>

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
      }
    },
    components: {
      FilterComponent
    }
  }
</script>
