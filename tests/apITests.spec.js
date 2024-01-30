// @ts-check
const { test, expect } = require('@playwright/test');

test.describe.parallel('simple get suit', () => {
    test('simple GET test', async ({ request }) => {
        const response = await request.get('https://thinking-tester-contact-list.herokuapp.com/contacts');

        expect(response.status()).toBe(200);
    })
});

test('input incorrect text into form', async ({ page }) => {

    //Given
    const email = page.locator('#email');
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