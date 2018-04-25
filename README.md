# MOLGENIS biobank plots

This app plots aggregate sample information for biobanks.

## Build Setup

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn run dev

# build for production with minification
# The created artifacts can be uploaded to the MOLGENIS app store.
yarn run build

# run unit tests
yarn run unit

# run all tests
yarn test
```
## Data model
  The data model required for these plots should consist of aggregateable attributes.
  An example attributes sheet:  

| entity           | name          | label                                    | dataType    | refEntity        | idAttribute | enumOptions | labelAttribute | aggregateable | visible | partOfAttribute | expression | nillable | 
|------------------|---------------|------------------------------------------|-------------|------------------|-------------|-------------|----------------|---------------|---------|-----------------|------------|----------| 
| project_samples  | id            | id                                       | string      |                  | true        |             | true           | false         | true    |                 |            | true     | 
| project_samples  | biobank       | Biobank                                  | categorical | project_biobanks | false       |             | false          | true          | true    | filters         |            | false    | 
| project_samples  | genotypes     | Genotypes (Imputed)                      | bool        |                  | false       |             | false          | true          | true    | data_type       |            | false    | 
| project_samples  | transcriptome | Transcriptome (Illumina RNAseq)          | bool        |                  | false       |             | false          | true          | true    | data_type       |            | false    | 
| project_samples  | metabolome    | Metabolome (Brainshake)                  | bool        |                  | false       |             | false          | true          | true    | data_type       |            | false    | 
| project_samples  | age           | Age                                      | decimal     |                  | false       |             | false          | false         | true    | filters         |            | true     | 
| project_samples  | sex           | Sex                                      | enum        |                  | false       | male,female | false          | true          | true    | filters         |            | false    | 
| project_samples  | smoking       | Ever smoked                              | bool        |                  | false       |             | false          | true          | true    | filters         |            | false    | 
| project_samples  | wbcc          | Whole bloodcell count                    | bool        |                  | false       |             | false          | true          | true    | data_type       |            | false    | 
| project_samples  | wgs           | Whole Genome Sequencing (Illumina Hiseq) | bool        |                  | false       |             | false          | true          | true    | data_type       |            | false    | 
| project_samples  | data_type     | Data type                                | compound    |                  | false       |             | false          | false         | true    | filters         |            | true     | 
| project_samples  | methylome     | Methylome (Illumina 450K)                | bool        |                  | false       |             | false          | true          | true    | data_type       |            | false    | 
| project_samples  | filters       | Filters                                  | compound    |                  | false       |             | false          | false         | true    |                 |            | true     | 
| project_samples  | age_years     | Age in years                             | int         |                  | false       |             | false          | true          | true    | filters         | age        | false    | 
| project_biobanks | id            | ID                                       | string      |                  | true        |             | false          | false         | true    |                 |            | true     | 
| project_biobanks | abbr          | Abbreviation                             | string      |                  | false       |             | true           | false         | true    |                 |            | true     | 
| project_biobanks | description   | Description                              | string      |                  | false       |             | false          | false         | true    |                 |            | true     | 

Download the complete model [here](../../raw/master/example/example-model.xlsx) 
   
## Configuration
Colors and attributes used to create the plots can be configured in the ```index.html```
as follows:
``` javascript
  <script>
      var server = 'https://yourfancyserverhere'
      var primaryColor = '#184B8A'
      var secondaryColor = '#ed660c'
      var tertiaryColor = '#cccccc'
      var backgroundColor = '#e6e9ef'

      window.__INITIAL_STATE__ = {
        server: server,
        sampleTable: 'project_samples',
        primaryColor: primaryColor,
        secondaryColor: secondaryColor,
        tertiaryColor: tertiaryColor,
        backgroundColor: backgroundColor,
        attributes: [
          {
            name: 'biobank',
            title: 'Number of samples per biobank',
            type: 'HorizontalBarChart',
            inline: false
          },
          {
            name: 'wbcc',
            title: 'Whole bloodcell counts',
            type: 'ColumnChart',
            inline: true,
            datasets: [
              {label: 'Yes', backgroundColor: primaryColor},
              {label: 'No', backgroundColor: secondaryColor},
              {label: 'Not available ', backgroundColor: tertiaryColor}
            ]
          },
          {
            name: 'age_years',
            title: 'Age in years',
            type: 'VerticalBarChart',
            inline: false
          },
          {
            name: 'data_type',
            title: 'Data available',
            inline: false,
            columns: [
              {id: 'genotypes', label: 'Genotypes'},
              {id: 'metabolome', label: 'Metabolome'},
              {id: 'methylome', label: 'Methylome'},
              {id: 'transcriptome', label: 'Transcriptome'},
              {id: 'wgs', label: 'Whole genome sequence'}
            ],
            type: 'MultiColumnChart', <!-- Use MultiColumnChart for COMPOUND types -->
            datasets: [
              {label: 'Available', backgroundColor: primaryColor},
              {label: 'Unavailable', backgroundColor: secondaryColor}
            ]
          },
          {
            name: 'smoking',
            inline: true,
            title: 'Ever smoked',
            type: 'ColumnChart',
            datasets: [
              {label: 'Yes', backgroundColor: primaryColor},
              {label: 'No', backgroundColor: secondaryColor},
              {label: 'Not available ', backgroundColor: tertiaryColor}
            ]
          },
          {
            name: 'sex',
            title: 'Sex',
            inline: true,
            type: 'ColumnChart',
            datasets: [
              {label: 'Male', backgroundColor: primaryColor},
              {label: 'Female', backgroundColor: secondaryColor},
              {label: 'Not available ', backgroundColor: tertiaryColor}
            ]
          }
        ]
      }
    </script>
```
