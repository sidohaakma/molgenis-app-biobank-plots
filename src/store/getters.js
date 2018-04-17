export default {
  getActiveFilterValueById: (state) => (filterId) => state.activeFilters[filterId],

  getCharts: state => state.charts.filter(chart => !chart.inline),

  getInlineCharts: state => state.charts.filter(chart => chart.inline)
}
