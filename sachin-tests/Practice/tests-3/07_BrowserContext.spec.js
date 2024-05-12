const {test, expect, chromium} = require('@playwright/test');


test('Browser Context & Creating Multiple pages', async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();
    const page2 = await context.newPage();
    
    console.log('Total number of pages created:', context.pages().length);

})

test('Handleing Multiple Pages/Tabs', async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();

    await page1.goto('https://testautomationpractice.blogspot.com');
    await page1.fill('[id="name"]', 'Sachin');

    const promisePage = context.waitForEvent('page');
    await page1.click('//button[.="New Browser Window"]');

    const page2 = await promisePage;

    console.log(await page1.title());
    console.log(await page2.title());

    console.log('Total number of pages created:', context.pages().length);
})

