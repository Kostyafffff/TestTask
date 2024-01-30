// @ts-check
const { test, expect } = require('@playwright/test');

test.describe.parallel('simple get suit', () => {
    test('simple GET test', async ({ request }) => {
        const response = await request.get('https://thinking-tester-contact-list.herokuapp.com/contacts');

        expect(response.status()).toBe(200);
    })
});