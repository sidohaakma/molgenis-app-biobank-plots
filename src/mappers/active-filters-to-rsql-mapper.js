/**
 * Map activeFilters object to an RSQL string
 * Very specific for the data_types filter because every filter is actually an attribute
 * Very specific for the age_years filter because there is a min and a max value
 */
const activeFiltersToRsqlMapper = (activeFilters) => {
  return Object.keys(activeFilters).reduce((accumulator, filter) => {
    const values = activeFilters[filter]
    if (filter === 'age') {
      accumulator.push(filter + '=ge=' + values[0])
      accumulator.push(filter + '=le=' + values[1])
    } else if (filter === 'data_type') {
      values.forEach(value => accumulator.push(value + '==true'))
    } else if (Array.isArray(values)) {
      values.forEach(value => accumulator.push(filter + '==' + value))
    } else {
      if (values) accumulator.push(filter + '==' + values)
    }
    return accumulator
  }, []).join(';')
}

export default activeFiltersToRsqlMapper
