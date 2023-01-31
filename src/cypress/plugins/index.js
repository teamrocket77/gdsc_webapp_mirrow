const coverage = require('@cypress/code-coverage/task')
module.exports = (on, config) => {
    on('task', coverage.start())
    on('after:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome') {
            launchOptions.args.push('--disable-dev-shm-usage')
            return launchOptions
        }
    })
}