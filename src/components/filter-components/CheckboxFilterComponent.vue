<template>
  <div class="checkbox-filter-component">
    <div class="form-group">
      <template v-for="option in options">
        <div class="form-check" :class="{'form-check-inline': orientation === 'horizontal'}">
          <input class="form-check-input" :value="option.value" type="checkbox" v-model="selectedOptions">
          <label class="form-check-label">{{option.label}}</label>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CheckboxFilterComponent',
    props: {
      filter: {
        type: String,
        required: true
      },
      options: {
        type: Array,
        required: true
      },
      onOptionSelect: {
        type: Function,
        required: true
      },
      orientation: {
        type: String,
        required: false,
        default: 'vertical'
      }
    },
    data () {
      return {
        selectedOptions: []
      }
    },
    watch: {
      selectedOptions (value) {
        this.onOptionSelect(this.filter, value)
      }
    }
  }
</script>
