/* eslint no-unused-expressions: 0 */
// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  before: function (browser) {
    // Wait for form to be loaded
    browser.url(browser.globals.devServerURL)
    browser.pause(browser.globals.waitBeforeTestStart)
  },

  after: function (browser) {
    // Close the browser after the suite is done
    browser.end()
  },

  'smoke test': function (browser) {
    // ======= setup =======
    browser.options.desiredCapabilities.name = 'biobank plot smoke test'

    // ===== selectors =====
    const applicationContainerSelector = '#application-container'
    const bodySelector = 'body'
    const canvasSelector = 'canvas'

    // ======= tests =======
    browser.expect.element(applicationContainerSelector).to.be.visible
    browser.expect.element(bodySelector).to.be.visible
    browser.expect.element(canvasSelector).to.be.visible

  }
}
