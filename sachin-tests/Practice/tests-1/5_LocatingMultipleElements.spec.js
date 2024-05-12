
const {test, expect} = require('@playwright/test')

test('Locating Multiple Elements - Approach 1', async ({page}) => {

    await page.goto('https://uat.odysol.com/swift/cruise?siid=130386');

    await page.waitForTimeout(15000);

    let linkElements = await page.$$('//a');

    console.log(linkElements.length);

    for(const linkElement of linkElements) {
        const link = await linkElement.getAttribute('href');
        const text = await linkElement.textContent('href');
        console.log(text.trim(), '-->' ,link);
    }

    await page.close();
})


test('Locating Multiple Elements - Approach 2', async ({page}) => {

    await page.goto('https://uat.odysol.com/swift/cruise?siid=130386');

    await page.waitForTimeout(20000);

    let linkElements = page.locator('//a');

    console.log(await linkElements.count());

    for(let i=0; i<await linkElements.count(); i++) {
        const link = await linkElements.nth(i).getAttribute('href');
        const text = await linkElements.nth(i).textContent('href');
        console.log(text.trim(), '-->' ,link);
    }

    await page.close();
})


