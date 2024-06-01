const {test, expect} = require('@playwright/test');

test('Handling Dropdowns', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com');

    await page.selectOption('[id="country"]', {label: 'Canada'});       // using Visible text

    await page.waitForTimeout(2000);

    await page.selectOption('[id="country"]', 'United Kingdom');         // using Visible text

    await page.waitForTimeout(2000);

    await page.selectOption('[id="country"]', 'usa');                   // using Value

    await page.waitForTimeout(2000);

    await page.selectOption('[id="country"]', {value: 'france'});       // using Value

    await page.waitForTimeout(2000);

    await page.selectOption('[id="country"]', {index: 5});              // using index 

    await page.waitForTimeout(2000);

    console.log(await page.locator('#country option').count());
    console.log(await page.locator('#country option').nth(2).textContent());
    console.log((await page.locator('#country').textContent()).trim().split('\n'));

    // Assertions
    await expect(page.locator('#country option')).toHaveCount(10)
    expect(await page.locator('#country option').count() === 10).toBeTruthy();
    expect((await page.locator('#country').textContent()).includes('India')).toBeTruthy();

    await page.waitForTimeout(5000);
})
