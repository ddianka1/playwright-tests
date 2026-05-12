import { Page, Locator, expect } from '@playwright/test';

export class AccountPage {
  page: Page;
  pageTitle: Locator;
  userName: Locator;

  constructor(page: Page) {
    this.page = page;

    this.pageTitle = this.page.getByTestId('page-title');
    this.userName = this.page.getByTestId('nav-menu');
  }

  async verifyAccountPage(): Promise<void> {
    await expect(this.page).toHaveURL('/account');
    await expect(this.pageTitle).toHaveText('My account');
    await expect(this.userName).toContainText('Jack Howe');
  }
}