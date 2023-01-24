import { defineConfig } from 'cypress'

export default defineConfig({
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
  }
})
