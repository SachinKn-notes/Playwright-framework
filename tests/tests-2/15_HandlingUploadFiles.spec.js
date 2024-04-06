const {test, expect} = require('@playwright/test');

test.skip('Upload Files - Single file', async ({page}) => {

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    await page.locator('#filesToUpload').setInputFiles('..\\tests\\resources\\Assignment_1.pdf');

    await expect(page.locator('#fileList li:nth-child(1)')).toHaveText('Assignment_1.pdf');

    await page.waitForTimeout(5000);

})

test.skip('Upload Files - Multiple files', async ({page}) => {

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    await page.locator('#filesToUpload').setInputFiles(['..\\tests\\resources\\Assignment_1.pdf', '..\\tests\\resources\\Assignment_2.pdf']);

    await expect(page.locator('#fileList li:nth-child(1)')).toHaveText('Assignment_1.pdf');
    await expect(page.locator('#fileList li:nth-child(2)')).toHaveText('Assignment_2.pdf');

    await page.waitForTimeout(5000);

})

test('Upload Files - Remove uploaded file', async ({page}) => {

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    await page.locator('#filesToUpload').setInputFiles(['..\\tests\\resources\\Assignment_1.pdf', '..\\tests\\resources\\Assignment_2.pdf']);

    await expect(page.locator('#fileList li:nth-child(1)')).toHaveText('Assignment_1.pdf');
    await expect(page.locator('#fileList li:nth-child(2)')).toHaveText('Assignment_2.pdf');

    await page.waitForTimeout(3000);

    // To remove the files.
    await page.locator('#filesToUpload').setInputFiles([]);

    await expect(page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected');

    await page.waitForTimeout(5000);

})

