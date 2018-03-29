<template>
  <vue-chart
    :chartType="chartType"
    :columns="columns"
    :rows="rows"
    :options="options">
  </vue-chart>
</template>

<script>
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
      columns () {
        return this.labels
      },
      rows () {
        return this.data
      }
    }
  }
</script>
