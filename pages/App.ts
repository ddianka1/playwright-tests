import { Page } from '@playwright/test';
import { HomePage } from './HomePage';
import { ProductPage } from './ProductPage';
import { CartPage } from './CartPage';
import { LoginPage } from './LoginPage';
import { AccountPage } from './AccountPage';
import { CheckoutPage } from './CheckoutPage';
import { BillingAddressPage } from './BillingAddressPage';
import {PaymentPage} from './PaymentPage';

export class App {
  homePage: HomePage;
  productPage: ProductPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  loginPage: LoginPage;
  accountPage: AccountPage;
  billingAddressPage: BillingAddressPage;
  paymentPage: PaymentPage;
  constructor(page: Page) {
    this.homePage = new HomePage(page);
    this.productPage = new ProductPage(page);
    this.cartPage = new CartPage(page);
    this.checkoutPage = new CheckoutPage(page);
    this.loginPage = new LoginPage(page);
    this.accountPage = new AccountPage(page);
    this.billingAddressPage = new BillingAddressPage(page);
    this.paymentPage = new PaymentPage(page);
  }
}