<template>
  <div class="chart-component-container">
    <div class="horizontal-bar-chart-component-container" v-if="chartType === 'HorizontalBarChart'">
      <horizontal-bar-chart-component
        :chartData="chartData"
        :chartLabels="chartLabels"
        :chartTitle="chartTitle">
      </horizontal-bar-chart-component>
    </div>

    <div class="column-chart-component" v-if="chartType === 'ColumnChart'">
      <column-chart-component
        :chartData="chartData"
        :chartLabels="chartLabels"
        :chartTitle="chartTitle">
      </column-chart-component>
    </div>
  </div>
</template>

<script>
  import ColumnChartComponent from './ColumnChartComponent'
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
      ColumnChartComponent,
      HorizontalBarChartComponent
    }
  }
</script>
