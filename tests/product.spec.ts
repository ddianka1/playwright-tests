import { test, expect } from '../fixtures/app';

test('Verify product details @smoke', async ({ page, app }) => {
 
  // Checks
  await app.homePage.open();
  await app.homePage.openProductByName('Slip Joint Pliers');
  await expect(page).toHaveURL(/product/);
  const productName = 'Slip Joint Pliers';
  const productPrice = '9.17';
  await expect(app.productPage.productName)
    .toHaveText(productName);

  await expect(app.productPage.productPrice)
    .toHaveText(productPrice);

  await app.productPage.addToCart();

  await expect(app.productPage.alertMessage).toBeVisible();
  await expect(app.productPage.alertMessage)
    .toHaveText('Product added to shopping cart.');

  await expect(app.productPage.alertMessage)
    .toBeHidden({ timeout: 8000 });

  await expect(app.productPage.cartQuantity).toHaveValue("1");


  await app.homePage.openCart();

  await expect(page).toHaveURL(/checkout/);
  await expect(app.cartPage.productTitles).toHaveCount(1);
  await expect(app.cartPage.productTitles)
    .toHaveText('Slip Joint Pliers');

  await expect(app.cartPage.proceedToCheckoutButton)
    .toBeVisible();
});
