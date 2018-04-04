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
    case 'age_years':
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
 * This type of chart has multiple data rows: [label, value]
 */
const generateBarChartData = (attribute, aggregates) => {
  const aggregateLabels = aggregates.xLabels
  const labels = []
  const data = aggregates.matrix.map((row, index) => {
    labels.push(getAggregateLabel(aggregateLabels[index]))
    return row[0]
  })

  return {
    id: attribute.name,
    title: attribute.title,
    type: attribute.type,
    data: data,
    labels: labels,
    inline: attribute.inline
  }
}

/**
 * Generate data for a ColumnChart
 *
 * This type of chart has one data row: [label, value 1, value 2, ...values]
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
    id: attribute.name,
    title: attribute.title,
    type: attribute.type,
    data: data,
    labels: [attribute.title],
    inline: attribute.inline
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
    if (attribute.name === 'age') return accumulator // skip age column, we use age_years
    accumulator[attribute.name] = mapAttributesToFilters(attribute)
    return accumulator
  }, {})
}

/**
 * Map aggregate data to specific types of chart data
 */
export const aggregateDataToChartData = (attribute, aggregates) => {
  switch (attribute.type) {
    case 'ColumnChart':
      return generateColumnChartData(attribute, aggregates)
    case 'HorizontalBarChart':
    case 'VerticalBarChart':
      return generateBarChartData(attribute, aggregates)
    default:
      console.log('unsupported chart type')
  }
}

/**
 * Map activeFilters object to an RSQL string
 * Very specific for the data_types filter because every filter is actually an attribute
 * Very specific for the age_years filter because there is a min and a max value
 */
export const mapActiveFiltersToRSQL = (activeFilters) => {
  return Object.keys(activeFilters).reduce((accumulator, filter) => {
    const values = activeFilters[filter]
    if (filter === 'age_years') {
      accumulator.push(filter + '=ge=' + values.min)
      accumulator.push(filter + '=le=' + values.max)
    } else if (filter === 'data_type') {
      values.forEach(value => accumulator.push(value + '==true'))
    } else if (Array.isArray(values)) {
      values.forEach(value => accumulator.push(filter + '==' + value))
    } else {
      accumulator.push(filter + '==' + values)
    }
    return accumulator
  }, []).join(';')
}
