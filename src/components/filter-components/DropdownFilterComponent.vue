<template>
  <div class="dropdown-filter-component">
    <div class="form-group">
      <select class="form-control" v-model="selectedOption">
        <!-- Include a pre-select option to make select work in safari -->
        <option value="no-option-pre-select" disabled>Please select an option...</option>
        <option v-for="option in options" :value="option.value">
          {{option.label}}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DropdownFilterComponent',
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
      }
    },
    data () {
      return {
        selectedOption: ''
      }
    },
    watch: {
      selectedOption (value) {
        this.onOptionSelect(this.filter, value)
      }
    }
  }
</script>
