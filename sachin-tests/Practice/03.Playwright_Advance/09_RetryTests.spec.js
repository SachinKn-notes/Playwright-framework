const {test} = require('@playwright/test');

test('Test-1', async () => {
    let random = Math.ceil(Math.random() * 10);
    console.log(random);
    if (random === 3 || random === 6 || random === 9)
        test.fail();
})

test('Test-2', async () => {
    let random = Math.ceil(Math.random() * 10);
    console.log(random);
    if (random === 3 || random === 6 || random === 9)
        test.fail();
})

test('Test-3', async () => {
    let random = Math.ceil(Math.random() * 10);
    console.log(random);
    if (random === 3 || random === 6 || random === 9)
        test.fail();
})

test('Test-4', async () => {
    let random = Math.ceil(Math.random() * 10);
    console.log(random);
    if (random === 3 || random === 6 || random === 9)
        test.fail();
})

test('Test-5', async () => {
    let random = Math.ceil(Math.random() * 10);
    console.log(random);
    if (random === 3 || random === 6 || random === 9)
        test.fail();
})
