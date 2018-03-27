<template>
  <div class="range-filter-component">
    <div class="form-group">
      <label>Minimal age</label>
      <input
        type="range"
        class="form-control"
        list="range-filter-ticks"
        :min="minRange"
        :max="maxRange"
        :step="steps"
        v-model.lazy="minValue">
    </div>

    <div class="form-group">
      <label>Maximum age</label>
      <input
        type="range"
        class="form-control"
        list="range-filter-ticks"
        :min="minRange"
        :max="maxRange"
        :step="steps"
        v-model.lazy="maxValue">
    </div>

    <datalist id="range-filter-ticks">
      <option v-for="tick in ticks" :value="tick" :label="tick"></option>
    </datalist>

    From {{minValue}} to {{maxValue}}
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
      minRange: {
        type: Number,
        required: false,
        default: 0
      },
      maxRange: {
        type: Number,
        required: false,
        default: 100
      },
      steps: {
        type: Number,
        required: false,
        default: 1
      },
      onOptionSelect: {
        type: Function,
        required: true
      }
    },
    data () {
      return {
        minValue: 0,
        maxValue: 100
      }
    },
    computed: {
      ticks () {
        return [this.minRange, this.maxRange]
      }
    },
    watch: {
      minValue (value) {
        this.onOptionSelect(this.filter, value)
      },

      maxValue (value) {
        this.onOptionSelect(this.filter, value)
      }
    }
  }
</script>
