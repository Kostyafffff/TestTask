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

test('input incorrect text into form', async ({ page }) => {

  //Given
  const email = page.locator('form #email');
  const password = page.locator('#password');
  const submitButton = page.locator('#submit');
  const expectedWarningText = 'Incorrect username or password';
  const warning = page.locator('#error');

  //When
  await email.inputValue('blabla');
  await password.inputValue('lalala');
  await submitButton.click();

  //Then
  await expect(warning).toHaveText(expectedWarningText);
});

test('Check correct link', async ({ page }) => {

  const locator = page.locator('div > a');
  await expect(locator).toHaveText('here');
  await expect(locator).toHaveAttribute('href', 'https://documenter.getpostman.com/view/4012288/TzK2bEa8');
});
