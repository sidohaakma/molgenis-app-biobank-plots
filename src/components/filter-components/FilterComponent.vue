<template>
  <div class="filter-component">
    <h5>{{filter.label}}</h5>

    <template v-if="filter.filterType === 'dropdown'">
      <dropdown-filter-component
        :filter="filter.id"
        :onOptionSelect="onOptionSelect"
        :options="filter.options">
      </dropdown-filter-component>
    </template>

    <template v-if="filter.filterType === 'range'">
      <range-filter-component
        :filter="filter.id"
        :onOptionSelect="onOptionSelect">
      </range-filter-component>
    </template>

    <template v-if="filter.filterType === 'checkbox-row'">
      <checkbox-filter-component
        :filter="filter.id"
        :onOptionSelect="onOptionSelect"
        :options="filter.options"
        orientation="horizontal">
      </checkbox-filter-component>
    </template>

    <template v-if="filter.filterType === 'checkbox-list'">
      <checkbox-filter-component
        :filter="filter.id"
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
    methods: {
      onOptionSelect (filter, value) {
        console.log('filter', filter)
        console.log('value', value)
      }
    },
    components: {
      CheckboxFilterComponent,
      DropdownFilterComponent,
      RangeFilterComponent
    }
  }
</script>
