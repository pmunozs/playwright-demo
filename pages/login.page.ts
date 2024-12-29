import { type Locator, type Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;

    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.emailField = page.getByTestId('login-email');
        this.passwordField = page.getByTestId('login-password');
        this.submitButton = page.getByTestId('login-button');
    }

    async goto() {
        await this.page.goto('login');
    }

    async login(email : string, password : string) {
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.submitButton.click();
    }
}