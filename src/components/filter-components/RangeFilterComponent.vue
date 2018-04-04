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
      primaryColor: {
        type: String,
        required: false,
        default: () => ('#007bff')
      },
      secondaryColor: {
        type: String,
        required: false,
        default: () => ('#007bff')
      },
      backgroundColor: {
        type: String,
        required: false,
        default: () => ('#fff')
      },
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
          'backgroundColor': this.backgroundColor,
          'boxShadow': 'inset 0.5px 0.5px 3px 1px rgba(0,0,0,.36)'
        },
        processStyle: {
          'backgroundImage': `-webkit-linear-gradient(left, ${this.primaryColor}, ${this.secondaryColor})`
        },
        sliderStyle: [
          {
            'backgroundColor': this.primaryColor
          },
          {
            'backgroundColor': this.secondaryColor
          }
        ],
        tooltipStyle: [
          {
            'backgroundColor': this.primaryColor,
            'borderColor': this.primaryColor
          },
          {
            'backgroundColor': this.secondaryColor,
            'borderColor': this.secondaryColor
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
