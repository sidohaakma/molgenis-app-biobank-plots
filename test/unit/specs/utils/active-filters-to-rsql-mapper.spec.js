import activeFilterToRsqlMapper from 'src/utils/active-filters-to-rsql-mapper'

describe('mapActiveFiltersToRSQL', () => {
  it('should map an object of filters to an RSQL string', () => {
    const activeFilters = {
      biobank: 'CHECK',
      sex: ['male'],
      smoking: [true],
      age_years: {
        min: 25,
        max: 50
      },
      data_type: ['genotypes', 'metabolome', 'methylome']
    }

    const actual = activeFilterToRsqlMapper(activeFilters)
    const expected = 'biobank==CHECK;sex==male;smoking==true;age_years=ge=25;age_years=le=50;genotypes==true;metabolome==true;methylome==true'

    expect(actual).to.equal(expected)
  })
})
