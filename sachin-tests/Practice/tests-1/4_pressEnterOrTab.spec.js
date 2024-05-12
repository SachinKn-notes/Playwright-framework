
const {test, expect} = require('@playwright/test')

// test.use({
//     viewport: {
//         width: 1536, 
//         height: 735
//     }
// })

test('Keyboard actions', async ({page}) => {

    let advanceSearchLinkLocator = '[data-ody-id="AdvanceSearchLink"]';
    let selectCruiseLineLocator = '[placeholder="Select Cruise Line"]';
    let selectShipLocator = '[placeholder="Select Ship"]';
    let portsOfCallLocator = '[data-ody-id="portsOfCall"]';
    let searchButtonLocator = '[data-ody-id="SearchButton"]';

    await page.goto('https://uat.odysol.com/swift/cruise?siid=130386');

    await expect(page).toHaveTitle('Odyssey UAT- USD: Cruise Planner');
    await expect(page).toHaveURL('https://uat.odysol.com/swift/cruise?siid=130386');

    console.log('pageTitle', await page.title());
    console.log('pageUrl', page.url());

    await page.waitForTimeout(5000);
    await page.waitForSelector(advanceSearchLinkLocator);
    await page.click(advanceSearchLinkLocator);

    
    await page.waitForSelector(selectCruiseLineLocator);
    await page.fill(selectCruiseLineLocator, 'Royal Caribbean');
    await page.press(selectCruiseLineLocator, 'Enter');

    await page.waitForSelector(selectShipLocator);
    await page.fill(selectShipLocator, 'Freedom of the Seas');
    await page.press(selectShipLocator, 'Enter');

    await page.waitForSelector(portsOfCallLocator);
    await page.type(portsOfCallLocator, 'Miami');
    await page.press(portsOfCallLocator, 'Tab');

    await page.waitForSelector(searchButtonLocator);
    await page.click(searchButtonLocator);

    await page.waitForTimeout(2000);

    await page.close();

})

