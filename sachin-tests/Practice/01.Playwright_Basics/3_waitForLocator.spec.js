
const {test, expect} = require('@playwright/test')

test('waitForSelector', async ({page}) => {

    await page.goto('https://uat.odysol.com/swift/cruise?siid=130386');

    await expect(page).toHaveTitle('Odyssey UAT- USD: Cruise Planner');
    await expect(page).toHaveURL('https://uat.odysol.com/swift/cruise?siid=130386');

    console.log('pageTitle', await page.title());
    console.log('pageUrl', page.url());

    await page.waitForTimeout(5000);
    await page.waitForSelector('[data-ody-id="AdvanceSearchLink"]');
    await page.click('[data-ody-id="AdvanceSearchLink"]');

    await page.waitForSelector('[placeholder="Select Cruise Line"]');
    await page.fill('[placeholder="Select Cruise Line"]', 'Royal Caribbean');
    await page.keyboard.press('Enter');

    await page.waitForSelector('[placeholder="Select Ship"]');
    await page.fill('[placeholder="Select Ship"]', 'Freedom of the Seas');
    await page.keyboard.press('Enter');

    await page.waitForSelector('[data-ody-id="portsOfCall"]');
    await page.type('[data-ody-id="portsOfCall"]', 'Miami');
    await page.keyboard.press('Tab');

    await page.waitForSelector('[data-ody-id="SearchButton"]');
    await page.click('[data-ody-id="SearchButton"]');

    await page.waitForTimeout(2000);

    await page.close();

})

