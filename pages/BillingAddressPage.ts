import { Page, Locator } from '@playwright/test';

export class BillingAddressPage {
  page: Page;
  addressCheckoutPageProceedBtn: Locator;
    countryCheckoutPage: Locator;
    postalCodeCheckoutPage: Locator;
    houseNumberCheckoutPage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.countryCheckoutPage = this.page.getByTestId('country');
    this.postalCodeCheckoutPage = this.page.getByTestId('postal_code');
    this.houseNumberCheckoutPage = this.page.getByTestId('house_number');
    this.addressCheckoutPageProceedBtn = this.page.getByTestId('proceed-3');

  }

  async fillRequiredFields(): Promise<void>{
  await this.countryCheckoutPage.selectOption({ label: 'Ukraine' });
  await this.postalCodeCheckoutPage.fill('58000');
  await this.houseNumberCheckoutPage.fill('10');
}

  async proceedToPayment(): Promise<void>  {
    await this.addressCheckoutPageProceedBtn.click();
  }
}