# BeforeEach, AfterEach, BeforeAll, AfterAll.
```
const {test, expect} = require('@playwright/test');

let page;

// BeforeAll --------------------------------------------------------
test.beforeAll('beforeAll', async ({browser}) => {
    
    page = await browser.newPage();

    await page.goto('https://testautomationpractice.blogspot.com');

    console.log('beforeAll()');
})


// BeforeEach -------------------------------------------------------
test.beforeEach('beforeEach', async () => {
    console.log('beforeEach()');
})


// test_1 -----------------------------------------------------------
test('test_1', async () => {

    await page.fill('[id="name"]', "Sachin");

    console.log('test_1()');
})


// test_2 -----------------------------------------------------------
test('test_2', async () => {

    await page.fill('[id="email"]', "S@ch.in");

    console.log('test_2()');
})


// AfterEach --------------------------------------------------------
test.afterEach('afterEach', async () => {
    console.log('afterEach()');
})


// AfterAll ---------------------------------------------------------
test.afterAll('afterAll', async () => {

    await page.close();

    console.log('afterAll()');
})
```

