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
    methods: {
      getDescriptionParts (description) {
        const charsOnFirstRow = 130
        // Get the first half of the description and split on spaces to get separate words
        const splittedFirstPart = description.length ? description.substring(0, charsOnFirstRow).split(' ') : ['']
        // When length description > charsOnFirstRow characters, get everything but the last word, because it is possibly truncated
        const firstPart = description.length > charsOnFirstRow ? splittedFirstPart.slice(0, splittedFirstPart.length - 1) : splittedFirstPart
        // Get the last word of the first half because it was removed in the first line
        const lastWord = splittedFirstPart[splittedFirstPart.length - 1]
        // Get the length of the last (possibly truncated) word
        const lastWordLength = lastWord ? lastWord.length : 0
        // get index of complete last word of first part
        const indexFirstWord = charsOnFirstRow - lastWordLength
        // Get the last part of the description, including the complete last word of the first part
        const lastPart = description.length > indexFirstWord ? description.substring(indexFirstWord, 255) : ''
        return {
          firstPart: `${firstPart.join(' ')}`,
          lastPart: lastPart
        }
      }
    },
    mounted () {
      const descriptions = this.chartData.datasets[0].descriptions
      const self = this
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
            afterLabel (tooltipItem) {
              return `Samples: ${tooltipItem.xLabel}`
            },
            beforeLabel (tooltipItem) {
              // Get description of selected tooltip
              const description = descriptions[tooltipItem.index]
              const descriptionParts = self.getDescriptionParts(description)
              return descriptionParts.firstPart
            },
            label (tooltipItem) {
              // Get description of selected tooltip
              const description = descriptions[tooltipItem.index]
              const descriptionParts = self.getDescriptionParts(description)
              return descriptionParts.lastPart
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
