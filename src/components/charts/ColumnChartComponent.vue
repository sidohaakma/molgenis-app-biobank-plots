<script>
  import { Bar, mixins } from 'vue-chartjs'

  // Use reactiveProp to automatically watch a 'chartData' property
  const {reactiveProp} = mixins

  const initialState = window.__INITIAL_STATE__ || {}

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
          titleFontSize: 14,
          bodyFontSize: 12
        },
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          xAxes: [{stacked: false}],
          yAxes: [{stacked: false}]
        }
      }
      this.renderChart(this.chartData, this.options)
    }
  }
</script>
