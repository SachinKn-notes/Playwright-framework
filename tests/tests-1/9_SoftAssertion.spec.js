import { test, expect } from "@playwright/test";

test.use({
  viewport: {
    width: 1500,
    height: 720,
  },
});

test("asssertions", async ({ page }) => {
  await page.goto("https://www.google.com");

  await page.waitForTimeout(5000);

  // Soft Assertions
  await expect.soft(page).toHaveTitle("Odyssey UAT- AUD: Cruise Planner");
  await expect.soft(page).toHaveURL("https://www.google.com/");

  await page.close();
});
