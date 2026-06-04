import { test, expect } from '../fixtures/loggedInApp';

test('Verify logged in user can checkout product @smoke', async ({ loggedInApp }) => {

  let productName: string | null;
  let productPrice: string | null;

  await test.step('Open product page and save product data', async () => {
    await loggedInApp.homePage.open();

    productName = await loggedInApp.homePage.getFirstProductName();
    productPrice = await loggedInApp.homePage.getFirstProductPrice();

    await loggedInApp.homePage.openFirstProduct();
  });

  await test.step('Add product to cart', async () => {
    await loggedInApp.productPage.addToCart();

    await expect(loggedInApp.productPage.alertMessage)
      .toHaveText('Product added to shopping cart.');
  });

  await test.step('Verify product in cart', async () => {
    await loggedInApp.homePage.openCart();

    await expect(loggedInApp.cartPage.productTitles)
      .toHaveText(productName!.trim());
  });

  await test.step('Proceed to checkout', async () => {
    await loggedInApp.cartPage.proceedToCheckout();

    await expect(loggedInApp.checkoutPage.proceedToCheckoutButton)
      .toBeVisible();

    await loggedInApp.checkoutPage.proceedToBillingAddress();
  });

  await test.step('Fill billing address', async () => {
    await loggedInApp.billingAddressPage.fillRequiredFields();
    await loggedInApp.billingAddressPage.proceedToPayment();
  });

  await test.step('Complete payment', async () => {
    await loggedInApp.paymentPage.selectPaymentMethod('Credit Card');

    await loggedInApp.paymentPage.fillCardDetails(
      '1111-1111-1111-1111',
      '05/2030',
      '111',
      'Test User'
    );

    await loggedInApp.paymentPage.confirmPayment();
  });

  await test.step('Verify successful payment', async () => {
    await expect(loggedInApp.paymentPage.successMessage)
      .toBeVisible();
  });

});