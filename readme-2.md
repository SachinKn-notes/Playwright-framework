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

### 5. Handling Dialogs/Alert popups.

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
test('Alert with confirmation', async ({page}) => {

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
test('Alert with prompt', async ({page}) => {

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

### 6. Handling Frames.

#### i. To get the frames count
```
test('To get the frames count', async ({page}) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    let allFrames = page.frames();

    console.log('Toatl number of frames present are: ', allFrames.length)

})
```

#### ii. To interact with the frame using url
```
test('To interact with the frame using url', async ({page}) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    // using frame() - we can pass frame name directly or we can also pass object with url.
    let frame_1 = page.frame({url: /.*frame_1.html/});

    await frame_1.fill('[name="mytext1"]', 'Hello');

    await frame_1.waitForTimeout(5000);

})
```

#### iii. To interact with the frame using frame locator
```
test('To interact with the frame using frame locator', async ({page}) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    // using frameLocator()
    let frame_1 = page.frameLocator('[src="frame_1.html"]');

    await frame_1.fill('[name="mytext1"]', 'Hello');

    await frame_1.waitForTimeout(5000);

})
```

#### iiii. To interact with the inner frame
```
test('To interact with the inner frame', async ({page}) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    // using frameLocator()
    let allInnerFrames = page.frame({url: /.*frame_3.html/}).childFrames();

    await allInnerFrames[0].click('(//div[@role="listitem"])[1]//span[@role="presentation"]//label[.="Other:"]');
    await allInnerFrames[0].fill('(//div[@role="listitem"])[1]//span[@role="presentation"]//input', "Hello I'm Sachi");

    await allInnerFrames[0].waitForTimeout(5000);

})
```

### 7. Elements.filter() - filtering the located elements.
```
test('Elements.filter()', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    
    let tableRow = page.locator('[id="productTable"] tr');

    /*
        tableRow locator will match all the rows of a table including header,
        in that we need to filter which row is having checkbix & name Product-3
        and we need to click on the check box
    */

    let filterdTableRow = tableRow.filter({
        has: page.locator('td'),
        hasText: 'Product 3'
    })

    await filterdTableRow.locator('input').click();

})
```

### 8. Handling web table

#### i. Printing web table data
```
test('Printing web table', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    let webTable = page.locator('[name="BookTable"]');
    let tableRow = webTable.locator('tr');

    for (let i=0; i<await tableRow.count(); i++) {
        let rowData = [];
        for (let j=0; j<await tableRow.nth(i).locator('th,td').count(); j++) {
            rowData.push(await tableRow.nth(i).locator('th,td').nth(j).textContent());
        }
        console.log(rowData.join('\t'));
    }
})
```
##### Output
```
BookName                Author      Subject         Price
Learn Selenium          Amit        Selenium        300
Learn Java              Mukesh      Java            500
Learn JS                Animesh     Javascript      300
Master In Selenium      Mukesh      Selenium        3000
Master In Java          Amod        JAVA            2000
Master In JS            Amit        Javascript      1000
```

#### ii. Printing table data as []{}
```
test('Printing table data as []{}', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    let webTable = page.locator('[name="BookTable"]');

    let tableRow = webTable.locator('tr');
    let tableHeaderRow = tableRow.filter({has: page.locator('th')});
    let tableDataRow = tableRow.filter({has: page.locator('td')});

    let tableData = [];
    for (let i=0; i<await tableDataRow.count(); i++) {
        let rowData = {};
        for (let j=0; j<await tableDataRow.nth(i).locator('td').count(); j++) {
            
            let key = await tableHeaderRow.locator('th').nth(j).textContent();
            let value = await tableDataRow.nth(i).locator('td').nth(j).textContent();

            rowData[key] = value;
            
        }
        tableData.push(rowData);
    }

    console.log(tableData);
})
```
##### Output
```
[
  {
    BookName: 'Learn Selenium',
    Author: 'Amit',
    Subject: 'Selenium',
    Price: '300'
  },
  {
    BookName: 'Learn Java',
    Author: 'Mukesh',
    Subject: 'Java',
    Price: '500'
  },
  {
    BookName: 'Learn JS',
    Author: 'Animesh',
    Subject: 'Javascript',
    Price: '300'
  },
  {
    BookName: 'Master In Selenium',
    Author: 'Mukesh',
    Subject: 'Selenium',
    Price: '3000'
  },
  {
    BookName: 'Master In Java',
    Author: 'Amod',
    Subject: 'JAVA',
    Price: '2000'
  },
  {
    BookName: 'Master In JS',
    Author: 'Amit',
    Subject: 'Javascript',
    Price: '1000'
  }
]
```

### 9. Move to element / Mouse Hover
```
test('Move to element', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com');

    await page.hover('#colors');

})
```

### 10. Mouse Actions
```

```

### 11. Handling Keyboard Actions
```

```

### 12. HandlingUploadFiles
```

```

