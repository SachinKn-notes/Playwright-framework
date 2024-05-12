const {test, expect} = require('@playwright/test');

test('Handling Checkboxes', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.check('input[id="male"]');
    await expect(page.locator('input[id="male"]')).toBeChecked();
    expect(await page.locator('input[id="male"]').isChecked()).toBeTruthy();

    await page.waitForTimeout(1000);

    expect(await page.locator('input[id="female"]').isChecked()).toBeFalsy();
    await page.check('input[id="female"]');
    await expect(page.locator('input[id="male"]')).not.toBeChecked();

    await page.waitForTimeout(5000);

})
