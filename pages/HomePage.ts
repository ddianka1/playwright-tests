import { Page, Locator } from '@playwright/test';

export class HomePage {
 page: Page;
 productNames: Locator;
 
constructor(page: Page) {
    this.page = page;
    this.productNames = this.page.getByTestId('product-name');
 }
async open(): Promise<void>  {
    await this.page.goto('/')
} 
async openProductByName(name: string): Promise<void> {
    await this.page
      .getByTestId('product-name')
      .filter({ hasText: name })
      .click();
 }

 async sortBy(value: 'name,asc' | 'name,desc' | 'price,asc' | 'price,desc'): Promise<void> {
  await this.page.getByTestId('sort').selectOption(value);
}

async getProductNames(): Promise<string[]> {
  return await this.page.getByTestId('product-name').allTextContents();
 }
async getProductPrices(): Promise<number[]> {
  const prices = await this.page.getByTestId('product-price').allTextContents();
  // перетворюємо текст в числа
  return prices.map(item => parseFloat(item));
 }

async selectSubCategory(name: string): Promise<void> {
  await this.page.getByLabel(name, { exact: true }).check();
}
 
async openCart(): Promise<void> {
    await this.page.getByTestId('nav-cart').click();
  }
  
 async getFirstProductName(): Promise<string | null> {
  return await this.page.getByTestId('product-name').first().textContent();
}

 async getFirstProductPrice(): Promise<string | null> {
  return await this.page.getByTestId('product-price').first().textContent();
}

async openFirstProduct(): Promise<void> {
  await this.page.getByTestId('product-name').first().click();
}
}