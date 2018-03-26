module.exports = {
  'href': '/api/v2/leiden_RP',
  'meta': {
    'href': '/api/v2/leiden_RP',
    'hrefCollection': '/api/v2/leiden_RP',
    'name': 'leiden_RP',
    'label': 'RP',
    'attributes': [
      {
        'href': '/api/v2/leiden_RP/meta/BBMRI_id',
        'fieldType': 'STRING',
        'name': 'BBMRI_id',
        'label': 'BBMRI_id',
        'attributes': [],
        'maxLength': 255,
        'auto': false,
        'nillable': false,
        'readOnly': true,
        'labelAttribute': true,
        'unique': true,
        'visible': true,
        'lookupAttribute': false,
        'isAggregatable': false
      },
      {
        'href': '/api/v2/leiden_RP/meta/filters',
        'fieldType': 'COMPOUND',
        'name': 'filters',
        'label': 'Filters',
        'attributes': [
          {
            'href': '/api/v2/leiden_RP/meta/biobank',
            'fieldType': 'CATEGORICAL',
            'name': 'biobank',
            'label': 'Biobank',
            'attributes': [],
            'refEntity': {
              'href': '/api/v2/leiden_biobanks',
              'hrefCollection': '/api/v2/leiden_biobanks',
              'name': 'leiden_biobanks',
              'label': 'biobanks',
              'attributes': [
                {
                  'href': '/api/v2/leiden_biobanks/meta/id',
                  'fieldType': 'STRING',
                  'name': 'id',
                  'label': 'id',
                  'attributes': [],
                  'maxLength': 255,
                  'auto': false,
                  'nillable': false,
                  'readOnly': true,
                  'labelAttribute': false,
                  'unique': true,
                  'visible': true,
                  'lookupAttribute': true,
                  'isAggregatable': false
                },
                {
                  'href': '/api/v2/leiden_biobanks/meta/abbr',
                  'fieldType': 'STRING',
                  'name': 'abbr',
                  'label': 'abbr',
                  'attributes': [],
                  'maxLength': 255,
                  'auto': false,
                  'nillable': false,
                  'readOnly': false,
                  'labelAttribute': true,
                  'unique': false,
                  'visible': true,
                  'lookupAttribute': true,
                  'isAggregatable': false
                }
              ],
              'labelAttribute': 'abbr',
              'idAttribute': 'id',
              'lookupAttributes': [
                'id',
                'abbr'
              ],
              'isAbstract': false,
              'writable': true,
              'languageCode': 'en'
            },
            'auto': false,
            'nillable': false,
            'readOnly': false,
            'labelAttribute': false,
            'unique': false,
            'visible': true,
            'lookupAttribute': false,
            'isAggregatable': true
          },
          {
            'href': '/api/v2/leiden_RP/meta/age',
            'fieldType': 'DECIMAL',
            'name': 'age',
            'label': 'Age',
            'attributes': [],
            'auto': false,
            'nillable': true,
            'readOnly': false,
            'labelAttribute': false,
            'unique': false,
            'visible': true,
            'lookupAttribute': false,
            'isAggregatable': false
          },
          {
            'href': '/api/v2/leiden_RP/meta/sex',
            'fieldType': 'ENUM',
            'name': 'sex',
            'label': 'Sex',
            'attributes': [],
            'enumOptions': [
              'male',
              'female'
            ],
            'maxLength': 255,
            'auto': false,
            'nillable': true,
            'readOnly': false,
            'labelAttribute': false,
            'unique': false,
            'visible': true,
            'lookupAttribute': false,
            'isAggregatable': true
          },
          {
            'href': '/api/v2/leiden_RP/meta/smoking',
            'fieldType': 'BOOL',
            'name': 'smoking',
            'label': 'Ever smoked',
            'attributes': [],
            'auto': false,
            'nillable': true,
            'readOnly': false,
            'labelAttribute': false,
            'unique': false,
            'visible': true,
            'lookupAttribute': false,
            'isAggregatable': true
          },
          {
            'href': '/api/v2/leiden_RP/meta/data_type',
            'fieldType': 'COMPOUND',
            'name': 'data_type',
            'label': 'Data type',
            'attributes': [
              {
                'href': '/api/v2/leiden_RP/meta/genotypes',
                'fieldType': 'BOOL',
                'name': 'genotypes',
                'label': 'Genotypes (Imputed)',
                'attributes': [],
                'auto': false,
                'nillable': true,
                'readOnly': false,
                'labelAttribute': false,
                'unique': false,
                'visible': true,
                'lookupAttribute': false,
                'isAggregatable': true
              },
              {
                'href': '/api/v2/leiden_RP/meta/transcriptome',
                'fieldType': 'BOOL',
                'name': 'transcriptome',
                'label': 'Transcriptome (Illumina RNAseq)',
                'attributes': [],
                'auto': false,
                'nillable': true,
                'readOnly': false,
                'labelAttribute': false,
                'unique': false,
                'visible': true,
                'lookupAttribute': false,
                'isAggregatable': true
              },
              {
                'href': '/api/v2/leiden_RP/meta/metabolome',
                'fieldType': 'BOOL',
                'name': 'metabolome',
                'label': 'Metabolome (Brainshake)',
                'attributes': [],
                'auto': false,
                'nillable': true,
                'readOnly': false,
                'labelAttribute': false,
                'unique': false,
                'visible': true,
                'lookupAttribute': false,
                'isAggregatable': true
              },
              {
                'href': '/api/v2/leiden_RP/meta/wbcc',
                'fieldType': 'BOOL',
                'name': 'wbcc',
                'label': 'Whole bloodcell count',
                'attributes': [],
                'auto': false,
                'nillable': true,
                'readOnly': false,
                'labelAttribute': false,
                'unique': false,
                'visible': true,
                'lookupAttribute': false,
                'isAggregatable': true
              },
              {
                'href': '/api/v2/leiden_RP/meta/wgs',
                'fieldType': 'BOOL',
                'name': 'wgs',
                'label': 'Whole Genome Sequencing (Illumina Hiseq)',
                'attributes': [],
                'auto': false,
                'nillable': true,
                'readOnly': false,
                'labelAttribute': false,
                'unique': false,
                'visible': true,
                'lookupAttribute': false,
                'isAggregatable': true
              },
              {
                'href': '/api/v2/leiden_RP/meta/methylome',
                'fieldType': 'BOOL',
                'name': 'methylome',
                'label': 'Methylome (Illumina 450K)',
                'attributes': [],
                'auto': false,
                'nillable': true,
                'readOnly': false,
                'labelAttribute': false,
                'unique': false,
                'visible': true,
                'lookupAttribute': false,
                'isAggregatable': true
              }
            ],
            'auto': false,
            'nillable': true,
            'readOnly': false,
            'labelAttribute': false,
            'unique': false,
            'visible': true,
            'lookupAttribute': false,
            'isAggregatable': false
          }
        ],
        'auto': false,
        'nillable': true,
        'readOnly': false,
        'labelAttribute': false,
        'unique': false,
        'visible': true,
        'lookupAttribute': false,
        'isAggregatable': false
      }
    ],
    'labelAttribute': 'BBMRI_id',
    'idAttribute': 'BBMRI_id',
    'lookupAttributes': [],
    'isAbstract': false,
    'writable': true,
    'languageCode': 'en'
  },
  'start': 0,
  'num': 100,
  'total': 26227,
  'nextHref': 'http://localhost:8080/api/v2/leiden_RP?start=100',
  'items': [
    {
      '_href': '/api/v2/leiden_RP/BBMRI_1',
      'BBMRI_id': 'BBMRI_1',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/ALPHAOMEGA',
        'id': 'ALPHAOMEGA',
        'abbr': 'ALPHAOMEGA'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 62.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10',
      'BBMRI_id': 'BBMRI_10',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/ALPHAOMEGA',
        'id': 'ALPHAOMEGA',
        'abbr': 'ALPHAOMEGA'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 65.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_100',
      'BBMRI_id': 'BBMRI_100',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/ALPHAOMEGA',
        'id': 'ALPHAOMEGA',
        'abbr': 'ALPHAOMEGA'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 61.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_1000',
      'BBMRI_id': 'BBMRI_1000',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/BIOMARCS',
        'id': 'BIOMARCS',
        'abbr': 'BIOMARCS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 62.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10000',
      'BBMRI_id': 'BBMRI_10000',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 69.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10001',
      'BBMRI_id': 'BBMRI_10001',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 75.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10002',
      'BBMRI_id': 'BBMRI_10002',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 64.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10003',
      'BBMRI_id': 'BBMRI_10003',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 68.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10004',
      'BBMRI_id': 'BBMRI_10004',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 67.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10005',
      'BBMRI_id': 'BBMRI_10005',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 65.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10006',
      'BBMRI_id': 'BBMRI_10006',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 53.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10007',
      'BBMRI_id': 'BBMRI_10007',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 56.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10008',
      'BBMRI_id': 'BBMRI_10008',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 61.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10009',
      'BBMRI_id': 'BBMRI_10009',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 59.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_1001',
      'BBMRI_id': 'BBMRI_1001',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/BIOMARCS',
        'id': 'BIOMARCS',
        'abbr': 'BIOMARCS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 68.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10010',
      'BBMRI_id': 'BBMRI_10010',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 57.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10011',
      'BBMRI_id': 'BBMRI_10011',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 53.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10012',
      'BBMRI_id': 'BBMRI_10012',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 63.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10013',
      'BBMRI_id': 'BBMRI_10013',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 63.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10014',
      'BBMRI_id': 'BBMRI_10014',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 57.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10015',
      'BBMRI_id': 'BBMRI_10015',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 55.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10016',
      'BBMRI_id': 'BBMRI_10016',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 49.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10017',
      'BBMRI_id': 'BBMRI_10017',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 76.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10018',
      'BBMRI_id': 'BBMRI_10018',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 73.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10019',
      'BBMRI_id': 'BBMRI_10019',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 65.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_1002',
      'BBMRI_id': 'BBMRI_1002',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/BIOMARCS',
        'id': 'BIOMARCS',
        'abbr': 'BIOMARCS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 53.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10020',
      'BBMRI_id': 'BBMRI_10020',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 62.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10021',
      'BBMRI_id': 'BBMRI_10021',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 57.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10022',
      'BBMRI_id': 'BBMRI_10022',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 97.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10023',
      'BBMRI_id': 'BBMRI_10023',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 93.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10024',
      'BBMRI_id': 'BBMRI_10024',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 89.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10025',
      'BBMRI_id': 'BBMRI_10025',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 89.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10026',
      'BBMRI_id': 'BBMRI_10026',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 92.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10027',
      'BBMRI_id': 'BBMRI_10027',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 91.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10028',
      'BBMRI_id': 'BBMRI_10028',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 93.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10029',
      'BBMRI_id': 'BBMRI_10029',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 94.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_1003',
      'BBMRI_id': 'BBMRI_1003',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/BIOMARCS',
        'id': 'BIOMARCS',
        'abbr': 'BIOMARCS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 70.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10030',
      'BBMRI_id': 'BBMRI_10030',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 91.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10031',
      'BBMRI_id': 'BBMRI_10031',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 92.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10032',
      'BBMRI_id': 'BBMRI_10032',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 90.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10033',
      'BBMRI_id': 'BBMRI_10033',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 92.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10034',
      'BBMRI_id': 'BBMRI_10034',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 91.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10035',
      'BBMRI_id': 'BBMRI_10035',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 96.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10036',
      'BBMRI_id': 'BBMRI_10036',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 91.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10037',
      'BBMRI_id': 'BBMRI_10037',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 89.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10038',
      'BBMRI_id': 'BBMRI_10038',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 67.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10039',
      'BBMRI_id': 'BBMRI_10039',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 52.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_1004',
      'BBMRI_id': 'BBMRI_1004',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/BIOMARCS',
        'id': 'BIOMARCS',
        'abbr': 'BIOMARCS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 52.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10040',
      'BBMRI_id': 'BBMRI_10040',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 65.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10041',
      'BBMRI_id': 'BBMRI_10041',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 64.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10042',
      'BBMRI_id': 'BBMRI_10042',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 69.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10043',
      'BBMRI_id': 'BBMRI_10043',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 63.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10044',
      'BBMRI_id': 'BBMRI_10044',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 56.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10045',
      'BBMRI_id': 'BBMRI_10045',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 63.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10046',
      'BBMRI_id': 'BBMRI_10046',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 63.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10047',
      'BBMRI_id': 'BBMRI_10047',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 55.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10048',
      'BBMRI_id': 'BBMRI_10048',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 72.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10049',
      'BBMRI_id': 'BBMRI_10049',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 70.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_1005',
      'BBMRI_id': 'BBMRI_1005',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/BIOMARCS',
        'id': 'BIOMARCS',
        'abbr': 'BIOMARCS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 53.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10050',
      'BBMRI_id': 'BBMRI_10050',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 73.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10051',
      'BBMRI_id': 'BBMRI_10051',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 59.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10052',
      'BBMRI_id': 'BBMRI_10052',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 59.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10053',
      'BBMRI_id': 'BBMRI_10053',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 57.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10054',
      'BBMRI_id': 'BBMRI_10054',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 34.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10055',
      'BBMRI_id': 'BBMRI_10055',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 91.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10056',
      'BBMRI_id': 'BBMRI_10056',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 93.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10057',
      'BBMRI_id': 'BBMRI_10057',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 95.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10058',
      'BBMRI_id': 'BBMRI_10058',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 89.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10059',
      'BBMRI_id': 'BBMRI_10059',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 91.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_1006',
      'BBMRI_id': 'BBMRI_1006',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/BIOMARCS',
        'id': 'BIOMARCS',
        'abbr': 'BIOMARCS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 66.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10060',
      'BBMRI_id': 'BBMRI_10060',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 100.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10061',
      'BBMRI_id': 'BBMRI_10061',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 93.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10062',
      'BBMRI_id': 'BBMRI_10062',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 91.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10063',
      'BBMRI_id': 'BBMRI_10063',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 92.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10064',
      'BBMRI_id': 'BBMRI_10064',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 91.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10065',
      'BBMRI_id': 'BBMRI_10065',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 93.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10066',
      'BBMRI_id': 'BBMRI_10066',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 94.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10067',
      'BBMRI_id': 'BBMRI_10067',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 82.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10068',
      'BBMRI_id': 'BBMRI_10068',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 79.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10069',
      'BBMRI_id': 'BBMRI_10069',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 59.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_1007',
      'BBMRI_id': 'BBMRI_1007',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/BIOMARCS',
        'id': 'BIOMARCS',
        'abbr': 'BIOMARCS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 64.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10070',
      'BBMRI_id': 'BBMRI_10070',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 57.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10071',
      'BBMRI_id': 'BBMRI_10071',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 63.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10072',
      'BBMRI_id': 'BBMRI_10072',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 59.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10073',
      'BBMRI_id': 'BBMRI_10073',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 60.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10074',
      'BBMRI_id': 'BBMRI_10074',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 59.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10075',
      'BBMRI_id': 'BBMRI_10075',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 66.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10076',
      'BBMRI_id': 'BBMRI_10076',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 63.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10077',
      'BBMRI_id': 'BBMRI_10077',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 60.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10078',
      'BBMRI_id': 'BBMRI_10078',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 57.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10079',
      'BBMRI_id': 'BBMRI_10079',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 63.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_1008',
      'BBMRI_id': 'BBMRI_1008',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/BIOMARCS',
        'id': 'BIOMARCS',
        'abbr': 'BIOMARCS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 67.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10080',
      'BBMRI_id': 'BBMRI_10080',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 57.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10081',
      'BBMRI_id': 'BBMRI_10081',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 49.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10082',
      'BBMRI_id': 'BBMRI_10082',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 53.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10083',
      'BBMRI_id': 'BBMRI_10083',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 53.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10084',
      'BBMRI_id': 'BBMRI_10084',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 53.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10085',
      'BBMRI_id': 'BBMRI_10085',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 75.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10086',
      'BBMRI_id': 'BBMRI_10086',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 72.0,
      'sex': 'female',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    },
    {
      '_href': '/api/v2/leiden_RP/BBMRI_10087',
      'BBMRI_id': 'BBMRI_10087',
      'biobank': {
        '_href': '/api/v2/leiden_biobanks/LLS',
        'id': 'LLS',
        'abbr': 'LLS'
      },
      'genotypes': false,
      'transcriptome': false,
      'metabolome': true,
      'age': 61.0,
      'sex': 'male',
      'smoking': false,
      'wbcc': false,
      'wgs': false,
      'methylome': false
    }
  ]
}
