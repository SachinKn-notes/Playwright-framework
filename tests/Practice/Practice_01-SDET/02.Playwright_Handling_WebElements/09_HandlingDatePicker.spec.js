const {test, expect} = require('@playwright/test');

test('Date picker', async ({page}) => {

    await page.goto('https://uat.odysol.com/swift/cruise?siid=130386');

    let sailingsDateLocator = '[data-ody-id="sailingDates"]';
    let currentYearLocator = '//bs-days-calendar-view[1]//button[contains(@class,"current")][2]';
    let selectYearLocator = '//bs-years-calendar-view[1]//td[normalize-space()="{0}"]';
    let selectMonthLocator = '//bs-month-calendar-view[1]//td[normalize-space()="{0}"]';
    let selectDayLocator = '(//bs-days-calendar-view[1]//*[@bsdatepickerdaydecorator and not(@class="is-other-month")])[{0}]';

    await page.waitForSelector(sailingsDateLocator);
    await page.waitForTimeout(2000);
    await page.click(sailingsDateLocator);

    await page.waitForSelector(currentYearLocator);
    await page.click(currentYearLocator);

    await page.waitForSelector(selectYearLocator.replace('{0}', '2025'));
    await page.click(selectYearLocator.replace('{0}', '2025'));

    await page.waitForSelector(selectMonthLocator.replace('{0}', 'April'));
    await page.click(selectMonthLocator.replace('{0}', 'April'));

    await page.waitForSelector(selectDayLocator.replace('{0}', '1'));
    await page.click(selectDayLocator.replace('{0}', '1'));
    await page.click(selectDayLocator.replace('{0}', 'last()'));

    await page.waitForTimeout(5000);
})
