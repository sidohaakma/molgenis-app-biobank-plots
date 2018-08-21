# MOLGENIS biobank plots
This app plots aggregate sample information for Biobanks. 
You can specify filters and charts which show you which Biobanks have samples according to the set filters.

When you want to start the demo-application please clone this repository to your own workstation.

Prerequisites are:
- git
- npm
- yarn
 
To start de demo please type on the application root:

```
yarn install
yarn dev
```

Access the application on localhost and the port on which the application is served (default is: [http://localhost:8080](http://localhost:8080)) and you will get a demo-page with fake data.
 
**Note:** the demo page does not respond to filter interaction. When you want dynamic interaction with filters you will need to connect to a MOLGENIS-backend. 

## Configuration
This app has a generic scheme which serves the data for the charts and filters. Besides this there is also an exmaple that is described how to map the implementation of the data to the generic schemes.
 
### Filters  
To setup the filters you have to conform to the following scheme. For each filter this scheme has to be filled.
  
The different filter types are:
- [Dropdown](#Dropdown)
- [Range](#Range)
- [Checkbox-row](#Checkbox-row)
- [Checkbox-list](#Checkbox-list)

#### Dropdown
     
```javascript
{
  id: string,
  label: string,
  filterType: 'dropdown',
  options: [
    { 
      id: string,
      label: string,
      value: string
    }
  ]  
}
```

#### Range

```javascript
{ 
  id: string,
  label: string,
  filterType: 'range',
  options: [minNUmber, maxNumber]
}
```

#### Checkbox-row   

```javascript
{
  id: string,
  label: string,
  filterType: 'checkbox-row',
  options: [
    {
      id: string,
      label: string, 
      value: string
    }
  ]
}
```    

#### Checkbox-list      
 
```javascript   
{
  id: attribute.name,
  label: attribute.label,
  filterType: 'checkbox-list',
  options: options.sort(
    (optionA, optionB) => {
      return optionA.id < optionB.id ? -1 : optionA.id > optionB.id ? 1 : 0
    }
  )
}
```  

### Charts
There are several charts that can be defined upon the data.
- [HorizontalBarChart](#HorizontalBarChart)
- [ColumnChart](#ColumnChart)
- [VerticalBarChart](#VerticalBarChart)
- [MultiColumnChart](#MultiColumnChart)

#### HorizontalBarChart

```javascript
{
  name: string,
  title: string,
  type: ChartType,
  inline: boolean
}
```

#### ColumnChart

```javascript
{  
  name: string,
  title: string,
  type: ChartType,
  inline: boolean,
  datasets: [
    {label: string, backgroundColor: string},
    {label: string, backgroundColor: string},
    {label: string, backgroundColor: string}
  ]
}    
```    
   
#### VerticalBarChart

```javascript
{
  name: string,
  title: string,
  type: ChartType,
  inline: false
}
```

#### MultiColumnChart
Use MultiColumnChart for COMPOUND types 

```javascript
{
  name: string,
  title: string,
  inline: boolean,
  columns: [
    {
      id: string,
      label: string
    },  
  ],
  type: 'MultiColumnChart', 
  datasets: [
    {
      label: string,
      backgroundColor: string
    }
  ]
```

## Implementation
The data model required for these plots should consist of aggregateable attributes. 

An example data:  

| id  | abbr        | description                                              |
|-----|-------------|----------------------------------------------------------|
| BB1 | Biobank 1   | This biobank contains a very detailed pretty description | 
| BB2 | Biobank 2   | A description however is not required                    |
| BB3 | Biobank 3   |                                                          |

|  biobank |  genotypes |  transcriptome |  metabolome |  age |  smoking |  cell_counts |  wgs   |  methylome |  sex    |  
|----------|------------|----------------|-------------|------|----------|--------------|--------|------------|---------|
|  BB1     |  TRUE      |  TRUE          |  TRUE       |  32  |  FALSE   |  TRUE        |  TRUE  |  FALSE     |  male   |  
|  BB2     |  TRUE      |  FALSE         |  TRUE       |  32  |  FALSE   |  FALSE       |  TRUE  |  TRUE      |  male   | 
|  BB1     |  FALSE     |  FALSE         |  TRUE       |  33  |  TRUE    |  TRUE        |  FALSE |  FALSE     |  female |  
|  BB2     |  TRUE      |  TRUE          |  FALSE      |  23  |  TRUE    |  FALSE       |  FALSE |  TRUE      |  female |  
|  BB3     |  FALSE     |  TRUE          |  FALSE      |  25  |  TRUE    |  TRUE        |  TRUE  |  TRUE      |  male   | 

Download the complete model [here](./docs/data/example-model.xlsx) 
   
## Runtime configuration
When you want to configure this app there are multiple runtime configuration parameters to be set.

**Mandatory**
- Server: 
  server url
- Samples table:
  Specifies the entity that is requested on the running MOLGENIS instance
- attributes: charttypes descirption (see [Charts](#Charts))

**Optional**
- Color scheme:
  The following colors can be defined
  - primaryColor
  - secondaryColor
  - tertiaryColor
  - backgroundColor

### Example configuration
You can add a runtime configuration by inlining this code snippet in your index.html.

```js
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
            name: 'cell_counts',
            title: 'Cell counts',
            type: 'ColumnChart',
            inline: true,
            datasets: [
              {label: 'Yes', backgroundColor: primaryColor},
              {label: 'No', backgroundColor: secondaryColor},
              {label: 'Not available ', backgroundColor: tertiaryColor}
            ]
          },
          {
            name: 'age',
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

## Contributing
There are 2 ways to test and develop in apps for MOLGENIS.

- locally without MOLGENIS
- locally with MOLGENIS

### Test locally without a running MOLGENIS instance

For local testing you can execute the following commands:

```bash
# To install the application
yarn install

# To run develop mode
yarn dev
```

It will render a local version of the core variable catalogue.

#### Run unit tests
You can run unit tests by executing this command:

```bash
# Run once
yarn unit

# Run in watch-mode
yarn debug
```

#### Run end-to-end tests
You can run end-to-end test locally by running the following command:

```bash
yarn e2e
```

### Test with a running MOLGENIS instance
For local testing with a running MOLGENIS instance you have to alter the config of the app:

Comment in the following block

```config/index.js```

```javascript
module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    // Beginning of block
    proxyTable: {
      '/login': {
        target: 'http://localhost:8080'
      },
      '/api': {
        target: 'http://localhost:8080'
      }
    },
    // End of block
```

And comment out this block in the same file.


```javascript
/**
 * GET and POST interceptors
 * Removes the need for a running backend during development
 */
No mock data available
```

That is it. Run a molgenis instance on localhost:8080 and start the core variable catalogue with:

```javascript
yarn dev
```

## Build your MOLGENIS app

See: [App developement documentation](https://molgenis.gitbooks.io/molgenis/content/developer_documentation/app-development.html)

You can now create a working application that can be imported in MOLGENIS directly, by executing:

```bash
yarn build
```

You can find the zip-file in the ```dist/molgenis-app-biobank-plots.zip```.
