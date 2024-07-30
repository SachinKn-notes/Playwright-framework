const {test, expect} = require('@playwright/test');

let token;

test('Api and Web mix testing', async ({request, page}) => {

    // get the token to bypass the login to application using API
    const loginResponse = await request.post('https://rahulshettyacademy.com/api/ecom/auth/login', {
        data: {
            userEmail: "sachinknsachi@gmail.com",
            userPassword: "Sachin@123"
        }
    })

    expect(loginResponse).toBeOK();
    expect(loginResponse.status()).toBe(200);
    expect((await loginResponse.json()).token).not.toBeUndefined();

    token = (await loginResponse.json()).token;

    // set the token to bypass the login to application into browser.
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, token);

    // Open url and it will skip the login page and directly land you to home page.
    await page.goto('https://rahulshettyacademy.com/client');
    
    // Create a order using API call
    const createOrderResponse = await request.post('https://rahulshettyacademy.com/api/ecom/order/create-order', {
        data: {
            orders: [
                {
                    country: "India", 
                    productOrderedId: "6581cade9fd99c85e8ee7ff5"
                },
                {
                    country: "India", 
                    productOrderedId: "6581ca979fd99c85e8ee7faf"
                }
            ]
        },
        headers: {
            Authorization: token
        }
    })

    expect(createOrderResponse).toBeOK();
    expect(createOrderResponse.status()).toBe(201);

    await page.click('//button[contains(.,"ORDERS")]');
    let ordersListLocators = page.locator('//table//tbody//tr//th');

    let ordersList = [];
    for (let i=0; i<await ordersListLocators.count(); i++) {
        ordersList.push(await ordersListLocators.nth(i).textContent());
    }

    expect(ordersList).not.toHaveLength(2);
    expect(ordersList).not.toEqual(expect.arrayContaining(["6581cade9fd99c85e8ee7ff5", "6581ca979fd99c85e8ee7faf"]));

})