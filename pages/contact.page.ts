import { type Locator, type Page } from '@playwright/test';

export class ContactPage {
    readonly page: Page;

    readonly getInTouchHeader : Locator;
    readonly nameField : Locator;
    readonly emailField : Locator;
    readonly subjectField : Locator;
    readonly messageField : Locator;
    readonly fileUpload : Locator;
    readonly submitButton : Locator;
    readonly successMessage : Locator;

    constructor(page: Page) {
        this.page = page;
        this.getInTouchHeader = page.getByRole('heading', { name: 'Get In Touch' });
        this.nameField = page.getByTestId('name');
        this.emailField = page.getByTestId('email');
        this.subjectField = page.getByTestId('subject');
        this.messageField = page.getByTestId('message');
        this.fileUpload = page.locator("[name=upload_file]");
        this.submitButton = page.getByTestId('submit-button');
        this.successMessage = page.locator('.status.alert.alert-success');
    }

    async goto() {
        await this.page.goto('contact_us');
    }

    async fillContactForm(userName : string, email : string, subject : string, message : string) {
        await this.acceptDialog();
        await this.nameField.fill(userName);
        await this.emailField.fill(email);
        await this.subjectField.fill(subject);
        await this.messageField.fill(message);
        
        await this.fileUpload.setInputFiles({
            name: 'file.txt',
            mimeType: 'text/plain',
            buffer: Buffer.from('This is a test document.')
        });

        await this.submitButton.click();
        
    }

    async acceptDialog() { 
        this.page.on('dialog', async(dialog) => { 
            await dialog.accept(); 
        }); 
    }
}