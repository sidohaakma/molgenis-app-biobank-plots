<template>
  <div class="range-filter-component">
    <div class="form-group">
      <label>Minimal age</label>
      <input
        type="range"
        class="form-control"
        list="range-filter-ticks"
        :min="min"
        :max="max"
        :step="steps"
        v-model="minValue">
    </div>

    <div class="form-group">
      <label>Maximum age</label>
      <input
        type="range"
        class="form-control"
        list="range-filter-ticks"
        :min="min"
        :max="max"
        :step="steps"
        v-model="maxValue">
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
    props: ['initialMinValue', 'initialMaxValue', 'initialMin', 'initialMax', 'initialSteps'],
    data () {
      return {
        minValue: this.initialMinValue || 0,
        maxValue: this.initialMaxValue || 100,
        min: this.initialMin || 0,
        max: this.initialMax || 100,
        steps: this.initialSteps || 1
      }
    },
    computed: {
      ticks () {
        return [this.min, this.max]
      }
    }
  }
</script>
