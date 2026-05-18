// Cypress configuration file
// This file defines global settings for the test runner

const { defineConfig } = require('cypress')

module.exports = defineConfig({

  e2e: {

    // Base URL of the application under test
    // So we don’t need to write full URL in tests
    baseUrl: 'https://safora.se',

    // Disable video recording (faster execution)
    video: false,

    // Simple setup for intern level project
    supportFile: false
  }
})