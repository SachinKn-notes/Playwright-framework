const {test, expect} = require('@playwright/test');

test('Drag and Drop - Approach 1', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    let sourceEle = page.locator('#draggable');
    let targetEle = page.locator('#droppable');

    await sourceEle.dragTo(targetEle);

    await page.waitForTimeout(5000);
})

test('Drag and Drop - Approach 2', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    let sourceEle = page.locator('#draggable');
    let targetEle = page.locator('#droppable');

    await sourceEle.hover();
    await page.mouse.down();

    await targetEle.hover();
    await page.mouse.up();

    await page.waitForTimeout(5000);
})