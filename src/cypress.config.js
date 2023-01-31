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
    baseUrl : 'http://localhost:3000',
	  env :{
		  codeCoverage:  {
			  url :  "/api/__coverage__"
		  }
	  },
    setupNodeEvents(on, config) {
	    require('@cypress/code-coverage/task')(on, config)
      // implement node event listeners here
      return config
    },
  },
})
