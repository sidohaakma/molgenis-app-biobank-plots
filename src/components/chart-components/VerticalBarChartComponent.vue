<script>
  import { Bar, mixins } from 'vue-chartjs'

  // Use reactiveProp to automatically watch a 'chartData' property
  const {reactiveProp} = mixins

  export default {
    name: 'VerticalBarChartComponent',
    extends: Bar,
    mixins: [reactiveProp],
    props: {
      chartTitle: {
        type: String,
        required: false,
        default: 'Vertical bar chart'
      }
    },
    mounted () {
      // TODO Fix xAxes scaling
      const options = {
        title: {
          text: this.chartTitle,
          fontColor: '#184B8A',
          fontSize: 20,
          display: true
        },
        tooltips: {
          displayColors: false,
          titleFontSize: 14,
          bodyFontSize: 12
        },
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          display: false
        }
      }

      this.renderChart(this.chartData, options)
    }
  }
</script>
