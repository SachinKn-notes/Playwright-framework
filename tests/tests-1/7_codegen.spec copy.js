import { test, expect } from '@playwright/test';

test('codegen', async ({ page }) => {
  await page.goto('https://uat.odysol.com/swift/cruise?siid=130386');
  await page.getByRole('link', { name: 'Show Advanced Search' }).click();
  await page.getByPlaceholder('Sailing Dates', { exact: true }).click();
  await page.getByRole('button', { name: 'April' }).click();
  await page.getByText('September').first().click();
  await page.getByText('27').nth(1).click();
  await page.getByRole('gridcell', { name: '16' }).first().click();
  await page.getByText('30', { exact: true }).first().click();
  await page.getByPlaceholder('Select Cruise Line').click();
  await page.getByPlaceholder('Select Cruise Line').fill('royal');
  await page.getByPlaceholder('Select Cruise Line').press('Enter');
  await page.getByRole('button', { name: ' Search' }).click();
  await page.getByRole('button', { name: 'Book' }).click();
  await page.getByRole('link', { name: 'Book' }).click();
  await page.locator('div').filter({ hasText: /^Guest 1 \*$/ }).getByRole('spinbutton').fill('22');
  await page.locator('div').filter({ hasText: /^Guest 2 \*$/ }).getByRole('spinbutton').fill('24');
  await page.getByRole('button', { name: 'Continue' }).first().click();
  await page.locator('#select2-prpu-container').getByText('Select').click();
  await page.getByRole('treeitem', { name: 'DZ - Algeria' }).click();
  await page.getByRole('button', { name: 'Continue' }).nth(2).click();
  await page.getByRole('button', { name: 'Continue' }).nth(3).click();
});

// npx playwright test 7_codegen_1.spec.js --project=chromium --headed