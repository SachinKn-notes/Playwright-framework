## BeforeEach, AfterEach, BeforeAll, AfterAll.
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

## Grouping Tests

### 1. Describe Block
```
const {test, expect} = require('@playwright/test');

// BeforeAll --------------------------------------------------------
test.beforeAll('beforeAll', async ({browser}) => {
    console.log('beforeAll()');
})


// BeforeEach -------------------------------------------------------
test.beforeEach('beforeEach', async () => {
    console.log('beforeEach()');
})

// Group-1 ----------------------------------------------------------
test.describe('Group-1', async () => {

    // test_1 -------------------------------------------------------
    test('Test-1', async ({page}) => {
        console.log("Test-1()")
    })

    // test_2 -------------------------------------------------------
    test('Test-2', async ({page}) => {
        console.log("Test-2()")
    })

})

// Group-2 ----------------------------------------------------------
test.describe('Group-2', async () => {

    // test_3 -------------------------------------------------------
    test('Test-3', async ({page}) => {
        console.log("Test-3()")
    })

    // test_4 -------------------------------------------------------
    test('Test-4', async ({page}) => {
        console.log("Test-4()")
    })

})

// AfterEach --------------------------------------------------------
test.afterEach('afterEach', async () => {
    console.log('afterEach()');
})

// AfterAll ---------------------------------------------------------
test.afterAll('afterAll', async () => {
    console.log('afterAll()');
})
```

### 2. Execute Specific Describe Block (test.describe.only)
```
test.describe.only('Group-1', async () => {

    // test_1 -------------------------------------------------------
    test('Test-1', async ({page}) => {
        console.log("Test-1()")
    })

    // test_2 -------------------------------------------------------
    test('Test-2', async ({page}) => {
        console.log("Test-2()")
    })

})
```

### 3. Skip Specific Describe Block (test.describe.skip)
```
test.describe.skip('Group-2', async () => {

    // test_3 -------------------------------------------------------
    test('Test-3', async ({page}) => {
        console.log("Test-3()")
    })

    // test_4 -------------------------------------------------------
    test('Test-4', async ({page}) => {
        console.log("Test-4()")
    })

})
```
