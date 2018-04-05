<template>
  <div class="checkbox-filter-component">
    <div class="form-group">
      <template v-for="(option, index) in options">
        <div class="form-check" :class="{'form-check-inline': orientation === 'horizontal'}">
          <input class="form-check-input" :id="option.id + '-' + index" :value="option.value" type="checkbox" v-model="value">
          <label class="form-check-label" :for="option.id + '-' + index">{{option.label}}</label>
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
      initialValue: {
        type: Array,
        required: false,
        default: () => []

      },
      options: {
        type: Array,
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
        value: this.initialValue
      }
    },
    watch: {
      value (value) {
        this.$emit('optionSelected', this.filter, value)
      }
    }
  }
</script>
