const {test, expect} = require('@playwright/test');

test('Right click actions', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('[id="name"]').click({button: "right"});

    await page.waitForTimeout(5000);
})