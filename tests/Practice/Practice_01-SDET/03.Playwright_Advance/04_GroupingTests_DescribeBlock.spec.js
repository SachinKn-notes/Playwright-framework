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
