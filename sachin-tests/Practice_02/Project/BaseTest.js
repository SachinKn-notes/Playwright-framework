const { test } = require('@playwright/test');

function setupTestHooks() {
    
    // Before all tests in the suite
    test.beforeAll(async () => {
    console.log('Running before all tests...');
    });

    // After all tests in the suite
    test.afterAll(async () => {
    console.log('Running after all tests...');
    });

    // Before each test
    test.beforeEach(async ({ page }) => {
    console.log('Running before each test...');
    });

    // After each test
    test.afterEach(async ({ page }) => {
    console.log('Running after each test...');
    });
}

module.exports = { setupTestHooks };