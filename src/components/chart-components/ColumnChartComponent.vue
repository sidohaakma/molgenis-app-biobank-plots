<script>
  import { Bar, mixins } from 'vue-chartjs'

  // Use reactiveProp to automatically watch a 'chartData' property
  const {reactiveProp} = mixins

  export default {
    name: 'ColumnChartComponent',
    extends: Bar,
    mixins: [reactiveProp],
    props: {
      chartTitle: {
        type: String,
        required: false,
        default: 'Column chart'
      }
    },
    mounted () {
      const options = {
        title: {
          text: this.chartTitle,
          fontColor: '#184B8A',
          fontSize: 20,
          display: true
        },
        tooltips: {
          titleFontSize: 14,
          bodyFontSize: 12
        },
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          xAxes: [{stacked: true, barPercentage: 0.25}],
          yAxes: [{stacked: true, barPercentage: 0.25}]
        }
      }

      this.renderChart(this.chartData, options)
    }
  }
</script>
