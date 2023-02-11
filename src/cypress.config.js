const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // for generating videos
  video: false,
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  env: {
    codeCoverage: {
      url: "/api/__coverage__",
      exclude: "cypress/**/*.*",
    }
  },
  e2e: {
    supportFile: false,
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      require("@cypress/code-coverage/task")(on, config);
      return config
    },
  },
});
