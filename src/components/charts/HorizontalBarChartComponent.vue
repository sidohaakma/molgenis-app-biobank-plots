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
    data () {
      return {
        options: {}
      }
    },
    computed: {
      chart () {
        this.renderChart(this.chartData, this.options)
      }
    },
    mounted () {
      this.options = {
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
      this.renderChart(this.chartData, this.options)
    }
  }
</script>
