## Handling web elements

### 1. Handling Text field.
```
test('Handling Text field', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Approach-1 (fill will always clear and type)
    await page.locator('[id="name"]').fill('Sachin');

    // Approach-2
    await page.fill('[id="email"]', 's@ch.in');

    // Approach-3 (type will type letter by letter)
    await page.locator('[id="phone"]').type('1234567890');

    // Approach-4
    await page.type('[id="textarea"]', 'Sachin kn, Chikkamagaluru (D)');

})
```
