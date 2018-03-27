<template>
  <div class="filter-item">
    <h5>{{filter.label}}</h5>
    <dropdown-filter-component
      v-if="filter.filterType === 'dropdown'"
      :options="filter.options">
    </dropdown-filter-component>
  </div>
</template>

<script>
  import DropdownFilterComponent from './DropdownFilterComponent'

  export default {
    name: 'FilterComponent',
    props: ['filter'],
    components: {
      DropdownFilterComponent
    }
  }
</script>
