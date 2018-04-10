export default {
  getCharts: state => state.charts.filter(chart => !chart.inline),

  getInlineCharts: state => state.charts.filter(chart => chart.inline),

  getActiveFilterValueById: (state) => (filterId) => state.activeFilters[filterId]
}
