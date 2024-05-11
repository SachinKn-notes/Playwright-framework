## Handling web elements. [Click here for more](https://github.com/sachinknsachi/Playwright-tutorials/tree/master/tests/tests-2)

### 1. Handling Input fields.
```
test('Handling Text field', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Approach-1 (fill will always clear and type)
    await page.locator('[id="name"]').fill('Sachin');

    // Approach-2
    await page.fill('[id="email"]', 's@ch.in');

    // Approach-3 (type will type letter by letter)
    await page.locator('[id="phone"]').type('1234567890');

    // Approach-4
    await page.type('[id="textarea"]', 'Sachin kn, Chikkamagaluru (D)');

})
```

### 2. Handling Click actions.
```
test('Handling Click actions', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Buttons ---------------------------------------------------------------------------

    // Approach-1
    await page.locator('(//*[@id="productTable"]//input)[1]').click();

    // Approach-2
    await page.click('(//*[@id="productTable"]//input)[2]');


    // Radio button -------------------------------------------------------------------------

    // Approach-1
    await page.locator('[id="male"]').check();

    // Approach-2
    await page.check('[id="female"]');


    // Checkboxes -------------------------------------------------------------------------

    // Approach-1
    await page.locator('[id="sunday"]').check();

    // Approach-2
    await page.check('[id="monday"]');

    // Unchecking the checkboxes
    await page.uncheck('[id="monday"]');

})
```

### 3. Handling Dropdowns.
```
test('Handling Dropdowns', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com');

    // using Visible text -------------------------------------------------------------

    // Approach-1
    await page.selectOption('[id="country"]', {label: 'Canada'});       

    // Approach-2
    await page.selectOption('[id="country"]', 'United Kingdom');

    
    // using Value --------------------------------------------------------------------

    // Approach-1
    await page.selectOption('[id="country"]', 'usa');

    // Approach-2
    await page.selectOption('[id="country"]', {value: 'france'});


    // using Index --------------------------------------------------------------------

    // Approach-1
    await page.selectOption('[id="country"]', {index: 5});


    // logging details
    console.log(await page.locator('#country option').count());
    console.log(await page.locator('#country option').nth(2).textContent());
    console.log((await page.locator('#country').textContent()).trim().split('\n'));

    // Assertions
    await expect(page.locator('#country option')).toHaveCount(10)
    expect(await page.locator('#country option').count() === 10).toBeTruthy();
    expect((await page.locator('#country').textContent()).includes('India')).toBeTruthy();

})
```

### 4. Handling Multi Select Dropdown.
```
test('Handling Multi Select Dropdown', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com');

    // Approach-1
    await page.selectOption('#colors', ['red', 'green', 'white']);

    // Assertions
    await expect(page.locator('#colors')).toHaveValues(['red', 'green', 'white']);
    await expect(page.locator('#colors option')).toHaveCount(5);
    expect(await page.locator('#colors option').count()).toBe(5);
    expect(await page.locator('#colors option').count() == 5).toBeTruthy();
})
```

### 5. Move to element.
```
test('Move to element', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com');

    await page.hover('#colors');

})
```

### 6. Handling Dialogs/Alert popups.

#### i. Alert with ok.
```
test('Alert with ok', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com');

    // By default Alert dialog will be disabled, this is to enable alert dialog
    page.on('dialog', async dialog => {

        console.log('dialog type:', dialog.type());
        console.log('dialog message:', dialog.message());

        // Alerts
        expect(dialog.type().includes('alert')).toBeTruthy();
        expect(dialog.type()).toContain('alert');
        expect(dialog.message().includes('I am an alert box!')).toBeTruthy();
        expect(dialog.message()).toContain('I am an alert box!');

        // to accept dialog
        await page.waitForTimeout(5000);
        await dialog.accept();
    })

    await page.click('//button[normalize-space()="Alert"]');

    await page.waitForTimeout(5000);

})
```

#### ii. Alert with confirmation.
```
test.skip('Alert with confirmation', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com');

    // By default Alert dialog will be disabled, this is to enable alert dialog
    page.on('dialog', async dialog => {

        console.log('dialog type:', dialog.type());
        console.log('dialog message:', dialog.message());

        // Alerts
        expect(dialog.type().includes('confirm')).toBeTruthy();
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message().includes('Press a button!')).toBeTruthy();
        expect(dialog.message()).toContain('Press a button!');

        // to accept dialog
        await page.waitForTimeout(5000);
        await dialog.dismiss();
    })

    await page.click('//button[normalize-space()="Confirm Box"]');

    console.log(await page.textContent('#demo'));

    expect(await page.textContent('#demo')).toContain('You pressed Cancel!');

    await page.waitForTimeout(5000);

})
```

#### iii. Alert with prompt.
```
test.skip('Alert with prompt', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com');

    // By default Alert dialog will be disabled, this is to enable alert dialog
    page.on('dialog', async dialog => {

        console.log('dialog type:', dialog.type());
        console.log('dialog message:', dialog.message());

        // Alerts
        expect(dialog.type().includes('prompt')).toBeTruthy();
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message().includes('Please enter your name:')).toBeTruthy();
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');

        // to accept dialog
        await page.waitForTimeout(5000);
        await dialog.accept('Sachi');
    })

    await page.click('//button[normalize-space()="Prompt"]');

    console.log(await page.textContent('#demo'));

    expect(await page.textContent('#demo')).toContain('Hello Sachi! How are you today?');

    await page.waitForTimeout(5000);

})
```

### 7. Handling Frames.

#### i. To get the frames count
```

```

#### ii. To get the frames count
```

```

#### ii. To get the frames count
```

```

#### iii. To get the frames count
```

```

### 8. Handling ------
```

```

1. # asdfg
2. # sdfghj
