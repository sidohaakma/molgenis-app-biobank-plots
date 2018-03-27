<template>
  <div class="card">
    <div class="card-header">
      <h4>Filters</h4>
    </div>
    <div class="card-body">
      <p v-for="attribute in filters">
        <span v-if="attribute.fieldType === 'CATEGORICAL'">
          <categorical-filter :label="attribute.label" :id="attribute.name" :optionsRef="attribute.refEntity.href"></categorical-filter>
        </span>
        <span v-else>{{attribute.name}}</span>
      </p>
    </div>
  </div>
</template>

<script>
  import BooleanFilter from './BooleanFilter'
  import CategoricalFilter from './CategoricalFilter'

  export default {
    name: 'filters',
    components: {
      CategoricalFilter,
      BooleanFilter
    },
    props: [
      'filters'
    ]
  }
</script>
