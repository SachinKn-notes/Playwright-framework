const {test, expect} = require('@playwright/test');

test('Test_1 @sanity', async () => {
    console.log('Test_1');
})

test('Test_2 @sanity', async () => {
    console.log('Test_2');
})

test('Test_3 @reg', async () => {
    console.log('Test_3');
})

test('Test_4 @reg', async () => {
    console.log('Test_4');
})

test('Test_5 @sanity @reg', async () => {
    console.log('Test_5');
})

