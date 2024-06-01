const {test, expect} = require('@playwright/test');

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjVhY2ZiMWFlMmFmZDRjMGJlZDMxNWMiLCJ1c2VyRW1haWwiOiJzYWNoaW5rbnNhY2hpQGdtYWlsLmNvbSIsInVzZXJNb2JpbGUiOjk5MTY0MjM2MjgsInVzZXJSb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE3MTcyNTQyODMsImV4cCI6MTc0ODgxMTg4M30.9dzH4KFxbCqkwH27j46RaxTPUR784y8SJdQLfr023J4";

test('Intercepting - Manipulating the response', async ({page}) => {

    // Login and open site
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, token);
    await page.goto('https://rahulshettyacademy.com/client');

    // get the response and manipulate
    await page.route('https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*', route => {
        const response = page.request.fetch(route.request());
        route.fulfill({
            response,
            body: '{"data":[],"message":"No Orders"}'
        })
    });

    await page.click('//button[contains(.,"ORDERS")]');
    // await page.waitForResponse('https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*');

    await page.pause();
})