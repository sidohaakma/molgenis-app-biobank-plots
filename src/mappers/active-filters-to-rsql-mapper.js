
const AND_OPERATOR = ';'
const OR_OPERATOR = ','

/**
 * Map activeFilters object to an RSQL string
 * Very specific for the data_types filter because every filter is actually an attribute
 * Very specific for the age_years filter because there is a min and a max value
 */

const activeFiltersToRsqlMapper = (activeFilters) => {
  return Object.keys(activeFilters).reduce((accumulator, filter) => {
    const values = activeFilters[filter]
    if (filter === 'age') {
      accumulator.push(filter + '=ge=' + values[0] + AND_OPERATOR + filter + '=le=' + values[1])
    } else if (Array.isArray(values)) {
      if (values.length > 0) {
        if (filter === 'data_type') {
          accumulator.push(values.map(value => value + '==true').join(AND_OPERATOR))
        } else if (filter === 'ever_smoked') {
          const everSmoked = []
          if (values.includes(true)) {
            everSmoked.push('ever_smoked==true')
          }
          if (values.includes(false)) {
            everSmoked.push('ever_smoked==false')
          }
          if (values.includes('N/A')) {
            everSmoked.push('(ever_smoked!=false' + AND_OPERATOR + 'ever_smoked!=true)')
          }
          accumulator.push(everSmoked.join(OR_OPERATOR))
        } else {
          accumulator.push(values.map(value => filter + '==' + value).join(OR_OPERATOR))
        }
      }
    } else {
      if (values) accumulator.push(filter + '==' + values)
    }
    return accumulator
  }, [])
    .map(filterQuery => { return '(' + filterQuery + ')' })
    .join(AND_OPERATOR)
}

export default activeFiltersToRsqlMapper
