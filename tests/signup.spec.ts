import { test, expect } from '@playwright/test';
import { User } from '../datafactory/user';
import { SignUpPage } from '../pages/signup.page';
import { CookiesHelper } from '../helpers/CookiesHelper.helper';

let signUpPage: SignUpPage;
let cookiesHelper: CookiesHelper;

test.describe('signup', () => {
    test.beforeEach(async ({ page }) => {
        signUpPage = new SignUpPage(page);
        cookiesHelper = new CookiesHelper(page);

        await signUpPage.goto();
        await cookiesHelper.consentCookies();
    });

    test('user can signup', async ({ page }) => {
        const newUser = User.createNewUser();

        await signUpPage.new_user_signup(newUser);
    
        await expect(page).toHaveURL('signup');
        await expect(page.locator('.login-form')).toBeVisible();
        await expect(signUpPage.nameField).toHaveValue(newUser.name);
        await expect(signUpPage.emailField).toHaveValue(newUser.email);

        // Account information
        await signUpPage.account_information(newUser);

        // Address information
        await signUpPage.address_information(newUser);

        // Redirection
        await expect(page).toHaveURL('account_created');
        await expect(page.getByTestId('account-created')).toBeVisible();

    });
});