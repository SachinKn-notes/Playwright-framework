# Playwright Notes
## Commands
1. **npm init playwright@latest** -->  To install playwright
2. **npx playwright test** --> Runs the end-to-end tests.
3. **npx playwright test --ui** --> Starts the interactive UI mode.
4. **npx playwright test --project=chromium** --> Runs the tests only on Desktop Chrome.
5. **npx playwright test --headed** --> Runs the tests in headed mode.
6. **npx playwright test example** --> Runs the tests in a specific file.
7. **npx playwright test --debug** --> Runs the tests in debug mode.
8. **npx playwright codegen** --> Auto generate tests with Codegen.
9. **npx playwright show-report** --> To see report.
10. **npx playwright test uat\homePageTest.spec.js** --> To run only specific module tests
11. **npx playwright test uat\homePageTest** --> To run only specific module tests
12. **npx playwright test homePageTest.spec.js --project=chromium --headed --debug** --> To debug

## Playwright Test Examples
### 1. Simple Test in Playwright - [image link](https://prnt.sc/HyZdrGhIDUmD)
<details>
<summary>Code - Click to expand</summary>

```
const { chromium } = require('playwright');

async function test_1() {

    // Creating browser instanse
    const browser = await chromium.launch({ headless: false });

    // Launching browser
    const page = await browser.newPage();

    // Launching the page
    await page.goto('https://www.google.com');

    // closing the browser
    await browser.close();

}

test_1();


To run this execute below command
----------------------------------------
- node fileName.js
```

</details>

<!-- ![image](https://github.com/sachinknsachi/Playwright-tutorials/assets/106311617/b761ed00-72be-41c7-9471-c1b1c756a795) -->
<img src="https://github.com/sachinknsachi/Playwright-tutorials/assets/106311617/b761ed00-72be-41c7-9471-c1b1c756a795" width="700">


### 2. First Test in Playwright framework - [image link](https://prnt.sc/RfIDMPTYQxq9)
<details>
<summary>Code - Click to expand</summary>

```
const {test, expect} = require('@playwright/test')

test('Home test', async ({page}) => {

    await page.goto('https://uat.odysol.com/swift/cruise?siid=130386');

    let pageTitle = await page.title();
    let pageUrl = await page.url();

    console.log('pageTitle', pageTitle);
    console.log('pageUrl', pageUrl);

    await expect(page).toHaveTitle('Odyssey UAT- USD: Cruise Planner');
    await expect(page).toHaveURL('https://uat.odysol.com/swift/cruise?siid=130386');

    // await new Promise(r => setTimeout(r, 8000));
    await page.waitForTimeout(8000);

    // Approach-1 to locate & perform actions on web browser
    let advanceSearchLinkLocator = await page.locator('[data-ody-id="AdvanceSearchLink"]');
    advanceSearchLinkLocator.click();

    await page.waitForTimeout(2000);

    // Approach-2 to locate & perform actions on web browser
    await page.locator('[placeholder="Select Cruise Line"]').fill('Royal Caribbean');
    await page.keyboard.press('Enter');

    await page.waitForTimeout(4000);

    // Approach-3 to locate & perform actions on web browser -- fill will type/set the entaire text at a time.
    await page.fill('[placeholder="Select Ship"]', 'Freedom of the Seas');
    await page.keyboard.press('Enter');

    await page.waitForTimeout(4000);
    
    // Approach-4 to locate & perform actions on web browser -- Type will type letter by letter on the text field.
    await page.type('[data-ody-id="portsOfCall"]', 'Miami');
    await page.keyboard.press('Tab');

    await page.waitForTimeout(4000);

    // Approach-5 to locate & perform actions on web browser
    await page.click('//*[@data-ody-id="SearchButton"]');

    await page.waitForTimeout(2000);

    await page.close();
})
```

</details>

<img src="https://github.com/sachinknsachi/Playwright-tutorials/assets/106311617/8f924cca-a52e-4e1f-82f3-e4bb6ec3f136" width="700">

## Assertions
### Positive assertions
- await expect(page).**toHaveTitle**('--title');
- await expect(page).**toHaveURL**('--url');
* await expect(page.locator('--locator')).**toBeVisible**();
* await expect(page.locator('--locator')).**toBeEnabled**();
* await expect(page.locator('--locator')).**toBeDisabled**();
* await expect(page.locator('--locator')).**toBeChecked**();
  
- await expect(page.locator('--locator')).**toHaveAttribute**('name', 'modifySearch');
- await expect(page.locator('--locator')).**toHaveCSS**('background-color', 'rgba(0, 0, 0, 0)');
- await expect(page.locator('--locator')).**toHaveClass**('btn btn-lg btn-outline-default d-flex align-items-center ng-star-inserted');
- await expect(--locator).**toHaveId**('lastname');
- await expect(--locator).**toHaveJSProperty**('loaded', true);
- await expect(--locator).**toHaveScreenshot**('image.png');
- await expect(--locator).**toHaveText**('Search');
- await expect(--locator).**toContainText**('Search');
- await expect(--locator).**toHaveValue**('Miami');

```
<select id="favorite-colors" multiple>
    <option value="R">Red</option>
    <option value="G">Green</option>
    <option value="B">Blue</option>
</select>
```

const multiSelectDdLocator = page.locator('id=favorite-colors');
await multiSelectDdLocator .selectOption(['R', 'G']);
* await expect(multiSelectDdLocator ).**toHaveValues**([/R/, /G/]);

const multiSelectDdOptionsLocator = page.locator('[id=favorite-colors] option');
* await expect(multiSelectDdOptionsLocator).**toHaveCount**(3);
### Negative Assertions
* expect(page).**not**.**toHave**--()
