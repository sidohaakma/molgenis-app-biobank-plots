<template>
  <div class="chart-container">
    <div v-for="attribute in attributeChartData" class="mb-2 chart-component py-3">
      <chart-component
        :data="attribute.data"
        :chartType="attribute.chartType"
        :labels="attribute.labels"
        :options="attribute.options">
      </chart-component>
    </div>
  </div>
</template>

<style scoped>
  .chart-component {
    box-shadow: -1px 6px 7px #d7dae0;
    border: none;
  }
</style>

<script>
  import ChartComponent from './chart-components/ChartComponent'

  export default {
    name: 'ChartContainer',
    computed: {
      attributeChartData () {
        return this.$store.state.attributeChartData
      }
    },
    components: {
      ChartComponent
    }
  }
</script>
