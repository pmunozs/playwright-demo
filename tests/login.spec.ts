import { test, expect } from '@playwright/test';
import { CookiesHelper } from '../helpers/CookiesHelper.helper';
import { LoginPage } from '../pages/login.page';
import { faker  } from '@faker-js/faker/locale/en';

let loginPage : LoginPage;
let cookiesHelper : CookiesHelper;

test.describe('login', () => {
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        cookiesHelper = new CookiesHelper(page);

        await loginPage.goto();
        await cookiesHelper.consentCookies();
        await expect(page.getByText('Login to your account')).toBeVisible();
    });

    test('show error message when user is invalid', async({ page }) => {
        await loginPage.login(faker.internet.email(), faker.internet.password());
        await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();
    });
});