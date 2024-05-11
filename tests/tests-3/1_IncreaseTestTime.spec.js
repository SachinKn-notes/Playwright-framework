const {test, expect} = require("@playwright/test");

test('Before Eaach and After Each', async ({page}, testInfo) => {

    // // Increaase test timeout - Approach 1
    // test.setTimeout(60000);

    
    console.log(testInfo.timeout);

    // Increaase test timeout - Approach 2
    test.setTimeout(testInfo.timeout+10000);

     console.log(testInfo.timeout);
})

