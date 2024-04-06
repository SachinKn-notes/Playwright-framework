const {test, expect} = require('@playwright/test');

test.skip('Keyboard actions - Copy paste text', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com');

    await page.fill('#field1', 'My name is Sachin.');

    await page.press('#field1', 'Control+A');
    await page.press('#field1', 'Control+C');
    await page.press('#field2', 'Control+V');

    await page.waitForTimeout(5000);

})

test.skip('Keyboard actions - clear and type - Approach 1', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com');

    await page.fill('#field1', 'Hello Bro!');

    await page.waitForTimeout(5000);

})

test.skip('Keyboard actions - clear and type - Approach 2', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com');

    await page.click('#field1', {clickCount: 3});
    await page.press('#field1', 'Backspace');

    await page.type('#field1', 'Hello Bro!');

    await page.waitForTimeout(5000);

})

test.skip('Keyboard actions - clear and type - Approach 3', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com');

    await page.press('#field1', 'Control+A');
    await page.press('#field1', 'Backspace');

    await page.type('#field1', 'Hello Bro!');

    await page.waitForTimeout(5000);

})

test('Keyboard actions - clear and type - Approach 4', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com');


    await page.click('#field1');

    await page.keyboard.down('Control');
    await page.keyboard.down('A');
    await page.keyboard.up('A');
    await page.keyboard.up('Control');

    await page.keyboard.down('Backspace');
    await page.keyboard.up('Backspace');

    await page.fill('#field1', 'Hello Bro!');

    await page.waitForTimeout(5000);

})

