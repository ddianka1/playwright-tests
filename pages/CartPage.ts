import { Page, Locator } from '@playwright/test';

export class CartPage {
  page: Page;
  productTitles: Locator;
  proceedToCheckoutButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.productTitles = this.page.getByTestId('product-title');
    this.proceedToCheckoutButton = this.page.getByTestId('proceed-1');
 }
   async proceedToCheckout() {
  await this.proceedToCheckoutButton.click();
}
}