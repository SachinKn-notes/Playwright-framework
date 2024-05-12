const {test, expect} = require("@playwright/test");

let page;

test.beforeEach(async ({browser}) => {
    test.setTimeout(60000);

    page = await browser.newPage();

    // Login
    await page.goto('https://uat.odysol.com/admin/login.aspx');

    await page.fill('.username input', 'QA AUTO2');
    await page.fill('.password input', 'Auto@Mar2024');

    await page.click('input.loginbtn');
})

test.afterEach(async () => {
    // Logout
    await page.click('a[title="Logout"]');
    await page.waitForTimeout(10000);

    await page.close();
})

test('Before Eaach and After Each - 1', async (/*{page}, testInfo*/) => {
    // Actions
    await page.click('//table[contains(@class,"popuptable")]//tr//td[text()="130386"]/following-sibling::td/a[1]');

    await page.waitForSelector('[data-ody-id="AgencyConfirmationNo"]', {state: 'attached', state: 'visible'});

    let ACNs = page.locator('[data-ody-id="AgencyConfirmationNo"]');

    for (let i=0; i<await ACNs.count(); i++) {
        console.log(await ACNs.nth(i).textContent());
    }
})

test('Before Eaach and After Each - 2', async (/*{page}, testInfo*/) => {
    // Actions
    await page.click('//table[contains(@class,"popuptable")]//tr//td[text()="130385"]/following-sibling::td/a[1]');

    await page.waitForSelector('[data-ody-id="AgencyConfirmationNo"]', {state: 'attached', state: 'visible'});

    let ACNs = page.locator('[data-ody-id="AgencyConfirmationNo"]');

    for (let i=0; i<await ACNs.count(); i++) {
        console.log(await ACNs.nth(i).textContent());
    }
})

