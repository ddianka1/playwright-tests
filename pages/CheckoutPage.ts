import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
  page: Page;
  proceedToCheckoutButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.proceedToCheckoutButton = this.page.getByTestId('proceed-2');
  }

  async proceedToBillingAddress() {
    await this.proceedToCheckoutButton.click();
  }
}