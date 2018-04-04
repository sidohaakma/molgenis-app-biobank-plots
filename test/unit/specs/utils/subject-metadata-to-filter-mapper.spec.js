import subjectMetadataToFilterMapper from 'src/utils/subject-metadata-to-filter-mapper'

describe('subjectMetadataToFilterMapper', () => {
  it('should map metadata to a category filter map', () => {
    const metadata = {
      attributes: []
    }

    const actual = subjectMetadataToFilterMapper(metadata)
    const expected = {}

    expect(actual).to.deep.equal(expected)
  })
})
