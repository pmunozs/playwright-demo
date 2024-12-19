import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker/locale/en';

test.describe('signup', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('signup');
        await page.locator('.fc-cta-consent').click();
    });

    test('user can signup', async ({ page }) => {
        await page.getByTestId('signup-name').fill(faker.person.firstName());
        await page.getByTestId('signup-email').fill(faker.internet.email());
        await page.getByTestId('signup-button').click();

        await expect(page.locator('.login-form')).toBeVisible();

        // Account information
        await page.locator('#id_gender1').click();
        await page.getByTestId('password').fill(faker.internet.password());
        await page.getByTestId('days').selectOption('23');
        await page.getByTestId('months').selectOption('April');
        await page.getByTestId('years').selectOption('1990');

        // Addres information
        await page.getByTestId('first_name').fill(faker.person.firstName());
        await page.getByTestId('last_name').fill(faker.person.firstName());
        await page.getByTestId('address').fill(faker.location.streetAddress());
        await page.getByTestId('country').selectOption({ value: 'Canada' });
        await page.getByTestId('state').fill(faker.location.state());
        await page.getByTestId('city').fill(faker.location.city());
        await page.getByTestId('zipcode').fill(faker.location.zipCode());
        await page.getByTestId('mobile_number').fill(faker.phone.number());
        await page.getByTestId('create-account').click();

        // Redirection
        await expect(page).toHaveURL('account_created');
        await expect(page.getByTestId('account-created')).toBeVisible();
    });
});