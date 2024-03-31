const {test, expect} = require('@playwright/test')

test('Handling Input Fields', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    let firstnameLocator = '[id="name"]';

    await page.waitForSelector(firstnameLocator);
    let firstnameElement = page.locator(firstnameLocator);

    await expect(firstnameElement).toBeVisible();
    await expect(firstnameElement).toBeEmpty();
    await expect(firstnameElement).toBeEnabled();
    await expect(firstnameElement).toBeEditable();

    await page.fill(firstnameLocator, 'Sachin');

    await page.waitForTimeout(5000);

});
