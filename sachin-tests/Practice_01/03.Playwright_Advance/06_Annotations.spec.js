//Annotations | Only, Skip, Fail, Fixme & Slow

const {test, expect} = require('@playwright/test');

// test.only('Test-1', async () => {
//     console.log('Test-1()');
// })

test.skip('Test-2', async () => {
    console.log('Test-2()');
})

test('Test-3', async ({browserName}) => {

    if (browserName === 'chromium') {
        test.skip();
    }

    console.log('Test-3()');
})

test('Test-4', async ({browserName}) => {
    test.fail();

    expect(1).toBe(2);

    console.log('Test-4()');
})

test('Test-5', async ({browserName}) => {
    test.fixme();

    expect(1).toBe(2);

    console.log('Test-5()');
})

test('Test-6', async ({browserName}, testInfo) => {

    console.log(testInfo.timeout);
    test.slow();
    console.log(testInfo.timeout);

    console.log('Test-6()');
})

