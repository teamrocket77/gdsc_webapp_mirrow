const { defineConfig } = require('cypress')

module.exports = defineConfig({
  // for generating videos
  video : false,

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
