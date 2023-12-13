const { defineConfig } = require("cypress");

module.exports = defineConfig(
{
  viewportWidth: 1000,
  viewportHeight: 800,
  chromeWebSecurity : false,
  video: true,
  e2e: {
    experimentalRunAllSpecs: true
  },
});