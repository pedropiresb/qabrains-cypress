const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  projectId: "fvqdk4",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
