import { type Locator, type Page } from '@playwright/test';
import { User } from '../datafactory/user';

export class SignUpPage {
    readonly page: Page;

    readonly signUpNameField: Locator;
    readonly signUpEmailField: Locator;
    readonly signUpButton: Locator;

    readonly mrTitleCheckbox: Locator;
    readonly mrsTitleCheckbox: Locator;
    readonly nameField: Locator;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly daySelect: Locator;
    readonly monthSelect: Locator;
    readonly yearSelect: Locator;
    readonly newsletterCheckbox: Locator;
    readonly offersCheckbox: Locator;
    
    readonly firstnameField: Locator;
    readonly lastnameField: Locator;
    readonly companyField: Locator;
    readonly addressField: Locator;
    readonly address2Field: Locator;
    readonly countrySelect: Locator;
    readonly stateField: Locator;
    readonly cityField: Locator;
    readonly zipcodeField: Locator;
    readonly mobileField: Locator;

    readonly createAccountButton: Locator;


    constructor(page: Page) {
        this.page = page;

        // New signup
        this.signUpNameField = page.getByTestId('signup-name');
        this.signUpEmailField = page.getByTestId('signup-email');
        this.signUpButton = page.getByTestId('signup-button');
        
        // Account information
        this.mrTitleCheckbox = page.locator('#id_gender1');
        this.mrsTitleCheckbox = page.locator('#id_gender2');
        this.nameField = page.getByTestId('name');
        this.emailField = page.getByTestId('email');
        this.passwordField = page.getByTestId('password');
        this.daySelect = page.getByTestId('days');
        this.monthSelect = page.getByTestId('months');
        this.yearSelect = page.getByTestId('years');
        this.newsletterCheckbox = page.getByRole('checkbox', { name: 'newsletter' });
        this.offersCheckbox = page.locator('#optin');
        
        // Address information
        this.firstnameField = page.getByTestId('first_name');
        this.lastnameField = page.getByTestId('last_name');
        this.companyField = page.getByTestId('company');
        this.addressField = page.getByTestId('address');
        this.address2Field = page.getByTestId('address2');
        this.countrySelect = page.getByTestId('country');
        this.stateField = page.getByTestId('state');
        this.cityField = page.getByTestId('city');
        this.zipcodeField = page.getByTestId('zipcode');
        this.mobileField = page.getByTestId('mobile_number');

        this.createAccountButton = page.getByTestId('create-account');
    }

    async goto() {
        await this.page.goto('signup');
        await this.page.locator('.fc-cta-consent').click();
    }

    async new_user_signup(user: User): Promise<void> {
        await this.signUpNameField.fill(user.name);
        await this.signUpEmailField.fill(user.email);
        await this.signUpButton.click();
    }

    async account_information(user: User): Promise<void> {
        await this.mrsTitleCheckbox.click();
        await this.passwordField.fill(user.password);
        await this.daySelect.selectOption(user.day);
        await this.monthSelect.selectOption(user.month);
        await this.yearSelect.selectOption(user.year);
        user.newsletter && await this.newsletterCheckbox.click();
        user.offers &&  await this.offersCheckbox.click();
    }

    async address_information(user: User): Promise<void> {
        await this.firstnameField.fill(user.firstname);
        await this.lastnameField.fill(user.lastname);
        await this.companyField.fill(user.company);
        await this.addressField.fill(user.address);
        await this.address2Field.fill(user.address2);
        await this.countrySelect.selectOption(user.country);
        await this.stateField.fill(user.state);
        await this.cityField.fill(user.city);
        await this.zipcodeField.fill(user.zipcode);
        await this.mobileField.fill(user.mobile);
        await this.createAccountButton.click();
    }
}