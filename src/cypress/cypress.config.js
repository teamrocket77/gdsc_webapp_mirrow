const cypress = require('cypress')

let options = {"port": 3000,}
cypress
  .run({
    // the path is relative to the current working directory
    //spec: './screenshots.cy',
    spec: './cypress/e2e//screenshots.cy.js',
  },
  {
    "port" : 3000,
    "headless" : true,
  }
)
  .then((results) => {
    console.log(results)
  })
  .catch((err) => {
    console.error(err)
  })

