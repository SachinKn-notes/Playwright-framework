// import {test} from '../../sachin-hub/BaseTest';
const { test } = require('../../../libs/BaseTest');

test('Login test - @ODY-1 - @smoke', async ({page, loginModule, siteSelectionModule, searchModule}) => {

    test.setTimeout(480000);

    const siid = '130386';

    // Login Page actions
    await loginModule.waitForPageToLoad();
    await loginModule.openUrl();
    await loginModule.login();

    // Site Selection Page actions
    await siteSelectionModule.waitForPageToLoad();
    await siteSelectionModule.selectSite(siid);

    // Search Page actions
    await searchModule.openSearchPage(siid);
    await searchModule.waitForPageToLoad();
    await searchModule.selectSailingDates();
    await searchModule.selectCruiseline();
    await searchModule.clickSearchButton();

    // Results Page actions
    await searchModule.clickBookButton();

    await page.waitForTimeout(20000);

})

test('Login test - @ODY-2 - @smoke', async ({page, loginModule, siteSelectionModule, searchModule}) => {

    test.setTimeout(480000);

    const siid = '130386';

    // Login Page actions
    await loginModule.waitForPageToLoad();
    await loginModule.openUrl();
    await loginModule.login();

    // Site Selection Page actions
    await siteSelectionModule.waitForPageToLoad();
    await siteSelectionModule.selectSite(siid);

    // Search Page actions
    await searchModule.openSearchPage(siid);
    await searchModule.waitForPageToLoad();
    await searchModule.selectSailingDates();
    await searchModule.selectCruiseline();
    await searchModule.clickSearchButton();

    // Results Page actions
    await searchModule.clickBookButton();

    await page.waitForTimeout(20000);

})