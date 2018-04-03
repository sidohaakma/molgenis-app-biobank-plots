<template>
  <div class="chart-component-container">
    <div class="horizontal-bar-chart-component-container" v-if="type === 'HorizontalBarChart'">
      <horizontal-bar-chart-component
        :chartData="chartData"
        :chartLabels="chartLabels"
        :chartTitle="chartTitle">
      </horizontal-bar-chart-component>
    </div>

    <div class="column-chart-component" v-if="type === 'ColumnChart'">
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
      title: {
        type: String,
        required: false
      },
      type: {
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
      chartData () {
        // Create a deep copy
        // Prevents vuex outside store mutations
        return JSON.parse(JSON.stringify(this.data))
      },
      chartLabels () {
        // Create a deep copy
        // Prevents vuex outside store mutations
        return JSON.parse(JSON.stringify(this.labels))
      },
      chartTitle () {
        return this.title
      }
    },
    components: {
      ColumnChartComponent,
      HorizontalBarChartComponent
    }
  }
</script>
