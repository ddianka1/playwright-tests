import { Page, Locator } from '@playwright/test';


export class HomePage {
 page: Page;
 productLink: Locator;

 constructor(page: Page) {
    this.page = page;
    this.productLink = this.page.locator('text=Combination Pliers');
}
async open() {
    await this.page.goto('/')
} 
async openProduct() {
    await this.productLink.click();
  }
}