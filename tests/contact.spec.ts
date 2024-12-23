import { test, expect } from '@playwright/test';
import { CookiesHelper } from '../helpers/CookiesHelper.helper';
import { ContactPage } from '../pages/contact.page';
import { faker  } from '@faker-js/faker/locale/en';

let contactPage: ContactPage;
let cookiesHelper: CookiesHelper;

test.describe('contact form', () => {
    test.beforeEach(async ({ page }) => {
        contactPage = new ContactPage(page);
        cookiesHelper = new CookiesHelper(page);

        await contactPage.goto();
        await cookiesHelper.consentCookies();
        await expect(contactPage.getInTouchHeader).toBeVisible();
    });

    test('user can submit contact form', async ({ }) => {
        await contactPage.fillContactForm(
            faker.person.fullName(), 
            faker.internet.email(),
            faker.lorem.sentence(), 
            faker.lorem.paragraphs()
        );
        
        await expect(contactPage.successMessage).toHaveText("Success! Your details have been submitted successfully.");
    });
});