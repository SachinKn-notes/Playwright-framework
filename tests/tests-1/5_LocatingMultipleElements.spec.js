
const {test, expect} = require('@playwright/test')

test('Locating Multiple Elements', async ({page}) => {

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




