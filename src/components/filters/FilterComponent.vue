<template>
  <div class="filter-component pt-0">
    <h5>{{filter.label}}</h5>

    <template v-if="filter.filterType === 'dropdown'">
      <dropdown-filter-component
        :filter="filter.id"
        :options="filter.options"
        @optionSelected="handleOptionSelect">
      </dropdown-filter-component>
    </template>

    <template v-if="filter.filterType === 'range'">
      <range-filter-component
        :filter="filter.id"
        :initialValue="[0, 120]"
        :range="filter.options"
        :primaryColor="primaryColor"
        :secondaryColor="secondaryColor"
        @optionSelected="handleOptionSelect">
      </range-filter-component>
    </template>

    <template v-if="filter.filterType === 'checkbox-row'">
      <checkbox-filter-component
        :filter="filter.id"
        :options="filter.options"
        orientation="horizontal"
        @optionSelected="handleOptionSelect">
      </checkbox-filter-component>
    </template>

    <template v-if="filter.filterType === 'checkbox-list'">
      <checkbox-filter-component
        :filter="filter.id"
        :options="filter.options"
        @optionSelected="handleOptionSelect">
      </checkbox-filter-component>
    </template>
  </div>
</template>

<script>
  import CheckboxFilterComponent from './CheckboxFilterComponent'
  import DropdownFilterComponent from './DropdownFilterComponent'
  import RangeFilterComponent from './RangeFilterComponent'

  const {primaryColor, secondaryColor, tertiaryColor} = window.__INITIAL_STATE__ || {}

  export default {
    name: 'FilterComponent',
    props: ['filter'],
    methods: {
      handleOptionSelect (filter, value) {
        this.$store.commit('UPDATE_ACTIVE_FILTERS', {[filter]: value})
      }
    },
    data () {
      return {
        primaryColor: primaryColor,
        secondaryColor: secondaryColor,
        tertiaryColor: tertiaryColor
      }
    },
    components: {
      CheckboxFilterComponent,
      DropdownFilterComponent,
      RangeFilterComponent
    }
  }
</script>
