<template>
  <div class="chart-container">
    <div class="total-number-of-samples-container text-right">
      Matching samples: <span class="badge badge-secondary">{{totalNumberOfSamples}}</span>
      <hr/>
    </div>

    <!-- Nav tabs -->
    <ul class="nav nav-tabs" role="tablist">
      <li class="nav-item" v-for="(chart, index) in charts">
        <a class="nav-link"
           :class="{'active': index === 0}"
           :id="chart.id + '-tab'"
           data-toggle="tab"
           :href="'#' + chart.id"
           role="tab" :aria-controls="chart.id"
           :aria-selected="index === 0"
           @click="setSelectedChartId(chart.id)">

          {{ chart.title }}

        </a>

      </li>
    </ul>

    <!-- Tab panes -->
    <div class="tab-content">
      <div v-for="(chart, index) in charts"
           class="tab-pane"
           :class="{'active': index === 0}"
           :id="chart.id"
           role="tabpanel"
           :aria-labelledby="chart.id + '-tab'"
           :ref="chart.id">

        <div class="my-3 chart-component py-2">
          <div class="row">
            <div class="col-12">
              <chart-component v-if="chart.id === selectedChartId"
                               :type="chart.type"
                               :title="chart.title"
                               :dataCollection="getDataCollection(chart)"
                               :key="chart.id">
              </chart-component>
            </div>
          </div>
        </div>

      </div>

      <div class="row mx-0 my-3 chart-component py-2">
        <div v-for="chart in inlineCharts" class="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
          <chart-component
            :type="chart.type"
            :title="chart.title"
            :dataCollection="getDataCollection(chart)"
            :key="chart.id">
          </chart-component>
        </div>
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
    data () {
      return {
        selectedChartId: null
      }
    },
    methods: {
      getDataCollection (chart) {
        // Create a deep copy
        // Prevents vuex outside store mutations
        return JSON.parse(JSON.stringify(chart.dataCollection))
      },

      setSelectedChartId (chartId) {
        this.selectedChartId = chartId
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
    created () {
      this.selectedChartId = this.charts[0].id
    },
    components: {
      ChartComponent
    }
  }
</script>
