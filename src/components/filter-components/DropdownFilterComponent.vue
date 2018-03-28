<template>
  <div class="dropdown-filter-component">
    <div class="form-group">
      <select class="form-control" v-model="value">
        <!-- Include a pre-select option to make select work in safari -->
        <option value="no-option-pre-select" selected disabled>Please select an option...</option>
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
      initialValue: {
        type: String,
        required: false,
        default: ''

      },
      onOptionSelect: {
        type: Function,
        required: true
      },
      options: {
        type: Array,
        required: true
      }
    },
    data () {
      return {
        value: this.initialValue
      }
    },
    watch: {
      value (value) {
        this.onOptionSelect(this.filter, value)
      },

      initialValue (value) {
        this.value = value
      }
    }
  }
</script>
