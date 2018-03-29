<template>
  <horizontal-bar-chart-component v-if="chartType === 'BarChart'"
  :chartLabels="chartLabels"
  :chartData="chartData">
  </horizontal-bar-chart-component>
</template>

<script>
  import HorizontalBarChartComponent from './HorizontalBarChartComponent'

  export default {
    name: 'ChartComponent',
    props: {
      chartType: {
        type: String,
        required: false,
        default: 'LineChart'
      },
      data: {
        type: Array,
        required: false,
        default: () => []
      },
      labels: {
        type: Array,
        required: true
      },
      options: {
        type: Object,
        required: false,
        default: () => ({})
      }
    },
    computed: {
      chartLabels () {
        return this.labels
      },
      chartData () {
        return this.data
      }
    },
    components: {
      HorizontalBarChartComponent
    }
  }
</script>
