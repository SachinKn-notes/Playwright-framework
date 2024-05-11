const {test, expect} = require('@playwright/test');

test('Mouse hover', async ({page}) => {

    await page.goto('https://uat.odysol.com/swift/cruise?siid=130386');

    let themesLocator = '//a[text()="Themes"]';
    let selectThemeLocator = '//a[@href="https://ui.odysol.com/swift?siid=264733"]';

    await page.waitForSelector(themesLocator);
    await page.waitForTimeout(2000);
    await page.hover(themesLocator);  // this is to Hover over the element.

    await page.waitForSelector(selectThemeLocator);
    await page.click(selectThemeLocator);

    await page.waitForTimeout(5000);
})

