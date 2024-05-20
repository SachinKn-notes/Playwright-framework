const base = require("@playwright/test");

import { LoginModule } from "../sachin-modules/LoginModule.js";
import { SiteSelectionModule } from "../sachin-modules/SiteSelectionModule.js";
import { SearchModule } from "../sachin-modules/SearchModule.js";

const test = base.test.extend({
  loginModule: async ({ page }, use) => {
    const loginModule = new LoginModule(page);
    await use(loginModule);
  },

  siteSelectionModule: async ({ page }, use) => {
    const siteSelectionModule = new SiteSelectionModule(page);
    await use(siteSelectionModule);
  },

  searchModule: async ({ page }, use) => {
    const searchModule = new SearchModule(page);
    await use(searchModule);
  },
});

test.beforeEach(async ({ page }) => {
  console.log('Running before each test');
});

test.afterEach(async ({ page }) => {
  console.log('Running after each test');
});

export { test };