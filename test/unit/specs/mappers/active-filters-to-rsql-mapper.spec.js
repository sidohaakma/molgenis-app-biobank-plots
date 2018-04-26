import activeFilterToRsqlMapper from 'src/mappers/active-filters-to-rsql-mapper'

describe('mappers', () => {
  describe('mapActiveFiltersToRSQL', () => {
    it('should map an object of filters to an RSQL string', () => {
      const activeFilters = {
        biobank: 'CHECK',
        sex: ['male'],
        smoking: [true],
        age: [25, 50],
        data_type: ['genotypes', 'metabolome', 'methylome']
      }

      const actual = activeFilterToRsqlMapper(activeFilters)
      const expected = 'biobank==CHECK;sex==male;smoking==true;age=ge=25;age=le=50;genotypes==true;metabolome==true;methylome==true'

      expect(actual).to.equal(expected)
    })

    it('should exclude a filter from RSQL result if value is empty string', () => {
      const activeFilters = {
        biobank: '',
        sex: ['male'],
        smoking: [true],
        age: [25, 50],
        data_type: ['genotypes', 'metabolome', 'methylome']
      }

      const actual = activeFilterToRsqlMapper(activeFilters)
      const expected = 'sex==male;smoking==true;age=ge=25;age=le=50;genotypes==true;metabolome==true;methylome==true'

      expect(actual).to.equal(expected)
    })
  })
})
