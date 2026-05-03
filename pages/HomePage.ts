import { Page } from '@playwright/test';
export class HomePage {
 page: Page;
 
constructor(page: Page) {
    this.page = page;
 }
async open() {
    await this.page.goto('/')
} 
async openProductByName(name: string) {
    await this.page
      .getByTestId('product-name')
      .filter({ hasText: name })
      .click();
 }

async sortBy(option: string) {
  await this.page.getByTestId('sort').selectOption(option);
}

async getProductNames() {
  return await this.page.getByTestId('product-name').allTextContents();
 }
async getProductPrices() {
  const prices = await this.page.getByTestId('product-price').allTextContents();
  // перетворюємо текст в числа
  return prices.map(item => parseFloat(item));
 }

async selectSubCategory(name: string) {
  await this.page.getByLabel(name, { exact: true }).check();
}
 
}