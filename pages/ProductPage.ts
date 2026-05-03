import { Page, Locator} from '@playwright/test';

export class ProductPage {
  page: Page;
  productName: Locator;
  productPrice: Locator;
  addToCartButton: Locator;
  addToFavoritesButton: Locator;
  alertMessage: Locator;
  cartQuantity: Locator;

  constructor(page: Page) {
    this.page = page;

    this.productName = this.page.getByTestId('product-name');
    this.productPrice = this.page.getByTestId('unit-price');
    this.addToCartButton = this.page.getByTestId('add-to-cart');
    this.addToFavoritesButton = this.page.getByTestId('add-to-favorites');
    this.alertMessage = this.page.getByRole('alert');
    this.cartQuantity = this.page.getByTestId('quantity');
  }

  async addToCart() {
    await this.addToCartButton.click();
  }
}