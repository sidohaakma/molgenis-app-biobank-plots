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
 * Create a map of sample category as key, and id, label, options object as value
 */
export const subjectMetadataToFilterMapper = (sampleMetadata) => {
  const filters = sampleMetadata.attributes.find(attribute => attribute.name === 'filters')
  return filters.attributes.reduce((accumulator, attribute) => {
    accumulator[attribute.name] = mapAttributesToFilters(attribute)
    return accumulator
  }, {})
}
