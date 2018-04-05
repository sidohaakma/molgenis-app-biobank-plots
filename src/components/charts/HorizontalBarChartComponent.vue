<script>
  import { HorizontalBar, mixins } from 'vue-chartjs'

  // Use reactiveProp to automatically watch a 'chartData' property
  const {reactiveProp} = mixins

  const initialState = window.__INITIAL_STATE__ || {}

  export default {
    name: 'HorizontalBarChartComponent',
    extends: HorizontalBar,
    mixins: [reactiveProp],
    props: {
      chartTitle: {
        type: String,
        required: false,
        default: 'Horizontal bar chart'
      }
    },
    mounted () {
      const options = {
        title: {
          text: this.chartTitle,
          fontColor: initialState.primaryColor,
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

      this.renderChart(this.chartData, options)
    }
  }
</script>
