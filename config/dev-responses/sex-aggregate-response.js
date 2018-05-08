module.exports = {
  'aggs':
    {
      'matrix':
        [[18920], [16408], [483]],
      'xLabels':
        [{'id': 'female', 'label': 'Female'}, {'id': 'male', 'label': 'Male'}, {'id': 'unk', 'label': 'Unknown'}],
      'yLabels':
        []
    }
  ,
  'xAttr':
    {
      'href':
        '/api/v2/bbmri_subjects/meta/sex', 'fieldType':
        'CATEGORICAL', 'name':
        'sex', 'label':
        'Sex', 'attributes':
        [], 'refEntity':
        {
          'href':
            '/api/v2/bbmri_sex', 'hrefCollection':
            '/api/v2/bbmri_sex', 'name':
            'bbmri_sex', 'label':
            'Sex', 'attributes':
            [{
              'href': '/api/v2/bbmri_sex/meta/id',
              'fieldType': 'STRING',
              'name': 'id',
              'label': 'ID',
              'attributes': [],
              'maxLength': 255,
              'auto': false,
              'nillable': false,
              'readOnly': true,
              'labelAttribute': false,
              'unique': true,
              'visible': false,
              'lookupAttribute': false,
              'isAggregatable': false
            }], 'labelAttribute':
            'label', 'idAttribute':
            'id', 'lookupAttributes':
            ['label'], 'isAbstract':
            false, 'writable':
            true, 'languageCode':
            'en'
        }
      ,
      'auto':
        false, 'nillable':
        false, 'readOnly':
        false, 'defaultValue':
        'unk', 'labelAttribute':
        false, 'unique':
        false, 'visible':
        true, 'lookupAttribute':
        false, 'isAggregatable':
        true
    }
  ,
  'href':
    '/api/v2/bbmri_subjects'
}
