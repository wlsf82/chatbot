const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://chatter-gems.lovable.app',
    fixturesFolder: false,
    supportFile: false,
  },
})
