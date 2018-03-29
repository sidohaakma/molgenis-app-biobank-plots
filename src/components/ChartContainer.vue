<template>
  <div class="chart-container">
    <div v-for="chart in chartData" class="mb-3 chart-component py-3">
      <chart-component
        :chartType="chart.chartType"
        :chartTitle="chart.chartTitle"
        :data="chart.data"
        :labels="chart.labels">
      </chart-component>
    </div>
  </div>
</template>

<style scoped>
  .chart-component {
    box-shadow: 4px 4px 7px 4px #d7dae0;
    border: none;
  }
</style>

<script>
  import ChartComponent from './chart-components/ChartComponent'

  export default {
    name: 'ChartContainer',
    computed: {
      chartData () {
        return this.$store.state.chartData
      }
    },
    components: {
      ChartComponent
    }
  }
</script>
