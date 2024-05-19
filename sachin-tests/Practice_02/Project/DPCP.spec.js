const { test, expect } = require('@playwright/test');
const { setupTestHooks } = require('./BaseTest');

// Import test hooks defined in testSetup.js
setupTestHooks();

// Your test suite
test.describe('My Test Suite', () => {
  test('Test 1', async ({ page }) => {
    console.log('Test 1');
  });

  test('Test 2', async ({ page }) => {
    console.log('Test 2');
  });

  // Add more tests as needed
});

