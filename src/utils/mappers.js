// ===============================================
// ===============================================
// ============== Private functions ==============
// ===============================================
// ===============================================

const mapAttributesToFilters = (attribute) => {
  switch (attribute.name) {
    case 'biobank':
      return {
        id: attribute.name,
        label: attribute.label,
        filterType: 'dropdown',
        options: attribute.categoricalOptions.map(option => ({
          id: option.id,
          label: option.label,
          value: option.id
        }))
      }
    case 'age':
      return {
        id: attribute.name,
        label: attribute.label,
        filterType: 'range',
        options: {
          min: 0,
          max: 120
        }
      }
    case 'sex':
      return {
        id: attribute.name,
        label: attribute.label,
        filterType: 'checkbox-row',
        options: attribute.enumOptions.map(option => ({
          id: option,
          label: option,
          value: option
        }))
      }
    case 'smoking':
      return {
        id: attribute.name,
        label: attribute.label,
        filterType: 'checkbox-row',
        options: [
          {id: 'yes', label: 'Yes', value: true},
          {id: 'no', label: 'No', value: false}
        ]
      }
    case 'data_type':
      return {
        id: attribute.name,
        label: attribute.label,
        filterType: 'checkbox-list',
        options: attribute.attributes.map(attribute => ({
          id: attribute.name,
          label: attribute.label,
          value: attribute.name
        }))
      }
  }
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
 * This type of data has multiple data rows: [label, value]
 */
const generateBarChartData = (attribute, aggregates) => {
  const aggregateLabels = aggregates.xLabels
  const labels = []
  const data = aggregates.matrix.map((row, index) => {
    labels.push(getAggregateLabel(aggregateLabels[index]))
    return row[0]
  })

  return {
    [attribute.name]: {
      chartTitle: attribute.chartTitle,
      chartType: attribute.chartType,
      data: data,
      labels: labels
    }
  }
}

/**
 * Generate data for a ColumnChart
 *
 * This type of data has one data row: [label, value 1, value 2, ...values]
 */
const generateColumnChartData = (attribute, aggregates) => {
  const data = aggregates.matrix.map((aggregate, index) => {
    return {
      data: aggregate,
      label: attribute.datasets[index].label,
      backgroundColor: attribute.datasets[index].backgroundColor
    }
  })

  return {
    [attribute.name]: {
      chartTitle: attribute.chartTitle,
      chartType: attribute.chartType,
      data: data,
      labels: [attribute.chartTitle]
    }
  }
}

// ===============================================
// ===============================================
// ============== Public functions ===============
// ===============================================
// ===============================================

/**
 * Create a map of sample category as key, and id, label, options object as value
 */
export const subjectMetadataToFilterMapper = (sampleMetadata) => {
  const filters = sampleMetadata.attributes.find(attribute => attribute.name === 'filters')
  return filters.attributes.reduce((accumulator, attribute) => {
    accumulator[attribute.name] = mapAttributesToFilters(attribute)
    return accumulator
  }, {})
}

/**
 * Map aggregate data to specific types of chart data
 */
export const aggregateDataToChartData = (attribute, aggregates) => {
  switch (attribute.chartType) {
    case 'HorizontalBarChart':
      return generateBarChartData(attribute, aggregates)
    case 'ColumnChart':
      return generateColumnChartData(attribute, aggregates)
    default:
      console.log('unsupported chart type')
  }
}
