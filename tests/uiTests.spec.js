// @ts-check
const { test, expect } = require('@playwright/test');


test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`);
  await page.goto('https://thinking-tester-contact-list.herokuapp.com/');
});

test('page has title', async ({ page }) => {

  await expect(page).toHaveTitle(/Contact List App/);
});

test('Page has title text', async ({ page }) => {

  const locator = page.locator('h1');
  await expect(locator).toHaveText('Contact List App');
});