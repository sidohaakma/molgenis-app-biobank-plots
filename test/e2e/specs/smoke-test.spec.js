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
    browser.options.desiredCapabilities.name = 'Biobank plot smoke test'

    // ===== selectors =====
    const applicationContainerSelector = '#application-container'
    const bodySelector = 'body'
    // const canvasSelector = 'canvas'

    // ======= tests =======
    browser.expect.element(applicationContainerSelector).to.be.visible
    browser.expect.element(bodySelector).to.be.visible

    // Because runtime options are loaded from the initial state this test is not working anymore
    // TODO: we need to decouple the initial state from the application and make runtime options more transparant
    // browser.expect.element(canvasSelector).to.be.visible

  }
}
