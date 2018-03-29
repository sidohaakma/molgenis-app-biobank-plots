<script>
  import { HorizontalBar, mixins } from 'vue-chartjs'

  const {reactiveProp} = mixins

  export default {
    name: 'BarChartComponent',
    extends: HorizontalBar,
    mixins: [reactiveProp],
    props: {
      chartLabels: {
        type: Array,
        required: true
      },
      chartData: {
        type: Array,
        required: true
      }
    },
    data () {
      return {
        options: {
          maintainAspectRatio: false,
          responsive: true,
          legend: {
            display: false
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [{
              gridLines: {
                display: false
              }
            }]
          }
        }
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
      this.renderChart(dataCollection, this.options)
    }
  }
</script>
