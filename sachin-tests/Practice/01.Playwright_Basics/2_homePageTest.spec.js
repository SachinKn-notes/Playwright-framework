
const {test, expect} = require('@playwright/test')

test('Home test', async ({page}) => {

    await page.goto('https://uat.odysol.com/swift/cruise?siid=130386');

    let pageTitle = await page.title();
    let pageUrl = await page.url();

    console.log('pageTitle', pageTitle);
    console.log('pageUrl', pageUrl);

    await expect(page).toHaveTitle('Odyssey UAT- USD: Cruise Planner');
    await expect(page).toHaveURL('https://uat.odysol.com/swift/cruise?siid=130386');

    // await new Promise(r => setTimeout(r, 8000));
    await page.waitForTimeout(8000);

    // Approach-1 to locate & perform actions on web browser
    let advanceSearchLinkLocator = await page.locator('[data-ody-id="AdvanceSearchLink"]');
    advanceSearchLinkLocator.click();

    await page.waitForTimeout(2000);

    // Approach-2 to locate & perform actions on web browser
    await page.locator('[placeholder="Select Cruise Line"]').fill('Royal Caribbean');
    await page.keyboard.press('Enter');

    await page.waitForTimeout(4000);

    // Approach-3 to locate & perform actions on web browser -- fill will type/set the entaire text at a time.
    await page.fill('[placeholder="Select Ship"]', 'Freedom of the Seas');
    await page.keyboard.press('Enter');

    await page.waitForTimeout(4000);
    
    // Approach-4 to locate & perform actions on web browser -- Type will type letter by letter on the text field.
    await page.type('[data-ody-id="portsOfCall"]', 'Miami');
    await page.keyboard.press('Tab');

    await page.waitForTimeout(4000);

    // Approach-5 to locate & perform actions on web browser
    await page.click('//*[@data-ody-id="SearchButton"]');

    await page.waitForTimeout(2000);

    await page.close();
})




