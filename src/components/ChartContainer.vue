<template>
  <div class="chart-container">
    <template v-for="attribute in attributeChartData">
      <chart-component
        :data="attribute.data"
        :chartType="attribute.chartType"
        :labels="attribute.labels"
        :options="attribute.options">
      </chart-component>
    </template>
  </div>
</template>

<style scoped>
  .chart-container {
    box-shadow: 5px 5px 7px 5px #d7dae0;
    border: none;
  }
</style>

<script>
  import Vue from 'vue'
  import VueCharts from 'vue-charts'

  import ChartComponent from './chart-components/ChartComponent'

  Vue.use(VueCharts)
  export default {
    name: 'ChartContainer',
    data () {
      return {
        data: [
          ['2004', 1],
          ['2005', 2],
          ['2006', 3],
          ['2007', 4]
        ],
        labels: [
          {'type': 'string', 'label': 'Year'},
          {'type': 'number', 'label': 'Costs'}
        ]
      }
    },
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
