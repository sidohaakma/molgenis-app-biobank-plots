<template>
  <div class="range-filter-component">
    <vue-slider
      v-model="value"
      tooltipDir="bottom"
      :sliderStyle="sliderStyle"
      :bgStyle="bgStyle"
      :processStyle="processStyle"
      :tooltipStyle="tooltipStyle"
      :lazy="true"
      :min="range[0]"
      :max="range[1]">
    </vue-slider>
  </div>
</template>

<script>
  import vueSlider from 'vue-slider-component'

  export default {
    name: 'RangeFilterComponent',
    components: {
      vueSlider
    },
    props: {
      filter: {
        type: String,
        required: true
      },
      range: {
        type: Array,
        required: false,
        default: () => ([0, 100])
      },
      initialValue: {
        type: Array,
        required: false,
        default: () => ([0, 100])
      }
    },
    data () {
      return {
        bgStyle: {
          'backgroundColor': '#fff',
          'boxShadow': 'inset 0.5px 0.5px 3px 1px rgba(0,0,0,.36)'
        },
        processStyle: {
          'backgroundImage': '-webkit-linear-gradient(left, #ed660c, #184B8A)'
        },
        sliderStyle: [
          {
            'backgroundColor': '#ed660c'
          },
          {
            'backgroundColor': '#184B8A'
          }
        ],
        tooltipStyle: [
          {
            'backgroundColor': '#ed660c',
            'borderColor': '#ed660c'
          },
          {
            'backgroundColor': '#184B8A',
            'borderColor': '#184B8A'
          }
        ],
        value: this.initialValue
      }
    },
    watch: {
      value: {
        handler (value) {
          this.$emit('optionSelected', this.filter, value)
        },
        deep: true
      },

      initialValue: {
        handler (value) {
          this.value = value
        },
        deep: true
      }
    }
  }
</script>
