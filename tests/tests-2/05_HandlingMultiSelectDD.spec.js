const {test, expect} = require('@playwright/test');

test('Handling Multi Select Dropdown', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com');

    await page.selectOption('#colors', ['red', 'green', 'white']);

    // Assertions
    await expect(page.locator('#colors')).toHaveValues(['red', 'green', 'white']);
    expect.soft((await page.locator('#colors').textContent()).includes('Black'), 'Colors dropdown includes Black.').toBeTruthy();
    await expect(page.locator('#colors option')).toHaveCount(5);
    expect(await page.locator('#colors option').count()).toBe(5);
    expect(await page.locator('#colors option').count() == 5).toBeTruthy();

    await page.waitForTimeout(5000);
})
