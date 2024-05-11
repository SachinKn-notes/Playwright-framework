
## Annotations | Only, Skip, Fail, Fixme & Slow.

### 1. Only - Runs only the specific test and skips rest.
```
test.only('Test-1', async () => {
    console.log('Test-1()');
})
```

### 2. Skip - Skips the specific test.

#### i. Approach 1.
```
test.skip('Test-2', async () => {
    console.log('Test-2()');
})
```

#### ii. Approach 2.
```
test('Test-3', async ({browserName}) => {
    if (browserName === 'chromium') {
        test.skip();
    }
    console.log('Test-3()');
})
```

### 3. Fail - Expect the test to fail.
```
test('Test-4', async ({browserName}) => {
    test.fail();
    expect(1).toBe(2);
    console.log('Test-4()');
})
```

### 4. Fixme - Refers this test needs to be fixed & skips the test.
```
test('Test-5', async ({browserName}) => {
    test.fixme();
    expect(1).toBe(2);
    console.log('Test-5()');
})
```

### 5. Slow - Increase the time to 3x.
```
test('Test-6', async ({browserName}, testInfo) => {

    console.log(testInfo.timeout);
    test.slow();
    console.log(testInfo.timeout);

    console.log('Test-6()');
})
```

