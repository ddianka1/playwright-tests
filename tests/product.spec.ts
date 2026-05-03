import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';

test('Verify product details', async ({ page }) => {
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  // Checks
  await homePage.open();
  await homePage.openProductByName('Slip Joint Pliers');
  await expect(page).toHaveURL(/product/);

  await expect(productPage.productName)
    .toHaveText('Slip Joint Pliers');

  await expect(productPage.productPrice)
    .toHaveText('9.17');

  await productPage.addToCart();

  await expect(productPage.alertMessage).toBeVisible();
  await expect(productPage.alertMessage)
    .toHaveText('Product added to shopping cart.');

  await expect(productPage.alertMessage)
    .toBeHidden({ timeout: 8000 });

  await expect(productPage.cartQuantity).toHaveValue("1");


  await cartPage.open();

  await expect(page).toHaveURL(/checkout/);
  await expect(cartPage.productTitles).toHaveCount(1);
  await expect(cartPage.productTitles)
    .toHaveText('Slip Joint Pliers');

  await expect(cartPage.proceedToCheckoutButton)
    .toBeVisible();
});
