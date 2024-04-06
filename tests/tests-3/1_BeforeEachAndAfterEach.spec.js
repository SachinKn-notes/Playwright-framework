const {test, expect} = require("@playwright/test");

test('Before Eaach and After Each', async ({page}, testInfo) => {

    // // Increaase test timeout - Approach 1
    // test.setTimeout(60000);

    // Increaase test timeout - Approach 2
    console.log(testInfo.timeout);
    test.setTimeout(testInfo.timeout+10000);


    // Login
    await page.goto('https://uat.odysol.com/admin/login.aspx');

    await page.fill('.username input', 'QA AUTO2');
    await page.fill('.password input', 'Auto@Mar2024');

    await page.click('input.loginbtn');


    // Actions
    await page.click('//table[contains(@class,"popuptable")]//tr//td[text()="130386"]/following-sibling::td/a[1]');

    // await page.waitForFunction(() =>  document.querySelector('[data-ody-id="AgencyConfirmationNo"]')
    //     && document.querySelector('[data-ody-id="AgencyConfirmationNo"]').innerText.length > 1
    // );

    await page.waitForSelector('button#myButton', { state: 'attached' });

    let ACNs = page.locator('[data-ody-id="AgencyConfirmationNo"]');

    for (let i=0; i<await ACNs.count(); i++) {
        console.log(await ACNs.nth(i).textContent());
    }

    // Logout
    await page.click('a[title="Logout"]');

})

