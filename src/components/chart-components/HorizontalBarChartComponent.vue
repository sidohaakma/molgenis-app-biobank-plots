<script>
  import { HorizontalBar, mixins } from 'vue-chartjs'

  // Use reactiveProp to automatically watch a 'chartData' property
  const {reactiveProp} = mixins

  export default {
    name: 'BarChartComponent',
    extends: HorizontalBar,
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
        default: 'Horizontal bar chart'
      }
    },
    mounted () {
      const dataCollection = {
        labels: this.chartLabels,
        datasets: [
          {
            data: this.chartData,
            backgroundColor: '#184B8A'
          }
        ]
      }

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
          bodyFontSize: 12,
          callbacks: {
            label (tooltipItem) {
              return 'Samples: ' + tooltipItem.xLabel
            }
          }
        },
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          display: false
        }
      }

      this.renderChart(dataCollection, options)
    }
  }
</script>
