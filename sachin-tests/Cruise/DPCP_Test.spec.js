import {test} from '@playwright/test';
import {LoginModule} from '../../sachin-modules/LoginModule.js';
import {SiteSelectionModule} from '../../sachin-modules/SiteSelectionModule.js';
import {SearchModule} from '../../sachin-modules/SearchModule.js';

test('Login test - @ODY-1 - @smoke', async ({page}) => {

    test.setTimeout(480000);

    const siid = '130386';

    // Objects
    const loginModule = new LoginModule(page);
    const siteSelectionModule = new SiteSelectionModule(page);
    const searchModule = new SearchModule(page);

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

