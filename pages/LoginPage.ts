import { Page, Locator } from '@playwright/test';

export class LoginPage {
  page: Page;
  emailField: Locator;
  passwordField: Locator;
  loginButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.emailField = this.page.getByTestId('email');
    this.passwordField = this.page.getByTestId('password');
    this.loginButton = this.page.getByTestId('login-submit');
  }

  async open() {
    await this.page.goto('/auth/login');
  }

  async performLogin(email: string, password: string) {
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }
}