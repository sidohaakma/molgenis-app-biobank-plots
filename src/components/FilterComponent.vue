<template>
  <div class="filter-item">
    <h5>{{filter.label}}</h5>

    <template v-if="filter.filterType === 'dropdown'">
      <dropdown-filter-component
        :onOptionSelect="onOptionSelect"
        :initialSelectedOption="selectedBiobank"
        :options="filter.options">
      </dropdown-filter-component>
    </template>

    <template v-if="filter.filterType === 'range'">
      <range-filter-component></range-filter-component>
    </template>
  </div>
</template>

<script>
  import DropdownFilterComponent from './DropdownFilterComponent'
  import RangeFilterComponent from './RangeFilterComponent'

  export default {
    name: 'FilterComponent',
    props: ['filter'],
    methods: {
      onOptionSelect (value) {
        this.$store.commit('SET_SELECTED_BIOBANK', value)
      }
    },
    computed: {
      selectedBiobank () {
        return this.$store.state.selectedBiobank
      }
    },
    components: {
      DropdownFilterComponent,
      RangeFilterComponent
    }
  }
</script>
