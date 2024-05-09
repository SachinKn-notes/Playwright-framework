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

<!-- ![image](https://github.com/sachinknsachi/Playwright-tutorials/assets/106311617/b761ed00-72be-41c7-9471-c1b1c756a795) -->
<img src="https://github.com/sachinknsachi/Playwright-tutorials/assets/106311617/b761ed00-72be-41c7-9471-c1b1c756a795" width="600">

```const { chromium } = require('playwright');

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
* node fileName.js```


kjhgffghjksdfghjkl;lkjhgfds
| asdfg | ASDF |
