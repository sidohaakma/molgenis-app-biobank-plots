const runtimeOptions = {
  sampleTable: 'bbmri_subjects',
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
        {label: 'Not available', backgroundColor: tertiaryColor}
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
        {id: 'whole_genome_sequencing', label: 'Whole genome sequence'}
      ],
      type: 'MultiColumnChart', // Use MultiColumnChart for COMPOUND types
      datasets: [
        {label: 'Available', backgroundColor: primaryColor},
        {label: 'Unavailable', backgroundColor: secondaryColor}
      ]
    },
    {
      name: 'ever_smoked',
      inline: true,
      title: 'Ever smoked',
      type: 'ColumnChart',
      datasets: [
        {label: 'Yes', backgroundColor: primaryColor},
        {label: 'No', backgroundColor: secondaryColor},
        {label: 'Not available', backgroundColor: tertiaryColor}
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
        {label: 'Unknown', backgroundColor: tertiaryColor}
      ]
    }
  ]
}

export default runtimeOptions
