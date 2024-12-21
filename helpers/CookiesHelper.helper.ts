import { Locator, Page } from '@playwright/test';

export class CookiesHelper {

   private readonly page: Page;
   private readonly consentButton: Locator;
   private readonly manageOptionsButton: Locator;
   private readonly acceptAllButton: Locator;
   private readonly confirmChoicesButton: Locator;
    
   constructor(page: Page) {
    this.page                 = page;
    this.consentButton        = page.locator('.fc-cta-consent');
    this.manageOptionsButton  = page.locator('.fc-cta-manage-options');
    this.acceptAllButton      = page.locator('.fc-data-preferences-accept-all');
    this.confirmChoicesButton = page.locator('.fc-confirm-choices').first();
   }

   async consentCookies() {
    await this.consentButton.click();
   }

   async acceptAllCookies() {
    await this.manageOptionsButton.click();
    await this.acceptAllButton.click();
   }

   async confirmChoices() {
    await this.manageOptionsButton.click();
    await this.confirmChoicesButton.click();
   }
};