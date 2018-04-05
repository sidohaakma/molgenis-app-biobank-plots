import naturalSort from 'javascript-natural-sort'

const {primaryColor} = window.__INITIAL_STATE__ || {}

function UnsupportedChartTypeException (message) {
  this.message = 'Unsupported chart type: ' + message
  this.name = 'UnsupportedChartTypeException'
}

/**
 * Return label value
 */
const getAggregateLabel = (label) => {
  if (label === null) return 'Unknown'
  if (label.id !== undefined) return label.id
  return label
}

/**
 * Generate data for a BarChart
 *
 * This type of chart has multiple data rows: [label, value]
 */
const generateBarChartData = (attribute, aggregates) => {
  const aggregateLabels = aggregates.xLabels
  let labels = []
  const dataObj = aggregates.matrix.map((row, index) => {
    return {
      data: row[0],
      label: getAggregateLabel(aggregateLabels[index])
    }
  })
  dataObj.sort((item1, item2) => {
    return naturalSort(item1.label, item2.label)
  })

  const data = dataObj.map((item) => {
    labels.push(item.label)
    return item.data
  })

  const dataCollection = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: primaryColor
      }
    ]
  }

  return {
    id: attribute.name,
    title: attribute.title,
    type: attribute.type,
    dataCollection: dataCollection,
    inline: attribute.inline
  }
}

/**
 * Generate data for a ColumnChart
 *
 * This type of chart has one data row: [label, value 1, value 2, ...values]
 */
const generateColumnChartData = (attribute, aggregates) => {
  const datasets = aggregates.matrix.map((aggregate, index) => {
    return {
      data: aggregate,
      label: attribute.datasets[index].label,
      backgroundColor: attribute.datasets[index].backgroundColor
    }
  })

  const dataCollection = {
    labels: [attribute.title],
    datasets: datasets
  }

  return {
    id: attribute.name,
    title: attribute.title,
    type: attribute.type,
    dataCollection: dataCollection,
    inline: attribute.inline
  }
}

/**
 * Map aggregate data to specific types of chart data
 */
const aggregateDataToChartDataMapper = (attribute, aggregates) => {
  switch (attribute.type) {
    case 'ColumnChart':
      return generateColumnChartData(attribute, aggregates)
    case 'HorizontalBarChart':
    case 'VerticalBarChart':
      return generateBarChartData(attribute, aggregates)
    default:
      throw new UnsupportedChartTypeException(attribute.type)
  }
}

export default aggregateDataToChartDataMapper
