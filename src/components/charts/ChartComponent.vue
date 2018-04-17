<template>
  <div class="chart-component-container">
    <div class="column-chart-component-container" v-if="type === 'ColumnChart'">
      <column-chart-component
        :chartData="chartData"
        :chartTitle="chartTitle">
      </column-chart-component>
    </div>

    <div class="horizontal-bar-chart-component-container" v-if="type === 'HorizontalBarChart'">
      <horizontal-bar-chart-component
        :chartData="chartData"
        :chartTitle="chartTitle">
      </horizontal-bar-chart-component>
    </div>

    <div class="multi-column-chart-component-container" v-if="type === 'MultiColumnChart'">
      <column-chart-component
        :chartData="chartData"
        :chartTitle="chartTitle">
      </column-chart-component>
    </div>

    <div class="vertical-bar-chart-component-container" v-if="type === 'VerticalBarChart'">
      <vertical-bar-chart-component
        :chartData="chartData"
        :chartTitle="chartTitle">
      </vertical-bar-chart-component>
    </div>
  </div>
</template>

<script>
  import ColumnChartComponent from './ColumnChartComponent'
  import HorizontalBarChartComponent from './HorizontalBarChartComponent'
  import VerticalBarChartComponent from './VerticalBarChartComponent'

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
      dataCollection: {
        type: Object,
        required: true
      }
    },
    computed: {
      chartData () {
        return this.dataCollection
      },
      chartTitle () {
        return this.title
      }
    },
    components: {
      ColumnChartComponent,
      HorizontalBarChartComponent,
      VerticalBarChartComponent
    }
  }
</script>
