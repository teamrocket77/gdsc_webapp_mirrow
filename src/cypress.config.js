// import { defineConfig } from '@cypress/code-coverage'

// export default defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//       require('@cypress/code-coverage/task')(on, config);
//       config.supportFile = false;
//       on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'));
//       return config;
//     },
//   }
// })

const { defineConfig } = require('cypress')

module.exports = defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)
      // tell Cypress to use .babelrc file
      // and instrument the specs files
      // only the extra application files will be instrumented
      // not the spec files themselves
      on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'))

      return config
    },
  },
})