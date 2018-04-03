<script>
  import { Bar, mixins } from 'vue-chartjs'

  // Use reactiveProp to automatically watch a 'chartData' property
  const {reactiveProp} = mixins

  export default {
    name: 'VerticalBarChartComponent',
    extends: Bar,
    mixins: [reactiveProp],
    props: {
      chartData: {
        type: Array,
        required: true
      },
      chartLabels: {
        type: Array,
        required: true
      },
      chartTitle: {
        type: String,
        required: false,
        default: 'Vertical bar chart'
      }
    },
    mounted () {
      const data = {
        labels: this.chartLabels,
        datasets: [
          {
            data: this.chartData,
            backgroundColor: '#184B8A'
          }
        ]
      }

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

      this.renderChart(data, options)
    }
  }
</script>
