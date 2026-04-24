import { Page, Locator, expect } from '@playwright/test';

export class ProductPage {
  page: Page;
  productName: Locator;
  productPrice: Locator;
  addToCartButton: Locator;
  addToFavoritesButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.productName = this.page.getByTestId('product-name').first();
    this.productPrice = this.page.getByTestId('unit-price');
    this.addToCartButton = this.page.getByTestId('add-to-cart');
    this.addToFavoritesButton = this.page.getByTestId('add-to-favorites');
  }

  async verifyProductDetails() {
    await expect(this.page).toHaveURL(/product/);
    await expect(this.productName).toHaveText('Combination Pliers');
    await expect(this.productPrice).toHaveText('14.15');
    await expect(this.addToCartButton).toBeVisible();
    await expect(this.addToFavoritesButton).toBeVisible();
  }
}