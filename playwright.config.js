// @ts-check
const { defineConfig, devices } = require('@playwright/test');
require('dotenv').config();

const screenshotTypes = {
  'on': 'on',
  'off': 'off',
  'only-on-failure': 'only-on-failure'
}

const tracesTypes = {
  'off': 'off',
  'on': 'on',
  'on-first-retry': 'on-first-retry',
  'on-all-retries': 'on-all-retries',
  'retain-on-failure': 'retain-on-failure',
  'retain-on-first-failure': 'retain-on-first-failure'
}

const videoTypes = {
  'off': 'off',
  'on': 'on',
  'on-first-retry': 'on-first-retry',
  'retain-on-failure': 'retain-on-failure',
}

module.exports = defineConfig({

  timeout: 60000,
  testDir: './sachin-tests',
  fullyParallel: Boolean(process.env.npm_config_fullyParallel) ? true : false,

  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  use: {
    baseURL: process.env.npm_config_baseUrl || 'https://uat.odysol.com',
    screenshot: screenshotTypes[process.env.npm_config_screenshot]  || 'only-on-failure',
    video: videoTypes[process.env.npm_config_video] || 'on-all-retries',
    trace: tracesTypes[process.env.npm_config_trace]  || 'retain-on-failure'
  },

  // reporter: 'html',
  // reporter: 'list',
  // reporter: 'dot',
  // reporter: [['json', {outputFile: 'test-results/results.json'}]],
  // reporter: [['junit', {outputFile: 'test-results/results.xml'}]],
  
  // reporter: [
  //   ['html'],
  //   ['list'],
  //   ['dot'],
  //   ['json', {outputFile: 'test-results/results.json'}],
  //   ['junit', {outputFile: 'test-results/results.xml'}]
  // ],

  reporter: [["line"], ["allure-playwright", {outputFolder: 'my-allure-results'}]],

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        headed: true,
      },
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox']
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari']
      },
    },

    /* Test against mobile viewports. */
    {
      name: 'Mobile Chrome',
      use: {
        ...devices['Pixel 5']
      },
    },
    {
      name: 'Mobile Safari',
      use: {
        ...devices['iPhone 12']
      },
    },

    /* Test against branded browsers. */
    {
      name: 'Edge',
      use: {
        ...devices['Desktop Edge'],
        channel: 'msedge'
      },
    },
    {
      name: 'Chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
        headed: true,
      },
    },
  ],

  globalSetup: require.resolve('./global-setup'),
  globalTeardown: require.resolve('./global-teardown'),
});

