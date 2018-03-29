<template>
  <div class="horizontal-bar-chart-component-container" v-if="chartType === 'BarChart'">
    <horizontal-bar-chart-component
      :chartData="chartData"
      :chartLabels="chartLabels"
      :chartTitle="chartTitle">
    </horizontal-bar-chart-component>
  </div>

</template>

<script>
  import HorizontalBarChartComponent from './HorizontalBarChartComponent'

  export default {
    name: 'ChartComponent',
    props: {
      chartTitle: {
        type: String,
        required: false
      },
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
