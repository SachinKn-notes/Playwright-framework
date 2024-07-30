
const {test, expect} = require('@playwright/test')

test('locator methods', async ({page}) => {

    await page.goto('https://www.example.com');

    await page.waitForTimeout(15000);

    await page.getAttribute('locator');         // to get attribute value for provided attribute name.
    await page.getByAltText('locator');         // to locate an element, usually image, by its text alternative.
    await page.getByLabel('locator');           // to locate a form control by associated label's text.
    await page.getByPlaceholder('locator');     // to locate an input by placeholder.
    await page.getByRole('locator');            // to locate by explicit and implicit accessibility attributes.
    await page.getByTestId('locator');          // to locate an element based on its data-testid attribute (other attributes can be configured).
    await page.getByText('locator');            // to locate by text content.
    await page.getByTitle('locator');           // to locate an element by its title attribute.

    await page.close();
})




