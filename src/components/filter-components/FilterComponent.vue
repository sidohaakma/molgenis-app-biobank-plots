<template>
  <div class="filter-component pt-0">
    <h5>{{filter.label}}</h5>

    <template v-if="filter.filterType === 'dropdown'">
      <dropdown-filter-component
        :filter="filter.id"
        :initialValue="activeFilterValue"
        :onOptionSelect="onOptionSelect"
        :options="filter.options">
      </dropdown-filter-component>
    </template>

    <template v-if="filter.filterType === 'range'">
      <range-filter-component
        :filter="filter.id"
        :initialValue="activeFilterValue"
        :onOptionSelect="onOptionSelect">
      </range-filter-component>
    </template>

    <template v-if="filter.filterType === 'checkbox-row'">
      <checkbox-filter-component
        :filter="filter.id"
        :initialValue="activeFilterValue"
        :onOptionSelect="onOptionSelect"
        :options="filter.options"
        orientation="horizontal">
      </checkbox-filter-component>
    </template>

    <template v-if="filter.filterType === 'checkbox-list'">
      <checkbox-filter-component
        :filter="filter.id"
        :initialValue="activeFilterValue"
        :onOptionSelect="onOptionSelect"
        :options="filter.options">
      </checkbox-filter-component>
    </template>
  </div>
</template>

<script>
  import CheckboxFilterComponent from './CheckboxFilterComponent'
  import DropdownFilterComponent from './DropdownFilterComponent'
  import RangeFilterComponent from './RangeFilterComponent'

  export default {
    name: 'FilterComponent',
    props: ['filter'],
    computed: {
      activeFilterValue () {
        return this.$store.getters.getActiveFilterValueById(this.filter.id)
      }
    },
    methods: {
      onOptionSelect (filter, value) {
        this.$store.commit('UPDATE_ACTIVE_FILTERS', {[filter]: value})
      }
    },
    components: {
      CheckboxFilterComponent,
      DropdownFilterComponent,
      RangeFilterComponent
    }
  }
</script>
