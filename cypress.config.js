const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://spencerlepine.github.io',
    specPattern: './*.spec.js',
    defaultCommandTimeout: 30000,
    pageLoadTimeout: 30000,
    chromeWebSecurity: false,
    supportFile: false,
    headlessMode: false,
  },
});
