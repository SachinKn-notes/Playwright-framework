import { test, expect } from "@playwright/test";

test("asssertions", async ({ page }) => {
  
  let advanceSearchLinkLocator = '[data-ody-id="AdvanceSearchLink"]';
  let selectCruiseLineLocator = '[placeholder="Select Cruise Line"]';
  let selectShipLocator = '[placeholder="Select Ship"]';
  let searchButtonLocator = 'button[data-ody-id="SearchButton"]';
  let selectCruiseDropdownLocator = '[data-ody-id="cruiselines"] select';
  let selectCruiseDropdownOptionsLocator = selectCruiseDropdownLocator + ' option';

  await page.goto("https://uat.odysol.com/swift/cruise?siid=130386");

  await page.waitForTimeout(5000);

  // Assertions
  await expect(page).toHaveTitle("Odyssey UAT- USD: Cruise Planner");
  await expect(page).toHaveURL('https://uat.odysol.com/swift/cruise?siid=130386');

  await expect(page.locator(advanceSearchLinkLocator)).toBeVisible();
  await expect(page.locator(selectCruiseLineLocator)).toBeEnabled();
  await expect(page.locator(selectCruiseLineLocator)).not.toBeDisabled();

  await expect(page.locator('(//input[@value="Cruise Only"])[1]')).toBeChecked();

  await expect(page.locator(searchButtonLocator)).toHaveAttribute('name', 'modifySearch');
  await expect(page.locator(searchButtonLocator)).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)');
  await expect(page.locator(searchButtonLocator)).toHaveClass('btn btn-lg btn-outline-default d-flex align-items-center ng-star-inserted');
  
  await expect(page.locator(searchButtonLocator)).not.toHaveId('lastname');
  await expect(page.locator(searchButtonLocator)).not.toHaveJSProperty('loaded', true);
  // await expect(page.locator(searchButtonLocator)).not.toHaveScreenshot('image.png');

  await expect(page.locator(searchButtonLocator)).toHaveText('Search');
  await expect(page.locator(searchButtonLocator)).toContainText('Search');

  await page.fill(selectShipLocator, 'Miami');
  await expect(page.locator(selectShipLocator)).toHaveValue('Miami');

  // <select id="favorite-colors" multiple>
  //     <option value="R">Red</option>
  //     <option value="G">Green</option>
  //     <option value="B">Blue</option>
  // </select>

  // const multiSelectDdLocator = page.locator('id=favorite-colors');
  // await multiSelectDdLocator.selectOption(['R', 'G']);
  // await expect(multiSelectDdLocator).toHaveValues([/R/, /G/]);

  // const multiSelectDdOptionsLocator = page.locator('[id=favorite-colors] option');
  // await expect(multiSelectDdOptionsLocator).toHaveCount(3);

  await expect(page.locator(selectCruiseDropdownOptionsLocator)).toHaveCount(38);

  await page.close();

});
