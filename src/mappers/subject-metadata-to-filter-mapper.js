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
        options: [0, 120]
      }
    case 'sex':
      return {
        id: attribute.name,
        label: attribute.label,
        filterType: 'checkbox-list',
        options: attribute.categoricalOptions.reduce((accumulator, option) => {
          accumulator.push({
            id: option.id,
            label: option.label,
            value: option.id
          })
          return accumulator
        }, [])
      }
    case 'ever_smoked':
      return {
        id: attribute.name,
        label: attribute.label,
        filterType: 'checkbox-list',
        options: [
          {id: 'yes', label: 'Yes', value: true},
          {id: 'no', label: 'No', value: false},
          {id: 'na', label: 'Not available', value: 'N/A'}
        ]
      }
    case 'data_type':
      const options = attribute.attributes.map(attribute => ({
        id: attribute.name,
        label: attribute.label,
        value: attribute.name
      }))

      const sortedOptions = options.sort(
        (optionA, optionB) => {
          return optionA.id < optionB.id ? -1 : optionA.id > optionB.id ? 1 : 0
        }
      )

      return {
        id: attribute.name,
        label: attribute.label,
        filterType: 'checkbox-list',
        options: sortedOptions
      }
  }
}

/**
 * Create a map of sample category as key, and id, label, options object as value
 */
const subjectMetadataToFilterMapper = (metadata) => {
  const filters = metadata.attributes.find(attribute => attribute.name === 'filters')
  return filters.attributes.reduce((accumulator, attribute) => {
    accumulator[attribute.name] = mapAttributesToFilters(attribute)
    return accumulator
  }, {})
}

export default subjectMetadataToFilterMapper
