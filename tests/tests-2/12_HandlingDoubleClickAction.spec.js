const {test, expect} = require('@playwright/test');

test('Double click actions', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('button[ondblclick]').dblclick();

    expect((await page.locator('#field2').inputValue()).includes('Hello World!')).toBeTruthy();
    await expect(page.locator('#field2')).toHaveValue('Hello World!');

    await page.waitForTimeout(5000);
})