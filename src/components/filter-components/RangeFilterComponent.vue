<template>
  <div class="range-filter-component">
    <div class="form-group">
      <label>Minimal age</label>
      <input
        type="range"
        class="form-control"
        list="range-filter-ticks"
        :min="minRange"
        :max="value.max"
        :step="steps"
        v-model.lazy="value.min">
    </div>

    <div class="form-group">
      <label>Maximum age</label>
      <input
        type="range"
        class="form-control"
        list="range-filter-ticks"
        :min="value.min"
        :max="maxRange"
        :step="steps"
        v-model.lazy="value.max">
    </div>

    <datalist id="range-filter-ticks">
      <option v-for="tick in ticks" :value="tick" :label="tick"></option>
    </datalist>

    {{range}}
  </div>
</template>

<script>
  export default {
    name: 'RangeFilterComponent',
    props: {
      filter: {
        type: String,
        required: true
      },
      initialValue: {
        type: Object,
        required: false,
        default: () => ({min: 0, max: 100})
      },
      maxRange: {
        type: Number,
        required: false,
        default: 100
      },
      minRange: {
        type: Number,
        required: false,
        default: 0
      },
      steps: {
        type: Number,
        required: false,
        default: 1
      },
      ticks: {
        type: Array,
        required: false,
        default: () => [0, 100]
      }
    },
    data () {
      return {
        value: this.initialValue
      }
    },
    computed: {
      range () {
        return 'Between ' + this.value.min + ' and ' + this.value.max + ' years old'
      }
    },
    watch: {
      value: {
        handler (value) {
          this.$emit('optionSelected', this.filter, value)
        },
        deep: true
      },

      initialValue: {
        handler (value) {
          this.value = value
        },
        deep: true
      }
    }
  }
</script>
