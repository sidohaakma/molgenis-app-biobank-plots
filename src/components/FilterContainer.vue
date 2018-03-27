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
      <template v-for="filter in filters">
        <filter-component
          :filter="filter"
          :key="filter.id">
        </filter-component>
        <hr>
      </template>
      <!--<p v-for="attribute in filters">-->
      <!--<span v-if="attribute.fieldType === 'CATEGORICAL'">-->
      <!--<categorical-filter :label="attribute.label" :id="attribute.name"-->
      <!--:optionsRef="attribute.refEntity.href"></categorical-filter>-->
      <!--</span>-->
      <!--<span v-else>{{attribute.name}}</span>-->
      <!--</p>-->
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
