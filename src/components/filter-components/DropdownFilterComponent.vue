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
    props: ['options', 'initialSelectedOption', 'onOptionSelect'],
    data () {
      return {
        selectedOption: this.initialSelectedOption || 'no-option-pre-select'
      }
    },
    watch: {
      selectedOption (newValue, oldValue) {
        this.onOptionSelect(newValue)
      }
    }
  }
</script>
