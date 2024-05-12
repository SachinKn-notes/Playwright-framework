const {test, expect} = require('@playwright/test');

test.skip('Handling web table - checkbox', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    let tableLocator = page.locator('#productTable')

    let tableHeaderLocator = tableLocator.locator('tr th');
    console.log('No. of columns:', await tableHeaderLocator.count());

    let tableRowsLocator = tableLocator.locator('tbody tr');
    console.log('No of rows:', await tableRowsLocator.count());

    await selectProduct(tableRowsLocator, page, 'Product 1');
    await selectProduct(tableRowsLocator, page, 'Product 3');
    await selectProduct(tableRowsLocator, page, 'Product 5');

    await page.waitForTimeout(5000);

})

async function selectProduct(rows, page, product) {
    await rows.filter({
        has: page.locator('td'),
        hasText: product
    }).locator('input').check();
}

test.skip('Handling web table - Printing table data as [][]', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    let tableLocator = page.locator('#productTable');

    let columns = tableLocator.locator('thead th');
    let rows = tableLocator.locator('tbody tr');

    let tableData = [];

    let headerData = []
    for (let i=0; i<await columns.count()-1; i++) {
        headerData.push(await columns.nth(i).textContent());
    }
    tableData.push(headerData);

    for (let i=0; i<await rows.count(); i++) {

        let row = rows.nth(i);
        let rowData = [];

        for (let j=0; j<await columns.count()-1; j++) {
            rowData.push(await row.locator('td').nth(j).textContent());
        }

        tableData.push(rowData);
    }

    console.log(tableData);

    await page.waitForTimeout(5000);

})

test.skip('Handling web table - Printing table data as []{}', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    let tableLocator = page.locator('#productTable');

    let columns = tableLocator.locator('thead th');
    let rows = tableLocator.locator('tbody tr');

    let tableData = [];

    let pagination = page.locator('#pagination a');
    for (let k=0; k<await pagination.count(); k++) {
        await pagination.nth(k).click();
        for (let i=0; i<await rows.count(); i++) {

            let row = rows.nth(i);
            let rowData = {};

            for (let j=0; j<await columns.count()-1; j++) {
                rowData[await columns.nth(j).textContent()] = await row.locator('td').nth(j).textContent();
            }

            tableData.push(rowData);
        }
    }

    console.log(tableData);

    await page.waitForTimeout(5000);

})

test('Handling web table - Part 2', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    let webTable = page.locator('[name="BookTable"]');

    let rows = webTable.locator('tr');
    let columns = webTable.locator('th');

    console.log(await rows.count());
    console.log(await columns.count());

    for (let i=0; i<await rows.count(); i++) {
        let row = rows.nth(i);
        let rowData = [];
        for (let j=0; j<await columns.count(); j++) {
            rowData.push(await row.locator('th,td').nth(j).textContent());
        }
        console.log(rowData);
    }
})

