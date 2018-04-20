/* eslint no-unused-expressions: 0 */
// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  before: function (browser) {
    browser.url(browser.globals.devServerURL)
  },

  after: function (browser) {
    browser.end()
  },

  'smoke test': function (browser) {
    // ======= setup =======
    browser.options.desiredCapabilities.name = 'biobank plot smoke test'

    // ===== selectors =====
    const applicationContainerSelector = '#application-container'
    const bodySelector = 'body'
    const canvasSelector = 'canvas'
    const maleCheckboxSelector = '#application-container > div > div > div.col-xs-12.col-sm-12.col-md-12.col-lg-3.col-xl-3 > div.d-none.d-lg-block.filter-container.p-4.mb-5 > div > div:nth-child(3) > div > div:nth-child(2) > div > div > div > div:nth-child(1) > label'
    const totalNumberOfSamplesContainerSelector = '.total-number-of-samples-container'

    // ======= tests =======
    browser.expect.element(applicationContainerSelector).to.be.visible
    browser.expect.element(bodySelector).to.be.visible
    browser.expect.element(canvasSelector).to.be.visible
    browser.expect.element(totalNumberOfSamplesContainerSelector).text.to.contain('Matching samples: 26227')

    browser.click(maleCheckboxSelector)
    browser.expect.element(totalNumberOfSamplesContainerSelector).text.to.contain('Matching samples: 11518')

    browser.click(maleCheckboxSelector)
    browser.expect.element(totalNumberOfSamplesContainerSelector).text.to.contain('Matching samples: 26227')
  }
}
