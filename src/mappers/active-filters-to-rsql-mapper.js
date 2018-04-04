/**
 * Map activeFilters object to an RSQL string
 * Very specific for the data_types filter because every filter is actually an attribute
 * Very specific for the age_years filter because there is a min and a max value
 */
const activeFiltersToRsqlMapper = (activeFilters) => {
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

export default activeFiltersToRsqlMapper
