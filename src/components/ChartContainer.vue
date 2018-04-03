<template>
  <div class="chart-container">
    <div v-for="chart in charts" class="mb-3 chart-component py-3">
      <chart-component
        :type="chart.type"
        :title="chart.title"
        :data="chart.data"
        :labels="chart.labels"
        :key="chart.id">
      </chart-component>
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
  import ChartComponent from './chart-components/ChartComponent'

  export default {
    name: 'ChartContainer',
    computed: {
      charts () {
        return this.$store.state.charts
      }
    },
    components: {
      ChartComponent
    }
  }
</script>
