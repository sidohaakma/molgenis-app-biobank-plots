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
      :max="range[1]"
      @callback="handleOptionSelect">
    </vue-slider>
  </div>
</template>

<script>
  import vueSlider from 'vue-slider-component'

  export default {
    name: 'RangeFilterComponent',
    props: {
      primaryColor: {
        type: String,
        required: false,
        default: '#007bff'
      },
      secondaryColor: {
        type: String,
        required: false,
        default: '#007bff'
      },
      backgroundColor: {
        type: String,
        required: false,
        default: '#fff'
      },
      filter: {
        type: String,
        required: true
      },
      range: {
        type: Array,
        required: false,
        default: () => [0, 120]
      },
      initialValue: {
        type: Array,
        required: false,
        default: () => [0, 120]
      }
    },
    data () {
      return {
        value: this.initialValue
      }
    },
    methods: {
      handleOptionSelect (value) {
        this.$emit('optionSelected', this.filter, value)
      }
    },
    created () {
      this.tooltipStyle = [{
        'backgroundColor': this.primaryColor,
        'borderColor': this.primaryColor
      }, {'backgroundColor': this.secondaryColor, 'borderColor': this.secondaryColor}]
      this.bgStyle = {'backgroundColor': this.backgroundColor, 'boxShadow': 'inset 0.5px 0.5px 3px 1px rgba(0,0,0,.36)'}
      this.processStyle = {'backgroundImage': `-webkit-linear-gradient(left, ${this.primaryColor}, ${this.secondaryColor})`}
      this.sliderStyle = [{'backgroundColor': this.primaryColor}, {'backgroundColor': this.secondaryColor}]
    },
    components: {
      vueSlider
    }
  }
</script>
