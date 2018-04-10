<template>
  <div class="chart-container">
    <div class="total-number-of-samples-container text-right">
      Total number of samples: <span class="badge badge-secondary">{{totalNumberOfSamples}}</span>
      <hr/>
    </div>
    <div v-for="chart in charts" class="mb-3 chart-component py-3">
      <div class="row">
        <div class="col-12">
          <chart-component
            :type="chart.type"
            :title="chart.title"
            :dataCollection="getDataCollection(chart)"
            :key="chart.id">
          </chart-component>
        </div>
      </div>
    </div>

    <div class="row mx-0 mb-3 chart-component py-3">
      <div v-for="chart in inlineCharts" class="col-md-6">
        <chart-component
          :type="chart.type"
          :title="chart.title"
          :dataCollection="getDataCollection(chart)"
          :key="chart.id">
        </chart-component>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .chart-component {
    box-shadow: 3px 3px 7px 3px #d7dae0;
    border: none;
  }
</style>

<script>
  import ChartComponent from './charts/ChartComponent'

  export default {
    name: 'ChartContainer',
    methods: {
      getDataCollection (chart) {
        // Create a deep copy
        // Prevents vuex outside store mutations
        return JSON.parse(JSON.stringify(chart.dataCollection))
      }
    },
    computed: {
      charts () {
        return this.$store.getters.getCharts
      },
      inlineCharts () {
        return this.$store.getters.getInlineCharts
      },
      totalNumberOfSamples () {
        return this.$store.state.totalNumberOfSamples
      }
    },
    components: {
      ChartComponent
    }
  }
</script>
