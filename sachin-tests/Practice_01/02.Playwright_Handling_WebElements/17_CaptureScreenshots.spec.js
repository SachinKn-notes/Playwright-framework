const {test, expect} = require('@playwright/test');

test('Page Screenshot', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com');

    await page.screenshot({path: 'test-results/screenshots/HomePage_' + Date.now() + '.png'});
})

test('Full Page Screenshot', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com');

    await page.screenshot({path: 'test-results/screenshots/FullPage_' + Date.now() + '.png', fullPage: true});
})

test('Element Screenshot', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com');

    await page.locator('[name="BookTable"]').screenshot({path: 'test-results/screenshots/Element_' + Date.now() + '.png'});
})
