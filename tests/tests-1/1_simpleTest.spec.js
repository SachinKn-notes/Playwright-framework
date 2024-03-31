
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

(async () => {

    // Creating browser instanse
    const browser = await chromium.launch({ headless: false });

    // Launching browser
    const page = await browser.newPage();

    // Launching the page
    await page.goto('https://uat.odysol.com/swift/cruise?siid=130386');

    // closing the browser
    await browser.close();

})();
