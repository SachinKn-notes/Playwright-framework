const {test, expect} = require('@playwright/test');

test('Move to element', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com');

    await page.hover('#colors');

})
