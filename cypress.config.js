const { defineConfig } = require('cypress')
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 40000,
    requestTimeout: 20000,
    chromeWebSecurity: false,
    modifyObstructiveCode: false,
    failOnStatusCode: false,
    //specPattern: './**/*.cy.js', 
    //spec: './**/*.cy.js',
    baseUrl: "https://dev.websoft.ru:16598/",
  
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {downloadFile})
    },

  "reporter": "mochawesome",
  "reporterOptions": {
    "charts": true,
    "overwrite": false,
    "html": false,
    "json": true,
    "reportDir": "cypress/reports"
   }
  }
  //   "reporter": 'cypress-junit-reporter',
  //   "reporterOptions": {
  //       "mochaFile": "./results-[hash].xml"
  //   },
  // }
})