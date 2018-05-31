import subjectMetadataToFilterMapper from 'src/mappers/subject-metadata-to-filter-mapper'

describe('mappers', () => {
  describe('subjectMetadataToFilterMapper', () => {
    it('should map metadata to a category filter map', () => {
      const metadata = {
        attributes: [
          {
            name: 'filters',
            attributes: [
              {
                name: 'biobank',
                label: 'Biobank',
                categoricalOptions: [
                  {
                    id: 'id1',
                    label: 'label1'
                  }
                ]
              },
              {
                name: 'age',
                label: 'Age in years'
              },
              {
                name: 'sex',
                label: 'Sex',
                categoricalOptions: [
                  {id: 'male', label: 'male'},
                  {id: 'unk', label: 'unknown'},
                  {id: 'female', label: 'female'}
                ]
              },
              {
                name: 'ever_smoked',
                label: 'Smoking?'
              },
              {
                name: 'data_type',
                label: 'Data types',
                attributes: [
                  {
                    name: 'wbcc',
                    label: 'Whole bloodcell count'
                  },
                  {
                    name: 'genotypes',
                    label: 'Genotypes (Imputed)'
                  }
                ]
              }
            ]
          }
        ]
      }

      const actual = subjectMetadataToFilterMapper(metadata)
      const expected = {
        biobank: {
          filterType: 'dropdown',
          id: 'biobank',
          label: 'Biobank',
          options: [{
            id: 'id1',
            label: 'label1',
            value: 'id1'
          }]
        },
        age: {
          filterType: 'range',
          id: 'age',
          label: 'Age in years',
          options: [0, 120]
        },
        sex: {
          filterType: 'checkbox-list',
          id: 'sex',
          label: 'Sex',
          options: [
            {
              id: 'male',
              label: 'male',
              value: 'male'
            },
            {
              id: 'unk',
              label: 'unknown',
              value: 'unk'
            },
            {
              id: 'female',
              label: 'female',
              value: 'female'
            }
          ]
        },
        ever_smoked: {
          filterType: 'checkbox-list',
          id: 'ever_smoked',
          label: 'Smoking?',
          options: [
            {
              id: 'yes',
              label: 'Yes',
              value: true
            },
            {
              id: 'no',
              label: 'No',
              value: false
            }
          ]
        },
        data_type: {
          filterType: 'checkbox-list',
          id: 'data_type',
          label: 'Data types',
          options: [
            {
              id: 'genotypes',
              label: 'Genotypes (Imputed)',
              value: 'genotypes'
            },
            {
              id: 'wbcc',
              label: 'Whole bloodcell count',
              value: 'wbcc'
            }]
        }
      }

      expect(actual).to.deep.equal(expected)
    })
  })
})
