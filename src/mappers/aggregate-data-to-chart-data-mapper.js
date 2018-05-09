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
  if (label === null) return 'Not available'
  if (label.label !== undefined) return label.label
  if (label === 1) return 'Yes'
  if (label === 0) return 'No'
  if (label.id !== undefined) return label.id
  return label
}

/**
 * Return xLabel value of boolean types in the aggregates API
 */
const getBooleanAggregateLabel = (label) => {
  if (label === 'Unavailable') return 0
  if (label === 'Available') return 1
  return label
}

/**
 * Return description
 */
const getAggregateDescription = (label) => {
  if (label === null) return 'Not available'
  let description = label.description !== undefined ? label.description : ''
  return description
}

/**
 * Generate data for a BarChart
 *
 * This type of chart has multiple data rows: [label, value]
 */
const generateBarChartData = (attribute, aggregates) => {
  const aggregateLabels = aggregates.xLabels
  let labels = []
  let descriptions = []
  const dataObj = aggregates.matrix.map((row, index) => {
    return {
      data: row[0],
      label: getAggregateLabel(aggregateLabels[index]),
      description: getAggregateDescription(aggregateLabels[index])
    }
  })

  dataObj.sort((item1, item2) => {
    return naturalSort(item1.label, item2.label)
  })

  const data = dataObj.map((item) => {
    labels.push(item.label)
    descriptions.push(item.description)
    return item.data
  })

  const dataCollection = {
    labels: labels,
    datasets: [
      {
        data: data,
        descriptions: descriptions,
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
  const datasets = aggregates.matrix.map((aggregateValue, index) => {
    const label = getAggregateLabel(aggregates.xLabels[index])
    const color = attribute.datasets.find((attrLabel) => {
      return attrLabel.label === label
    }).backgroundColor
    return {
      data: aggregateValue,
      label: label,
      backgroundColor: color
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
 * Generate data for a MultiColumnChart
 *
 * This type of chart has an array of labels, and for each label generates n number of datasets
 */
const generateMultiColumnChart = (attribute, aggregates) => {
  const labels = attribute.columns.map(column => column.label)
  const datasets = attribute.datasets.map((dataset, index) => {
    return {
      label: dataset.label,
      backgroundColor: dataset.backgroundColor,
      data: attribute.columns.map(column => {
        const aggregate = aggregates.find(aggregate => aggregate.xAttr.name === column.id).aggs
        const aggLabel = getBooleanAggregateLabel(dataset.label)
        const aggIndex = aggregate.xLabels.indexOf(aggLabel)
        return aggregate.matrix[aggIndex] ? aggregate.matrix[aggIndex][0] : 0
      })
    }
  })

  const dataCollection = {
    labels: labels,
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
    case 'MultiColumnChart':
      return generateMultiColumnChart(attribute, aggregates)
    default:
      throw new UnsupportedChartTypeException(attribute.type)
  }
}

export default aggregateDataToChartDataMapper
