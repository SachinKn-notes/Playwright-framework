const {test, expect} = require('@playwright/test');

test.beforeAll('Get Login details', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://rahulshettyacademy.com/client');

    await page.fill('#userEmail', 'sachinknsachi@gmail.com');
    await page.fill('#userPassword', 'Sachin@123');
    await page.click('[value="Login"]');

    await page.waitForLoadState('networkidle');

    await context.storageState({path: './sachin-tests/03.API_and_WEB/state.json'});
})

test('Api and Web mix testing-1', async ({browser}) => {

    const context = await browser.newContext({storageState: './sachin-tests/03.API_and_WEB/state.json'});
    const page = await context.newPage();

    // Open url and it will skip the login page and directly land you to home page.
    await page.goto('https://rahulshettyacademy.com/client');

    await page.click('//button[contains(.,"ORDERS")]');
    let ordersListLocators = page.locator('//table//tbody//tr//th');

    let ordersList = [];
    for (let i=0; i<await ordersListLocators.count(); i++) {
        ordersList.push(await ordersListLocators.nth(i).textContent());
    }

    expect(ordersList).not.toHaveLength(2);
    expect(ordersList).not.toEqual(expect.arrayContaining(["6581cade9fd99c85e8ee7ff5", "6581ca979fd99c85e8ee7faf"]));

    await page.pause();
})

test('Api and Web mix testing-2', async ({browser}) => {

    const context = await browser.newContext({storageState: './sachin-tests/03.API_and_WEB/state.json'});
    const page = await context.newPage();

    // Open url and it will skip the login page and directly land you to home page.
    await page.goto('https://rahulshettyacademy.com/client');

    await page.click('//button[contains(.,"ORDERS")]');
    let ordersListLocators = page.locator('//table//tbody//tr//th');

    let ordersList = [];
    for (let i=0; i<await ordersListLocators.count(); i++) {
        ordersList.push(await ordersListLocators.nth(i).textContent());
    }

    expect(ordersList).not.toHaveLength(2);
    expect(ordersList).not.toEqual(expect.arrayContaining(["6581cade9fd99c85e8ee7ff5", "6581ca979fd99c85e8ee7faf"]));

    await page.pause();
})
