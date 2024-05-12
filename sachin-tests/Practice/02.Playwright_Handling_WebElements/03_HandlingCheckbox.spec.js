const {test, expect} = require('@playwright/test');

test('Handling Checkboxes', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    for (let value of ['saturday', 'sunday'])
        await page.check('input[id="' + value + '"]');

    await expect(page.locator('input[id="saturday"]')).toBeChecked();
    expect(await page.locator('input[id="sunday"]').isChecked()).toBeTruthy();

    await page.uncheck('input[id="sunday"]');

    await expect(page.locator('input[id="sunday"]')).not.toBeChecked();
    expect(await page.locator('input[id="monday"]').isChecked()).toBeFalsy();

    await page.waitForTimeout(5000);

})
