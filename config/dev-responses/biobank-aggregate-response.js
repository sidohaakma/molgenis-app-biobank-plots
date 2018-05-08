module.exports = {
  'aggs': {
    'matrix': [
      [
        877
      ],
      [
        1523
      ],
      [
        213
      ],
      [
        979
      ],
      [
        447
      ],
      [
        259
      ],
      [
        1853
      ],
      [
        1960
      ],
      [
        1387
      ],
      [
        500
      ],
      [
        435
      ],
      [
        500
      ],
      [
        964
      ],
      [
        1616
      ],
      [
        2396
      ],
      [
        998
      ],
      [
        90
      ],
      [
        3495
      ],
      [
        193
      ],
      [
        983
      ],
      [
        109
      ],
      [
        5434
      ],
      [
        138
      ],
      [
        331
      ],
      [
        120
      ],
      [
        234
      ],
      [
        1198
      ],
      [
        1480
      ],
      [
        5099
      ]
    ],
    'xLabels': [
      {
        'description': 'The Alpha Omega Trial investigated in patients who have had heart attack whether cardiovascular diseases can be prevented by low-dose supplementation of omega-3 fatty acids in margarines',
        'id': 'ALPHAOMEGA',
        'abbr': 'ALPHAOMEGA'
      },
      {
        'description': 'BIOMarker study to identify the Acute risk of a Coronary Syndrome',
        'id': 'BIOMARCS',
        'abbr': 'BIOMARCS'
      },
      {
        'id': 'CHARM',
        'abbr': 'CHARM'
      },
      {
        'description': 'Cohort Heup En Cohort Knie',
        'id': 'CHECK',
        'abbr': 'CHECK'
      },
      {
        'id': 'CODAM',
        'abbr': 'CODAM'
      },
      {
        'id': 'CSF',
        'abbr': 'CSF'
      },
      {
        'description': 'The Maastricht Study is a unique study of the South Limburg population the prevalence, causes and treatment of type 2 diabetes (diabetes), cardiovascular diseases and other chronic conditions',
        'id': 'DMS',
        'abbr': 'DMS'
      },
      {
        'id': 'DZS_WF',
        'abbr': 'DZS_WF'
      },
      {
        'id': 'ERF',
        'abbr': 'ERF'
      },
      {
        'description': 'The aim of the 500FG project is to characterize the interaction between the genetic background of the host, the microbiome composition of different niches, and the consequences on an array of physiological functions',
        'id': 'FUNCTGENOMICS',
        'abbr': 'FUNCTGENOMICS'
      },
      {
        'description': 'Genetics of ARthritis en Progression',
        'id': 'GARP',
        'abbr': 'GARP'
      },
      {
        'description': 'Healthy Life in an Urban Setting',
        'id': 'HELIUS',
        'abbr': 'HELIUS'
      },
      {
        'id': 'HOF',
        'abbr': 'HOF'
      },
      {
        'description': 'LifeLines enables research on healthy aging',
        'id': 'LIFELINES',
        'abbr': 'LIFELINES'
      },
      {
        'description': 'Leiden Longevity Study (Offspring and their partners)',
        'id': 'LLS_PARTOFFS',
        'abbr': 'LLS_PARTOFFS'
      },
      {
        'description': 'Leiden Longevity Study (Nonagenarians)',
        'id': 'LLS_SIBS',
        'abbr': 'LLS_SIBS'
      },
      {
        'id': 'MRS',
        'abbr': 'MRS'
      },
      {
        'description': 'Netherlands Study of Depression and Anxiety',
        'id': 'NESDA',
        'abbr': 'NESDA'
      },
      {
        'id': 'PAN',
        'abbr': 'PAN'
      },
      {
        'description': 'Prospective Study of Pravastatin in the Elderly at Risk',
        'id': 'PROSPER',
        'abbr': 'PROSPER'
      },
      {
        'id': 'RAAK',
        'abbr': 'RAAK'
      },
      {
        'id': 'RS',
        'abbr': 'RS'
      },
      {
        'id': 'STABILITEIT',
        'abbr': 'STABILITEIT'
      },
      {
        'description': 'Glycometabolic Intervention as adjunct to Primary percutaneous intervention in ST elevation myocardial infarction',
        'id': 'STEMI_GIPS-III',
        'abbr': 'STEMI_GIPS-III'
      },
      {
        'id': 'TACTICS',
        'abbr': 'TACTICS'
      },
      {
        'id': 'TOMAAT',
        'abbr': 'TOMAAT'
      },
      {
        'description': 'Utrecht Coronary Biobank',
        'id': 'UCORBIO',
        'abbr': 'UCORBIO'
      },
      {
        'id': 'VUMC_ADC',
        'abbr': 'VUMC_ADC'
      },
      {
        'description': 'Netherlands Twin Register',
        'id': 'VUNTR',
        'abbr': 'VUNTR'
      }
    ],
    'yLabels': []
  },
  'xAttr': {
    'href': '/api/v2/bbmri_subjects/meta/biobank',
    'fieldType': 'CATEGORICAL',
    'name': 'biobank',
    'label': 'Biobank',
    'attributes': [],
    'refEntity': {
      'href': '/api/v2/bbmri_biobanks',
      'hrefCollection': '/api/v2/bbmri_biobanks',
      'name': 'bbmri_biobanks',
      'label': 'Biobanks',
      'attributes': [
        {
          'href': '/api/v2/bbmri_biobanks/meta/id',
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
  'href': '/api/v2/bbmri_subjects'
}
